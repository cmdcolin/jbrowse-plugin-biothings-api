# Developers



## Modifying this plugin's code

To get a development environment setup for this plugin, run:

```
git clone https://github.com/cmdcolin/jbrowse-plugin-biothings-api.git
cd jbrowse-plugin-biothings-api
yarn
yarn start
```

Then open jbrowse-web (running on port 3000) with a cross origin ?config= paramter pointing to the dev server
that this plugin's yarn start command launches (port 9000)

http://localhost:3000/?config=http://localhost:9000/jbrowse_config_biothings.json



### Using in @jbrowse/react-linear-genome-view



For use in [`@jbrowse/react-linear-view`](https://www.npmjs.com/package/@jbrowse/react-linear-genome-view)

```
yarn add @gmod/jbrowse-plugin-biothings
```

And then you can import the module directly using ES6 imports


```tsx
import React from 'react'
import 'fontsource-roboto'
import {
  createViewState,
  createJBrowseTheme,
  JBrowseLinearGenomeView,
  ThemeProvider,
} from '@jbrowse/react-linear-genome-view'
import Biothings from 'jbrowse-plugin-biothings'

const theme = createJBrowseTheme()

function View() {
  const state = createViewState({
    assembly: {
      /* assembly */
    },
    tracks: [
      /* tracks */
    ],
    plugins: [Biothings],
  })
  return (
    <ThemeProvider theme={theme}>
      <JBrowseLinearGenomeView viewState={state} />
    </ThemeProvider>
  )
}
```
