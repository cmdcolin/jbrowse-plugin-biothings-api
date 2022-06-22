import {
  BaseFeatureDataAdapter,
  BaseOptions,
} from '@jbrowse/core/data_adapters/BaseAdapter'

import format from 'string-template'
import AdapterType from '@jbrowse/core/pluggableElementTypes/AdapterType'
import { Region } from '@jbrowse/core/util/types'
import { ObservableCreate } from '@jbrowse/core/util/rxjs'
import SimpleFeature, { Feature } from '@jbrowse/core/util/simpleFeature'
import AbortablePromiseCache from 'abortable-promise-cache'
import QuickLRU from '@jbrowse/core/util/QuickLRU'
import { ConfigurationSchema } from '@jbrowse/core/configuration'
import PluginManager from '@jbrowse/core/PluginManager'

async function myfetch(url: string) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${response.status} ${response.statusText}`)
  }
  return response.json()
}

function processFeat(f: any) {
  var start = +f._id.match(/chr.*:g.([0-9]+)/)[1]
  var feature = new SimpleFeature({
    id: f._id,
    data: {
      start: start - 1,
      end: start,
      id: f._id,
    },
  })

  function process(str: string, data: any, plus?: any) {
    if (!data) return

    if (str.match(/snpeff/)) {
      if (Array.isArray(data.ann)) {
        data.ann.forEach((fm: any, i: number) => {
          process(str + '_' + i, fm, i)
        })
        return
      } else if (data.ann) {
        delete data.ann.cds
        delete data.ann.cdna
        delete data.ann.protein
      } else {
        delete data.cds // sub-sub-objects, not super informative
        delete data.cdna
        delete data.protein
      }
    }
    if (str.match(/cadd/)) {
      if (data.encode) {
        process(str + '_encode', data.encode)
      }
      delete data.encode
    }
    if (str.match(/clinvar/)) {
      process(str + '_hgvs', data.hgvs)
      delete data.hgvs
      if (Array.isArray(data.rcv))
        data.rcv.forEach((elt: any, i: number) => {
          process(str + '_rcv' + i, elt)
        })
      else process(str + '_rcv', data.rcv)
      delete data.rcv
    }
    if (str.match(/dbnsfp/)) {
      if (data.fathmm) {
        for (var i in data.fathmm.score) {
          if (data.fathmm.score[i] === null) data.fathmm.score[i] = ''
        }
      }
      if (data.provean) {
        for (var j in data.provean.score) {
          if (data.provean.score[j] === null) data.provean.score[j] = ''
        }
      }
      if (data.sift) {
        for (var k in data.sift.score) {
          if (data.sift.score[k] === null) data.sift.score[k] = ''
        }
      }
    }
    if (str.match(/grasp/)) {
      if (Array.isArray(data.publication)) {
        data.publication.forEach((fm: any, iter: number) => {
          process(str + '_publication' + iter, fm)
        })
      }
      delete data.publication
    }
    // @ts-ignore
    feature.data[str + '_attrs' + (plus || '')] = {}
    var valkeys = Object.keys(data).filter((key) => {
      return typeof data[key] !== 'object'
    })

    var objkeys = Object.keys(data).filter((key) => {
      return typeof data[key] === 'object' && key !== 'gene'
    })

    valkeys.forEach((key) => {
      // @ts-ignore
      feature.data[str + '_attrs' + (plus || '')][key] = data[key]
    })
    objkeys.forEach((key) => {
      // @ts-ignore
      feature.data[str + '_' + key + (plus || '')] = data[key]
    })
  }

  process('cadd', f.cadd)
  process('cosmic', f.cosmic)
  process('dbnsfp', f.dbnsfp)
  process('dbsnp', f.dbsnp)
  process('evs', f.evs)
  process('exac', f.exac)
  process('mutdb', f.mutdb)
  process('wellderly', f.wellderly)
  process('snpedia', f.snpedia)
  process('snpeff', f.snpeff)
  process('vcf', f.vcf)
  process('grasp', f.grasp)
  process('gwassnps', f.gwassnps)
  process('docm', f.docm)
  process('emv', f.emv)
  process('clinvar', f.clinvar)
  process('uniprot', f.uniprot)

  return feature
}

export const configSchema = ConfigurationSchema(
  'MyVariantV1Adapter',
  {
    baseUrl: {
      type: 'string',
      defaultValue: '',
    },
    query: {
      type: 'string',
      defaultValue: '',
    },
  },
  { explicitlyTyped: true },
)

class AdapterClass extends BaseFeatureDataAdapter {
  private featureCache = new AbortablePromiseCache({
    cache: new QuickLRU({ maxSize: 100 }),
    fill: async (args) => {
      // @ts-ignore
      return this.readChunk(args)
    },
  })

  public async getRefNames(_: BaseOptions = {}) {
    return []
  }

  public getFeatures(query: Region, opts: BaseOptions = {}) {
    const baseUrl = this.getConf('baseUrl')
    const queryQ = this.getConf('query')
    return ObservableCreate<Feature>(async (observer) => {
      const chunkSize = 100000
      const s = query.start - (query.start % chunkSize)
      const e = query.end + (chunkSize - (query.end % chunkSize))
      const chunks = []
      for (let start = s; start < e; start += chunkSize) {
        chunks.push({
          refName: query.refName,
          start,
          end: start + chunkSize,
          assemblyName: query.assemblyName,
          baseUrl,
          query: queryQ,
        })
      }
      await Promise.all(
        chunks.map((chunk) => {
          const key = `${chunk.assemblyName},${chunk.refName},${chunk.start},${chunk.end}`
          const signal = opts.signal
          return this.featureCache
            .get(key, chunk, signal)
            .then((features: Feature[]) =>
              features.forEach((feature) => {
                if (
                  feature &&
                  !(feature.get('start') > query.end) &&
                  feature.get('end') >= query.start
                ) {
                  observer.next(feature)
                }
              }),
            )
        }),
      )

      observer.complete()
    }, opts.signal)
  }

  private async readChunk(chunk: {
    start: number
    end: number
    refName: string
    baseUrl: string
    query: string
  }) {
    const { start, end, refName, baseUrl, query } = chunk
    const ref = refName.startsWith('chr') ? refName : `chr${refName}`
    console.log({ baseUrl, ref, start, end })
    const newBase = format(baseUrl + query, { ref, start, end })

    //const hg19 = Number(baseUrl.includes('hg19'))
    const featureData = await myfetch(newBase)

    console.log({ featureData })
    var feats = featureData.hits || []
    const returnFeatures = [] as Feature[]

    const iter = async (scrollId: string, scroll: number) => {
      var scrollurl = format(
        baseUrl + 'query?scroll_id={scrollId}&size={size}&from={from}',
        { scrollId: scrollId, size: 1000, from: scroll },
      )
      const featureResults = await myfetch(scrollurl)
      var feathits = featureResults.hits || []
      feathits.forEach((f: unknown) => {
        var feat = processFeat(f)
        returnFeatures.push(feat)
      })
      console.log({ feats })
      if (feats.length >= 1000) {
        /* do nothing */
      } else {
        iter(scrollId, scroll + 1000)
      }
    }

    if (feats.length >= 1000) {
      // setup scroll query
      const fetchAllResult = await myfetch(newBase + '&fetch_all=true')
      iter(fetchAllResult._scroll_id, 0)
    } else if (feats) {
      feats.forEach((f: any) => {
        var feat = processFeat(f)
        returnFeatures.push(feat)
      })
      return returnFeatures
    }
    return []
  }

  public freeResources(/* { region } */) {}
}

export default function MyVariantAdapterF(pluginManager: PluginManager) {
  pluginManager.addAdapterType(() => {
    return new AdapterType({
      name: 'MyVariantV1Adapter',
      configSchema,
      AdapterClass,
    })
  })
}
