(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@jbrowse/core/Plugin'), require('@jbrowse/core/util/rxjs'), require('@jbrowse/core/configuration')) :
  typeof define === 'function' && define.amd ? define(['exports', '@jbrowse/core/Plugin', '@jbrowse/core/util/rxjs', '@jbrowse/core/configuration'], factory) :
  (global = global || self, factory(global.JBrowsePluginBiothings = {}, global.JBrowseExports['@jbrowse/core/Plugin'], global.JBrowseExports['@jbrowse/core/util/rxjs'], global.JBrowseExports['@jbrowse/core/configuration']));
}(this, (function (exports, Plugin, rxjs, configuration) { 'use strict';

  Plugin = Plugin && Object.prototype.hasOwnProperty.call(Plugin, 'default') ? Plugin['default'] : Plugin;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
  });

  unwrapExports(interopRequireDefault);

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck$1;

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass$1;

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty$1;

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  var simpleFeature = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isFeature = isFeature;
  exports.default = void 0;

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _typeof2 = interopRequireDefault(_typeof_1);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  /**
   * Abstract feature object
   */
  function isFeature(thing) {
    return (0, _typeof2.default)(thing) === 'object' && thing !== null && typeof thing.get === 'function' && typeof thing.id === 'function';
  }

  function isSimpleFeatureSerialized(args) {
    return 'uniqueId' in args && (0, _typeof2.default)(args.data) !== 'object';
  }
  /**
   * Simple implementation of a feature object.
   */


  var SimpleFeature = /*#__PURE__*/function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    /**
     * @param args - SimpleFeature args
     *
     * Note: args.data.subfeatures can be an array of these same args,
     * which will be inflated to more instances of this class.
     */
    function SimpleFeature(args) {
      (0, _classCallCheck2.default)(this, SimpleFeature);
      (0, _defineProperty2.default)(this, "data", void 0);
      (0, _defineProperty2.default)(this, "parentHandle", void 0);
      (0, _defineProperty2.default)(this, "uniqueId", void 0);

      if (isSimpleFeatureSerialized(args)) {
        this.data = args;
      } else {
        this.data = args.data || {}; // load handle from args.parent (not args.data.parent)
        // this reason is because if args is an object, it likely isn't properly loaded with
        // parent as a Feature reference (probably a raw parent ID or something instead)

        this.parentHandle = args.parent;
      } // the feature id comes from
      // args.id, args.data.uniqueId, or args.uniqueId due to this initialization


      var id = isSimpleFeatureSerialized(args) ? args.uniqueId : args.id;

      if (id === undefined || id === null) {
        throw new Error('SimpleFeature requires a unique `id` or `data.uniqueId` attribute');
      }

      this.uniqueId = String(id);

      if (!(this.data.aliases || this.data.end - this.data.start >= 0)) {
        throw new Error("invalid feature data, end less than start. end: ".concat(this.data.end, " start: ").concat(this.data.start));
      } // inflate any subfeatures that are not already feature objects


      var subfeatures = this.data.subfeatures;

      if (subfeatures) {
        for (var i = 0; i < subfeatures.length; i += 1) {
          if (typeof subfeatures[i].get !== 'function') {
            subfeatures[i].strand = subfeatures[i].strand || this.data.strand;
            subfeatures[i] = new SimpleFeature({
              id: subfeatures[i].uniqueId || "".concat(id, "-").concat(i),
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data: subfeatures[i],
              parent: this
            });
          }
        }
      }
    }
    /**
     * Get a piece of data about the feature.  All features must have
     * 'start' and 'end', but everything else is optional.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any


    (0, _createClass2.default)(SimpleFeature, [{
      key: "get",
      value: function get(name) {
        return this.data[name];
      }
      /**
       * Set an item of data.
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

    }, {
      key: "set",
      value: function set(name, val) {
        this.data[name] = val;
      }
      /**
       * Get an array listing which data keys are present in this feature.
       */

    }, {
      key: "tags",
      value: function tags() {
        return Object.keys(this.data);
      }
      /**
       * Get the unique ID of this feature.
       */

    }, {
      key: "id",
      value: function id() {
        return this.uniqueId;
      }
      /**
       * Get this feature's parent feature, or undefined if none.
       */

    }, {
      key: "parent",
      value: function parent() {
        return this.parentHandle;
      }
      /**
       * Get an array of child features, or undefined if none.
       */

    }, {
      key: "children",
      value: function children() {
        return this.get('subfeatures');
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var d = _objectSpread(_objectSpread({}, this.data), {}, {
          uniqueId: this.id()
        });

        var p = this.parent();
        if (p) d.parentId = p.id();
        var c = this.children();
        if (c) d.subfeatures = c.map(function (child) {
          return child.toJSON();
        });
        return d;
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new SimpleFeature(_objectSpread({}, json));
      }
    }]);
    return SimpleFeature;
  }();

  exports.default = SimpleFeature;
  });

  var SimpleFeature = unwrapExports(simpleFeature);

  var cjsPonyfill = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', { value: true });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var Emitter = /*#__PURE__*/function () {
    function Emitter() {
      _classCallCheck(this, Emitter);

      Object.defineProperty(this, 'listeners', {
        value: {},
        writable: true,
        configurable: true
      });
    }

    _createClass(Emitter, [{
      key: "addEventListener",
      value: function addEventListener(type, callback) {
        if (!(type in this.listeners)) {
          this.listeners[type] = [];
        }

        this.listeners[type].push(callback);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, callback) {
        if (!(type in this.listeners)) {
          return;
        }

        var stack = this.listeners[type];

        for (var i = 0, l = stack.length; i < l; i++) {
          if (stack[i] === callback) {
            stack.splice(i, 1);
            return;
          }
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var _this = this;

        if (!(event.type in this.listeners)) {
          return;
        }

        var debounce = function debounce(callback) {
          setTimeout(function () {
            return callback.call(_this, event);
          });
        };

        var stack = this.listeners[event.type];

        for (var i = 0, l = stack.length; i < l; i++) {
          debounce(stack[i]);
        }

        return !event.defaultPrevented;
      }
    }]);

    return Emitter;
  }();

  var AbortSignal = /*#__PURE__*/function (_Emitter) {
    _inherits(AbortSignal, _Emitter);

    var _super = _createSuper(AbortSignal);

    function AbortSignal() {
      var _this2;

      _classCallCheck(this, AbortSignal);

      _this2 = _super.call(this); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
      // constructor has failed to run, then "this.listeners" will still be undefined and then we call
      // the parent constructor directly instead as a workaround. For general details, see babel bug:
      // https://github.com/babel/babel/issues/3041
      // This hack was added as a fix for the issue described here:
      // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042

      if (!_this2.listeners) {
        Emitter.call(_assertThisInitialized(_this2));
      } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl


      Object.defineProperty(_assertThisInitialized(_this2), 'aborted', {
        value: false,
        writable: true,
        configurable: true
      });
      Object.defineProperty(_assertThisInitialized(_this2), 'onabort', {
        value: null,
        writable: true,
        configurable: true
      });
      return _this2;
    }

    _createClass(AbortSignal, [{
      key: "toString",
      value: function toString() {
        return '[object AbortSignal]';
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (event.type === 'abort') {
          this.aborted = true;

          if (typeof this.onabort === 'function') {
            this.onabort.call(this, event);
          }
        }

        _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
      }
    }]);

    return AbortSignal;
  }(Emitter);
  var AbortController = /*#__PURE__*/function () {
    function AbortController() {
      _classCallCheck(this, AbortController);

      // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
      // we want Object.keys(new AbortController()) to be [] for compat with the native impl
      Object.defineProperty(this, 'signal', {
        value: new AbortSignal(),
        writable: true,
        configurable: true
      });
    }

    _createClass(AbortController, [{
      key: "abort",
      value: function abort() {
        var event;

        try {
          event = new Event('abort');
        } catch (e) {
          if (typeof document !== 'undefined') {
            if (!document.createEvent) {
              // For Internet Explorer 8:
              event = document.createEventObject();
              event.type = 'abort';
            } else {
              // For Internet Explorer 11:
              event = document.createEvent('Event');
              event.initEvent('abort', false, false);
            }
          } else {
            // Fallback where document isn't available:
            event = {
              type: 'abort',
              bubbles: false,
              cancelable: false
            };
          }
        }

        this.signal.dispatchEvent(event);
      }
    }, {
      key: "toString",
      value: function toString() {
        return '[object AbortController]';
      }
    }]);

    return AbortController;
  }();

  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    // These are necessary to make sure that we get correct output for:
    // Object.prototype.toString.call(new AbortController())
    AbortController.prototype[Symbol.toStringTag] = 'AbortController';
    AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
  }

  function polyfillNeeded(self) {
    if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
      return true;
    } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
    // defining window.Request, and this polyfill need to work on top of unfetch
    // so the below feature detection needs the !self.AbortController part.
    // The Request.prototype check is also needed because Safari versions 11.1.2
    // up to and including 12.1.x has a window.AbortController present but still
    // does NOT correctly implement abortable fetch:
    // https://bugs.webkit.org/show_bug.cgi?id=174980#c2


    return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
  }

  /**
   * Note: the "fetch.Request" default value is available for fetch imported from
   * the "node-fetch" package and not in browsers. This is OK since browsers
   * will be importing umd-polyfill.js from that path "self" is passed the
   * decorator so the default value will not be used (because browsers that define
   * fetch also has Request). One quirky setup where self.fetch exists but
   * self.Request does not is when the "unfetch" minimal fetch polyfill is used
   * on top of IE11; for this case the browser will try to use the fetch.Request
   * default value which in turn will be undefined but then then "if (Request)"
   * will ensure that you get a patched fetch but still no Request (as expected).
   * @param {fetch, Request = fetch.Request}
   * @returns {fetch: abortableFetch, Request: AbortableRequest}
   */

  function abortableFetchDecorator(patchTargets) {
    if ('function' === typeof patchTargets) {
      patchTargets = {
        fetch: patchTargets
      };
    }

    var _patchTargets = patchTargets,
        fetch = _patchTargets.fetch,
        _patchTargets$Request = _patchTargets.Request,
        NativeRequest = _patchTargets$Request === void 0 ? fetch.Request : _patchTargets$Request,
        NativeAbortController = _patchTargets.AbortController,
        _patchTargets$__FORCE = _patchTargets.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,
        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL = _patchTargets$__FORCE === void 0 ? false : _patchTargets$__FORCE;

    if (!polyfillNeeded({
      fetch: fetch,
      Request: NativeRequest,
      AbortController: NativeAbortController,
      __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
    })) {
      return {
        fetch: fetch,
        Request: Request
      };
    }

    var Request = NativeRequest; // Note that the "unfetch" minimal fetch polyfill defines fetch() without
    // defining window.Request, and this polyfill need to work on top of unfetch
    // hence we only patch it if it's available. Also we don't patch it if signal
    // is already available on the Request prototype because in this case support
    // is present and the patching below can cause a crash since it assigns to
    // request.signal which is technically a read-only property. This latter error
    // happens when you run the main5.js node-fetch example in the repo
    // "abortcontroller-polyfill-examples". The exact error is:
    //   request.signal = init.signal;
    //   ^
    // TypeError: Cannot set property signal of #<Request> which has only a getter

    if (Request && !Request.prototype.hasOwnProperty('signal') || __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
      Request = function Request(input, init) {
        var signal;

        if (init && init.signal) {
          signal = init.signal; // Never pass init.signal to the native Request implementation when the polyfill has
          // been installed because if we're running on top of a browser with a
          // working native AbortController (i.e. the polyfill was installed due to
          // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
          // fake AbortSignal to the native fetch will trigger:
          // TypeError: Failed to construct 'Request': member signal is not of type AbortSignal.

          delete init.signal;
        }

        var request = new NativeRequest(input, init);

        if (signal) {
          Object.defineProperty(request, 'signal', {
            writable: false,
            enumerable: false,
            configurable: true,
            value: signal
          });
        }

        return request;
      };

      Request.prototype = NativeRequest.prototype;
    }

    var realFetch = fetch;

    var abortableFetch = function abortableFetch(input, init) {
      var signal = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : undefined;

      if (signal) {
        var abortError;

        try {
          abortError = new DOMException('Aborted', 'AbortError');
        } catch (err) {
          // IE 11 does not support calling the DOMException constructor, use a
          // regular error object on it instead.
          abortError = new Error('Aborted');
          abortError.name = 'AbortError';
        } // Return early if already aborted, thus avoiding making an HTTP request


        if (signal.aborted) {
          return Promise.reject(abortError);
        } // Turn an event into a promise, reject it once `abort` is dispatched


        var cancellation = new Promise(function (_, reject) {
          signal.addEventListener('abort', function () {
            return reject(abortError);
          }, {
            once: true
          });
        });

        if (init && init.signal) {
          // Never pass .signal to the native implementation when the polyfill has
          // been installed because if we're running on top of a browser with a
          // working native AbortController (i.e. the polyfill was installed due to
          // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
          // fake AbortSignal to the native fetch will trigger:
          // TypeError: Failed to execute 'fetch' on 'Window': member signal is not of type AbortSignal.
          delete init.signal;
        } // Return the fastest promise (don't need to wait for request to finish)


        return Promise.race([cancellation, realFetch(input, init)]);
      }

      return realFetch(input, init);
    };

    return {
      fetch: abortableFetch,
      Request: Request
    };
  }

  exports.AbortController = AbortController;
  exports.AbortSignal = AbortSignal;
  exports.abortableFetch = abortableFetchDecorator;
  });

  unwrapExports(cjsPonyfill);

  var abortcontrollerPonyfill = createCommonjsModule(function (module, exports) {
  /* eslint-disable */
  Object.defineProperty(exports, "__esModule", { value: true });

  var getGlobal = function () {
      // the only reliable means to get the global object is
      // `Function('return this')()`
      // However, this causes CSP violations in Chrome apps.
      if (typeof self !== 'undefined') {
          return self;
      }
      if (typeof window !== 'undefined') {
          return window;
      }
      if (typeof commonjsGlobal !== 'undefined') {
          return commonjsGlobal;
      }
      throw new Error('unable to locate global object');
  };
  //@ts-ignore
  var AbortController = typeof getGlobal().AbortController === 'undefined' ? cjsPonyfill.AbortController : getGlobal().AbortController;
  exports.AbortController = AbortController;
  //@ts-ignore
  var AbortSignal = typeof getGlobal().AbortController === 'undefined' ? cjsPonyfill.AbortSignal : getGlobal().AbortSignal;
  exports.AbortSignal = AbortSignal;
  });

  unwrapExports(abortcontrollerPonyfill);

  var AggregateAbortController_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });

  var NullSignal = /** @class */ (function () {
      function NullSignal() {
      }
      return NullSignal;
  }());
  /**
   * aggregates a number of abort signals, will only fire the aggregated
   * abort if all of the input signals have been aborted
   */
  var AggregateAbortController = /** @class */ (function () {
      function AggregateAbortController() {
          this.signals = new Set();
          this.abortController = new abortcontrollerPonyfill.AbortController();
      }
      /**
       * @param {AbortSignal} [signal] optional AbortSignal to add. if falsy,
       *  will be treated as a null-signal, and this abortcontroller will no
       *  longer be abortable.
       */
      //@ts-ignore
      AggregateAbortController.prototype.addSignal = function (signal) {
          var _this = this;
          if (signal === void 0) { signal = new NullSignal(); }
          if (this.signal.aborted) {
              throw new Error('cannot add a signal, already aborted!');
          }
          // note that a NullSignal will never fire, so if we
          // have one this thing will never actually abort
          this.signals.add(signal);
          if (signal.aborted) {
              // handle the abort immediately if it is already aborted
              // for some reason
              this.handleAborted(signal);
          }
          else if (typeof signal.addEventListener === 'function') {
              signal.addEventListener('abort', function () {
                  _this.handleAborted(signal);
              });
          }
      };
      AggregateAbortController.prototype.handleAborted = function (signal) {
          this.signals.delete(signal);
          if (this.signals.size === 0) {
              this.abortController.abort();
          }
      };
      Object.defineProperty(AggregateAbortController.prototype, "signal", {
          get: function () {
              return this.abortController.signal;
          },
          enumerable: true,
          configurable: true
      });
      AggregateAbortController.prototype.abort = function () {
          this.abortController.abort();
      };
      return AggregateAbortController;
  }());
  exports.default = AggregateAbortController;
  });

  unwrapExports(AggregateAbortController_1);

  var AbortablePromiseCache_1 = createCommonjsModule(function (module, exports) {
  var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });

  var AggregateAbortController_1$1 = __importDefault(AggregateAbortController_1);
  var AbortablePromiseCache = /** @class */ (function () {
      function AbortablePromiseCache(_a) {
          var fill = _a.fill, cache = _a.cache;
          if (typeof fill !== 'function')
              throw new TypeError('must pass a fill function');
          if (typeof cache !== 'object')
              throw new TypeError('must pass a cache object');
          if (typeof cache.get !== 'function' ||
              typeof cache.set !== 'function' ||
              typeof cache.delete !== 'function')
              throw new TypeError('cache must implement get(key), set(key, val), and and delete(key)');
          this.cache = cache;
          this.fillCallback = fill;
      }
      AbortablePromiseCache.isAbortException = function (exception) {
          return (
          // DOMException
          exception.name === 'AbortError' ||
              // standard-ish non-DOM abort exception
              //@ts-ignore
              exception.code === 'ERR_ABORTED' ||
              // stringified DOMException
              exception.message === 'AbortError: aborted' ||
              // stringified standard-ish exception
              exception.message === 'Error: aborted');
      };
      AbortablePromiseCache.prototype.evict = function (key, entry) {
          if (this.cache.get(key) === entry)
              this.cache.delete(key);
      };
      AbortablePromiseCache.prototype.fill = function (key, data, signal) {
          var _this = this;
          var aborter = new AggregateAbortController_1$1.default();
          var newEntry = {
              aborter: aborter,
              promise: this.fillCallback(data, aborter.signal),
              settled: false,
              get aborted() {
                  return this.aborter.signal.aborted;
              },
          };
          newEntry.aborter.addSignal(signal);
          // remove the fill from the cache when its abortcontroller fires, if still in there
          newEntry.aborter.signal.addEventListener('abort', function () {
              _this.evict(key, newEntry);
          });
          // chain off the cached promise to record when it settles
          newEntry.promise
              .then(function () {
              newEntry.settled = true;
          }, function (exception) {
              newEntry.settled = true;
              // if the fill throws an error (including abort) and is still in the cache, remove it
              _this.evict(key, newEntry);
          })
              .catch(function (e) {
              // this will only be reached if there is some kind of
              // bad bug in this library
              console.error(e);
              throw e;
          });
          this.cache.set(key, newEntry);
      };
      AbortablePromiseCache.checkSinglePromise = function (promise, signal) {
          // check just this signal for having been aborted, and abort the
          // promise if it was, regardless of what happened with the cached
          // response
          function checkForSingleAbort() {
              if (signal && signal.aborted)
                  throw Object.assign(new Error('aborted'), { code: 'ERR_ABORTED' });
          }
          return promise.then(function (result) {
              checkForSingleAbort();
              return result;
          }, function (error) {
              checkForSingleAbort();
              throw error;
          });
      };
      AbortablePromiseCache.prototype.has = function (key) {
          return this.cache.has(key);
      };
      /**
       * @param {any} key cache key to use for this request
       * @param {any} data data passed as the first argument to the fill callback
       * @param {AbortSignal} [signal] optional AbortSignal object that aborts the request
       */
      AbortablePromiseCache.prototype.get = function (key, data, signal) {
          if (!signal && data instanceof abortcontrollerPonyfill.AbortSignal)
              throw new TypeError('second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?');
          var cacheEntry = this.cache.get(key);
          if (cacheEntry) {
              if (cacheEntry.aborted) {
                  // if it's aborted but has not realized it yet, evict it and redispatch
                  this.evict(key, cacheEntry);
                  return this.get(key, data, signal);
              }
              if (cacheEntry.settled)
                  // too late to abort, just return it
                  return cacheEntry.promise;
              // request is in-flight, add this signal to its list of signals,
              // or if there is no signal, the aborter will become non-abortable
              cacheEntry.aborter.addSignal(signal);
              return AbortablePromiseCache.checkSinglePromise(cacheEntry.promise, signal);
          }
          // if we got here, it is not in the cache. fill.
          this.fill(key, data, signal);
          return AbortablePromiseCache.checkSinglePromise(this.cache.get(key).promise, signal);
      };
      /**
       * delete the given entry from the cache. if it exists and its fill request has
       * not yet settled, the fill will be signaled to abort.
       *
       * @param {any} key
       */
      AbortablePromiseCache.prototype.delete = function (key) {
          var cachedEntry = this.cache.get(key);
          if (cachedEntry) {
              if (!cachedEntry.settled)
                  cachedEntry.aborter.abort();
              this.cache.delete(key);
          }
      };
      /**
       * Clear all requests from the cache. Aborts any that have not settled.
       * @returns {number} count of entries deleted
       */
      AbortablePromiseCache.prototype.clear = function () {
          // iterate without needing regenerator-runtime
          var keyIter = this.cache.keys();
          var deleteCount = 0;
          for (var result = keyIter.next(); !result.done; result = keyIter.next()) {
              this.delete(result.value);
              deleteCount += 1;
          }
          return deleteCount;
      };
      return AbortablePromiseCache;
  }());
  exports.default = AbortablePromiseCache;
  });

  unwrapExports(AbortablePromiseCache_1);

  var dist = createCommonjsModule(function (module, exports) {
  var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var AbortablePromiseCache_1$1 = __importDefault(AbortablePromiseCache_1);
  exports.default = AbortablePromiseCache_1$1.default;
  });

  var AbortablePromiseCache = unwrapExports(dist);

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var arrayWithHoles = _arrayWithHoles;

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  var iterableToArrayLimit = _iterableToArrayLimit;

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  var arrayLikeToArray = _arrayLikeToArray$1;

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  var unsupportedIterableToArray = _unsupportedIterableToArray$1;

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var nonIterableRest = _nonIterableRest;

  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
  }

  var slicedToArray = _slicedToArray;

  var QuickLRU_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _slicedToArray2 = interopRequireDefault(slicedToArray);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  /* eslint-disable no-underscore-dangle */

  /**
   * Heavily based on [quick-lru](https://www.npmjs.com/package/quick-lru)
   * (quick-lru didn't work for us because the export wouldn't compile in Webpack
   * properly)
   */
  var QuickLRU = /*#__PURE__*/function () {
    function QuickLRU() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _classCallCheck2.default)(this, QuickLRU);

      if (!(options.maxSize && options.maxSize > 0)) {
        throw new TypeError('`maxSize` must be a number greater than 0');
      }

      this.maxSize = options.maxSize;
      this.cache = new Map();
      this.oldCache = new Map();
      this._size = 0;
    }

    (0, _createClass2.default)(QuickLRU, [{
      key: "_set",
      value: function _set(key, value) {
        this.cache.set(key, value);
        this._size += 1;

        if (this._size >= this.maxSize) {
          this._size = 0;
          this.oldCache = this.cache;
          this.cache = new Map();
        }
      }
    }, {
      key: "get",
      value: function get(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }

        if (this.oldCache.has(key)) {
          var value = this.oldCache.get(key);
          this.oldCache.delete(key);

          this._set(key, value);

          return value;
        }

        return undefined;
      }
    }, {
      key: "set",
      value: function set(key, value) {
        if (this.cache.has(key)) {
          this.cache.set(key, value);
        } else {
          this._set(key, value);
        }

        return this;
      }
    }, {
      key: "has",
      value: function has(key) {
        return this.cache.has(key) || this.oldCache.has(key);
      }
    }, {
      key: "peek",
      value: function peek(key) {
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }

        if (this.oldCache.has(key)) {
          return this.oldCache.get(key);
        }

        return undefined;
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        var deleted = this.cache.delete(key);

        if (deleted) {
          this._size -= 1;
        }

        return this.oldCache.delete(key) || deleted;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
      }
    }, {
      key: "keys",
      value: /*#__PURE__*/regeneratorRuntime.mark(function keys() {
        var _iterator, _step, _step$value, key;

        return regeneratorRuntime.wrap(function keys$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(this);
                _context.prev = 1;

                _iterator.s();

              case 3:
                if ((_step = _iterator.n()).done) {
                  _context.next = 9;
                  break;
                }

                _step$value = (0, _slicedToArray2.default)(_step.value, 1), key = _step$value[0];
                _context.next = 7;
                return key;

              case 7:
                _context.next = 3;
                break;

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);

                _iterator.e(_context.t0);

              case 14:
                _context.prev = 14;

                _iterator.f();

                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, keys, this, [[1, 11, 14, 17]]);
      })
    }, {
      key: "values",
      value: /*#__PURE__*/regeneratorRuntime.mark(function values() {
        var _iterator2, _step2, _step2$value, value;

        return regeneratorRuntime.wrap(function values$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iterator2 = _createForOfIteratorHelper(this);
                _context2.prev = 1;

                _iterator2.s();

              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 9;
                  break;
                }

                _step2$value = (0, _slicedToArray2.default)(_step2.value, 2), value = _step2$value[1];
                _context2.next = 7;
                return value;

              case 7:
                _context2.next = 3;
                break;

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](1);

                _iterator2.e(_context2.t0);

              case 14:
                _context2.prev = 14;

                _iterator2.f();

                return _context2.finish(14);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, values, this, [[1, 11, 14, 17]]);
      })
    }, {
      key: Symbol.iterator,
      value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
        var _iterator3, _step3, item, _iterator4, _step4, _item, _item2, key;

        return regeneratorRuntime.wrap(function value$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _iterator3 = _createForOfIteratorHelper(this.cache);
                _context3.prev = 1;

                _iterator3.s();

              case 3:
                if ((_step3 = _iterator3.n()).done) {
                  _context3.next = 9;
                  break;
                }

                item = _step3.value;
                _context3.next = 7;
                return item;

              case 7:
                _context3.next = 3;
                break;

              case 9:
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);

                _iterator3.e(_context3.t0);

              case 14:
                _context3.prev = 14;

                _iterator3.f();

                return _context3.finish(14);

              case 17:
                _iterator4 = _createForOfIteratorHelper(this.oldCache);
                _context3.prev = 18;

                _iterator4.s();

              case 20:
                if ((_step4 = _iterator4.n()).done) {
                  _context3.next = 28;
                  break;
                }

                _item = _step4.value;
                _item2 = (0, _slicedToArray2.default)(_item, 1), key = _item2[0];

                if (this.cache.has(key)) {
                  _context3.next = 26;
                  break;
                }

                _context3.next = 26;
                return _item;

              case 26:
                _context3.next = 20;
                break;

              case 28:
                _context3.next = 33;
                break;

              case 30:
                _context3.prev = 30;
                _context3.t1 = _context3["catch"](18);

                _iterator4.e(_context3.t1);

              case 33:
                _context3.prev = 33;

                _iterator4.f();

                return _context3.finish(33);

              case 36:
              case "end":
                return _context3.stop();
            }
          }
        }, value, this, [[1, 11, 14, 17], [18, 30, 33, 36]]);
      })
    }, {
      key: "size",
      get: function get() {
        var oldCacheSize = 0;

        var _iterator5 = _createForOfIteratorHelper(this.oldCache.keys()),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var key = _step5.value;

            if (!this.cache.has(key)) {
              oldCacheSize += 1;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        return this._size + oldCacheSize;
      }
    }]);
    return QuickLRU;
  }();

  var _default = QuickLRU;
  exports.default = _default;
  });

  var QuickLRU = unwrapExports(QuickLRU_1);

  var configSchema = /*#__PURE__*/configuration.ConfigurationSchema('MyGeneV3Adapter', {
    baseUrl: {
      type: 'string',
      defaultValue: // eslint-disable-next-line no-template-curly-in-string
      'https://mygene.info/v3/query?q=${ref}:${start}-${end}&size=1000&fields=all&size=1000&species=human'
    }
  }, {
    explicitlyTyped: true
  }); // translate thickStart/thickEnd to utr's
  // adapted from BigBedAdapter for ucsc thickStart/thickEnd
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  function cdsStartEndProcessor(feature) {
    // split the blocks into UTR, CDS, and exons
    var thickStart = feature.thickStart,
        thickEnd = feature.thickEnd,
        strand = feature.strand,
        children = feature.subfeatures;

    if (!thickStart && !thickEnd) {
      return feature;
    }

    var blocks = children ? children.sort(function (a, b) {
      return a.start - b.start;
    }) : []; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    var newChildren = [];
    blocks.forEach(function (block) {
      var start = block.start,
          end = block.end;

      if (thickStart >= end) {
        // left-side UTR
        var prime = strand > 0 ? 'five' : 'three';
        newChildren.push({
          type: "".concat(prime, "_prime_UTR"),
          start: start,
          end: end
        });
      } else if (thickStart > start && thickStart < end && thickEnd >= end) {
        // UTR | CDS
        var _prime = strand > 0 ? 'five' : 'three';

        newChildren.push({
          type: "".concat(_prime, "_prime_UTR"),
          start: start,
          end: thickStart
        }, {
          type: 'CDS',
          start: thickStart,
          end: end
        });
      } else if (thickStart <= start && thickEnd >= end) {
        // CDS
        newChildren.push({
          type: 'CDS',
          start: start,
          end: end
        });
      } else if (thickStart > start && thickStart < end && thickEnd < end) {
        // UTR | CDS | UTR
        var leftPrime = strand > 0 ? 'five' : 'three';
        var rightPrime = strand > 0 ? 'three' : 'five';
        newChildren.push({
          type: "".concat(leftPrime, "_prime_UTR"),
          start: start,
          end: thickStart
        }, {
          type: "CDS",
          start: thickStart,
          end: thickEnd
        }, {
          type: "".concat(rightPrime, "_prime_UTR"),
          start: thickEnd,
          end: end
        });
      } else if (thickStart <= start && thickEnd > start && thickEnd < end) {
        // CDS | UTR
        var _prime2 = strand > 0 ? 'three' : 'five';

        newChildren.push({
          type: "CDS",
          start: start,
          end: thickEnd
        }, {
          type: "".concat(_prime2, "_prime_UTR"),
          start: thickEnd,
          end: end
        });
      } else if (thickEnd <= start) {
        // right-side UTR
        var _prime3 = strand > 0 ? 'three' : 'five';

        newChildren.push({
          type: "".concat(_prime3, "_prime_UTR"),
          start: start,
          end: end
        });
      }
    });
    return _objectSpread2(_objectSpread2({}, feature), {}, {
      subfeatures: newChildren,
      type: 'mRNA'
    });
  }

  function getAdapterClass(pluginManager) {
    var jbrequire = pluginManager.jbrequire;

    var _jbrequire = jbrequire('@jbrowse/core/data_adapters/BaseAdapter'),
        BaseFeatureDataAdapter = _jbrequire.BaseFeatureDataAdapter; // random notes for possible email to team: cdk11a/cdk11b return pretty bad data
    // for their transcripts, so they are filtered out


    return /*#__PURE__*/function (_BaseFeatureDataAdapt) {
      _inherits(AdapterClass, _BaseFeatureDataAdapt);

      var _super = _createSuper(AdapterClass);

      function AdapterClass(config) {
        var _this;

        _classCallCheck(this, AdapterClass);

        _this = _super.call(this, config);
        _this.featureCache = new AbortablePromiseCache({
          cache: new QuickLRU({
            maxSize: 100
          }),
          fill: function () {
            var _fill = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(args) {
              return runtime_1.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", _this.readChunk(args));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function fill(_x) {
              return _fill.apply(this, arguments);
            }

            return fill;
          }()
        });
        _this.config = config;
        return _this;
      }

      _createClass(AdapterClass, [{
        key: "getRefNames",
        value: function () {
          var _getRefNames = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {

            return runtime_1.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", []);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function getRefNames() {
            return _getRefNames.apply(this, arguments);
          }

          return getRefNames;
        }()
      }, {
        key: "getFeatures",
        value: function getFeatures(query) {
          var _this2 = this;

          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var baseUrl = configuration.readConfObject(this.config, 'baseUrl');
          return rxjs.ObservableCreate( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(observer) {
              var chunkSize, s, e, chunks, start;
              return runtime_1.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      chunkSize = 100000;
                      s = query.start - query.start % chunkSize;
                      e = query.end + (chunkSize - query.end % chunkSize);
                      chunks = [];

                      for (start = s; start < e; start += chunkSize) {
                        chunks.push({
                          refName: query.refName,
                          start: start,
                          end: start + chunkSize,
                          assemblyName: query.assemblyName,
                          baseUrl: baseUrl
                        });
                      }

                      _context4.next = 7;
                      return Promise.all( // @ts-ignore
                      chunks.map( /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(chunk) {
                          var features;
                          return runtime_1.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return _this2.featureCache.get("".concat(chunk.assemblyName, ",").concat(chunk.refName, ",").concat(chunk.start, ",").concat(chunk.end), chunk, opts.signal);

                                case 2:
                                  features = _context3.sent;
                                  // @ts-ignore
                                  features.forEach(function (feature) {
                                    if (feature && !(feature.get('start') > query.end) && feature.get('end') >= query.start) {
                                      observer.next(feature);
                                    }
                                  });

                                case 4:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        return function (_x3) {
                          return _ref2.apply(this, arguments);
                        };
                      }()));

                    case 7:
                      observer.complete();

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }(), opts.signal);
        }
      }, {
        key: "interpolate",
        value: function interpolate(str, params) {
          var names = Object.keys(params);
          var vals = Object.values(params); // eslint-disable-next-line @typescript-eslint/no-implied-eval,no-new-func

          return _construct(Function, _toConsumableArray(names).concat(["return `".concat(str, "`;")])).apply(void 0, _toConsumableArray(vals));
        }
      }, {
        key: "readChunk",
        value: function () {
          var _readChunk = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(chunk) {
            var start, end, refName, baseUrl, ref, url, hg19, response, featureData;
            return runtime_1.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    start = chunk.start, end = chunk.end, refName = chunk.refName, baseUrl = chunk.baseUrl;
                    ref = refName.startsWith('chr') ? refName : "chr".concat(refName);
                    url = this.interpolate(baseUrl, {
                      ref: ref,
                      start: start,
                      end: end
                    });
                    hg19 = Number(baseUrl.includes('hg19'));
                    _context5.next = 6;
                    return fetch(url);

                  case 6:
                    response = _context5.sent;

                    if (response.ok) {
                      _context5.next = 9;
                      break;
                    }

                    throw new Error(response.statusText);

                  case 9:
                    _context5.next = 11;
                    return response.json();

                  case 11:
                    featureData = _context5.sent;
                    return _context5.abrupt("return", featureData.hits.map(function (feature) {
                      var genomic_pos = feature.genomic_pos,
                          genomic_pos_hg19 = feature.genomic_pos_hg19,
                          exons = feature.exons,
                          exons_hg19 = feature.exons_hg19,
                          _id = feature._id,
                          rest = _objectWithoutProperties(feature, ["genomic_pos", "genomic_pos_hg19", "exons", "exons_hg19", "_id", "_score", "_license"]);

                      var genomicPos = [genomic_pos, genomic_pos_hg19][hg19];

                      if (Array.isArray(genomicPos)) {
                        genomicPos = genomicPos.find(function (pos) {
                          return refName.replace('chr', '') === pos.chr;
                        });
                      }

                      var transcriptData = [exons, exons_hg19][hg19];

                      if (!transcriptData) {
                        return new SimpleFeature({
                          id: _id,
                          data: _objectSpread2(_objectSpread2({}, rest), {}, {
                            refName: genomicPos.chr,
                            start: genomicPos.start,
                            end: genomicPos.end,
                            strand: genomicPos.strand,
                            name: feature.symbol,
                            description: feature.name,
                            type: 'gene'
                          })
                        });
                      } // this is a weird hack because mygene.info returns features on other
                      // chromosomes that are close homologues, and the homologues aren't even
                      // clear on whether they are located on the chromosome you are querying
                      // on because it returns a set of locations of all the other homologues,
                      // so this tries to filter those out


                      if (feature.map_location && !feature.map_location.match("^".concat(genomicPos.chr, "(p|q)"))) {
                        return null;
                      }

                      if (transcriptData) {
                        // @ts-ignore
                        transcriptData = transcriptData.filter(function (transcript) {
                          var _feature$map_location;

                          return (_feature$map_location = feature.map_location) === null || _feature$map_location === void 0 ? void 0 : _feature$map_location.startsWith(transcript.chr);
                        });
                      }

                      if (transcriptData && transcriptData.length) {
                        var transcripts = transcriptData // @ts-ignore
                        .map(function (transcript, index) {
                          return {
                            start: transcript.txstart,
                            end: transcript.txend,
                            name: transcript.transcript,
                            strand: transcript.strand,
                            thickStart: transcript.cdsstart,
                            thickEnd: transcript.cdsend,
                            // @ts-ignore
                            subfeatures: transcript.position.map(function (pos) {
                              return {
                                start: pos[0],
                                end: pos[1],
                                strand: transcript.strand,
                                type: 'exon'
                              };
                            })
                          };
                        }) // @ts-ignore
                        .filter(function (t) {
                          // another weird filter to avoid transcripts that are outside the
                          // range of the genomic pos. the +/-1000 added for ATAD3C, SKI2, MEGF6
                          return t.start >= genomicPos.start - 2000 && t.end <= genomicPos.end + 2000;
                        }) // @ts-ignore
                        .map(function (feat) {
                          return feature.type_of_gene === 'protein-coding' ? cdsStartEndProcessor(feat) : feat;
                        }); // maybe worth reviewing but SvgFeatureRenderer has very bad behavior
                        // if subfeatures go outside of the bounds of the parent feature so
                        // this is needed

                        var _ref3 = [// @ts-ignore
                        Math.min.apply(Math, [genomicPos.start].concat(_toConsumableArray(transcripts.map(function (t) {
                          return t.start;
                        })))), // @ts-ignore
                        Math.max.apply(Math, [genomicPos.end].concat(_toConsumableArray(transcripts.map(function (t) {
                          return t.end;
                        }))))],
                            min = _ref3[0],
                            max = _ref3[1];
                        return new SimpleFeature({
                          id: _id,
                          data: _objectSpread2(_objectSpread2({}, rest), {}, {
                            refName: genomicPos.chr,
                            start: min,
                            end: max,
                            strand: genomicPos.strand,
                            name: feature.symbol,
                            description: feature.name,
                            type: 'gene',
                            subfeatures: transcripts
                          })
                        });
                      }

                      return null;
                    }));

                  case 13:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function readChunk(_x4) {
            return _readChunk.apply(this, arguments);
          }

          return readChunk;
        }()
      }, {
        key: "freeResources",
        value: function freeResources()
        /* { region } */
        {}
      }]);

      return AdapterClass;
    }(BaseFeatureDataAdapter);
  }

  var _default = /*#__PURE__*/function (_Plugin) {
    _inherits(_default, _Plugin);

    var _super2 = /*#__PURE__*/_createSuper(_default);

    function _default() {
      var _this3;

      _classCallCheck(this, _default);

      _this3 = _super2.apply(this, arguments);
      _this3.name = 'MyGeneAdapter';
      return _this3;
    }

    _createClass(_default, [{
      key: "install",
      value: function install(pluginManager) {
        var jbrequire = pluginManager.jbrequire;
        var AdapterType = jbrequire('@jbrowse/core/pluggableElementTypes/AdapterType');
        var AdapterClass = getAdapterClass(pluginManager);
        pluginManager.addAdapterType(function () {
          return new AdapterType({
            name: 'MyGeneV3Adapter',
            configSchema: configSchema,
            AdapterClass: AdapterClass
          });
        });
      }
    }]);

    return _default;
  }(Plugin);

  exports.cdsStartEndProcessor = cdsStartEndProcessor;
  exports.default = _default;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=jbrowse-plugin-biothings.umd.development.js.map
