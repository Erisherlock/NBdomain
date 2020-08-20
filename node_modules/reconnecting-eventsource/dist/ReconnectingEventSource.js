var ReconnectingEventSource =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (module, _reconnectingEventsource) {
  "use strict";

  var _reconnectingEventsource2 = _interopRequireDefault(_reconnectingEventsource);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = _reconnectingEventsource2.default;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ReconnectingEventSource = function () {
        function ReconnectingEventSource(url, configuration) {
            var _this = this;

            _classCallCheck(this, ReconnectingEventSource);

            this._configuration = configuration != null ? Object.assign({}, configuration) : null;

            this._eventSource = null;
            this._lastEventId = null;
            this._timer = null;
            this._listeners = {};

            this.url = url;
            this.readyState = 0;
            this.max_retry_time = 3000;

            if (this._configuration != null) {
                if (this._configuration.lastEventId) {
                    this._lastEventId = this._configuration.lastEventId;
                    delete this._configuration['lastEventId'];
                }

                if (this._configuration.max_retry_time) {
                    this.max_retry_time = this._configuration.max_retry_time;
                    delete this._configuration['max_retry_time'];
                }
            }

            this._onevent_wrapped = function (event) {
                _this._onevent(event);
            };

            this._start();
        }

        _createClass(ReconnectingEventSource, [{
            key: '_start',
            value: function _start() {
                var _this2 = this;

                var url = this.url;

                if (this._lastEventId) {
                    if (url.indexOf('?') === -1) {
                        url += '?';
                    } else {
                        url += '&';
                    }
                    url += 'lastEventId=' + encodeURIComponent(this._lastEventId);
                }

                this._eventSource = new EventSource(url, this._configuration);

                this._eventSource.onopen = function (event) {
                    _this2._onopen(event);
                };
                this._eventSource.onerror = function (event) {
                    _this2._onerror(event);
                };

                // apply listen types
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(this._listeners)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var type = _step.value;

                        this._eventSource.addEventListener(type, this._onevent_wrapped);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }, {
            key: '_onopen',
            value: function _onopen(event) {
                if (this.readyState === 0) {
                    this.readyState = 1;
                    this.onopen(event);
                }
            }
        }, {
            key: '_onerror',
            value: function _onerror(event) {
                var _this3 = this;

                if (this.readyState === 1) {
                    this.readyState = 0;
                    this.onerror(event);
                }

                if (this._eventSource) {
                    if (this._eventSource.readyState === 2) {
                        // reconnect with new object
                        this._eventSource.close();
                        this._eventSource = null;

                        // reconnect after random timeout < max_retry_time
                        var timeout = Math.round(this.max_retry_time * Math.random());
                        this._timer = setTimeout(function () {
                            return _this3._start();
                        }, timeout);
                    }
                }
            }
        }, {
            key: '_onevent',
            value: function _onevent(event) {
                if (event.lastEventId) {
                    this._lastEventId = event.lastEventId;
                }

                var listenersForType = this._listeners[event.type];
                if (listenersForType != null) {
                    var _arr = [].concat(_toConsumableArray(listenersForType));

                    // operate on a copy
                    for (var _i = 0; _i < _arr.length; _i++) {
                        var listener = _arr[_i];
                        listener(event);
                    }
                }

                if (event.type === 'message') {
                    this.onmessage(event);
                }
            }
        }, {
            key: 'onopen',
            value: function onopen(event) {
                // may be overridden
            }
        }, {
            key: 'onerror',
            value: function onerror(event) {
                // may be overridden
            }
        }, {
            key: 'onmessage',
            value: function onmessage(event) {
                // may be overridden
            }
        }, {
            key: 'close',
            value: function close() {
                if (this._timer) {
                    clearTimeout(this._timer);
                    this._timer = null;
                }

                if (this._eventSource) {
                    this._eventSource.close();
                    this._eventSource = null;
                }

                this.readyState = 2;
            }
        }, {
            key: 'addEventListener',
            value: function addEventListener(inType, callback) {
                var type = inType.toString();

                if (!(type in this._listeners)) {
                    this._listeners[type] = [];
                    if (this._eventSource) {
                        this._eventSource.addEventListener(type, this._onevent_wrapped);
                    }
                }

                var listenersForType = this._listeners[type];
                if (!listenersForType.includes(callback)) {
                    this._listeners[type] = [].concat(_toConsumableArray(listenersForType), [callback]);
                }
            }
        }, {
            key: 'removeEventListener',
            value: function removeEventListener(inType, callback) {
                var type = inType.toString();

                if (type in this._listeners) {

                    var listenersForType = this._listeners[type];

                    var updatedListenersForType = listenersForType.filter(function (l) {
                        return l !== callback;
                    });

                    if (updatedListenersForType.length > 0) {
                        this._listeners[type] = updatedListenersForType;
                    } else {
                        delete this._listeners[type];
                        if (this._eventSource) {
                            this._eventSource.removeEventListener(type, this._onevent_wrapped);
                        }
                    }
                }
            }
        }]);

        return ReconnectingEventSource;
    }();

    exports.default = ReconnectingEventSource;
});

/***/ })
/******/ ]);