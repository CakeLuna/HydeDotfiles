// ==UserScript==
// @name         translate
// @version      0.1.13
// @description  mpv player translation script
// @author       mpv-easy
// @downloadURL  https://github.com/mpv-easy/mpv-easy/releases/latest/download/translate.js
// ==/UserScript==


"use strict";

var _excluded = ["text"],
  _excluded2 = ["mousePos"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n2 = 0, F = function F() {}; return { s: F, n: function n() { return _n2 >= r.length ? { done: !0 } : { done: !1, value: r[_n2++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (_Bt$console) {
  var D5 = Object.create;
  var y1 = Object.defineProperty;
  var P5 = Object.getOwnPropertyDescriptor;
  var I5 = Object.getOwnPropertyNames;
  var U5 = Object.getPrototypeOf,
    z5 = Object.prototype.hasOwnProperty;
  var g1 = function (e) {
    return (typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : (typeof Proxy === "undefined" ? "undefined" : _typeof(Proxy)) < "u" ? new Proxy(e, {
      get: function get(t, i) {
        return ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : t)[i];
      }
    }) : e;
  }(function (e) {
    if ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  });
  var m = function m(e, t) {
    return function () {
      return t || e((t = {
        exports: {}
      }).exports, t), t.exports;
    };
  };
  var L5 = function L5(e, t, i, a) {
    if (t && _typeof(t) == "object" || typeof t == "function") {
      var _iterator = _createForOfIteratorHelper(I5(t)),
        _step;
      try {
        var _loop = function _loop() {
          var u = _step.value;
          !z5.call(e, u) && u !== i && y1(e, u, {
            get: function get() {
              return t[u];
            },
            enumerable: !(a = P5(t, u)) || a.enumerable
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return e;
  };
  var W = function W(e, t, i) {
    return i = e != null ? D5(U5(e)) : {}, L5(t || !e || !e.__esModule ? y1(i, "default", {
      value: e,
      enumerable: !0
    }) : i, e);
  };
  var J = m(function (Im, b1) {
    "use strict";

    var as = function as(e) {
      return e && e.Math === Math && e;
    };
    b1.exports = as((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || as((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || as((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || as((typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || as(_typeof(Im) == "object" && Im) || function () {
      return this;
    }() || Function("return this")();
  });
  var Q = m(function (h0e, x1) {
    "use strict";

    x1.exports = function (e) {
      try {
        return !!e();
      } catch (_unused) {
        return !0;
      }
    };
  });
  var we = m(function (y0e, S1) {
    "use strict";

    var H5 = Q();
    S1.exports = !H5(function () {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] !== 7;
    });
  });
  var os = m(function (g0e, E1) {
    "use strict";

    var G5 = Q();
    E1.exports = !G5(function () {
      var e = function () {}.bind();
      return typeof e != "function" || e.hasOwnProperty("prototype");
    });
  });
  var me = m(function (b0e, T1) {
    "use strict";

    var K5 = os(),
      Uc = Function.prototype.call;
    T1.exports = K5 ? Uc.bind(Uc) : function () {
      return Uc.apply(Uc, arguments);
    };
  });
  var zc = m(function (_1) {
    "use strict";

    var q1 = {}.propertyIsEnumerable,
      A1 = Object.getOwnPropertyDescriptor,
      V5 = A1 && !q1.call({
        1: 2
      }, 1);
    _1.f = V5 ? function (t) {
      var i = A1(this, t);
      return !!i && i.enumerable;
    } : q1;
  });
  var Hr = m(function (S0e, O1) {
    "use strict";

    O1.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t
      };
    };
  });
  var X = m(function (E0e, R1) {
    "use strict";

    var w1 = os(),
      N1 = Function.prototype,
      Um = N1.call,
      Y5 = w1 && N1.bind.bind(Um, Um);
    R1.exports = w1 ? Y5 : function (e) {
      return function () {
        return Um.apply(e, arguments);
      };
    };
  });
  var yr = m(function (T0e, M1) {
    "use strict";

    var C1 = X(),
      X5 = C1({}.toString),
      k5 = C1("".slice);
    M1.exports = function (e) {
      return k5(X5(e), 8, -1);
    };
  });
  var go = m(function (q0e, B1) {
    "use strict";

    var Q5 = X(),
      Z5 = Q(),
      W5 = yr(),
      zm = Object,
      J5 = Q5("".split);
    B1.exports = Z5(function () {
      return !zm("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return W5(e) === "String" ? J5(e, "") : zm(e);
    } : zm;
  });
  var Ot = m(function (A0e, D1) {
    "use strict";

    D1.exports = function (e) {
      return e == null;
    };
  });
  var Be = m(function (_0e, P1) {
    "use strict";

    var $5 = Ot(),
      eF = TypeError;
    P1.exports = function (e) {
      if ($5(e)) throw new eF("Can't call method on " + e);
      return e;
    };
  });
  var Gr = m(function (O0e, I1) {
    "use strict";

    var tF = go(),
      rF = Be();
    I1.exports = function (e) {
      return tF(rF(e));
    };
  });
  var xe = m(function (w0e, U1) {
    "use strict";

    var Lm = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all;
    U1.exports = _typeof(Lm) > "u" && Lm !== void 0 ? function (e) {
      return typeof e == "function" || e === Lm;
    } : function (e) {
      return typeof e == "function";
    };
  });
  var Ne = m(function (N0e, z1) {
    "use strict";

    var nF = xe();
    z1.exports = function (e) {
      return _typeof(e) == "object" ? e !== null : nF(e);
    };
  });
  var wt = m(function (R0e, L1) {
    "use strict";

    var jm = J(),
      iF = xe(),
      aF = function aF(e) {
        return iF(e) ? e : void 0;
      };
    L1.exports = function (e, t) {
      return arguments.length < 2 ? aF(jm[e]) : jm[e] && jm[e][t];
    };
  });
  var qn = m(function (C0e, j1) {
    "use strict";

    var oF = X();
    j1.exports = oF({}.isPrototypeOf);
  });
  var Kr = m(function (M0e, G1) {
    "use strict";

    var uF = J(),
      F1 = uF.navigator,
      H1 = F1 && F1.userAgent;
    G1.exports = H1 ? String(H1) : "";
  });
  var us = m(function (B0e, Q1) {
    "use strict";

    var k1 = J(),
      Fm = Kr(),
      K1 = k1.process,
      V1 = k1.Deno,
      Y1 = K1 && K1.versions || V1 && V1.version,
      X1 = Y1 && Y1.v8,
      Or,
      Lc;
    X1 && (Or = X1.split("."), Lc = Or[0] > 0 && Or[0] < 4 ? 1 : +(Or[0] + Or[1]));
    !Lc && Fm && (Or = Fm.match(/Edge\/(\d+)/), (!Or || Or[1] >= 74) && (Or = Fm.match(/Chrome\/(\d+)/), Or && (Lc = +Or[1])));
    Q1.exports = Lc;
  });
  var Hm = m(function (D0e, W1) {
    "use strict";

    var Z1 = us(),
      sF = Q(),
      lF = J(),
      cF = lF.String;
    W1.exports = !!Object.getOwnPropertySymbols && !sF(function () {
      var e = Symbol("symbol detection");
      return !cF(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Z1 && Z1 < 41;
    });
  });
  var Gm = m(function (P0e, J1) {
    "use strict";

    var fF = Hm();
    J1.exports = fF && !Symbol.sham && _typeof(Symbol.iterator) == "symbol";
  });
  var bo = m(function (I0e, $1) {
    "use strict";

    var pF = wt(),
      dF = xe(),
      vF = qn(),
      mF = Gm(),
      hF = Object;
    $1.exports = mF ? function (e) {
      return _typeof(e) == "symbol";
    } : function (e) {
      var t = pF("Symbol");
      return dF(t) && vF(t.prototype, hF(e));
    };
  });
  var la = m(function (U0e, eT) {
    "use strict";

    var yF = String;
    eT.exports = function (e) {
      try {
        return yF(e);
      } catch (_unused2) {
        return "Object";
      }
    };
  });
  var pt = m(function (z0e, tT) {
    "use strict";

    var gF = xe(),
      bF = la(),
      xF = TypeError;
    tT.exports = function (e) {
      if (gF(e)) return e;
      throw new xF(bF(e) + " is not a function");
    };
  });
  var Vr = m(function (L0e, rT) {
    "use strict";

    var SF = pt(),
      EF = Ot();
    rT.exports = function (e, t) {
      var i = e[t];
      return EF(i) ? void 0 : SF(i);
    };
  });
  var iT = m(function (j0e, nT) {
    "use strict";

    var Km = me(),
      Vm = xe(),
      Ym = Ne(),
      TF = TypeError;
    nT.exports = function (e, t) {
      var i, a;
      if (t === "string" && Vm(i = e.toString) && !Ym(a = Km(i, e)) || Vm(i = e.valueOf) && !Ym(a = Km(i, e)) || t !== "string" && Vm(i = e.toString) && !Ym(a = Km(i, e))) return a;
      throw new TF("Can't convert object to primitive value");
    };
  });
  var We = m(function (F0e, aT) {
    "use strict";

    aT.exports = !1;
  });
  var jc = m(function (H0e, uT) {
    "use strict";

    var oT = J(),
      qF = Object.defineProperty;
    uT.exports = function (e, t) {
      try {
        qF(oT, e, {
          value: t,
          configurable: !0,
          writable: !0
        });
      } catch (_unused3) {
        oT[e] = t;
      }
      return t;
    };
  });
  var Fc = m(function (G0e, cT) {
    "use strict";

    var AF = We(),
      _F = J(),
      OF = jc(),
      sT = "__core-js_shared__",
      lT = cT.exports = _F[sT] || OF(sT, {});
    (lT.versions || (lT.versions = [])).push({
      version: "3.39.0",
      mode: AF ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  });
  var Hc = m(function (K0e, pT) {
    "use strict";

    var fT = Fc();
    pT.exports = function (e, t) {
      return fT[e] || (fT[e] = t || {});
    };
  });
  var dt = m(function (V0e, dT) {
    "use strict";

    var wF = Be(),
      NF = Object;
    dT.exports = function (e) {
      return NF(wF(e));
    };
  });
  var Ye = m(function (Y0e, vT) {
    "use strict";

    var RF = X(),
      CF = dt(),
      MF = RF({}.hasOwnProperty);
    vT.exports = Object.hasOwn || function (t, i) {
      return MF(CF(t), i);
    };
  });
  var xo = m(function (X0e, mT) {
    "use strict";

    var BF = X(),
      DF = 0,
      PF = Math.random(),
      IF = BF(1 .toString);
    mT.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + IF(++DF + PF, 36);
    };
  });
  var Re = m(function (k0e, yT) {
    "use strict";

    var UF = J(),
      zF = Hc(),
      hT = Ye(),
      LF = xo(),
      jF = Hm(),
      FF = Gm(),
      So = UF.Symbol,
      Xm = zF("wks"),
      HF = FF ? So.for || So : So && So.withoutSetter || LF;
    yT.exports = function (e) {
      return hT(Xm, e) || (Xm[e] = jF && hT(So, e) ? So[e] : HF("Symbol." + e)), Xm[e];
    };
  });
  var Gc = m(function (Q0e, xT) {
    "use strict";

    var GF = me(),
      gT = Ne(),
      bT = bo(),
      KF = Vr(),
      VF = iT(),
      YF = Re(),
      XF = TypeError,
      kF = YF("toPrimitive");
    xT.exports = function (e, t) {
      if (!gT(e) || bT(e)) return e;
      var i = KF(e, kF),
        a;
      if (i) {
        if (t === void 0 && (t = "default"), a = GF(i, e, t), !gT(a) || bT(a)) return a;
        throw new XF("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), VF(e, t);
    };
  });
  var Kc = m(function (Z0e, ST) {
    "use strict";

    var QF = Gc(),
      ZF = bo();
    ST.exports = function (e) {
      var t = QF(e, "string");
      return ZF(t) ? t : t + "";
    };
  });
  var ss = m(function (W0e, TT) {
    "use strict";

    var WF = J(),
      ET = Ne(),
      km = WF.document,
      JF = ET(km) && ET(km.createElement);
    TT.exports = function (e) {
      return JF ? km.createElement(e) : {};
    };
  });
  var Qm = m(function (J0e, qT) {
    "use strict";

    var $F = we(),
      eH = Q(),
      tH = ss();
    qT.exports = !$F && !eH(function () {
      return Object.defineProperty(tH("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a !== 7;
    });
  });
  var ca = m(function (_T) {
    "use strict";

    var rH = we(),
      nH = me(),
      iH = zc(),
      aH = Hr(),
      oH = Gr(),
      uH = Kc(),
      sH = Ye(),
      lH = Qm(),
      AT = Object.getOwnPropertyDescriptor;
    _T.f = rH ? AT : function (t, i) {
      if (t = oH(t), i = uH(i), lH) try {
        return AT(t, i);
      } catch (_unused4) {}
      if (sH(t, i)) return aH(!nH(iH.f, t, i), t[i]);
    };
  });
  var Zm = m(function (ebe, OT) {
    "use strict";

    var cH = we(),
      fH = Q();
    OT.exports = cH && fH(function () {
      return Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: !1
      }).prototype !== 42;
    });
  });
  var De = m(function (tbe, wT) {
    "use strict";

    var pH = Ne(),
      dH = String,
      vH = TypeError;
    wT.exports = function (e) {
      if (pH(e)) return e;
      throw new vH(dH(e) + " is not an object");
    };
  });
  var Nt = m(function (RT) {
    "use strict";

    var mH = we(),
      hH = Qm(),
      yH = Zm(),
      Vc = De(),
      NT = Kc(),
      gH = TypeError,
      Wm = Object.defineProperty,
      bH = Object.getOwnPropertyDescriptor,
      Jm = "enumerable",
      $m = "configurable",
      eh = "writable";
    RT.f = mH ? yH ? function (t, i, a) {
      if (Vc(t), i = NT(i), Vc(a), typeof t == "function" && i === "prototype" && "value" in a && eh in a && !a[eh]) {
        var u = bH(t, i);
        u && u[eh] && (t[i] = a.value, a = {
          configurable: $m in a ? a[$m] : u[$m],
          enumerable: Jm in a ? a[Jm] : u[Jm],
          writable: !1
        });
      }
      return Wm(t, i, a);
    } : Wm : function (t, i, a) {
      if (Vc(t), i = NT(i), Vc(a), hH) try {
        return Wm(t, i, a);
      } catch (_unused5) {}
      if ("get" in a || "set" in a) throw new gH("Accessors not supported");
      return "value" in a && (t[i] = a.value), t;
    };
  });
  var or = m(function (nbe, CT) {
    "use strict";

    var xH = we(),
      SH = Nt(),
      EH = Hr();
    CT.exports = xH ? function (e, t, i) {
      return SH.f(e, t, EH(1, i));
    } : function (e, t, i) {
      return e[t] = i, e;
    };
  });
  var ls = m(function (ibe, BT) {
    "use strict";

    var th = we(),
      TH = Ye(),
      MT = Function.prototype,
      qH = th && Object.getOwnPropertyDescriptor,
      rh = TH(MT, "name"),
      AH = rh && function () {}.name === "something",
      _H = rh && (!th || th && qH(MT, "name").configurable);
    BT.exports = {
      EXISTS: rh,
      PROPER: AH,
      CONFIGURABLE: _H
    };
  });
  var Yc = m(function (abe, DT) {
    "use strict";

    var OH = X(),
      wH = xe(),
      nh = Fc(),
      NH = OH(Function.toString);
    wH(nh.inspectSource) || (nh.inspectSource = function (e) {
      return NH(e);
    });
    DT.exports = nh.inspectSource;
  });
  var ih = m(function (obe, IT) {
    "use strict";

    var RH = J(),
      CH = xe(),
      PT = RH.WeakMap;
    IT.exports = CH(PT) && /native code/.test(String(PT));
  });
  var Xc = m(function (ube, zT) {
    "use strict";

    var MH = Hc(),
      BH = xo(),
      UT = MH("keys");
    zT.exports = function (e) {
      return UT[e] || (UT[e] = BH(e));
    };
  });
  var cs = m(function (sbe, LT) {
    "use strict";

    LT.exports = {};
  });
  var jt = m(function (lbe, HT) {
    "use strict";

    var DH = ih(),
      FT = J(),
      PH = Ne(),
      IH = or(),
      ah = Ye(),
      oh = Fc(),
      UH = Xc(),
      zH = cs(),
      jT = "Object already initialized",
      uh = FT.TypeError,
      LH = FT.WeakMap,
      kc,
      fs,
      Qc,
      jH = function jH(e) {
        return Qc(e) ? fs(e) : kc(e, {});
      },
      FH = function FH(e) {
        return function (t) {
          var i;
          if (!PH(t) || (i = fs(t)).type !== e) throw new uh("Incompatible receiver, " + e + " required");
          return i;
        };
      };
    DH || oh.state ? (wr = oh.state || (oh.state = new LH()), wr.get = wr.get, wr.has = wr.has, wr.set = wr.set, kc = function kc(e, t) {
      if (wr.has(e)) throw new uh(jT);
      return t.facade = e, wr.set(e, t), t;
    }, fs = function fs(e) {
      return wr.get(e) || {};
    }, Qc = function Qc(e) {
      return wr.has(e);
    }) : (fa = UH("state"), zH[fa] = !0, kc = function kc(e, t) {
      if (ah(e, fa)) throw new uh(jT);
      return t.facade = e, IH(e, fa, t), t;
    }, fs = function fs(e) {
      return ah(e, fa) ? e[fa] : {};
    }, Qc = function Qc(e) {
      return ah(e, fa);
    });
    var wr, fa;
    HT.exports = {
      set: kc,
      get: fs,
      has: Qc,
      enforce: jH,
      getterFor: FH
    };
  });
  var ch = m(function (cbe, VT) {
    "use strict";

    var lh = X(),
      HH = Q(),
      GH = xe(),
      Zc = Ye(),
      sh = we(),
      KH = ls().CONFIGURABLE,
      VH = Yc(),
      KT = jt(),
      YH = KT.enforce,
      XH = KT.get,
      GT = String,
      Wc = Object.defineProperty,
      kH = lh("".slice),
      QH = lh("".replace),
      ZH = lh([].join),
      WH = sh && !HH(function () {
        return Wc(function () {}, "length", {
          value: 8
        }).length !== 8;
      }),
      JH = String(String).split("String"),
      $H = VT.exports = function (e, t, i) {
        kH(GT(t), 0, 7) === "Symbol(" && (t = "[" + QH(GT(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), i && i.getter && (t = "get " + t), i && i.setter && (t = "set " + t), (!Zc(e, "name") || KH && e.name !== t) && (sh ? Wc(e, "name", {
          value: t,
          configurable: !0
        }) : e.name = t), WH && i && Zc(i, "arity") && e.length !== i.arity && Wc(e, "length", {
          value: i.arity
        });
        try {
          i && Zc(i, "constructor") && i.constructor ? sh && Wc(e, "prototype", {
            writable: !1
          }) : e.prototype && (e.prototype = void 0);
        } catch (_unused6) {}
        var a = YH(e);
        return Zc(a, "source") || (a.source = ZH(JH, typeof t == "string" ? t : "")), e;
      };
    Function.prototype.toString = $H(function () {
      return GH(this) && XH(this).source || VH(this);
    }, "toString");
  });
  var Rt = m(function (fbe, YT) {
    "use strict";

    var e7 = xe(),
      t7 = Nt(),
      r7 = ch(),
      n7 = jc();
    YT.exports = function (e, t, i, a) {
      a || (a = {});
      var u = a.enumerable,
        l = a.name !== void 0 ? a.name : t;
      if (e7(i) && r7(i, l, a), a.global) u ? e[t] = i : n7(t, i);else {
        try {
          a.unsafe ? e[t] && (u = !0) : delete e[t];
        } catch (_unused7) {}
        u ? e[t] = i : t7.f(e, t, {
          value: i,
          enumerable: !1,
          configurable: !a.nonConfigurable,
          writable: !a.nonWritable
        });
      }
      return e;
    };
  });
  var kT = m(function (pbe, XT) {
    "use strict";

    var i7 = Math.ceil,
      a7 = Math.floor;
    XT.exports = Math.trunc || function (t) {
      var i = +t;
      return (i > 0 ? a7 : i7)(i);
    };
  });
  var Je = m(function (dbe, QT) {
    "use strict";

    var o7 = kT();
    QT.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : o7(t);
    };
  });
  var pa = m(function (vbe, ZT) {
    "use strict";

    var u7 = Je(),
      s7 = Math.max,
      l7 = Math.min;
    ZT.exports = function (e, t) {
      var i = u7(e);
      return i < 0 ? s7(i + t, 0) : l7(i, t);
    };
  });
  var Ft = m(function (mbe, WT) {
    "use strict";

    var c7 = Je(),
      f7 = Math.min;
    WT.exports = function (e) {
      var t = c7(e);
      return t > 0 ? f7(t, 9007199254740991) : 0;
    };
  });
  var $e = m(function (hbe, JT) {
    "use strict";

    var p7 = Ft();
    JT.exports = function (e) {
      return p7(e.length);
    };
  });
  var ps = m(function (ybe, eq) {
    "use strict";

    var d7 = Gr(),
      v7 = pa(),
      m7 = $e(),
      $T = function $T(e) {
        return function (t, i, a) {
          var u = d7(t),
            l = m7(u);
          if (l === 0) return !e && -1;
          var f = v7(a, l),
            d;
          if (e && i !== i) {
            for (; l > f;) if (d = u[f++], d !== d) return !0;
          } else for (; l > f; f++) if ((e || f in u) && u[f] === i) return e || f || 0;
          return !e && -1;
        };
      };
    eq.exports = {
      includes: $T(!0),
      indexOf: $T(!1)
    };
  });
  var ph = m(function (gbe, rq) {
    "use strict";

    var h7 = X(),
      fh = Ye(),
      y7 = Gr(),
      g7 = ps().indexOf,
      b7 = cs(),
      tq = h7([].push);
    rq.exports = function (e, t) {
      var i = y7(e),
        a = 0,
        u = [],
        l;
      for (l in i) !fh(b7, l) && fh(i, l) && tq(u, l);
      for (; t.length > a;) fh(i, l = t[a++]) && (~g7(u, l) || tq(u, l));
      return u;
    };
  });
  var Jc = m(function (bbe, nq) {
    "use strict";

    nq.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  });
  var Eo = m(function (iq) {
    "use strict";

    var x7 = ph(),
      S7 = Jc(),
      E7 = S7.concat("length", "prototype");
    iq.f = Object.getOwnPropertyNames || function (t) {
      return x7(t, E7);
    };
  });
  var dh = m(function (aq) {
    "use strict";

    aq.f = Object.getOwnPropertySymbols;
  });
  var uq = m(function (Ebe, oq) {
    "use strict";

    var T7 = wt(),
      q7 = X(),
      A7 = Eo(),
      _7 = dh(),
      O7 = De(),
      w7 = q7([].concat);
    oq.exports = T7("Reflect", "ownKeys") || function (t) {
      var i = A7.f(O7(t)),
        a = _7.f;
      return a ? w7(i, a(t)) : i;
    };
  });
  var $c = m(function (Tbe, lq) {
    "use strict";

    var sq = Ye(),
      N7 = uq(),
      R7 = ca(),
      C7 = Nt();
    lq.exports = function (e, t, i) {
      for (var a = N7(t), u = C7.f, l = R7.f, f = 0; f < a.length; f++) {
        var d = a[f];
        !sq(e, d) && !(i && sq(i, d)) && u(e, d, l(t, d));
      }
    };
  });
  var vs = m(function (qbe, cq) {
    "use strict";

    var M7 = Q(),
      B7 = xe(),
      D7 = /#|\.prototype\./,
      ds = function ds(e, t) {
        var i = I7[P7(e)];
        return i === z7 ? !0 : i === U7 ? !1 : B7(t) ? M7(t) : !!t;
      },
      P7 = ds.normalize = function (e) {
        return String(e).replace(D7, ".").toLowerCase();
      },
      I7 = ds.data = {},
      U7 = ds.NATIVE = "N",
      z7 = ds.POLYFILL = "P";
    cq.exports = ds;
  });
  var z = m(function (Abe, fq) {
    "use strict";

    var ef = J(),
      L7 = ca().f,
      j7 = or(),
      F7 = Rt(),
      H7 = jc(),
      G7 = $c(),
      K7 = vs();
    fq.exports = function (e, t) {
      var i = e.target,
        a = e.global,
        u = e.stat,
        l,
        f,
        d,
        v,
        h,
        y;
      if (a ? f = ef : u ? f = ef[i] || H7(i, {}) : f = ef[i] && ef[i].prototype, f) for (d in t) {
        if (h = t[d], e.dontCallGetSet ? (y = L7(f, d), v = y && y.value) : v = f[d], l = K7(a ? d : i + (u ? "." : "#") + d, e.forced), !l && v !== void 0) {
          if (_typeof(h) == _typeof(v)) continue;
          G7(h, v);
        }
        (e.sham || v && v.sham) && j7(h, "sham", !0), F7(f, d, h, e);
      }
    };
  });
  var vi = m(function (_be, pq) {
    "use strict";

    var V7 = yr(),
      Y7 = X();
    pq.exports = function (e) {
      if (V7(e) === "Function") return Y7(e);
    };
  });
  var An = m(function (Obe, vq) {
    "use strict";

    var dq = vi(),
      X7 = pt(),
      k7 = os(),
      Q7 = dq(dq.bind);
    vq.exports = function (e, t) {
      return X7(e), t === void 0 ? e : k7 ? Q7(e, t) : function () {
        return e.apply(t, arguments);
      };
    };
  });
  var hq = m(function (wbe, mq) {
    "use strict";

    var Z7 = yr();
    mq.exports = Array.isArray || function (t) {
      return Z7(t) === "Array";
    };
  });
  var tf = m(function (Nbe, gq) {
    "use strict";

    var W7 = Re(),
      J7 = W7("toStringTag"),
      yq = {};
    yq[J7] = "z";
    gq.exports = String(yq) === "[object z]";
  });
  var Yr = m(function (Rbe, bq) {
    "use strict";

    var $7 = tf(),
      eG = xe(),
      rf = yr(),
      tG = Re(),
      rG = tG("toStringTag"),
      nG = Object,
      iG = rf(function () {
        return arguments;
      }()) === "Arguments",
      aG = function aG(e, t) {
        try {
          return e[t];
        } catch (_unused8) {}
      };
    bq.exports = $7 ? rf : function (e) {
      var t, i, a;
      return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (i = aG(t = nG(e), rG)) == "string" ? i : iG ? rf(t) : (a = rf(t)) === "Object" && eG(t.callee) ? "Arguments" : a;
    };
  });
  var hs = m(function (Cbe, qq) {
    "use strict";

    var oG = X(),
      uG = Q(),
      xq = xe(),
      sG = Yr(),
      lG = wt(),
      cG = Yc(),
      Sq = function Sq() {},
      Eq = lG("Reflect", "construct"),
      vh = /^\s*(?:class|function)\b/,
      fG = oG(vh.exec),
      pG = !vh.test(Sq),
      ms = function ms(t) {
        if (!xq(t)) return !1;
        try {
          return Eq(Sq, [], t), !0;
        } catch (_unused9) {
          return !1;
        }
      },
      Tq = function Tq(t) {
        if (!xq(t)) return !1;
        switch (sG(t)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return pG || !!fG(vh, cG(t));
        } catch (_unused10) {
          return !0;
        }
      };
    Tq.sham = !0;
    qq.exports = !Eq || uG(function () {
      var e;
      return ms(ms.call) || !ms(Object) || !ms(function () {
        e = !0;
      }) || e;
    }) ? Tq : ms;
  });
  var wq = m(function (Mbe, Oq) {
    "use strict";

    var Aq = hq(),
      dG = hs(),
      vG = Ne(),
      mG = Re(),
      hG = mG("species"),
      _q = Array;
    Oq.exports = function (e) {
      var t;
      return Aq(e) && (t = e.constructor, dG(t) && (t === _q || Aq(t.prototype)) ? t = void 0 : vG(t) && (t = t[hG], t === null && (t = void 0))), t === void 0 ? _q : t;
    };
  });
  var Rq = m(function (Bbe, Nq) {
    "use strict";

    var yG = wq();
    Nq.exports = function (e, t) {
      return new (yG(e))(t === 0 ? 0 : t);
    };
  });
  var Ct = m(function (Dbe, Mq) {
    "use strict";

    var gG = An(),
      bG = X(),
      xG = go(),
      SG = dt(),
      EG = $e(),
      TG = Rq(),
      Cq = bG([].push),
      mi = function mi(e) {
        var t = e === 1,
          i = e === 2,
          a = e === 3,
          u = e === 4,
          l = e === 6,
          f = e === 7,
          d = e === 5 || l;
        return function (v, h, y, b) {
          for (var S = SG(v), T = xG(S), R = EG(T), A = gG(h, y), _ = 0, x = b || TG, q = t ? x(v, R) : i || f ? x(v, 0) : void 0, I, w; R > _; _++) if ((d || _ in T) && (I = T[_], w = A(I, _, S), e)) if (t) q[_] = w;else if (w) switch (e) {
            case 3:
              return !0;
            case 5:
              return I;
            case 6:
              return _;
            case 2:
              Cq(q, I);
          } else switch (e) {
            case 4:
              return !1;
            case 7:
              Cq(q, I);
          }
          return l ? -1 : a || u ? u : q;
        };
      };
    Mq.exports = {
      forEach: mi(0),
      map: mi(1),
      filter: mi(2),
      some: mi(3),
      every: mi(4),
      find: mi(5),
      findIndex: mi(6),
      filterReject: mi(7)
    };
  });
  var ys = m(function (Pbe, Bq) {
    "use strict";

    var qG = Q();
    Bq.exports = function (e, t) {
      var i = [][e];
      return !!i && qG(function () {
        i.call(null, t || function () {
          return 1;
        }, 1);
      });
    };
  });
  var Dq = m(function () {
    "use strict";

    var AG = z(),
      _G = Ct().every,
      OG = ys(),
      wG = OG("every");
    AG({
      target: "Array",
      proto: !0,
      forced: !wG
    }, {
      every: function every(t) {
        return _G(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var Ht = m(function (zbe, Pq) {
    "use strict";

    var NG = J(),
      RG = X();
    Pq.exports = function (e, t) {
      return RG(NG[e].prototype[t]);
    };
  });
  var Uq = m(function (Lbe, Iq) {
    "use strict";

    Dq();
    var CG = Ht();
    Iq.exports = CG("Array", "every");
  });
  var Lq = m(function (jbe, zq) {
    "use strict";

    var MG = Uq();
    zq.exports = MG;
  });
  var nf = m(function (Fbe, Fq) {
    "use strict";

    var BG = dt(),
      jq = pa(),
      DG = $e();
    Fq.exports = function (t) {
      for (var i = BG(this), a = DG(i), u = arguments.length, l = jq(u > 1 ? arguments[1] : void 0, a), f = u > 2 ? arguments[2] : void 0, d = f === void 0 ? a : jq(f, a); d > l;) i[l++] = t;
      return i;
    };
  });
  var gs = m(function (Hbe, Hq) {
    "use strict";

    var PG = ph(),
      IG = Jc();
    Hq.exports = Object.keys || function (t) {
      return PG(t, IG);
    };
  });
  var Kq = m(function (Gq) {
    "use strict";

    var UG = we(),
      zG = Zm(),
      LG = Nt(),
      jG = De(),
      FG = Gr(),
      HG = gs();
    Gq.f = UG && !zG ? Object.defineProperties : function (t, i) {
      jG(t);
      for (var a = FG(i), u = HG(i), l = u.length, f = 0, d; l > f;) LG.f(t, d = u[f++], a[d]);
      return t;
    };
  });
  var mh = m(function (Kbe, Vq) {
    "use strict";

    var GG = wt();
    Vq.exports = GG("document", "documentElement");
  });
  var _n = m(function (Vbe, Jq) {
    "use strict";

    var KG = De(),
      VG = Kq(),
      Yq = Jc(),
      YG = cs(),
      XG = mh(),
      kG = ss(),
      QG = Xc(),
      Xq = ">",
      kq = "<",
      yh = "prototype",
      gh = "script",
      Zq = QG("IE_PROTO"),
      hh = function hh() {},
      Wq = function Wq(e) {
        return kq + gh + Xq + e + kq + "/" + gh + Xq;
      },
      Qq = function Qq(e) {
        e.write(Wq("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t;
      },
      ZG = function ZG() {
        var e = kG("iframe"),
          t = "java" + gh + ":",
          i;
        return e.style.display = "none", XG.appendChild(e), e.src = String(t), i = e.contentWindow.document, i.open(), i.write(Wq("document.F=Object")), i.close(), i.F;
      },
      af,
      _of = function of() {
        try {
          af = new ActiveXObject("htmlfile");
        } catch (_unused11) {}
        _of = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && af ? Qq(af) : ZG() : Qq(af);
        for (var e = Yq.length; e--;) delete _of[yh][Yq[e]];
        return _of();
      };
    YG[Zq] = !0;
    Jq.exports = Object.create || function (t, i) {
      var a;
      return t !== null ? (hh[yh] = KG(t), a = new hh(), hh[yh] = null, a[Zq] = t) : a = _of(), i === void 0 ? a : VG.f(a, i);
    };
  });
  var On = m(function (Ybe, $q) {
    "use strict";

    var WG = Re(),
      JG = _n(),
      $G = Nt().f,
      bh = WG("unscopables"),
      xh = Array.prototype;
    xh[bh] === void 0 && $G(xh, bh, {
      configurable: !0,
      value: JG(null)
    });
    $q.exports = function (e) {
      xh[bh][e] = !0;
    };
  });
  var eA = m(function () {
    "use strict";

    var eK = z(),
      tK = nf(),
      rK = On();
    eK({
      target: "Array",
      proto: !0
    }, {
      fill: tK
    });
    rK("fill");
  });
  var rA = m(function (Qbe, tA) {
    "use strict";

    eA();
    var nK = Ht();
    tA.exports = nK("Array", "fill");
  });
  var iA = m(function (Zbe, nA) {
    "use strict";

    var iK = rA();
    nA.exports = iK;
  });
  var oA = m(function () {
    "use strict";

    var aK = z(),
      oK = Ct().findIndex,
      uK = On(),
      Sh = "findIndex",
      aA = !0;
    Sh in [] && Array(1)[Sh](function () {
      aA = !1;
    });
    aK({
      target: "Array",
      proto: !0,
      forced: aA
    }, {
      findIndex: function findIndex(t) {
        return oK(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    uK(Sh);
  });
  var sA = m(function ($be, uA) {
    "use strict";

    oA();
    var sK = Ht();
    uA.exports = sK("Array", "findIndex");
  });
  var cA = m(function (exe, lA) {
    "use strict";

    var lK = sA();
    lA.exports = lK;
  });
  var pA = m(function () {
    "use strict";

    var cK = z(),
      fK = Ct().find,
      pK = On(),
      Eh = "find",
      fA = !0;
    Eh in [] && Array(1)[Eh](function () {
      fA = !1;
    });
    cK({
      target: "Array",
      proto: !0,
      forced: fA
    }, {
      find: function find(t) {
        return fK(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    pK(Eh);
  });
  var vA = m(function (nxe, dA) {
    "use strict";

    pA();
    var dK = Ht();
    dA.exports = dK("Array", "find");
  });
  var hA = m(function (ixe, mA) {
    "use strict";

    var vK = vA();
    mA.exports = vK;
  });
  var bs = m(function (axe, gA) {
    "use strict";

    var mK = An(),
      hK = go(),
      yK = dt(),
      gK = $e(),
      yA = function yA(e) {
        var t = e === 1;
        return function (i, a, u) {
          for (var l = yK(i), f = hK(l), d = gK(f), v = mK(a, u), h, y; d-- > 0;) if (h = f[d], y = v(h, d, l), y) switch (e) {
            case 0:
              return h;
            case 1:
              return d;
          }
          return t ? -1 : void 0;
        };
      };
    gA.exports = {
      findLast: yA(0),
      findLastIndex: yA(1)
    };
  });
  var bA = m(function () {
    "use strict";

    var bK = z(),
      xK = bs().findLast,
      SK = On();
    bK({
      target: "Array",
      proto: !0
    }, {
      findLast: function findLast(t) {
        return xK(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    SK("findLast");
  });
  var SA = m(function (sxe, xA) {
    "use strict";

    bA();
    var EK = Ht();
    xA.exports = EK("Array", "findLast");
  });
  var TA = m(function (lxe, EA) {
    "use strict";

    EA.exports = SA();
  });
  var uf = m(function (cxe, qA) {
    "use strict";

    qA.exports = (typeof ArrayBuffer === "undefined" ? "undefined" : _typeof(ArrayBuffer)) < "u" && (typeof DataView === "undefined" ? "undefined" : _typeof(DataView)) < "u";
  });
  var wn = m(function (fxe, _A) {
    "use strict";

    var AA = ch(),
      TK = Nt();
    _A.exports = function (e, t, i) {
      return i.get && AA(i.get, t, {
        getter: !0
      }), i.set && AA(i.set, t, {
        setter: !0
      }), TK.f(e, t, i);
    };
  });
  var xs = m(function (pxe, OA) {
    "use strict";

    var qK = Rt();
    OA.exports = function (e, t, i) {
      for (var a in t) qK(e, a, t[a], i);
      return e;
    };
  });
  var Nn = m(function (dxe, wA) {
    "use strict";

    var AK = qn(),
      _K = TypeError;
    wA.exports = function (e, t) {
      if (AK(t, e)) return e;
      throw new _K("Incorrect invocation");
    };
  });
  var sf = m(function (vxe, NA) {
    "use strict";

    var OK = Je(),
      wK = Ft(),
      NK = RangeError;
    NA.exports = function (e) {
      if (e === void 0) return 0;
      var t = OK(e),
        i = wK(t);
      if (t !== i) throw new NK("Wrong length or index");
      return i;
    };
  });
  var CA = m(function (mxe, RA) {
    "use strict";

    RA.exports = Math.sign || function (t) {
      var i = +t;
      return i === 0 || i !== i ? i : i < 0 ? -1 : 1;
    };
  });
  var PA = m(function (hxe, DA) {
    "use strict";

    var RK = CA(),
      CK = Math.abs,
      BA = 2220446049250313e-31,
      MA = 1 / BA,
      MK = function MK(e) {
        return e + MA - MA;
      };
    DA.exports = function (e, t, i, a) {
      var u = +e,
        l = CK(u),
        f = RK(u);
      if (l < a) return f * MK(l / a / t) * a * t;
      var d = (1 + t / BA) * l,
        v = d - (d - l);
      return v > i || v !== v ? f * (1 / 0) : f * v;
    };
  });
  var UA = m(function (yxe, IA) {
    "use strict";

    var BK = PA(),
      DK = 11920928955078125e-23,
      PK = 34028234663852886e22,
      IK = 11754943508222875e-54;
    IA.exports = Math.fround || function (t) {
      return BK(t, DK, PK, IK);
    };
  });
  var LA = m(function (gxe, zA) {
    "use strict";

    var UK = Array,
      zK = Math.abs,
      Rn = Math.pow,
      LK = Math.floor,
      jK = Math.log,
      FK = Math.LN2,
      HK = function HK(e, t, i) {
        var a = UK(i),
          u = i * 8 - t - 1,
          l = (1 << u) - 1,
          f = l >> 1,
          d = t === 23 ? Rn(2, -24) - Rn(2, -77) : 0,
          v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0,
          h = 0,
          y,
          b,
          S;
        for (e = zK(e), e !== e || e === 1 / 0 ? (b = e !== e ? 1 : 0, y = l) : (y = LK(jK(e) / FK), S = Rn(2, -y), e * S < 1 && (y--, S *= 2), y + f >= 1 ? e += d / S : e += d * Rn(2, 1 - f), e * S >= 2 && (y++, S /= 2), y + f >= l ? (b = 0, y = l) : y + f >= 1 ? (b = (e * S - 1) * Rn(2, t), y += f) : (b = e * Rn(2, f - 1) * Rn(2, t), y = 0)); t >= 8;) a[h++] = b & 255, b /= 256, t -= 8;
        for (y = y << t | b, u += t; u > 0;) a[h++] = y & 255, y /= 256, u -= 8;
        return a[h - 1] |= v * 128, a;
      },
      GK = function GK(e, t) {
        var i = e.length,
          a = i * 8 - t - 1,
          u = (1 << a) - 1,
          l = u >> 1,
          f = a - 7,
          d = i - 1,
          v = e[d--],
          h = v & 127,
          y;
        for (v >>= 7; f > 0;) h = h * 256 + e[d--], f -= 8;
        for (y = h & (1 << -f) - 1, h >>= -f, f += t; f > 0;) y = y * 256 + e[d--], f -= 8;
        if (h === 0) h = 1 - l;else {
          if (h === u) return y ? NaN : v ? -1 / 0 : 1 / 0;
          y += Rn(2, t), h -= l;
        }
        return (v ? -1 : 1) * y * Rn(2, h - t);
      };
    zA.exports = {
      pack: HK,
      unpack: GK
    };
  });
  var FA = m(function (bxe, jA) {
    "use strict";

    var KK = Q();
    jA.exports = !KK(function () {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
    });
  });
  var da = m(function (xxe, GA) {
    "use strict";

    var VK = Ye(),
      YK = xe(),
      XK = dt(),
      kK = Xc(),
      QK = FA(),
      HA = kK("IE_PROTO"),
      Th = Object,
      ZK = Th.prototype;
    GA.exports = QK ? Th.getPrototypeOf : function (e) {
      var t = XK(e);
      if (VK(t, HA)) return t[HA];
      var i = t.constructor;
      return YK(i) && t instanceof i ? i.prototype : t instanceof Th ? ZK : null;
    };
  });
  var Ss = m(function (Sxe, KA) {
    "use strict";

    var WK = X(),
      JK = pt();
    KA.exports = function (e, t, i) {
      try {
        return WK(JK(Object.getOwnPropertyDescriptor(e, t)[i]));
      } catch (_unused12) {}
    };
  });
  var qh = m(function (Exe, VA) {
    "use strict";

    var $K = Ne();
    VA.exports = function (e) {
      return $K(e) || e === null;
    };
  });
  var XA = m(function (Txe, YA) {
    "use strict";

    var eV = qh(),
      tV = String,
      rV = TypeError;
    YA.exports = function (e) {
      if (eV(e)) return e;
      throw new rV("Can't set " + tV(e) + " as a prototype");
    };
  });
  var hi = m(function (qxe, kA) {
    "use strict";

    var nV = Ss(),
      iV = Ne(),
      aV = Be(),
      oV = XA();
    kA.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var e = !1,
        t = {},
        i;
      try {
        i = nV(Object.prototype, "__proto__", "set"), i(t, []), e = t instanceof Array;
      } catch (_unused13) {}
      return function (u, l) {
        return aV(u), oV(l), iV(u) && (e ? i(u, l) : u.__proto__ = l), u;
      };
    }() : void 0);
  });
  var yi = m(function (Axe, QA) {
    "use strict";

    var uV = X();
    QA.exports = uV([].slice);
  });
  var To = m(function (_xe, WA) {
    "use strict";

    var sV = xe(),
      lV = Ne(),
      ZA = hi();
    WA.exports = function (e, t, i) {
      var a, u;
      return ZA && sV(a = t.constructor) && a !== i && lV(u = a.prototype) && u !== i.prototype && ZA(e, u), e;
    };
  });
  var gi = m(function (Oxe, $A) {
    "use strict";

    var cV = Nt().f,
      fV = Ye(),
      pV = Re(),
      JA = pV("toStringTag");
    $A.exports = function (e, t, i) {
      e && !i && (e = e.prototype), e && !fV(e, JA) && cV(e, JA, {
        configurable: !0,
        value: t
      });
    };
  });
  var qs = m(function (wxe, h_) {
    "use strict";

    var df = J(),
      Nh = X(),
      Ah = we(),
      dV = uf(),
      f_ = ls(),
      vV = or(),
      mV = wn(),
      e_ = xs(),
      _h = Q(),
      lf = Nn(),
      hV = Je(),
      yV = Ft(),
      ff = sf(),
      gV = UA(),
      p_ = LA(),
      bV = da(),
      t_ = hi(),
      xV = nf(),
      SV = yi(),
      EV = To(),
      TV = $c(),
      d_ = gi(),
      Rh = jt(),
      qV = f_.PROPER,
      r_ = f_.CONFIGURABLE,
      Ao = "ArrayBuffer",
      vf = "DataView",
      _o = "prototype",
      AV = "Wrong length",
      v_ = "Wrong index",
      n_ = Rh.getterFor(Ao),
      Ts = Rh.getterFor(vf),
      i_ = Rh.set,
      Nr = df[Ao],
      _ur = Nr,
      qo = _ur && _ur[_o],
      Xr = df[vf],
      va = Xr && Xr[_o],
      a_ = Object.prototype,
      _V = df.Array,
      pf = df.RangeError,
      OV = Nh(xV),
      wV = Nh([].reverse),
      m_ = p_.pack,
      o_ = p_.unpack,
      u_ = function u_(e) {
        return [e & 255];
      },
      s_ = function s_(e) {
        return [e & 255, e >> 8 & 255];
      },
      l_ = function l_(e) {
        return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
      },
      c_ = function c_(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
      },
      NV = function NV(e) {
        return m_(gV(e), 23, 4);
      },
      RV = function RV(e) {
        return m_(e, 52, 8);
      },
      cf = function cf(e, t, i) {
        mV(e[_o], t, {
          configurable: !0,
          get: function get() {
            return i(this)[t];
          }
        });
      },
      bi = function bi(e, t, i, a) {
        var u = Ts(e),
          l = ff(i),
          f = !!a;
        if (l + t > u.byteLength) throw new pf(v_);
        var d = u.bytes,
          v = l + u.byteOffset,
          h = SV(d, v, v + t);
        return f ? h : wV(h);
      },
      xi = function xi(e, t, i, a, u, l) {
        var f = Ts(e),
          d = ff(i),
          v = a(+u),
          h = !!l;
        if (d + t > f.byteLength) throw new pf(v_);
        for (var y = f.bytes, b = d + f.byteOffset, S = 0; S < t; S++) y[b + S] = v[h ? S : t - S - 1];
      };
    dV ? (Oh = qV && Nr.name !== Ao, !_h(function () {
      Nr(1);
    }) || !_h(function () {
      new Nr(-1);
    }) || _h(function () {
      return new Nr(), new Nr(1.5), new Nr(NaN), Nr.length !== 1 || Oh && !r_;
    }) ? (_ur = function ur(t) {
      return lf(this, qo), EV(new Nr(ff(t)), this, _ur);
    }, _ur[_o] = qo, qo.constructor = _ur, TV(_ur, Nr)) : Oh && r_ && vV(Nr, "name", Ao), t_ && bV(va) !== a_ && t_(va, a_), Es = new Xr(new _ur(2)), wh = Nh(va.setInt8), Es.setInt8(0, 2147483648), Es.setInt8(1, 2147483649), (Es.getInt8(0) || !Es.getInt8(1)) && e_(va, {
      setInt8: function setInt8(t, i) {
        wh(this, t, i << 24 >> 24);
      },
      setUint8: function setUint8(t, i) {
        wh(this, t, i << 24 >> 24);
      }
    }, {
      unsafe: !0
    })) : (_ur = function _ur(t) {
      lf(this, qo);
      var i = ff(t);
      i_(this, {
        type: Ao,
        bytes: OV(_V(i), 0),
        byteLength: i
      }), Ah || (this.byteLength = i, this.detached = !1);
    }, qo = _ur[_o], Xr = function Xr(t, i, a) {
      lf(this, va), lf(t, qo);
      var u = n_(t),
        l = u.byteLength,
        f = hV(i);
      if (f < 0 || f > l) throw new pf("Wrong offset");
      if (a = a === void 0 ? l - f : yV(a), f + a > l) throw new pf(AV);
      i_(this, {
        type: vf,
        buffer: t,
        byteLength: a,
        byteOffset: f,
        bytes: u.bytes
      }), Ah || (this.buffer = t, this.byteLength = a, this.byteOffset = f);
    }, va = Xr[_o], Ah && (cf(_ur, "byteLength", n_), cf(Xr, "buffer", Ts), cf(Xr, "byteLength", Ts), cf(Xr, "byteOffset", Ts)), e_(va, {
      getInt8: function getInt8(t) {
        return bi(this, 1, t)[0] << 24 >> 24;
      },
      getUint8: function getUint8(t) {
        return bi(this, 1, t)[0];
      },
      getInt16: function getInt16(t) {
        var i = bi(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
        return (i[1] << 8 | i[0]) << 16 >> 16;
      },
      getUint16: function getUint16(t) {
        var i = bi(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
        return i[1] << 8 | i[0];
      },
      getInt32: function getInt32(t) {
        return c_(bi(this, 4, t, arguments.length > 1 ? arguments[1] : !1));
      },
      getUint32: function getUint32(t) {
        return c_(bi(this, 4, t, arguments.length > 1 ? arguments[1] : !1)) >>> 0;
      },
      getFloat32: function getFloat32(t) {
        return o_(bi(this, 4, t, arguments.length > 1 ? arguments[1] : !1), 23);
      },
      getFloat64: function getFloat64(t) {
        return o_(bi(this, 8, t, arguments.length > 1 ? arguments[1] : !1), 52);
      },
      setInt8: function setInt8(t, i) {
        xi(this, 1, t, u_, i);
      },
      setUint8: function setUint8(t, i) {
        xi(this, 1, t, u_, i);
      },
      setInt16: function setInt16(t, i) {
        xi(this, 2, t, s_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint16: function setUint16(t, i) {
        xi(this, 2, t, s_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setInt32: function setInt32(t, i) {
        xi(this, 4, t, l_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint32: function setUint32(t, i) {
        xi(this, 4, t, l_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat32: function setFloat32(t, i) {
        xi(this, 4, t, NV, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat64: function setFloat64(t, i) {
        xi(this, 8, t, RV, i, arguments.length > 2 ? arguments[2] : !1);
      }
    }));
    var Oh, Es, wh;
    d_(_ur, Ao);
    d_(Xr, vf);
    h_.exports = {
      ArrayBuffer: _ur,
      DataView: Xr
    };
  });
  var As = m(function (Nxe, g_) {
    "use strict";

    var CV = wt(),
      MV = wn(),
      BV = Re(),
      DV = we(),
      y_ = BV("species");
    g_.exports = function (e) {
      var t = CV(e);
      DV && t && !t[y_] && MV(t, y_, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  });
  var x_ = m(function () {
    "use strict";

    var PV = z(),
      IV = J(),
      UV = qs(),
      zV = As(),
      Ch = "ArrayBuffer",
      b_ = UV[Ch],
      LV = IV[Ch];
    PV({
      global: !0,
      constructor: !0,
      forced: LV !== b_
    }, {
      ArrayBuffer: b_
    });
    zV(Ch);
  });
  var se = m(function (Mxe, R_) {
    "use strict";

    var jV = uf(),
      Ph = we(),
      Mt = J(),
      q_ = xe(),
      yf = Ne(),
      Ei = Ye(),
      Ih = Yr(),
      FV = la(),
      HV = or(),
      Mh = Rt(),
      GV = wn(),
      KV = qn(),
      gf = da(),
      wo = hi(),
      VV = Re(),
      YV = xo(),
      A_ = jt(),
      __ = A_.enforce,
      XV = A_.get,
      mf = Mt.Int8Array,
      Bh = mf && mf.prototype,
      S_ = Mt.Uint8ClampedArray,
      E_ = S_ && S_.prototype,
      kr = mf && gf(mf),
      Rr = Bh && gf(Bh),
      kV = Object.prototype,
      Uh = Mt.TypeError,
      T_ = VV("toStringTag"),
      Dh = YV("TYPED_ARRAY_TAG"),
      hf = "TypedArrayConstructor",
      Cn = jV && !!wo && Ih(Mt.opera) !== "Opera",
      O_ = !1,
      Gt,
      Si,
      Oo,
      Mn = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
      },
      zh = {
        BigInt64Array: 8,
        BigUint64Array: 8
      },
      QV = function QV(t) {
        if (!yf(t)) return !1;
        var i = Ih(t);
        return i === "DataView" || Ei(Mn, i) || Ei(zh, i);
      },
      _w_ = function w_(e) {
        var t = gf(e);
        if (yf(t)) {
          var i = XV(t);
          return i && Ei(i, hf) ? i[hf] : _w_(t);
        }
      },
      N_ = function N_(e) {
        if (!yf(e)) return !1;
        var t = Ih(e);
        return Ei(Mn, t) || Ei(zh, t);
      },
      ZV = function ZV(e) {
        if (N_(e)) return e;
        throw new Uh("Target is not a typed array");
      },
      WV = function WV(e) {
        if (q_(e) && (!wo || KV(kr, e))) return e;
        throw new Uh(FV(e) + " is not a typed array constructor");
      },
      JV = function JV(e, t, i, a) {
        if (Ph) {
          if (i) for (var u in Mn) {
            var l = Mt[u];
            if (l && Ei(l.prototype, e)) try {
              delete l.prototype[e];
            } catch (_unused14) {
              try {
                l.prototype[e] = t;
              } catch (_unused15) {}
            }
          }
          (!Rr[e] || i) && Mh(Rr, e, i ? t : Cn && Bh[e] || t, a);
        }
      },
      $V = function $V(e, t, i) {
        var a, u;
        if (Ph) {
          if (wo) {
            if (i) {
              for (a in Mn) if (u = Mt[a], u && Ei(u, e)) try {
                delete u[e];
              } catch (_unused16) {}
            }
            if (!kr[e] || i) try {
              return Mh(kr, e, i ? t : Cn && kr[e] || t);
            } catch (_unused17) {} else return;
          }
          for (a in Mn) u = Mt[a], u && (!u[e] || i) && Mh(u, e, t);
        }
      };
    for (Gt in Mn) Si = Mt[Gt], Oo = Si && Si.prototype, Oo ? __(Oo)[hf] = Si : Cn = !1;
    for (Gt in zh) Si = Mt[Gt], Oo = Si && Si.prototype, Oo && (__(Oo)[hf] = Si);
    if ((!Cn || !q_(kr) || kr === Function.prototype) && (kr = function kr() {
      throw new Uh("Incorrect invocation");
    }, Cn)) for (Gt in Mn) Mt[Gt] && wo(Mt[Gt], kr);
    if ((!Cn || !Rr || Rr === kV) && (Rr = kr.prototype, Cn)) for (Gt in Mn) Mt[Gt] && wo(Mt[Gt].prototype, Rr);
    Cn && gf(E_) !== Rr && wo(E_, Rr);
    if (Ph && !Ei(Rr, T_)) {
      O_ = !0, GV(Rr, T_, {
        configurable: !0,
        get: function get() {
          return yf(this) ? this[Dh] : void 0;
        }
      });
      for (Gt in Mn) Mt[Gt] && HV(Mt[Gt], Dh, Gt);
    }
    R_.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: Cn,
      TYPED_ARRAY_TAG: O_ && Dh,
      aTypedArray: ZV,
      aTypedArrayConstructor: WV,
      exportTypedArrayMethod: JV,
      exportTypedArrayStaticMethod: $V,
      getTypedArrayConstructor: _w_,
      isView: QV,
      isTypedArray: N_,
      TypedArray: kr,
      TypedArrayPrototype: Rr
    };
  });
  var M_ = m(function () {
    "use strict";

    var e9 = z(),
      C_ = se(),
      t9 = C_.NATIVE_ARRAY_BUFFER_VIEWS;
    e9({
      target: "ArrayBuffer",
      stat: !0,
      forced: !t9
    }, {
      isView: C_.isView
    });
  });
  var z_ = m(function () {
    "use strict";

    var r9 = z(),
      jh = vi(),
      n9 = Q(),
      I_ = qs(),
      B_ = De(),
      D_ = pa(),
      i9 = Ft(),
      Fh = I_.ArrayBuffer,
      Lh = I_.DataView,
      U_ = Lh.prototype,
      P_ = jh(Fh.prototype.slice),
      a9 = jh(U_.getUint8),
      o9 = jh(U_.setUint8),
      u9 = n9(function () {
        return !new Fh(2).slice(1, void 0).byteLength;
      });
    r9({
      target: "ArrayBuffer",
      proto: !0,
      unsafe: !0,
      forced: u9
    }, {
      slice: function slice(t, i) {
        if (P_ && i === void 0) return P_(B_(this), t);
        for (var a = B_(this).byteLength, u = D_(t, a), l = D_(i === void 0 ? a : i, a), f = new Fh(i9(l - u)), d = new Lh(this), v = new Lh(f), h = 0; u < l;) o9(v, h++, a9(d, u++));
        return f;
      }
    });
  });
  var L_ = m(function () {
    "use strict";

    var s9 = z(),
      l9 = qs(),
      c9 = uf();
    s9({
      global: !0,
      constructor: !0,
      forced: !c9
    }, {
      DataView: l9.DataView
    });
  });
  var j_ = m(function () {
    "use strict";

    L_();
  });
  var Hh = m(function (Fxe, G_) {
    "use strict";

    var H_ = J(),
      f9 = Ss(),
      p9 = yr(),
      F_ = H_.ArrayBuffer,
      d9 = H_.TypeError;
    G_.exports = F_ && f9(F_.prototype, "byteLength", "get") || function (e) {
      if (p9(e) !== "ArrayBuffer") throw new d9("ArrayBuffer expected");
      return e.byteLength;
    };
  });
  var Gh = m(function (Hxe, X_) {
    "use strict";

    var v9 = J(),
      m9 = vi(),
      h9 = Hh(),
      K_ = v9.ArrayBuffer,
      V_ = K_ && K_.prototype,
      Y_ = V_ && m9(V_.slice);
    X_.exports = function (e) {
      if (h9(e) !== 0 || !Y_) return !1;
      try {
        return Y_(e, 0, 0), !1;
      } catch (_unused18) {
        return !0;
      }
    };
  });
  var Q_ = m(function () {
    "use strict";

    var y9 = we(),
      g9 = wn(),
      b9 = Gh(),
      k_ = ArrayBuffer.prototype;
    y9 && !("detached" in k_) && g9(k_, "detached", {
      configurable: !0,
      get: function get() {
        return b9(this);
      }
    });
  });
  var W_ = m(function (Vxe, Z_) {
    "use strict";

    var x9 = Gh(),
      S9 = TypeError;
    Z_.exports = function (e) {
      if (x9(e)) throw new S9("ArrayBuffer is detached");
      return e;
    };
  });
  var xf = m(function (Yxe, J_) {
    "use strict";

    var _s = J(),
      E9 = Kr(),
      T9 = yr(),
      bf = function bf(e) {
        return E9.slice(0, e.length) === e;
      };
    J_.exports = function () {
      return bf("Bun/") ? "BUN" : bf("Cloudflare-Workers") ? "CLOUDFLARE" : bf("Deno/") ? "DENO" : bf("Node.js/") ? "NODE" : _s.Bun && typeof Bun.version == "string" ? "BUN" : _s.Deno && _typeof(Deno.version) == "object" ? "DENO" : T9(_s.process) === "process" ? "NODE" : _s.window && _s.document ? "BROWSER" : "REST";
    }();
  });
  var Os = m(function (Xxe, $_) {
    "use strict";

    var q9 = xf();
    $_.exports = q9 === "NODE";
  });
  var Kh = m(function (kxe, eO) {
    "use strict";

    var A9 = J(),
      _9 = Os();
    eO.exports = function (e) {
      if (_9) {
        try {
          return A9.process.getBuiltinModule(e);
        } catch (_unused19) {}
        try {
          return Function('return require("' + e + '")')();
        } catch (_unused20) {}
      }
    };
  });
  var Sf = m(function (Qxe, rO) {
    "use strict";

    var O9 = J(),
      w9 = Q(),
      Vh = us(),
      Yh = xf(),
      tO = O9.structuredClone;
    rO.exports = !!tO && !w9(function () {
      if (Yh === "DENO" && Vh > 92 || Yh === "NODE" && Vh > 94 || Yh === "BROWSER" && Vh > 97) return !1;
      var e = new ArrayBuffer(8),
        t = tO(e, {
          transfer: [e]
        });
      return e.byteLength !== 0 || t.byteLength !== 8;
    });
  });
  var Wh = m(function (Zxe, aO) {
    "use strict";

    var Zh = J(),
      N9 = Kh(),
      R9 = Sf(),
      C9 = Zh.structuredClone,
      nO = Zh.ArrayBuffer,
      Ef = Zh.MessageChannel,
      Qh = !1,
      Xh,
      iO,
      Tf,
      kh;
    if (R9) Qh = function Qh(e) {
      C9(e, {
        transfer: [e]
      });
    };else if (nO) try {
      Ef || (Xh = N9("worker_threads"), Xh && (Ef = Xh.MessageChannel)), Ef && (iO = new Ef(), Tf = new nO(2), kh = function kh(e) {
        iO.port1.postMessage(null, [e]);
      }, Tf.byteLength === 2 && (kh(Tf), Tf.byteLength === 0 && (Qh = kh)));
    } catch (_unused21) {}
    aO.exports = Qh;
  });
  var ny = m(function (Wxe, pO) {
    "use strict";

    var ey = J(),
      ty = X(),
      lO = Ss(),
      M9 = sf(),
      B9 = W_(),
      D9 = Hh(),
      oO = Wh(),
      Jh = Sf(),
      P9 = ey.structuredClone,
      cO = ey.ArrayBuffer,
      $h = ey.DataView,
      I9 = Math.min,
      ry = cO.prototype,
      fO = $h.prototype,
      U9 = ty(ry.slice),
      uO = lO(ry, "resizable", "get"),
      sO = lO(ry, "maxByteLength", "get"),
      z9 = ty(fO.getInt8),
      L9 = ty(fO.setInt8);
    pO.exports = (Jh || oO) && function (e, t, i) {
      var a = D9(e),
        u = t === void 0 ? a : M9(t),
        l = !uO || !uO(e),
        f;
      if (B9(e), Jh && (e = P9(e, {
        transfer: [e]
      }), a === u && (i || l))) return e;
      if (a >= u && (!i || l)) f = U9(e, 0, u);else {
        var d = i && !l && sO ? {
          maxByteLength: sO(e)
        } : void 0;
        f = new cO(u, d);
        for (var v = new $h(e), h = new $h(f), y = I9(u, a), b = 0; b < y; b++) L9(h, b, z9(v, b));
      }
      return Jh || oO(e), f;
    };
  });
  var vO = m(function () {
    "use strict";

    var j9 = z(),
      dO = ny();
    dO && j9({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transfer: function transfer() {
        return dO(this, arguments.length ? arguments[0] : void 0, !0);
      }
    });
  });
  var hO = m(function () {
    "use strict";

    var F9 = z(),
      mO = ny();
    mO && F9({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transferToFixedLength: function transferToFixedLength() {
        return mO(this, arguments.length ? arguments[0] : void 0, !1);
      }
    });
  });
  var gO = m(function (rSe, yO) {
    "use strict";

    var H9 = tf(),
      G9 = Yr();
    yO.exports = H9 ? {}.toString : function () {
      return "[object " + G9(this) + "]";
    };
  });
  var Qr = m(function () {
    "use strict";

    var K9 = tf(),
      V9 = Rt(),
      Y9 = gO();
    K9 || V9(Object.prototype, "toString", Y9, {
      unsafe: !0
    });
  });
  var it = m(function (aSe, bO) {
    "use strict";

    var X9 = J();
    bO.exports = X9;
  });
  var SO = m(function (oSe, xO) {
    "use strict";

    x_();
    M_();
    z_();
    j_();
    Q_();
    vO();
    hO();
    Qr();
    var k9 = it();
    xO.exports = k9.ArrayBuffer;
  });
  var TO = m(function (uSe, EO) {
    "use strict";

    var Q9 = SO();
    EO.exports = Q9;
  });
  var qO = m(function () {
    "use strict";

    var Z9 = z(),
      W9 = bs().findLastIndex,
      J9 = On();
    Z9({
      target: "Array",
      proto: !0
    }, {
      findLastIndex: function findLastIndex(t) {
        return W9(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    J9("findLastIndex");
  });
  var _O = m(function (cSe, AO) {
    "use strict";

    qO();
    var $9 = Ht();
    AO.exports = $9("Array", "findLastIndex");
  });
  var wO = m(function (fSe, OO) {
    "use strict";

    OO.exports = _O();
  });
  var RO = m(function (pSe, NO) {
    "use strict";

    var eY = Ct().forEach,
      tY = ys(),
      rY = tY("forEach");
    NO.exports = rY ? [].forEach : function (t) {
      return eY(this, t, arguments.length > 1 ? arguments[1] : void 0);
    };
  });
  var MO = m(function () {
    "use strict";

    var nY = z(),
      CO = RO();
    nY({
      target: "Array",
      proto: !0,
      forced: [].forEach !== CO
    }, {
      forEach: CO
    });
  });
  var DO = m(function (mSe, BO) {
    "use strict";

    MO();
    var iY = Ht();
    BO.exports = iY("Array", "forEach");
  });
  var IO = m(function (hSe, PO) {
    "use strict";

    var aY = DO();
    PO.exports = aY;
  });
  var Se = m(function (ySe, UO) {
    "use strict";

    var oY = Yr(),
      uY = String;
    UO.exports = function (e) {
      if (oY(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return uY(e);
    };
  });
  var qf = m(function (gSe, jO) {
    "use strict";

    var iy = X(),
      sY = Je(),
      lY = Se(),
      cY = Be(),
      fY = iy("".charAt),
      zO = iy("".charCodeAt),
      pY = iy("".slice),
      LO = function LO(e) {
        return function (t, i) {
          var a = lY(cY(t)),
            u = sY(i),
            l = a.length,
            f,
            d;
          return u < 0 || u >= l ? e ? "" : void 0 : (f = zO(a, u), f < 55296 || f > 56319 || u + 1 === l || (d = zO(a, u + 1)) < 56320 || d > 57343 ? e ? fY(a, u) : f : e ? pY(a, u, u + 2) : (f - 55296 << 10) + (d - 56320) + 65536);
        };
      };
    jO.exports = {
      codeAt: LO(!1),
      charAt: LO(!0)
    };
  });
  var sy = m(function (bSe, GO) {
    "use strict";

    var dY = Q(),
      vY = xe(),
      mY = Ne(),
      hY = _n(),
      FO = da(),
      yY = Rt(),
      gY = Re(),
      bY = We(),
      uy = gY("iterator"),
      HO = !1,
      Bn,
      ay,
      oy;
    [].keys && (oy = [].keys(), "next" in oy ? (ay = FO(FO(oy)), ay !== Object.prototype && (Bn = ay)) : HO = !0);
    var xY = !mY(Bn) || dY(function () {
      var e = {};
      return Bn[uy].call(e) !== e;
    });
    xY ? Bn = {} : bY && (Bn = hY(Bn));
    vY(Bn[uy]) || yY(Bn, uy, function () {
      return this;
    });
    GO.exports = {
      IteratorPrototype: Bn,
      BUGGY_SAFARI_ITERATORS: HO
    };
  });
  var No = m(function (xSe, KO) {
    "use strict";

    KO.exports = {};
  });
  var ly = m(function (SSe, VO) {
    "use strict";

    var SY = sy().IteratorPrototype,
      EY = _n(),
      TY = Hr(),
      qY = gi(),
      AY = No(),
      _Y = function _Y() {
        return this;
      };
    VO.exports = function (e, t, i, a) {
      var u = t + " Iterator";
      return e.prototype = EY(SY, {
        next: TY(+!a, i)
      }), qY(e, u, !1, !0), AY[u] = _Y, e;
    };
  });
  var Of = m(function (ESe, t2) {
    "use strict";

    var OY = z(),
      wY = me(),
      Af = We(),
      $O = ls(),
      NY = xe(),
      RY = ly(),
      YO = da(),
      XO = hi(),
      CY = gi(),
      MY = or(),
      cy = Rt(),
      BY = Re(),
      kO = No(),
      e2 = sy(),
      DY = $O.PROPER,
      PY = $O.CONFIGURABLE,
      QO = e2.IteratorPrototype,
      _f = e2.BUGGY_SAFARI_ITERATORS,
      ws = BY("iterator"),
      ZO = "keys",
      Ns = "values",
      WO = "entries",
      JO = function JO() {
        return this;
      };
    t2.exports = function (e, t, i, a, u, l, f) {
      RY(i, t, a);
      var d = function d(x) {
          if (x === u && S) return S;
          if (!_f && x && x in y) return y[x];
          switch (x) {
            case ZO:
              return function () {
                return new i(this, x);
              };
            case Ns:
              return function () {
                return new i(this, x);
              };
            case WO:
              return function () {
                return new i(this, x);
              };
          }
          return function () {
            return new i(this);
          };
        },
        v = t + " Iterator",
        h = !1,
        y = e.prototype,
        b = y[ws] || y["@@iterator"] || u && y[u],
        S = !_f && b || d(u),
        T = t === "Array" && y.entries || b,
        R,
        A,
        _;
      if (T && (R = YO(T.call(new e())), R !== Object.prototype && R.next && (!Af && YO(R) !== QO && (XO ? XO(R, QO) : NY(R[ws]) || cy(R, ws, JO)), CY(R, v, !0, !0), Af && (kO[v] = JO))), DY && u === Ns && b && b.name !== Ns && (!Af && PY ? MY(y, "name", Ns) : (h = !0, S = function S() {
        return wY(b, this);
      })), u) if (A = {
        values: d(Ns),
        keys: l ? S : d(ZO),
        entries: d(WO)
      }, f) for (_ in A) (_f || h || !(_ in y)) && cy(y, _, A[_]);else OY({
        target: t,
        proto: !0,
        forced: _f || h
      }, A);
      return (!Af || f) && y[ws] !== S && cy(y, ws, S, {
        name: u
      }), kO[t] = S, A;
    };
  });
  var Rs = m(function (TSe, r2) {
    "use strict";

    r2.exports = function (e, t) {
      return {
        value: e,
        done: t
      };
    };
  });
  var ma = m(function () {
    "use strict";

    var IY = qf().charAt,
      UY = Se(),
      i2 = jt(),
      zY = Of(),
      n2 = Rs(),
      a2 = "String Iterator",
      LY = i2.set,
      jY = i2.getterFor(a2);
    zY(String, "String", function (e) {
      LY(this, {
        type: a2,
        string: UY(e),
        index: 0
      });
    }, function () {
      var t = jY(this),
        i = t.string,
        a = t.index,
        u;
      return a >= i.length ? n2(void 0, !0) : (u = IY(i, a), t.index += u.length, n2(u, !1));
    });
  });
  var Cs = m(function (_Se, u2) {
    "use strict";

    var FY = me(),
      o2 = De(),
      HY = Vr();
    u2.exports = function (e, t, i) {
      var a, u;
      o2(e);
      try {
        if (a = HY(e, "return"), !a) {
          if (t === "throw") throw i;
          return i;
        }
        a = FY(a, e);
      } catch (l) {
        u = !0, a = l;
      }
      if (t === "throw") throw i;
      if (u) throw a;
      return o2(a), i;
    };
  });
  var l2 = m(function (OSe, s2) {
    "use strict";

    var GY = De(),
      KY = Cs();
    s2.exports = function (e, t, i, a) {
      try {
        return a ? t(GY(i)[0], i[1]) : t(i);
      } catch (u) {
        KY(e, "throw", u);
      }
    };
  });
  var wf = m(function (wSe, c2) {
    "use strict";

    var VY = Re(),
      YY = No(),
      XY = VY("iterator"),
      kY = Array.prototype;
    c2.exports = function (e) {
      return e !== void 0 && (YY.Array === e || kY[XY] === e);
    };
  });
  var fy = m(function (NSe, f2) {
    "use strict";

    var QY = we(),
      ZY = Nt(),
      WY = Hr();
    f2.exports = function (e, t, i) {
      QY ? ZY.f(e, t, WY(0, i)) : e[t] = i;
    };
  });
  var Ms = m(function (RSe, d2) {
    "use strict";

    var JY = Yr(),
      p2 = Vr(),
      $Y = Ot(),
      eX = No(),
      tX = Re(),
      rX = tX("iterator");
    d2.exports = function (e) {
      if (!$Y(e)) return p2(e, rX) || p2(e, "@@iterator") || eX[JY(e)];
    };
  });
  var Nf = m(function (CSe, v2) {
    "use strict";

    var nX = me(),
      iX = pt(),
      aX = De(),
      oX = la(),
      uX = Ms(),
      sX = TypeError;
    v2.exports = function (e, t) {
      var i = arguments.length < 2 ? uX(e) : t;
      if (iX(i)) return aX(nX(i, e));
      throw new sX(oX(e) + " is not iterable");
    };
  });
  var g2 = m(function (MSe, y2) {
    "use strict";

    var lX = An(),
      cX = me(),
      fX = dt(),
      pX = l2(),
      dX = wf(),
      vX = hs(),
      mX = $e(),
      m2 = fy(),
      hX = Nf(),
      yX = Ms(),
      h2 = Array;
    y2.exports = function (t) {
      var i = fX(t),
        a = vX(this),
        u = arguments.length,
        l = u > 1 ? arguments[1] : void 0,
        f = l !== void 0;
      f && (l = lX(l, u > 2 ? arguments[2] : void 0));
      var d = yX(i),
        v = 0,
        h,
        y,
        b,
        S,
        T,
        R;
      if (d && !(this === h2 && dX(d))) for (y = a ? new this() : [], S = hX(i, d), T = S.next; !(b = cX(T, S)).done; v++) R = f ? pX(S, l, [b.value, v], !0) : b.value, m2(y, v, R);else for (h = mX(i), y = a ? new this(h) : h2(h); h > v; v++) R = f ? l(i[v], v) : i[v], m2(y, v, R);
      return y.length = v, y;
    };
  });
  var Bs = m(function (BSe, E2) {
    "use strict";

    var gX = Re(),
      x2 = gX("iterator"),
      S2 = !1;
    try {
      b2 = 0, py = {
        next: function next() {
          return {
            done: !!b2++
          };
        },
        return: function _return() {
          S2 = !0;
        }
      }, py[x2] = function () {
        return this;
      }, Array.from(py, function () {
        throw 2;
      });
    } catch (_unused22) {}
    var b2, py;
    E2.exports = function (e, t) {
      try {
        if (!t && !S2) return !1;
      } catch (_unused23) {
        return !1;
      }
      var i = !1;
      try {
        var a = {};
        a[x2] = function () {
          return {
            next: function next() {
              return {
                done: i = !0
              };
            }
          };
        }, e(a);
      } catch (_unused24) {}
      return i;
    };
  });
  var T2 = m(function () {
    "use strict";

    var bX = z(),
      xX = g2(),
      SX = Bs(),
      EX = !SX(function (e) {
        Array.from(e);
      });
    bX({
      target: "Array",
      stat: !0,
      forced: EX
    }, {
      from: xX
    });
  });
  var A2 = m(function (ISe, q2) {
    "use strict";

    ma();
    T2();
    var TX = it();
    q2.exports = TX.Array.from;
  });
  var O2 = m(function (USe, _2) {
    "use strict";

    var qX = A2();
    _2.exports = qX;
  });
  var w2 = m(function () {
    "use strict";

    var AX = z(),
      _X = Ct().some,
      OX = ys(),
      wX = OX("some");
    AX({
      target: "Array",
      proto: !0,
      forced: !wX
    }, {
      some: function some(t) {
        return _X(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var R2 = m(function (jSe, N2) {
    "use strict";

    w2();
    var NX = Ht();
    N2.exports = NX("Array", "some");
  });
  var M2 = m(function (FSe, C2) {
    "use strict";

    var RX = R2();
    C2.exports = RX;
  });
  var B2 = m(function () {
    "use strict";

    var CX = z(),
      MX = ps().includes,
      BX = Q(),
      DX = On(),
      PX = BX(function () {
        return !Array(1).includes();
      });
    CX({
      target: "Array",
      proto: !0,
      forced: PX
    }, {
      includes: function includes(t) {
        return MX(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    DX("includes");
  });
  var P2 = m(function (KSe, D2) {
    "use strict";

    B2();
    var IX = Ht();
    D2.exports = IX("Array", "includes");
  });
  var U2 = m(function (VSe, I2) {
    "use strict";

    var UX = P2();
    I2.exports = UX;
  });
  var z2 = m(function () {
    "use strict";

    var zX = z(),
      LX = dt(),
      jX = $e(),
      FX = Je(),
      HX = On();
    zX({
      target: "Array",
      proto: !0
    }, {
      at: function at(t) {
        var i = LX(this),
          a = jX(i),
          u = FX(t),
          l = u >= 0 ? u : a + u;
        return l < 0 || l >= a ? void 0 : i[l];
      }
    });
    HX("at");
  });
  var j2 = m(function (kSe, L2) {
    "use strict";

    z2();
    var GX = Ht();
    L2.exports = GX("Array", "at");
  });
  var H2 = m(function (QSe, F2) {
    "use strict";

    var KX = j2();
    F2.exports = KX;
  });
  var Ds = m(function (ZSe, G2) {
    "use strict";

    var VX = X();
    G2.exports = VX(1 .valueOf);
  });
  var Ps = m(function (WSe, K2) {
    "use strict";

    K2.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  });
  var ha = m(function (JSe, Y2) {
    "use strict";

    var YX = X(),
      XX = Be(),
      kX = Se(),
      vy = Ps(),
      V2 = YX("".replace),
      QX = RegExp("^[" + vy + "]+"),
      ZX = RegExp("(^|[^" + vy + "])[" + vy + "]+$"),
      dy = function dy(e) {
        return function (t) {
          var i = kX(XX(t));
          return e & 1 && (i = V2(i, QX, "")), e & 2 && (i = V2(i, ZX, "$1")), i;
        };
      };
    Y2.exports = {
      start: dy(1),
      end: dy(2),
      trim: dy(3)
    };
  });
  var $2 = m(function () {
    "use strict";

    var WX = z(),
      my = We(),
      JX = we(),
      Q2 = J(),
      hy = it(),
      Z2 = X(),
      $X = vs(),
      X2 = Ye(),
      ek = To(),
      tk = qn(),
      rk = bo(),
      W2 = Gc(),
      nk = Q(),
      ik = Eo().f,
      ak = ca().f,
      ok = Nt().f,
      uk = Ds(),
      sk = ha().trim,
      Is = "Number",
      Ro = Q2[Is],
      k2 = hy[Is],
      yy = Ro.prototype,
      lk = Q2.TypeError,
      ck = Z2("".slice),
      Rf = Z2("".charCodeAt),
      fk = function fk(e) {
        var t = W2(e, "number");
        return typeof t == "bigint" ? t : pk(t);
      },
      pk = function pk(e) {
        var t = W2(e, "number"),
          i,
          a,
          u,
          l,
          f,
          d,
          v,
          h;
        if (rk(t)) throw new lk("Cannot convert a Symbol value to a number");
        if (typeof t == "string" && t.length > 2) {
          if (t = sk(t), i = Rf(t, 0), i === 43 || i === 45) {
            if (a = Rf(t, 2), a === 88 || a === 120) return NaN;
          } else if (i === 48) {
            switch (Rf(t, 1)) {
              case 66:
              case 98:
                u = 2, l = 49;
                break;
              case 79:
              case 111:
                u = 8, l = 55;
                break;
              default:
                return +t;
            }
            for (f = ck(t, 2), d = f.length, v = 0; v < d; v++) if (h = Rf(f, v), h < 48 || h > l) return NaN;
            return parseInt(f, u);
          }
        }
        return +t;
      },
      gy = $X(Is, !Ro(" 0o1") || !Ro("0b1") || Ro("+0x1")),
      dk = function dk(e) {
        return tk(yy, e) && nk(function () {
          uk(e);
        });
      },
      _Cf = function Cf(t) {
        var i = arguments.length < 1 ? 0 : Ro(fk(t));
        return dk(this) ? ek(Object(i), this, _Cf) : i;
      };
    _Cf.prototype = yy;
    gy && !my && (yy.constructor = _Cf);
    WX({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: gy
    }, {
      Number: _Cf
    });
    var J2 = function J2(e, t) {
      for (var i = JX ? ik(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), a = 0, u; i.length > a; a++) X2(t, u = i[a]) && !X2(e, u) && ok(e, u, ak(t, u));
    };
    my && k2 && J2(hy[Is], k2);
    (gy || my) && J2(hy[Is], Ro);
  });
  var ew = m(function () {
    "use strict";

    var vk = z();
    vk({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      EPSILON: Math.pow(2, -52)
    });
  });
  var rw = m(function (nEe, tw) {
    "use strict";

    var mk = J(),
      hk = mk.isFinite;
    tw.exports = Number.isFinite || function (t) {
      return typeof t == "number" && hk(t);
    };
  });
  var nw = m(function () {
    "use strict";

    var yk = z(),
      gk = rw();
    yk({
      target: "Number",
      stat: !0
    }, {
      isFinite: gk
    });
  });
  var Mf = m(function (oEe, iw) {
    "use strict";

    var bk = Ne(),
      xk = Math.floor;
    iw.exports = Number.isInteger || function (t) {
      return !bk(t) && isFinite(t) && xk(t) === t;
    };
  });
  var aw = m(function () {
    "use strict";

    var Sk = z(),
      Ek = Mf();
    Sk({
      target: "Number",
      stat: !0
    }, {
      isInteger: Ek
    });
  });
  var ow = m(function () {
    "use strict";

    var Tk = z();
    Tk({
      target: "Number",
      stat: !0
    }, {
      isNaN: function isNaN(t) {
        return t !== t;
      }
    });
  });
  var uw = m(function () {
    "use strict";

    var qk = z(),
      Ak = Mf(),
      _k = Math.abs;
    qk({
      target: "Number",
      stat: !0
    }, {
      isSafeInteger: function isSafeInteger(t) {
        return Ak(t) && _k(t) <= 9007199254740991;
      }
    });
  });
  var sw = m(function () {
    "use strict";

    var Ok = z();
    Ok({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MAX_SAFE_INTEGER: 9007199254740991
    });
  });
  var lw = m(function () {
    "use strict";

    var wk = z();
    wk({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MIN_SAFE_INTEGER: -9007199254740991
    });
  });
  var vw = m(function (yEe, dw) {
    "use strict";

    var pw = J(),
      Nk = Q(),
      Rk = X(),
      Ck = Se(),
      Mk = ha().trim,
      Bk = Ps(),
      Dk = Rk("".charAt),
      Bf = pw.parseFloat,
      cw = pw.Symbol,
      fw = cw && cw.iterator,
      Pk = 1 / Bf(Bk + "-0") !== -1 / 0 || fw && !Nk(function () {
        Bf(Object(fw));
      });
    dw.exports = Pk ? function (t) {
      var i = Mk(Ck(t)),
        a = Bf(i);
      return a === 0 && Dk(i, 0) === "-" ? -0 : a;
    } : Bf;
  });
  var hw = m(function () {
    "use strict";

    var Ik = z(),
      mw = vw();
    Ik({
      target: "Number",
      stat: !0,
      forced: Number.parseFloat !== mw
    }, {
      parseFloat: mw
    });
  });
  var Tw = m(function (xEe, Ew) {
    "use strict";

    var xw = J(),
      Uk = Q(),
      zk = X(),
      Lk = Se(),
      jk = ha().trim,
      yw = Ps(),
      Us = xw.parseInt,
      gw = xw.Symbol,
      bw = gw && gw.iterator,
      Sw = /^[+-]?0x/i,
      Fk = zk(Sw.exec),
      Hk = Us(yw + "08") !== 8 || Us(yw + "0x16") !== 22 || bw && !Uk(function () {
        Us(Object(bw));
      });
    Ew.exports = Hk ? function (t, i) {
      var a = jk(Lk(t));
      return Us(a, i >>> 0 || (Fk(Sw, a) ? 16 : 10));
    } : Us;
  });
  var Aw = m(function () {
    "use strict";

    var Gk = z(),
      qw = Tw();
    Gk({
      target: "Number",
      stat: !0,
      forced: Number.parseInt !== qw
    }, {
      parseInt: qw
    });
  });
  var zs = m(function (TEe, _w) {
    "use strict";

    var Kk = Je(),
      Vk = Se(),
      Yk = Be(),
      Xk = RangeError;
    _w.exports = function (t) {
      var i = Vk(Yk(this)),
        a = "",
        u = Kk(t);
      if (u < 0 || u === 1 / 0) throw new Xk("Wrong number of repetitions");
      for (; u > 0; (u >>>= 1) && (i += i)) u & 1 && (a += i);
      return a;
    };
  });
  var ww = m(function (qEe, Ow) {
    "use strict";

    var kk = Math.log,
      Qk = Math.LOG10E;
    Ow.exports = Math.log10 || function (t) {
      return kk(t) * Qk;
    };
  });
  var Bw = m(function () {
    "use strict";

    var Zk = z(),
      xy = X(),
      Wk = Je(),
      Jk = Ds(),
      $k = zs(),
      eQ = ww(),
      by = Q(),
      tQ = RangeError,
      Nw = String,
      rQ = isFinite,
      nQ = Math.abs,
      iQ = Math.floor,
      Rw = Math.pow,
      aQ = Math.round,
      Zr = xy(1 .toExponential),
      oQ = xy($k),
      Cw = xy("".slice),
      Mw = Zr(-69e-12, 4) === "-6.9000e-11" && Zr(1.255, 2) === "1.25e+0" && Zr(12345, 3) === "1.235e+4" && Zr(25, 0) === "3e+1",
      uQ = function uQ() {
        return by(function () {
          Zr(1, 1 / 0);
        }) && by(function () {
          Zr(1, -1 / 0);
        });
      },
      sQ = function sQ() {
        return !by(function () {
          Zr(1 / 0, 1 / 0), Zr(NaN, 1 / 0);
        });
      },
      lQ = !Mw || !uQ() || !sQ();
    Zk({
      target: "Number",
      proto: !0,
      forced: lQ
    }, {
      toExponential: function toExponential(t) {
        var i = Jk(this);
        if (t === void 0) return Zr(i);
        var a = Wk(t);
        if (!rQ(i)) return String(i);
        if (a < 0 || a > 20) throw new tQ("Incorrect fraction digits");
        if (Mw) return Zr(i, a);
        var u = "",
          l,
          f,
          d,
          v;
        if (i < 0 && (u = "-", i = -i), i === 0) f = 0, l = oQ("0", a + 1);else {
          var h = eQ(i);
          f = iQ(h);
          var y = Rw(10, f - a),
            b = aQ(i / y);
          2 * i >= (2 * b + 1) * y && (b += 1), b >= Rw(10, a + 1) && (b /= 10, f += 1), l = Nw(b);
        }
        return a !== 0 && (l = Cw(l, 0, 1) + "." + Cw(l, 1)), f === 0 ? (d = "+", v = "0") : (d = f > 0 ? "+" : "-", v = Nw(nQ(f))), l += "e" + d + v, u + l;
      }
    });
  });
  var Lw = m(function () {
    "use strict";

    var cQ = z(),
      Ty = X(),
      fQ = Je(),
      pQ = Ds(),
      dQ = zs(),
      Dw = Q(),
      vQ = RangeError,
      Uw = String,
      zw = Math.floor,
      Ey = Ty(dQ),
      Pw = Ty("".slice),
      Ls = Ty(1 .toFixed),
      _Mo = function Mo(e, t, i) {
        return t === 0 ? i : t % 2 === 1 ? _Mo(e, t - 1, i * e) : _Mo(e * e, t / 2, i);
      },
      mQ = function mQ(e) {
        for (var t = 0, i = e; i >= 4096;) t += 12, i /= 4096;
        for (; i >= 2;) t += 1, i /= 2;
        return t;
      },
      Co = function Co(e, t, i) {
        for (var a = -1, u = i; ++a < 6;) u += t * e[a], e[a] = u % 1e7, u = zw(u / 1e7);
      },
      Sy = function Sy(e, t) {
        for (var i = 6, a = 0; --i >= 0;) a += e[i], e[i] = zw(a / t), a = a % t * 1e7;
      },
      Iw = function Iw(e) {
        for (var t = 6, i = ""; --t >= 0;) if (i !== "" || t === 0 || e[t] !== 0) {
          var a = Uw(e[t]);
          i = i === "" ? a : i + Ey("0", 7 - a.length) + a;
        }
        return i;
      },
      hQ = Dw(function () {
        return Ls(8e-5, 3) !== "0.000" || Ls(.9, 0) !== "1" || Ls(1.255, 2) !== "1.25" || Ls(0xde0b6b3a7640080, 0) !== "1000000000000000128";
      }) || !Dw(function () {
        Ls({});
      });
    cQ({
      target: "Number",
      proto: !0,
      forced: hQ
    }, {
      toFixed: function toFixed(t) {
        var i = pQ(this),
          a = fQ(t),
          u = [0, 0, 0, 0, 0, 0],
          l = "",
          f = "0",
          d,
          v,
          h,
          y;
        if (a < 0 || a > 20) throw new vQ("Incorrect fraction digits");
        if (i !== i) return "NaN";
        if (i <= -1e21 || i >= 1e21) return Uw(i);
        if (i < 0 && (l = "-", i = -i), i > 1e-21) if (d = mQ(i * _Mo(2, 69, 1)) - 69, v = d < 0 ? i * _Mo(2, -d, 1) : i / _Mo(2, d, 1), v *= 4503599627370496, d = 52 - d, d > 0) {
          for (Co(u, 0, v), h = a; h >= 7;) Co(u, 1e7, 0), h -= 7;
          for (Co(u, _Mo(10, h, 1), 0), h = d - 1; h >= 23;) Sy(u, 1 << 23), h -= 23;
          Sy(u, 1 << h), Co(u, 1, 1), Sy(u, 2), f = Iw(u);
        } else Co(u, 0, v), Co(u, 1 << -d, 0), f = Iw(u) + Ey("0", a);
        return a > 0 ? (y = f.length, f = l + (y <= a ? "0." + Ey("0", a - y) + f : Pw(f, 0, y - a) + "." + Pw(f, y - a))) : f = l + f, f;
      }
    });
  });
  var Hw = m(function () {
    "use strict";

    var yQ = z(),
      gQ = X(),
      jw = Q(),
      Fw = Ds(),
      Df = gQ(1 .toPrecision),
      bQ = jw(function () {
        return Df(1, void 0) !== "1";
      }) || !jw(function () {
        Df({});
      });
    yQ({
      target: "Number",
      proto: !0,
      forced: bQ
    }, {
      toPrecision: function toPrecision(t) {
        return t === void 0 ? Df(Fw(this)) : Df(Fw(this), t);
      }
    });
  });
  var Kw = m(function (CEe, Gw) {
    "use strict";

    $2();
    ew();
    nw();
    aw();
    ow();
    uw();
    sw();
    lw();
    hw();
    Aw();
    Bw();
    Lw();
    Hw();
    var xQ = it();
    Gw.exports = xQ.Number;
  });
  var Yw = m(function (MEe, Vw) {
    "use strict";

    var SQ = Kw();
    Vw.exports = SQ;
  });
  var Zw = m(function (BEe, Qw) {
    "use strict";

    var Xw = we(),
      EQ = X(),
      TQ = me(),
      qQ = Q(),
      qy = gs(),
      AQ = dh(),
      _Q = zc(),
      OQ = dt(),
      wQ = go(),
      Bo = Object.assign,
      kw = Object.defineProperty,
      NQ = EQ([].concat);
    Qw.exports = !Bo || qQ(function () {
      if (Xw && Bo({
        b: 1
      }, Bo(kw({}, "a", {
        enumerable: !0,
        get: function get() {
          kw(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b !== 1) return !0;
      var e = {},
        t = {},
        i = Symbol("assign detection"),
        a = "abcdefghijklmnopqrst";
      return e[i] = 7, a.split("").forEach(function (u) {
        t[u] = u;
      }), Bo({}, e)[i] !== 7 || qy(Bo({}, t)).join("") !== a;
    }) ? function (t, i) {
      for (var a = OQ(t), u = arguments.length, l = 1, f = AQ.f, d = _Q.f; u > l;) for (var v = wQ(arguments[l++]), h = f ? NQ(qy(v), f(v)) : qy(v), y = h.length, b = 0, S; y > b;) S = h[b++], (!Xw || TQ(d, v, S)) && (a[S] = v[S]);
      return a;
    } : Bo;
  });
  var Jw = m(function () {
    "use strict";

    var RQ = z(),
      Ww = Zw();
    RQ({
      target: "Object",
      stat: !0,
      arity: 2,
      forced: Object.assign !== Ww
    }, {
      assign: Ww
    });
  });
  var eN = m(function (IEe, $w) {
    "use strict";

    Jw();
    var CQ = it();
    $w.exports = CQ.Object.assign;
  });
  var rN = m(function (UEe, tN) {
    "use strict";

    var MQ = eN();
    tN.exports = MQ;
  });
  var uN = m(function () {
    "use strict";

    var BQ = we(),
      DQ = wn(),
      PQ = Ne(),
      IQ = qh(),
      UQ = dt(),
      zQ = Be(),
      nN = Object.getPrototypeOf,
      iN = Object.setPrototypeOf,
      aN = Object.prototype,
      oN = "__proto__";
    if (BQ && nN && iN && !(oN in aN)) try {
      DQ(aN, oN, {
        configurable: !0,
        get: function get() {
          return nN(UQ(this));
        },
        set: function set(t) {
          var i = zQ(this);
          IQ(t) && PQ(i) && iN(i, t);
        }
      });
    } catch (_unused25) {}
  });
  var sN = m(function () {
    "use strict";

    uN();
  });
  var cN = m(function (HEe, lN) {
    "use strict";

    var LQ = sN();
    lN.exports = LQ;
  });
  var Ay = m(function (GEe, mN) {
    "use strict";

    var pN = we(),
      jQ = Q(),
      dN = X(),
      FQ = da(),
      HQ = gs(),
      GQ = Gr(),
      KQ = zc().f,
      vN = dN(KQ),
      VQ = dN([].push),
      YQ = pN && jQ(function () {
        var e = Object.create(null);
        return e[2] = 2, !vN(e, 2);
      }),
      fN = function fN(e) {
        return function (t) {
          for (var i = GQ(t), a = HQ(i), u = YQ && FQ(i) === null, l = a.length, f = 0, d = [], v; l > f;) v = a[f++], (!pN || (u ? v in i : vN(i, v))) && VQ(d, e ? [v, i[v]] : i[v]);
          return d;
        };
      };
    mN.exports = {
      entries: fN(!0),
      values: fN(!1)
    };
  });
  var hN = m(function () {
    "use strict";

    var XQ = z(),
      kQ = Ay().entries;
    XQ({
      target: "Object",
      stat: !0
    }, {
      entries: function entries(t) {
        return kQ(t);
      }
    });
  });
  var gN = m(function (YEe, yN) {
    "use strict";

    hN();
    var QQ = it();
    yN.exports = QQ.Object.entries;
  });
  var xN = m(function (XEe, bN) {
    "use strict";

    var ZQ = gN();
    bN.exports = ZQ;
  });
  var _y = m(function (kEe, SN) {
    "use strict";

    SN.exports = Object.is || function (t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    };
  });
  var EN = m(function () {
    "use strict";

    var WQ = z(),
      JQ = _y();
    WQ({
      target: "Object",
      stat: !0
    }, {
      is: JQ
    });
  });
  var qN = m(function (WEe, TN) {
    "use strict";

    EN();
    var $Q = it();
    TN.exports = $Q.Object.is;
  });
  var _N = m(function (JEe, AN) {
    "use strict";

    var eZ = qN();
    AN.exports = eZ;
  });
  var ON = m(function () {
    "use strict";

    var tZ = z(),
      rZ = Ay().values;
    tZ({
      target: "Object",
      stat: !0
    }, {
      values: function values(t) {
        return rZ(t);
      }
    });
  });
  var NN = m(function (t1e, wN) {
    "use strict";

    ON();
    var nZ = it();
    wN.exports = nZ.Object.values;
  });
  var CN = m(function (r1e, RN) {
    "use strict";

    var iZ = NN();
    RN.exports = iZ;
  });
  var Oy = m(function (n1e, PN) {
    "use strict";

    var DN = X(),
      aZ = Ft(),
      MN = Se(),
      oZ = zs(),
      uZ = Be(),
      sZ = DN(oZ),
      lZ = DN("".slice),
      cZ = Math.ceil,
      BN = function BN(e) {
        return function (t, i, a) {
          var u = MN(uZ(t)),
            l = aZ(i),
            f = u.length,
            d = a === void 0 ? " " : MN(a),
            v,
            h;
          return l <= f || d === "" ? u : (v = l - f, h = sZ(d, cZ(v / d.length)), h.length > v && (h = lZ(h, 0, v)), e ? u + h : h + u);
        };
      };
    PN.exports = {
      start: BN(!1),
      end: BN(!0)
    };
  });
  var wy = m(function (i1e, IN) {
    "use strict";

    var fZ = Kr();
    IN.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(fZ);
  });
  var Ny = m(function () {
    "use strict";

    var pZ = z(),
      dZ = Oy().end,
      vZ = wy();
    pZ({
      target: "String",
      proto: !0,
      forced: vZ
    }, {
      padEnd: function padEnd(t) {
        return dZ(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var zN = m(function (u1e, UN) {
    "use strict";

    Ny();
    var mZ = Ht();
    UN.exports = mZ("String", "padEnd");
  });
  var jN = m(function (s1e, LN) {
    "use strict";

    var hZ = zN();
    LN.exports = hZ;
  });
  var Ry = m(function () {
    "use strict";

    var yZ = z(),
      gZ = Oy().start,
      bZ = wy();
    yZ({
      target: "String",
      proto: !0,
      forced: bZ
    }, {
      padStart: function padStart(t) {
        return gZ(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var HN = m(function (f1e, FN) {
    "use strict";

    Ry();
    var xZ = Ht();
    FN.exports = xZ("String", "padStart");
  });
  var KN = m(function (p1e, GN) {
    "use strict";

    var SZ = HN();
    GN.exports = SZ;
  });
  var Cy = m(function () {
    "use strict";

    var EZ = z(),
      TZ = X(),
      qZ = Be(),
      AZ = Je(),
      _Z = Se(),
      OZ = Q(),
      wZ = TZ("".charAt),
      NZ = OZ(function () {
        return "𠮷".at(-2) !== "\uD842";
      });
    EZ({
      target: "String",
      proto: !0,
      forced: NZ
    }, {
      at: function at(t) {
        var i = _Z(qZ(this)),
          a = i.length,
          u = AZ(t),
          l = u >= 0 ? u : a + u;
        return l < 0 || l >= a ? void 0 : wZ(i, l);
      }
    });
  });
  var YN = m(function (m1e, VN) {
    "use strict";

    Cy();
    var RZ = Ht();
    VN.exports = RZ("String", "at");
  });
  var kN = m(function (h1e, XN) {
    "use strict";

    var CZ = YN();
    XN.exports = CZ;
  });
  var My = m(function (y1e, QN) {
    "use strict";

    var MZ = De();
    QN.exports = function () {
      var e = MZ(this),
        t = "";
      return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
    };
  });
  var Iy = m(function (g1e, ZN) {
    "use strict";

    var By = Q(),
      BZ = J(),
      Dy = BZ.RegExp,
      Py = By(function () {
        var e = Dy("a", "y");
        return e.lastIndex = 2, e.exec("abcd") !== null;
      }),
      DZ = Py || By(function () {
        return !Dy("a", "y").sticky;
      }),
      PZ = Py || By(function () {
        var e = Dy("^r", "gy");
        return e.lastIndex = 2, e.exec("str") !== null;
      });
    ZN.exports = {
      BROKEN_CARET: PZ,
      MISSED_STICKY: DZ,
      UNSUPPORTED_Y: Py
    };
  });
  var JN = m(function (b1e, WN) {
    "use strict";

    var IZ = Q(),
      UZ = J(),
      zZ = UZ.RegExp;
    WN.exports = IZ(function () {
      var e = zZ(".", "s");
      return !(e.dotAll && e.test("\n") && e.flags === "s");
    });
  });
  var eR = m(function (x1e, $N) {
    "use strict";

    var LZ = Q(),
      jZ = J(),
      FZ = jZ.RegExp;
    $N.exports = LZ(function () {
      var e = FZ("(?<a>b)", "g");
      return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
    });
  });
  var Uf = m(function (S1e, rR) {
    "use strict";

    var Do = me(),
      If = X(),
      HZ = Se(),
      GZ = My(),
      KZ = Iy(),
      VZ = Hc(),
      YZ = _n(),
      XZ = jt().get,
      kZ = JN(),
      QZ = eR(),
      ZZ = VZ("native-string-replace", String.prototype.replace),
      Pf = RegExp.prototype.exec,
      _zy = Pf,
      WZ = If("".charAt),
      JZ = If("".indexOf),
      $Z = If("".replace),
      Uy = If("".slice),
      Ly = function () {
        var e = /a/,
          t = /b*/g;
        return Do(Pf, e, "a"), Do(Pf, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0;
      }(),
      tR = KZ.BROKEN_CARET,
      jy = /()??/.exec("")[1] !== void 0,
      eW = Ly || jy || tR || kZ || QZ;
    eW && (_zy = function zy(t) {
      var i = this,
        a = XZ(i),
        u = HZ(t),
        l = a.raw,
        f,
        d,
        v,
        h,
        y,
        b,
        S;
      if (l) return l.lastIndex = i.lastIndex, f = Do(_zy, l, u), i.lastIndex = l.lastIndex, f;
      var T = a.groups,
        R = tR && i.sticky,
        A = Do(GZ, i),
        _ = i.source,
        x = 0,
        q = u;
      if (R && (A = $Z(A, "y", ""), JZ(A, "g") === -1 && (A += "g"), q = Uy(u, i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && WZ(u, i.lastIndex - 1) !== "\n") && (_ = "(?: " + _ + ")", q = " " + q, x++), d = new RegExp("^(?:" + _ + ")", A)), jy && (d = new RegExp("^" + _ + "$(?!\\s)", A)), Ly && (v = i.lastIndex), h = Do(Pf, R ? d : i, q), R ? h ? (h.input = Uy(h.input, x), h[0] = Uy(h[0], x), h.index = i.lastIndex, i.lastIndex += h[0].length) : i.lastIndex = 0 : Ly && h && (i.lastIndex = i.global ? h.index + h[0].length : v), jy && h && h.length > 1 && Do(ZZ, h[0], d, function () {
        for (y = 1; y < arguments.length - 2; y++) arguments[y] === void 0 && (h[y] = void 0);
      }), h && T) for (h.groups = b = YZ(null), y = 0; y < T.length; y++) S = T[y], b[S[0]] = h[S[1]];
      return h;
    });
    rR.exports = _zy;
  });
  var Fy = m(function () {
    "use strict";

    var tW = z(),
      nR = Uf();
    tW({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== nR
    }, {
      exec: nR
    });
  });
  var oR = m(function () {
    "use strict";

    var rW = z(),
      nW = X(),
      iW = pa(),
      aW = RangeError,
      iR = String.fromCharCode,
      aR = String.fromCodePoint,
      oW = nW([].join),
      uW = !!aR && aR.length !== 1;
    rW({
      target: "String",
      stat: !0,
      arity: 1,
      forced: uW
    }, {
      fromCodePoint: function fromCodePoint(t) {
        for (var i = [], a = arguments.length, u = 0, l; a > u;) {
          if (l = +arguments[u++], iW(l, 1114111) !== l) throw new aW(l + " is not a valid code point");
          i[u] = l < 65536 ? iR(l) : iR(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
        }
        return oW(i, "");
      }
    });
  });
  var cR = m(function () {
    "use strict";

    var sW = z(),
      lR = X(),
      lW = Gr(),
      cW = dt(),
      uR = Se(),
      fW = $e(),
      sR = lR([].push),
      pW = lR([].join);
    sW({
      target: "String",
      stat: !0
    }, {
      raw: function raw(t) {
        var i = lW(cW(t).raw),
          a = fW(i);
        if (!a) return "";
        for (var u = arguments.length, l = [], f = 0;;) {
          if (sR(l, uR(i[f++])), f === a) return pW(l, "");
          f < u && sR(l, uR(arguments[f]));
        }
      }
    });
  });
  var fR = m(function () {
    "use strict";

    var dW = z(),
      vW = qf().codeAt;
    dW({
      target: "String",
      proto: !0
    }, {
      codePointAt: function codePointAt(t) {
        return vW(this, t);
      }
    });
  });
  var zf = m(function (R1e, pR) {
    "use strict";

    var mW = Ne(),
      hW = yr(),
      yW = Re(),
      gW = yW("match");
    pR.exports = function (e) {
      var t;
      return mW(e) && ((t = e[gW]) !== void 0 ? !!t : hW(e) === "RegExp");
    };
  });
  var Lf = m(function (C1e, dR) {
    "use strict";

    var bW = zf(),
      xW = TypeError;
    dR.exports = function (e) {
      if (bW(e)) throw new xW("The method doesn't accept regular expressions");
      return e;
    };
  });
  var jf = m(function (M1e, vR) {
    "use strict";

    var SW = Re(),
      EW = SW("match");
    vR.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (_unused26) {
        try {
          return t[EW] = !1, "/./"[e](t);
        } catch (_unused27) {}
      }
      return !1;
    };
  });
  var yR = m(function () {
    "use strict";

    var TW = z(),
      qW = vi(),
      AW = ca().f,
      _W = Ft(),
      mR = Se(),
      OW = Lf(),
      wW = Be(),
      NW = jf(),
      RW = We(),
      CW = qW("".slice),
      MW = Math.min,
      hR = NW("endsWith"),
      BW = !RW && !hR && !!function () {
        var e = AW(String.prototype, "endsWith");
        return e && !e.writable;
      }();
    TW({
      target: "String",
      proto: !0,
      forced: !BW && !hR
    }, {
      endsWith: function endsWith(t) {
        var i = mR(wW(this));
        OW(t);
        var a = arguments.length > 1 ? arguments[1] : void 0,
          u = i.length,
          l = a === void 0 ? u : MW(_W(a), u),
          f = mR(t);
        return CW(i, l - f.length, l) === f;
      }
    });
  });
  var bR = m(function () {
    "use strict";

    var DW = z(),
      PW = X(),
      IW = Lf(),
      UW = Be(),
      gR = Se(),
      zW = jf(),
      LW = PW("".indexOf);
    DW({
      target: "String",
      proto: !0,
      forced: !zW("includes")
    }, {
      includes: function includes(t) {
        return !!~LW(gR(UW(this)), gR(IW(t)), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var SR = m(function () {
    "use strict";

    var jW = z(),
      FW = X(),
      HW = Be(),
      GW = Se(),
      xR = FW("".charCodeAt);
    jW({
      target: "String",
      proto: !0
    }, {
      isWellFormed: function isWellFormed() {
        for (var t = GW(HW(this)), i = t.length, a = 0; a < i; a++) {
          var u = xR(t, a);
          if ((u & 63488) === 55296 && (u >= 56320 || ++a >= i || (xR(t, a) & 64512) !== 56320)) return !1;
        }
        return !0;
      }
    });
  });
  var js = m(function (L1e, _R) {
    "use strict";

    Fy();
    var ER = me(),
      TR = Rt(),
      KW = Uf(),
      qR = Q(),
      AR = Re(),
      VW = or(),
      YW = AR("species"),
      Hy = RegExp.prototype;
    _R.exports = function (e, t, i, a) {
      var u = AR(e),
        l = !qR(function () {
          var h = {};
          return h[u] = function () {
            return 7;
          }, ""[e](h) !== 7;
        }),
        f = l && !qR(function () {
          var h = !1,
            y = /a/;
          return e === "split" && (y = {}, y.constructor = {}, y.constructor[YW] = function () {
            return y;
          }, y.flags = "", y[u] = /./[u]), y.exec = function () {
            return h = !0, null;
          }, y[u](""), !h;
        });
      if (!l || !f || i) {
        var d = /./[u],
          v = t(u, ""[e], function (h, y, b, S, T) {
            var R = y.exec;
            return R === KW || R === Hy.exec ? l && !T ? {
              done: !0,
              value: ER(d, y, b, S)
            } : {
              done: !0,
              value: ER(h, b, y, S)
            } : {
              done: !1
            };
          });
        TR(String.prototype, e, v[0]), TR(Hy, u, v[1]);
      }
      a && VW(Hy[u], "sham", !0);
    };
  });
  var Fs = m(function (j1e, OR) {
    "use strict";

    var XW = qf().charAt;
    OR.exports = function (e, t, i) {
      return t + (i ? XW(e, t).length : 1);
    };
  });
  var Po = m(function (F1e, NR) {
    "use strict";

    var wR = me(),
      kW = De(),
      QW = xe(),
      ZW = yr(),
      WW = Uf(),
      JW = TypeError;
    NR.exports = function (e, t) {
      var i = e.exec;
      if (QW(i)) {
        var a = wR(i, e, t);
        return a !== null && kW(a), a;
      }
      if (ZW(e) === "RegExp") return wR(WW, e, t);
      throw new JW("RegExp#exec called on incompatible receiver");
    };
  });
  var CR = m(function () {
    "use strict";

    var $W = me(),
      eJ = js(),
      tJ = De(),
      rJ = Ot(),
      nJ = Ft(),
      Gy = Se(),
      iJ = Be(),
      aJ = Vr(),
      oJ = Fs(),
      RR = Po();
    eJ("match", function (e, t, i) {
      return [function (u) {
        var l = iJ(this),
          f = rJ(u) ? void 0 : aJ(u, e);
        return f ? $W(f, u, l) : new RegExp(u)[e](Gy(l));
      }, function (a) {
        var u = tJ(this),
          l = Gy(a),
          f = i(t, u, l);
        if (f.done) return f.value;
        if (!u.global) return RR(u, l);
        var d = u.unicode;
        u.lastIndex = 0;
        for (var v = [], h = 0, y; (y = RR(u, l)) !== null;) {
          var b = Gy(y[0]);
          v[h] = b, b === "" && (u.lastIndex = oJ(l, nJ(u.lastIndex), d)), h++;
        }
        return h === 0 ? null : v;
      }];
    });
  });
  var Ff = m(function (K1e, BR) {
    "use strict";

    var uJ = me(),
      sJ = Ye(),
      lJ = qn(),
      cJ = My(),
      MR = RegExp.prototype;
    BR.exports = function (e) {
      var t = e.flags;
      return t === void 0 && !("flags" in MR) && !sJ(e, "flags") && lJ(MR, e) ? uJ(cJ, e) : t;
    };
  });
  var Ky = m(function (V1e, DR) {
    "use strict";

    var fJ = hs(),
      pJ = la(),
      dJ = TypeError;
    DR.exports = function (e) {
      if (fJ(e)) return e;
      throw new dJ(pJ(e) + " is not a constructor");
    };
  });
  var Hs = m(function (Y1e, IR) {
    "use strict";

    var PR = De(),
      vJ = Ky(),
      mJ = Ot(),
      hJ = Re(),
      yJ = hJ("species");
    IR.exports = function (e, t) {
      var i = PR(e).constructor,
        a;
      return i === void 0 || mJ(a = PR(i)[yJ]) ? t : vJ(a);
    };
  });
  var YR = m(function () {
    "use strict";

    var gJ = z(),
      UR = me(),
      jR = vi(),
      bJ = ly(),
      Hf = Rs(),
      zR = Be(),
      FR = Ft(),
      Gs = Se(),
      xJ = De(),
      SJ = Ot(),
      EJ = yr(),
      TJ = zf(),
      HR = Ff(),
      qJ = Vr(),
      AJ = Rt(),
      _J = Q(),
      OJ = Re(),
      wJ = Hs(),
      NJ = Fs(),
      RJ = Po(),
      GR = jt(),
      Yy = We(),
      Gf = OJ("matchAll"),
      KR = "RegExp String",
      VR = KR + " Iterator",
      CJ = GR.set,
      MJ = GR.getterFor(VR),
      LR = RegExp.prototype,
      BJ = TypeError,
      Xy = jR("".indexOf),
      Kf = jR("".matchAll),
      Vy = !!Kf && !_J(function () {
        Kf("a", /./);
      }),
      DJ = bJ(function (t, i, a, u) {
        CJ(this, {
          type: VR,
          regexp: t,
          string: i,
          global: a,
          unicode: u,
          done: !1
        });
      }, KR, function () {
        var t = MJ(this);
        if (t.done) return Hf(void 0, !0);
        var i = t.regexp,
          a = t.string,
          u = RJ(i, a);
        return u === null ? (t.done = !0, Hf(void 0, !0)) : t.global ? (Gs(u[0]) === "" && (i.lastIndex = NJ(a, FR(i.lastIndex), t.unicode)), Hf(u, !1)) : (t.done = !0, Hf(u, !1));
      }),
      ky = function ky(e) {
        var t = xJ(this),
          i = Gs(e),
          a = wJ(t, RegExp),
          u = Gs(HR(t)),
          l,
          f,
          d;
        return l = new a(a === RegExp ? t.source : t, u), f = !!~Xy(u, "g"), d = !!~Xy(u, "u"), l.lastIndex = FR(t.lastIndex), new DJ(l, i, f, d);
      };
    gJ({
      target: "String",
      proto: !0,
      forced: Vy
    }, {
      matchAll: function matchAll(t) {
        var i = zR(this),
          a,
          u,
          l,
          f;
        if (SJ(t)) {
          if (Vy) return Kf(i, t);
        } else {
          if (TJ(t) && (a = Gs(zR(HR(t))), !~Xy(a, "g"))) throw new BJ("`.matchAll` does not allow non-global regexes");
          if (Vy) return Kf(i, t);
          if (l = qJ(t, Gf), l === void 0 && Yy && EJ(t) === "RegExp" && (l = ky), l) return UR(l, t, i);
        }
        return u = Gs(i), f = new RegExp(t, "g"), Yy ? UR(ky, f, u) : f[Gf](u);
      }
    });
    Yy || Gf in LR || AJ(LR, Gf, ky);
  });
  var XR = m(function () {
    "use strict";

    var PJ = z(),
      IJ = zs();
    PJ({
      target: "String",
      proto: !0
    }, {
      repeat: IJ
    });
  });
  var ya = m(function (W1e, WR) {
    "use strict";

    var UJ = os(),
      ZR = Function.prototype,
      kR = ZR.apply,
      QR = ZR.call;
    WR.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (UJ ? QR.bind(kR) : function () {
      return QR.apply(kR, arguments);
    });
  });
  var Jy = m(function (J1e, JR) {
    "use strict";

    var Wy = X(),
      zJ = dt(),
      LJ = Math.floor,
      Qy = Wy("".charAt),
      jJ = Wy("".replace),
      Zy = Wy("".slice),
      FJ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      HJ = /\$([$&'`]|\d{1,2})/g;
    JR.exports = function (e, t, i, a, u, l) {
      var f = i + e.length,
        d = a.length,
        v = HJ;
      return u !== void 0 && (u = zJ(u), v = FJ), jJ(l, v, function (h, y) {
        var b;
        switch (Qy(y, 0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return Zy(t, 0, i);
          case "'":
            return Zy(t, f);
          case "<":
            b = u[Zy(y, 1, -1)];
            break;
          default:
            var S = +y;
            if (S === 0) return h;
            if (S > d) {
              var T = LJ(S / 10);
              return T === 0 ? h : T <= d ? a[T - 1] === void 0 ? Qy(y, 1) : a[T - 1] + Qy(y, 1) : h;
            }
            b = a[S - 1];
        }
        return b === void 0 ? "" : b;
      });
    };
  });
  var nC = m(function () {
    "use strict";

    var GJ = ya(),
      $R = me(),
      Vf = X(),
      KJ = js(),
      VJ = Q(),
      YJ = De(),
      XJ = xe(),
      kJ = Ot(),
      QJ = Je(),
      ZJ = Ft(),
      Io = Se(),
      WJ = Be(),
      JJ = Fs(),
      $J = Vr(),
      e$ = Jy(),
      t$ = Po(),
      r$ = Re(),
      eg = r$("replace"),
      n$ = Math.max,
      i$ = Math.min,
      a$ = Vf([].concat),
      $y = Vf([].push),
      eC = Vf("".indexOf),
      tC = Vf("".slice),
      o$ = function o$(e) {
        return e === void 0 ? e : String(e);
      },
      u$ = function () {
        return "a".replace(/./, "$0") === "$0";
      }(),
      rC = function () {
        return /./[eg] ? /./[eg]("a", "$0") === "" : !1;
      }(),
      s$ = !VJ(function () {
        var e = /./;
        return e.exec = function () {
          var t = [];
          return t.groups = {
            a: "7"
          }, t;
        }, "".replace(e, "$<a>") !== "7";
      });
    KJ("replace", function (e, t, i) {
      var a = rC ? "$" : "$0";
      return [function (l, f) {
        var d = WJ(this),
          v = kJ(l) ? void 0 : $J(l, eg);
        return v ? $R(v, l, d, f) : $R(t, Io(d), l, f);
      }, function (u, l) {
        var f = YJ(this),
          d = Io(u);
        if (typeof l == "string" && eC(l, a) === -1 && eC(l, "$<") === -1) {
          var v = i(t, f, d, l);
          if (v.done) return v.value;
        }
        var h = XJ(l);
        h || (l = Io(l));
        var y = f.global,
          b;
        y && (b = f.unicode, f.lastIndex = 0);
        for (var S = [], T; T = t$(f, d), !(T === null || ($y(S, T), !y));) {
          var R = Io(T[0]);
          R === "" && (f.lastIndex = JJ(d, ZJ(f.lastIndex), b));
        }
        for (var A = "", _ = 0, x = 0; x < S.length; x++) {
          T = S[x];
          for (var q = Io(T[0]), I = n$(i$(QJ(T.index), d.length), 0), w = [], B, U = 1; U < T.length; U++) $y(w, o$(T[U]));
          var k = T.groups;
          if (h) {
            var ne = a$([q], w, I, d);
            k !== void 0 && $y(ne, k), B = Io(GJ(l, void 0, ne));
          } else B = e$(q, d, I, w, k, l);
          I >= _ && (A += tC(d, _, I) + B, _ = I + q.length);
        }
        return A + tC(d, _);
      }];
    }, !s$ || !u$ || rC);
  });
  var oC = m(function () {
    "use strict";

    var l$ = z(),
      c$ = me(),
      rg = X(),
      iC = Be(),
      f$ = xe(),
      p$ = Ot(),
      d$ = zf(),
      Uo = Se(),
      v$ = Vr(),
      m$ = Ff(),
      h$ = Jy(),
      y$ = Re(),
      g$ = We(),
      b$ = y$("replace"),
      x$ = TypeError,
      tg = rg("".indexOf),
      S$ = rg("".replace),
      aC = rg("".slice),
      E$ = Math.max;
    l$({
      target: "String",
      proto: !0
    }, {
      replaceAll: function replaceAll(t, i) {
        var a = iC(this),
          u,
          l,
          f,
          d,
          v,
          h,
          y,
          b,
          S,
          T,
          R = 0,
          A = "";
        if (!p$(t)) {
          if (u = d$(t), u && (l = Uo(iC(m$(t))), !~tg(l, "g"))) throw new x$("`.replaceAll` does not allow non-global regexes");
          if (f = v$(t, b$), f) return c$(f, t, a, i);
          if (g$ && u) return S$(Uo(a), t, i);
        }
        for (d = Uo(a), v = Uo(t), h = f$(i), h || (i = Uo(i)), y = v.length, b = E$(1, y), S = tg(d, v); S !== -1;) T = h ? Uo(i(v, S, d)) : h$(v, d, S, [], void 0, i), A += aC(d, R, S) + T, R = S + y, S = S + b > d.length ? -1 : tg(d, v, S + b);
        return R < d.length && (A += aC(d, R)), A;
      }
    });
  });
  var lC = m(function () {
    "use strict";

    var T$ = me(),
      q$ = js(),
      A$ = De(),
      _$ = Ot(),
      O$ = Be(),
      uC = _y(),
      sC = Se(),
      w$ = Vr(),
      N$ = Po();
    q$("search", function (e, t, i) {
      return [function (u) {
        var l = O$(this),
          f = _$(u) ? void 0 : w$(u, e);
        return f ? T$(f, u, l) : new RegExp(u)[e](sC(l));
      }, function (a) {
        var u = A$(this),
          l = sC(a),
          f = i(t, u, l);
        if (f.done) return f.value;
        var d = u.lastIndex;
        uC(d, 0) || (u.lastIndex = 0);
        var v = N$(u, l);
        return uC(u.lastIndex, d) || (u.lastIndex = d), v === null ? -1 : v.index;
      }];
    });
  });
  var vC = m(function () {
    "use strict";

    var ng = me(),
      dC = X(),
      R$ = js(),
      C$ = De(),
      M$ = Ot(),
      B$ = Be(),
      D$ = Hs(),
      P$ = Fs(),
      I$ = Ft(),
      cC = Se(),
      U$ = Vr(),
      fC = Po(),
      z$ = Iy(),
      L$ = Q(),
      zo = z$.UNSUPPORTED_Y,
      j$ = 4294967295,
      F$ = Math.min,
      ig = dC([].push),
      ag = dC("".slice),
      H$ = !L$(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var i = "ab".split(e);
        return i.length !== 2 || i[0] !== "a" || i[1] !== "b";
      }),
      pC = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
    R$("split", function (e, t, i) {
      var a = "0".split(void 0, 0).length ? function (u, l) {
        return u === void 0 && l === 0 ? [] : ng(t, this, u, l);
      } : t;
      return [function (l, f) {
        var d = B$(this),
          v = M$(l) ? void 0 : U$(l, e);
        return v ? ng(v, l, d, f) : ng(a, cC(d), l, f);
      }, function (u, l) {
        var f = C$(this),
          d = cC(u);
        if (!pC) {
          var v = i(a, f, d, l, a !== t);
          if (v.done) return v.value;
        }
        var h = D$(f, RegExp),
          y = f.unicode,
          b = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (zo ? "g" : "y"),
          S = new h(zo ? "^(?:" + f.source + ")" : f, b),
          T = l === void 0 ? j$ : l >>> 0;
        if (T === 0) return [];
        if (d.length === 0) return fC(S, d) === null ? [d] : [];
        for (var R = 0, A = 0, _ = []; A < d.length;) {
          S.lastIndex = zo ? 0 : A;
          var x = fC(S, zo ? ag(d, A) : d),
            q;
          if (x === null || (q = F$(I$(S.lastIndex + (zo ? A : 0)), d.length)) === R) A = P$(d, A, y);else {
            if (ig(_, ag(d, R, A)), _.length === T) return _;
            for (var I = 1; I <= x.length - 1; I++) if (ig(_, x[I]), _.length === T) return _;
            A = R = q;
          }
        }
        return ig(_, ag(d, R)), _;
      }];
    }, pC || !H$, zo);
  });
  var yC = m(function () {
    "use strict";

    var G$ = z(),
      K$ = vi(),
      V$ = ca().f,
      Y$ = Ft(),
      mC = Se(),
      X$ = Lf(),
      k$ = Be(),
      Q$ = jf(),
      Z$ = We(),
      W$ = K$("".slice),
      J$ = Math.min,
      hC = Q$("startsWith"),
      $$ = !Z$ && !hC && !!function () {
        var e = V$(String.prototype, "startsWith");
        return e && !e.writable;
      }();
    G$({
      target: "String",
      proto: !0,
      forced: !$$ && !hC
    }, {
      startsWith: function startsWith(t) {
        var i = mC(k$(this));
        X$(t);
        var a = Y$(J$(arguments.length > 1 ? arguments[1] : void 0, i.length)),
          u = mC(t);
        return W$(i, a, a + u.length) === u;
      }
    });
  });
  var bC = m(function () {
    "use strict";

    var eee = z(),
      tee = X(),
      ree = Be(),
      gC = Je(),
      nee = Se(),
      iee = tee("".slice),
      aee = Math.max,
      oee = Math.min,
      uee = !"".substr || "ab".substr(-1) !== "b";
    eee({
      target: "String",
      proto: !0,
      forced: uee
    }, {
      substr: function substr(t, i) {
        var a = nee(ree(this)),
          u = a.length,
          l = gC(t),
          f,
          d;
        return l === 1 / 0 && (l = 0), l < 0 && (l = aee(u + l, 0)), f = i === void 0 ? u : gC(i), f <= 0 || f === 1 / 0 ? "" : (d = oee(l + f, u), l >= d ? "" : iee(a, l, d));
      }
    });
  });
  var TC = m(function () {
    "use strict";

    var see = z(),
      EC = me(),
      sg = X(),
      lee = Be(),
      cee = Se(),
      fee = Q(),
      pee = Array,
      og = sg("".charAt),
      xC = sg("".charCodeAt),
      dee = sg([].join),
      ug = "".toWellFormed,
      vee = "�",
      SC = ug && fee(function () {
        return EC(ug, 1) !== "1";
      });
    see({
      target: "String",
      proto: !0,
      forced: SC
    }, {
      toWellFormed: function toWellFormed() {
        var t = cee(lee(this));
        if (SC) return EC(ug, t);
        for (var i = t.length, a = pee(i), u = 0; u < i; u++) {
          var l = xC(t, u);
          (l & 63488) !== 55296 ? a[u] = og(t, u) : l >= 56320 || u + 1 >= i || (xC(t, u + 1) & 64512) !== 56320 ? a[u] = vee : (a[u] = og(t, u), a[++u] = og(t, u));
        }
        return dee(a, "");
      }
    });
  });
  var Yf = m(function (dTe, _C) {
    "use strict";

    var mee = ls().PROPER,
      hee = Q(),
      qC = Ps(),
      AC = "​᠎";
    _C.exports = function (e) {
      return hee(function () {
        return !!qC[e]() || AC[e]() !== AC || mee && qC[e].name !== e;
      });
    };
  });
  var OC = m(function () {
    "use strict";

    var yee = z(),
      gee = ha().trim,
      bee = Yf();
    yee({
      target: "String",
      proto: !0,
      forced: bee("trim")
    }, {
      trim: function trim() {
        return gee(this);
      }
    });
  });
  var lg = m(function (hTe, wC) {
    "use strict";

    var xee = ha().start,
      See = Yf();
    wC.exports = See("trimStart") ? function () {
      return xee(this);
    } : "".trimStart;
  });
  var RC = m(function () {
    "use strict";

    var Eee = z(),
      NC = lg();
    Eee({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimLeft !== NC
    }, {
      trimLeft: NC
    });
  });
  var MC = m(function () {
    "use strict";

    RC();
    var Tee = z(),
      CC = lg();
    Tee({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimStart !== CC
    }, {
      trimStart: CC
    });
  });
  var cg = m(function (STe, BC) {
    "use strict";

    var qee = ha().end,
      Aee = Yf();
    BC.exports = Aee("trimEnd") ? function () {
      return qee(this);
    } : "".trimEnd;
  });
  var PC = m(function () {
    "use strict";

    var _ee = z(),
      DC = cg();
    _ee({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimRight !== DC
    }, {
      trimRight: DC
    });
  });
  var UC = m(function () {
    "use strict";

    PC();
    var Oee = z(),
      IC = cg();
    Oee({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimEnd !== IC
    }, {
      trimEnd: IC
    });
  });
  var Kt = m(function (_Te, LC) {
    "use strict";

    var wee = X(),
      Nee = Be(),
      zC = Se(),
      Ree = /"/g,
      Cee = wee("".replace);
    LC.exports = function (e, t, i, a) {
      var u = zC(Nee(e)),
        l = "<" + t;
      return i !== "" && (l += " " + i + '="' + Cee(zC(a), Ree, "&quot;") + '"'), l + ">" + u + "</" + t + ">";
    };
  });
  var Vt = m(function (OTe, jC) {
    "use strict";

    var Mee = Q();
    jC.exports = function (e) {
      return Mee(function () {
        var t = ""[e]('"');
        return t !== t.toLowerCase() || t.split('"').length > 3;
      });
    };
  });
  var FC = m(function () {
    "use strict";

    var Bee = z(),
      Dee = Kt(),
      Pee = Vt();
    Bee({
      target: "String",
      proto: !0,
      forced: Pee("anchor")
    }, {
      anchor: function anchor(t) {
        return Dee(this, "a", "name", t);
      }
    });
  });
  var HC = m(function () {
    "use strict";

    var Iee = z(),
      Uee = Kt(),
      zee = Vt();
    Iee({
      target: "String",
      proto: !0,
      forced: zee("big")
    }, {
      big: function big() {
        return Uee(this, "big", "", "");
      }
    });
  });
  var GC = m(function () {
    "use strict";

    var Lee = z(),
      jee = Kt(),
      Fee = Vt();
    Lee({
      target: "String",
      proto: !0,
      forced: Fee("blink")
    }, {
      blink: function blink() {
        return jee(this, "blink", "", "");
      }
    });
  });
  var KC = m(function () {
    "use strict";

    var Hee = z(),
      Gee = Kt(),
      Kee = Vt();
    Hee({
      target: "String",
      proto: !0,
      forced: Kee("bold")
    }, {
      bold: function bold() {
        return Gee(this, "b", "", "");
      }
    });
  });
  var VC = m(function () {
    "use strict";

    var Vee = z(),
      Yee = Kt(),
      Xee = Vt();
    Vee({
      target: "String",
      proto: !0,
      forced: Xee("fixed")
    }, {
      fixed: function fixed() {
        return Yee(this, "tt", "", "");
      }
    });
  });
  var YC = m(function () {
    "use strict";

    var kee = z(),
      Qee = Kt(),
      Zee = Vt();
    kee({
      target: "String",
      proto: !0,
      forced: Zee("fontcolor")
    }, {
      fontcolor: function fontcolor(t) {
        return Qee(this, "font", "color", t);
      }
    });
  });
  var XC = m(function () {
    "use strict";

    var Wee = z(),
      Jee = Kt(),
      $ee = Vt();
    Wee({
      target: "String",
      proto: !0,
      forced: $ee("fontsize")
    }, {
      fontsize: function fontsize(t) {
        return Jee(this, "font", "size", t);
      }
    });
  });
  var kC = m(function () {
    "use strict";

    var ete = z(),
      tte = Kt(),
      rte = Vt();
    ete({
      target: "String",
      proto: !0,
      forced: rte("italics")
    }, {
      italics: function italics() {
        return tte(this, "i", "", "");
      }
    });
  });
  var QC = m(function () {
    "use strict";

    var nte = z(),
      ite = Kt(),
      ate = Vt();
    nte({
      target: "String",
      proto: !0,
      forced: ate("link")
    }, {
      link: function link(t) {
        return ite(this, "a", "href", t);
      }
    });
  });
  var ZC = m(function () {
    "use strict";

    var ote = z(),
      ute = Kt(),
      ste = Vt();
    ote({
      target: "String",
      proto: !0,
      forced: ste("small")
    }, {
      small: function small() {
        return ute(this, "small", "", "");
      }
    });
  });
  var WC = m(function () {
    "use strict";

    var lte = z(),
      cte = Kt(),
      fte = Vt();
    lte({
      target: "String",
      proto: !0,
      forced: fte("strike")
    }, {
      strike: function strike() {
        return cte(this, "strike", "", "");
      }
    });
  });
  var JC = m(function () {
    "use strict";

    var pte = z(),
      dte = Kt(),
      vte = Vt();
    pte({
      target: "String",
      proto: !0,
      forced: vte("sub")
    }, {
      sub: function sub() {
        return dte(this, "sub", "", "");
      }
    });
  });
  var $C = m(function () {
    "use strict";

    var mte = z(),
      hte = Kt(),
      yte = Vt();
    mte({
      target: "String",
      proto: !0,
      forced: yte("sup")
    }, {
      sup: function sup() {
        return hte(this, "sup", "", "");
      }
    });
  });
  var tM = m(function (eqe, eM) {
    "use strict";

    Qr();
    Fy();
    oR();
    cR();
    fR();
    Cy();
    yR();
    bR();
    SR();
    CR();
    YR();
    Ny();
    Ry();
    XR();
    nC();
    oC();
    lC();
    vC();
    yC();
    bC();
    TC();
    OC();
    MC();
    UC();
    ma();
    FC();
    HC();
    GC();
    KC();
    VC();
    YC();
    XC();
    kC();
    QC();
    ZC();
    WC();
    JC();
    $C();
    var gte = it();
    eM.exports = gte.String;
  });
  var nM = m(function (tqe, rM) {
    "use strict";

    var bte = tM();
    rM.exports = bte;
  });
  var Ks = m(function (rqe, iM) {
    "use strict";

    var xte = Se();
    iM.exports = function (e, t) {
      return e === void 0 ? arguments.length < 2 ? "" : t : xte(e);
    };
  });
  var fg = m(function (nqe, oM) {
    "use strict";

    var Ste = we(),
      Ete = Q(),
      Tte = De(),
      aM = Ks(),
      Xf = Error.prototype.toString,
      qte = Ete(function () {
        if (Ste) {
          var e = Object.create(Object.defineProperty({}, "name", {
            get: function get() {
              return this === e;
            }
          }));
          if (Xf.call(e) !== "true") return !0;
        }
        return Xf.call({
          message: 1,
          name: 2
        }) !== "2: 1" || Xf.call({}) !== "Error";
      });
    oM.exports = qte ? function () {
      var t = Tte(this),
        i = aM(t.name, "Error"),
        a = aM(t.message);
      return i ? a ? i + ": " + a : i : a;
    } : Xf;
  });
  var lM = m(function () {
    "use strict";

    var Ate = Rt(),
      uM = fg(),
      sM = Error.prototype;
    sM.toString !== uM && Ate(sM, "toString", uM);
  });
  var Dn = m(function (oqe, vM) {
    "use strict";

    var _te = Gr(),
      pg = On(),
      cM = No(),
      pM = jt(),
      Ote = Nt().f,
      wte = Of(),
      kf = Rs(),
      Nte = We(),
      Rte = we(),
      dM = "Array Iterator",
      Cte = pM.set,
      Mte = pM.getterFor(dM);
    vM.exports = wte(Array, "Array", function (e, t) {
      Cte(this, {
        type: dM,
        target: _te(e),
        index: 0,
        kind: t
      });
    }, function () {
      var e = Mte(this),
        t = e.target,
        i = e.index++;
      if (!t || i >= t.length) return e.target = null, kf(void 0, !0);
      switch (e.kind) {
        case "keys":
          return kf(i, !1);
        case "values":
          return kf(t[i], !1);
      }
      return kf([i, t[i]], !1);
    }, "values");
    var fM = cM.Arguments = cM.Array;
    pg("keys");
    pg("values");
    pg("entries");
    if (!Nte && Rte && fM.name !== "values") try {
      Ote(fM, "name", {
        value: "values"
      });
    } catch (_unused28) {}
  });
  var hM = m(function () {
    "use strict";

    var Bte = z(),
      Dte = dt(),
      mM = gs(),
      Pte = Q(),
      Ite = Pte(function () {
        mM(1);
      });
    Bte({
      target: "Object",
      stat: !0,
      forced: Ite
    }, {
      keys: function keys(t) {
        return mM(Dte(t));
      }
    });
  });
  var xM = m(function (lqe, bM) {
    "use strict";

    var Ute = yr(),
      zte = Gr(),
      yM = Eo().f,
      Lte = yi(),
      gM = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      jte = function jte(e) {
        try {
          return yM(e);
        } catch (_unused29) {
          return Lte(gM);
        }
      };
    bM.exports.f = function (t) {
      return gM && Ute(t) === "Window" ? jte(t) : yM(zte(t));
    };
  });
  var EM = m(function (cqe, SM) {
    "use strict";

    var Fte = Q();
    SM.exports = Fte(function () {
      if (typeof ArrayBuffer == "function") {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", {
          value: 8
        });
      }
    });
  });
  var AM = m(function (fqe, qM) {
    "use strict";

    var Hte = Q(),
      Gte = Ne(),
      Kte = yr(),
      TM = EM(),
      Qf = Object.isExtensible,
      Vte = Hte(function () {
        Qf(1);
      });
    qM.exports = Vte || TM ? function (t) {
      return !Gte(t) || TM && Kte(t) === "ArrayBuffer" ? !1 : Qf ? Qf(t) : !0;
    } : Qf;
  });
  var dg = m(function (pqe, _M) {
    "use strict";

    var Yte = Q();
    _M.exports = !Yte(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  });
  var Vs = m(function (dqe, NM) {
    "use strict";

    var Xte = z(),
      kte = X(),
      Qte = cs(),
      Zte = Ne(),
      vg = Ye(),
      Wte = Nt().f,
      OM = Eo(),
      Jte = xM(),
      mg = AM(),
      $te = xo(),
      ere = dg(),
      wM = !1,
      Pn = $te("meta"),
      tre = 0,
      hg = function hg(e) {
        Wte(e, Pn, {
          value: {
            objectID: "O" + tre++,
            weakData: {}
          }
        });
      },
      rre = function rre(e, t) {
        if (!Zte(e)) return _typeof(e) == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!vg(e, Pn)) {
          if (!mg(e)) return "F";
          if (!t) return "E";
          hg(e);
        }
        return e[Pn].objectID;
      },
      nre = function nre(e, t) {
        if (!vg(e, Pn)) {
          if (!mg(e)) return !0;
          if (!t) return !1;
          hg(e);
        }
        return e[Pn].weakData;
      },
      ire = function ire(e) {
        return ere && wM && mg(e) && !vg(e, Pn) && hg(e), e;
      },
      are = function are() {
        ore.enable = function () {}, wM = !0;
        var e = OM.f,
          t = kte([].splice),
          i = {};
        i[Pn] = 1, e(i).length && (OM.f = function (a) {
          for (var u = e(a), l = 0, f = u.length; l < f; l++) if (u[l] === Pn) {
            t(u, l, 1);
            break;
          }
          return u;
        }, Xte({
          target: "Object",
          stat: !0,
          forced: !0
        }, {
          getOwnPropertyNames: Jte.f
        }));
      },
      ore = NM.exports = {
        enable: are,
        fastKey: rre,
        getWeakData: nre,
        onFreeze: ire
      };
    Qte[Pn] = !0;
  });
  var Cr = m(function (vqe, BM) {
    "use strict";

    var ure = An(),
      sre = me(),
      lre = De(),
      cre = la(),
      fre = wf(),
      pre = $e(),
      RM = qn(),
      dre = Nf(),
      vre = Ms(),
      CM = Cs(),
      mre = TypeError,
      Zf = function Zf(e, t) {
        this.stopped = e, this.result = t;
      },
      MM = Zf.prototype;
    BM.exports = function (e, t, i) {
      var a = i && i.that,
        u = !!(i && i.AS_ENTRIES),
        l = !!(i && i.IS_RECORD),
        f = !!(i && i.IS_ITERATOR),
        d = !!(i && i.INTERRUPTED),
        v = ure(t, a),
        h,
        y,
        b,
        S,
        T,
        R,
        A,
        _ = function _(q) {
          return h && CM(h, "normal", q), new Zf(!0, q);
        },
        x = function x(q) {
          return u ? (lre(q), d ? v(q[0], q[1], _) : v(q[0], q[1])) : d ? v(q, _) : v(q);
        };
      if (l) h = e.iterator;else if (f) h = e;else {
        if (y = vre(e), !y) throw new mre(cre(e) + " is not iterable");
        if (fre(y)) {
          for (b = 0, S = pre(e); S > b; b++) if (T = x(e[b]), T && RM(MM, T)) return T;
          return new Zf(!1);
        }
        h = dre(e, y);
      }
      for (R = l ? e.next : h.next; !(A = sre(R, h)).done;) {
        try {
          T = x(A.value);
        } catch (q) {
          CM(h, "throw", q);
        }
        if (_typeof(T) == "object" && T && RM(MM, T)) return T;
      }
      return new Zf(!1);
    };
  });
  var Ys = m(function (mqe, PM) {
    "use strict";

    var hre = z(),
      yre = J(),
      gre = X(),
      DM = vs(),
      bre = Rt(),
      xre = Vs(),
      Sre = Cr(),
      Ere = Nn(),
      Tre = xe(),
      qre = Ot(),
      yg = Ne(),
      gg = Q(),
      Are = Bs(),
      _re = gi(),
      Ore = To();
    PM.exports = function (e, t, i) {
      var a = e.indexOf("Map") !== -1,
        u = e.indexOf("Weak") !== -1,
        l = a ? "set" : "add",
        f = yre[e],
        d = f && f.prototype,
        v = f,
        h = {},
        y = function y(x) {
          var q = gre(d[x]);
          bre(d, x, x === "add" ? function (w) {
            return q(this, w === 0 ? 0 : w), this;
          } : x === "delete" ? function (I) {
            return u && !yg(I) ? !1 : q(this, I === 0 ? 0 : I);
          } : x === "get" ? function (w) {
            return u && !yg(w) ? void 0 : q(this, w === 0 ? 0 : w);
          } : x === "has" ? function (w) {
            return u && !yg(w) ? !1 : q(this, w === 0 ? 0 : w);
          } : function (w, B) {
            return q(this, w === 0 ? 0 : w, B), this;
          });
        },
        b = DM(e, !Tre(f) || !(u || d.forEach && !gg(function () {
          new f().entries().next();
        })));
      if (b) v = i.getConstructor(t, e, a, l), xre.enable();else if (DM(e, !0)) {
        var S = new v(),
          T = S[l](u ? {} : -0, 1) !== S,
          R = gg(function () {
            S.has(1);
          }),
          A = Are(function (x) {
            new f(x);
          }),
          _ = !u && gg(function () {
            for (var x = new f(), q = 5; q--;) x[l](q, q);
            return !x.has(-0);
          });
        A || (v = t(function (x, q) {
          Ere(x, d);
          var I = Ore(new f(), x, v);
          return qre(q) || Sre(q, I[l], {
            that: I,
            AS_ENTRIES: a
          }), I;
        }), v.prototype = d, d.constructor = v), (R || _) && (y("delete"), y("has"), a && y("get")), (_ || T) && y(l), u && d.clear && delete d.clear;
      }
      return h[e] = v, hre({
        global: !0,
        constructor: !0,
        forced: v !== f
      }, h), _re(v, e), u || i.setStrong(v, e, a), v;
    };
  });
  var xg = m(function (hqe, FM) {
    "use strict";

    var IM = _n(),
      wre = wn(),
      UM = xs(),
      Nre = An(),
      Rre = Nn(),
      Cre = Ot(),
      Mre = Cr(),
      Bre = Of(),
      Wf = Rs(),
      Dre = As(),
      Xs = we(),
      zM = Vs().fastKey,
      jM = jt(),
      LM = jM.set,
      bg = jM.getterFor;
    FM.exports = {
      getConstructor: function getConstructor(e, t, i, a) {
        var u = e(function (h, y) {
            Rre(h, l), LM(h, {
              type: t,
              index: IM(null),
              first: null,
              last: null,
              size: 0
            }), Xs || (h.size = 0), Cre(y) || Mre(y, h[a], {
              that: h,
              AS_ENTRIES: i
            });
          }),
          l = u.prototype,
          f = bg(t),
          d = function d(h, y, b) {
            var S = f(h),
              T = v(h, y),
              R,
              A;
            return T ? T.value = b : (S.last = T = {
              index: A = zM(y, !0),
              key: y,
              value: b,
              previous: R = S.last,
              next: null,
              removed: !1
            }, S.first || (S.first = T), R && (R.next = T), Xs ? S.size++ : h.size++, A !== "F" && (S.index[A] = T)), h;
          },
          v = function v(h, y) {
            var b = f(h),
              S = zM(y),
              T;
            if (S !== "F") return b.index[S];
            for (T = b.first; T; T = T.next) if (T.key === y) return T;
          };
        return UM(l, {
          clear: function clear() {
            for (var y = this, b = f(y), S = b.first; S;) S.removed = !0, S.previous && (S.previous = S.previous.next = null), S = S.next;
            b.first = b.last = null, b.index = IM(null), Xs ? b.size = 0 : y.size = 0;
          },
          delete: function _delete(h) {
            var y = this,
              b = f(y),
              S = v(y, h);
            if (S) {
              var T = S.next,
                R = S.previous;
              delete b.index[S.index], S.removed = !0, R && (R.next = T), T && (T.previous = R), b.first === S && (b.first = T), b.last === S && (b.last = R), Xs ? b.size-- : y.size--;
            }
            return !!S;
          },
          forEach: function forEach(y) {
            for (var b = f(this), S = Nre(y, arguments.length > 1 ? arguments[1] : void 0), T; T = T ? T.next : b.first;) for (S(T.value, T.key, this); T && T.removed;) T = T.previous;
          },
          has: function has(y) {
            return !!v(this, y);
          }
        }), UM(l, i ? {
          get: function get(y) {
            var b = v(this, y);
            return b && b.value;
          },
          set: function set(y, b) {
            return d(this, y === 0 ? 0 : y, b);
          }
        } : {
          add: function add(y) {
            return d(this, y = y === 0 ? 0 : y, y);
          }
        }), Xs && wre(l, "size", {
          configurable: !0,
          get: function get() {
            return f(this).size;
          }
        }), u;
      },
      setStrong: function setStrong(e, t, i) {
        var a = t + " Iterator",
          u = bg(t),
          l = bg(a);
        Bre(e, t, function (f, d) {
          LM(this, {
            type: a,
            target: f,
            state: u(f),
            kind: d,
            last: null
          });
        }, function () {
          for (var f = l(this), d = f.kind, v = f.last; v && v.removed;) v = v.previous;
          return !f.target || !(f.last = v = v ? v.next : f.state.first) ? (f.target = null, Wf(void 0, !0)) : Wf(d === "keys" ? v.key : d === "values" ? v.value : [v.key, v.value], !1);
        }, i ? "entries" : "values", !i, !0), Dre(t);
      }
    };
  });
  var HM = m(function () {
    "use strict";

    var Pre = Ys(),
      Ire = xg();
    Pre("Map", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, Ire);
  });
  var Sg = m(function () {
    "use strict";

    HM();
  });
  var GM = m(function () {
    "use strict";

    var Ure = Ys(),
      zre = xg();
    Ure("Set", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, zre);
  });
  var Eg = m(function () {
    "use strict";

    GM();
  });
  var Tg = m(function (Aqe, KM) {
    "use strict";

    KM.exports = {
      IndexSizeError: {
        s: "INDEX_SIZE_ERR",
        c: 1,
        m: 1
      },
      DOMStringSizeError: {
        s: "DOMSTRING_SIZE_ERR",
        c: 2,
        m: 0
      },
      HierarchyRequestError: {
        s: "HIERARCHY_REQUEST_ERR",
        c: 3,
        m: 1
      },
      WrongDocumentError: {
        s: "WRONG_DOCUMENT_ERR",
        c: 4,
        m: 1
      },
      InvalidCharacterError: {
        s: "INVALID_CHARACTER_ERR",
        c: 5,
        m: 1
      },
      NoDataAllowedError: {
        s: "NO_DATA_ALLOWED_ERR",
        c: 6,
        m: 0
      },
      NoModificationAllowedError: {
        s: "NO_MODIFICATION_ALLOWED_ERR",
        c: 7,
        m: 1
      },
      NotFoundError: {
        s: "NOT_FOUND_ERR",
        c: 8,
        m: 1
      },
      NotSupportedError: {
        s: "NOT_SUPPORTED_ERR",
        c: 9,
        m: 1
      },
      InUseAttributeError: {
        s: "INUSE_ATTRIBUTE_ERR",
        c: 10,
        m: 1
      },
      InvalidStateError: {
        s: "INVALID_STATE_ERR",
        c: 11,
        m: 1
      },
      SyntaxError: {
        s: "SYNTAX_ERR",
        c: 12,
        m: 1
      },
      InvalidModificationError: {
        s: "INVALID_MODIFICATION_ERR",
        c: 13,
        m: 1
      },
      NamespaceError: {
        s: "NAMESPACE_ERR",
        c: 14,
        m: 1
      },
      InvalidAccessError: {
        s: "INVALID_ACCESS_ERR",
        c: 15,
        m: 1
      },
      ValidationError: {
        s: "VALIDATION_ERR",
        c: 16,
        m: 0
      },
      TypeMismatchError: {
        s: "TYPE_MISMATCH_ERR",
        c: 17,
        m: 1
      },
      SecurityError: {
        s: "SECURITY_ERR",
        c: 18,
        m: 1
      },
      NetworkError: {
        s: "NETWORK_ERR",
        c: 19,
        m: 1
      },
      AbortError: {
        s: "ABORT_ERR",
        c: 20,
        m: 1
      },
      URLMismatchError: {
        s: "URL_MISMATCH_ERR",
        c: 21,
        m: 1
      },
      QuotaExceededError: {
        s: "QUOTA_EXCEEDED_ERR",
        c: 22,
        m: 1
      },
      TimeoutError: {
        s: "TIMEOUT_ERR",
        c: 23,
        m: 1
      },
      InvalidNodeTypeError: {
        s: "INVALID_NODE_TYPE_ERR",
        c: 24,
        m: 1
      },
      DataCloneError: {
        s: "DATA_CLONE_ERR",
        c: 25,
        m: 1
      }
    };
  });
  var Jf = m(function (_qe, XM) {
    "use strict";

    var Lre = X(),
      VM = Error,
      jre = Lre("".replace),
      Fre = function (e) {
        return String(new VM(e).stack);
      }("zxcasd"),
      YM = /\n\s*at [^:]*:[^\n]*/,
      Hre = YM.test(Fre);
    XM.exports = function (e, t) {
      if (Hre && typeof e == "string" && !VM.prepareStackTrace) for (; t--;) e = jre(e, YM, "");
      return e;
    };
  });
  var iB = m(function () {
    "use strict";

    var Gre = z(),
      tp = wt(),
      Kre = Kh(),
      Ng = Q(),
      Vre = _n(),
      Rg = Hr(),
      rp = Nt().f,
      Yre = Rt(),
      $f = wn(),
      ep = Ye(),
      Xre = Nn(),
      kre = De(),
      ZM = fg(),
      kM = Ks(),
      Lo = Tg(),
      Qre = Jf(),
      WM = jt(),
      Cg = we(),
      JM = We(),
      jo = "DOMException",
      wg = "DATA_CLONE_ERR",
      ip = tp("Error"),
      In = tp(jo) || function () {
        try {
          var e = tp("MessageChannel") || Kre("worker_threads").MessageChannel;
          new e().port1.postMessage(new WeakMap());
        } catch (t) {
          if (t.name === wg && t.code === 25) return t.constructor;
        }
      }(),
      Zre = In && In.prototype,
      $M = ip.prototype,
      Wre = WM.set,
      Jre = WM.getterFor(jo),
      $re = "stack" in new ip(jo),
      eB = function eB(e) {
        return ep(Lo, e) && Lo[e].m ? Lo[e].c : 0;
      },
      Mg = function Mg() {
        Xre(this, Qs);
        var t = arguments.length,
          i = kM(t < 1 ? void 0 : arguments[0]),
          a = kM(t < 2 ? void 0 : arguments[1], "Error"),
          u = eB(a);
        if (Wre(this, {
          type: jo,
          name: a,
          message: i,
          code: u
        }), Cg || (this.name = a, this.message = i, this.code = u), $re) {
          var l = new ip(i);
          l.name = jo, rp(this, "stack", Rg(1, Qre(l.stack, 1)));
        }
      },
      Qs = Mg.prototype = Vre($M),
      tB = function tB(e) {
        return {
          enumerable: !0,
          configurable: !0,
          get: e
        };
      },
      qg = function qg(e) {
        return tB(function () {
          return Jre(this)[e];
        });
      };
    Cg && ($f(Qs, "code", qg("code")), $f(Qs, "message", qg("message")), $f(Qs, "name", qg("name")));
    rp(Qs, "constructor", Rg(1, Mg));
    var ap = Ng(function () {
        return !(new In() instanceof ip);
      }),
      rB = ap || Ng(function () {
        return $M.toString !== ZM || String(new In(1, 2)) !== "2: 1";
      }),
      nB = ap || Ng(function () {
        return new In(1, "DataCloneError").code !== 25;
      }),
      ene = ap || In[wg] !== 25 || Zre[wg] !== 25,
      QM = JM ? rB || nB || ene : ap;
    Gre({
      global: !0,
      constructor: !0,
      forced: QM
    }, {
      DOMException: QM ? Mg : In
    });
    var Zs = tp(jo),
      np = Zs.prototype;
    rB && (JM || In === Zs) && Yre(np, "toString", ZM);
    nB && Cg && In === Zs && $f(np, "code", tB(function () {
      return eB(kre(this).name);
    }));
    for (Ag in Lo) ep(Lo, Ag) && (_g = Lo[Ag], ks = _g.s, Og = Rg(6, _g.c), ep(Zs, ks) || rp(Zs, ks, Og), ep(np, ks) || rp(np, ks, Og));
    var _g, ks, Og, Ag;
  });
  var fB = m(function () {
    "use strict";

    var tne = z(),
      rne = J(),
      jg = wt(),
      zg = Hr(),
      Lg = Nt().f,
      aB = Ye(),
      nne = Nn(),
      ine = To(),
      oB = Ks(),
      Bg = Tg(),
      ane = Jf(),
      one = we(),
      lB = We(),
      Js = "DOMException",
      cB = jg("Error"),
      $s = jg(Js),
      _Fg = function Fg() {
        nne(this, une);
        var t = arguments.length,
          i = oB(t < 1 ? void 0 : arguments[0]),
          a = oB(t < 2 ? void 0 : arguments[1], "Error"),
          u = new $s(i, a),
          l = new cB(i);
        return l.name = Js, Lg(u, "stack", zg(1, ane(l.stack, 1))), ine(u, this, _Fg), u;
      },
      une = _Fg.prototype = $s.prototype,
      sne = "stack" in new cB(Js),
      lne = "stack" in new $s(1, 2),
      Dg = $s && one && Object.getOwnPropertyDescriptor(rne, Js),
      cne = !!Dg && !(Dg.writable && Dg.configurable),
      uB = sne && !cne && !lne;
    tne({
      global: !0,
      constructor: !0,
      forced: lB || uB
    }, {
      DOMException: uB ? _Fg : $s
    });
    var Ws = jg(Js),
      sB = Ws.prototype;
    if (sB.constructor !== Ws) {
      lB || Lg(sB, "constructor", zg(1, Ws));
      for (Pg in Bg) aB(Bg, Pg) && (Ig = Bg[Pg], Ug = Ig.s, aB(Ws, Ug) || Lg(Ws, Ug, zg(6, Ig.c)));
    }
    var Ig, Ug, Pg;
  });
  var dB = m(function () {
    "use strict";

    var fne = wt(),
      pne = gi(),
      pB = "DOMException";
    pne(fne(pB), pB);
  });
  var Hg = m(function (Bqe, vB) {
    "use strict";

    var dne = TypeError;
    vB.exports = function (e, t) {
      if (e < t) throw new dne("Not enough arguments");
      return e;
    };
  });
  var Gg = m(function (Dqe, mB) {
    "use strict";

    var op = X(),
      el = Map.prototype;
    mB.exports = {
      Map: Map,
      set: op(el.set),
      get: op(el.get),
      has: op(el.has),
      remove: op(el.delete),
      proto: el
    };
  });
  var gr = m(function (Pqe, hB) {
    "use strict";

    var Kg = X(),
      up = Set.prototype;
    hB.exports = {
      Set: Set,
      add: Kg(up.add),
      has: Kg(up.has),
      remove: Kg(up.delete),
      proto: up
    };
  });
  var Ti = m(function (Iqe, yB) {
    "use strict";

    var vne = me();
    yB.exports = function (e, t, i) {
      for (var a = i ? e : e.iterator, u = e.next, l, f; !(l = vne(u, a)).done;) if (f = t(l.value), f !== void 0) return f;
    };
  });
  var ga = m(function (Uqe, EB) {
    "use strict";

    var gB = X(),
      mne = Ti(),
      bB = gr(),
      hne = bB.Set,
      xB = bB.proto,
      yne = gB(xB.forEach),
      SB = gB(xB.keys),
      gne = SB(new hne()).next;
    EB.exports = function (e, t, i) {
      return i ? mne({
        iterator: SB(e),
        next: gne
      }, t) : yne(e, t);
    };
  });
  var Vg = m(function (zqe, TB) {
    "use strict";

    var bne = Q(),
      xne = Hr();
    TB.exports = !bne(function () {
      var e = new Error("a");
      return "stack" in e ? (Object.defineProperty(e, "stack", xne(1, 7)), e.stack !== 7) : !0;
    });
  });
  var DB = m(function () {
    "use strict";

    var Sne = We(),
      Ene = z(),
      mt = J(),
      rl = wt(),
      il = X(),
      Wg = Q(),
      Tne = xo(),
      Ho = xe(),
      qne = hs(),
      Ane = Ot(),
      pp = Ne(),
      _ne = bo(),
      One = Cr(),
      _B = De(),
      cp = Yr(),
      wne = Ye(),
      Nne = fy(),
      Yg = or(),
      sp = $e(),
      Rne = Hg(),
      Cne = Ff(),
      dp = Gg(),
      Jg = gr(),
      Mne = ga(),
      qB = Wh(),
      Bne = Vg(),
      $g = Sf(),
      tl = mt.Object,
      Dne = mt.Array,
      OB = mt.Date,
      wB = mt.Error,
      Pne = mt.TypeError,
      Ine = mt.PerformanceMark,
      ba = rl("DOMException"),
      Qg = dp.Map,
      e0 = dp.has,
      NB = dp.get,
      fp = dp.set,
      RB = Jg.Set,
      CB = Jg.add,
      Une = Jg.has,
      zne = rl("Object", "keys"),
      Lne = il([].push),
      jne = il((!0).valueOf),
      Fne = il(1 .valueOf),
      Hne = il("".valueOf),
      Gne = il(OB.prototype.getTime),
      Zg = Tne("structuredClone"),
      nl = "DataCloneError",
      lp = "Transferring",
      MB = function MB(e) {
        return !Wg(function () {
          var t = new mt.Set([7]),
            i = e(t),
            a = e(tl(7));
          return i === t || !i.has(7) || !pp(a) || +a != 7;
        }) && e;
      },
      AB = function AB(e, t) {
        return !Wg(function () {
          var i = new t(),
            a = e({
              a: i,
              b: i
            });
          return !(a && a.a === a.b && a.a instanceof t && a.a.stack === i.stack);
        });
      },
      Kne = function Kne(e) {
        return !Wg(function () {
          var t = e(new mt.AggregateError([1], Zg, {
            cause: 3
          }));
          return t.name !== "AggregateError" || t.errors[0] !== 1 || t.message !== Zg || t.cause !== 3;
        });
      },
      Fo = mt.structuredClone,
      Vne = Sne || !AB(Fo, wB) || !AB(Fo, ba) || !Kne(Fo),
      Yne = !Fo && MB(function (e) {
        return new Ine(Zg, {
          detail: e
        }).detail;
      }),
      Un = MB(Fo) || Yne,
      Xg = function Xg(e) {
        throw new ba("Uncloneable type: " + e, nl);
      },
      Yt = function Yt(e, t) {
        throw new ba((t || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", nl);
      },
      kg = function kg(e, t) {
        return Un || Yt(t), Un(e);
      },
      Xne = function Xne() {
        var e;
        try {
          e = new mt.DataTransfer();
        } catch (_unused30) {
          try {
            e = new mt.ClipboardEvent("").clipboardData;
          } catch (_unused31) {}
        }
        return e && e.items && e.files ? e : null;
      },
      BB = function BB(e, t, i) {
        if (e0(t, e)) return NB(t, e);
        var a = i || cp(e),
          u,
          l,
          f,
          d,
          v,
          h;
        if (a === "SharedArrayBuffer") Un ? u = Un(e) : u = e;else {
          var y = mt.DataView;
          !y && !Ho(e.slice) && Yt("ArrayBuffer");
          try {
            if (Ho(e.slice) && !e.resizable) u = e.slice(0);else for (l = e.byteLength, f = ("maxByteLength" in e) ? {
              maxByteLength: e.maxByteLength
            } : void 0, u = new ArrayBuffer(l, f), d = new y(e), v = new y(u), h = 0; h < l; h++) v.setUint8(h, d.getUint8(h));
          } catch (_unused32) {
            throw new ba("ArrayBuffer is detached", nl);
          }
        }
        return fp(t, e, u), u;
      },
      kne = function kne(e, t, i, a, u) {
        var l = mt[t];
        return pp(l) || Yt(t), new l(BB(e.buffer, u), i, a);
      },
      _vt = function vt(e, t) {
        if (_ne(e) && Xg("Symbol"), !pp(e)) return e;
        if (t) {
          if (e0(t, e)) return NB(t, e);
        } else t = new Qg();
        var i = cp(e),
          a,
          u,
          l,
          f,
          d,
          v,
          h,
          y;
        switch (i) {
          case "Array":
            l = Dne(sp(e));
            break;
          case "Object":
            l = {};
            break;
          case "Map":
            l = new Qg();
            break;
          case "Set":
            l = new RB();
            break;
          case "RegExp":
            l = new RegExp(e.source, Cne(e));
            break;
          case "Error":
            switch (u = e.name, u) {
              case "AggregateError":
                l = new (rl(u))([]);
                break;
              case "EvalError":
              case "RangeError":
              case "ReferenceError":
              case "SuppressedError":
              case "SyntaxError":
              case "TypeError":
              case "URIError":
                l = new (rl(u))();
                break;
              case "CompileError":
              case "LinkError":
              case "RuntimeError":
                l = new (rl("WebAssembly", u))();
                break;
              default:
                l = new wB();
            }
            break;
          case "DOMException":
            l = new ba(e.message, e.name);
            break;
          case "ArrayBuffer":
          case "SharedArrayBuffer":
            l = BB(e, t, i);
            break;
          case "DataView":
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float16Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
            v = i === "DataView" ? e.byteLength : e.length, l = kne(e, i, e.byteOffset, v, t);
            break;
          case "DOMQuad":
            try {
              l = new DOMQuad(_vt(e.p1, t), _vt(e.p2, t), _vt(e.p3, t), _vt(e.p4, t));
            } catch (_unused33) {
              l = kg(e, i);
            }
            break;
          case "File":
            if (Un) try {
              l = Un(e), cp(l) !== i && (l = void 0);
            } catch (_unused34) {}
            if (!l) try {
              l = new File([e], e.name, e);
            } catch (_unused35) {}
            l || Yt(i);
            break;
          case "FileList":
            if (f = Xne(), f) {
              for (d = 0, v = sp(e); d < v; d++) f.items.add(_vt(e[d], t));
              l = f.files;
            } else l = kg(e, i);
            break;
          case "ImageData":
            try {
              l = new ImageData(_vt(e.data, t), e.width, e.height, {
                colorSpace: e.colorSpace
              });
            } catch (_unused36) {
              l = kg(e, i);
            }
            break;
          default:
            if (Un) l = Un(e);else switch (i) {
              case "BigInt":
                l = tl(e.valueOf());
                break;
              case "Boolean":
                l = tl(jne(e));
                break;
              case "Number":
                l = tl(Fne(e));
                break;
              case "String":
                l = tl(Hne(e));
                break;
              case "Date":
                l = new OB(Gne(e));
                break;
              case "Blob":
                try {
                  l = e.slice(0, e.size, e.type);
                } catch (_unused37) {
                  Yt(i);
                }
                break;
              case "DOMPoint":
              case "DOMPointReadOnly":
                a = mt[i];
                try {
                  l = a.fromPoint ? a.fromPoint(e) : new a(e.x, e.y, e.z, e.w);
                } catch (_unused38) {
                  Yt(i);
                }
                break;
              case "DOMRect":
              case "DOMRectReadOnly":
                a = mt[i];
                try {
                  l = a.fromRect ? a.fromRect(e) : new a(e.x, e.y, e.width, e.height);
                } catch (_unused39) {
                  Yt(i);
                }
                break;
              case "DOMMatrix":
              case "DOMMatrixReadOnly":
                a = mt[i];
                try {
                  l = a.fromMatrix ? a.fromMatrix(e) : new a(e);
                } catch (_unused40) {
                  Yt(i);
                }
                break;
              case "AudioData":
              case "VideoFrame":
                Ho(e.clone) || Yt(i);
                try {
                  l = e.clone();
                } catch (_unused41) {
                  Xg(i);
                }
                break;
              case "CropTarget":
              case "CryptoKey":
              case "FileSystemDirectoryHandle":
              case "FileSystemFileHandle":
              case "FileSystemHandle":
              case "GPUCompilationInfo":
              case "GPUCompilationMessage":
              case "ImageBitmap":
              case "RTCCertificate":
              case "WebAssembly.Module":
                Yt(i);
              default:
                Xg(i);
            }
        }
        switch (fp(t, e, l), i) {
          case "Array":
          case "Object":
            for (h = zne(e), d = 0, v = sp(h); d < v; d++) y = h[d], Nne(l, y, _vt(e[y], t));
            break;
          case "Map":
            e.forEach(function (b, S) {
              fp(l, _vt(S, t), _vt(b, t));
            });
            break;
          case "Set":
            e.forEach(function (b) {
              CB(l, _vt(b, t));
            });
            break;
          case "Error":
            Yg(l, "message", _vt(e.message, t)), wne(e, "cause") && Yg(l, "cause", _vt(e.cause, t)), u === "AggregateError" ? l.errors = _vt(e.errors, t) : u === "SuppressedError" && (l.error = _vt(e.error, t), l.suppressed = _vt(e.suppressed, t));
          case "DOMException":
            Bne && Yg(l, "stack", _vt(e.stack, t));
        }
        return l;
      },
      Qne = function Qne(e, t) {
        if (!pp(e)) throw new Pne("Transfer option cannot be converted to a sequence");
        var i = [];
        One(e, function (S) {
          Lne(i, _B(S));
        });
        for (var a = 0, u = sp(i), l = new RB(), f, d, v, h, y, b; a < u;) {
          if (f = i[a++], d = cp(f), d === "ArrayBuffer" ? Une(l, f) : e0(t, f)) throw new ba("Duplicate transferable", nl);
          if (d === "ArrayBuffer") {
            CB(l, f);
            continue;
          }
          if ($g) h = Fo(f, {
            transfer: [f]
          });else switch (d) {
            case "ImageBitmap":
              v = mt.OffscreenCanvas, qne(v) || Yt(d, lp);
              try {
                y = new v(f.width, f.height), b = y.getContext("bitmaprenderer"), b.transferFromImageBitmap(f), h = y.transferToImageBitmap();
              } catch (_unused42) {}
              break;
            case "AudioData":
            case "VideoFrame":
              (!Ho(f.clone) || !Ho(f.close)) && Yt(d, lp);
              try {
                h = f.clone(), f.close();
              } catch (_unused43) {}
              break;
            case "MediaSourceHandle":
            case "MessagePort":
            case "MIDIAccess":
            case "OffscreenCanvas":
            case "ReadableStream":
            case "RTCDataChannel":
            case "TransformStream":
            case "WebTransportReceiveStream":
            case "WebTransportSendStream":
            case "WritableStream":
              Yt(d, lp);
          }
          if (h === void 0) throw new ba("This object cannot be transferred: " + d, nl);
          fp(t, f, h);
        }
        return l;
      },
      Zne = function Zne(e) {
        Mne(e, function (t) {
          $g ? Un(t, {
            transfer: [t]
          }) : Ho(t.transfer) ? t.transfer() : qB ? qB(t) : Yt("ArrayBuffer", lp);
        });
      };
    Ene({
      global: !0,
      enumerable: !0,
      sham: !$g,
      forced: Vne
    }, {
      structuredClone: function structuredClone(t) {
        var i = Rne(arguments.length, 1) > 1 && !Ane(arguments[1]) ? _B(arguments[1]) : void 0,
          a = i ? i.transfer : void 0,
          u,
          l;
        a !== void 0 && (u = new Qg(), l = Qne(a, u));
        var f = _vt(t, u);
        return l && Zne(l), f;
      }
    });
  });
  var IB = m(function (Fqe, PB) {
    "use strict";

    lM();
    Dn();
    hM();
    Qr();
    Sg();
    Eg();
    iB();
    fB();
    dB();
    DB();
    var Wne = it();
    PB.exports = Wne.structuredClone;
  });
  var vp = m(function (Hqe, zB) {
    "use strict";

    var UB = J(),
      t0 = Q(),
      Jne = Bs(),
      $ne = se().NATIVE_ARRAY_BUFFER_VIEWS,
      eie = UB.ArrayBuffer,
      xa = UB.Int8Array;
    zB.exports = !$ne || !t0(function () {
      xa(1);
    }) || !t0(function () {
      new xa(-1);
    }) || !Jne(function (e) {
      new xa(), new xa(null), new xa(1.5), new xa(e);
    }, !0) || t0(function () {
      return new xa(new eie(2), 1, void 0).length !== 1;
    });
  });
  var jB = m(function (Gqe, LB) {
    "use strict";

    var tie = Je(),
      rie = RangeError;
    LB.exports = function (e) {
      var t = tie(e);
      if (t < 0) throw new rie("The argument can't be less than 0");
      return t;
    };
  });
  var r0 = m(function (Kqe, FB) {
    "use strict";

    var nie = jB(),
      iie = RangeError;
    FB.exports = function (e, t) {
      var i = nie(e);
      if (i % t) throw new iie("Wrong offset");
      return i;
    };
  });
  var GB = m(function (Vqe, HB) {
    "use strict";

    var aie = Math.round;
    HB.exports = function (e) {
      var t = aie(e);
      return t < 0 ? 0 : t > 255 ? 255 : t & 255;
    };
  });
  var n0 = m(function (Yqe, KB) {
    "use strict";

    var oie = Yr();
    KB.exports = function (e) {
      var t = oie(e);
      return t === "BigInt64Array" || t === "BigUint64Array";
    };
  });
  var mp = m(function (Xqe, VB) {
    "use strict";

    var uie = Gc(),
      sie = TypeError;
    VB.exports = function (e) {
      var t = uie(e, "number");
      if (typeof t == "number") throw new sie("Can't convert number to bigint");
      return BigInt(t);
    };
  });
  var i0 = m(function (kqe, YB) {
    "use strict";

    var lie = An(),
      cie = me(),
      fie = Ky(),
      pie = dt(),
      die = $e(),
      vie = Nf(),
      mie = Ms(),
      hie = wf(),
      yie = n0(),
      gie = se().aTypedArrayConstructor,
      bie = mp();
    YB.exports = function (t) {
      var i = fie(this),
        a = pie(t),
        u = arguments.length,
        l = u > 1 ? arguments[1] : void 0,
        f = l !== void 0,
        d = mie(a),
        v,
        h,
        y,
        b,
        S,
        T,
        R,
        A;
      if (d && !hie(d)) for (R = vie(a, d), A = R.next, a = []; !(T = cie(A, R)).done;) a.push(T.value);
      for (f && u > 2 && (l = lie(l, arguments[2])), h = die(a), y = new (gie(i))(h), b = yie(y), v = 0; h > v; v++) S = f ? l(a[v], v) : a[v], y[v] = b ? bie(S) : +S;
      return y;
    };
  });
  var hp = m(function (Qqe, XB) {
    "use strict";

    var xie = $e();
    XB.exports = function (e, t, i) {
      for (var a = 0, u = arguments.length > 2 ? i : xie(t), l = new e(u); u > a;) l[a] = t[a++];
      return l;
    };
  });
  var Wr = m(function (Zqe, f0) {
    "use strict";

    var kB = z(),
      aD = J(),
      QB = me(),
      Sie = we(),
      Eie = vp(),
      sl = se(),
      oD = qs(),
      ZB = Nn(),
      Tie = Hr(),
      al = or(),
      qie = Mf(),
      Aie = Ft(),
      WB = sf(),
      a0 = r0(),
      _ie = GB(),
      uD = Kc(),
      ol = Ye(),
      Oie = Yr(),
      s0 = Ne(),
      wie = bo(),
      Nie = _n(),
      Rie = qn(),
      yp = hi(),
      Cie = Eo().f,
      JB = i0(),
      Mie = Ct().forEach,
      Bie = As(),
      Die = wn(),
      sD = Nt(),
      lD = ca(),
      $B = hp(),
      p0 = jt(),
      Pie = To(),
      l0 = p0.get,
      Iie = p0.set,
      Uie = p0.enforce,
      cD = sD.f,
      zie = lD.f,
      o0 = aD.RangeError,
      fD = oD.ArrayBuffer,
      Lie = fD.prototype,
      jie = oD.DataView,
      gp = sl.NATIVE_ARRAY_BUFFER_VIEWS,
      eD = sl.TYPED_ARRAY_TAG,
      tD = sl.TypedArray,
      ul = sl.TypedArrayPrototype,
      c0 = sl.isTypedArray,
      bp = "BYTES_PER_ELEMENT",
      u0 = "Wrong length",
      xp = function xp(e, t) {
        Die(e, t, {
          configurable: !0,
          get: function get() {
            return l0(this)[t];
          }
        });
      },
      rD = function rD(e) {
        var t;
        return Rie(Lie, e) || (t = Oie(e)) === "ArrayBuffer" || t === "SharedArrayBuffer";
      },
      pD = function pD(e, t) {
        return c0(e) && !wie(t) && t in e && qie(+t) && t >= 0;
      },
      nD = function nD(t, i) {
        return i = uD(i), pD(t, i) ? Tie(2, t[i]) : zie(t, i);
      },
      iD = function iD(t, i, a) {
        return i = uD(i), pD(t, i) && s0(a) && ol(a, "value") && !ol(a, "get") && !ol(a, "set") && !a.configurable && (!ol(a, "writable") || a.writable) && (!ol(a, "enumerable") || a.enumerable) ? (t[i] = a.value, t) : cD(t, i, a);
      };
    Sie ? (gp || (lD.f = nD, sD.f = iD, xp(ul, "buffer"), xp(ul, "byteOffset"), xp(ul, "byteLength"), xp(ul, "length")), kB({
      target: "Object",
      stat: !0,
      forced: !gp
    }, {
      getOwnPropertyDescriptor: nD,
      defineProperty: iD
    }), f0.exports = function (e, t, i) {
      var a = e.match(/\d+/)[0] / 8,
        u = e + (i ? "Clamped" : "") + "Array",
        l = "get" + e,
        f = "set" + e,
        d = aD[u],
        v = d,
        h = v && v.prototype,
        y = {},
        b = function b(A, _) {
          var x = l0(A);
          return x.view[l](_ * a + x.byteOffset, !0);
        },
        S = function S(A, _, x) {
          var q = l0(A);
          q.view[f](_ * a + q.byteOffset, i ? _ie(x) : x, !0);
        },
        T = function T(A, _) {
          cD(A, _, {
            get: function get() {
              return b(this, _);
            },
            set: function set(x) {
              return S(this, _, x);
            },
            enumerable: !0
          });
        };
      gp ? Eie && (v = t(function (A, _, x, q) {
        return ZB(A, h), Pie(function () {
          return s0(_) ? rD(_) ? q !== void 0 ? new d(_, a0(x, a), q) : x !== void 0 ? new d(_, a0(x, a)) : new d(_) : c0(_) ? $B(v, _) : QB(JB, v, _) : new d(WB(_));
        }(), A, v);
      }), yp && yp(v, tD), Mie(Cie(d), function (A) {
        A in v || al(v, A, d[A]);
      }), v.prototype = h) : (v = t(function (A, _, x, q) {
        ZB(A, h);
        var I = 0,
          w = 0,
          B,
          U,
          k;
        if (!s0(_)) k = WB(_), U = k * a, B = new fD(U);else if (rD(_)) {
          B = _, w = a0(x, a);
          var ne = _.byteLength;
          if (q === void 0) {
            if (ne % a) throw new o0(u0);
            if (U = ne - w, U < 0) throw new o0(u0);
          } else if (U = Aie(q) * a, U + w > ne) throw new o0(u0);
          k = U / a;
        } else return c0(_) ? $B(v, _) : QB(JB, v, _);
        for (Iie(A, {
          buffer: B,
          byteOffset: w,
          byteLength: U,
          length: k,
          view: new jie(B)
        }); I < k;) T(A, I++);
      }), yp && yp(v, tD), h = v.prototype = Nie(ul)), h.constructor !== v && al(h, "constructor", v), Uie(h).TypedArrayConstructor = v, eD && al(h, eD, u);
      var R = v !== d;
      y[u] = v, kB({
        global: !0,
        constructor: !0,
        forced: R,
        sham: !gp
      }, y), bp in v || al(v, bp, a), bp in h || al(h, bp, a), Bie(u);
    }) : f0.exports = function () {};
  });
  var dD = m(function () {
    "use strict";

    var Fie = Wr();
    Fie("Int8", function (e) {
      return function (i, a, u) {
        return e(this, i, a, u);
      };
    });
  });
  var vD = m(function () {
    "use strict";

    var Hie = Wr();
    Hie("Uint8", function (e) {
      return function (i, a, u) {
        return e(this, i, a, u);
      };
    });
  });
  var mD = m(function () {
    "use strict";

    var Gie = Wr();
    Gie("Uint8", function (e) {
      return function (i, a, u) {
        return e(this, i, a, u);
      };
    }, !0);
  });
  var hD = m(function () {
    "use strict";

    var Kie = Wr();
    Kie("Int16", function (e) {
      return function (i, a, u) {
        return e(this, i, a, u);
      };
    });
  });
  var yD = m(function () {
    "use strict";

    var Vie = Wr();
    Vie("Uint16", function (e) {
      return function (i, a, u) {
        return e(this, i, a, u);
      };
    });
  });
  var gD = m(function () {
    "use strict";

    var Yie = Wr();
    Yie("Int32", function (e) {
      return function (i, a, u) {
        return e(this, i, a, u);
      };
    });
  });
  var bD = m(function () {
    "use strict";

    var Xie = Wr();
    Xie("Uint32", function (e) {
      return function (i, a, u) {
        return e(this, i, a, u);
      };
    });
  });
  var xD = m(function () {
    "use strict";

    var kie = Wr();
    kie("Float32", function (e) {
      return function (i, a, u) {
        return e(this, i, a, u);
      };
    });
  });
  var SD = m(function () {
    "use strict";

    var Qie = Wr();
    Qie("Float64", function (e) {
      return function (i, a, u) {
        return e(this, i, a, u);
      };
    });
  });
  var ED = m(function () {
    "use strict";

    var Zie = vp(),
      Wie = se().exportTypedArrayStaticMethod,
      Jie = i0();
    Wie("from", Jie, Zie);
  });
  var qD = m(function () {
    "use strict";

    var TD = se(),
      $ie = vp(),
      eae = TD.aTypedArrayConstructor,
      tae = TD.exportTypedArrayStaticMethod;
    tae("of", function () {
      for (var t = 0, i = arguments.length, a = new (eae(this))(i); i > t;) a[t] = arguments[t++];
      return a;
    }, $ie);
  });
  var _D = m(function () {
    "use strict";

    var AD = se(),
      rae = $e(),
      nae = Je(),
      iae = AD.aTypedArray,
      aae = AD.exportTypedArrayMethod;
    aae("at", function (t) {
      var i = iae(this),
        a = rae(i),
        u = nae(t),
        l = u >= 0 ? u : a + u;
      return l < 0 || l >= a ? void 0 : i[l];
    });
  });
  var ND = m(function (SAe, wD) {
    "use strict";

    var OD = la(),
      oae = TypeError;
    wD.exports = function (e, t) {
      if (!delete e[t]) throw new oae("Cannot delete property " + OD(t) + " of " + OD(e));
    };
  });
  var CD = m(function (EAe, RD) {
    "use strict";

    var uae = dt(),
      d0 = pa(),
      sae = $e(),
      lae = ND(),
      cae = Math.min;
    RD.exports = [].copyWithin || function (t, i) {
      var a = uae(this),
        u = sae(a),
        l = d0(t, u),
        f = d0(i, u),
        d = arguments.length > 2 ? arguments[2] : void 0,
        v = cae((d === void 0 ? u : d0(d, u)) - f, u - l),
        h = 1;
      for (f < l && l < f + v && (h = -1, f += v - 1, l += v - 1); v-- > 0;) f in a ? a[l] = a[f] : lae(a, l), l += h, f += h;
      return a;
    };
  });
  var BD = m(function () {
    "use strict";

    var fae = X(),
      MD = se(),
      pae = CD(),
      dae = fae(pae),
      vae = MD.aTypedArray,
      mae = MD.exportTypedArrayMethod;
    mae("copyWithin", function (t, i) {
      return dae(vae(this), t, i, arguments.length > 2 ? arguments[2] : void 0);
    });
  });
  var PD = m(function () {
    "use strict";

    var DD = se(),
      hae = Ct().every,
      yae = DD.aTypedArray,
      gae = DD.exportTypedArrayMethod;
    gae("every", function (t) {
      return hae(yae(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  });
  var UD = m(function () {
    "use strict";

    var ID = se(),
      bae = nf(),
      xae = mp(),
      Sae = Yr(),
      Eae = me(),
      Tae = X(),
      qae = Q(),
      Aae = ID.aTypedArray,
      _ae = ID.exportTypedArrayMethod,
      Oae = Tae("".slice),
      wae = qae(function () {
        var e = 0;
        return new Int8Array(2).fill({
          valueOf: function valueOf() {
            return e++;
          }
        }), e !== 1;
      });
    _ae("fill", function (t) {
      var i = arguments.length;
      Aae(this);
      var a = Oae(Sae(this), 0, 3) === "Big" ? xae(t) : +t;
      return Eae(bae, this, a, i > 1 ? arguments[1] : void 0, i > 2 ? arguments[2] : void 0);
    }, wae);
  });
  var LD = m(function (NAe, zD) {
    "use strict";

    var Nae = hp(),
      Rae = se().getTypedArrayConstructor;
    zD.exports = function (e, t) {
      return Nae(Rae(e), t);
    };
  });
  var FD = m(function () {
    "use strict";

    var jD = se(),
      Cae = Ct().filter,
      Mae = LD(),
      Bae = jD.aTypedArray,
      Dae = jD.exportTypedArrayMethod;
    Dae("filter", function (t) {
      var i = Cae(Bae(this), t, arguments.length > 1 ? arguments[1] : void 0);
      return Mae(this, i);
    });
  });
  var GD = m(function () {
    "use strict";

    var HD = se(),
      Pae = Ct().find,
      Iae = HD.aTypedArray,
      Uae = HD.exportTypedArrayMethod;
    Uae("find", function (t) {
      return Pae(Iae(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  });
  var VD = m(function () {
    "use strict";

    var KD = se(),
      zae = Ct().findIndex,
      Lae = KD.aTypedArray,
      jae = KD.exportTypedArrayMethod;
    jae("findIndex", function (t) {
      return zae(Lae(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  });
  var XD = m(function () {
    "use strict";

    var YD = se(),
      Fae = bs().findLast,
      Hae = YD.aTypedArray,
      Gae = YD.exportTypedArrayMethod;
    Gae("findLast", function (t) {
      return Fae(Hae(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  });
  var QD = m(function () {
    "use strict";

    var kD = se(),
      Kae = bs().findLastIndex,
      Vae = kD.aTypedArray,
      Yae = kD.exportTypedArrayMethod;
    Yae("findLastIndex", function (t) {
      return Kae(Vae(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  });
  var WD = m(function () {
    "use strict";

    var ZD = se(),
      Xae = Ct().forEach,
      kae = ZD.aTypedArray,
      Qae = ZD.exportTypedArrayMethod;
    Qae("forEach", function (t) {
      Xae(kae(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  });
  var $D = m(function () {
    "use strict";

    var JD = se(),
      Zae = ps().includes,
      Wae = JD.aTypedArray,
      Jae = JD.exportTypedArrayMethod;
    Jae("includes", function (t) {
      return Zae(Wae(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  });
  var tP = m(function () {
    "use strict";

    var eP = se(),
      $ae = ps().indexOf,
      eoe = eP.aTypedArray,
      toe = eP.exportTypedArrayMethod;
    toe("indexOf", function (t) {
      return $ae(eoe(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  });
  var nP = m(function () {
    "use strict";

    var rP = se(),
      roe = X(),
      noe = rP.aTypedArray,
      ioe = rP.exportTypedArrayMethod,
      aoe = roe([].join);
    ioe("join", function (t) {
      return aoe(noe(this), t);
    });
  });
  var oP = m(function (kAe, aP) {
    "use strict";

    var ooe = ya(),
      uoe = Gr(),
      soe = Je(),
      loe = $e(),
      coe = ys(),
      foe = Math.min,
      v0 = [].lastIndexOf,
      iP = !!v0 && 1 / [1].lastIndexOf(1, -0) < 0,
      poe = coe("lastIndexOf"),
      doe = iP || !poe;
    aP.exports = doe ? function (t) {
      if (iP) return ooe(v0, this, arguments) || 0;
      var i = uoe(this),
        a = loe(i);
      if (a === 0) return -1;
      var u = a - 1;
      for (arguments.length > 1 && (u = foe(u, soe(arguments[1]))), u < 0 && (u = a + u); u >= 0; u--) if (u in i && i[u] === t) return u || 0;
      return -1;
    } : v0;
  });
  var sP = m(function () {
    "use strict";

    var uP = se(),
      voe = ya(),
      moe = oP(),
      hoe = uP.aTypedArray,
      yoe = uP.exportTypedArrayMethod;
    yoe("lastIndexOf", function (t) {
      var i = arguments.length;
      return voe(moe, hoe(this), i > 1 ? [t, arguments[1]] : [t]);
    });
  });
  var lP = m(function () {
    "use strict";

    var m0 = se(),
      goe = Ct().map,
      boe = m0.aTypedArray,
      xoe = m0.getTypedArrayConstructor,
      Soe = m0.exportTypedArrayMethod;
    Soe("map", function (t) {
      return goe(boe(this), t, arguments.length > 1 ? arguments[1] : void 0, function (i, a) {
        return new (xoe(i))(a);
      });
    });
  });
  var h0 = m(function ($Ae, dP) {
    "use strict";

    var Eoe = pt(),
      Toe = dt(),
      qoe = go(),
      Aoe = $e(),
      cP = TypeError,
      fP = "Reduce of empty array with no initial value",
      pP = function pP(e) {
        return function (t, i, a, u) {
          var l = Toe(t),
            f = qoe(l),
            d = Aoe(l);
          if (Eoe(i), d === 0 && a < 2) throw new cP(fP);
          var v = e ? d - 1 : 0,
            h = e ? -1 : 1;
          if (a < 2) for (;;) {
            if (v in f) {
              u = f[v], v += h;
              break;
            }
            if (v += h, e ? v < 0 : d <= v) throw new cP(fP);
          }
          for (; e ? v >= 0 : d > v; v += h) v in f && (u = i(u, f[v], v, l));
          return u;
        };
      };
    dP.exports = {
      left: pP(!1),
      right: pP(!0)
    };
  });
  var mP = m(function () {
    "use strict";

    var vP = se(),
      _oe = h0().left,
      Ooe = vP.aTypedArray,
      woe = vP.exportTypedArrayMethod;
    woe("reduce", function (t) {
      var i = arguments.length;
      return _oe(Ooe(this), t, i, i > 1 ? arguments[1] : void 0);
    });
  });
  var yP = m(function () {
    "use strict";

    var hP = se(),
      Noe = h0().right,
      Roe = hP.aTypedArray,
      Coe = hP.exportTypedArrayMethod;
    Coe("reduceRight", function (t) {
      var i = arguments.length;
      return Noe(Roe(this), t, i, i > 1 ? arguments[1] : void 0);
    });
  });
  var bP = m(function () {
    "use strict";

    var gP = se(),
      Moe = gP.aTypedArray,
      Boe = gP.exportTypedArrayMethod,
      Doe = Math.floor;
    Boe("reverse", function () {
      for (var t = this, i = Moe(t).length, a = Doe(i / 2), u = 0, l; u < a;) l = t[u], t[u++] = t[--i], t[i] = l;
      return t;
    });
  });
  var AP = m(function () {
    "use strict";

    var SP = J(),
      EP = me(),
      b0 = se(),
      Poe = $e(),
      Ioe = r0(),
      Uoe = dt(),
      TP = Q(),
      zoe = SP.RangeError,
      y0 = SP.Int8Array,
      xP = y0 && y0.prototype,
      qP = xP && xP.set,
      Loe = b0.aTypedArray,
      joe = b0.exportTypedArrayMethod,
      g0 = !TP(function () {
        var e = new Uint8ClampedArray(2);
        return EP(qP, e, {
          length: 1,
          0: 3
        }, 1), e[1] !== 3;
      }),
      Foe = g0 && b0.NATIVE_ARRAY_BUFFER_VIEWS && TP(function () {
        var e = new y0(2);
        return e.set(1), e.set("2", 1), e[0] !== 0 || e[1] !== 2;
      });
    joe("set", function (t) {
      Loe(this);
      var i = Ioe(arguments.length > 1 ? arguments[1] : void 0, 1),
        a = Uoe(t);
      if (g0) return EP(qP, this, a, i);
      var u = this.length,
        l = Poe(a),
        f = 0;
      if (l + i > u) throw new zoe("Wrong length");
      for (; f < l;) this[i + f] = a[f++];
    }, !g0 || Foe);
  });
  var _P = m(function () {
    "use strict";

    var x0 = se(),
      Hoe = Q(),
      Goe = yi(),
      Koe = x0.aTypedArray,
      Voe = x0.getTypedArrayConstructor,
      Yoe = x0.exportTypedArrayMethod,
      Xoe = Hoe(function () {
        new Int8Array(1).slice();
      });
    Yoe("slice", function (t, i) {
      for (var a = Goe(Koe(this), t, i), u = Voe(this), l = 0, f = a.length, d = new u(f); f > l;) d[l] = a[l++];
      return d;
    }, Xoe);
  });
  var wP = m(function () {
    "use strict";

    var OP = se(),
      koe = Ct().some,
      Qoe = OP.aTypedArray,
      Zoe = OP.exportTypedArrayMethod;
    Zoe("some", function (t) {
      return koe(Qoe(this), t, arguments.length > 1 ? arguments[1] : void 0);
    });
  });
  var CP = m(function (p_e, RP) {
    "use strict";

    var NP = yi(),
      Woe = Math.floor,
      _S2 = function S0(e, t) {
        var i = e.length;
        if (i < 8) for (var a = 1, u, l; a < i;) {
          for (l = a, u = e[a]; l && t(e[l - 1], u) > 0;) e[l] = e[--l];
          l !== a++ && (e[l] = u);
        } else for (var f = Woe(i / 2), d = _S2(NP(e, 0, f), t), v = _S2(NP(e, f), t), h = d.length, y = v.length, b = 0, S = 0; b < h || S < y;) e[b + S] = b < h && S < y ? t(d[b], v[S]) <= 0 ? d[b++] : v[S++] : b < h ? d[b++] : v[S++];
        return e;
      };
    RP.exports = _S2;
  });
  var DP = m(function (d_e, BP) {
    "use strict";

    var Joe = Kr(),
      MP = Joe.match(/firefox\/(\d+)/i);
    BP.exports = !!MP && +MP[1];
  });
  var IP = m(function (v_e, PP) {
    "use strict";

    var $oe = Kr();
    PP.exports = /MSIE|Trident/.test($oe);
  });
  var LP = m(function (m_e, zP) {
    "use strict";

    var eue = Kr(),
      UP = eue.match(/AppleWebKit\/(\d+)\./);
    zP.exports = !!UP && +UP[1];
  });
  var VP = m(function () {
    "use strict";

    var tue = J(),
      rue = vi(),
      E0 = Q(),
      nue = pt(),
      iue = CP(),
      KP = se(),
      jP = DP(),
      aue = IP(),
      FP = us(),
      HP = LP(),
      oue = KP.aTypedArray,
      uue = KP.exportTypedArrayMethod,
      ll = tue.Uint16Array,
      Go = ll && rue(ll.prototype.sort),
      sue = !!Go && !(E0(function () {
        Go(new ll(2), null);
      }) && E0(function () {
        Go(new ll(2), {});
      })),
      GP = !!Go && !E0(function () {
        if (FP) return FP < 74;
        if (jP) return jP < 67;
        if (aue) return !0;
        if (HP) return HP < 602;
        var e = new ll(516),
          t = Array(516),
          i,
          a;
        for (i = 0; i < 516; i++) a = i % 4, e[i] = 515 - i, t[i] = i - 2 * a + 3;
        for (Go(e, function (u, l) {
          return (u / 4 | 0) - (l / 4 | 0);
        }), i = 0; i < 516; i++) if (e[i] !== t[i]) return !0;
      }),
      lue = function lue(e) {
        return function (t, i) {
          return e !== void 0 ? +e(t, i) || 0 : i !== i ? -1 : t !== t ? 1 : t === 0 && i === 0 ? 1 / t > 0 && 1 / i < 0 ? 1 : -1 : t > i;
        };
      };
    uue("sort", function (t) {
      return t !== void 0 && nue(t), GP ? Go(this, t) : iue(oue(this), lue(t));
    }, !GP || sue);
  });
  var XP = m(function () {
    "use strict";

    var T0 = se(),
      cue = Ft(),
      YP = pa(),
      fue = T0.aTypedArray,
      pue = T0.getTypedArrayConstructor,
      due = T0.exportTypedArrayMethod;
    due("subarray", function (t, i) {
      var a = fue(this),
        u = a.length,
        l = YP(t, u),
        f = pue(a);
      return new f(a.buffer, a.byteOffset + l * a.BYTES_PER_ELEMENT, cue((i === void 0 ? u : YP(i, u)) - l));
    });
  });
  var JP = m(function () {
    "use strict";

    var vue = J(),
      mue = ya(),
      ZP = se(),
      q0 = Q(),
      kP = yi(),
      Sp = vue.Int8Array,
      QP = ZP.aTypedArray,
      hue = ZP.exportTypedArrayMethod,
      WP = [].toLocaleString,
      yue = !!Sp && q0(function () {
        WP.call(new Sp(1));
      }),
      gue = q0(function () {
        return [1, 2].toLocaleString() !== new Sp([1, 2]).toLocaleString();
      }) || !q0(function () {
        Sp.prototype.toLocaleString.call([1, 2]);
      });
    hue("toLocaleString", function () {
      return mue(WP, yue ? kP(QP(this)) : QP(this), kP(arguments));
    }, gue);
  });
  var eI = m(function () {
    "use strict";

    var bue = se().exportTypedArrayMethod,
      xue = Q(),
      Sue = J(),
      Eue = X(),
      $P = Sue.Uint8Array,
      Tue = $P && $P.prototype || {},
      Ep = [].toString,
      que = Eue([].join);
    xue(function () {
      Ep.call({});
    }) && (Ep = function Ep() {
      return que(this);
    });
    var Aue = Tue.toString !== Ep;
    bue("toString", Ep, Aue);
  });
  var rI = m(function (q_e, tI) {
    "use strict";

    var _ue = $e();
    tI.exports = function (e, t) {
      for (var i = _ue(e), a = new t(i), u = 0; u < i; u++) a[u] = e[i - u - 1];
      return a;
    };
  });
  var nI = m(function () {
    "use strict";

    var Oue = rI(),
      A0 = se(),
      wue = A0.aTypedArray,
      Nue = A0.exportTypedArrayMethod,
      Rue = A0.getTypedArrayConstructor;
    Nue("toReversed", function () {
      return Oue(wue(this), Rue(this));
    });
  });
  var iI = m(function () {
    "use strict";

    var Tp = se(),
      Cue = X(),
      Mue = pt(),
      Bue = hp(),
      Due = Tp.aTypedArray,
      Pue = Tp.getTypedArrayConstructor,
      Iue = Tp.exportTypedArrayMethod,
      Uue = Cue(Tp.TypedArrayPrototype.sort);
    Iue("toSorted", function (t) {
      t !== void 0 && Mue(t);
      var i = Due(this),
        a = Bue(Pue(i), i);
      return Uue(a, t);
    });
  });
  var oI = m(function (N_e, aI) {
    "use strict";

    var zue = $e(),
      Lue = Je(),
      jue = RangeError;
    aI.exports = function (e, t, i, a) {
      var u = zue(e),
        l = Lue(i),
        f = l < 0 ? u + l : l;
      if (f >= u || f < 0) throw new jue("Incorrect index");
      for (var d = new t(u), v = 0; v < u; v++) d[v] = v === f ? a : e[v];
      return d;
    };
  });
  var uI = m(function () {
    "use strict";

    var Fue = oI(),
      _0 = se(),
      Hue = n0(),
      Gue = Je(),
      Kue = mp(),
      Vue = _0.aTypedArray,
      Yue = _0.getTypedArrayConstructor,
      Xue = _0.exportTypedArrayMethod,
      kue = !!function () {
        try {
          new Int8Array(1).with(2, {
            valueOf: function valueOf() {
              throw 8;
            }
          });
        } catch (e) {
          return e === 8;
        }
      }();
    Xue("with", function (e, t) {
      var i = Vue(this),
        a = Gue(e),
        u = Hue(i) ? Kue(t) : +t;
      return Fue(i, Yue(i), a, u);
    }, !kue);
  });
  var pI = m(function () {
    "use strict";

    var Que = J(),
      Zue = Q(),
      O0 = X(),
      lI = se(),
      w0 = Dn(),
      Wue = Re(),
      N0 = Wue("iterator"),
      sI = Que.Uint8Array,
      Jue = O0(w0.values),
      $ue = O0(w0.keys),
      ese = O0(w0.entries),
      R0 = lI.aTypedArray,
      qp = lI.exportTypedArrayMethod,
      Ko = sI && sI.prototype,
      Ap = !Zue(function () {
        Ko[N0].call([1]);
      }),
      cI = !!Ko && Ko.values && Ko[N0] === Ko.values && Ko.values.name === "values",
      fI = function fI() {
        return Jue(R0(this));
      };
    qp("entries", function () {
      return ese(R0(this));
    }, Ap);
    qp("keys", function () {
      return $ue(R0(this));
    }, Ap);
    qp("values", fI, Ap || !cI, {
      name: "values"
    });
    qp(N0, fI, Ap || !cI, {
      name: "values"
    });
  });
  var dI = m(function () {
    "use strict";

    Qr();
    ma();
    ED();
    qD();
    _D();
    BD();
    PD();
    UD();
    FD();
    GD();
    VD();
    XD();
    QD();
    WD();
    $D();
    tP();
    nP();
    sP();
    lP();
    mP();
    yP();
    bP();
    AP();
    _P();
    wP();
    VP();
    XP();
    JP();
    eI();
    nI();
    iI();
    uI();
    pI();
  });
  var mI = m(function (I_e, vI) {
    "use strict";

    dD();
    vD();
    mD();
    hD();
    yD();
    gD();
    bD();
    xD();
    SD();
    dI();
    vI.exports = J();
  });
  var yI = m(function (U_e, hI) {
    "use strict";

    var tse = mI();
    hI.exports = tse;
  });
  var bI = m(function () {
    "use strict";

    var rse = z(),
      cl = X(),
      nse = Se(),
      ise = cl("".charAt),
      ase = cl("".charCodeAt),
      ose = cl(/./.exec),
      use = cl(1 .toString),
      sse = cl("".toUpperCase),
      lse = /[\w*+\-./@]/,
      gI = function gI(e, t) {
        for (var i = use(e, 16); i.length < t;) i = "0" + i;
        return i;
      };
    rse({
      global: !0
    }, {
      escape: function escape(t) {
        for (var i = nse(t), a = "", u = i.length, l = 0, f, d; l < u;) f = ise(i, l++), ose(lse, f) ? a += f : (d = ase(f, 0), d < 256 ? a += "%" + gI(d, 2) : a += "%u" + sse(gI(d, 4)));
        return a;
      }
    });
  });
  var SI = m(function (j_e, xI) {
    "use strict";

    bI();
    var cse = it();
    xI.exports = cse.escape;
  });
  var TI = m(function (F_e, EI) {
    "use strict";

    var fse = SI();
    EI.exports = fse;
  });
  var wI = m(function () {
    "use strict";

    var pse = z(),
      C0 = X(),
      dse = Se(),
      qI = String.fromCharCode,
      AI = C0("".charAt),
      _I = C0(/./.exec),
      OI = C0("".slice),
      vse = /^[\da-f]{2}$/i,
      mse = /^[\da-f]{4}$/i;
    pse({
      global: !0
    }, {
      unescape: function unescape(t) {
        for (var i = dse(t), a = "", u = i.length, l = 0, f, d; l < u;) {
          if (f = AI(i, l++), f === "%") {
            if (AI(i, l) === "u") {
              if (d = OI(i, l + 1, l + 5), _I(mse, d)) {
                a += qI(parseInt(d, 16)), l += 5;
                continue;
              }
            } else if (d = OI(i, l, l + 2), _I(vse, d)) {
              a += qI(parseInt(d, 16)), l += 2;
              continue;
            }
          }
          a += f;
        }
        return a;
      }
    });
  });
  var RI = m(function (K_e, NI) {
    "use strict";

    wI();
    var hse = it();
    NI.exports = hse.unescape;
  });
  var MI = m(function (V_e, CI) {
    "use strict";

    var yse = RI();
    CI.exports = yse;
  });
  var DI = m(function (Y_e, BI) {
    "use strict";

    var gse = Ne(),
      bse = or();
    BI.exports = function (e, t) {
      gse(t) && "cause" in t && bse(e, "cause", t.cause);
    };
  });
  var UI = m(function (X_e, II) {
    "use strict";

    var xse = or(),
      Sse = Jf(),
      Ese = Vg(),
      PI = Error.captureStackTrace;
    II.exports = function (e, t, i, a) {
      Ese && (PI ? PI(e, t) : xse(e, "stack", Sse(i, a)));
    };
  });
  var LI = m(function () {
    "use strict";

    var Tse = z(),
      qse = qn(),
      Ase = da(),
      _p = hi(),
      _se = $c(),
      zI = _n(),
      M0 = or(),
      B0 = Hr(),
      Ose = DI(),
      wse = UI(),
      Nse = Cr(),
      Rse = Ks(),
      Cse = Re(),
      Mse = Cse("toStringTag"),
      Op = Error,
      Bse = [].push,
      _Vo = function Vo(t, i) {
        var a = qse(D0, this),
          u;
        _p ? u = _p(new Op(), a ? Ase(this) : D0) : (u = a ? this : zI(D0), M0(u, Mse, "Error")), i !== void 0 && M0(u, "message", Rse(i)), wse(u, _Vo, u.stack, 1), arguments.length > 2 && Ose(u, arguments[2]);
        var l = [];
        return Nse(t, Bse, {
          that: l
        }), M0(u, "errors", l), u;
      };
    _p ? _p(_Vo, Op) : _se(_Vo, Op, {
      name: !0
    });
    var D0 = _Vo.prototype = zI(Op.prototype, {
      constructor: B0(1, _Vo),
      message: B0(1, ""),
      name: B0(1, "AggregateError")
    });
    Tse({
      global: !0,
      constructor: !0,
      arity: 2
    }, {
      AggregateError: _Vo
    });
  });
  var jI = m(function () {
    "use strict";

    LI();
  });
  var P0 = m(function (J_e, FI) {
    "use strict";

    var Dse = Kr();
    FI.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(Dse);
  });
  var K0 = m(function ($_e, ZI) {
    "use strict";

    var sr = J(),
      Pse = ya(),
      Ise = An(),
      HI = xe(),
      Use = Ye(),
      QI = Q(),
      GI = mh(),
      zse = yi(),
      KI = ss(),
      Lse = Hg(),
      jse = P0(),
      Fse = Os(),
      F0 = sr.setImmediate,
      H0 = sr.clearImmediate,
      Hse = sr.process,
      I0 = sr.Dispatch,
      Gse = sr.Function,
      VI = sr.MessageChannel,
      Kse = sr.String,
      U0 = 0,
      fl = {},
      YI = "onreadystatechange",
      pl,
      Sa,
      z0,
      L0;
    QI(function () {
      pl = sr.location;
    });
    var G0 = function G0(e) {
        if (Use(fl, e)) {
          var t = fl[e];
          delete fl[e], t();
        }
      },
      j0 = function j0(e) {
        return function () {
          G0(e);
        };
      },
      XI = function XI(e) {
        G0(e.data);
      },
      kI = function kI(e) {
        sr.postMessage(Kse(e), pl.protocol + "//" + pl.host);
      };
    (!F0 || !H0) && (F0 = function F0(t) {
      Lse(arguments.length, 1);
      var i = HI(t) ? t : Gse(t),
        a = zse(arguments, 1);
      return fl[++U0] = function () {
        Pse(i, void 0, a);
      }, Sa(U0), U0;
    }, H0 = function H0(t) {
      delete fl[t];
    }, Fse ? Sa = function Sa(e) {
      Hse.nextTick(j0(e));
    } : I0 && I0.now ? Sa = function Sa(e) {
      I0.now(j0(e));
    } : VI && !jse ? (z0 = new VI(), L0 = z0.port2, z0.port1.onmessage = XI, Sa = Ise(L0.postMessage, L0)) : sr.addEventListener && HI(sr.postMessage) && !sr.importScripts && pl && pl.protocol !== "file:" && !QI(kI) ? (Sa = kI, sr.addEventListener("message", XI, !1)) : YI in KI("script") ? Sa = function Sa(e) {
      GI.appendChild(KI("script"))[YI] = function () {
        GI.removeChild(this), G0(e);
      };
    } : Sa = function Sa(e) {
      setTimeout(j0(e), 0);
    });
    ZI.exports = {
      set: F0,
      clear: H0
    };
  });
  var $I = m(function (eOe, JI) {
    "use strict";

    var WI = J(),
      Vse = we(),
      Yse = Object.getOwnPropertyDescriptor;
    JI.exports = function (e) {
      if (!Vse) return WI[e];
      var t = Yse(WI, e);
      return t && t.value;
    };
  });
  var V0 = m(function (tOe, t8) {
    "use strict";

    var e8 = function e8() {
      this.head = null, this.tail = null;
    };
    e8.prototype = {
      add: function add(e) {
        var t = {
            item: e,
            next: null
          },
          i = this.tail;
        i ? i.next = t : this.head = t, this.tail = t;
      },
      get: function get() {
        var e = this.head;
        if (e) {
          var t = this.head = e.next;
          return t === null && (this.tail = null), e.item;
        }
      }
    };
    t8.exports = e8;
  });
  var n8 = m(function (rOe, r8) {
    "use strict";

    var Xse = Kr();
    r8.exports = /ipad|iphone|ipod/i.test(Xse) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u";
  });
  var a8 = m(function (nOe, i8) {
    "use strict";

    var kse = Kr();
    i8.exports = /web0s(?!.*chrome)/i.test(kse);
  });
  var p8 = m(function (iOe, f8) {
    "use strict";

    var Xo = J(),
      Qse = $I(),
      o8 = An(),
      Y0 = K0().set,
      Zse = V0(),
      Wse = P0(),
      Jse = n8(),
      $se = a8(),
      X0 = Os(),
      u8 = Xo.MutationObserver || Xo.WebKitMutationObserver,
      s8 = Xo.document,
      l8 = Xo.process,
      wp = Xo.Promise,
      Z0 = Qse("queueMicrotask"),
      Yo,
      k0,
      Q0,
      Np,
      c8;
    Z0 || (dl = new Zse(), vl = function vl() {
      var e, t;
      for (X0 && (e = l8.domain) && e.exit(); t = dl.get();) try {
        t();
      } catch (i) {
        throw dl.head && Yo(), i;
      }
      e && e.enter();
    }, !Wse && !X0 && !$se && u8 && s8 ? (k0 = !0, Q0 = s8.createTextNode(""), new u8(vl).observe(Q0, {
      characterData: !0
    }), Yo = function Yo() {
      Q0.data = k0 = !k0;
    }) : !Jse && wp && wp.resolve ? (Np = wp.resolve(void 0), Np.constructor = wp, c8 = o8(Np.then, Np), Yo = function Yo() {
      c8(vl);
    }) : X0 ? Yo = function Yo() {
      l8.nextTick(vl);
    } : (Y0 = o8(Y0, Xo), Yo = function Yo() {
      Y0(vl);
    }), Z0 = function Z0(e) {
      dl.head || Yo(), dl.add(e);
    });
    var dl, vl;
    f8.exports = Z0;
  });
  var v8 = m(function (aOe, d8) {
    "use strict";

    d8.exports = function (e, t) {
      try {
        arguments.length === 1 ? console.error(e) : console.error(e, t);
      } catch (_unused44) {}
    };
  });
  var Ea = m(function (oOe, m8) {
    "use strict";

    m8.exports = function (e) {
      try {
        return {
          error: !1,
          value: e()
        };
      } catch (t) {
        return {
          error: !0,
          value: t
        };
      }
    };
  });
  var Ta = m(function (uOe, h8) {
    "use strict";

    var ele = J();
    h8.exports = ele.Promise;
  });
  var ko = m(function (sOe, x8) {
    "use strict";

    var tle = J(),
      ml = Ta(),
      rle = xe(),
      nle = vs(),
      ile = Yc(),
      ale = Re(),
      y8 = xf(),
      ole = We(),
      W0 = us(),
      g8 = ml && ml.prototype,
      ule = ale("species"),
      J0 = !1,
      b8 = rle(tle.PromiseRejectionEvent),
      sle = nle("Promise", function () {
        var e = ile(ml),
          t = e !== String(ml);
        if (!t && W0 === 66 || ole && !(g8.catch && g8.finally)) return !0;
        if (!W0 || W0 < 51 || !/native code/.test(e)) {
          var i = new ml(function (l) {
              l(1);
            }),
            a = function a(l) {
              l(function () {}, function () {});
            },
            u = i.constructor = {};
          if (u[ule] = a, J0 = i.then(function () {}) instanceof a, !J0) return !0;
        }
        return !t && (y8 === "BROWSER" || y8 === "DENO") && !b8;
      });
    x8.exports = {
      CONSTRUCTOR: sle,
      REJECTION_EVENT: b8,
      SUBCLASSING: J0
    };
  });
  var Jr = m(function (lOe, E8) {
    "use strict";

    var S8 = pt(),
      lle = TypeError,
      cle = function cle(e) {
        var t, i;
        this.promise = new e(function (a, u) {
          if (t !== void 0 || i !== void 0) throw new lle("Bad Promise constructor");
          t = a, i = u;
        }), this.resolve = S8(t), this.reject = S8(i);
      };
    E8.exports.f = function (e) {
      return new cle(e);
    };
  });
  var F8 = m(function () {
    "use strict";

    var fle = z(),
      ple = We(),
      Bp = Os(),
      qi = J(),
      Jo = me(),
      T8 = Rt(),
      q8 = hi(),
      dle = gi(),
      vle = As(),
      mle = pt(),
      Mp = xe(),
      hle = Ne(),
      yle = Nn(),
      gle = Hs(),
      N8 = K0().set,
      nb = p8(),
      ble = v8(),
      xle = Ea(),
      Sle = V0(),
      R8 = jt(),
      Dp = Ta(),
      ib = ko(),
      C8 = Jr(),
      Pp = "Promise",
      M8 = ib.CONSTRUCTOR,
      Ele = ib.REJECTION_EVENT,
      Tle = ib.SUBCLASSING,
      $0 = R8.getterFor(Pp),
      qle = R8.set,
      Qo = Dp && Dp.prototype,
      qa = Dp,
      Rp = Qo,
      B8 = qi.TypeError,
      eb = qi.document,
      ab = qi.process,
      tb = C8.f,
      Ale = tb,
      _le = !!(eb && eb.createEvent && qi.dispatchEvent),
      D8 = "unhandledrejection",
      Ole = "rejectionhandled",
      A8 = 0,
      P8 = 1,
      wle = 2,
      ob = 1,
      I8 = 2,
      Cp,
      _8,
      Nle,
      O8,
      U8 = function U8(e) {
        var t;
        return hle(e) && Mp(t = e.then) ? t : !1;
      },
      z8 = function z8(e, t) {
        var i = t.value,
          a = t.state === P8,
          u = a ? e.ok : e.fail,
          l = e.resolve,
          f = e.reject,
          d = e.domain,
          v,
          h,
          y;
        try {
          u ? (a || (t.rejection === I8 && Cle(t), t.rejection = ob), u === !0 ? v = i : (d && d.enter(), v = u(i), d && (d.exit(), y = !0)), v === e.promise ? f(new B8("Promise-chain cycle")) : (h = U8(v)) ? Jo(h, v, l, f) : l(v)) : f(i);
        } catch (b) {
          d && !y && d.exit(), f(b);
        }
      },
      L8 = function L8(e, t) {
        e.notified || (e.notified = !0, nb(function () {
          for (var i = e.reactions, a; a = i.get();) z8(a, e);
          e.notified = !1, t && !e.rejection && Rle(e);
        }));
      },
      j8 = function j8(e, t, i) {
        var a, u;
        _le ? (a = eb.createEvent("Event"), a.promise = t, a.reason = i, a.initEvent(e, !1, !0), qi.dispatchEvent(a)) : a = {
          promise: t,
          reason: i
        }, !Ele && (u = qi["on" + e]) ? u(a) : e === D8 && ble("Unhandled promise rejection", i);
      },
      Rle = function Rle(e) {
        Jo(N8, qi, function () {
          var t = e.facade,
            i = e.value,
            a = w8(e),
            u;
          if (a && (u = xle(function () {
            Bp ? ab.emit("unhandledRejection", i, t) : j8(D8, t, i);
          }), e.rejection = Bp || w8(e) ? I8 : ob, u.error)) throw u.value;
        });
      },
      w8 = function w8(e) {
        return e.rejection !== ob && !e.parent;
      },
      Cle = function Cle(e) {
        Jo(N8, qi, function () {
          var t = e.facade;
          Bp ? ab.emit("rejectionHandled", t) : j8(Ole, t, e.value);
        });
      },
      Zo = function Zo(e, t, i) {
        return function (a) {
          e(t, a, i);
        };
      },
      Wo = function Wo(e, t, i) {
        e.done || (e.done = !0, i && (e = i), e.value = t, e.state = wle, L8(e, !0));
      },
      _rb = function rb(e, t, i) {
        if (!e.done) {
          e.done = !0, i && (e = i);
          try {
            if (e.facade === t) throw new B8("Promise can't be resolved itself");
            var a = U8(t);
            a ? nb(function () {
              var u = {
                done: !1
              };
              try {
                Jo(a, t, Zo(_rb, u, e), Zo(Wo, u, e));
              } catch (l) {
                Wo(u, l, e);
              }
            }) : (e.value = t, e.state = P8, L8(e, !1));
          } catch (u) {
            Wo({
              done: !1
            }, u, e);
          }
        }
      };
    if (M8 && (qa = function qa(t) {
      yle(this, Rp), mle(t), Jo(Cp, this);
      var i = $0(this);
      try {
        t(Zo(_rb, i), Zo(Wo, i));
      } catch (a) {
        Wo(i, a);
      }
    }, Rp = qa.prototype, Cp = function Cp(t) {
      qle(this, {
        type: Pp,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new Sle(),
        rejection: !1,
        state: A8,
        value: null
      });
    }, Cp.prototype = T8(Rp, "then", function (t, i) {
      var a = $0(this),
        u = tb(gle(this, qa));
      return a.parent = !0, u.ok = Mp(t) ? t : !0, u.fail = Mp(i) && i, u.domain = Bp ? ab.domain : void 0, a.state === A8 ? a.reactions.add(u) : nb(function () {
        z8(u, a);
      }), u.promise;
    }), _8 = function _8() {
      var e = new Cp(),
        t = $0(e);
      this.promise = e, this.resolve = Zo(_rb, t), this.reject = Zo(Wo, t);
    }, C8.f = tb = function tb(e) {
      return e === qa || e === Nle ? new _8(e) : Ale(e);
    }, !ple && Mp(Dp) && Qo !== Object.prototype)) {
      O8 = Qo.then, Tle || T8(Qo, "then", function (t, i) {
        var a = this;
        return new qa(function (u, l) {
          Jo(O8, a, u, l);
        }).then(t, i);
      }, {
        unsafe: !0
      });
      try {
        delete Qo.constructor;
      } catch (_unused45) {}
      q8 && q8(Qo, Rp);
    }
    fle({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: M8
    }, {
      Promise: qa
    });
    dle(qa, Pp, !1, !0);
    vle(Pp);
  });
  var hl = m(function (pOe, H8) {
    "use strict";

    var Mle = Ta(),
      Ble = Bs(),
      Dle = ko().CONSTRUCTOR;
    H8.exports = Dle || !Ble(function (e) {
      Mle.all(e).then(void 0, function () {});
    });
  });
  var G8 = m(function () {
    "use strict";

    var Ple = z(),
      Ile = me(),
      Ule = pt(),
      zle = Jr(),
      Lle = Ea(),
      jle = Cr(),
      Fle = hl();
    Ple({
      target: "Promise",
      stat: !0,
      forced: Fle
    }, {
      all: function all(t) {
        var i = this,
          a = zle.f(i),
          u = a.resolve,
          l = a.reject,
          f = Lle(function () {
            var d = Ule(i.resolve),
              v = [],
              h = 0,
              y = 1;
            jle(t, function (b) {
              var S = h++,
                T = !1;
              y++, Ile(d, i, b).then(function (R) {
                T || (T = !0, v[S] = R, --y || u(v));
              }, l);
            }), --y || u(v);
          });
        return f.error && l(f.value), a.promise;
      }
    });
  });
  var V8 = m(function () {
    "use strict";

    var Hle = z(),
      Gle = We(),
      Kle = ko().CONSTRUCTOR,
      sb = Ta(),
      Vle = wt(),
      Yle = xe(),
      Xle = Rt(),
      K8 = sb && sb.prototype;
    Hle({
      target: "Promise",
      proto: !0,
      forced: Kle,
      real: !0
    }, {
      catch: function _catch(e) {
        return this.then(void 0, e);
      }
    });
    !Gle && Yle(sb) && (ub = Vle("Promise").prototype.catch, K8.catch !== ub && Xle(K8, "catch", ub, {
      unsafe: !0
    }));
    var ub;
  });
  var Y8 = m(function () {
    "use strict";

    var kle = z(),
      Qle = me(),
      Zle = pt(),
      Wle = Jr(),
      Jle = Ea(),
      $le = Cr(),
      ece = hl();
    kle({
      target: "Promise",
      stat: !0,
      forced: ece
    }, {
      race: function race(t) {
        var i = this,
          a = Wle.f(i),
          u = a.reject,
          l = Jle(function () {
            var f = Zle(i.resolve);
            $le(t, function (d) {
              Qle(f, i, d).then(a.resolve, u);
            });
          });
        return l.error && u(l.value), a.promise;
      }
    });
  });
  var X8 = m(function () {
    "use strict";

    var tce = z(),
      rce = Jr(),
      nce = ko().CONSTRUCTOR;
    tce({
      target: "Promise",
      stat: !0,
      forced: nce
    }, {
      reject: function reject(t) {
        var i = rce.f(this),
          a = i.reject;
        return a(t), i.promise;
      }
    });
  });
  var lb = m(function (SOe, k8) {
    "use strict";

    var ice = De(),
      ace = Ne(),
      oce = Jr();
    k8.exports = function (e, t) {
      if (ice(e), ace(t) && t.constructor === e) return t;
      var i = oce.f(e),
        a = i.resolve;
      return a(t), i.promise;
    };
  });
  var W8 = m(function () {
    "use strict";

    var uce = z(),
      sce = wt(),
      Q8 = We(),
      lce = Ta(),
      Z8 = ko().CONSTRUCTOR,
      cce = lb(),
      fce = sce("Promise"),
      pce = Q8 && !Z8;
    uce({
      target: "Promise",
      stat: !0,
      forced: Q8 || Z8
    }, {
      resolve: function resolve(t) {
        return cce(pce && this === fce ? lce : this, t);
      }
    });
  });
  var J8 = m(function () {
    "use strict";

    F8();
    G8();
    V8();
    Y8();
    X8();
    W8();
  });
  var $8 = m(function () {
    "use strict";

    var dce = z(),
      vce = me(),
      mce = pt(),
      hce = Jr(),
      yce = Ea(),
      gce = Cr(),
      bce = hl();
    dce({
      target: "Promise",
      stat: !0,
      forced: bce
    }, {
      allSettled: function allSettled(t) {
        var i = this,
          a = hce.f(i),
          u = a.resolve,
          l = a.reject,
          f = yce(function () {
            var d = mce(i.resolve),
              v = [],
              h = 0,
              y = 1;
            gce(t, function (b) {
              var S = h++,
                T = !1;
              y++, vce(d, i, b).then(function (R) {
                T || (T = !0, v[S] = {
                  status: "fulfilled",
                  value: R
                }, --y || u(v));
              }, function (R) {
                T || (T = !0, v[S] = {
                  status: "rejected",
                  reason: R
                }, --y || u(v));
              });
            }), --y || u(v);
          });
        return f.error && l(f.value), a.promise;
      }
    });
  });
  var t3 = m(function () {
    "use strict";

    var xce = z(),
      Sce = me(),
      Ece = pt(),
      Tce = wt(),
      qce = Jr(),
      Ace = Ea(),
      _ce = Cr(),
      Oce = hl(),
      e3 = "No one promise resolved";
    xce({
      target: "Promise",
      stat: !0,
      forced: Oce
    }, {
      any: function any(t) {
        var i = this,
          a = Tce("AggregateError"),
          u = qce.f(i),
          l = u.resolve,
          f = u.reject,
          d = Ace(function () {
            var v = Ece(i.resolve),
              h = [],
              y = 0,
              b = 1,
              S = !1;
            _ce(t, function (T) {
              var R = y++,
                A = !1;
              b++, Sce(v, i, T).then(function (_) {
                A || S || (S = !0, l(_));
              }, function (_) {
                A || S || (A = !0, h[R] = _, --b || f(new a(h, e3)));
              });
            }), --b || f(new a(h, e3));
          });
        return d.error && f(d.value), u.promise;
      }
    });
  });
  var i3 = m(function () {
    "use strict";

    var wce = z(),
      Nce = J(),
      Rce = ya(),
      Cce = yi(),
      Mce = Jr(),
      Bce = pt(),
      n3 = Ea(),
      cb = Nce.Promise,
      r3 = !1,
      Dce = !cb || !cb.try || n3(function () {
        cb.try(function (e) {
          r3 = e === 8;
        }, 8);
      }).error || !r3;
    wce({
      target: "Promise",
      stat: !0,
      forced: Dce
    }, {
      try: function _try(e) {
        var t = arguments.length > 1 ? Cce(arguments, 1) : [],
          i = Mce.f(this),
          a = n3(function () {
            return Rce(Bce(e), void 0, t);
          });
        return (a.error ? i.reject : i.resolve)(a.value), i.promise;
      }
    });
  });
  var a3 = m(function () {
    "use strict";

    var Pce = z(),
      Ice = Jr();
    Pce({
      target: "Promise",
      stat: !0
    }, {
      withResolvers: function withResolvers() {
        var t = Ice.f(this);
        return {
          promise: t.promise,
          resolve: t.resolve,
          reject: t.reject
        };
      }
    });
  });
  var l3 = m(function () {
    "use strict";

    var Uce = z(),
      zce = We(),
      Ip = Ta(),
      Lce = Q(),
      u3 = wt(),
      s3 = xe(),
      jce = Hs(),
      o3 = lb(),
      Fce = Rt(),
      pb = Ip && Ip.prototype,
      Hce = !!Ip && Lce(function () {
        pb.finally.call({
          then: function then() {}
        }, function () {});
      });
    Uce({
      target: "Promise",
      proto: !0,
      real: !0,
      forced: Hce
    }, {
      finally: function _finally(e) {
        var t = jce(this, u3("Promise")),
          i = s3(e);
        return this.then(i ? function (a) {
          return o3(t, e()).then(function () {
            return a;
          });
        } : e, i ? function (a) {
          return o3(t, e()).then(function () {
            throw a;
          });
        } : e);
      }
    });
    !zce && s3(Ip) && (fb = u3("Promise").prototype.finally, pb.finally !== fb && Fce(pb, "finally", fb, {
      unsafe: !0
    }));
    var fb;
  });
  var f3 = m(function (IOe, c3) {
    "use strict";

    jI();
    Dn();
    Qr();
    J8();
    $8();
    t3();
    i3();
    a3();
    l3();
    ma();
    var Gce = it();
    c3.exports = Gce.Promise;
  });
  var d3 = m(function (UOe, p3) {
    "use strict";

    p3.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  });
  var h3 = m(function (zOe, m3) {
    "use strict";

    var Kce = ss(),
      db = Kce("span").classList,
      v3 = db && db.constructor && db.constructor.prototype;
    m3.exports = v3 === Object.prototype ? void 0 : v3;
  });
  var $o = m(function () {
    "use strict";

    var y3 = J(),
      b3 = d3(),
      Vce = h3(),
      yl = Dn(),
      g3 = or(),
      Yce = gi(),
      Xce = Re(),
      vb = Xce("iterator"),
      mb = yl.values,
      x3 = function x3(e, t) {
        if (e) {
          if (e[vb] !== mb) try {
            g3(e, vb, mb);
          } catch (_unused46) {
            e[vb] = mb;
          }
          if (Yce(e, t, !0), b3[t]) {
            for (var i in yl) if (e[i] !== yl[i]) try {
              g3(e, i, yl[i]);
            } catch (_unused47) {
              e[i] = yl[i];
            }
          }
        }
      };
    for (Up in b3) x3(y3[Up] && y3[Up].prototype, Up);
    var Up;
    x3(Vce, "DOMTokenList");
  });
  var E3 = m(function (FOe, S3) {
    "use strict";

    var kce = f3();
    $o();
    S3.exports = kce;
  });
  var Ai = m(function (HOe, T3) {
    "use strict";

    var Qce = gr().has;
    T3.exports = function (e) {
      return Qce(e), e;
    };
  });
  var zp = m(function (GOe, A3) {
    "use strict";

    var q3 = gr(),
      Zce = ga(),
      Wce = q3.Set,
      Jce = q3.add;
    A3.exports = function (e) {
      var t = new Wce();
      return Zce(e, function (i) {
        Jce(t, i);
      }), t;
    };
  });
  var eu = m(function (KOe, _3) {
    "use strict";

    var $ce = Ss(),
      efe = gr();
    _3.exports = $ce(efe.proto, "size", "get") || function (e) {
      return e.size;
    };
  });
  var w3 = m(function (VOe, O3) {
    "use strict";

    O3.exports = function (e) {
      return {
        iterator: e,
        next: e.next,
        done: !1
      };
    };
  });
  var _i = m(function (YOe, D3) {
    "use strict";

    var N3 = pt(),
      M3 = De(),
      R3 = me(),
      tfe = Je(),
      rfe = w3(),
      C3 = "Invalid size",
      nfe = RangeError,
      ife = TypeError,
      afe = Math.max,
      B3 = function B3(e, t) {
        this.set = e, this.size = afe(t, 0), this.has = N3(e.has), this.keys = N3(e.keys);
      };
    B3.prototype = {
      getIterator: function getIterator() {
        return rfe(M3(R3(this.keys, this.set)));
      },
      includes: function includes(e) {
        return R3(this.has, this.set, e);
      }
    };
    D3.exports = function (e) {
      M3(e);
      var t = +e.size;
      if (t !== t) throw new ife(C3);
      var i = tfe(t);
      if (i < 0) throw new nfe(C3);
      return new B3(e, i);
    };
  });
  var z3 = m(function (XOe, U3) {
    "use strict";

    var ofe = Ai(),
      I3 = gr(),
      ufe = zp(),
      sfe = eu(),
      lfe = _i(),
      cfe = ga(),
      ffe = Ti(),
      pfe = I3.has,
      P3 = I3.remove;
    U3.exports = function (t) {
      var i = ofe(this),
        a = lfe(t),
        u = ufe(i);
      return sfe(i) <= a.size ? cfe(i, function (l) {
        a.includes(l) && P3(u, l);
      }) : ffe(a.getIterator(), function (l) {
        pfe(i, l) && P3(u, l);
      }), u;
    };
  });
  var Oi = m(function (kOe, j3) {
    "use strict";

    var dfe = wt(),
      L3 = function L3(e) {
        return {
          size: e,
          has: function has() {
            return !1;
          },
          keys: function keys() {
            return {
              next: function next() {
                return {
                  done: !0
                };
              }
            };
          }
        };
      };
    j3.exports = function (e) {
      var t = dfe("Set");
      try {
        new t()[e](L3(0));
        try {
          return new t()[e](L3(-1)), !1;
        } catch (_unused48) {
          return !0;
        }
      } catch (_unused49) {
        return !1;
      }
    };
  });
  var F3 = m(function () {
    "use strict";

    var vfe = z(),
      mfe = z3(),
      hfe = Oi();
    vfe({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !hfe("difference")
    }, {
      difference: mfe
    });
  });
  var K3 = m(function (WOe, G3) {
    "use strict";

    var yfe = Ai(),
      hb = gr(),
      gfe = eu(),
      bfe = _i(),
      xfe = ga(),
      Sfe = Ti(),
      Efe = hb.Set,
      H3 = hb.add,
      Tfe = hb.has;
    G3.exports = function (t) {
      var i = yfe(this),
        a = bfe(t),
        u = new Efe();
      return gfe(i) > a.size ? Sfe(a.getIterator(), function (l) {
        Tfe(i, l) && H3(u, l);
      }) : xfe(i, function (l) {
        a.includes(l) && H3(u, l);
      }), u;
    };
  });
  var V3 = m(function () {
    "use strict";

    var qfe = z(),
      Afe = Q(),
      _fe = K3(),
      Ofe = Oi(),
      wfe = !Ofe("intersection") || Afe(function () {
        return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
      });
    qfe({
      target: "Set",
      proto: !0,
      real: !0,
      forced: wfe
    }, {
      intersection: _fe
    });
  });
  var X3 = m(function (e2e, Y3) {
    "use strict";

    var Nfe = Ai(),
      Rfe = gr().has,
      Cfe = eu(),
      Mfe = _i(),
      Bfe = ga(),
      Dfe = Ti(),
      Pfe = Cs();
    Y3.exports = function (t) {
      var i = Nfe(this),
        a = Mfe(t);
      if (Cfe(i) <= a.size) return Bfe(i, function (l) {
        if (a.includes(l)) return !1;
      }, !0) !== !1;
      var u = a.getIterator();
      return Dfe(u, function (l) {
        if (Rfe(i, l)) return Pfe(u, "normal", !1);
      }) !== !1;
    };
  });
  var k3 = m(function () {
    "use strict";

    var Ife = z(),
      Ufe = X3(),
      zfe = Oi();
    Ife({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !zfe("isDisjointFrom")
    }, {
      isDisjointFrom: Ufe
    });
  });
  var Z3 = m(function (n2e, Q3) {
    "use strict";

    var Lfe = Ai(),
      jfe = eu(),
      Ffe = ga(),
      Hfe = _i();
    Q3.exports = function (t) {
      var i = Lfe(this),
        a = Hfe(t);
      return jfe(i) > a.size ? !1 : Ffe(i, function (u) {
        if (!a.includes(u)) return !1;
      }, !0) !== !1;
    };
  });
  var W3 = m(function () {
    "use strict";

    var Gfe = z(),
      Kfe = Z3(),
      Vfe = Oi();
    Gfe({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !Vfe("isSubsetOf")
    }, {
      isSubsetOf: Kfe
    });
  });
  var $3 = m(function (o2e, J3) {
    "use strict";

    var Yfe = Ai(),
      Xfe = gr().has,
      kfe = eu(),
      Qfe = _i(),
      Zfe = Ti(),
      Wfe = Cs();
    J3.exports = function (t) {
      var i = Yfe(this),
        a = Qfe(t);
      if (kfe(i) < a.size) return !1;
      var u = a.getIterator();
      return Zfe(u, function (l) {
        if (!Xfe(i, l)) return Wfe(u, "normal", !1);
      }) !== !1;
    };
  });
  var e4 = m(function () {
    "use strict";

    var Jfe = z(),
      $fe = $3(),
      epe = Oi();
    Jfe({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !epe("isSupersetOf")
    }, {
      isSupersetOf: $fe
    });
  });
  var r4 = m(function (l2e, t4) {
    "use strict";

    var tpe = Ai(),
      yb = gr(),
      rpe = zp(),
      npe = _i(),
      ipe = Ti(),
      ape = yb.add,
      ope = yb.has,
      upe = yb.remove;
    t4.exports = function (t) {
      var i = tpe(this),
        a = npe(t).getIterator(),
        u = rpe(i);
      return ipe(a, function (l) {
        ope(i, l) ? upe(u, l) : ape(u, l);
      }), u;
    };
  });
  var n4 = m(function () {
    "use strict";

    var spe = z(),
      lpe = r4(),
      cpe = Oi();
    spe({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !cpe("symmetricDifference")
    }, {
      symmetricDifference: lpe
    });
  });
  var a4 = m(function (p2e, i4) {
    "use strict";

    var fpe = Ai(),
      ppe = gr().add,
      dpe = zp(),
      vpe = _i(),
      mpe = Ti();
    i4.exports = function (t) {
      var i = fpe(this),
        a = vpe(t).getIterator(),
        u = dpe(i);
      return mpe(a, function (l) {
        ppe(u, l);
      }), u;
    };
  });
  var o4 = m(function () {
    "use strict";

    var hpe = z(),
      ype = a4(),
      gpe = Oi();
    hpe({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !gpe("union")
    }, {
      union: ype
    });
  });
  var s4 = m(function (m2e, u4) {
    "use strict";

    Dn();
    Qr();
    Eg();
    F3();
    V3();
    k3();
    W3();
    e4();
    n4();
    o4();
    ma();
    var bpe = it();
    u4.exports = bpe.Set;
  });
  var c4 = m(function (h2e, l4) {
    "use strict";

    var xpe = s4();
    $o();
    l4.exports = xpe;
  });
  var d4 = m(function () {
    "use strict";

    var Spe = z(),
      Epe = X(),
      Tpe = pt(),
      qpe = Be(),
      Ape = Cr(),
      Lp = Gg(),
      f4 = We(),
      _pe = Q(),
      p4 = Lp.Map,
      Ope = Lp.has,
      wpe = Lp.get,
      Npe = Lp.set,
      Rpe = Epe([].push),
      Cpe = f4 || _pe(function () {
        return p4.groupBy("ab", function (e) {
          return e;
        }).get("a").length !== 1;
      });
    Spe({
      target: "Map",
      stat: !0,
      forced: f4 || Cpe
    }, {
      groupBy: function groupBy(t, i) {
        qpe(t), Tpe(i);
        var a = new p4(),
          u = 0;
        return Ape(t, function (l) {
          var f = i(l, u++);
          Ope(a, f) ? Rpe(wpe(a, f), l) : Npe(a, f, [l]);
        }), a;
      }
    });
  });
  var m4 = m(function (b2e, v4) {
    "use strict";

    Dn();
    Sg();
    d4();
    Qr();
    ma();
    var Mpe = it();
    v4.exports = Mpe.Map;
  });
  var y4 = m(function (x2e, h4) {
    "use strict";

    var Bpe = m4();
    $o();
    h4.exports = Bpe;
  });
  var xb = m(function (S2e, T4) {
    "use strict";

    var Dpe = X(),
      g4 = xs(),
      jp = Vs().getWeakData,
      Ppe = Nn(),
      Ipe = De(),
      Upe = Ot(),
      gb = Ne(),
      zpe = Cr(),
      x4 = Ct(),
      b4 = Ye(),
      S4 = jt(),
      Lpe = S4.set,
      jpe = S4.getterFor,
      Fpe = x4.find,
      Hpe = x4.findIndex,
      Gpe = Dpe([].splice),
      Kpe = 0,
      Fp = function Fp(e) {
        return e.frozen || (e.frozen = new E4());
      },
      E4 = function E4() {
        this.entries = [];
      },
      bb = function bb(e, t) {
        return Fpe(e.entries, function (i) {
          return i[0] === t;
        });
      };
    E4.prototype = {
      get: function get(e) {
        var t = bb(this, e);
        if (t) return t[1];
      },
      has: function has(e) {
        return !!bb(this, e);
      },
      set: function set(e, t) {
        var i = bb(this, e);
        i ? i[1] = t : this.entries.push([e, t]);
      },
      delete: function _delete(e) {
        var t = Hpe(this.entries, function (i) {
          return i[0] === e;
        });
        return ~t && Gpe(this.entries, t, 1), !!~t;
      }
    };
    T4.exports = {
      getConstructor: function getConstructor(e, t, i, a) {
        var u = e(function (v, h) {
            Ppe(v, l), Lpe(v, {
              type: t,
              id: Kpe++,
              frozen: null
            }), Upe(h) || zpe(h, v[a], {
              that: v,
              AS_ENTRIES: i
            });
          }),
          l = u.prototype,
          f = jpe(t),
          d = function d(v, h, y) {
            var b = f(v),
              S = jp(Ipe(h), !0);
            return S === !0 ? Fp(b).set(h, y) : S[b.id] = y, v;
          };
        return g4(l, {
          delete: function _delete(v) {
            var h = f(this);
            if (!gb(v)) return !1;
            var y = jp(v);
            return y === !0 ? Fp(h).delete(v) : y && b4(y, h.id) && delete y[h.id];
          },
          has: function has(h) {
            var y = f(this);
            if (!gb(h)) return !1;
            var b = jp(h);
            return b === !0 ? Fp(y).has(h) : b && b4(b, y.id);
          }
        }), g4(l, i ? {
          get: function get(h) {
            var y = f(this);
            if (gb(h)) {
              var b = jp(h);
              if (b === !0) return Fp(y).get(h);
              if (b) return b[y.id];
            }
          },
          set: function set(h, y) {
            return d(this, h, y);
          }
        } : {
          add: function add(h) {
            return d(this, h, !0);
          }
        }), u;
      }
    };
  });
  var C4 = m(function () {
    "use strict";

    var Vpe = dg(),
      q4 = J(),
      Vp = X(),
      A4 = xs(),
      Ype = Vs(),
      Xpe = Ys(),
      _4 = xb(),
      Hp = Ne(),
      Gp = jt().enforce,
      kpe = Q(),
      Qpe = ih(),
      xl = Object,
      Zpe = Array.isArray,
      Kp = xl.isExtensible,
      O4 = xl.isFrozen,
      Wpe = xl.isSealed,
      w4 = xl.freeze,
      Jpe = xl.seal,
      $pe = !q4.ActiveXObject && "ActiveXObject" in q4,
      gl,
      N4 = function N4(e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      R4 = Xpe("WeakMap", N4, _4),
      tu = R4.prototype,
      Yp = Vp(tu.set),
      ede = function ede() {
        return Vpe && kpe(function () {
          var e = w4([]);
          return Yp(new R4(), e, 1), !O4(e);
        });
      };
    Qpe && ($pe ? (gl = _4.getConstructor(N4, "WeakMap", !0), Ype.enable(), Sb = Vp(tu.delete), bl = Vp(tu.has), Eb = Vp(tu.get), A4(tu, {
      delete: function _delete(e) {
        if (Hp(e) && !Kp(e)) {
          var t = Gp(this);
          return t.frozen || (t.frozen = new gl()), Sb(this, e) || t.frozen.delete(e);
        }
        return Sb(this, e);
      },
      has: function has(t) {
        if (Hp(t) && !Kp(t)) {
          var i = Gp(this);
          return i.frozen || (i.frozen = new gl()), bl(this, t) || i.frozen.has(t);
        }
        return bl(this, t);
      },
      get: function get(t) {
        if (Hp(t) && !Kp(t)) {
          var i = Gp(this);
          return i.frozen || (i.frozen = new gl()), bl(this, t) ? Eb(this, t) : i.frozen.get(t);
        }
        return Eb(this, t);
      },
      set: function set(t, i) {
        if (Hp(t) && !Kp(t)) {
          var a = Gp(this);
          a.frozen || (a.frozen = new gl()), bl(this, t) ? Yp(this, t, i) : a.frozen.set(t, i);
        } else Yp(this, t, i);
        return this;
      }
    })) : ede() && A4(tu, {
      set: function set(t, i) {
        var a;
        return Zpe(t) && (O4(t) ? a = w4 : Wpe(t) && (a = Jpe)), Yp(this, t, i), a && a(t), this;
      }
    }));
    var Sb, bl, Eb;
  });
  var M4 = m(function () {
    "use strict";

    C4();
  });
  var D4 = m(function (_2e, B4) {
    "use strict";

    Dn();
    Qr();
    M4();
    var tde = it();
    B4.exports = tde.WeakMap;
  });
  var I4 = m(function (O2e, P4) {
    "use strict";

    var rde = D4();
    $o();
    P4.exports = rde;
  });
  var U4 = m(function () {
    "use strict";

    var nde = Ys(),
      ide = xb();
    nde("WeakSet", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, ide);
  });
  var z4 = m(function () {
    "use strict";

    U4();
  });
  var j4 = m(function (M2e, L4) {
    "use strict";

    Dn();
    Qr();
    z4();
    var ade = it();
    L4.exports = ade.WeakSet;
  });
  var H4 = m(function (B2e, F4) {
    "use strict";

    var ode = j4();
    $o();
    F4.exports = ode;
  });
  var X4 = m(function (D2e, Y4) {
    "use strict";

    var wi = {},
      V4 = Object.create,
      Tb = Object.defineProperties,
      Xp = Object.defineProperty,
      Xe = function Xe(e) {
        var t = arguments[1] === void 0 ? {} : arguments[1];
        return {
          value: e,
          configurable: !!t.c,
          writable: !!t.w,
          enumerable: !!t.e
        };
      },
      ude = function ude(e) {
        return e && e[et.toStringTag] === "Symbol";
      },
      Aa = void 0;
    try {
      G4 = Xp({}, "y", {
        get: function get() {
          return 1;
        }
      }), Aa = G4.y === 1;
    } catch (_unused50) {
      Aa = !1;
    }
    var G4,
      K4 = {},
      sde = function sde(e) {
        e = String(e);
        for (var t = "", i = 0; K4[e + t];) t = i += 1;
        K4[e + t] = 1;
        var a = "Symbol(" + e + t + ")";
        return Aa && Xp(Object.prototype, a, {
          get: void 0,
          set: function set(u) {
            Xp(this, a, Xe(u, {
              c: !0,
              w: !0
            }));
          },
          configurable: !0,
          enumerable: !1
        }), a;
      },
      qb = V4(null);
    function et(e) {
      if (this instanceof et) throw new TypeError("Symbol is not a constructor");
      e = e === void 0 ? "" : String(e);
      var t = sde(e);
      return Aa ? V4(qb, {
        __description__: Xe(e),
        __tag__: Xe(t)
      }) : t;
    }
    Tb(et, {
      for: Xe(function (e) {
        var t = String(e);
        if (wi[t]) return wi[t];
        var i = et(t);
        return wi[t] = i, i;
      }),
      keyFor: Xe(function (e) {
        if (Aa && !ude(e)) throw new TypeError("" + e + " is not a symbol");
        for (var t in wi) if (wi[t] === e) return Aa ? wi[t].__description__ : wi[t].substr(7, wi[t].length - 8);
      })
    });
    Tb(et, {
      hasInstance: Xe(et("hasInstance")),
      isConcatSpreadable: Xe(et("isConcatSpreadable")),
      iterator: Xe(et("iterator")),
      match: Xe(et("match")),
      replace: Xe(et("replace")),
      search: Xe(et("search")),
      species: Xe(et("species")),
      split: Xe(et("split")),
      toPrimitive: Xe(et("toPrimitive")),
      toStringTag: Xe(et("toStringTag")),
      unscopables: Xe(et("unscopables"))
    });
    Tb(qb, {
      constructor: Xe(et),
      toString: Xe(function () {
        return this.__tag__;
      }),
      valueOf: Xe(function () {
        return "Symbol(" + this.__description__ + ")";
      })
    });
    Aa && Xp(qb, et.toStringTag, Xe("Symbol", {
      c: !0
    }));
    Y4.exports = typeof Symbol == "function" ? Symbol : et;
  });
  var J4 = m(function (Jp) {
    "use strict";

    Jp.byteLength = mde;
    Jp.toByteArray = yde;
    Jp.fromByteArray = xde;
    var $r = [],
      br = [],
      vde = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" ? Uint8Array : Array,
      _b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (_a = 0, Z4 = _b.length; _a < Z4; ++_a) $r[_a] = _b[_a], br[_b.charCodeAt(_a)] = _a;
    var _a, Z4;
    br[45] = 62;
    br[95] = 63;
    function W4(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var i = e.indexOf("=");
      i === -1 && (i = t);
      var a = i === t ? 0 : 4 - i % 4;
      return [i, a];
    }
    function mde(e) {
      var t = W4(e),
        i = t[0],
        a = t[1];
      return (i + a) * 3 / 4 - a;
    }
    function hde(e, t, i) {
      return (t + i) * 3 / 4 - i;
    }
    function yde(e) {
      var t,
        i = W4(e),
        a = i[0],
        u = i[1],
        l = new vde(hde(e, a, u)),
        f = 0,
        d = u > 0 ? a - 4 : a,
        v;
      for (v = 0; v < d; v += 4) t = br[e.charCodeAt(v)] << 18 | br[e.charCodeAt(v + 1)] << 12 | br[e.charCodeAt(v + 2)] << 6 | br[e.charCodeAt(v + 3)], l[f++] = t >> 16 & 255, l[f++] = t >> 8 & 255, l[f++] = t & 255;
      return u === 2 && (t = br[e.charCodeAt(v)] << 2 | br[e.charCodeAt(v + 1)] >> 4, l[f++] = t & 255), u === 1 && (t = br[e.charCodeAt(v)] << 10 | br[e.charCodeAt(v + 1)] << 4 | br[e.charCodeAt(v + 2)] >> 2, l[f++] = t >> 8 & 255, l[f++] = t & 255), l;
    }
    function gde(e) {
      return $r[e >> 18 & 63] + $r[e >> 12 & 63] + $r[e >> 6 & 63] + $r[e & 63];
    }
    function bde(e, t, i) {
      for (var a, u = [], l = t; l < i; l += 3) a = (e[l] << 16 & 16711680) + (e[l + 1] << 8 & 65280) + (e[l + 2] & 255), u.push(gde(a));
      return u.join("");
    }
    function xde(e) {
      for (var t, i = e.length, a = i % 3, u = [], l = 16383, f = 0, d = i - a; f < d; f += l) u.push(bde(e, f, f + l > d ? d : f + l));
      return a === 1 ? (t = e[i - 1], u.push($r[t >> 2] + $r[t << 4 & 63] + "==")) : a === 2 && (t = (e[i - 2] << 8) + e[i - 1], u.push($r[t >> 10] + $r[t >> 4 & 63] + $r[t << 2 & 63] + "=")), u.join("");
    }
  });
  var $4 = m(function (Ob) {
    Ob.read = function (e, t, i, a, u) {
      var l,
        f,
        d = u * 8 - a - 1,
        v = (1 << d) - 1,
        h = v >> 1,
        y = -7,
        b = i ? u - 1 : 0,
        S = i ? -1 : 1,
        T = e[t + b];
      for (b += S, l = T & (1 << -y) - 1, T >>= -y, y += d; y > 0; l = l * 256 + e[t + b], b += S, y -= 8);
      for (f = l & (1 << -y) - 1, l >>= -y, y += a; y > 0; f = f * 256 + e[t + b], b += S, y -= 8);
      if (l === 0) l = 1 - h;else {
        if (l === v) return f ? NaN : (T ? -1 : 1) * (1 / 0);
        f = f + Math.pow(2, a), l = l - h;
      }
      return (T ? -1 : 1) * f * Math.pow(2, l - a);
    };
    Ob.write = function (e, t, i, a, u, l) {
      var f,
        d,
        v,
        h = l * 8 - u - 1,
        y = (1 << h) - 1,
        b = y >> 1,
        S = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        T = a ? 0 : l - 1,
        R = a ? 1 : -1,
        A = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (d = isNaN(t) ? 1 : 0, f = y) : (f = Math.floor(Math.log(t) / Math.LN2), t * (v = Math.pow(2, -f)) < 1 && (f--, v *= 2), f + b >= 1 ? t += S / v : t += S * Math.pow(2, 1 - b), t * v >= 2 && (f++, v /= 2), f + b >= y ? (d = 0, f = y) : f + b >= 1 ? (d = (t * v - 1) * Math.pow(2, u), f = f + b) : (d = t * Math.pow(2, b - 1) * Math.pow(2, u), f = 0)); u >= 8; e[i + T] = d & 255, T += R, d /= 256, u -= 8);
      for (f = f << u | d, h += u; h > 0; e[i + T] = f & 255, T += R, f /= 256, h -= 8);
      e[i + T - R] |= A * 128;
    };
  });
  var h6 = m(function (au) {
    "use strict";

    var wb = J4(),
      nu = $4(),
      e6 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    au.Buffer = D;
    au.SlowBuffer = _de;
    au.INSPECT_MAX_BYTES = 50;
    var $p = 2147483647;
    au.kMaxLength = $p;
    D.TYPED_ARRAY_SUPPORT = Sde();
    !D.TYPED_ARRAY_SUPPORT && (typeof console === "undefined" ? "undefined" : _typeof(console)) < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Sde() {
      try {
        var e = new Uint8Array(1),
          t = {
            foo: function foo() {
              return 42;
            }
          };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
      } catch (_unused51) {
        return !1;
      }
    }
    Object.defineProperty(D.prototype, "parent", {
      enumerable: !0,
      get: function get() {
        if (D.isBuffer(this)) return this.buffer;
      }
    });
    Object.defineProperty(D.prototype, "offset", {
      enumerable: !0,
      get: function get() {
        if (D.isBuffer(this)) return this.byteOffset;
      }
    });
    function zn(e) {
      if (e > $p) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      var t = new Uint8Array(e);
      return Object.setPrototypeOf(t, D.prototype), t;
    }
    function D(e, t, i) {
      if (typeof e == "number") {
        if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return Mb(e);
      }
      return i6(e, t, i);
    }
    D.poolSize = 8192;
    function i6(e, t, i) {
      if (typeof e == "string") return Tde(e, t);
      if (ArrayBuffer.isView(e)) return qde(e);
      if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
      if (en(e, ArrayBuffer) || e && en(e.buffer, ArrayBuffer) || (typeof SharedArrayBuffer === "undefined" ? "undefined" : _typeof(SharedArrayBuffer)) < "u" && (en(e, SharedArrayBuffer) || e && en(e.buffer, SharedArrayBuffer))) return Rb(e, t, i);
      if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
      var a = e.valueOf && e.valueOf();
      if (a != null && a !== e) return D.from(a, t, i);
      var u = Ade(e);
      if (u) return u;
      if ((typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return D.from(e[Symbol.toPrimitive]("string"), t, i);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
    }
    D.from = function (e, t, i) {
      return i6(e, t, i);
    };
    Object.setPrototypeOf(D.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(D, Uint8Array);
    function a6(e) {
      if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
      if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Ede(e, t, i) {
      return a6(e), e <= 0 ? zn(e) : t !== void 0 ? typeof i == "string" ? zn(e).fill(t, i) : zn(e).fill(t) : zn(e);
    }
    D.alloc = function (e, t, i) {
      return Ede(e, t, i);
    };
    function Mb(e) {
      return a6(e), zn(e < 0 ? 0 : Bb(e) | 0);
    }
    D.allocUnsafe = function (e) {
      return Mb(e);
    };
    D.allocUnsafeSlow = function (e) {
      return Mb(e);
    };
    function Tde(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !D.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
      var i = o6(e, t) | 0,
        a = zn(i),
        u = a.write(e, t);
      return u !== i && (a = a.slice(0, u)), a;
    }
    function Nb(e) {
      var t = e.length < 0 ? 0 : Bb(e.length) | 0,
        i = zn(t);
      for (var a = 0; a < t; a += 1) i[a] = e[a] & 255;
      return i;
    }
    function qde(e) {
      if (en(e, Uint8Array)) {
        var t = new Uint8Array(e);
        return Rb(t.buffer, t.byteOffset, t.byteLength);
      }
      return Nb(e);
    }
    function Rb(e, t, i) {
      if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (i || 0)) throw new RangeError('"length" is outside of buffer bounds');
      var a;
      return t === void 0 && i === void 0 ? a = new Uint8Array(e) : i === void 0 ? a = new Uint8Array(e, t) : a = new Uint8Array(e, t, i), Object.setPrototypeOf(a, D.prototype), a;
    }
    function Ade(e) {
      if (D.isBuffer(e)) {
        var t = Bb(e.length) | 0,
          i = zn(t);
        return i.length === 0 || e.copy(i, 0, 0, t), i;
      }
      if (e.length !== void 0) return typeof e.length != "number" || Pb(e.length) ? zn(0) : Nb(e);
      if (e.type === "Buffer" && Array.isArray(e.data)) return Nb(e.data);
    }
    function Bb(e) {
      if (e >= $p) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + $p.toString(16) + " bytes");
      return e | 0;
    }
    function _de(e) {
      return +e != e && (e = 0), D.alloc(+e);
    }
    D.isBuffer = function (t) {
      return t != null && t._isBuffer === !0 && t !== D.prototype;
    };
    D.compare = function (t, i) {
      if (en(t, Uint8Array) && (t = D.from(t, t.offset, t.byteLength)), en(i, Uint8Array) && (i = D.from(i, i.offset, i.byteLength)), !D.isBuffer(t) || !D.isBuffer(i)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === i) return 0;
      var a = t.length,
        u = i.length;
      for (var l = 0, f = Math.min(a, u); l < f; ++l) if (t[l] !== i[l]) {
        a = t[l], u = i[l];
        break;
      }
      return a < u ? -1 : u < a ? 1 : 0;
    };
    D.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    };
    D.concat = function (t, i) {
      if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0) return D.alloc(0);
      var a;
      if (i === void 0) for (i = 0, a = 0; a < t.length; ++a) i += t[a].length;
      var u = D.allocUnsafe(i),
        l = 0;
      for (a = 0; a < t.length; ++a) {
        var f = t[a];
        if (en(f, Uint8Array)) l + f.length > u.length ? (D.isBuffer(f) || (f = D.from(f)), f.copy(u, l)) : Uint8Array.prototype.set.call(u, f, l);else if (D.isBuffer(f)) f.copy(u, l);else throw new TypeError('"list" argument must be an Array of Buffers');
        l += f.length;
      }
      return u;
    };
    function o6(e, t) {
      if (D.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || en(e, ArrayBuffer)) return e.byteLength;
      if (typeof e != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + _typeof(e));
      var i = e.length,
        a = arguments.length > 2 && arguments[2] === !0;
      if (!a && i === 0) return 0;
      var u = !1;
      for (;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return i;
        case "utf8":
        case "utf-8":
          return Cb(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return i * 2;
        case "hex":
          return i >>> 1;
        case "base64":
          return m6(e).length;
        default:
          if (u) return a ? -1 : Cb(e).length;
          t = ("" + t).toLowerCase(), u = !0;
      }
    }
    D.byteLength = o6;
    function Ode(e, t, i) {
      var a = !1;
      if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, t >>>= 0, i <= t)) return "";
      for (e || (e = "utf8");;) switch (e) {
        case "hex":
          return Ude(this, t, i);
        case "utf8":
        case "utf-8":
          return s6(this, t, i);
        case "ascii":
          return Pde(this, t, i);
        case "latin1":
        case "binary":
          return Ide(this, t, i);
        case "base64":
          return Bde(this, t, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return zde(this, t, i);
        default:
          if (a) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), a = !0;
      }
    }
    D.prototype._isBuffer = !0;
    function Oa(e, t, i) {
      var a = e[t];
      e[t] = e[i], e[i] = a;
    }
    D.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var i = 0; i < t; i += 2) Oa(this, i, i + 1);
      return this;
    };
    D.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var i = 0; i < t; i += 4) Oa(this, i, i + 3), Oa(this, i + 1, i + 2);
      return this;
    };
    D.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var i = 0; i < t; i += 8) Oa(this, i, i + 7), Oa(this, i + 1, i + 6), Oa(this, i + 2, i + 5), Oa(this, i + 3, i + 4);
      return this;
    };
    D.prototype.toString = function () {
      var t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? s6(this, 0, t) : Ode.apply(this, arguments);
    };
    D.prototype.toLocaleString = D.prototype.toString;
    D.prototype.equals = function (t) {
      if (!D.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t ? !0 : D.compare(this, t) === 0;
    };
    D.prototype.inspect = function () {
      var t = "",
        i = au.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (t += " ... "), "<Buffer " + t + ">";
    };
    e6 && (D.prototype[e6] = D.prototype.inspect);
    D.prototype.compare = function (t, i, a, u, l) {
      if (en(t, Uint8Array) && (t = D.from(t, t.offset, t.byteLength)), !D.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(t));
      if (i === void 0 && (i = 0), a === void 0 && (a = t ? t.length : 0), u === void 0 && (u = 0), l === void 0 && (l = this.length), i < 0 || a > t.length || u < 0 || l > this.length) throw new RangeError("out of range index");
      if (u >= l && i >= a) return 0;
      if (u >= l) return -1;
      if (i >= a) return 1;
      if (i >>>= 0, a >>>= 0, u >>>= 0, l >>>= 0, this === t) return 0;
      var f = l - u,
        d = a - i,
        v = Math.min(f, d),
        h = this.slice(u, l),
        y = t.slice(i, a);
      for (var b = 0; b < v; ++b) if (h[b] !== y[b]) {
        f = h[b], d = y[b];
        break;
      }
      return f < d ? -1 : d < f ? 1 : 0;
    };
    function u6(e, t, i, a, u) {
      if (e.length === 0) return -1;
      if (typeof i == "string" ? (a = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, Pb(i) && (i = u ? 0 : e.length - 1), i < 0 && (i = e.length + i), i >= e.length) {
        if (u) return -1;
        i = e.length - 1;
      } else if (i < 0) if (u) i = 0;else return -1;
      if (typeof t == "string" && (t = D.from(t, a)), D.isBuffer(t)) return t.length === 0 ? -1 : t6(e, t, i, a, u);
      if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : t6(e, [t], i, a, u);
      throw new TypeError("val must be string, number or Buffer");
    }
    function t6(e, t, i, a, u) {
      var l = 1,
        f = e.length,
        d = t.length;
      if (a !== void 0 && (a = String(a).toLowerCase(), a === "ucs2" || a === "ucs-2" || a === "utf16le" || a === "utf-16le")) {
        if (e.length < 2 || t.length < 2) return -1;
        l = 2, f /= 2, d /= 2, i /= 2;
      }
      function v(y, b) {
        return l === 1 ? y[b] : y.readUInt16BE(b * l);
      }
      var h;
      if (u) {
        var y = -1;
        for (h = i; h < f; h++) if (v(e, h) === v(t, y === -1 ? 0 : h - y)) {
          if (y === -1 && (y = h), h - y + 1 === d) return y * l;
        } else y !== -1 && (h -= h - y), y = -1;
      } else for (i + d > f && (i = f - d), h = i; h >= 0; h--) {
        var _y2 = !0;
        for (var b = 0; b < d; b++) if (v(e, h + b) !== v(t, b)) {
          _y2 = !1;
          break;
        }
        if (_y2) return h;
      }
      return -1;
    }
    D.prototype.includes = function (t, i, a) {
      return this.indexOf(t, i, a) !== -1;
    };
    D.prototype.indexOf = function (t, i, a) {
      return u6(this, t, i, a, !0);
    };
    D.prototype.lastIndexOf = function (t, i, a) {
      return u6(this, t, i, a, !1);
    };
    function wde(e, t, i, a) {
      i = Number(i) || 0;
      var u = e.length - i;
      a ? (a = Number(a), a > u && (a = u)) : a = u;
      var l = t.length;
      a > l / 2 && (a = l / 2);
      var f;
      for (f = 0; f < a; ++f) {
        var d = parseInt(t.substr(f * 2, 2), 16);
        if (Pb(d)) return f;
        e[i + f] = d;
      }
      return f;
    }
    function Nde(e, t, i, a) {
      return ed(Cb(t, e.length - i), e, i, a);
    }
    function Rde(e, t, i, a) {
      return ed(Hde(t), e, i, a);
    }
    function Cde(e, t, i, a) {
      return ed(m6(t), e, i, a);
    }
    function Mde(e, t, i, a) {
      return ed(Gde(t, e.length - i), e, i, a);
    }
    D.prototype.write = function (t, i, a, u) {
      if (i === void 0) u = "utf8", a = this.length, i = 0;else if (a === void 0 && typeof i == "string") u = i, a = this.length, i = 0;else if (isFinite(i)) i = i >>> 0, isFinite(a) ? (a = a >>> 0, u === void 0 && (u = "utf8")) : (u = a, a = void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      var l = this.length - i;
      if ((a === void 0 || a > l) && (a = l), t.length > 0 && (a < 0 || i < 0) || i > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      u || (u = "utf8");
      var f = !1;
      for (;;) switch (u) {
        case "hex":
          return wde(this, t, i, a);
        case "utf8":
        case "utf-8":
          return Nde(this, t, i, a);
        case "ascii":
        case "latin1":
        case "binary":
          return Rde(this, t, i, a);
        case "base64":
          return Cde(this, t, i, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Mde(this, t, i, a);
        default:
          if (f) throw new TypeError("Unknown encoding: " + u);
          u = ("" + u).toLowerCase(), f = !0;
      }
    };
    D.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function Bde(e, t, i) {
      return t === 0 && i === e.length ? wb.fromByteArray(e) : wb.fromByteArray(e.slice(t, i));
    }
    function s6(e, t, i) {
      i = Math.min(e.length, i);
      var a = [],
        u = t;
      for (; u < i;) {
        var l = e[u],
          f = null,
          d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
        if (u + d <= i) {
          var v = void 0,
            h = void 0,
            y = void 0,
            b = void 0;
          switch (d) {
            case 1:
              l < 128 && (f = l);
              break;
            case 2:
              v = e[u + 1], (v & 192) === 128 && (b = (l & 31) << 6 | v & 63, b > 127 && (f = b));
              break;
            case 3:
              v = e[u + 1], h = e[u + 2], (v & 192) === 128 && (h & 192) === 128 && (b = (l & 15) << 12 | (v & 63) << 6 | h & 63, b > 2047 && (b < 55296 || b > 57343) && (f = b));
              break;
            case 4:
              v = e[u + 1], h = e[u + 2], y = e[u + 3], (v & 192) === 128 && (h & 192) === 128 && (y & 192) === 128 && (b = (l & 15) << 18 | (v & 63) << 12 | (h & 63) << 6 | y & 63, b > 65535 && b < 1114112 && (f = b));
          }
        }
        f === null ? (f = 65533, d = 1) : f > 65535 && (f -= 65536, a.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023), a.push(f), u += d;
      }
      return Dde(a);
    }
    var r6 = 4096;
    function Dde(e) {
      var t = e.length;
      if (t <= r6) return String.fromCharCode.apply(String, e);
      var i = "",
        a = 0;
      for (; a < t;) i += String.fromCharCode.apply(String, e.slice(a, a += r6));
      return i;
    }
    function Pde(e, t, i) {
      var a = "";
      i = Math.min(e.length, i);
      for (var u = t; u < i; ++u) a += String.fromCharCode(e[u] & 127);
      return a;
    }
    function Ide(e, t, i) {
      var a = "";
      i = Math.min(e.length, i);
      for (var u = t; u < i; ++u) a += String.fromCharCode(e[u]);
      return a;
    }
    function Ude(e, t, i) {
      var a = e.length;
      (!t || t < 0) && (t = 0), (!i || i < 0 || i > a) && (i = a);
      var u = "";
      for (var l = t; l < i; ++l) u += Kde[e[l]];
      return u;
    }
    function zde(e, t, i) {
      var a = e.slice(t, i),
        u = "";
      for (var l = 0; l < a.length - 1; l += 2) u += String.fromCharCode(a[l] + a[l + 1] * 256);
      return u;
    }
    D.prototype.slice = function (t, i) {
      var a = this.length;
      t = ~~t, i = i === void 0 ? a : ~~i, t < 0 ? (t += a, t < 0 && (t = 0)) : t > a && (t = a), i < 0 ? (i += a, i < 0 && (i = 0)) : i > a && (i = a), i < t && (i = t);
      var u = this.subarray(t, i);
      return Object.setPrototypeOf(u, D.prototype), u;
    };
    function at(e, t, i) {
      if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > i) throw new RangeError("Trying to access beyond buffer length");
    }
    D.prototype.readUintLE = D.prototype.readUIntLE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || at(t, i, this.length);
      var u = this[t],
        l = 1,
        f = 0;
      for (; ++f < i && (l *= 256);) u += this[t + f] * l;
      return u;
    };
    D.prototype.readUintBE = D.prototype.readUIntBE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || at(t, i, this.length);
      var u = this[t + --i],
        l = 1;
      for (; i > 0 && (l *= 256);) u += this[t + --i] * l;
      return u;
    };
    D.prototype.readUint8 = D.prototype.readUInt8 = function (t, i) {
      return t = t >>> 0, i || at(t, 1, this.length), this[t];
    };
    D.prototype.readUint16LE = D.prototype.readUInt16LE = function (t, i) {
      return t = t >>> 0, i || at(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    D.prototype.readUint16BE = D.prototype.readUInt16BE = function (t, i) {
      return t = t >>> 0, i || at(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    D.prototype.readUint32LE = D.prototype.readUInt32LE = function (t, i) {
      return t = t >>> 0, i || at(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    D.prototype.readUint32BE = D.prototype.readUInt32BE = function (t, i) {
      return t = t >>> 0, i || at(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    D.prototype.readBigUInt64LE = Ri(function (t) {
      t = t >>> 0, iu(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && El(t, this.length - 8);
      var u = i + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24),
        l = this[++t] + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + a * Math.pow(2, 24);
      return BigInt(u) + (BigInt(l) << BigInt(32));
    });
    D.prototype.readBigUInt64BE = Ri(function (t) {
      t = t >>> 0, iu(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && El(t, this.length - 8);
      var u = i * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t],
        l = this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + a;
      return (BigInt(u) << BigInt(32)) + BigInt(l);
    });
    D.prototype.readIntLE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || at(t, i, this.length);
      var u = this[t],
        l = 1,
        f = 0;
      for (; ++f < i && (l *= 256);) u += this[t + f] * l;
      return l *= 128, u >= l && (u -= Math.pow(2, 8 * i)), u;
    };
    D.prototype.readIntBE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || at(t, i, this.length);
      var u = i,
        l = 1,
        f = this[t + --u];
      for (; u > 0 && (l *= 256);) f += this[t + --u] * l;
      return l *= 128, f >= l && (f -= Math.pow(2, 8 * i)), f;
    };
    D.prototype.readInt8 = function (t, i) {
      return t = t >>> 0, i || at(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    D.prototype.readInt16LE = function (t, i) {
      t = t >>> 0, i || at(t, 2, this.length);
      var a = this[t] | this[t + 1] << 8;
      return a & 32768 ? a | 4294901760 : a;
    };
    D.prototype.readInt16BE = function (t, i) {
      t = t >>> 0, i || at(t, 2, this.length);
      var a = this[t + 1] | this[t] << 8;
      return a & 32768 ? a | 4294901760 : a;
    };
    D.prototype.readInt32LE = function (t, i) {
      return t = t >>> 0, i || at(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    D.prototype.readInt32BE = function (t, i) {
      return t = t >>> 0, i || at(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    D.prototype.readBigInt64LE = Ri(function (t) {
      t = t >>> 0, iu(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && El(t, this.length - 8);
      var u = this[t + 4] + this[t + 5] * Math.pow(2, 8) + this[t + 6] * Math.pow(2, 16) + (a << 24);
      return (BigInt(u) << BigInt(32)) + BigInt(i + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24));
    });
    D.prototype.readBigInt64BE = Ri(function (t) {
      t = t >>> 0, iu(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && El(t, this.length - 8);
      var u = (i << 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t];
      return (BigInt(u) << BigInt(32)) + BigInt(this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + a);
    });
    D.prototype.readFloatLE = function (t, i) {
      return t = t >>> 0, i || at(t, 4, this.length), nu.read(this, t, !0, 23, 4);
    };
    D.prototype.readFloatBE = function (t, i) {
      return t = t >>> 0, i || at(t, 4, this.length), nu.read(this, t, !1, 23, 4);
    };
    D.prototype.readDoubleLE = function (t, i) {
      return t = t >>> 0, i || at(t, 8, this.length), nu.read(this, t, !0, 52, 8);
    };
    D.prototype.readDoubleBE = function (t, i) {
      return t = t >>> 0, i || at(t, 8, this.length), nu.read(this, t, !1, 52, 8);
    };
    function Xt(e, t, i, a, u, l) {
      if (!D.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > u || t < l) throw new RangeError('"value" argument is out of bounds');
      if (i + a > e.length) throw new RangeError("Index out of range");
    }
    D.prototype.writeUintLE = D.prototype.writeUIntLE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, a = a >>> 0, !u) {
        var d = Math.pow(2, 8 * a) - 1;
        Xt(this, t, i, a, d, 0);
      }
      var l = 1,
        f = 0;
      for (this[i] = t & 255; ++f < a && (l *= 256);) this[i + f] = t / l & 255;
      return i + a;
    };
    D.prototype.writeUintBE = D.prototype.writeUIntBE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, a = a >>> 0, !u) {
        var d = Math.pow(2, 8 * a) - 1;
        Xt(this, t, i, a, d, 0);
      }
      var l = a - 1,
        f = 1;
      for (this[i + l] = t & 255; --l >= 0 && (f *= 256);) this[i + l] = t / f & 255;
      return i + a;
    };
    D.prototype.writeUint8 = D.prototype.writeUInt8 = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 1, 255, 0), this[i] = t & 255, i + 1;
    };
    D.prototype.writeUint16LE = D.prototype.writeUInt16LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 65535, 0), this[i] = t & 255, this[i + 1] = t >>> 8, i + 2;
    };
    D.prototype.writeUint16BE = D.prototype.writeUInt16BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 65535, 0), this[i] = t >>> 8, this[i + 1] = t & 255, i + 2;
    };
    D.prototype.writeUint32LE = D.prototype.writeUInt32LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 4294967295, 0), this[i + 3] = t >>> 24, this[i + 2] = t >>> 16, this[i + 1] = t >>> 8, this[i] = t & 255, i + 4;
    };
    D.prototype.writeUint32BE = D.prototype.writeUInt32BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 4294967295, 0), this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = t & 255, i + 4;
    };
    function l6(e, t, i, a, u) {
      v6(t, a, u, e, i, 7);
      var l = Number(t & BigInt(4294967295));
      e[i++] = l, l = l >> 8, e[i++] = l, l = l >> 8, e[i++] = l, l = l >> 8, e[i++] = l;
      var f = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[i++] = f, f = f >> 8, e[i++] = f, f = f >> 8, e[i++] = f, f = f >> 8, e[i++] = f, i;
    }
    function c6(e, t, i, a, u) {
      v6(t, a, u, e, i, 7);
      var l = Number(t & BigInt(4294967295));
      e[i + 7] = l, l = l >> 8, e[i + 6] = l, l = l >> 8, e[i + 5] = l, l = l >> 8, e[i + 4] = l;
      var f = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[i + 3] = f, f = f >> 8, e[i + 2] = f, f = f >> 8, e[i + 1] = f, f = f >> 8, e[i] = f, i + 8;
    }
    D.prototype.writeBigUInt64LE = Ri(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return l6(this, t, i, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    D.prototype.writeBigUInt64BE = Ri(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return c6(this, t, i, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    D.prototype.writeIntLE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, !u) {
        var v = Math.pow(2, 8 * a - 1);
        Xt(this, t, i, a, v - 1, -v);
      }
      var l = 0,
        f = 1,
        d = 0;
      for (this[i] = t & 255; ++l < a && (f *= 256);) t < 0 && d === 0 && this[i + l - 1] !== 0 && (d = 1), this[i + l] = (t / f >> 0) - d & 255;
      return i + a;
    };
    D.prototype.writeIntBE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, !u) {
        var v = Math.pow(2, 8 * a - 1);
        Xt(this, t, i, a, v - 1, -v);
      }
      var l = a - 1,
        f = 1,
        d = 0;
      for (this[i + l] = t & 255; --l >= 0 && (f *= 256);) t < 0 && d === 0 && this[i + l + 1] !== 0 && (d = 1), this[i + l] = (t / f >> 0) - d & 255;
      return i + a;
    };
    D.prototype.writeInt8 = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[i] = t & 255, i + 1;
    };
    D.prototype.writeInt16LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 32767, -32768), this[i] = t & 255, this[i + 1] = t >>> 8, i + 2;
    };
    D.prototype.writeInt16BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 32767, -32768), this[i] = t >>> 8, this[i + 1] = t & 255, i + 2;
    };
    D.prototype.writeInt32LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 2147483647, -2147483648), this[i] = t & 255, this[i + 1] = t >>> 8, this[i + 2] = t >>> 16, this[i + 3] = t >>> 24, i + 4;
    };
    D.prototype.writeInt32BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = t & 255, i + 4;
    };
    D.prototype.writeBigInt64LE = Ri(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return l6(this, t, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    D.prototype.writeBigInt64BE = Ri(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return c6(this, t, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function f6(e, t, i, a, u, l) {
      if (i + a > e.length) throw new RangeError("Index out of range");
      if (i < 0) throw new RangeError("Index out of range");
    }
    function p6(e, t, i, a, u) {
      return t = +t, i = i >>> 0, u || f6(e, t, i, 4, 34028234663852886e22, -34028234663852886e22), nu.write(e, t, i, a, 23, 4), i + 4;
    }
    D.prototype.writeFloatLE = function (t, i, a) {
      return p6(this, t, i, !0, a);
    };
    D.prototype.writeFloatBE = function (t, i, a) {
      return p6(this, t, i, !1, a);
    };
    function d6(e, t, i, a, u) {
      return t = +t, i = i >>> 0, u || f6(e, t, i, 8, 17976931348623157e292, -17976931348623157e292), nu.write(e, t, i, a, 52, 8), i + 8;
    }
    D.prototype.writeDoubleLE = function (t, i, a) {
      return d6(this, t, i, !0, a);
    };
    D.prototype.writeDoubleBE = function (t, i, a) {
      return d6(this, t, i, !1, a);
    };
    D.prototype.copy = function (t, i, a, u) {
      if (!D.isBuffer(t)) throw new TypeError("argument should be a Buffer");
      if (a || (a = 0), !u && u !== 0 && (u = this.length), i >= t.length && (i = t.length), i || (i = 0), u > 0 && u < a && (u = a), u === a || t.length === 0 || this.length === 0) return 0;
      if (i < 0) throw new RangeError("targetStart out of bounds");
      if (a < 0 || a >= this.length) throw new RangeError("Index out of range");
      if (u < 0) throw new RangeError("sourceEnd out of bounds");
      u > this.length && (u = this.length), t.length - i < u - a && (u = t.length - i + a);
      var l = u - a;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(i, a, u) : Uint8Array.prototype.set.call(t, this.subarray(a, u), i), l;
    };
    D.prototype.fill = function (t, i, a, u) {
      if (typeof t == "string") {
        if (typeof i == "string" ? (u = i, i = 0, a = this.length) : typeof a == "string" && (u = a, a = this.length), u !== void 0 && typeof u != "string") throw new TypeError("encoding must be a string");
        if (typeof u == "string" && !D.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
        if (t.length === 1) {
          var f = t.charCodeAt(0);
          (u === "utf8" && f < 128 || u === "latin1") && (t = f);
        }
      } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (i < 0 || this.length < i || this.length < a) throw new RangeError("Out of range index");
      if (a <= i) return this;
      i = i >>> 0, a = a === void 0 ? this.length : a >>> 0, t || (t = 0);
      var l;
      if (typeof t == "number") for (l = i; l < a; ++l) this[l] = t;else {
        var _f2 = D.isBuffer(t) ? t : D.from(t, u),
          d = _f2.length;
        if (d === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (l = 0; l < a - i; ++l) this[l + i] = _f2[l % d];
      }
      return this;
    };
    var ru = {};
    function Db(e, t, i) {
      ru[e] = /*#__PURE__*/function (_i2) {
        function _class() {
          var _this;
          _classCallCheck(this, _class);
          _this = _callSuper(this, _class), Object.defineProperty(_assertThisInitialized(_this), "message", {
            value: t.apply(_assertThisInitialized(_this), arguments),
            writable: !0,
            configurable: !0
          }), _this.name = "".concat(_this.name, " [").concat(e, "]"), _this.stack, delete _this.name;
          return _this;
        }
        _inherits(_class, _i2);
        return _createClass(_class, [{
          key: "code",
          get: function get() {
            return e;
          },
          set: function set(u) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: u,
              writable: !0
            });
          }
        }, {
          key: "toString",
          value: function toString() {
            return "".concat(this.name, " [").concat(e, "]: ").concat(this.message);
          }
        }]);
      }(i);
    }
    Db("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
      return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    Db("ERR_INVALID_ARG_TYPE", function (e, t) {
      return "The \"".concat(e, "\" argument must be of type number. Received type ").concat(_typeof(t));
    }, TypeError);
    Db("ERR_OUT_OF_RANGE", function (e, t, i) {
      var a = "The value of \"".concat(e, "\" is out of range."),
        u = i;
      return Number.isInteger(i) && Math.abs(i) > Math.pow(2, 32) ? u = n6(String(i)) : typeof i == "bigint" && (u = String(i), (i > Math.pow(BigInt(2), BigInt(32)) || i < -Math.pow(BigInt(2), BigInt(32))) && (u = n6(u)), u += "n"), a += " It must be ".concat(t, ". Received ").concat(u), a;
    }, RangeError);
    function n6(e) {
      var t = "",
        i = e.length,
        a = e[0] === "-" ? 1 : 0;
      for (; i >= a + 4; i -= 3) t = "_".concat(e.slice(i - 3, i)).concat(t);
      return "".concat(e.slice(0, i)).concat(t);
    }
    function Lde(e, t, i) {
      iu(t, "offset"), (e[t] === void 0 || e[t + i] === void 0) && El(t, e.length - (i + 1));
    }
    function v6(e, t, i, a, u, l) {
      if (e > i || e < t) {
        var f = typeof t == "bigint" ? "n" : "",
          d;
        throw l > 3 ? t === 0 || t === BigInt(0) ? d = ">= 0".concat(f, " and < 2").concat(f, " ** ").concat((l + 1) * 8).concat(f) : d = ">= -(2".concat(f, " ** ").concat((l + 1) * 8 - 1).concat(f, ") and < 2 ** ").concat((l + 1) * 8 - 1).concat(f) : d = ">= ".concat(t).concat(f, " and <= ").concat(i).concat(f), new ru.ERR_OUT_OF_RANGE("value", d, e);
      }
      Lde(a, u, l);
    }
    function iu(e, t) {
      if (typeof e != "number") throw new ru.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function El(e, t, i) {
      throw Math.floor(e) !== e ? (iu(e, i), new ru.ERR_OUT_OF_RANGE(i || "offset", "an integer", e)) : t < 0 ? new ru.ERR_BUFFER_OUT_OF_BOUNDS() : new ru.ERR_OUT_OF_RANGE(i || "offset", ">= ".concat(i ? 1 : 0, " and <= ").concat(t), e);
    }
    var jde = /[^+/0-9A-Za-z-_]/g;
    function Fde(e) {
      if (e = e.split("=")[0], e = e.trim().replace(jde, ""), e.length < 2) return "";
      for (; e.length % 4 !== 0;) e = e + "=";
      return e;
    }
    function Cb(e, t) {
      t = t || 1 / 0;
      var i,
        a = e.length,
        u = null,
        l = [];
      for (var f = 0; f < a; ++f) {
        if (i = e.charCodeAt(f), i > 55295 && i < 57344) {
          if (!u) {
            if (i > 56319) {
              (t -= 3) > -1 && l.push(239, 191, 189);
              continue;
            } else if (f + 1 === a) {
              (t -= 3) > -1 && l.push(239, 191, 189);
              continue;
            }
            u = i;
            continue;
          }
          if (i < 56320) {
            (t -= 3) > -1 && l.push(239, 191, 189), u = i;
            continue;
          }
          i = (u - 55296 << 10 | i - 56320) + 65536;
        } else u && (t -= 3) > -1 && l.push(239, 191, 189);
        if (u = null, i < 128) {
          if ((t -= 1) < 0) break;
          l.push(i);
        } else if (i < 2048) {
          if ((t -= 2) < 0) break;
          l.push(i >> 6 | 192, i & 63 | 128);
        } else if (i < 65536) {
          if ((t -= 3) < 0) break;
          l.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
        } else if (i < 1114112) {
          if ((t -= 4) < 0) break;
          l.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, i & 63 | 128);
        } else throw new Error("Invalid code point");
      }
      return l;
    }
    function Hde(e) {
      var t = [];
      for (var i = 0; i < e.length; ++i) t.push(e.charCodeAt(i) & 255);
      return t;
    }
    function Gde(e, t) {
      var i,
        a,
        u,
        l = [];
      for (var f = 0; f < e.length && !((t -= 2) < 0); ++f) i = e.charCodeAt(f), a = i >> 8, u = i % 256, l.push(u), l.push(a);
      return l;
    }
    function m6(e) {
      return wb.toByteArray(Fde(e));
    }
    function ed(e, t, i, a) {
      var u;
      for (u = 0; u < a && !(u + i >= t.length || u >= e.length); ++u) t[u + i] = e[u];
      return u;
    }
    function en(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function Pb(e) {
      return e !== e;
    }
    var Kde = function () {
      var e = "0123456789abcdef",
        t = new Array(256);
      for (var i = 0; i < 16; ++i) {
        var a = i * 16;
        for (var u = 0; u < 16; ++u) t[a + u] = e[i] + e[u];
      }
      return t;
    }();
    function Ri(e) {
      return (typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt)) > "u" ? Vde : e;
    }
    function Vde() {
      throw new Error("BigInt not supported");
    }
  });
  var C6 = m(function (ie) {
    "use strict";

    var Ub = Symbol.for("react.transitional.element"),
      Yde = Symbol.for("react.portal"),
      Xde = Symbol.for("react.fragment"),
      kde = Symbol.for("react.strict_mode"),
      Qde = Symbol.for("react.profiler"),
      Zde = Symbol.for("react.consumer"),
      Wde = Symbol.for("react.context"),
      Jde = Symbol.for("react.forward_ref"),
      $de = Symbol.for("react.suspense"),
      eve = Symbol.for("react.memo"),
      A6 = Symbol.for("react.lazy"),
      x6 = Symbol.iterator;
    function tve(e) {
      return e === null || _typeof(e) != "object" ? null : (e = x6 && e[x6] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var _6 = {
        isMounted: function isMounted() {
          return !1;
        },
        enqueueForceUpdate: function enqueueForceUpdate() {},
        enqueueReplaceState: function enqueueReplaceState() {},
        enqueueSetState: function enqueueSetState() {}
      },
      O6 = Object.assign,
      w6 = {};
    function uu(e, t, i) {
      this.props = e, this.context = t, this.refs = w6, this.updater = i || _6;
    }
    uu.prototype.isReactComponent = {};
    uu.prototype.setState = function (e, t) {
      if (_typeof(e) != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    uu.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function N6() {}
    N6.prototype = uu.prototype;
    function zb(e, t, i) {
      this.props = e, this.context = t, this.refs = w6, this.updater = i || _6;
    }
    var Lb = zb.prototype = new N6();
    Lb.constructor = zb;
    O6(Lb, uu.prototype);
    Lb.isPureReactComponent = !0;
    var S6 = Array.isArray,
      Ie = {
        H: null,
        A: null,
        T: null,
        S: null
      },
      R6 = Object.prototype.hasOwnProperty;
    function jb(e, t, i, a, u, l) {
      return i = l.ref, {
        $$typeof: Ub,
        type: e,
        key: t,
        ref: i !== void 0 ? i : null,
        props: l
      };
    }
    function rve(e, t) {
      return jb(e.type, t, void 0, void 0, void 0, e.props);
    }
    function Fb(e) {
      return _typeof(e) == "object" && e !== null && e.$$typeof === Ub;
    }
    function nve(e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + e.replace(/[=:]/g, function (i) {
        return t[i];
      });
    }
    var E6 = /\/+/g;
    function Ib(e, t) {
      return _typeof(e) == "object" && e !== null && e.key != null ? nve("" + e.key) : t.toString(36);
    }
    function T6() {}
    function ive(e) {
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
        default:
          switch (typeof e.status == "string" ? e.then(T6, T6) : (e.status = "pending", e.then(function (t) {
            e.status === "pending" && (e.status = "fulfilled", e.value = t);
          }, function (t) {
            e.status === "pending" && (e.status = "rejected", e.reason = t);
          })), e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw e.reason;
          }
      }
      throw e;
    }
    function ou(e, t, i, a, u) {
      var l = _typeof(e);
      (l === "undefined" || l === "boolean") && (e = null);
      var f = !1;
      if (e === null) f = !0;else switch (l) {
        case "bigint":
        case "string":
        case "number":
          f = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ub:
            case Yde:
              f = !0;
              break;
            case A6:
              return f = e._init, ou(f(e._payload), t, i, a, u);
          }
      }
      if (f) return u = u(e), f = a === "" ? "." + Ib(e, 0) : a, S6(u) ? (i = "", f != null && (i = f.replace(E6, "$&/") + "/"), ou(u, t, i, "", function (h) {
        return h;
      })) : u != null && (Fb(u) && (u = rve(u, i + (u.key == null || e && e.key === u.key ? "" : ("" + u.key).replace(E6, "$&/") + "/") + f)), t.push(u)), 1;
      f = 0;
      var d = a === "" ? "." : a + ":";
      if (S6(e)) for (var v = 0; v < e.length; v++) a = e[v], l = d + Ib(a, v), f += ou(a, t, i, l, u);else if (v = tve(e), typeof v == "function") for (e = v.call(e), v = 0; !(a = e.next()).done;) a = a.value, l = d + Ib(a, v++), f += ou(a, t, i, l, u);else if (l === "object") {
        if (typeof e.then == "function") return ou(ive(e), t, i, a, u);
        throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      }
      return f;
    }
    function td(e, t, i) {
      if (e == null) return e;
      var a = [],
        u = 0;
      return ou(e, a, "", "", function (l) {
        return t.call(i, l, u++);
      }), a;
    }
    function ave(e) {
      if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (i) {
          (e._status === 0 || e._status === -1) && (e._status = 1, e._result = i);
        }, function (i) {
          (e._status === 0 || e._status === -1) && (e._status = 2, e._result = i);
        }), e._status === -1 && (e._status = 0, e._result = t);
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var q6 = typeof reportError == "function" ? reportError : function (e) {
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: _typeof(e) == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if ((typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    };
    function ove() {}
    ie.Children = {
      map: td,
      forEach: function forEach(e, t, i) {
        td(e, function () {
          t.apply(this, arguments);
        }, i);
      },
      count: function count(e) {
        var t = 0;
        return td(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return td(e, function (t) {
          return t;
        }) || [];
      },
      only: function only(e) {
        if (!Fb(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    };
    ie.Component = uu;
    ie.Fragment = Xde;
    ie.Profiler = Qde;
    ie.PureComponent = zb;
    ie.StrictMode = kde;
    ie.Suspense = $de;
    ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ie;
    ie.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    ie.cache = function (e) {
      return function () {
        return e.apply(null, arguments);
      };
    };
    ie.cloneElement = function (e, t, i) {
      if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
      var a = O6({}, e.props),
        u = e.key,
        l = void 0;
      if (t != null) for (f in t.ref !== void 0 && (l = void 0), t.key !== void 0 && (u = "" + t.key), t) !R6.call(t, f) || f === "key" || f === "__self" || f === "__source" || f === "ref" && t.ref === void 0 || (a[f] = t[f]);
      var f = arguments.length - 2;
      if (f === 1) a.children = i;else if (1 < f) {
        for (var d = Array(f), v = 0; v < f; v++) d[v] = arguments[v + 2];
        a.children = d;
      }
      return jb(e.type, u, void 0, void 0, l, a);
    };
    ie.createContext = function (e) {
      return e = {
        $$typeof: Wde,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, e.Provider = e, e.Consumer = {
        $$typeof: Zde,
        _context: e
      }, e;
    };
    ie.createElement = function (e, t, i) {
      var a,
        u = {},
        l = null;
      if (t != null) for (a in t.key !== void 0 && (l = "" + t.key), t) R6.call(t, a) && a !== "key" && a !== "__self" && a !== "__source" && (u[a] = t[a]);
      var f = arguments.length - 2;
      if (f === 1) u.children = i;else if (1 < f) {
        for (var d = Array(f), v = 0; v < f; v++) d[v] = arguments[v + 2];
        u.children = d;
      }
      if (e && e.defaultProps) for (a in f = e.defaultProps, f) u[a] === void 0 && (u[a] = f[a]);
      return jb(e, l, void 0, void 0, null, u);
    };
    ie.createRef = function () {
      return {
        current: null
      };
    };
    ie.forwardRef = function (e) {
      return {
        $$typeof: Jde,
        render: e
      };
    };
    ie.isValidElement = Fb;
    ie.lazy = function (e) {
      return {
        $$typeof: A6,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: ave
      };
    };
    ie.memo = function (e, t) {
      return {
        $$typeof: eve,
        type: e,
        compare: t === void 0 ? null : t
      };
    };
    ie.startTransition = function (e) {
      var t = Ie.T,
        i = {};
      Ie.T = i;
      try {
        var a = e(),
          u = Ie.S;
        u !== null && u(i, a), _typeof(a) == "object" && a !== null && typeof a.then == "function" && a.then(ove, q6);
      } catch (l) {
        q6(l);
      } finally {
        Ie.T = t;
      }
    };
    ie.unstable_useCacheRefresh = function () {
      return Ie.H.useCacheRefresh();
    };
    ie.use = function (e) {
      return Ie.H.use(e);
    };
    ie.useActionState = function (e, t, i) {
      return Ie.H.useActionState(e, t, i);
    };
    ie.useCallback = function (e, t) {
      return Ie.H.useCallback(e, t);
    };
    ie.useContext = function (e) {
      return Ie.H.useContext(e);
    };
    ie.useDebugValue = function () {};
    ie.useDeferredValue = function (e, t) {
      return Ie.H.useDeferredValue(e, t);
    };
    ie.useEffect = function (e, t) {
      return Ie.H.useEffect(e, t);
    };
    ie.useId = function () {
      return Ie.H.useId();
    };
    ie.useImperativeHandle = function (e, t, i) {
      return Ie.H.useImperativeHandle(e, t, i);
    };
    ie.useInsertionEffect = function (e, t) {
      return Ie.H.useInsertionEffect(e, t);
    };
    ie.useLayoutEffect = function (e, t) {
      return Ie.H.useLayoutEffect(e, t);
    };
    ie.useMemo = function (e, t) {
      return Ie.H.useMemo(e, t);
    };
    ie.useOptimistic = function (e, t) {
      return Ie.H.useOptimistic(e, t);
    };
    ie.useReducer = function (e, t, i) {
      return Ie.H.useReducer(e, t, i);
    };
    ie.useRef = function (e) {
      return Ie.H.useRef(e);
    };
    ie.useState = function (e) {
      return Ie.H.useState(e);
    };
    ie.useSyncExternalStore = function (e, t, i) {
      return Ie.H.useSyncExternalStore(e, t, i);
    };
    ie.useTransition = function () {
      return Ie.H.useTransition();
    };
    ie.version = "19.0.0";
  });
  var yt = m(function (Uwe, M6) {
    "use strict";

    M6.exports = C6();
  });
  var Mz = m(function () {});
  var Dz = m(function (Bd, Bz) {
    (function (e, t) {
      _typeof(Bd) == "object" ? Bz.exports = Bd = t() : typeof define == "function" && define.amd ? define([], t) : e.CryptoJS = t();
    })(Bd, function () {
      var e = e || function (t, i) {
        var a;
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.crypto && (a = window.crypto), (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && self.crypto && (a = self.crypto), (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" && globalThis.crypto && (a = globalThis.crypto), !a && (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.msCrypto && (a = window.msCrypto), !a && (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" && global.crypto && (a = global.crypto), !a && typeof g1 == "function") try {
          a = Mz();
        } catch (_unused52) {}
        var u = function u() {
            if (a) {
              if (typeof a.getRandomValues == "function") try {
                return a.getRandomValues(new Uint32Array(1))[0];
              } catch (_unused53) {}
              if (typeof a.randomBytes == "function") try {
                return a.randomBytes(4).readInt32LE();
              } catch (_unused54) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          },
          l = Object.create || function () {
            function x() {}
            return function (q) {
              var I;
              return x.prototype = q, I = new x(), x.prototype = null, I;
            };
          }(),
          f = {},
          d = f.lib = {},
          v = d.Base = function () {
            return {
              extend: function extend(x) {
                var q = l(this);
                return x && q.mixIn(x), (!q.hasOwnProperty("init") || this.init === q.init) && (q.init = function () {
                  q.$super.init.apply(this, arguments);
                }), q.init.prototype = q, q.$super = this, q;
              },
              create: function create() {
                var x = this.extend();
                return x.init.apply(x, arguments), x;
              },
              init: function init() {},
              mixIn: function mixIn(x) {
                for (var q in x) x.hasOwnProperty(q) && (this[q] = x[q]);
                x.hasOwnProperty("toString") && (this.toString = x.toString);
              },
              clone: function clone() {
                return this.init.prototype.extend(this);
              }
            };
          }(),
          h = d.WordArray = v.extend({
            init: function init(x, q) {
              x = this.words = x || [], q != i ? this.sigBytes = q : this.sigBytes = x.length * 4;
            },
            toString: function toString(x) {
              return (x || b).stringify(this);
            },
            concat: function concat(x) {
              var q = this.words,
                I = x.words,
                w = this.sigBytes,
                B = x.sigBytes;
              if (this.clamp(), w % 4) for (var U = 0; U < B; U++) {
                var k = I[U >>> 2] >>> 24 - U % 4 * 8 & 255;
                q[w + U >>> 2] |= k << 24 - (w + U) % 4 * 8;
              } else for (var ne = 0; ne < B; ne += 4) q[w + ne >>> 2] = I[ne >>> 2];
              return this.sigBytes += B, this;
            },
            clamp: function clamp() {
              var x = this.words,
                q = this.sigBytes;
              x[q >>> 2] &= 4294967295 << 32 - q % 4 * 8, x.length = t.ceil(q / 4);
            },
            clone: function clone() {
              var x = v.clone.call(this);
              return x.words = this.words.slice(0), x;
            },
            random: function random(x) {
              for (var q = [], I = 0; I < x; I += 4) q.push(u());
              return new h.init(q, x);
            }
          }),
          y = f.enc = {},
          b = y.Hex = {
            stringify: function stringify(x) {
              for (var q = x.words, I = x.sigBytes, w = [], B = 0; B < I; B++) {
                var U = q[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                w.push((U >>> 4).toString(16)), w.push((U & 15).toString(16));
              }
              return w.join("");
            },
            parse: function parse(x) {
              for (var q = x.length, I = [], w = 0; w < q; w += 2) I[w >>> 3] |= parseInt(x.substr(w, 2), 16) << 24 - w % 8 * 4;
              return new h.init(I, q / 2);
            }
          },
          S = y.Latin1 = {
            stringify: function stringify(x) {
              for (var q = x.words, I = x.sigBytes, w = [], B = 0; B < I; B++) {
                var U = q[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                w.push(String.fromCharCode(U));
              }
              return w.join("");
            },
            parse: function parse(x) {
              for (var q = x.length, I = [], w = 0; w < q; w++) I[w >>> 2] |= (x.charCodeAt(w) & 255) << 24 - w % 4 * 8;
              return new h.init(I, q);
            }
          },
          T = y.Utf8 = {
            stringify: function stringify(x) {
              try {
                return decodeURIComponent(escape(S.stringify(x)));
              } catch (_unused55) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function parse(x) {
              return S.parse(unescape(encodeURIComponent(x)));
            }
          },
          R = d.BufferedBlockAlgorithm = v.extend({
            reset: function reset() {
              this._data = new h.init(), this._nDataBytes = 0;
            },
            _append: function _append(x) {
              typeof x == "string" && (x = T.parse(x)), this._data.concat(x), this._nDataBytes += x.sigBytes;
            },
            _process: function _process(x) {
              var q,
                I = this._data,
                w = I.words,
                B = I.sigBytes,
                U = this.blockSize,
                k = U * 4,
                ne = B / k;
              x ? ne = t.ceil(ne) : ne = t.max((ne | 0) - this._minBufferSize, 0);
              var He = ne * U,
                he = t.min(He * 4, B);
              if (He) {
                for (var qe = 0; qe < He; qe += U) this._doProcessBlock(w, qe);
                q = w.splice(0, He), I.sigBytes -= he;
              }
              return new h.init(q, he);
            },
            clone: function clone() {
              var x = v.clone.call(this);
              return x._data = this._data.clone(), x;
            },
            _minBufferSize: 0
          }),
          A = d.Hasher = R.extend({
            cfg: v.extend(),
            init: function init(x) {
              this.cfg = this.cfg.extend(x), this.reset();
            },
            reset: function reset() {
              R.reset.call(this), this._doReset();
            },
            update: function update(x) {
              return this._append(x), this._process(), this;
            },
            finalize: function finalize(x) {
              x && this._append(x);
              var q = this._doFinalize();
              return q;
            },
            blockSize: 512 / 32,
            _createHelper: function _createHelper(x) {
              return function (q, I) {
                return new x.init(I).finalize(q);
              };
            },
            _createHmacHelper: function _createHmacHelper(x) {
              return function (q, I) {
                return new _.HMAC.init(x, I).finalize(q);
              };
            }
          }),
          _ = f.algo = {};
        return f;
      }(Math);
      return e;
    });
  });
  var Iz = m(function (Dd, Pz) {
    (function (e, t) {
      _typeof(Dd) == "object" ? Pz.exports = Dd = t(Dz()) : typeof define == "function" && define.amd ? define(["./core"], t) : t(e.CryptoJS);
    })(Dd, function (e) {
      return function (t) {
        var i = e,
          a = i.lib,
          u = a.WordArray,
          l = a.Hasher,
          f = i.algo,
          d = [];
        (function () {
          for (var T = 0; T < 64; T++) d[T] = t.abs(t.sin(T + 1)) * 4294967296 | 0;
        })();
        var v = f.MD5 = l.extend({
          _doReset: function _doReset() {
            this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          _doProcessBlock: function _doProcessBlock(T, R) {
            for (var A = 0; A < 16; A++) {
              var _ = R + A,
                x = T[_];
              T[_] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360;
            }
            var q = this._hash.words,
              I = T[R + 0],
              w = T[R + 1],
              B = T[R + 2],
              U = T[R + 3],
              k = T[R + 4],
              ne = T[R + 5],
              He = T[R + 6],
              he = T[R + 7],
              qe = T[R + 8],
              ce = T[R + 9],
              Me = T[R + 10],
              Ir = T[R + 11],
              cn = T[R + 12],
              It = T[R + 13],
              Ga = T[R + 14],
              lt = T[R + 15],
              j = q[0],
              K = q[1],
              H = q[2],
              G = q[3];
            j = h(j, K, H, G, I, 7, d[0]), G = h(G, j, K, H, w, 12, d[1]), H = h(H, G, j, K, B, 17, d[2]), K = h(K, H, G, j, U, 22, d[3]), j = h(j, K, H, G, k, 7, d[4]), G = h(G, j, K, H, ne, 12, d[5]), H = h(H, G, j, K, He, 17, d[6]), K = h(K, H, G, j, he, 22, d[7]), j = h(j, K, H, G, qe, 7, d[8]), G = h(G, j, K, H, ce, 12, d[9]), H = h(H, G, j, K, Me, 17, d[10]), K = h(K, H, G, j, Ir, 22, d[11]), j = h(j, K, H, G, cn, 7, d[12]), G = h(G, j, K, H, It, 12, d[13]), H = h(H, G, j, K, Ga, 17, d[14]), K = h(K, H, G, j, lt, 22, d[15]), j = y(j, K, H, G, w, 5, d[16]), G = y(G, j, K, H, He, 9, d[17]), H = y(H, G, j, K, Ir, 14, d[18]), K = y(K, H, G, j, I, 20, d[19]), j = y(j, K, H, G, ne, 5, d[20]), G = y(G, j, K, H, Me, 9, d[21]), H = y(H, G, j, K, lt, 14, d[22]), K = y(K, H, G, j, k, 20, d[23]), j = y(j, K, H, G, ce, 5, d[24]), G = y(G, j, K, H, Ga, 9, d[25]), H = y(H, G, j, K, U, 14, d[26]), K = y(K, H, G, j, qe, 20, d[27]), j = y(j, K, H, G, It, 5, d[28]), G = y(G, j, K, H, B, 9, d[29]), H = y(H, G, j, K, he, 14, d[30]), K = y(K, H, G, j, cn, 20, d[31]), j = b(j, K, H, G, ne, 4, d[32]), G = b(G, j, K, H, qe, 11, d[33]), H = b(H, G, j, K, Ir, 16, d[34]), K = b(K, H, G, j, Ga, 23, d[35]), j = b(j, K, H, G, w, 4, d[36]), G = b(G, j, K, H, k, 11, d[37]), H = b(H, G, j, K, he, 16, d[38]), K = b(K, H, G, j, Me, 23, d[39]), j = b(j, K, H, G, It, 4, d[40]), G = b(G, j, K, H, I, 11, d[41]), H = b(H, G, j, K, U, 16, d[42]), K = b(K, H, G, j, He, 23, d[43]), j = b(j, K, H, G, ce, 4, d[44]), G = b(G, j, K, H, cn, 11, d[45]), H = b(H, G, j, K, lt, 16, d[46]), K = b(K, H, G, j, B, 23, d[47]), j = S(j, K, H, G, I, 6, d[48]), G = S(G, j, K, H, he, 10, d[49]), H = S(H, G, j, K, Ga, 15, d[50]), K = S(K, H, G, j, ne, 21, d[51]), j = S(j, K, H, G, cn, 6, d[52]), G = S(G, j, K, H, U, 10, d[53]), H = S(H, G, j, K, Me, 15, d[54]), K = S(K, H, G, j, w, 21, d[55]), j = S(j, K, H, G, qe, 6, d[56]), G = S(G, j, K, H, lt, 10, d[57]), H = S(H, G, j, K, He, 15, d[58]), K = S(K, H, G, j, It, 21, d[59]), j = S(j, K, H, G, k, 6, d[60]), G = S(G, j, K, H, Ir, 10, d[61]), H = S(H, G, j, K, B, 15, d[62]), K = S(K, H, G, j, ce, 21, d[63]), q[0] = q[0] + j | 0, q[1] = q[1] + K | 0, q[2] = q[2] + H | 0, q[3] = q[3] + G | 0;
          },
          _doFinalize: function _doFinalize() {
            var T = this._data,
              R = T.words,
              A = this._nDataBytes * 8,
              _ = T.sigBytes * 8;
            R[_ >>> 5] |= 128 << 24 - _ % 32;
            var x = t.floor(A / 4294967296),
              q = A;
            R[(_ + 64 >>> 9 << 4) + 15] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, R[(_ + 64 >>> 9 << 4) + 14] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360, T.sigBytes = (R.length + 1) * 4, this._process();
            for (var I = this._hash, w = I.words, B = 0; B < 4; B++) {
              var U = w[B];
              w[B] = (U << 8 | U >>> 24) & 16711935 | (U << 24 | U >>> 8) & 4278255360;
            }
            return I;
          },
          clone: function clone() {
            var T = l.clone.call(this);
            return T._hash = this._hash.clone(), T;
          }
        });
        function h(T, R, A, _, x, q, I) {
          var w = T + (R & A | ~R & _) + x + I;
          return (w << q | w >>> 32 - q) + R;
        }
        function y(T, R, A, _, x, q, I) {
          var w = T + (R & _ | A & ~_) + x + I;
          return (w << q | w >>> 32 - q) + R;
        }
        function b(T, R, A, _, x, q, I) {
          var w = T + (R ^ A ^ _) + x + I;
          return (w << q | w >>> 32 - q) + R;
        }
        function S(T, R, A, _, x, q, I) {
          var w = T + (A ^ (R | ~_)) + x + I;
          return (w << q | w >>> 32 - q) + R;
        }
        i.MD5 = l._createHelper(v), i.HmacMD5 = l._createHmacHelper(v);
      }(Math), e.MD5;
    });
  });
  var sL = m(function (Te) {
    "use strict";

    function Sx(e, t) {
      var i = e.length;
      e.push(t);
      e: for (; 0 < i;) {
        var a = i - 1 >>> 1,
          u = e[a];
        if (0 < Kd(u, t)) e[a] = t, e[i] = u, i = a;else break e;
      }
    }
    function Dr(e) {
      return e.length === 0 ? null : e[0];
    }
    function Yd(e) {
      if (e.length === 0) return null;
      var t = e[0],
        i = e.pop();
      if (i !== t) {
        e[0] = i;
        e: for (var a = 0, u = e.length, l = u >>> 1; a < l;) {
          var f = 2 * (a + 1) - 1,
            d = e[f],
            v = f + 1,
            h = e[v];
          if (0 > Kd(d, i)) v < u && 0 > Kd(h, d) ? (e[a] = h, e[v] = i, a = v) : (e[a] = d, e[f] = i, a = f);else if (v < u && 0 > Kd(h, i)) e[a] = h, e[v] = i, a = v;else break e;
        }
      }
      return t;
    }
    function Kd(e, t) {
      var i = e.sortIndex - t.sortIndex;
      return i !== 0 ? i : e.id - t.id;
    }
    Te.unstable_now = void 0;
    (typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && typeof performance.now == "function" ? ($z = performance, Te.unstable_now = function () {
      return $z.now();
    }) : (gx = Date, eL = gx.now(), Te.unstable_now = function () {
      return gx.now() - eL;
    });
    var $z,
      gx,
      eL,
      ln = [],
      Hi = [],
      Age = 1,
      Sr = null,
      qt = 3,
      Xd = !1,
      Ha = !1,
      zl = !1,
      nL = typeof setTimeout == "function" ? setTimeout : null,
      iL = typeof clearTimeout == "function" ? clearTimeout : null,
      tL = (typeof setImmediate === "undefined" ? "undefined" : _typeof(setImmediate)) < "u" ? setImmediate : null;
    function Vd(e) {
      for (var t = Dr(Hi); t !== null;) {
        if (t.callback === null) Yd(Hi);else if (t.startTime <= e) Yd(Hi), t.sortIndex = t.expirationTime, Sx(ln, t);else break;
        t = Dr(Hi);
      }
    }
    function Ex(e) {
      if (zl = !1, Vd(e), !Ha) if (Dr(ln) !== null) Ha = !0, Tx();else {
        var t = Dr(Hi);
        t !== null && qx(Ex, t.startTime - e);
      }
    }
    var kd = !1,
      Ll = -1,
      aL = 5,
      oL = -1;
    function uL() {
      return !(Te.unstable_now() - oL < aL);
    }
    function bx() {
      if (kd) {
        var e = Te.unstable_now();
        oL = e;
        var t = !0;
        try {
          e: {
            Ha = !1, zl && (zl = !1, iL(Ll), Ll = -1), Xd = !0;
            var i = qt;
            try {
              t: {
                for (Vd(e), Sr = Dr(ln); Sr !== null && !(Sr.expirationTime > e && uL());) {
                  var a = Sr.callback;
                  if (typeof a == "function") {
                    Sr.callback = null, qt = Sr.priorityLevel;
                    var u = a(Sr.expirationTime <= e);
                    if (e = Te.unstable_now(), typeof u == "function") {
                      Sr.callback = u, Vd(e), t = !0;
                      break t;
                    }
                    Sr === Dr(ln) && Yd(ln), Vd(e);
                  } else Yd(ln);
                  Sr = Dr(ln);
                }
                if (Sr !== null) t = !0;else {
                  var l = Dr(Hi);
                  l !== null && qx(Ex, l.startTime - e), t = !1;
                }
              }
              break e;
            } finally {
              Sr = null, qt = i, Xd = !1;
            }
            t = void 0;
          }
        } finally {
          t ? Ul() : kd = !1;
        }
      }
    }
    var Ul;
    typeof tL == "function" ? Ul = function Ul() {
      tL(bx);
    } : (typeof MessageChannel === "undefined" ? "undefined" : _typeof(MessageChannel)) < "u" ? (xx = new MessageChannel(), rL = xx.port2, xx.port1.onmessage = bx, Ul = function Ul() {
      rL.postMessage(null);
    }) : Ul = function Ul() {
      nL(bx, 0);
    };
    var xx, rL;
    function Tx() {
      kd || (kd = !0, Ul());
    }
    function qx(e, t) {
      Ll = nL(function () {
        e(Te.unstable_now());
      }, t);
    }
    Te.unstable_IdlePriority = 5;
    Te.unstable_ImmediatePriority = 1;
    Te.unstable_LowPriority = 4;
    Te.unstable_NormalPriority = 3;
    Te.unstable_Profiling = null;
    Te.unstable_UserBlockingPriority = 2;
    Te.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    Te.unstable_continueExecution = function () {
      Ha || Xd || (Ha = !0, Tx());
    };
    Te.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : aL = 0 < e ? Math.floor(1e3 / e) : 5;
    };
    Te.unstable_getCurrentPriorityLevel = function () {
      return qt;
    };
    Te.unstable_getFirstCallbackNode = function () {
      return Dr(ln);
    };
    Te.unstable_next = function (e) {
      switch (qt) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = qt;
      }
      var i = qt;
      qt = t;
      try {
        return e();
      } finally {
        qt = i;
      }
    };
    Te.unstable_pauseExecution = function () {};
    Te.unstable_requestPaint = function () {};
    Te.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var i = qt;
      qt = e;
      try {
        return t();
      } finally {
        qt = i;
      }
    };
    Te.unstable_scheduleCallback = function (e, t, i) {
      var a = Te.unstable_now();
      switch (_typeof(i) == "object" && i !== null ? (i = i.delay, i = typeof i == "number" && 0 < i ? a + i : a) : i = a, e) {
        case 1:
          var u = -1;
          break;
        case 2:
          u = 250;
          break;
        case 5:
          u = 1073741823;
          break;
        case 4:
          u = 1e4;
          break;
        default:
          u = 5e3;
      }
      return u = i + u, e = {
        id: Age++,
        callback: t,
        priorityLevel: e,
        startTime: i,
        expirationTime: u,
        sortIndex: -1
      }, i > a ? (e.sortIndex = i, Sx(Hi, e), Dr(ln) === null && e === Dr(Hi) && (zl ? (iL(Ll), Ll = -1) : zl = !0, qx(Ex, i - a))) : (e.sortIndex = u, Sx(ln, e), Ha || Xd || (Ha = !0, Tx())), e;
    };
    Te.unstable_shouldYield = uL;
    Te.unstable_wrapCallback = function (e) {
      var t = qt;
      return function () {
        var i = qt;
        qt = t;
        try {
          return e.apply(this, arguments);
        } finally {
          qt = i;
        }
      };
    };
  });
  var cL = m(function (u4e, lL) {
    "use strict";

    lL.exports = sL();
  });
  var fL = m(function (s4e, jl) {
    "use strict";

    jl.exports = function (e) {
      function t(r, n, o, s) {
        return new WL(r, n, o, s);
      }
      function i() {}
      function a(r) {
        var n = "https://react.dev/errors/" + r;
        if (1 < arguments.length) {
          n += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var o = 2; o < arguments.length; o++) n += "&args[]=" + encodeURIComponent(arguments[o]);
        }
        return "Minified React error #" + r + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function u(r) {
        return r === null || _typeof(r) != "object" ? null : (r = UE && r[UE] || r["@@iterator"], typeof r == "function" ? r : null);
      }
      function l(r) {
        if (r == null) return null;
        if (typeof r == "function") return r.$$typeof === nj ? null : r.displayName || r.name || null;
        if (typeof r == "string") return r;
        switch (r) {
          case Ja:
            return "Fragment";
          case Wa:
            return "Portal";
          case nm:
            return "Profiler";
          case DE:
            return "StrictMode";
          case am:
            return "Suspense";
          case om:
            return "SuspenseList";
        }
        if (_typeof(r) == "object") switch (r.$$typeof) {
          case ii:
            return (r.displayName || "Context") + ".Provider";
          case PE:
            return (r._context.displayName || "Context") + ".Consumer";
          case im:
            var n = r.render;
            return r = r.displayName, r || (r = n.displayName || n.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case um:
            return n = r.displayName || null, n !== null ? n : l(r.type) || "Memo";
          case ai:
            n = r._payload, r = r._init;
            try {
              return l(r(n));
            } catch (_unused56) {}
        }
        return null;
      }
      function f(r) {
        if (sm === void 0) try {
          throw Error();
        } catch (o) {
          var n = o.stack.trim().match(/\n( *(at )?)/);
          sm = n && n[1] || "", zE = -1 < o.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + sm + r + zE;
      }
      function d(r, n) {
        if (!r || lm) return "";
        lm = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var s = {
            DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {
              try {
                if (n) {
                  var V = function V() {
                    throw Error();
                  };
                  if (Object.defineProperty(V.prototype, "props", {
                    set: function set() {
                      throw Error();
                    }
                  }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(V, []);
                    } catch (re) {
                      var Y = re;
                    }
                    Reflect.construct(r, [], V);
                  } else {
                    try {
                      V.call();
                    } catch (re) {
                      Y = re;
                    }
                    r.call(V.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (re) {
                    Y = re;
                  }
                  (V = r()) && typeof V.catch == "function" && V.catch(function () {});
                }
              } catch (re) {
                if (re && Y && typeof re.stack == "string") return [re.stack, Y.stack];
              }
              return [null, null];
            }
          };
          s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var c = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
          c && c.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot"
          });
          var p = s.DetermineComponentFrameRoot(),
            g = p[0],
            E = p[1];
          if (g && E) {
            var N = g.split("\n"),
              P = E.split("\n");
            for (c = s = 0; s < N.length && !N[s].includes("DetermineComponentFrameRoot");) s++;
            for (; c < P.length && !P[c].includes("DetermineComponentFrameRoot");) c++;
            if (s === N.length || c === P.length) for (s = N.length - 1, c = P.length - 1; 1 <= s && 0 <= c && N[s] !== P[c];) c--;
            for (; 1 <= s && 0 <= c; s--, c--) if (N[s] !== P[c]) {
              if (s !== 1 || c !== 1) do if (s--, c--, 0 > c || N[s] !== P[c]) {
                var F = "\n" + N[s].replace(" at new ", " at ");
                return r.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", r.displayName)), F;
              } while (1 <= s && 0 <= c);
              break;
            }
          }
        } finally {
          lm = !1, Error.prepareStackTrace = o;
        }
        return (o = r ? r.displayName || r.name : "") ? f(o) : "";
      }
      function v(r) {
        switch (r.tag) {
          case 26:
          case 27:
          case 5:
            return f(r.type);
          case 16:
            return f("Lazy");
          case 13:
            return f("Suspense");
          case 19:
            return f("SuspenseList");
          case 0:
          case 15:
            return r = d(r.type, !1), r;
          case 11:
            return r = d(r.type.render, !1), r;
          case 1:
            return r = d(r.type, !0), r;
          default:
            return "";
        }
      }
      function h(r) {
        try {
          var n = "";
          do n += v(r), r = r.return; while (r);
          return n;
        } catch (o) {
          return "\nError generating stack: " + o.message + "\n" + o.stack;
        }
      }
      function y(r) {
        var n = r,
          o = r;
        if (r.alternate) for (; n.return;) n = n.return;else {
          r = n;
          do n = r, n.flags & 4098 && (o = n.return), r = n.return; while (r);
        }
        return n.tag === 3 ? o : null;
      }
      function b(r) {
        if (y(r) !== r) throw Error(a(188));
      }
      function S(r) {
        var n = r.alternate;
        if (!n) {
          if (n = y(r), n === null) throw Error(a(188));
          return n !== r ? null : r;
        }
        for (var o = r, s = n;;) {
          var c = o.return;
          if (c === null) break;
          var p = c.alternate;
          if (p === null) {
            if (s = c.return, s !== null) {
              o = s;
              continue;
            }
            break;
          }
          if (c.child === p.child) {
            for (p = c.child; p;) {
              if (p === o) return b(c), r;
              if (p === s) return b(c), n;
              p = p.sibling;
            }
            throw Error(a(188));
          }
          if (o.return !== s.return) o = c, s = p;else {
            for (var g = !1, E = c.child; E;) {
              if (E === o) {
                g = !0, o = c, s = p;
                break;
              }
              if (E === s) {
                g = !0, s = c, o = p;
                break;
              }
              E = E.sibling;
            }
            if (!g) {
              for (E = p.child; E;) {
                if (E === o) {
                  g = !0, o = p, s = c;
                  break;
                }
                if (E === s) {
                  g = !0, s = p, o = c;
                  break;
                }
                E = E.sibling;
              }
              if (!g) throw Error(a(189));
            }
          }
          if (o.alternate !== s) throw Error(a(190));
        }
        if (o.tag !== 3) throw Error(a(188));
        return o.stateNode.current === o ? r : n;
      }
      function T(r) {
        var n = r.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return r;
        for (r = r.child; r !== null;) {
          if (n = T(r), n !== null) return n;
          r = r.sibling;
        }
        return null;
      }
      function R(r) {
        var n = r.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return r;
        for (r = r.child; r !== null;) {
          if (r.tag !== 4 && (n = R(r), n !== null)) return n;
          r = r.sibling;
        }
        return null;
      }
      function A(r) {
        return {
          current: r
        };
      }
      function _(r) {
        0 > eo || (r.current = mm[eo], mm[eo] = null, eo--);
      }
      function x(r, n) {
        eo++, mm[eo] = r.current, r.current = n;
      }
      function q(r) {
        return r >>>= 0, r === 0 ? 32 : 31 - (g5(r) / b5 | 0) | 0;
      }
      function I(r) {
        var n = r & 42;
        if (n !== 0) return n;
        switch (r & -r) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return r & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return r & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return r;
        }
      }
      function w(r, n) {
        var o = r.pendingLanes;
        if (o === 0) return 0;
        var s = 0,
          c = r.suspendedLanes,
          p = r.pingedLanes,
          g = r.warmLanes;
        r = r.finishedLanes !== 0;
        var E = o & 134217727;
        return E !== 0 ? (o = E & ~c, o !== 0 ? s = I(o) : (p &= E, p !== 0 ? s = I(p) : r || (g = E & ~g, g !== 0 && (s = I(g))))) : (E = o & ~c, E !== 0 ? s = I(E) : p !== 0 ? s = I(p) : r || (g = o & ~g, g !== 0 && (s = I(g)))), s === 0 ? 0 : n !== 0 && n !== s && !(n & c) && (c = s & -s, g = n & -n, c >= g || c === 32 && (g & 4194176) !== 0) ? n : s;
      }
      function B(r, n) {
        return (r.pendingLanes & ~(r.suspendedLanes & ~r.pingedLanes) & n) === 0;
      }
      function U(r, n) {
        switch (r) {
          case 1:
          case 2:
          case 4:
          case 8:
            return n + 250;
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return n + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function k() {
        var r = yc;
        return yc <<= 1, !(yc & 4194176) && (yc = 128), r;
      }
      function ne() {
        var r = gc;
        return gc <<= 1, !(gc & 62914560) && (gc = 4194304), r;
      }
      function He(r) {
        for (var n = [], o = 0; 31 > o; o++) n.push(r);
        return n;
      }
      function he(r, n) {
        r.pendingLanes |= n, n !== 268435456 && (r.suspendedLanes = 0, r.pingedLanes = 0, r.warmLanes = 0);
      }
      function qe(r, n, o, s, c, p) {
        var g = r.pendingLanes;
        r.pendingLanes = o, r.suspendedLanes = 0, r.pingedLanes = 0, r.warmLanes = 0, r.expiredLanes &= o, r.entangledLanes &= o, r.errorRecoveryDisabledLanes &= o, r.shellSuspendCounter = 0;
        var E = r.entanglements,
          N = r.expirationTimes,
          P = r.hiddenUpdates;
        for (o = g & ~o; 0 < o;) {
          var F = 31 - tr(o),
            V = 1 << F;
          E[F] = 0, N[F] = -1;
          var Y = P[F];
          if (Y !== null) for (P[F] = null, F = 0; F < Y.length; F++) {
            var re = Y[F];
            re !== null && (re.lane &= -536870913);
          }
          o &= ~V;
        }
        s !== 0 && ce(r, s, 0), p !== 0 && c === 0 && r.tag !== 0 && (r.suspendedLanes |= p & ~(g & ~n));
      }
      function ce(r, n, o) {
        r.pendingLanes |= n, r.suspendedLanes &= ~n;
        var s = 31 - tr(n);
        r.entangledLanes |= n, r.entanglements[s] = r.entanglements[s] | 1073741824 | o & 4194218;
      }
      function Me(r, n) {
        var o = r.entangledLanes |= n;
        for (r = r.entanglements; o;) {
          var s = 31 - tr(o),
            c = 1 << s;
          c & n | r[s] & n && (r[s] |= n), o &= ~c;
        }
      }
      function Ir(r) {
        return r &= -r, 2 < r ? 8 < r ? r & 134217727 ? 32 : 268435456 : 8 : 2;
      }
      function cn(r) {
        if (rr && typeof rr.onCommitFiberRoot == "function") try {
          rr.onCommitFiberRoot(Xu, r, void 0, (r.current.flags & 128) === 128);
        } catch (_unused57) {}
      }
      function It(r) {
        if (typeof q5 == "function" && A5(r), rr && typeof rr.setStrictMode == "function") try {
          rr.setStrictMode(Xu, r);
        } catch (_unused58) {}
      }
      function Ga(r, n) {
        return r === n && (r !== 0 || 1 / r === 1 / n) || r !== r && n !== n;
      }
      function lt(r, n) {
        if (_typeof(r) == "object" && r !== null) {
          var o = c1.get(r);
          return o !== void 0 ? o : (n = {
            value: r,
            source: n,
            stack: h(n)
          }, c1.set(r, n), n);
        }
        return {
          value: r,
          source: n,
          stack: h(n)
        };
      }
      function j(r, n) {
        ro[no++] = Sc, ro[no++] = xc, xc = r, Sc = n;
      }
      function K(r, n, o) {
        fr[pr++] = gn, fr[pr++] = bn, fr[pr++] = $i, $i = r;
        var s = gn;
        r = bn;
        var c = 32 - tr(s) - 1;
        s &= ~(1 << c), o += 1;
        var p = 32 - tr(n) + c;
        if (30 < p) {
          var g = c - c % 5;
          p = (s & (1 << g) - 1).toString(32), s >>= g, c -= g, gn = 1 << 32 - tr(n) + c | o << c | s, bn = p + r;
        } else gn = 1 << p | o << c | s, bn = r;
      }
      function H(r) {
        r.return !== null && (j(r, 1), K(r, 1, 0));
      }
      function G(r) {
        for (; r === xc;) xc = ro[--no], ro[no] = null, Sc = ro[--no], ro[no] = null;
        for (; r === $i;) $i = fr[--pr], fr[pr] = null, bn = fr[--pr], fr[pr] = null, gn = fr[--pr], fr[pr] = null;
      }
      function Kl(r, n) {
        x(ui, n), x(ku, r), x(ft, null), r = oj(n), _(ft), x(ft, r);
      }
      function Ka() {
        _(ft), _(ku), _(ui);
      }
      function Wd(r) {
        r.memoizedState !== null && x(Ec, r);
        var n = ft.current,
          o = uj(n, r.type);
        n !== o && (x(ku, r), x(ft, o));
      }
      function Vl(r) {
        ku.current === r && (_(ft), _(ku)), Ec.current === r && (_(Ec), yn ? Ji._currentValue = $a : Ji._currentValue2 = $a);
      }
      function Ki(r) {
        var n = Error(a(418, ""));
        throw Ru(lt(n, r)), gm;
      }
      function Nx(r, n) {
        if (!lr) throw Error(a(175));
        e5(r.stateNode, r.type, r.memoizedProps, n, r) || Ki(r);
      }
      function Rx(r) {
        for (_t = r.return; _t;) switch (_t.tag) {
          case 3:
          case 27:
            zr = !0;
            return;
          case 5:
          case 13:
            zr = !1;
            return;
          default:
            _t = _t.return;
        }
      }
      function wu(r) {
        if (!lr || r !== _t) return !1;
        if (!pe) return Rx(r), pe = !0, !1;
        var n = !1;
        if (Et ? r.tag !== 3 && r.tag !== 27 && (r.tag !== 5 || $E(r.type) && !hc(r.type, r.memoizedProps)) && (n = !0) : r.tag !== 3 && (r.tag !== 5 || $E(r.type) && !hc(r.type, r.memoizedProps)) && (n = !0), n && Tt && Ki(r), Rx(r), r.tag === 13) {
          if (!lr) throw Error(a(316));
          if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(a(317));
          Tt = n5(r);
        } else Tt = _t ? WE(r.stateNode) : null;
        return !0;
      }
      function Nu() {
        lr && (Tt = _t = null, pe = !1);
      }
      function Ru(r) {
        Ar === null ? Ar = [r] : Ar.push(r);
      }
      function Yl() {
        for (var r = io, n = bm = io = 0; n < r;) {
          var o = dr[n];
          dr[n++] = null;
          var s = dr[n];
          dr[n++] = null;
          var c = dr[n];
          dr[n++] = null;
          var p = dr[n];
          if (dr[n++] = null, s !== null && c !== null) {
            var g = s.pending;
            g === null ? c.next = c : (c.next = g.next, g.next = c), s.pending = c;
          }
          p !== 0 && Cx(o, c, p);
        }
      }
      function Xl(r, n, o, s) {
        dr[io++] = r, dr[io++] = n, dr[io++] = o, dr[io++] = s, bm |= s, r.lanes |= s, r = r.alternate, r !== null && (r.lanes |= s);
      }
      function Jd(r, n, o, s) {
        return Xl(r, n, o, s), kl(r);
      }
      function kn(r, n) {
        return Xl(r, null, null, n), kl(r);
      }
      function Cx(r, n, o) {
        r.lanes |= o;
        var s = r.alternate;
        s !== null && (s.lanes |= o);
        for (var c = !1, p = r.return; p !== null;) p.childLanes |= o, s = p.alternate, s !== null && (s.childLanes |= o), p.tag === 22 && (r = p.stateNode, r === null || r._visibility & 1 || (c = !0)), r = p, p = p.return;
        c && n !== null && r.tag === 3 && (p = r.stateNode, c = 31 - tr(o), p = p.hiddenUpdates, r = p[c], r === null ? p[c] = [n] : r.push(n), n.lane = o | 536870912);
      }
      function kl(r) {
        if (50 < ns) throw ns = 0, Pm = null, Error(a(185));
        for (var n = r.return; n !== null;) r = n, n = r.return;
        return r.tag === 3 ? r.stateNode : null;
      }
      function Ur(r) {
        r !== ao && r.next === null && (ao === null ? Tc = ao = r : ao = ao.next = r), qc = !0, xm || (xm = !0, wL(OL));
      }
      function Va(r, n) {
        if (!Sm && qc) {
          Sm = !0;
          do for (var o = !1, s = Tc; s !== null;) {
            if (!n) if (r !== 0) {
              var c = s.pendingLanes;
              if (c === 0) var p = 0;else {
                var g = s.suspendedLanes,
                  E = s.pingedLanes;
                p = (1 << 31 - tr(42 | r) + 1) - 1, p &= c & ~(g & ~E), p = p & 201326677 ? p & 201326677 | 1 : p ? p | 2 : 0;
              }
              p !== 0 && (o = !0, Dx(s, p));
            } else p = fe, p = w(s, s === Ae ? p : 0), !(p & 3) || B(s, p) || (o = !0, Dx(s, p));
            s = s.next;
          } while (o);
          Sm = !1;
        }
      }
      function OL() {
        qc = xm = !1;
        var r = 0;
        oo !== 0 && (mj() && (r = oo), oo = 0);
        for (var n = qr(), o = null, s = Tc; s !== null;) {
          var c = s.next,
            p = Mx(s, n);
          p === 0 ? (s.next = null, o === null ? Tc = c : o.next = c, c === null && (ao = o)) : (o = s, (r !== 0 || p & 3) && (qc = !0)), s = c;
        }
        Va(r, !1);
      }
      function Mx(r, n) {
        for (var o = r.suspendedLanes, s = r.pingedLanes, c = r.expirationTimes, p = r.pendingLanes & -62914561; 0 < p;) {
          var g = 31 - tr(p),
            E = 1 << g,
            N = c[g];
          N === -1 ? (!(E & o) || E & s) && (c[g] = U(E, n)) : N <= n && (r.expiredLanes |= E), p &= ~E;
        }
        if (n = Ae, o = fe, o = w(r, r === n ? o : 0), s = r.callbackNode, o === 0 || r === n && _e === 2 || r.cancelPendingCommit !== null) return s !== null && s !== null && hm(s), r.callbackNode = null, r.callbackPriority = 0;
        if (!(o & 3) || B(r, o)) {
          if (n = o & -o, n === r.callbackPriority) return n;
          switch (s !== null && hm(s), Ir(o)) {
            case 2:
            case 8:
              o = E5;
              break;
            case 32:
              o = ym;
              break;
            case 268435456:
              o = T5;
              break;
            default:
              o = ym;
          }
          return s = Bx.bind(null, r), o = bc(o, s), r.callbackPriority = n, r.callbackNode = o, n;
        }
        return s !== null && s !== null && hm(s), r.callbackPriority = 2, r.callbackNode = null, 2;
      }
      function Bx(r, n) {
        var o = r.callbackNode;
        if (Qi() && r.callbackNode !== o) return null;
        var s = fe;
        return s = w(r, r === Ae ? s : 0), s === 0 ? null : (dE(r, s, n), Mx(r, qr()), r.callbackNode != null && r.callbackNode === o ? Bx.bind(null, r) : null);
      }
      function Dx(r, n) {
        if (Qi()) return null;
        dE(r, n, !0);
      }
      function wL(r) {
        Sj ? Ej(function () {
          be & 6 ? bc(l1, r) : r();
        }) : bc(l1, r);
      }
      function $d() {
        return oo === 0 && (oo = k()), oo;
      }
      function NL(r, n) {
        if (Qu === null) {
          var o = Qu = [];
          Em = 0, uo = $d(), so = {
            status: "pending",
            value: void 0,
            then: function then(s) {
              o.push(s);
            }
          };
        }
        return Em++, n.then(Px, Px), n;
      }
      function Px() {
        if (--Em === 0 && Qu !== null) {
          so !== null && (so.status = "fulfilled");
          var r = Qu;
          Qu = null, uo = 0, so = null;
          for (var n = 0; n < r.length; n++) (0, r[n])();
        }
      }
      function RL(r, n) {
        var o = [],
          s = {
            status: "pending",
            value: null,
            reason: null,
            then: function then(c) {
              o.push(c);
            }
          };
        return r.then(function () {
          s.status = "fulfilled", s.value = n;
          for (var c = 0; c < o.length; c++) (0, o[c])(n);
        }, function (c) {
          for (s.status = "rejected", s.reason = c, c = 0; c < o.length; c++) (0, o[c])(void 0);
        }), s;
      }
      function ev(r) {
        r.updateQueue = {
          baseState: r.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            lanes: 0,
            hiddenCallbacks: null
          },
          callbacks: null
        };
      }
      function tv(r, n) {
        r = r.updateQueue, n.updateQueue === r && (n.updateQueue = {
          baseState: r.baseState,
          firstBaseUpdate: r.firstBaseUpdate,
          lastBaseUpdate: r.lastBaseUpdate,
          shared: r.shared,
          callbacks: null
        });
      }
      function Qn(r) {
        return {
          lane: r,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Zn(r, n, o) {
        var s = r.updateQueue;
        if (s === null) return null;
        if (s = s.shared, be & 2) {
          var c = s.pending;
          return c === null ? n.next = n : (n.next = c.next, c.next = n), s.pending = n, n = kl(r), Cx(r, null, o), n;
        }
        return Xl(r, s, n, o), kl(r);
      }
      function Cu(r, n, o) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194176) !== 0)) {
          var s = n.lanes;
          s &= r.pendingLanes, o |= s, n.lanes = o, Me(r, o);
        }
      }
      function rv(r, n) {
        var o = r.updateQueue,
          s = r.alternate;
        if (s !== null && (s = s.updateQueue, o === s)) {
          var c = null,
            p = null;
          if (o = o.firstBaseUpdate, o !== null) {
            do {
              var g = {
                lane: o.lane,
                tag: o.tag,
                payload: o.payload,
                callback: null,
                next: null
              };
              p === null ? c = p = g : p = p.next = g, o = o.next;
            } while (o !== null);
            p === null ? c = p = n : p = p.next = n;
          } else c = p = n;
          o = {
            baseState: s.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: p,
            shared: s.shared,
            callbacks: s.callbacks
          }, r.updateQueue = o;
          return;
        }
        r = o.lastBaseUpdate, r === null ? o.firstBaseUpdate = n : r.next = n, o.lastBaseUpdate = n;
      }
      function Mu() {
        if (Tm) {
          var r = so;
          if (r !== null) throw r;
        }
      }
      function Bu(r, n, o, s) {
        Tm = !1;
        var c = r.updateQueue;
        si = !1;
        var p = c.firstBaseUpdate,
          g = c.lastBaseUpdate,
          E = c.shared.pending;
        if (E !== null) {
          c.shared.pending = null;
          var N = E,
            P = N.next;
          N.next = null, g === null ? p = P : g.next = P, g = N;
          var F = r.alternate;
          F !== null && (F = F.updateQueue, E = F.lastBaseUpdate, E !== g && (E === null ? F.firstBaseUpdate = P : E.next = P, F.lastBaseUpdate = N));
        }
        if (p !== null) {
          var V = c.baseState;
          g = 0, F = P = N = null, E = p;
          do {
            var Y = E.lane & -536870913,
              re = Y !== E.lane;
            if (re ? (fe & Y) === Y : (s & Y) === Y) {
              Y !== 0 && Y === uo && (Tm = !0), F !== null && (F = F.next = {
                lane: 0,
                tag: E.tag,
                payload: E.payload,
                callback: null,
                next: null
              });
              e: {
                var hr = r,
                  is = E;
                Y = n;
                var sa = o;
                switch (is.tag) {
                  case 1:
                    if (hr = is.payload, typeof hr == "function") {
                      V = hr.call(sa, V, Y);
                      break e;
                    }
                    V = hr;
                    break e;
                  case 3:
                    hr.flags = hr.flags & -65537 | 128;
                  case 0:
                    if (hr = is.payload, Y = typeof hr == "function" ? hr.call(sa, V, Y) : hr, Y == null) break e;
                    V = rm({}, V, Y);
                    break e;
                  case 2:
                    si = !0;
                }
              }
              Y = E.callback, Y !== null && (r.flags |= 64, re && (r.flags |= 8192), re = c.callbacks, re === null ? c.callbacks = [Y] : re.push(Y));
            } else re = {
              lane: Y,
              tag: E.tag,
              payload: E.payload,
              callback: E.callback,
              next: null
            }, F === null ? (P = F = re, N = V) : F = F.next = re, g |= Y;
            if (E = E.next, E === null) {
              if (E = c.shared.pending, E === null) break;
              re = E, E = re.next, re.next = null, c.lastBaseUpdate = re, c.shared.pending = null;
            }
          } while (!0);
          F === null && (N = V), c.baseState = N, c.firstBaseUpdate = P, c.lastBaseUpdate = F, p === null && (c.shared.lanes = 0), fi |= g, r.lanes = g, r.memoizedState = V;
        }
      }
      function Ix(r, n) {
        if (typeof r != "function") throw Error(a(191, r));
        r.call(n);
      }
      function Ux(r, n) {
        var o = r.callbacks;
        if (o !== null) for (r.callbacks = null, r = 0; r < o.length; r++) Ix(o[r], n);
      }
      function Ql(r, n) {
        if (nr(r, n)) return !0;
        if (_typeof(r) != "object" || r === null || _typeof(n) != "object" || n === null) return !1;
        var o = Object.keys(r),
          s = Object.keys(n);
        if (o.length !== s.length) return !1;
        for (s = 0; s < o.length; s++) {
          var c = o[s];
          if (!_5.call(n, c) || !nr(r[c], n[c])) return !1;
        }
        return !0;
      }
      function zx(r) {
        return r = r.status, r === "fulfilled" || r === "rejected";
      }
      function Zl() {}
      function Lx(r, n, o) {
        switch (o = r[o], o === void 0 ? r.push(n) : o !== n && (n.then(Zl, Zl), n = o), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw r = n.reason, r === Zu ? Error(a(483)) : r;
          default:
            if (typeof n.status == "string") n.then(Zl, Zl);else {
              if (r = Ae, r !== null && 100 < r.shellSuspendCounter) throw Error(a(482));
              r = n, r.status = "pending", r.then(function (s) {
                if (n.status === "pending") {
                  var c = n;
                  c.status = "fulfilled", c.value = s;
                }
              }, function (s) {
                if (n.status === "pending") {
                  var c = n;
                  c.status = "rejected", c.reason = s;
                }
              });
            }
            switch (n.status) {
              case "fulfilled":
                return n.value;
              case "rejected":
                throw r = n.reason, r === Zu ? Error(a(483)) : r;
            }
            throw lo = n, Zu;
        }
      }
      function jx() {
        if (lo === null) throw Error(a(459));
        var r = lo;
        return lo = null, r;
      }
      function Wl(r) {
        var n = Wu;
        return Wu += 1, co === null && (co = []), Lx(co, r, n);
      }
      function Du(r, n) {
        n = n.props.ref, r.ref = n !== void 0 ? n : null;
      }
      function Jl(r, n) {
        throw n.$$typeof === ej ? Error(a(525)) : (r = Object.prototype.toString.call(n), Error(a(31, r === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : r)));
      }
      function Fx(r) {
        var n = r._init;
        return n(r._payload);
      }
      function Hx(r) {
        function n(C, O) {
          if (r) {
            var M = C.deletions;
            M === null ? (C.deletions = [O], C.flags |= 16) : M.push(O);
          }
        }
        function o(C, O) {
          if (!r) return null;
          for (; O !== null;) n(C, O), O = O.sibling;
          return null;
        }
        function s(C) {
          for (var O = new Map(); C !== null;) C.key !== null ? O.set(C.key, C) : O.set(C.index, C), C = C.sibling;
          return O;
        }
        function c(C, O) {
          return C = ni(C, O), C.index = 0, C.sibling = null, C;
        }
        function p(C, O, M) {
          return C.index = M, r ? (M = C.alternate, M !== null ? (M = M.index, M < O ? (C.flags |= 33554434, O) : M) : (C.flags |= 33554434, O)) : (C.flags |= 1048576, O);
        }
        function g(C) {
          return r && C.alternate === null && (C.flags |= 33554434), C;
        }
        function E(C, O, M, L) {
          return O === null || O.tag !== 6 ? (O = $v(M, C.mode, L), O.return = C, O) : (O = c(O, M), O.return = C, O);
        }
        function N(C, O, M, L) {
          var Z = M.type;
          return Z === Ja ? F(C, O, M.props.children, L, M.key) : O !== null && (O.elementType === Z || _typeof(Z) == "object" && Z !== null && Z.$$typeof === ai && Fx(Z) === O.type) ? (O = c(O, M.props), Du(O, M), O.return = C, O) : (O = dc(M.type, M.key, M.props, null, C.mode, L), Du(O, M), O.return = C, O);
        }
        function P(C, O, M, L) {
          return O === null || O.tag !== 4 || O.stateNode.containerInfo !== M.containerInfo || O.stateNode.implementation !== M.implementation ? (O = em(M, C.mode, L), O.return = C, O) : (O = c(O, M.children || []), O.return = C, O);
        }
        function F(C, O, M, L, Z) {
          return O === null || O.tag !== 7 ? (O = Zi(M, C.mode, L, Z), O.return = C, O) : (O = c(O, M), O.return = C, O);
        }
        function V(C, O, M) {
          if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return O = $v("" + O, C.mode, M), O.return = C, O;
          if (_typeof(O) == "object" && O !== null) {
            switch (O.$$typeof) {
              case vc:
                return M = dc(O.type, O.key, O.props, null, C.mode, M), Du(M, O), M.return = C, M;
              case Wa:
                return O = em(O, C.mode, M), O.return = C, O;
              case ai:
                var L = O._init;
                return O = L(O._payload), V(C, O, M);
            }
            if (mc(O) || u(O)) return O = Zi(O, C.mode, M, null), O.return = C, O;
            if (typeof O.then == "function") return V(C, Wl(O), M);
            if (O.$$typeof === ii) return V(C, uc(C, O), M);
            Jl(C, O);
          }
          return null;
        }
        function Y(C, O, M, L) {
          var Z = O !== null ? O.key : null;
          if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return Z !== null ? null : E(C, O, "" + M, L);
          if (_typeof(M) == "object" && M !== null) {
            switch (M.$$typeof) {
              case vc:
                return M.key === Z ? N(C, O, M, L) : null;
              case Wa:
                return M.key === Z ? P(C, O, M, L) : null;
              case ai:
                return Z = M._init, M = Z(M._payload), Y(C, O, M, L);
            }
            if (mc(M) || u(M)) return Z !== null ? null : F(C, O, M, L, null);
            if (typeof M.then == "function") return Y(C, O, Wl(M), L);
            if (M.$$typeof === ii) return Y(C, O, uc(C, M), L);
            Jl(C, M);
          }
          return null;
        }
        function re(C, O, M, L, Z) {
          if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return C = C.get(M) || null, E(O, C, "" + L, Z);
          if (_typeof(L) == "object" && L !== null) {
            switch (L.$$typeof) {
              case vc:
                return C = C.get(L.key === null ? M : L.key) || null, N(O, C, L, Z);
              case Wa:
                return C = C.get(L.key === null ? M : L.key) || null, P(O, C, L, Z);
              case ai:
                var Oe = L._init;
                return L = Oe(L._payload), re(C, O, M, L, Z);
            }
            if (mc(L) || u(L)) return C = C.get(M) || null, F(O, C, L, Z, null);
            if (typeof L.then == "function") return re(C, O, M, Wl(L), Z);
            if (L.$$typeof === ii) return re(C, O, M, uc(O, L), Z);
            Jl(O, L);
          }
          return null;
        }
        function hr(C, O, M, L) {
          for (var Z = null, Oe = null, $ = O, de = O = 0, nt = null; $ !== null && de < M.length; de++) {
            $.index > de ? (nt = $, $ = null) : nt = $.sibling;
            var ve = Y(C, $, M[de], L);
            if (ve === null) {
              $ === null && ($ = nt);
              break;
            }
            r && $ && ve.alternate === null && n(C, $), O = p(ve, O, de), Oe === null ? Z = ve : Oe.sibling = ve, Oe = ve, $ = nt;
          }
          if (de === M.length) return o(C, $), pe && j(C, de), Z;
          if ($ === null) {
            for (; de < M.length; de++) $ = V(C, M[de], L), $ !== null && (O = p($, O, de), Oe === null ? Z = $ : Oe.sibling = $, Oe = $);
            return pe && j(C, de), Z;
          }
          for ($ = s($); de < M.length; de++) nt = re($, C, de, M[de], L), nt !== null && (r && nt.alternate !== null && $.delete(nt.key === null ? de : nt.key), O = p(nt, O, de), Oe === null ? Z = nt : Oe.sibling = nt, Oe = nt);
          return r && $.forEach(function (di) {
            return n(C, di);
          }), pe && j(C, de), Z;
        }
        function is(C, O, M, L) {
          if (M == null) throw Error(a(151));
          for (var Z = null, Oe = null, $ = O, de = O = 0, nt = null, ve = M.next(); $ !== null && !ve.done; de++, ve = M.next()) {
            $.index > de ? (nt = $, $ = null) : nt = $.sibling;
            var di = Y(C, $, ve.value, L);
            if (di === null) {
              $ === null && ($ = nt);
              break;
            }
            r && $ && di.alternate === null && n(C, $), O = p(di, O, de), Oe === null ? Z = di : Oe.sibling = di, Oe = di, $ = nt;
          }
          if (ve.done) return o(C, $), pe && j(C, de), Z;
          if ($ === null) {
            for (; !ve.done; de++, ve = M.next()) ve = V(C, ve.value, L), ve !== null && (O = p(ve, O, de), Oe === null ? Z = ve : Oe.sibling = ve, Oe = ve);
            return pe && j(C, de), Z;
          }
          for ($ = s($); !ve.done; de++, ve = M.next()) ve = re($, C, de, ve.value, L), ve !== null && (r && ve.alternate !== null && $.delete(ve.key === null ? de : ve.key), O = p(ve, O, de), Oe === null ? Z = ve : Oe.sibling = ve, Oe = ve);
          return r && $.forEach(function (B5) {
            return n(C, B5);
          }), pe && j(C, de), Z;
        }
        function sa(C, O, M, L) {
          if (_typeof(M) == "object" && M !== null && M.type === Ja && M.key === null && (M = M.props.children), _typeof(M) == "object" && M !== null) {
            switch (M.$$typeof) {
              case vc:
                e: {
                  for (var Z = M.key; O !== null;) {
                    if (O.key === Z) {
                      if (Z = M.type, Z === Ja) {
                        if (O.tag === 7) {
                          o(C, O.sibling), L = c(O, M.props.children), L.return = C, C = L;
                          break e;
                        }
                      } else if (O.elementType === Z || _typeof(Z) == "object" && Z !== null && Z.$$typeof === ai && Fx(Z) === O.type) {
                        o(C, O.sibling), L = c(O, M.props), Du(L, M), L.return = C, C = L;
                        break e;
                      }
                      o(C, O);
                      break;
                    } else n(C, O);
                    O = O.sibling;
                  }
                  M.type === Ja ? (L = Zi(M.props.children, C.mode, L, M.key), L.return = C, C = L) : (L = dc(M.type, M.key, M.props, null, C.mode, L), Du(L, M), L.return = C, C = L);
                }
                return g(C);
              case Wa:
                e: {
                  for (Z = M.key; O !== null;) {
                    if (O.key === Z) {
                      if (O.tag === 4 && O.stateNode.containerInfo === M.containerInfo && O.stateNode.implementation === M.implementation) {
                        o(C, O.sibling), L = c(O, M.children || []), L.return = C, C = L;
                        break e;
                      } else {
                        o(C, O);
                        break;
                      }
                    } else n(C, O);
                    O = O.sibling;
                  }
                  L = em(M, C.mode, L), L.return = C, C = L;
                }
                return g(C);
              case ai:
                return Z = M._init, M = Z(M._payload), sa(C, O, M, L);
            }
            if (mc(M)) return hr(C, O, M, L);
            if (u(M)) {
              if (Z = u(M), typeof Z != "function") throw Error(a(150));
              return M = Z.call(M), is(C, O, M, L);
            }
            if (typeof M.then == "function") return sa(C, O, Wl(M), L);
            if (M.$$typeof === ii) return sa(C, O, uc(C, M), L);
            Jl(C, M);
          }
          return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, O !== null && O.tag === 6 ? (o(C, O.sibling), L = c(O, M), L.return = C, C = L) : (o(C, O), L = $v(M, C.mode, L), L.return = C, C = L), g(C)) : o(C, O);
        }
        return function (C, O, M, L) {
          try {
            Wu = 0;
            var Z = sa(C, O, M, L);
            return co = null, Z;
          } catch ($) {
            if ($ === Zu) throw $;
            var Oe = t(29, $, null, C.mode);
            return Oe.lanes = L, Oe.return = C, Oe;
          } finally {}
        };
      }
      function Gx(r, n) {
        r = Tn, x(_c, r), x(fo, n), Tn = r | n.baseLanes;
      }
      function nv() {
        x(_c, Tn), x(fo, fo.current);
      }
      function iv() {
        Tn = _c.current, _(fo), _(_c);
      }
      function Wn(r) {
        var n = r.alternate;
        x(Ze, Ze.current & 1), x(vr, r), Lr === null && (n === null || fo.current !== null || n.memoizedState !== null) && (Lr = r);
      }
      function Kx(r) {
        if (r.tag === 22) {
          if (x(Ze, Ze.current), x(vr, r), Lr === null) {
            var n = r.alternate;
            n !== null && n.memoizedState !== null && (Lr = r);
          }
        } else Jn(r);
      }
      function Jn() {
        x(Ze, Ze.current), x(vr, vr.current);
      }
      function fn(r) {
        _(vr), Lr === r && (Lr = null), _(Ze);
      }
      function $l(r) {
        for (var n = r; n !== null;) {
          if (n.tag === 13) {
            var o = n.memoizedState;
            if (o !== null && (o = o.dehydrated, o === null || pm(o) || dm(o))) return n;
          } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if (n.flags & 128) return n;
          } else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === r) break;
          for (; n.sibling === null;) {
            if (n.return === null || n.return === r) return null;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
        return null;
      }
      function je() {
        throw Error(a(321));
      }
      function av(r, n) {
        if (n === null) return !1;
        for (var o = 0; o < n.length && o < r.length; o++) if (!nr(r[o], n[o])) return !1;
        return !0;
      }
      function ov(r, n, o, s, c, p) {
        return li = p, ae = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ee.H = r === null || r.memoizedState === null ? ra : ci, ta = !1, p = o(s, c), ta = !1, po && (p = Yx(n, o, s, c)), Vx(r), p;
      }
      function Vx(r) {
        ee.H = jr;
        var n = ge !== null && ge.next !== null;
        if (li = 0, Ke = ge = ae = null, Oc = !1, Ju = 0, vo = null, n) throw Error(a(300));
        r === null || tt || (r = r.dependencies, r !== null && oc(r) && (tt = !0));
      }
      function Yx(r, n, o, s) {
        ae = r;
        var c = 0;
        do {
          if (po && (vo = null), Ju = 0, po = !1, 25 <= c) throw Error(a(301));
          if (c += 1, Ke = ge = null, r.updateQueue != null) {
            var p = r.updateQueue;
            p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
          }
          ee.H = na, p = n(o, s);
        } while (po);
        return p;
      }
      function CL() {
        var r = ee.H,
          n = r.useState()[0];
        return n = typeof n.then == "function" ? Pu(n) : n, r = r.useState()[0], (ge !== null ? ge.memoizedState : null) !== r && (ae.flags |= 1024), n;
      }
      function uv() {
        var r = wc !== 0;
        return wc = 0, r;
      }
      function sv(r, n, o) {
        n.updateQueue = r.updateQueue, n.flags &= -2053, r.lanes &= ~o;
      }
      function lv(r) {
        if (Oc) {
          for (r = r.memoizedState; r !== null;) {
            var n = r.queue;
            n !== null && (n.pending = null), r = r.next;
          }
          Oc = !1;
        }
        li = 0, Ke = ge = ae = null, po = !1, Ju = wc = 0, vo = null;
      }
      function Ut() {
        var r = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Ke === null ? ae.memoizedState = Ke = r : Ke = Ke.next = r, Ke;
      }
      function Ge() {
        if (ge === null) {
          var r = ae.alternate;
          r = r !== null ? r.memoizedState : null;
        } else r = ge.next;
        var n = Ke === null ? ae.memoizedState : Ke.next;
        if (n !== null) Ke = n, ge = r;else {
          if (r === null) throw ae.alternate === null ? Error(a(467)) : Error(a(310));
          ge = r, r = {
            memoizedState: ge.memoizedState,
            baseState: ge.baseState,
            baseQueue: ge.baseQueue,
            queue: ge.queue,
            next: null
          }, Ke === null ? ae.memoizedState = Ke = r : Ke = Ke.next = r;
        }
        return Ke;
      }
      function Pu(r) {
        var n = Ju;
        return Ju += 1, vo === null && (vo = []), r = Lx(vo, r, n), n = ae, (Ke === null ? n.memoizedState : Ke.next) === null && (n = n.alternate, ee.H = n === null || n.memoizedState === null ? ra : ci), r;
      }
      function ec(r) {
        if (r !== null && _typeof(r) == "object") {
          if (typeof r.then == "function") return Pu(r);
          if (r.$$typeof === ii) return xt(r);
        }
        throw Error(a(438, String(r)));
      }
      function cv(r) {
        var n = null,
          o = ae.updateQueue;
        if (o !== null && (n = o.memoCache), n == null) {
          var s = ae.alternate;
          s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (n = {
            data: s.data.map(function (c) {
              return c.slice();
            }),
            index: 0
          })));
        }
        if (n == null && (n = {
          data: [],
          index: 0
        }), o === null && (o = Am(), ae.updateQueue = o), o.memoCache = n, o = n.data[n.index], o === void 0) for (o = n.data[n.index] = Array(r), s = 0; s < r; s++) o[s] = rj;
        return n.index++, o;
      }
      function pn(r, n) {
        return typeof n == "function" ? n(r) : n;
      }
      function tc(r) {
        var n = Ge();
        return fv(n, ge, r);
      }
      function fv(r, n, o) {
        var s = r.queue;
        if (s === null) throw Error(a(311));
        s.lastRenderedReducer = o;
        var c = r.baseQueue,
          p = s.pending;
        if (p !== null) {
          if (c !== null) {
            var g = c.next;
            c.next = p.next, p.next = g;
          }
          n.baseQueue = c = p, s.pending = null;
        }
        if (p = r.baseState, c === null) r.memoizedState = p;else {
          n = c.next;
          var E = g = null,
            N = null,
            P = n,
            F = !1;
          do {
            var V = P.lane & -536870913;
            if (V !== P.lane ? (fe & V) === V : (li & V) === V) {
              var Y = P.revertLane;
              if (Y === 0) N !== null && (N = N.next = {
                lane: 0,
                revertLane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              }), V === uo && (F = !0);else if ((li & Y) === Y) {
                P = P.next, Y === uo && (F = !0);
                continue;
              } else V = {
                lane: 0,
                revertLane: P.revertLane,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              }, N === null ? (E = N = V, g = p) : N = N.next = V, ae.lanes |= Y, fi |= Y;
              V = P.action, ta && o(p, V), p = P.hasEagerState ? P.eagerState : o(p, V);
            } else Y = {
              lane: V,
              revertLane: P.revertLane,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }, N === null ? (E = N = Y, g = p) : N = N.next = Y, ae.lanes |= V, fi |= V;
            P = P.next;
          } while (P !== null && P !== n);
          if (N === null ? g = p : N.next = E, !nr(p, r.memoizedState) && (tt = !0, F && (o = so, o !== null))) throw o;
          r.memoizedState = p, r.baseState = g, r.baseQueue = N, s.lastRenderedState = p;
        }
        return c === null && (s.lanes = 0), [r.memoizedState, s.dispatch];
      }
      function pv(r) {
        var n = Ge(),
          o = n.queue;
        if (o === null) throw Error(a(311));
        o.lastRenderedReducer = r;
        var s = o.dispatch,
          c = o.pending,
          p = n.memoizedState;
        if (c !== null) {
          o.pending = null;
          var g = c = c.next;
          do p = r(p, g.action), g = g.next; while (g !== c);
          nr(p, n.memoizedState) || (tt = !0), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), o.lastRenderedState = p;
        }
        return [p, s];
      }
      function Xx(r, n, o) {
        var s = ae,
          c = Ge(),
          p = pe;
        if (p) {
          if (o === void 0) throw Error(a(407));
          o = o();
        } else o = n();
        var g = !nr((ge || c).memoizedState, o);
        if (g && (c.memoizedState = o, tt = !0), c = c.queue, mv(Zx.bind(null, s, c, r), [r]), c.getSnapshot !== n || g || Ke !== null && Ke.memoizedState.tag & 1) {
          if (s.flags |= 2048, Ya(9, Qx.bind(null, s, c, o, n), {
            destroy: void 0
          }, null), Ae === null) throw Error(a(349));
          p || li & 60 || kx(s, n, o);
        }
        return o;
      }
      function kx(r, n, o) {
        r.flags |= 16384, r = {
          getSnapshot: n,
          value: o
        }, n = ae.updateQueue, n === null ? (n = Am(), ae.updateQueue = n, n.stores = [r]) : (o = n.stores, o === null ? n.stores = [r] : o.push(r));
      }
      function Qx(r, n, o, s) {
        n.value = o, n.getSnapshot = s, Wx(n) && Jx(r);
      }
      function Zx(r, n, o) {
        return o(function () {
          Wx(n) && Jx(r);
        });
      }
      function Wx(r) {
        var n = r.getSnapshot;
        r = r.value;
        try {
          var o = n();
          return !nr(r, o);
        } catch (_unused59) {
          return !0;
        }
      }
      function Jx(r) {
        var n = kn(r, 2);
        n !== null && At(n, r, 2);
      }
      function dv(r) {
        var n = Ut();
        if (typeof r == "function") {
          var o = r;
          if (r = o(), ta) {
            It(!0);
            try {
              o();
            } finally {
              It(!1);
            }
          }
        }
        return n.memoizedState = n.baseState = r, n.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: pn,
          lastRenderedState: r
        }, n;
      }
      function $x(r, n, o, s) {
        return r.baseState = o, fv(r, ge, typeof s == "function" ? s : pn);
      }
      function ML(r, n, o, s, c) {
        if (ic(r)) throw Error(a(485));
        if (r = n.action, r !== null) {
          var p = {
            payload: c,
            action: r,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function then(g) {
              p.listeners.push(g);
            }
          };
          ee.T !== null ? o(!0) : p.isTransition = !1, s(p), o = n.pending, o === null ? (p.next = n.pending = p, eS(n, p)) : (p.next = o.next, n.pending = o.next = p);
        }
      }
      function eS(r, n) {
        var o = n.action,
          s = n.payload,
          c = r.state;
        if (n.isTransition) {
          var p = ee.T,
            g = {};
          ee.T = g;
          try {
            var E = o(c, s),
              N = ee.S;
            N !== null && N(g, E), tS(r, n, E);
          } catch (P) {
            vv(r, n, P);
          } finally {
            ee.T = p;
          }
        } else try {
          p = o(c, s), tS(r, n, p);
        } catch (P) {
          vv(r, n, P);
        }
      }
      function tS(r, n, o) {
        o !== null && _typeof(o) == "object" && typeof o.then == "function" ? o.then(function (s) {
          rS(r, n, s);
        }, function (s) {
          return vv(r, n, s);
        }) : rS(r, n, o);
      }
      function rS(r, n, o) {
        n.status = "fulfilled", n.value = o, nS(n), r.state = o, n = r.pending, n !== null && (o = n.next, o === n ? r.pending = null : (o = o.next, n.next = o, eS(r, o)));
      }
      function vv(r, n, o) {
        var s = r.pending;
        if (r.pending = null, s !== null) {
          s = s.next;
          do n.status = "rejected", n.reason = o, nS(n), n = n.next; while (n !== s);
        }
        r.action = null;
      }
      function nS(r) {
        r = r.listeners;
        for (var n = 0; n < r.length; n++) (0, r[n])();
      }
      function iS(r, n) {
        return n;
      }
      function aS(r, n) {
        if (pe) {
          var o = Ae.formState;
          if (o !== null) {
            e: {
              var s = ae;
              if (pe) {
                if (Tt) {
                  var c = Xj(Tt, zr);
                  if (c) {
                    Tt = WE(c), s = kj(c);
                    break e;
                  }
                }
                Ki(s);
              }
              s = !1;
            }
            s && (n = o[0]);
          }
        }
        o = Ut(), o.memoizedState = o.baseState = n, s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: iS,
          lastRenderedState: n
        }, o.queue = s, o = ES.bind(null, ae, s), s.dispatch = o, s = dv(!1);
        var p = bv.bind(null, ae, !1, s.queue);
        return s = Ut(), c = {
          state: n,
          dispatch: null,
          action: r,
          pending: null
        }, s.queue = c, o = ML.bind(null, ae, c, p, o), c.dispatch = o, s.memoizedState = r, [n, o, !1];
      }
      function oS(r) {
        var n = Ge();
        return uS(n, ge, r);
      }
      function uS(r, n, o) {
        n = fv(r, n, iS)[0], r = tc(pn)[0], n = _typeof(n) == "object" && n !== null && typeof n.then == "function" ? Pu(n) : n;
        var s = Ge(),
          c = s.queue,
          p = c.dispatch;
        return o !== s.memoizedState && (ae.flags |= 2048, Ya(9, BL.bind(null, c, o), {
          destroy: void 0
        }, null)), [n, p, r];
      }
      function BL(r, n) {
        r.action = n;
      }
      function sS(r) {
        var n = Ge(),
          o = ge;
        if (o !== null) return uS(n, o, r);
        Ge(), n = n.memoizedState, o = Ge();
        var s = o.queue.dispatch;
        return o.memoizedState = r, [n, s, !1];
      }
      function Ya(r, n, o, s) {
        return r = {
          tag: r,
          create: n,
          inst: o,
          deps: s,
          next: null
        }, n = ae.updateQueue, n === null && (n = Am(), ae.updateQueue = n), o = n.lastEffect, o === null ? n.lastEffect = r.next = r : (s = o.next, o.next = r, r.next = s, n.lastEffect = r), r;
      }
      function lS() {
        return Ge().memoizedState;
      }
      function rc(r, n, o, s) {
        var c = Ut();
        ae.flags |= r, c.memoizedState = Ya(1 | n, o, {
          destroy: void 0
        }, s === void 0 ? null : s);
      }
      function nc(r, n, o, s) {
        var c = Ge();
        s = s === void 0 ? null : s;
        var p = c.memoizedState.inst;
        ge !== null && s !== null && av(s, ge.memoizedState.deps) ? c.memoizedState = Ya(n, o, p, s) : (ae.flags |= r, c.memoizedState = Ya(1 | n, o, p, s));
      }
      function cS(r, n) {
        rc(8390656, 8, r, n);
      }
      function mv(r, n) {
        nc(2048, 8, r, n);
      }
      function fS(r, n) {
        return nc(4, 2, r, n);
      }
      function pS(r, n) {
        return nc(4, 4, r, n);
      }
      function dS(r, n) {
        if (typeof n == "function") {
          r = r();
          var o = n(r);
          return function () {
            typeof o == "function" ? o() : n(null);
          };
        }
        if (n != null) return r = r(), n.current = r, function () {
          n.current = null;
        };
      }
      function vS(r, n, o) {
        o = o != null ? o.concat([r]) : null, nc(4, 4, dS.bind(null, n, r), o);
      }
      function hv() {}
      function mS(r, n) {
        var o = Ge();
        n = n === void 0 ? null : n;
        var s = o.memoizedState;
        return n !== null && av(n, s[1]) ? s[0] : (o.memoizedState = [r, n], r);
      }
      function hS(r, n) {
        var o = Ge();
        n = n === void 0 ? null : n;
        var s = o.memoizedState;
        if (n !== null && av(n, s[1])) return s[0];
        if (s = r(), ta) {
          It(!0);
          try {
            r();
          } finally {
            It(!1);
          }
        }
        return o.memoizedState = [s, n], s;
      }
      function yv(r, n, o) {
        return o === void 0 || li & 1073741824 ? r.memoizedState = n : (r.memoizedState = o, r = pE(), ae.lanes |= r, fi |= r, o);
      }
      function yS(r, n, o, s) {
        return nr(o, n) ? o : fo.current !== null ? (r = yv(r, o, s), nr(r, n) || (tt = !0), r) : li & 42 ? (r = pE(), ae.lanes |= r, fi |= r, n) : (tt = !0, r.memoizedState = o);
      }
      function gS(r, n, o, s, c) {
        var p = Wi();
        Lt(p !== 0 && 8 > p ? p : 8);
        var g = ee.T,
          E = {};
        ee.T = E, bv(r, !1, n, o);
        try {
          var N = c(),
            P = ee.S;
          if (P !== null && P(E, N), N !== null && _typeof(N) == "object" && typeof N.then == "function") {
            var F = RL(N, s);
            Iu(r, n, F, $t(r));
          } else Iu(r, n, s, $t(r));
        } catch (V) {
          Iu(r, n, {
            then: function then() {},
            status: "rejected",
            reason: V
          }, $t());
        } finally {
          Lt(p), ee.T = g;
        }
      }
      function bS(r) {
        var n = r.memoizedState;
        if (n !== null) return n;
        n = {
          memoizedState: $a,
          baseState: $a,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: pn,
            lastRenderedState: $a
          },
          next: null
        };
        var o = {};
        return n.next = {
          memoizedState: o,
          baseState: o,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: pn,
            lastRenderedState: o
          },
          next: null
        }, r.memoizedState = n, r = r.alternate, r !== null && (r.memoizedState = n), n;
      }
      function gv() {
        return xt(Ji);
      }
      function xS() {
        return Ge().memoizedState;
      }
      function SS() {
        return Ge().memoizedState;
      }
      function DL(r) {
        for (var n = r.return; n !== null;) {
          switch (n.tag) {
            case 24:
            case 3:
              var o = $t();
              r = Qn(o);
              var s = Zn(n, r, o);
              s !== null && (At(s, n, o), Cu(s, n, o)), n = {
                cache: Mv()
              }, r.payload = n;
              return;
          }
          n = n.return;
        }
      }
      function PL(r, n, o) {
        var s = $t();
        o = {
          lane: s,
          revertLane: 0,
          action: o,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ic(r) ? TS(n, o) : (o = Jd(r, n, o, s), o !== null && (At(o, r, s), qS(o, n, s)));
      }
      function ES(r, n, o) {
        var s = $t();
        Iu(r, n, o, s);
      }
      function Iu(r, n, o, s) {
        var c = {
          lane: s,
          revertLane: 0,
          action: o,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (ic(r)) TS(n, c);else {
          var p = r.alternate;
          if (r.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
            var g = n.lastRenderedState,
              E = p(g, o);
            if (c.hasEagerState = !0, c.eagerState = E, nr(E, g)) return Xl(r, n, c, 0), Ae === null && Yl(), !1;
          } catch (_unused60) {} finally {}
          if (o = Jd(r, n, c, s), o !== null) return At(o, r, s), qS(o, n, s), !0;
        }
        return !1;
      }
      function bv(r, n, o, s) {
        if (s = {
          lane: 2,
          revertLane: $d(),
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, ic(r)) {
          if (n) throw Error(a(479));
        } else n = Jd(r, o, s, 2), n !== null && At(n, r, 2);
      }
      function ic(r) {
        var n = r.alternate;
        return r === ae || n !== null && n === ae;
      }
      function TS(r, n) {
        po = Oc = !0;
        var o = r.pending;
        o === null ? n.next = n : (n.next = o.next, o.next = n), r.pending = n;
      }
      function qS(r, n, o) {
        if (o & 4194176) {
          var s = n.lanes;
          s &= r.pendingLanes, o |= s, n.lanes = o, Me(r, o);
        }
      }
      function xv(r, n, o, s) {
        n = r.memoizedState, o = o(s, n), o = o == null ? n : rm({}, n, o), r.memoizedState = o, r.lanes === 0 && (r.updateQueue.baseState = o);
      }
      function AS(r, n, o, s, c, p, g) {
        return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, p, g) : n.prototype && n.prototype.isPureReactComponent ? !Ql(o, s) || !Ql(c, p) : !0;
      }
      function _S(r, n, o, s) {
        r = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, s), n.state !== r && _m.enqueueReplaceState(n, n.state, null);
      }
      function Vi(r, n) {
        var o = n;
        if ("ref" in n) {
          o = {};
          for (var s in n) s !== "ref" && (o[s] = n[s]);
        }
        if (r = r.defaultProps) {
          o === n && (o = rm({}, o));
          for (var c in r) o[c] === void 0 && (o[c] = r[c]);
        }
        return o;
      }
      function ac(r, n) {
        try {
          var o = r.onUncaughtError;
          o(n.value, {
            componentStack: n.stack
          });
        } catch (s) {
          setTimeout(function () {
            throw s;
          });
        }
      }
      function OS(r, n, o) {
        try {
          var s = r.onCaughtError;
          s(o.value, {
            componentStack: o.stack,
            errorBoundary: n.tag === 1 ? n.stateNode : null
          });
        } catch (c) {
          setTimeout(function () {
            throw c;
          });
        }
      }
      function Sv(r, n, o) {
        return o = Qn(o), o.tag = 3, o.payload = {
          element: null
        }, o.callback = function () {
          ac(r, n);
        }, o;
      }
      function wS(r) {
        return r = Qn(r), r.tag = 3, r;
      }
      function NS(r, n, o, s) {
        var c = o.type.getDerivedStateFromError;
        if (typeof c == "function") {
          var p = s.value;
          r.payload = function () {
            return c(p);
          }, r.callback = function () {
            OS(n, o, s);
          };
        }
        var g = o.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (r.callback = function () {
          OS(n, o, s), typeof c != "function" && (pi === null ? pi = new Set([this]) : pi.add(this));
          var E = s.stack;
          this.componentDidCatch(s.value, {
            componentStack: E !== null ? E : ""
          });
        });
      }
      function IL(r, n, o, s, c) {
        if (o.flags |= 32768, s !== null && _typeof(s) == "object" && typeof s.then == "function") {
          if (n = o.alternate, n !== null && zu(n, o, c, !0), o = vr.current, o !== null) {
            switch (o.tag) {
              case 13:
                return Lr === null ? Qv() : o.alternate === null && Le === 0 && (Le = 3), o.flags &= -257, o.flags |= 65536, o.lanes = c, s === Ac ? o.flags |= 16384 : (n = o.updateQueue, n === null ? o.updateQueue = new Set([s]) : n.add(s), Wv(r, s, c)), !1;
              case 22:
                return o.flags |= 65536, s === Ac ? o.flags |= 16384 : (n = o.updateQueue, n === null ? (n = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: new Set([s])
                }, o.updateQueue = n) : (o = n.retryQueue, o === null ? n.retryQueue = new Set([s]) : o.add(s)), Wv(r, s, c)), !1;
            }
            throw Error(a(435, o.tag));
          }
          return Wv(r, s, c), Qv(), !1;
        }
        if (pe) return n = vr.current, n !== null ? (!(n.flags & 65536) && (n.flags |= 256), n.flags |= 65536, n.lanes = c, s !== gm && (r = Error(a(422), {
          cause: s
        }), Ru(lt(r, o)))) : (s !== gm && (n = Error(a(423), {
          cause: s
        }), Ru(lt(n, o))), r = r.current.alternate, r.flags |= 65536, c &= -c, r.lanes |= c, s = lt(s, o), c = Sv(r.stateNode, s, c), rv(r, c), Le !== 4 && (Le = 2)), !1;
        var p = Error(a(520), {
          cause: s
        });
        if (p = lt(p, o), es === null ? es = [p] : es.push(p), Le !== 4 && (Le = 2), n === null) return !0;
        s = lt(s, o), o = n;
        do {
          switch (o.tag) {
            case 3:
              return o.flags |= 65536, r = c & -c, o.lanes |= r, r = Sv(o.stateNode, s, r), rv(o, r), !1;
            case 1:
              if (n = o.type, p = o.stateNode, (o.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (pi === null || !pi.has(p)))) return o.flags |= 65536, c &= -c, o.lanes |= c, c = wS(c), NS(c, r, o, s), rv(o, c), !1;
          }
          o = o.return;
        } while (o !== null);
        return !1;
      }
      function ct(r, n, o, s) {
        n.child = r === null ? f1(n, null, o, s) : ea(n, r.child, o, s);
      }
      function RS(r, n, o, s, c) {
        o = o.render;
        var p = n.ref;
        if ("ref" in s) {
          var g = {};
          for (var E in s) E !== "ref" && (g[E] = s[E]);
        } else g = s;
        return Yi(n), s = ov(r, n, o, g, p, c), E = uv(), r !== null && !tt ? (sv(r, n, c), dn(r, n, c)) : (pe && E && H(n), n.flags |= 1, ct(r, n, s, c), n.child);
      }
      function CS(r, n, o, s, c) {
        if (r === null) {
          var p = o.type;
          return typeof p == "function" && !Jv(p) && p.defaultProps === void 0 && o.compare === null ? (n.tag = 15, n.type = p, MS(r, n, p, s, c)) : (r = dc(o.type, null, s, n, n.mode, c), r.ref = n.ref, r.return = n, n.child = r);
        }
        if (p = r.child, !Nv(r, c)) {
          var g = p.memoizedProps;
          if (o = o.compare, o = o !== null ? o : Ql, o(g, s) && r.ref === n.ref) return dn(r, n, c);
        }
        return n.flags |= 1, r = ni(p, s), r.ref = n.ref, r.return = n, n.child = r;
      }
      function MS(r, n, o, s, c) {
        if (r !== null) {
          var p = r.memoizedProps;
          if (Ql(p, s) && r.ref === n.ref) if (tt = !1, n.pendingProps = s = p, Nv(r, c)) r.flags & 131072 && (tt = !0);else return n.lanes = r.lanes, dn(r, n, c);
        }
        return Ev(r, n, o, s, c);
      }
      function BS(r, n, o) {
        var s = n.pendingProps,
          c = s.children,
          p = (n.stateNode._pendingVisibility & 2) !== 0,
          g = r !== null ? r.memoizedState : null;
        if (Uu(r, n), s.mode === "hidden" || p) {
          if (n.flags & 128) {
            if (s = g !== null ? g.baseLanes | o : o, r !== null) {
              for (c = n.child = r.child, p = 0; c !== null;) p = p | c.lanes | c.childLanes, c = c.sibling;
              n.childLanes = p & ~s;
            } else n.childLanes = 0, n.child = null;
            return DS(r, n, s, o);
          }
          if (o & 536870912) n.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, r !== null && sc(n, g !== null ? g.cachePool : null), g !== null ? Gx(n, g) : nv(), Kx(n);else return n.lanes = n.childLanes = 536870912, DS(r, n, g !== null ? g.baseLanes | o : o, o);
        } else g !== null ? (sc(n, g.cachePool), Gx(n, g), Jn(n), n.memoizedState = null) : (r !== null && sc(n, null), nv(), Jn(n));
        return ct(r, n, c, o), n.child;
      }
      function DS(r, n, o, s) {
        var c = Bv();
        return c = c === null ? null : {
          parent: yn ? Ue._currentValue : Ue._currentValue2,
          pool: c
        }, n.memoizedState = {
          baseLanes: o,
          cachePool: c
        }, r !== null && sc(n, null), nv(), Kx(n), r !== null && zu(r, n, s, !0), null;
      }
      function Uu(r, n) {
        var o = n.ref;
        if (o === null) r !== null && r.ref !== null && (n.flags |= 2097664);else {
          if (typeof o != "function" && _typeof(o) != "object") throw Error(a(284));
          (r === null || r.ref !== o) && (n.flags |= 2097664);
        }
      }
      function Ev(r, n, o, s, c) {
        return Yi(n), o = ov(r, n, o, s, void 0, c), s = uv(), r !== null && !tt ? (sv(r, n, c), dn(r, n, c)) : (pe && s && H(n), n.flags |= 1, ct(r, n, o, c), n.child);
      }
      function PS(r, n, o, s, c, p) {
        return Yi(n), n.updateQueue = null, o = Yx(n, s, o, c), Vx(r), s = uv(), r !== null && !tt ? (sv(r, n, p), dn(r, n, p)) : (pe && s && H(n), n.flags |= 1, ct(r, n, o, p), n.child);
      }
      function IS(r, n, o, s, c) {
        if (Yi(n), n.stateNode === null) {
          var p = to,
            g = o.contextType;
          _typeof(g) == "object" && g !== null && (p = xt(g)), p = new o(s, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = _m, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = s, p.state = n.memoizedState, p.refs = {}, ev(n), g = o.contextType, p.context = _typeof(g) == "object" && g !== null ? xt(g) : to, p.state = n.memoizedState, g = o.getDerivedStateFromProps, typeof g == "function" && (xv(n, o, g, s), p.state = n.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (g = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), g !== p.state && _m.enqueueReplaceState(p, p.state, null), Bu(n, s, p, c), Mu(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !0;
        } else if (r === null) {
          p = n.stateNode;
          var E = n.memoizedProps,
            N = Vi(o, E);
          p.props = N;
          var P = p.context,
            F = o.contextType;
          g = to, _typeof(F) == "object" && F !== null && (g = xt(F));
          var V = o.getDerivedStateFromProps;
          F = typeof V == "function" || typeof p.getSnapshotBeforeUpdate == "function", E = n.pendingProps !== E, F || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (E || P !== g) && _S(n, p, s, g), si = !1;
          var Y = n.memoizedState;
          p.state = Y, Bu(n, s, p, c), Mu(), P = n.memoizedState, E || Y !== P || si ? (typeof V == "function" && (xv(n, o, V, s), P = n.memoizedState), (N = si || AS(n, o, N, s, Y, P, g)) ? (F || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = P), p.props = s, p.state = P, p.context = g, s = N) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !1);
        } else {
          p = n.stateNode, tv(r, n), g = n.memoizedProps, F = Vi(o, g), p.props = F, V = n.pendingProps, Y = p.context, P = o.contextType, N = to, _typeof(P) == "object" && P !== null && (N = xt(P)), E = o.getDerivedStateFromProps, (P = typeof E == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (g !== V || Y !== N) && _S(n, p, s, N), si = !1, Y = n.memoizedState, p.state = Y, Bu(n, s, p, c), Mu();
          var re = n.memoizedState;
          g !== V || Y !== re || si || r !== null && r.dependencies !== null && oc(r.dependencies) ? (typeof E == "function" && (xv(n, o, E, s), re = n.memoizedState), (F = si || AS(n, o, F, s, Y, re, N) || r !== null && r.dependencies !== null && oc(r.dependencies)) ? (P || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, re, N), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(s, re, N)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || g === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || g === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = re), p.props = s, p.state = re, p.context = N, s = F) : (typeof p.componentDidUpdate != "function" || g === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || g === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), s = !1);
        }
        return p = s, Uu(r, n), s = (n.flags & 128) !== 0, p || s ? (p = n.stateNode, o = s && typeof o.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, r !== null && s ? (n.child = ea(n, r.child, null, c), n.child = ea(n, null, o, c)) : ct(r, n, o, c), n.memoizedState = p.state, r = n.child) : r = dn(r, n, c), r;
      }
      function US(r, n, o, s) {
        return Nu(), n.flags |= 256, ct(r, n, o, s), n.child;
      }
      function Tv(r) {
        return {
          baseLanes: r,
          cachePool: GS()
        };
      }
      function qv(r, n, o) {
        return r = r !== null ? r.childLanes & ~o : 0, n && (r |= mr), r;
      }
      function zS(r, n, o) {
        var s = n.pendingProps,
          c = !1,
          p = (n.flags & 128) !== 0,
          g;
        if ((g = p) || (g = r !== null && r.memoizedState === null ? !1 : (Ze.current & 2) !== 0), g && (c = !0, n.flags &= -129), g = (n.flags & 32) !== 0, n.flags &= -33, r === null) {
          if (pe) {
            if (c ? Wn(n) : Jn(n), pe) {
              var E = Tt,
                N;
              (N = E) && (E = $j(E, zr), E !== null ? (n.memoizedState = {
                dehydrated: E,
                treeContext: $i !== null ? {
                  id: gn,
                  overflow: bn
                } : null,
                retryLane: 536870912
              }, N = t(18, null, null, 0), N.stateNode = E, N.return = n, n.child = N, _t = n, Tt = null, N = !0) : N = !1), N || Ki(n);
            }
            if (E = n.memoizedState, E !== null && (E = E.dehydrated, E !== null)) return dm(E) ? n.lanes = 16 : n.lanes = 536870912, null;
            fn(n);
          }
          return E = s.children, s = s.fallback, c ? (Jn(n), c = n.mode, E = _v({
            mode: "hidden",
            children: E
          }, c), s = Zi(s, c, o, null), E.return = n, s.return = n, E.sibling = s, n.child = E, c = n.child, c.memoizedState = Tv(o), c.childLanes = qv(r, g, o), n.memoizedState = Om, s) : (Wn(n), Av(n, E));
        }
        if (N = r.memoizedState, N !== null && (E = N.dehydrated, E !== null)) {
          if (p) n.flags & 256 ? (Wn(n), n.flags &= -257, n = Ov(r, n, o)) : n.memoizedState !== null ? (Jn(n), n.child = r.child, n.flags |= 128, n = null) : (Jn(n), c = s.fallback, E = n.mode, s = _v({
            mode: "visible",
            children: s.children
          }, E), c = Zi(c, E, o, null), c.flags |= 2, s.return = n, c.return = n, s.sibling = c, n.child = s, ea(n, r.child, null, o), s = n.child, s.memoizedState = Tv(o), s.childLanes = qv(r, g, o), n.memoizedState = Om, n = c);else if (Wn(n), dm(E)) g = Vj(E).digest, s = Error(a(419)), s.stack = "", s.digest = g, Ru({
            value: s,
            source: null,
            stack: null
          }), n = Ov(r, n, o);else if (tt || zu(r, n, o, !1), g = (o & r.childLanes) !== 0, tt || g) {
            if (g = Ae, g !== null) {
              if (s = o & -o, s & 42) s = 1;else switch (s) {
                case 2:
                  s = 1;
                  break;
                case 8:
                  s = 4;
                  break;
                case 32:
                  s = 16;
                  break;
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                  s = 64;
                  break;
                case 268435456:
                  s = 134217728;
                  break;
                default:
                  s = 0;
              }
              if (s = s & (g.suspendedLanes | o) ? 0 : s, s !== 0 && s !== N.retryLane) throw N.retryLane = s, kn(r, s), At(g, r, s), d1;
            }
            pm(E) || Qv(), n = Ov(r, n, o);
          } else pm(E) ? (n.flags |= 128, n.child = r.child, n = kL.bind(null, r), Yj(E, n), n = null) : (r = N.treeContext, lr && (Tt = Zj(E), _t = n, pe = !0, Ar = null, zr = !1, r !== null && (fr[pr++] = gn, fr[pr++] = bn, fr[pr++] = $i, gn = r.id, bn = r.overflow, $i = n)), n = Av(n, s.children), n.flags |= 4096);
          return n;
        }
        return c ? (Jn(n), c = s.fallback, E = n.mode, N = r.child, p = N.sibling, s = ni(N, {
          mode: "hidden",
          children: s.children
        }), s.subtreeFlags = N.subtreeFlags & 31457280, p !== null ? c = ni(p, c) : (c = Zi(c, E, o, null), c.flags |= 2), c.return = n, s.return = n, s.sibling = c, n.child = s, s = c, c = n.child, E = r.child.memoizedState, E === null ? E = Tv(o) : (N = E.cachePool, N !== null ? (p = yn ? Ue._currentValue : Ue._currentValue2, N = N.parent !== p ? {
          parent: p,
          pool: p
        } : N) : N = GS(), E = {
          baseLanes: E.baseLanes | o,
          cachePool: N
        }), c.memoizedState = E, c.childLanes = qv(r, g, o), n.memoizedState = Om, s) : (Wn(n), o = r.child, r = o.sibling, o = ni(o, {
          mode: "visible",
          children: s.children
        }), o.return = n, o.sibling = null, r !== null && (g = n.deletions, g === null ? (n.deletions = [r], n.flags |= 16) : g.push(r)), n.child = o, n.memoizedState = null, o);
      }
      function Av(r, n) {
        return n = _v({
          mode: "visible",
          children: n
        }, r.mode), n.return = r, r.child = n;
      }
      function _v(r, n) {
        return wE(r, n, 0, null);
      }
      function Ov(r, n, o) {
        return ea(n, r.child, null, o), r = Av(n, n.pendingProps.children), r.flags |= 2, n.memoizedState = null, r;
      }
      function LS(r, n, o) {
        r.lanes |= n;
        var s = r.alternate;
        s !== null && (s.lanes |= n), Rv(r.return, n, o);
      }
      function wv(r, n, o, s, c) {
        var p = r.memoizedState;
        p === null ? r.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: o,
          tailMode: c
        } : (p.isBackwards = n, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = o, p.tailMode = c);
      }
      function jS(r, n, o) {
        var s = n.pendingProps,
          c = s.revealOrder,
          p = s.tail;
        if (ct(r, n, s.children, o), s = Ze.current, s & 2) s = s & 1 | 2, n.flags |= 128;else {
          if (r !== null && r.flags & 128) e: for (r = n.child; r !== null;) {
            if (r.tag === 13) r.memoizedState !== null && LS(r, o, n);else if (r.tag === 19) LS(r, o, n);else if (r.child !== null) {
              r.child.return = r, r = r.child;
              continue;
            }
            if (r === n) break e;
            for (; r.sibling === null;) {
              if (r.return === null || r.return === n) break e;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
          s &= 1;
        }
        switch (x(Ze, s), c) {
          case "forwards":
            for (o = n.child, c = null; o !== null;) r = o.alternate, r !== null && $l(r) === null && (c = o), o = o.sibling;
            o = c, o === null ? (c = n.child, n.child = null) : (c = o.sibling, o.sibling = null), wv(n, !1, c, o, p);
            break;
          case "backwards":
            for (o = null, c = n.child, n.child = null; c !== null;) {
              if (r = c.alternate, r !== null && $l(r) === null) {
                n.child = c;
                break;
              }
              r = c.sibling, c.sibling = o, o = c, c = r;
            }
            wv(n, !0, o, null, p);
            break;
          case "together":
            wv(n, !1, null, null, void 0);
            break;
          default:
            n.memoizedState = null;
        }
        return n.child;
      }
      function dn(r, n, o) {
        if (r !== null && (n.dependencies = r.dependencies), fi |= n.lanes, !(o & n.childLanes)) if (r !== null) {
          if (zu(r, n, o, !1), (o & n.childLanes) === 0) return null;
        } else return null;
        if (r !== null && n.child !== r.child) throw Error(a(153));
        if (n.child !== null) {
          for (r = n.child, o = ni(r, r.pendingProps), n.child = o, o.return = n; r.sibling !== null;) r = r.sibling, o = o.sibling = ni(r, r.pendingProps), o.return = n;
          o.sibling = null;
        }
        return n.child;
      }
      function Nv(r, n) {
        return r.lanes & n ? !0 : (r = r.dependencies, !!(r !== null && oc(r)));
      }
      function UL(r, n, o) {
        switch (n.tag) {
          case 3:
            Kl(n, n.stateNode.containerInfo), $n(n, Ue, r.memoizedState.cache), Nu();
            break;
          case 27:
          case 5:
            Wd(n);
            break;
          case 4:
            Kl(n, n.stateNode.containerInfo);
            break;
          case 10:
            $n(n, n.type, n.memoizedProps.value);
            break;
          case 13:
            var s = n.memoizedState;
            if (s !== null) return s.dehydrated !== null ? (Wn(n), n.flags |= 128, null) : o & n.child.childLanes ? zS(r, n, o) : (Wn(n), r = dn(r, n, o), r !== null ? r.sibling : null);
            Wn(n);
            break;
          case 19:
            var c = (r.flags & 128) !== 0;
            if (s = (o & n.childLanes) !== 0, s || (zu(r, n, o, !1), s = (o & n.childLanes) !== 0), c) {
              if (s) return jS(r, n, o);
              n.flags |= 128;
            }
            if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), x(Ze, Ze.current), s) break;
            return null;
          case 22:
          case 23:
            return n.lanes = 0, BS(r, n, o);
          case 24:
            $n(n, Ue, r.memoizedState.cache);
        }
        return dn(r, n, o);
      }
      function FS(r, n, o) {
        if (r !== null) {
          if (r.memoizedProps !== n.pendingProps) tt = !0;else {
            if (!Nv(r, o) && !(n.flags & 128)) return tt = !1, UL(r, n, o);
            tt = !!(r.flags & 131072);
          }
        } else tt = !1, pe && n.flags & 1048576 && K(n, Sc, n.index);
        switch (n.lanes = 0, n.tag) {
          case 16:
            e: {
              r = n.pendingProps;
              var s = n.elementType,
                c = s._init;
              if (s = c(s._payload), n.type = s, typeof s == "function") Jv(s) ? (r = Vi(s, r), n.tag = 1, n = IS(null, n, s, r, o)) : (n.tag = 0, n = Ev(null, n, s, r, o));else {
                if (s != null) {
                  if (c = s.$$typeof, c === im) {
                    n.tag = 11, n = RS(null, n, s, r, o);
                    break e;
                  } else if (c === um) {
                    n.tag = 14, n = CS(null, n, s, r, o);
                    break e;
                  }
                }
                throw n = l(s) || s, Error(a(306, n, ""));
              }
            }
            return n;
          case 0:
            return Ev(r, n, n.type, n.pendingProps, o);
          case 1:
            return s = n.type, c = Vi(s, n.pendingProps), IS(r, n, s, c, o);
          case 3:
            e: {
              if (Kl(n, n.stateNode.containerInfo), r === null) throw Error(a(387));
              var p = n.pendingProps;
              c = n.memoizedState, s = c.element, tv(r, n), Bu(n, p, null, o);
              var g = n.memoizedState;
              if (p = g.cache, $n(n, Ue, p), p !== c.cache && Cv(n, [Ue], o, !0), Mu(), p = g.element, lr && c.isDehydrated) {
                if (c = {
                  element: p,
                  isDehydrated: !1,
                  cache: g.cache
                }, n.updateQueue.baseState = c, n.memoizedState = c, n.flags & 256) {
                  n = US(r, n, p, o);
                  break e;
                } else if (p !== s) {
                  s = lt(Error(a(424)), n), Ru(s), n = US(r, n, p, o);
                  break e;
                } else for (lr && (Tt = Qj(n.stateNode.containerInfo), _t = n, pe = !0, Ar = null, zr = !0), o = f1(n, null, p, o), n.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
              } else {
                if (Nu(), p === s) {
                  n = dn(r, n, o);
                  break e;
                }
                ct(r, n, p, o);
              }
              n = n.child;
            }
            return n;
          case 26:
            if (cr) return Uu(r, n), r === null ? (o = t1(n.type, null, n.pendingProps, null)) ? n.memoizedState = o : pe || (n.stateNode = f5(n.type, n.pendingProps, ui.current, n)) : n.memoizedState = t1(n.type, r.memoizedProps, n.pendingProps, r.memoizedState), null;
          case 27:
            if (Et) return Wd(n), r === null && Et && pe && (s = n.stateNode = u1(n.type, n.pendingProps, ui.current, ft.current, !1), _t = n, zr = !0, Tt = JE(s)), s = n.pendingProps.children, r !== null || pe ? ct(r, n, s, o) : n.child = ea(n, null, s, o), Uu(r, n), n.child;
          case 5:
            return r === null && pe && (s5(n.type, n.pendingProps, ft.current), (c = s = Tt) && (s = Wj(s, n.type, n.pendingProps, zr), s !== null ? (n.stateNode = s, _t = n, Tt = JE(s), zr = !1, c = !0) : c = !1), c || Ki(n)), Wd(n), c = n.type, p = n.pendingProps, g = r !== null ? r.memoizedProps : null, s = p.children, hc(c, p) ? s = null : g !== null && hc(c, g) && (n.flags |= 32), n.memoizedState !== null && (c = ov(r, n, CL, null, null, o), yn ? Ji._currentValue = c : Ji._currentValue2 = c), Uu(r, n), ct(r, n, s, o), n.child;
          case 6:
            return r === null && pe && (l5(n.pendingProps, ft.current), (r = o = Tt) && (o = Jj(o, n.pendingProps, zr), o !== null ? (n.stateNode = o, _t = n, Tt = null, r = !0) : r = !1), r || Ki(n)), null;
          case 13:
            return zS(r, n, o);
          case 4:
            return Kl(n, n.stateNode.containerInfo), s = n.pendingProps, r === null ? n.child = ea(n, null, s, o) : ct(r, n, s, o), n.child;
          case 11:
            return RS(r, n, n.type, n.pendingProps, o);
          case 7:
            return ct(r, n, n.pendingProps, o), n.child;
          case 8:
            return ct(r, n, n.pendingProps.children, o), n.child;
          case 12:
            return ct(r, n, n.pendingProps.children, o), n.child;
          case 10:
            return s = n.pendingProps, $n(n, n.type, s.value), ct(r, n, s.children, o), n.child;
          case 9:
            return c = n.type._context, s = n.pendingProps.children, Yi(n), c = xt(c), s = s(c), n.flags |= 1, ct(r, n, s, o), n.child;
          case 14:
            return CS(r, n, n.type, n.pendingProps, o);
          case 15:
            return MS(r, n, n.type, n.pendingProps, o);
          case 19:
            return jS(r, n, o);
          case 22:
            return BS(r, n, o);
          case 24:
            return Yi(n), s = xt(Ue), r === null ? (c = Bv(), c === null && (c = Ae, p = Mv(), c.pooledCache = p, p.refCount++, p !== null && (c.pooledCacheLanes |= o), c = p), n.memoizedState = {
              parent: s,
              cache: c
            }, ev(n), $n(n, Ue, c)) : (r.lanes & o && (tv(r, n), Bu(n, null, null, o), Mu()), c = r.memoizedState, p = n.memoizedState, c.parent !== s ? (c = {
              parent: s,
              cache: s
            }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), $n(n, Ue, s)) : (s = p.cache, $n(n, Ue, s), s !== c.cache && Cv(n, [Ue], o, !0))), ct(r, n, n.pendingProps.children, o), n.child;
          case 29:
            throw n.pendingProps;
        }
        throw Error(a(156, n.tag));
      }
      function $n(r, n, o) {
        yn ? (x(Nc, n._currentValue), n._currentValue = o) : (x(Nc, n._currentValue2), n._currentValue2 = o);
      }
      function vn(r) {
        var n = Nc.current;
        yn ? r._currentValue = n : r._currentValue2 = n, _(Nc);
      }
      function Rv(r, n, o) {
        for (; r !== null;) {
          var s = r.alternate;
          if ((r.childLanes & n) !== n ? (r.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), r === o) break;
          r = r.return;
        }
      }
      function Cv(r, n, o, s) {
        var c = r.child;
        for (c !== null && (c.return = r); c !== null;) {
          var p = c.dependencies;
          if (p !== null) {
            var g = c.child;
            p = p.firstContext;
            e: for (; p !== null;) {
              var E = p;
              p = c;
              for (var N = 0; N < n.length; N++) if (E.context === n[N]) {
                p.lanes |= o, E = p.alternate, E !== null && (E.lanes |= o), Rv(p.return, o, r), s || (g = null);
                break e;
              }
              p = E.next;
            }
          } else if (c.tag === 18) {
            if (g = c.return, g === null) throw Error(a(341));
            g.lanes |= o, p = g.alternate, p !== null && (p.lanes |= o), Rv(g, o, r), g = null;
          } else g = c.child;
          if (g !== null) g.return = c;else for (g = c; g !== null;) {
            if (g === r) {
              g = null;
              break;
            }
            if (c = g.sibling, c !== null) {
              c.return = g.return, g = c;
              break;
            }
            g = g.return;
          }
          c = g;
        }
      }
      function zu(r, n, o, s) {
        r = null;
        for (var c = n, p = !1; c !== null;) {
          if (!p) {
            if (c.flags & 524288) p = !0;else if (c.flags & 262144) break;
          }
          if (c.tag === 10) {
            var g = c.alternate;
            if (g === null) throw Error(a(387));
            if (g = g.memoizedProps, g !== null) {
              var E = c.type;
              nr(c.pendingProps.value, g.value) || (r !== null ? r.push(E) : r = [E]);
            }
          } else if (c === Ec.current) {
            if (g = c.alternate, g === null) throw Error(a(387));
            g.memoizedState.memoizedState !== c.memoizedState.memoizedState && (r !== null ? r.push(Ji) : r = [Ji]);
          }
          c = c.return;
        }
        r !== null && Cv(n, r, o, s), n.flags |= 262144;
      }
      function oc(r) {
        for (r = r.firstContext; r !== null;) {
          var n = r.context;
          if (!nr(yn ? n._currentValue : n._currentValue2, r.memoizedValue)) return !0;
          r = r.next;
        }
        return !1;
      }
      function Yi(r) {
        ia = r, xn = null, r = r.dependencies, r !== null && (r.firstContext = null);
      }
      function xt(r) {
        return HS(ia, r);
      }
      function uc(r, n) {
        return ia === null && Yi(r), HS(r, n);
      }
      function HS(r, n) {
        var o = yn ? n._currentValue : n._currentValue2;
        if (n = {
          context: n,
          memoizedValue: o,
          next: null
        }, xn === null) {
          if (r === null) throw Error(a(308));
          xn = n, r.dependencies = {
            lanes: 0,
            firstContext: n
          }, r.flags |= 524288;
        } else xn = xn.next = n;
        return o;
      }
      function Mv() {
        return {
          controller: new w5(),
          data: new Map(),
          refCount: 0
        };
      }
      function Lu(r) {
        r.refCount--, r.refCount === 0 && N5(R5, function () {
          r.controller.abort();
        });
      }
      function Bv() {
        var r = aa.current;
        return r !== null ? r : Ae.pooledCache;
      }
      function sc(r, n) {
        n === null ? x(aa, aa.current) : x(aa, n.pool);
      }
      function GS() {
        var r = Bv();
        return r === null ? null : {
          parent: yn ? Ue._currentValue : Ue._currentValue2,
          pool: r
        };
      }
      function Zt(r) {
        r.flags |= 4;
      }
      function KS(r, n) {
        if (r !== null && r.child === n.child) return !1;
        if (n.flags & 16) return !0;
        for (r = n.child; r !== null;) {
          if (r.flags & 13878 || r.subtreeFlags & 13878) return !0;
          r = r.sibling;
        }
        return !1;
      }
      function Dv(r, n, o, s) {
        if (St) for (o = n.child; o !== null;) {
          if (o.tag === 5 || o.tag === 6) cm(r, o.stateNode);else if (!(o.tag === 4 || Et && o.tag === 27) && o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
          if (o === n) break;
          for (; o.sibling === null;) {
            if (o.return === null || o.return === n) return;
            o = o.return;
          }
          o.sibling.return = o.return, o = o.sibling;
        } else if (oi) for (var c = n.child; c !== null;) {
          if (c.tag === 5) {
            var p = c.stateNode;
            o && s && (p = QE(p, c.type, c.memoizedProps)), cm(r, p);
          } else if (c.tag === 6) p = c.stateNode, o && s && (p = ZE(p, c.memoizedProps)), cm(r, p);else if (c.tag !== 4) {
            if (c.tag === 22 && c.memoizedState !== null) p = c.child, p !== null && (p.return = c), Dv(r, c, !0, !0);else if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c === n) break;
          for (; c.sibling === null;) {
            if (c.return === null || c.return === n) return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      }
      function VS(r, n, o, s) {
        if (oi) for (var c = n.child; c !== null;) {
          if (c.tag === 5) {
            var p = c.stateNode;
            o && s && (p = QE(p, c.type, c.memoizedProps)), XE(r, p);
          } else if (c.tag === 6) p = c.stateNode, o && s && (p = ZE(p, c.memoizedProps)), XE(r, p);else if (c.tag !== 4) {
            if (c.tag === 22 && c.memoizedState !== null) p = c.child, p !== null && (p.return = c), VS(r, c, !(c.memoizedProps !== null && c.memoizedProps.mode === "manual"), !0);else if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c === n) break;
          for (; c.sibling === null;) {
            if (c.return === null || c.return === n) return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      }
      function YS(r, n) {
        if (oi && KS(r, n)) {
          r = n.stateNode;
          var o = r.containerInfo,
            s = YE();
          VS(s, n, !1, !1), r.pendingChildren = s, Zt(n), Kj(o, s);
        }
      }
      function Pv(r, n, o, s) {
        if (St) r.memoizedProps !== s && Zt(n);else if (oi) {
          var c = r.stateNode,
            p = r.memoizedProps;
          if ((r = KS(r, n)) || p !== s) {
            var g = ft.current;
            p = Gj(c, o, p, s, !r, null), p === c ? n.stateNode = c : (jE(p, o, s, g) && Zt(n), n.stateNode = p, r ? Dv(p, n, !1, !1) : Zt(n));
          } else n.stateNode = c;
        }
      }
      function Iv(r, n, o) {
        if (yj(n, o)) {
          if (r.flags |= 16777216, !GE(n, o)) if (yE()) r.flags |= 8192;else throw lo = Ac, qm;
        } else r.flags &= -16777217;
      }
      function XS(r, n) {
        if (d5(n)) {
          if (r.flags |= 16777216, !o1(n)) if (yE()) r.flags |= 8192;else throw lo = Ac, qm;
        } else r.flags &= -16777217;
      }
      function lc(r, n) {
        n !== null && (r.flags |= 4), r.flags & 16384 && (n = r.tag !== 22 ? ne() : 536870912, r.lanes |= n, yo |= n);
      }
      function ju(r, n) {
        if (!pe) switch (r.tailMode) {
          case "hidden":
            n = r.tail;
            for (var o = null; n !== null;) n.alternate !== null && (o = n), n = n.sibling;
            o === null ? r.tail = null : o.sibling = null;
            break;
          case "collapsed":
            o = r.tail;
            for (var s = null; o !== null;) o.alternate !== null && (s = o), o = o.sibling;
            s === null ? n || r.tail === null ? r.tail = null : r.tail.sibling = null : s.sibling = null;
        }
      }
      function Pe(r) {
        var n = r.alternate !== null && r.alternate.child === r.child,
          o = 0,
          s = 0;
        if (n) for (var c = r.child; c !== null;) o |= c.lanes | c.childLanes, s |= c.subtreeFlags & 31457280, s |= c.flags & 31457280, c.return = r, c = c.sibling;else for (c = r.child; c !== null;) o |= c.lanes | c.childLanes, s |= c.subtreeFlags, s |= c.flags, c.return = r, c = c.sibling;
        return r.subtreeFlags |= s, r.childLanes = o, n;
      }
      function zL(r, n, o) {
        var s = n.pendingProps;
        switch (G(n), n.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Pe(n), null;
          case 1:
            return Pe(n), null;
          case 3:
            return o = n.stateNode, s = null, r !== null && (s = r.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), vn(Ue), Ka(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (r === null || r.child === null) && (wu(n) ? Zt(n) : r === null || r.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Ar !== null && (Xv(Ar), Ar = null))), YS(r, n), Pe(n), null;
          case 26:
            if (cr) {
              o = n.type;
              var c = n.memoizedState;
              return r === null ? (Zt(n), c !== null ? (Pe(n), XS(n, c)) : (Pe(n), Iv(n, o, s))) : c ? c !== r.memoizedState ? (Zt(n), Pe(n), XS(n, c)) : (Pe(n), n.flags &= -16777217) : (St ? r.memoizedProps !== s && Zt(n) : Pv(r, n, o, s), Pe(n), Iv(n, o, s)), null;
            }
          case 27:
            if (Et) {
              if (Vl(n), o = ui.current, c = n.type, r !== null && n.stateNode != null) St ? r.memoizedProps !== s && Zt(n) : Pv(r, n, c, s);else {
                if (!s) {
                  if (n.stateNode === null) throw Error(a(166));
                  return Pe(n), null;
                }
                r = ft.current, wu(n) ? Nx(n, r) : (r = u1(c, s, o, r, !0), n.stateNode = r, Zt(n));
              }
              return Pe(n), null;
            }
          case 5:
            if (Vl(n), o = n.type, r !== null && n.stateNode != null) Pv(r, n, o, s);else {
              if (!s) {
                if (n.stateNode === null) throw Error(a(166));
                return Pe(n), null;
              }
              r = ft.current, wu(n) ? Nx(n, r) : (c = cj(o, s, ui.current, r, n), Dv(c, n, !1, !1), n.stateNode = c, jE(c, o, s, r) && Zt(n));
            }
            return Pe(n), Iv(n, n.type, n.pendingProps), null;
          case 6:
            if (r && n.stateNode != null) o = r.memoizedProps, St ? o !== s && Zt(n) : oi && (o !== s ? (n.stateNode = FE(s, ui.current, ft.current, n), Zt(n)) : n.stateNode = r.stateNode);else {
              if (typeof s != "string" && n.stateNode === null) throw Error(a(166));
              if (r = ui.current, o = ft.current, wu(n)) {
                if (!lr) throw Error(a(176));
                if (r = n.stateNode, o = n.memoizedProps, s = null, c = _t, c !== null) switch (c.tag) {
                  case 27:
                  case 5:
                    s = c.memoizedProps;
                }
                t5(r, o, n, s) || Ki(n);
              } else n.stateNode = FE(s, r, o, n);
            }
            return Pe(n), null;
          case 13:
            if (s = n.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
              if (c = wu(n), s !== null && s.dehydrated !== null) {
                if (r === null) {
                  if (!c) throw Error(a(318));
                  if (!lr) throw Error(a(344));
                  if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(a(317));
                  r5(c, n);
                } else Nu(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
                Pe(n), c = !1;
              } else Ar !== null && (Xv(Ar), Ar = null), c = !0;
              if (!c) return n.flags & 256 ? (fn(n), n) : (fn(n), null);
            }
            if (fn(n), n.flags & 128) return n.lanes = o, n;
            if (o = s !== null, r = r !== null && r.memoizedState !== null, o) {
              s = n.child, c = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (c = s.alternate.memoizedState.cachePool.pool);
              var p = null;
              s.memoizedState !== null && s.memoizedState.cachePool !== null && (p = s.memoizedState.cachePool.pool), p !== c && (s.flags |= 2048);
            }
            return o !== r && o && (n.child.flags |= 8192), lc(n, n.updateQueue), Pe(n), null;
          case 4:
            return Ka(), YS(r, n), r === null && dj(n.stateNode.containerInfo), Pe(n), null;
          case 10:
            return vn(n.type), Pe(n), null;
          case 19:
            if (_(Ze), c = n.memoizedState, c === null) return Pe(n), null;
            if (s = (n.flags & 128) !== 0, p = c.rendering, p === null) {
              if (s) ju(c, !1);else {
                if (Le !== 0 || r !== null && r.flags & 128) for (r = n.child; r !== null;) {
                  if (p = $l(r), p !== null) {
                    for (n.flags |= 128, ju(c, !1), r = p.updateQueue, n.updateQueue = r, lc(n, r), n.subtreeFlags = 0, r = o, o = n.child; o !== null;) OE(o, r), o = o.sibling;
                    return x(Ze, Ze.current & 1 | 2), n.child;
                  }
                  r = r.sibling;
                }
                c.tail !== null && qr() > ts && (n.flags |= 128, s = !0, ju(c, !1), n.lanes = 4194304);
              }
            } else {
              if (!s) if (r = $l(p), r !== null) {
                if (n.flags |= 128, s = !0, r = r.updateQueue, n.updateQueue = r, lc(n, r), ju(c, !0), c.tail === null && c.tailMode === "hidden" && !p.alternate && !pe) return Pe(n), null;
              } else 2 * qr() - c.renderingStartTime > ts && o !== 536870912 && (n.flags |= 128, s = !0, ju(c, !1), n.lanes = 4194304);
              c.isBackwards ? (p.sibling = n.child, n.child = p) : (r = c.last, r !== null ? r.sibling = p : n.child = p, c.last = p);
            }
            return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = qr(), n.sibling = null, r = Ze.current, x(Ze, s ? r & 1 | 2 : r & 1), n) : (Pe(n), null);
          case 22:
          case 23:
            return fn(n), iv(), s = n.memoizedState !== null, r !== null ? r.memoizedState !== null !== s && (n.flags |= 8192) : s && (n.flags |= 8192), s ? o & 536870912 && !(n.flags & 128) && (Pe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Pe(n), o = n.updateQueue, o !== null && lc(n, o.retryQueue), o = null, r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), s = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool), s !== o && (n.flags |= 2048), r !== null && _(aa), null;
          case 24:
            return o = null, r !== null && (o = r.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), vn(Ue), Pe(n), null;
          case 25:
            return null;
        }
        throw Error(a(156, n.tag));
      }
      function LL(r, n) {
        switch (G(n), n.tag) {
          case 1:
            return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
          case 3:
            return vn(Ue), Ka(), r = n.flags, r & 65536 && !(r & 128) ? (n.flags = r & -65537 | 128, n) : null;
          case 26:
          case 27:
          case 5:
            return Vl(n), null;
          case 13:
            if (fn(n), r = n.memoizedState, r !== null && r.dehydrated !== null) {
              if (n.alternate === null) throw Error(a(340));
              Nu();
            }
            return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
          case 19:
            return _(Ze), null;
          case 4:
            return Ka(), null;
          case 10:
            return vn(n.type), null;
          case 22:
          case 23:
            return fn(n), iv(), r !== null && _(aa), r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
          case 24:
            return vn(Ue), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function kS(r, n) {
        switch (G(n), n.tag) {
          case 3:
            vn(Ue), Ka();
            break;
          case 26:
          case 27:
          case 5:
            Vl(n);
            break;
          case 4:
            Ka();
            break;
          case 13:
            fn(n);
            break;
          case 19:
            _(Ze);
            break;
          case 10:
            vn(n.type);
            break;
          case 22:
          case 23:
            fn(n), iv(), r !== null && _(aa);
            break;
          case 24:
            vn(Ue);
        }
      }
      function Fu(r, n) {
        try {
          var o = n.updateQueue,
            s = o !== null ? o.lastEffect : null;
          if (s !== null) {
            var c = s.next;
            o = c;
            do {
              if ((o.tag & r) === r) {
                s = void 0;
                var p = o.create,
                  g = o.inst;
                s = p(), g.destroy = s;
              }
              o = o.next;
            } while (o !== c);
          }
        } catch (E) {
          ye(n, n.return, E);
        }
      }
      function ei(r, n, o) {
        try {
          var s = n.updateQueue,
            c = s !== null ? s.lastEffect : null;
          if (c !== null) {
            var p = c.next;
            s = p;
            do {
              if ((s.tag & r) === r) {
                var g = s.inst,
                  E = g.destroy;
                if (E !== void 0) {
                  g.destroy = void 0, c = n;
                  var N = o;
                  try {
                    E();
                  } catch (P) {
                    ye(c, N, P);
                  }
                }
              }
              s = s.next;
            } while (s !== p);
          }
        } catch (P) {
          ye(n, n.return, P);
        }
      }
      function QS(r) {
        var n = r.updateQueue;
        if (n !== null) {
          var o = r.stateNode;
          try {
            Ux(n, o);
          } catch (s) {
            ye(r, r.return, s);
          }
        }
      }
      function ZS(r, n, o) {
        o.props = Vi(r.type, r.memoizedProps), o.state = r.memoizedState;
        try {
          o.componentWillUnmount();
        } catch (s) {
          ye(r, n, s);
        }
      }
      function Xi(r, n) {
        try {
          var o = r.ref;
          if (o !== null) {
            var s = r.stateNode;
            switch (r.tag) {
              case 26:
              case 27:
              case 5:
                var c = Ku(s);
                break;
              default:
                c = s;
            }
            typeof o == "function" ? r.refCleanup = o(c) : o.current = c;
          }
        } catch (p) {
          ye(r, n, p);
        }
      }
      function Wt(r, n) {
        var o = r.ref,
          s = r.refCleanup;
        if (o !== null) if (typeof s == "function") try {
          s();
        } catch (c) {
          ye(r, n, c);
        } finally {
          r.refCleanup = null, r = r.alternate, r != null && (r.refCleanup = null);
        } else if (typeof o == "function") try {
          o(null);
        } catch (c) {
          ye(r, n, c);
        } else o.current = null;
      }
      function WS(r) {
        var n = r.type,
          o = r.memoizedProps,
          s = r.stateNode;
        try {
          Mj(s, n, o, r);
        } catch (c) {
          ye(r, r.return, c);
        }
      }
      function JS(r, n, o) {
        try {
          Bj(r.stateNode, r.type, o, n, r);
        } catch (s) {
          ye(r, r.return, s);
        }
      }
      function $S(r) {
        return r.tag === 5 || r.tag === 3 || (cr ? r.tag === 26 : !1) || (Et ? r.tag === 27 : !1) || r.tag === 4;
      }
      function Uv(r) {
        e: for (;;) {
          for (; r.sibling === null;) {
            if (r.return === null || $S(r.return)) return null;
            r = r.return;
          }
          for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && (!Et || r.tag !== 27) && r.tag !== 18;) {
            if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
            r.child.return = r, r = r.child;
          }
          if (!(r.flags & 2)) return r.stateNode;
        }
      }
      function zv(r, n, o) {
        var s = r.tag;
        if (s === 5 || s === 6) r = r.stateNode, n ? Pj(o, r, n) : Rj(o, r);else if (!(s === 4 || Et && s === 27) && (r = r.child, r !== null)) for (zv(r, n, o), r = r.sibling; r !== null;) zv(r, n, o), r = r.sibling;
      }
      function cc(r, n, o) {
        var s = r.tag;
        if (s === 5 || s === 6) r = r.stateNode, n ? Dj(o, r, n) : Nj(o, r);else if (!(s === 4 || Et && s === 27) && (r = r.child, r !== null)) for (cc(r, n, o), r = r.sibling; r !== null;) cc(r, n, o), r = r.sibling;
      }
      function eE(r, n, o) {
        r = r.containerInfo;
        try {
          kE(r, o);
        } catch (s) {
          ye(n, n.return, s);
        }
      }
      function jL(r, n) {
        for (sj(r.containerInfo), rt = n; rt !== null;) if (r = rt, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, rt = n;else for (; rt !== null;) {
          r = rt;
          var o = r.alternate;
          switch (n = r.flags, r.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (n & 1024 && o !== null) {
                n = void 0;
                var s = r,
                  c = o.memoizedProps;
                o = o.memoizedState;
                var p = s.stateNode;
                try {
                  var g = Vi(s.type, c, s.elementType === s.type);
                  n = p.getSnapshotBeforeUpdate(g, o), p.__reactInternalSnapshotBeforeUpdate = n;
                } catch (E) {
                  ye(s, s.return, E);
                }
              }
              break;
            case 3:
              n & 1024 && St && Hj(r.stateNode.containerInfo);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (n & 1024) throw Error(a(163));
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, rt = n;
            break;
          }
          rt = r.return;
        }
        return g = h1, h1 = !1, g;
      }
      function tE(r, n, o) {
        var s = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            mn(r, o), s & 4 && Fu(5, o);
            break;
          case 1:
            if (mn(r, o), s & 4) if (r = o.stateNode, n === null) try {
              r.componentDidMount();
            } catch (E) {
              ye(o, o.return, E);
            } else {
              var c = Vi(o.type, n.memoizedProps);
              n = n.memoizedState;
              try {
                r.componentDidUpdate(c, n, r.__reactInternalSnapshotBeforeUpdate);
              } catch (E) {
                ye(o, o.return, E);
              }
            }
            s & 64 && QS(o), s & 512 && Xi(o, o.return);
            break;
          case 3:
            if (mn(r, o), s & 64 && (s = o.updateQueue, s !== null)) {
              if (r = null, o.child !== null) switch (o.child.tag) {
                case 27:
                case 5:
                  r = Ku(o.child.stateNode);
                  break;
                case 1:
                  r = o.child.stateNode;
              }
              try {
                Ux(s, r);
              } catch (E) {
                ye(o, o.return, E);
              }
            }
            break;
          case 26:
            if (cr) {
              mn(r, o), s & 512 && Xi(o, o.return);
              break;
            }
          case 27:
          case 5:
            mn(r, o), n === null && s & 4 && WS(o), s & 512 && Xi(o, o.return);
            break;
          case 12:
            mn(r, o);
            break;
          case 13:
            mn(r, o), s & 4 && nE(r, o);
            break;
          case 22:
            if (c = o.memoizedState !== null || Sn, !c) {
              n = n !== null && n.memoizedState !== null || ze;
              var p = Sn,
                g = ze;
              Sn = c, (ze = n) && !g ? ti(r, o, (o.subtreeFlags & 8772) !== 0) : mn(r, o), Sn = p, ze = g;
            }
            s & 512 && (o.memoizedProps.mode === "manual" ? Xi(o, o.return) : Wt(o, o.return));
            break;
          default:
            mn(r, o);
        }
      }
      function rE(r) {
        var n = r.alternate;
        n !== null && (r.alternate = null, rE(n)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (n = r.stateNode, n !== null && hj(n)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
      }
      function Tr(r, n, o) {
        for (o = o.child; o !== null;) Lv(r, n, o), o = o.sibling;
      }
      function Lv(r, n, o) {
        if (rr && typeof rr.onCommitFiberUnmount == "function") try {
          rr.onCommitFiberUnmount(Xu, o);
        } catch (_unused61) {}
        switch (o.tag) {
          case 26:
            if (cr) {
              ze || Wt(o, n), Tr(r, n, o), o.memoizedState ? n1(o.memoizedState) : o.stateNode && a1(o.stateNode);
              break;
            }
          case 27:
            if (Et) {
              ze || Wt(o, n);
              var s = Ve,
                c = ir;
              Ve = o.stateNode, Tr(r, n, o), y5(o.stateNode), Ve = s, ir = c;
              break;
            }
          case 5:
            ze || Wt(o, n);
          case 6:
            if (St) {
              if (s = Ve, c = ir, Ve = null, Tr(r, n, o), Ve = s, ir = c, Ve !== null) if (ir) try {
                Uj(Ve, o.stateNode);
              } catch (p) {
                ye(o, n, p);
              } else try {
                Ij(Ve, o.stateNode);
              } catch (p) {
                ye(o, n, p);
              }
            } else Tr(r, n, o);
            break;
          case 18:
            St && Ve !== null && (ir ? u5(Ve, o.stateNode) : o5(Ve, o.stateNode));
            break;
          case 4:
            St ? (s = Ve, c = ir, Ve = o.stateNode.containerInfo, ir = !0, Tr(r, n, o), Ve = s, ir = c) : (oi && eE(o.stateNode, o, YE()), Tr(r, n, o));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            ze || ei(2, o, n), ze || ei(4, o, n), Tr(r, n, o);
            break;
          case 1:
            ze || (Wt(o, n), s = o.stateNode, typeof s.componentWillUnmount == "function" && ZS(o, n, s)), Tr(r, n, o);
            break;
          case 21:
            Tr(r, n, o);
            break;
          case 22:
            ze || Wt(o, n), ze = (s = ze) || o.memoizedState !== null, Tr(r, n, o), ze = s;
            break;
          default:
            Tr(r, n, o);
        }
      }
      function nE(r, n) {
        if (lr && n.memoizedState === null && (r = n.alternate, r !== null && (r = r.memoizedState, r !== null && (r = r.dehydrated, r !== null)))) try {
          a5(r);
        } catch (o) {
          ye(n, n.return, o);
        }
      }
      function FL(r) {
        switch (r.tag) {
          case 13:
          case 19:
            var n = r.stateNode;
            return n === null && (n = r.stateNode = new m1()), n;
          case 22:
            return r = r.stateNode, n = r._retryCache, n === null && (n = r._retryCache = new m1()), n;
          default:
            throw Error(a(435, r.tag));
        }
      }
      function jv(r, n) {
        var o = FL(r);
        n.forEach(function (s) {
          var c = QL.bind(null, r, s);
          o.has(s) || (o.add(s), s.then(c, c));
        });
      }
      function zt(r, n) {
        var o = n.deletions;
        if (o !== null) for (var s = 0; s < o.length; s++) {
          var c = o[s],
            p = r,
            g = n;
          if (St) {
            var E = g;
            e: for (; E !== null;) {
              switch (E.tag) {
                case 27:
                case 5:
                  Ve = E.stateNode, ir = !1;
                  break e;
                case 3:
                  Ve = E.stateNode.containerInfo, ir = !0;
                  break e;
                case 4:
                  Ve = E.stateNode.containerInfo, ir = !0;
                  break e;
              }
              E = E.return;
            }
            if (Ve === null) throw Error(a(160));
            Lv(p, g, c), Ve = null, ir = !1;
          } else Lv(p, g, c);
          p = c.alternate, p !== null && (p.return = null), c.return = null;
        }
        if (n.subtreeFlags & 13878) for (n = n.child; n !== null;) iE(n, r), n = n.sibling;
      }
      function iE(r, n) {
        var o = r.alternate,
          s = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            zt(n, r), Jt(r), s & 4 && (ei(3, r, r.return), Fu(3, r), ei(5, r, r.return));
            break;
          case 1:
            zt(n, r), Jt(r), s & 512 && (ze || o === null || Wt(o, o.return)), s & 64 && Sn && (r = r.updateQueue, r !== null && (s = r.callbacks, s !== null && (o = r.shared.hiddenCallbacks, r.shared.hiddenCallbacks = o === null ? s : o.concat(s))));
            break;
          case 26:
            if (cr) {
              var c = _r;
              zt(n, r), Jt(r), s & 512 && (ze || o === null || Wt(o, o.return)), s & 4 && (s = o !== null ? o.memoizedState : null, n = r.memoizedState, o === null ? n === null ? r.stateNode === null ? r.stateNode = c5(c, r.type, r.memoizedProps, r) : i1(c, r.type, r.stateNode) : r.stateNode = r1(c, n, r.memoizedProps) : s !== n ? (s === null ? o.stateNode !== null && a1(o.stateNode) : n1(s), n === null ? i1(c, r.type, r.stateNode) : r1(c, n, r.memoizedProps)) : n === null && r.stateNode !== null && JS(r, r.memoizedProps, o.memoizedProps));
              break;
            }
          case 27:
            if (Et && s & 4 && r.alternate === null) {
              c = r.stateNode;
              var p = r.memoizedProps;
              try {
                m5(c), h5(r.type, p, c, r);
              } catch (F) {
                ye(r, r.return, F);
              }
            }
          case 5:
            if (zt(n, r), Jt(r), s & 512 && (ze || o === null || Wt(o, o.return)), St) {
              if (r.flags & 32) {
                n = r.stateNode;
                try {
                  VE(n);
                } catch (F) {
                  ye(r, r.return, F);
                }
              }
              s & 4 && r.stateNode != null && (n = r.memoizedProps, JS(r, n, o !== null ? o.memoizedProps : n)), s & 1024 && (wm = !0);
            }
            break;
          case 6:
            if (zt(n, r), Jt(r), s & 4 && St) {
              if (r.stateNode === null) throw Error(a(162));
              s = r.memoizedProps, o = o !== null ? o.memoizedProps : s, n = r.stateNode;
              try {
                Cj(n, o, s);
              } catch (F) {
                ye(r, r.return, F);
              }
            }
            break;
          case 3:
            if (cr ? (p5(), c = _r, _r = vm(n.containerInfo), zt(n, r), _r = c) : zt(n, r), Jt(r), s & 4) {
              if (St && lr && o !== null && o.memoizedState.isDehydrated) try {
                i5(n.containerInfo);
              } catch (F) {
                ye(r, r.return, F);
              }
              if (oi) {
                s = n.containerInfo, o = n.pendingChildren;
                try {
                  kE(s, o);
                } catch (F) {
                  ye(r, r.return, F);
                }
              }
            }
            wm && (wm = !1, aE(r));
            break;
          case 4:
            cr ? (o = _r, _r = vm(r.stateNode.containerInfo), zt(n, r), Jt(r), _r = o) : (zt(n, r), Jt(r)), s & 4 && oi && eE(r.stateNode, r, r.stateNode.pendingChildren);
            break;
          case 12:
            zt(n, r), Jt(r);
            break;
          case 13:
            zt(n, r), Jt(r), r.child.flags & 8192 && r.memoizedState !== null != (o !== null && o.memoizedState !== null) && (Mm = qr()), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, jv(r, s)));
            break;
          case 22:
            s & 512 && (ze || o === null || Wt(o, o.return)), c = r.memoizedState !== null;
            var g = o !== null && o.memoizedState !== null,
              E = Sn,
              N = ze;
            if (Sn = E || c, ze = N || g, zt(n, r), ze = N, Sn = E, Jt(r), n = r.stateNode, n._current = r, n._visibility &= -3, n._visibility |= n._pendingVisibility & 2, s & 8192 && (n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (n = Sn || ze, o === null || g || n || Xa(r)), St && (r.memoizedProps === null || r.memoizedProps.mode !== "manual"))) {
              e: if (o = null, St) for (n = r;;) {
                if (n.tag === 5 || cr && n.tag === 26 || Et && n.tag === 27) {
                  if (o === null) {
                    g = o = n;
                    try {
                      p = g.stateNode, c ? zj(p) : jj(g.stateNode, g.memoizedProps);
                    } catch (F) {
                      ye(g, g.return, F);
                    }
                  }
                } else if (n.tag === 6) {
                  if (o === null) {
                    g = n;
                    try {
                      var P = g.stateNode;
                      c ? Lj(P) : Fj(P, g.memoizedProps);
                    } catch (F) {
                      ye(g, g.return, F);
                    }
                  }
                } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === r) && n.child !== null) {
                  n.child.return = n, n = n.child;
                  continue;
                }
                if (n === r) break e;
                for (; n.sibling === null;) {
                  if (n.return === null || n.return === r) break e;
                  o === n && (o = null), n = n.return;
                }
                o === n && (o = null), n.sibling.return = n.return, n = n.sibling;
              }
            }
            s & 4 && (s = r.updateQueue, s !== null && (o = s.retryQueue, o !== null && (s.retryQueue = null, jv(r, o))));
            break;
          case 19:
            zt(n, r), Jt(r), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, jv(r, s)));
            break;
          case 21:
            break;
          default:
            zt(n, r), Jt(r);
        }
      }
      function Jt(r) {
        var n = r.flags;
        if (n & 2) {
          try {
            if (St && (!Et || r.tag !== 27)) {
              e: {
                for (var o = r.return; o !== null;) {
                  if ($S(o)) {
                    var s = o;
                    break e;
                  }
                  o = o.return;
                }
                throw Error(a(160));
              }
              switch (s.tag) {
                case 27:
                  if (Et) {
                    var c = s.stateNode,
                      p = Uv(r);
                    cc(r, p, c);
                    break;
                  }
                case 5:
                  var g = s.stateNode;
                  s.flags & 32 && (VE(g), s.flags &= -33);
                  var E = Uv(r);
                  cc(r, E, g);
                  break;
                case 3:
                case 4:
                  var N = s.stateNode.containerInfo,
                    P = Uv(r);
                  zv(r, P, N);
                  break;
                default:
                  throw Error(a(161));
              }
            }
          } catch (F) {
            ye(r, r.return, F);
          }
          r.flags &= -3;
        }
        n & 4096 && (r.flags &= -4097);
      }
      function aE(r) {
        if (r.subtreeFlags & 1024) for (r = r.child; r !== null;) {
          var n = r;
          aE(n), n.tag === 5 && n.flags & 1024 && xj(n.stateNode), r = r.sibling;
        }
      }
      function mn(r, n) {
        if (n.subtreeFlags & 8772) for (n = n.child; n !== null;) tE(r, n.alternate, n), n = n.sibling;
      }
      function Xa(r) {
        for (r = r.child; r !== null;) {
          var n = r;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              ei(4, n, n.return), Xa(n);
              break;
            case 1:
              Wt(n, n.return);
              var o = n.stateNode;
              typeof o.componentWillUnmount == "function" && ZS(n, n.return, o), Xa(n);
              break;
            case 26:
            case 27:
            case 5:
              Wt(n, n.return), Xa(n);
              break;
            case 22:
              Wt(n, n.return), n.memoizedState === null && Xa(n);
              break;
            default:
              Xa(n);
          }
          r = r.sibling;
        }
      }
      function ti(r, n, o) {
        for (o = o && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
          var s = n.alternate,
            c = r,
            p = n,
            g = p.flags;
          switch (p.tag) {
            case 0:
            case 11:
            case 15:
              ti(c, p, o), Fu(4, p);
              break;
            case 1:
              if (ti(c, p, o), s = p, c = s.stateNode, typeof c.componentDidMount == "function") try {
                c.componentDidMount();
              } catch (P) {
                ye(s, s.return, P);
              }
              if (s = p, c = s.updateQueue, c !== null) {
                var E = s.stateNode;
                try {
                  var N = c.shared.hiddenCallbacks;
                  if (N !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < N.length; c++) Ix(N[c], E);
                } catch (P) {
                  ye(s, s.return, P);
                }
              }
              o && g & 64 && QS(p), Xi(p, p.return);
              break;
            case 26:
            case 27:
            case 5:
              ti(c, p, o), o && s === null && g & 4 && WS(p), Xi(p, p.return);
              break;
            case 12:
              ti(c, p, o);
              break;
            case 13:
              ti(c, p, o), o && g & 4 && nE(c, p);
              break;
            case 22:
              p.memoizedState === null && ti(c, p, o), Xi(p, p.return);
              break;
            default:
              ti(c, p, o);
          }
          n = n.sibling;
        }
      }
      function Fv(r, n) {
        var o = null;
        r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== o && (r != null && r.refCount++, o != null && Lu(o));
      }
      function Hv(r, n) {
        r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && Lu(r));
      }
      function ri(r, n, o, s) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) oE(r, n, o, s), n = n.sibling;
      }
      function oE(r, n, o, s) {
        var c = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ri(r, n, o, s), c & 2048 && Fu(9, n);
            break;
          case 3:
            ri(r, n, o, s), c & 2048 && (r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && Lu(r)));
            break;
          case 12:
            if (c & 2048) {
              ri(r, n, o, s), r = n.stateNode;
              try {
                var p = n.memoizedProps,
                  g = p.id,
                  E = p.onPostCommit;
                typeof E == "function" && E(g, n.alternate === null ? "mount" : "update", r.passiveEffectDuration, -0);
              } catch (N) {
                ye(n, n.return, N);
              }
            } else ri(r, n, o, s);
            break;
          case 23:
            break;
          case 22:
            p = n.stateNode, n.memoizedState !== null ? p._visibility & 4 ? ri(r, n, o, s) : Hu(r, n) : p._visibility & 4 ? ri(r, n, o, s) : (p._visibility |= 4, ka(r, n, o, s, (n.subtreeFlags & 10256) !== 0)), c & 2048 && Fv(n.alternate, n);
            break;
          case 24:
            ri(r, n, o, s), c & 2048 && Hv(n.alternate, n);
            break;
          default:
            ri(r, n, o, s);
        }
      }
      function ka(r, n, o, s, c) {
        for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null;) {
          var p = r,
            g = n,
            E = o,
            N = s,
            P = g.flags;
          switch (g.tag) {
            case 0:
            case 11:
            case 15:
              ka(p, g, E, N, c), Fu(8, g);
              break;
            case 23:
              break;
            case 22:
              var F = g.stateNode;
              g.memoizedState !== null ? F._visibility & 4 ? ka(p, g, E, N, c) : Hu(p, g) : (F._visibility |= 4, ka(p, g, E, N, c)), c && P & 2048 && Fv(g.alternate, g);
              break;
            case 24:
              ka(p, g, E, N, c), c && P & 2048 && Hv(g.alternate, g);
              break;
            default:
              ka(p, g, E, N, c);
          }
          n = n.sibling;
        }
      }
      function Hu(r, n) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) {
          var o = r,
            s = n,
            c = s.flags;
          switch (s.tag) {
            case 22:
              Hu(o, s), c & 2048 && Fv(s.alternate, s);
              break;
            case 24:
              Hu(o, s), c & 2048 && Hv(s.alternate, s);
              break;
            default:
              Hu(o, s);
          }
          n = n.sibling;
        }
      }
      function ki(r) {
        if (r.subtreeFlags & mo) for (r = r.child; r !== null;) uE(r), r = r.sibling;
      }
      function uE(r) {
        switch (r.tag) {
          case 26:
            ki(r), r.flags & mo && (r.memoizedState !== null ? v5(_r, r.memoizedState, r.memoizedProps) : KE(r.type, r.memoizedProps));
            break;
          case 5:
            ki(r), r.flags & mo && KE(r.type, r.memoizedProps);
            break;
          case 3:
          case 4:
            if (cr) {
              var n = _r;
              _r = vm(r.stateNode.containerInfo), ki(r), _r = n;
            } else ki(r);
            break;
          case 22:
            r.memoizedState === null && (n = r.alternate, n !== null && n.memoizedState !== null ? (n = mo, mo = 16777216, ki(r), mo = n) : ki(r));
            break;
          default:
            ki(r);
        }
      }
      function sE(r) {
        var n = r.alternate;
        if (n !== null && (r = n.child, r !== null)) {
          n.child = null;
          do n = r.sibling, r.sibling = null, r = n; while (r !== null);
        }
      }
      function Gu(r) {
        var n = r.deletions;
        if (r.flags & 16) {
          if (n !== null) for (var o = 0; o < n.length; o++) {
            var s = n[o];
            rt = s, cE(s, r);
          }
          sE(r);
        }
        if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) lE(r), r = r.sibling;
      }
      function lE(r) {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            Gu(r), r.flags & 2048 && ei(9, r, r.return);
            break;
          case 3:
            Gu(r);
            break;
          case 12:
            Gu(r);
            break;
          case 22:
            var n = r.stateNode;
            r.memoizedState !== null && n._visibility & 4 && (r.return === null || r.return.tag !== 13) ? (n._visibility &= -5, fc(r)) : Gu(r);
            break;
          default:
            Gu(r);
        }
      }
      function fc(r) {
        var n = r.deletions;
        if (r.flags & 16) {
          if (n !== null) for (var o = 0; o < n.length; o++) {
            var s = n[o];
            rt = s, cE(s, r);
          }
          sE(r);
        }
        for (r = r.child; r !== null;) {
          switch (n = r, n.tag) {
            case 0:
            case 11:
            case 15:
              ei(8, n, n.return), fc(n);
              break;
            case 22:
              o = n.stateNode, o._visibility & 4 && (o._visibility &= -5, fc(n));
              break;
            default:
              fc(n);
          }
          r = r.sibling;
        }
      }
      function cE(r, n) {
        for (; rt !== null;) {
          var o = rt;
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              ei(8, o, n);
              break;
            case 23:
            case 22:
              if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
                var s = o.memoizedState.cachePool.pool;
                s != null && s.refCount++;
              }
              break;
            case 24:
              Lu(o.memoizedState.cache);
          }
          if (s = o.child, s !== null) s.return = o, rt = s;else e: for (o = r; rt !== null;) {
            s = rt;
            var c = s.sibling,
              p = s.return;
            if (rE(s), s === o) {
              rt = null;
              break e;
            }
            if (c !== null) {
              c.return = p, rt = c;
              break e;
            }
            rt = p;
          }
        }
      }
      function Gv(r) {
        var n = HE(r);
        if (n != null) {
          if (typeof n.memoizedProps["data-testname"] != "string") throw Error(a(364));
          return n;
        }
        if (r = Tj(r), r === null) throw Error(a(362));
        return r.stateNode.current;
      }
      function Kv(r, n) {
        var o = r.tag;
        switch (n.$$typeof) {
          case Rc:
            if (r.type === n.value) return !0;
            break;
          case Cc:
            e: {
              for (n = n.value, r = [r, 0], o = 0; o < r.length;) {
                var s = r[o++],
                  c = s.tag,
                  p = r[o++],
                  g = n[p];
                if (c !== 5 && c !== 26 && c !== 27 || !Yu(s)) {
                  for (; g != null && Kv(s, g);) p++, g = n[p];
                  if (p === n.length) {
                    n = !0;
                    break e;
                  } else for (s = s.child; s !== null;) r.push(s, p), s = s.sibling;
                }
              }
              n = !1;
            }
            return n;
          case Mc:
            if ((o === 5 || o === 26 || o === 27) && _j(r.stateNode, n.value)) return !0;
            break;
          case Dc:
            if ((o === 5 || o === 6 || o === 26 || o === 27) && (r = Aj(r), r !== null && 0 <= r.indexOf(n.value))) return !0;
            break;
          case Bc:
            if ((o === 5 || o === 26 || o === 27) && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === n.value.toLowerCase())) return !0;
            break;
          default:
            throw Error(a(365));
        }
        return !1;
      }
      function Vv(r) {
        switch (r.$$typeof) {
          case Rc:
            return "<" + (l(r.value) || "Unknown") + ">";
          case Cc:
            return ":has(" + (Vv(r) || "") + ")";
          case Mc:
            return '[role="' + r.value + '"]';
          case Dc:
            return '"' + r.value + '"';
          case Bc:
            return '[data-testname="' + r.value + '"]';
          default:
            throw Error(a(365));
        }
      }
      function fE(r, n) {
        var o = [];
        r = [r, 0];
        for (var s = 0; s < r.length;) {
          var c = r[s++],
            p = c.tag,
            g = r[s++],
            E = n[g];
          if (p !== 5 && p !== 26 && p !== 27 || !Yu(c)) {
            for (; E != null && Kv(c, E);) g++, E = n[g];
            if (g === n.length) o.push(c);else for (c = c.child; c !== null;) r.push(c, g), c = c.sibling;
          }
        }
        return o;
      }
      function Yv(r, n) {
        if (!Vu) throw Error(a(363));
        r = Gv(r), r = fE(r, n), n = [], r = Array.from(r);
        for (var o = 0; o < r.length;) {
          var s = r[o++],
            c = s.tag;
          if (c === 5 || c === 26 || c === 27) Yu(s) || n.push(s.stateNode);else for (s = s.child; s !== null;) r.push(s), s = s.sibling;
        }
        return n;
      }
      function $t() {
        if (be & 2 && fe !== 0) return fe & -fe;
        if (ee.T !== null) {
          var r = uo;
          return r !== 0 ? r : $d();
        }
        return vj();
      }
      function pE() {
        mr === 0 && (mr = !(fe & 536870912) || pe ? k() : 536870912);
        var r = vr.current;
        return r !== null && (r.flags |= 32), mr;
      }
      function At(r, n, o) {
        (r === Ae && _e === 2 || r.cancelPendingCommit !== null) && (Qa(r, 0), hn(r, fe, mr, !1)), he(r, o), (!(be & 2) || r !== Ae) && (r === Ae && (!(be & 2) && (oa |= o), Le === 4 && hn(r, fe, mr, !1)), Ur(r));
      }
      function dE(r, n, o) {
        if (be & 6) throw Error(a(327));
        var s = !o && (n & 60) === 0 && (n & r.expiredLanes) === 0 || B(r, n),
          c = s ? KL(r, n) : Zv(r, n, !0),
          p = s;
        do {
          if (c === 0) {
            ho && !s && hn(r, n, 0, !1);
            break;
          } else if (c === 6) hn(r, n, 0, !En);else {
            if (o = r.current.alternate, p && !HL(o)) {
              c = Zv(r, n, !1), p = !1;
              continue;
            }
            if (c === 2) {
              if (p = n, r.errorRecoveryDisabledLanes & p) var g = 0;else g = r.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
              if (g !== 0) {
                n = g;
                e: {
                  var E = r;
                  c = es;
                  var N = lr && E.current.memoizedState.isDehydrated;
                  if (N && (Qa(E, g).flags |= 256), g = Zv(E, g, !1), g !== 2) {
                    if (Nm && !N) {
                      E.errorRecoveryDisabledLanes |= p, oa |= p, c = 4;
                      break e;
                    }
                    p = Fr, Fr = c, p !== null && Xv(p);
                  }
                  c = g;
                }
                if (p = !1, c !== 2) continue;
              }
            }
            if (c === 1) {
              Qa(r, 0), hn(r, n, 0, !0);
              break;
            }
            e: {
              switch (s = r, c) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 4:
                  if ((n & 4194176) === n) {
                    hn(s, n, mr, !En);
                    break e;
                  }
                  break;
                case 2:
                  Fr = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(a(329));
              }
              if (s.finishedWork = o, s.finishedLanes = n, (n & 62914560) === n && (p = Mm + 300 - qr(), 10 < p)) {
                if (hn(s, n, mr, !En), w(s, 0) !== 0) break e;
                s.timeoutHandle = fj(vE.bind(null, s, o, Fr, Pc, Cm, n, mr, oa, yo, En, 2, -0, 0), p);
                break e;
              }
              vE(s, o, Fr, Pc, Cm, n, mr, oa, yo, En, 0, -0, 0);
            }
          }
          break;
        } while (!0);
        Ur(r);
      }
      function Xv(r) {
        Fr === null ? Fr = r : Fr.push.apply(Fr, r);
      }
      function vE(r, n, o, s, c, p, g, E, N, P, F, V, Y) {
        var re = n.subtreeFlags;
        if ((re & 8192 || (re & 16785408) === 16785408) && (gj(), uE(n), n = bj(), n !== null)) {
          r.cancelPendingCommit = n(TE.bind(null, r, o, s, c, g, E, N, 1, V, Y)), hn(r, p, g, !P);
          return;
        }
        TE(r, o, s, c, g, E, N, F, V, Y);
      }
      function HL(r) {
        for (var n = r;;) {
          var o = n.tag;
          if ((o === 0 || o === 11 || o === 15) && n.flags & 16384 && (o = n.updateQueue, o !== null && (o = o.stores, o !== null))) for (var s = 0; s < o.length; s++) {
            var c = o[s],
              p = c.getSnapshot;
            c = c.value;
            try {
              if (!nr(p(), c)) return !1;
            } catch (_unused62) {
              return !1;
            }
          }
          if (o = n.child, n.subtreeFlags & 16384 && o !== null) o.return = n, n = o;else {
            if (n === r) break;
            for (; n.sibling === null;) {
              if (n.return === null || n.return === r) return !0;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
        }
        return !0;
      }
      function hn(r, n, o, s) {
        n &= ~Rm, n &= ~oa, r.suspendedLanes |= n, r.pingedLanes &= ~n, s && (r.warmLanes |= n), s = r.expirationTimes;
        for (var c = n; 0 < c;) {
          var p = 31 - tr(c),
            g = 1 << p;
          s[p] = -1, c &= ~g;
        }
        o !== 0 && ce(r, o, n);
      }
      function mE() {
        return be & 6 ? !0 : (Va(0, !1), !1);
      }
      function kv() {
        if (ue !== null) {
          if (_e === 0) var r = ue.return;else r = ue, xn = ia = null, lv(r), co = null, Wu = 0, r = ue;
          for (; r !== null;) kS(r.alternate, r), r = r.return;
          ue = null;
        }
      }
      function Qa(r, n) {
        r.finishedWork = null, r.finishedLanes = 0;
        var o = r.timeoutHandle;
        o !== fm && (r.timeoutHandle = fm, pj(o)), o = r.cancelPendingCommit, o !== null && (r.cancelPendingCommit = null, o()), kv(), Ae = r, ue = o = ni(r.current, null), fe = n, _e = 0, ar = null, En = !1, ho = B(r, n), Nm = !1, yo = mr = Rm = oa = fi = Le = 0, Fr = es = null, Cm = !1, n & 8 && (n |= n & 32);
        var s = r.entangledLanes;
        if (s !== 0) for (r = r.entanglements, s &= n; 0 < s;) {
          var c = 31 - tr(s),
            p = 1 << c;
          n |= r[c], s &= ~p;
        }
        return Tn = n, Yl(), o;
      }
      function hE(r, n) {
        ae = null, ee.H = jr, n === Zu ? (n = jx(), _e = 3) : n === qm ? (n = jx(), _e = 4) : _e = n === d1 ? 8 : n !== null && _typeof(n) == "object" && typeof n.then == "function" ? 6 : 1, ar = n, ue === null && (Le = 1, ac(r, lt(n, r.current)));
      }
      function yE() {
        var r = vr.current;
        return r === null ? !0 : (fe & 4194176) === fe ? Lr === null : (fe & 62914560) === fe || fe & 536870912 ? r === Lr : !1;
      }
      function gE() {
        var r = ee.H;
        return ee.H = jr, r === null ? jr : r;
      }
      function bE() {
        var r = ee.A;
        return ee.A = C5, r;
      }
      function Qv() {
        Le = 4, En || (fe & 4194176) !== fe && vr.current !== null || (ho = !0), !(fi & 134217727) && !(oa & 134217727) || Ae === null || hn(Ae, fe, mr, !1);
      }
      function Zv(r, n, o) {
        var s = be;
        be |= 2;
        var c = gE(),
          p = bE();
        (Ae !== r || fe !== n) && (Pc = null, Qa(r, n)), n = !1;
        var g = Le;
        e: do try {
          if (_e !== 0 && ue !== null) {
            var E = ue,
              N = ar;
            switch (_e) {
              case 8:
                kv(), g = 6;
                break e;
              case 3:
              case 2:
              case 6:
                vr.current === null && (n = !0);
                var P = _e;
                if (_e = 0, ar = null, Za(r, E, N, P), o && ho) {
                  g = 0;
                  break e;
                }
                break;
              default:
                P = _e, _e = 0, ar = null, Za(r, E, N, P);
            }
          }
          GL(), g = Le;
          break;
        } catch (F) {
          hE(r, F);
        } while (!0);
        return n && r.shellSuspendCounter++, xn = ia = null, be = s, ee.H = c, ee.A = p, ue === null && (Ae = null, fe = 0, Yl()), g;
      }
      function GL() {
        for (; ue !== null;) xE(ue);
      }
      function KL(r, n) {
        var o = be;
        be |= 2;
        var s = gE(),
          c = bE();
        Ae !== r || fe !== n ? (Pc = null, ts = qr() + 500, Qa(r, n)) : ho = B(r, n);
        e: do try {
          if (_e !== 0 && ue !== null) {
            n = ue;
            var p = ar;
            t: switch (_e) {
              case 1:
                _e = 0, ar = null, Za(r, n, p, 1);
                break;
              case 2:
                if (zx(p)) {
                  _e = 0, ar = null, SE(n);
                  break;
                }
                n = function n() {
                  _e === 2 && Ae === r && (_e = 7), Ur(r);
                }, p.then(n, n);
                break e;
              case 3:
                _e = 7;
                break e;
              case 4:
                _e = 5;
                break e;
              case 7:
                zx(p) ? (_e = 0, ar = null, SE(n)) : (_e = 0, ar = null, Za(r, n, p, 7));
                break;
              case 5:
                var g = null;
                switch (ue.tag) {
                  case 26:
                    g = ue.memoizedState;
                  case 5:
                  case 27:
                    var E = ue,
                      N = E.type,
                      P = E.pendingProps;
                    if (g ? o1(g) : GE(N, P)) {
                      _e = 0, ar = null;
                      var F = E.sibling;
                      if (F !== null) ue = F;else {
                        var V = E.return;
                        V !== null ? (ue = V, pc(V)) : ue = null;
                      }
                      break t;
                    }
                }
                _e = 0, ar = null, Za(r, n, p, 5);
                break;
              case 6:
                _e = 0, ar = null, Za(r, n, p, 6);
                break;
              case 8:
                kv(), Le = 6;
                break e;
              default:
                throw Error(a(462));
            }
          }
          VL();
          break;
        } catch (Y) {
          hE(r, Y);
        } while (!0);
        return xn = ia = null, ee.H = s, ee.A = c, be = o, ue !== null ? 0 : (Ae = null, fe = 0, Yl(), Le);
      }
      function VL() {
        for (; ue !== null && !x5();) xE(ue);
      }
      function xE(r) {
        var n = FS(r.alternate, r, Tn);
        r.memoizedProps = r.pendingProps, n === null ? pc(r) : ue = n;
      }
      function SE(r) {
        var n = r,
          o = n.alternate;
        switch (n.tag) {
          case 15:
          case 0:
            n = PS(o, n, n.pendingProps, n.type, void 0, fe);
            break;
          case 11:
            n = PS(o, n, n.pendingProps, n.type.render, n.ref, fe);
            break;
          case 5:
            lv(n);
          default:
            kS(o, n), n = ue = OE(n, Tn), n = FS(o, n, Tn);
        }
        r.memoizedProps = r.pendingProps, n === null ? pc(r) : ue = n;
      }
      function Za(r, n, o, s) {
        xn = ia = null, lv(n), co = null, Wu = 0;
        var c = n.return;
        try {
          if (IL(r, c, n, o, fe)) {
            Le = 1, ac(r, lt(o, r.current)), ue = null;
            return;
          }
        } catch (p) {
          if (c !== null) throw ue = c, p;
          Le = 1, ac(r, lt(o, r.current)), ue = null;
          return;
        }
        n.flags & 32768 ? (pe || s === 1 ? r = !0 : ho || fe & 536870912 ? r = !1 : (En = r = !0, (s === 2 || s === 3 || s === 6) && (s = vr.current, s !== null && s.tag === 13 && (s.flags |= 16384))), EE(n, r)) : pc(n);
      }
      function pc(r) {
        var n = r;
        do {
          if (n.flags & 32768) {
            EE(n, En);
            return;
          }
          r = n.return;
          var o = zL(n.alternate, n, Tn);
          if (o !== null) {
            ue = o;
            return;
          }
          if (n = n.sibling, n !== null) {
            ue = n;
            return;
          }
          ue = n = r;
        } while (n !== null);
        Le === 0 && (Le = 5);
      }
      function EE(r, n) {
        do {
          var o = LL(r.alternate, r);
          if (o !== null) {
            o.flags &= 32767, ue = o;
            return;
          }
          if (o = r.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !n && (r = r.sibling, r !== null)) {
            ue = r;
            return;
          }
          ue = r = o;
        } while (r !== null);
        Le = 6, ue = null;
      }
      function TE(r, n, o, s, c, p, g, E, N, P) {
        var F = ee.T,
          V = Wi();
        try {
          Lt(2), ee.T = null, YL(r, n, o, s, V, c, p, g, E, N, P);
        } finally {
          ee.T = F, Lt(V);
        }
      }
      function YL(r, n, o, s, c, p, g, E) {
        do Qi(); while (ua !== null);
        if (be & 6) throw Error(a(327));
        var N = r.finishedWork;
        if (s = r.finishedLanes, N === null) return null;
        if (r.finishedWork = null, r.finishedLanes = 0, N === r.current) throw Error(a(177));
        r.callbackNode = null, r.callbackPriority = 0, r.cancelPendingCommit = null;
        var P = N.lanes | N.childLanes;
        if (P |= bm, qe(r, s, P, p, g, E), r === Ae && (ue = Ae = null, fe = 0), !(N.subtreeFlags & 10256) && !(N.flags & 10256) || Ic || (Ic = !0, Bm = P, Dm = o, ZL(ym, function () {
          return Qi(!0), null;
        })), o = (N.flags & 15990) !== 0, N.subtreeFlags & 15990 || o ? (o = ee.T, ee.T = null, p = Wi(), Lt(2), g = be, be |= 4, jL(r, N), iE(N, r), lj(r.containerInfo), r.current = N, tE(r, N.alternate, N), S5(), be = g, Lt(p), ee.T = o) : r.current = N, Ic ? (Ic = !1, ua = r, rs = s) : qE(r, P), P = r.pendingLanes, P === 0 && (pi = null), cn(N.stateNode, c), Ur(r), n !== null) for (c = r.onRecoverableError, N = 0; N < n.length; N++) P = n[N], c(P.value, {
          componentStack: P.stack
        });
        return rs & 3 && Qi(), P = r.pendingLanes, s & 4194218 && P & 42 ? r === Pm ? ns++ : (ns = 0, Pm = r) : ns = 0, Va(0, !1), null;
      }
      function qE(r, n) {
        (r.pooledCacheLanes &= n) === 0 && (n = r.pooledCache, n != null && (r.pooledCache = null, Lu(n)));
      }
      function Qi() {
        if (ua !== null) {
          var r = ua,
            n = Bm;
          Bm = 0;
          var o = Ir(rs),
            s = 32 > o ? 32 : o;
          o = ee.T;
          var c = Wi();
          try {
            if (Lt(s), ee.T = null, ua === null) var p = !1;else {
              s = Dm, Dm = null;
              var g = ua,
                E = rs;
              if (ua = null, rs = 0, be & 6) throw Error(a(331));
              var N = be;
              if (be |= 4, lE(g.current), oE(g, g.current, E, s), be = N, Va(0, !1), rr && typeof rr.onPostCommitFiberRoot == "function") try {
                rr.onPostCommitFiberRoot(Xu, g);
              } catch (_unused63) {}
              p = !0;
            }
            return p;
          } finally {
            Lt(c), ee.T = o, qE(r, n);
          }
        }
        return !1;
      }
      function AE(r, n, o) {
        n = lt(o, n), n = Sv(r.stateNode, n, 2), r = Zn(r, n, 2), r !== null && (he(r, 2), Ur(r));
      }
      function ye(r, n, o) {
        if (r.tag === 3) AE(r, r, o);else for (; n !== null;) {
          if (n.tag === 3) {
            AE(n, r, o);
            break;
          } else if (n.tag === 1) {
            var s = n.stateNode;
            if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (pi === null || !pi.has(s))) {
              r = lt(o, r), o = wS(2), s = Zn(n, o, 2), s !== null && (NS(o, s, n, r), he(s, 2), Ur(s));
              break;
            }
          }
          n = n.return;
        }
      }
      function Wv(r, n, o) {
        var s = r.pingCache;
        if (s === null) {
          s = r.pingCache = new M5();
          var c = new Set();
          s.set(n, c);
        } else c = s.get(n), c === void 0 && (c = new Set(), s.set(n, c));
        c.has(o) || (Nm = !0, c.add(o), r = XL.bind(null, r, n, o), n.then(r, r));
      }
      function XL(r, n, o) {
        var s = r.pingCache;
        s !== null && s.delete(n), r.pingedLanes |= r.suspendedLanes & o, r.warmLanes &= ~o, Ae === r && (fe & o) === o && (Le === 4 || Le === 3 && (fe & 62914560) === fe && 300 > qr() - Mm ? !(be & 2) && Qa(r, 0) : Rm |= o, yo === fe && (yo = 0)), Ur(r);
      }
      function _E(r, n) {
        n === 0 && (n = ne()), r = kn(r, n), r !== null && (he(r, n), Ur(r));
      }
      function kL(r) {
        var n = r.memoizedState,
          o = 0;
        n !== null && (o = n.retryLane), _E(r, o);
      }
      function QL(r, n) {
        var o = 0;
        switch (r.tag) {
          case 13:
            var s = r.stateNode,
              c = r.memoizedState;
            c !== null && (o = c.retryLane);
            break;
          case 19:
            s = r.stateNode;
            break;
          case 22:
            s = r.stateNode._retryCache;
            break;
          default:
            throw Error(a(314));
        }
        s !== null && s.delete(n), _E(r, o);
      }
      function ZL(r, n) {
        return bc(r, n);
      }
      function WL(r, n, o, s) {
        this.tag = r, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Jv(r) {
        return r = r.prototype, !(!r || !r.isReactComponent);
      }
      function ni(r, n) {
        var o = r.alternate;
        return o === null ? (o = t(r.tag, n, r.key, r.mode), o.elementType = r.elementType, o.type = r.type, o.stateNode = r.stateNode, o.alternate = r, r.alternate = o) : (o.pendingProps = n, o.type = r.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = r.flags & 31457280, o.childLanes = r.childLanes, o.lanes = r.lanes, o.child = r.child, o.memoizedProps = r.memoizedProps, o.memoizedState = r.memoizedState, o.updateQueue = r.updateQueue, n = r.dependencies, o.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }, o.sibling = r.sibling, o.index = r.index, o.ref = r.ref, o.refCleanup = r.refCleanup, o;
      }
      function OE(r, n) {
        r.flags &= 31457282;
        var o = r.alternate;
        return o === null ? (r.childLanes = 0, r.lanes = n, r.child = null, r.subtreeFlags = 0, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null, r.stateNode = null) : (r.childLanes = o.childLanes, r.lanes = o.lanes, r.child = o.child, r.subtreeFlags = 0, r.deletions = null, r.memoizedProps = o.memoizedProps, r.memoizedState = o.memoizedState, r.updateQueue = o.updateQueue, r.type = o.type, n = o.dependencies, r.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }), r;
      }
      function dc(r, n, o, s, c, p) {
        var g = 0;
        if (s = r, typeof r == "function") Jv(r) && (g = 1);else if (typeof r == "string") g = cr && Et ? e1(r, o, ft.current) ? 26 : s1(r) ? 27 : 5 : cr ? e1(r, o, ft.current) ? 26 : 5 : Et && s1(r) ? 27 : 5;else e: switch (r) {
          case Ja:
            return Zi(o.children, c, p, n);
          case DE:
            g = 8, c |= 24;
            break;
          case nm:
            return r = t(12, o, n, c | 2), r.elementType = nm, r.lanes = p, r;
          case am:
            return r = t(13, o, n, c), r.elementType = am, r.lanes = p, r;
          case om:
            return r = t(19, o, n, c), r.elementType = om, r.lanes = p, r;
          case IE:
            return wE(o, c, p, n);
          default:
            if (_typeof(r) == "object" && r !== null) switch (r.$$typeof) {
              case tj:
              case ii:
                g = 10;
                break e;
              case PE:
                g = 9;
                break e;
              case im:
                g = 11;
                break e;
              case um:
                g = 14;
                break e;
              case ai:
                g = 16, s = null;
                break e;
            }
            g = 29, o = Error(a(130, r === null ? "null" : _typeof(r), "")), s = null;
        }
        return n = t(g, o, n, c), n.elementType = r, n.type = s, n.lanes = p, n;
      }
      function Zi(r, n, o, s) {
        return r = t(7, r, s, n), r.lanes = o, r;
      }
      function wE(r, n, o, s) {
        r = t(22, r, s, n), r.elementType = IE, r.lanes = o;
        var c = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function detach() {
            var p = c._current;
            if (p === null) throw Error(a(456));
            if (!(c._pendingVisibility & 2)) {
              var g = kn(p, 2);
              g !== null && (c._pendingVisibility |= 2, At(g, p, 2));
            }
          },
          attach: function attach() {
            var p = c._current;
            if (p === null) throw Error(a(456));
            if (c._pendingVisibility & 2) {
              var g = kn(p, 2);
              g !== null && (c._pendingVisibility &= -3, At(g, p, 2));
            }
          }
        };
        return r.stateNode = c, r;
      }
      function $v(r, n, o) {
        return r = t(6, r, null, n), r.lanes = o, r;
      }
      function em(r, n, o) {
        return n = t(4, r.children !== null ? r.children : [], r.key, n), n.lanes = o, n.stateNode = {
          containerInfo: r.containerInfo,
          pendingChildren: null,
          implementation: r.implementation
        }, n;
      }
      function JL(r, n, o, s, c, p, g, E) {
        this.tag = 1, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = fm, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = He(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = He(0), this.hiddenUpdates = He(null), this.identifierPrefix = s, this.onUncaughtError = c, this.onCaughtError = p, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = new Map();
      }
      function NE(r, n, o, s, c, p, g, E, N, P, F, V) {
        return r = new JL(r, n, o, g, E, N, P, V), n = 1, p === !0 && (n |= 24), p = t(3, null, null, n), r.current = p, p.stateNode = r, n = Mv(), n.refCount++, r.pooledCache = n, n.refCount++, p.memoizedState = {
          element: s,
          isDehydrated: o,
          cache: n
        }, ev(p), r;
      }
      function RE(r) {
        return r ? (r = to, r) : to;
      }
      function CE(r) {
        var n = r._reactInternals;
        if (n === void 0) throw typeof r.render == "function" ? Error(a(188)) : (r = Object.keys(r).join(","), Error(a(268, r)));
        return r = S(n), r = r !== null ? T(r) : null, r === null ? null : Ku(r.stateNode);
      }
      function ME(r, n, o, s, c, p) {
        c = RE(c), s.context === null ? s.context = c : s.pendingContext = c, s = Qn(n), s.payload = {
          element: o
        }, p = p === void 0 ? null : p, p !== null && (s.callback = p), o = Zn(r, s, n), o !== null && (At(o, r, n), Cu(o, r, n));
      }
      function BE(r, n) {
        if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
          var o = r.retryLane;
          r.retryLane = o !== 0 && o < n ? o : n;
        }
      }
      function tm(r, n) {
        BE(r, n), (r = r.alternate) && BE(r, n);
      }
      var oe = {},
        $L = yt(),
        er = cL(),
        rm = Object.assign,
        ej = Symbol.for("react.element"),
        vc = Symbol.for("react.transitional.element"),
        Wa = Symbol.for("react.portal"),
        Ja = Symbol.for("react.fragment"),
        DE = Symbol.for("react.strict_mode"),
        nm = Symbol.for("react.profiler"),
        tj = Symbol.for("react.provider"),
        PE = Symbol.for("react.consumer"),
        ii = Symbol.for("react.context"),
        im = Symbol.for("react.forward_ref"),
        am = Symbol.for("react.suspense"),
        om = Symbol.for("react.suspense_list"),
        um = Symbol.for("react.memo"),
        ai = Symbol.for("react.lazy");
      Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
      var IE = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
      var rj = Symbol.for("react.memo_cache_sentinel"),
        UE = Symbol.iterator,
        nj = Symbol.for("react.client.reference"),
        ee = $L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        sm,
        zE,
        lm = !1,
        mc = Array.isArray,
        ij = e.rendererVersion,
        aj = e.rendererPackageName,
        LE = e.extraDevToolsConfig,
        Ku = e.getPublicInstance,
        oj = e.getRootHostContext,
        uj = e.getChildHostContext,
        sj = e.prepareForCommit,
        lj = e.resetAfterCommit,
        cj = e.createInstance,
        cm = e.appendInitialChild,
        jE = e.finalizeInitialChildren,
        hc = e.shouldSetTextContent,
        FE = e.createTextInstance,
        fj = e.scheduleTimeout,
        pj = e.cancelTimeout,
        fm = e.noTimeout,
        yn = e.isPrimaryRenderer;
      e.warnsIfNotActing;
      var St = e.supportsMutation,
        oi = e.supportsPersistence,
        lr = e.supportsHydration,
        HE = e.getInstanceFromNode;
      e.beforeActiveInstanceBlur, e.afterActiveInstanceBlur;
      var dj = e.preparePortalMount;
      e.prepareScopeUpdate, e.getInstanceFromScope;
      var Lt = e.setCurrentUpdatePriority,
        Wi = e.getCurrentUpdatePriority,
        vj = e.resolveUpdatePriority;
      e.resolveEventType, e.resolveEventTimeStamp;
      var mj = e.shouldAttemptEagerTransition,
        hj = e.detachDeletedInstance;
      e.requestPostPaintCallback;
      var yj = e.maySuspendCommit,
        GE = e.preloadInstance,
        gj = e.startSuspendingCommit,
        KE = e.suspendInstance,
        bj = e.waitForCommitToBeReady,
        $a = e.NotPendingTransition,
        Ji = e.HostTransitionContext,
        xj = e.resetFormInstance;
      e.bindToConsole;
      var Sj = e.supportsMicrotasks,
        Ej = e.scheduleMicrotask,
        Vu = e.supportsTestSelectors,
        Tj = e.findFiberRoot,
        qj = e.getBoundingRect,
        Aj = e.getTextContent,
        Yu = e.isHiddenSubtree,
        _j = e.matchAccessibilityRole,
        Oj = e.setFocusIfFocusable,
        wj = e.setupIntersectionObserver,
        Nj = e.appendChild,
        Rj = e.appendChildToContainer,
        Cj = e.commitTextUpdate,
        Mj = e.commitMount,
        Bj = e.commitUpdate,
        Dj = e.insertBefore,
        Pj = e.insertInContainerBefore,
        Ij = e.removeChild,
        Uj = e.removeChildFromContainer,
        VE = e.resetTextContent,
        zj = e.hideInstance,
        Lj = e.hideTextInstance,
        jj = e.unhideInstance,
        Fj = e.unhideTextInstance,
        Hj = e.clearContainer,
        Gj = e.cloneInstance,
        YE = e.createContainerChildSet,
        XE = e.appendChildToContainerChildSet,
        Kj = e.finalizeContainerChildren,
        kE = e.replaceContainerChildren,
        QE = e.cloneHiddenInstance,
        ZE = e.cloneHiddenTextInstance,
        pm = e.isSuspenseInstancePending,
        dm = e.isSuspenseInstanceFallback,
        Vj = e.getSuspenseInstanceFallbackErrorDetails,
        Yj = e.registerSuspenseInstanceRetry,
        Xj = e.canHydrateFormStateMarker,
        kj = e.isFormStateMarkerMatching,
        WE = e.getNextHydratableSibling,
        JE = e.getFirstHydratableChild,
        Qj = e.getFirstHydratableChildWithinContainer,
        Zj = e.getFirstHydratableChildWithinSuspenseInstance,
        Wj = e.canHydrateInstance,
        Jj = e.canHydrateTextInstance,
        $j = e.canHydrateSuspenseInstance,
        e5 = e.hydrateInstance,
        t5 = e.hydrateTextInstance,
        r5 = e.hydrateSuspenseInstance,
        n5 = e.getNextHydratableInstanceAfterSuspenseInstance,
        i5 = e.commitHydratedContainer,
        a5 = e.commitHydratedSuspenseInstance,
        o5 = e.clearSuspenseBoundary,
        u5 = e.clearSuspenseBoundaryFromContainer,
        $E = e.shouldDeleteUnhydratedTailInstances;
      e.diffHydratedPropsForDevWarnings, e.diffHydratedTextForDevWarnings, e.describeHydratableInstanceForDevWarnings;
      var s5 = e.validateHydratableInstance,
        l5 = e.validateHydratableTextInstance,
        cr = e.supportsResources,
        e1 = e.isHostHoistableType,
        vm = e.getHoistableRoot,
        t1 = e.getResource,
        r1 = e.acquireResource,
        n1 = e.releaseResource,
        c5 = e.hydrateHoistable,
        i1 = e.mountHoistable,
        a1 = e.unmountHoistable,
        f5 = e.createHoistableInstance,
        p5 = e.prepareToCommitHoistables,
        d5 = e.mayResourceSuspendCommit,
        o1 = e.preloadResource,
        v5 = e.suspendResource,
        Et = e.supportsSingletons,
        u1 = e.resolveSingletonInstance,
        m5 = e.clearSingleton,
        h5 = e.acquireSingletonInstance,
        y5 = e.releaseSingletonInstance,
        s1 = e.isHostSingletonType,
        mm = [],
        eo = -1,
        to = {},
        tr = Math.clz32 ? Math.clz32 : q,
        g5 = Math.log,
        b5 = Math.LN2,
        yc = 128,
        gc = 4194304,
        bc = er.unstable_scheduleCallback,
        hm = er.unstable_cancelCallback,
        x5 = er.unstable_shouldYield,
        S5 = er.unstable_requestPaint,
        qr = er.unstable_now,
        l1 = er.unstable_ImmediatePriority,
        E5 = er.unstable_UserBlockingPriority,
        ym = er.unstable_NormalPriority,
        T5 = er.unstable_IdlePriority,
        q5 = er.log,
        A5 = er.unstable_setDisableYieldValue,
        Xu = null,
        rr = null,
        nr = typeof Object.is == "function" ? Object.is : Ga,
        c1 = new WeakMap(),
        ro = [],
        no = 0,
        xc = null,
        Sc = 0,
        fr = [],
        pr = 0,
        $i = null,
        gn = 1,
        bn = "",
        ft = A(null),
        ku = A(null),
        ui = A(null),
        Ec = A(null),
        _t = null,
        Tt = null,
        pe = !1,
        Ar = null,
        zr = !1,
        gm = Error(a(519)),
        dr = [],
        io = 0,
        bm = 0,
        Tc = null,
        ao = null,
        xm = !1,
        qc = !1,
        Sm = !1,
        oo = 0,
        Qu = null,
        Em = 0,
        uo = 0,
        so = null,
        si = !1,
        Tm = !1,
        _5 = Object.prototype.hasOwnProperty,
        Zu = Error(a(460)),
        qm = Error(a(474)),
        Ac = {
          then: function then() {}
        },
        lo = null,
        co = null,
        Wu = 0,
        ea = Hx(!0),
        f1 = Hx(!1),
        fo = A(null),
        _c = A(0),
        vr = A(null),
        Lr = null,
        Ze = A(0),
        li = 0,
        ae = null,
        ge = null,
        Ke = null,
        Oc = !1,
        po = !1,
        ta = !1,
        wc = 0,
        Ju = 0,
        vo = null,
        O5 = 0,
        Am = function Am() {
          return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
          };
        },
        jr = {
          readContext: xt,
          use: ec,
          useCallback: je,
          useContext: je,
          useEffect: je,
          useImperativeHandle: je,
          useLayoutEffect: je,
          useInsertionEffect: je,
          useMemo: je,
          useReducer: je,
          useRef: je,
          useState: je,
          useDebugValue: je,
          useDeferredValue: je,
          useTransition: je,
          useSyncExternalStore: je,
          useId: je
        };
      jr.useCacheRefresh = je, jr.useMemoCache = je, jr.useHostTransitionStatus = je, jr.useFormState = je, jr.useActionState = je, jr.useOptimistic = je;
      var ra = {
        readContext: xt,
        use: ec,
        useCallback: function useCallback(r, n) {
          return Ut().memoizedState = [r, n === void 0 ? null : n], r;
        },
        useContext: xt,
        useEffect: cS,
        useImperativeHandle: function useImperativeHandle(r, n, o) {
          o = o != null ? o.concat([r]) : null, rc(4194308, 4, dS.bind(null, n, r), o);
        },
        useLayoutEffect: function useLayoutEffect(r, n) {
          return rc(4194308, 4, r, n);
        },
        useInsertionEffect: function useInsertionEffect(r, n) {
          rc(4, 2, r, n);
        },
        useMemo: function useMemo(r, n) {
          var o = Ut();
          n = n === void 0 ? null : n;
          var s = r();
          if (ta) {
            It(!0);
            try {
              r();
            } finally {
              It(!1);
            }
          }
          return o.memoizedState = [s, n], s;
        },
        useReducer: function useReducer(r, n, o) {
          var s = Ut();
          if (o !== void 0) {
            var c = o(n);
            if (ta) {
              It(!0);
              try {
                o(n);
              } finally {
                It(!1);
              }
            }
          } else c = n;
          return s.memoizedState = s.baseState = c, r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: r,
            lastRenderedState: c
          }, s.queue = r, r = r.dispatch = PL.bind(null, ae, r), [s.memoizedState, r];
        },
        useRef: function useRef(r) {
          var n = Ut();
          return r = {
            current: r
          }, n.memoizedState = r;
        },
        useState: function useState(r) {
          r = dv(r);
          var n = r.queue,
            o = ES.bind(null, ae, n);
          return n.dispatch = o, [r.memoizedState, o];
        },
        useDebugValue: hv,
        useDeferredValue: function useDeferredValue(r, n) {
          var o = Ut();
          return yv(o, r, n);
        },
        useTransition: function useTransition() {
          var r = dv(!1);
          return r = gS.bind(null, ae, r.queue, !0, !1), Ut().memoizedState = r, [!1, r];
        },
        useSyncExternalStore: function useSyncExternalStore(r, n, o) {
          var s = ae,
            c = Ut();
          if (pe) {
            if (o === void 0) throw Error(a(407));
            o = o();
          } else {
            if (o = n(), Ae === null) throw Error(a(349));
            fe & 60 || kx(s, n, o);
          }
          c.memoizedState = o;
          var p = {
            value: o,
            getSnapshot: n
          };
          return c.queue = p, cS(Zx.bind(null, s, p, r), [r]), s.flags |= 2048, Ya(9, Qx.bind(null, s, p, o, n), {
            destroy: void 0
          }, null), o;
        },
        useId: function useId() {
          var r = Ut(),
            n = Ae.identifierPrefix;
          if (pe) {
            var o = bn,
              s = gn;
            o = (s & ~(1 << 32 - tr(s) - 1)).toString(32) + o, n = ":" + n + "R" + o, o = wc++, 0 < o && (n += "H" + o.toString(32)), n += ":";
          } else o = O5++, n = ":" + n + "r" + o.toString(32) + ":";
          return r.memoizedState = n;
        },
        useCacheRefresh: function useCacheRefresh() {
          return Ut().memoizedState = DL.bind(null, ae);
        }
      };
      ra.useMemoCache = cv, ra.useHostTransitionStatus = gv, ra.useFormState = aS, ra.useActionState = aS, ra.useOptimistic = function (r) {
        var n = Ut();
        n.memoizedState = n.baseState = r;
        var o = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return n.queue = o, n = bv.bind(null, ae, !0, o), o.dispatch = n, [r, n];
      };
      var ci = {
        readContext: xt,
        use: ec,
        useCallback: mS,
        useContext: xt,
        useEffect: mv,
        useImperativeHandle: vS,
        useInsertionEffect: fS,
        useLayoutEffect: pS,
        useMemo: hS,
        useReducer: tc,
        useRef: lS,
        useState: function useState() {
          return tc(pn);
        },
        useDebugValue: hv,
        useDeferredValue: function useDeferredValue(r, n) {
          var o = Ge();
          return yS(o, ge.memoizedState, r, n);
        },
        useTransition: function useTransition() {
          var r = tc(pn)[0],
            n = Ge().memoizedState;
          return [typeof r == "boolean" ? r : Pu(r), n];
        },
        useSyncExternalStore: Xx,
        useId: xS
      };
      ci.useCacheRefresh = SS, ci.useMemoCache = cv, ci.useHostTransitionStatus = gv, ci.useFormState = oS, ci.useActionState = oS, ci.useOptimistic = function (r, n) {
        var o = Ge();
        return $x(o, ge, r, n);
      };
      var na = {
        readContext: xt,
        use: ec,
        useCallback: mS,
        useContext: xt,
        useEffect: mv,
        useImperativeHandle: vS,
        useInsertionEffect: fS,
        useLayoutEffect: pS,
        useMemo: hS,
        useReducer: pv,
        useRef: lS,
        useState: function useState() {
          return pv(pn);
        },
        useDebugValue: hv,
        useDeferredValue: function useDeferredValue(r, n) {
          var o = Ge();
          return ge === null ? yv(o, r, n) : yS(o, ge.memoizedState, r, n);
        },
        useTransition: function useTransition() {
          var r = pv(pn)[0],
            n = Ge().memoizedState;
          return [typeof r == "boolean" ? r : Pu(r), n];
        },
        useSyncExternalStore: Xx,
        useId: xS
      };
      na.useCacheRefresh = SS, na.useMemoCache = cv, na.useHostTransitionStatus = gv, na.useFormState = sS, na.useActionState = sS, na.useOptimistic = function (r, n) {
        var o = Ge();
        return ge !== null ? $x(o, ge, r, n) : (o.baseState = r, [r, o.queue.dispatch]);
      };
      var _m = {
          isMounted: function isMounted(r) {
            return (r = r._reactInternals) ? y(r) === r : !1;
          },
          enqueueSetState: function enqueueSetState(r, n, o) {
            r = r._reactInternals;
            var s = $t(),
              c = Qn(s);
            c.payload = n, o != null && (c.callback = o), n = Zn(r, c, s), n !== null && (At(n, r, s), Cu(n, r, s));
          },
          enqueueReplaceState: function enqueueReplaceState(r, n, o) {
            r = r._reactInternals;
            var s = $t(),
              c = Qn(s);
            c.tag = 1, c.payload = n, o != null && (c.callback = o), n = Zn(r, c, s), n !== null && (At(n, r, s), Cu(n, r, s));
          },
          enqueueForceUpdate: function enqueueForceUpdate(r, n) {
            r = r._reactInternals;
            var o = $t(),
              s = Qn(o);
            s.tag = 2, n != null && (s.callback = n), n = Zn(r, s, o), n !== null && (At(n, r, o), Cu(n, r, o));
          }
        },
        p1 = typeof reportError == "function" ? reportError : function (r) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && typeof window.ErrorEvent == "function") {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message: _typeof(r) == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
              error: r
            });
            if (!window.dispatchEvent(n)) return;
          } else if ((typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", r);
            return;
          }
          console.error(r);
        },
        d1 = Error(a(461)),
        tt = !1,
        Om = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0
        },
        Nc = A(null),
        ia = null,
        xn = null,
        w5 = (typeof AbortController === "undefined" ? "undefined" : _typeof(AbortController)) < "u" ? AbortController : function () {
          var r = [],
            n = this.signal = {
              aborted: !1,
              addEventListener: function addEventListener(o, s) {
                r.push(s);
              }
            };
          this.abort = function () {
            n.aborted = !0, r.forEach(function (o) {
              return o();
            });
          };
        },
        N5 = er.unstable_scheduleCallback,
        R5 = er.unstable_NormalPriority,
        Ue = {
          $$typeof: ii,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0
        },
        v1 = ee.S;
      ee.S = function (r, n) {
        _typeof(n) == "object" && n !== null && typeof n.then == "function" && NL(r, n), v1 !== null && v1(r, n);
      };
      var aa = A(null),
        Sn = !1,
        ze = !1,
        wm = !1,
        m1 = typeof WeakSet == "function" ? WeakSet : Set,
        rt = null,
        h1 = !1,
        Ve = null,
        ir = !1,
        _r = null,
        mo = 8192,
        C5 = {
          getCacheForType: function getCacheForType(r) {
            var n = xt(Ue),
              o = n.data.get(r);
            return o === void 0 && (o = r(), n.data.set(r, o)), o;
          }
        },
        Rc = 0,
        Cc = 1,
        Mc = 2,
        Bc = 3,
        Dc = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var $u = Symbol.for;
        Rc = $u("selector.component"), Cc = $u("selector.has_pseudo_class"), Mc = $u("selector.role"), Bc = $u("selector.test_id"), Dc = $u("selector.text");
      }
      var M5 = typeof WeakMap == "function" ? WeakMap : Map,
        be = 0,
        Ae = null,
        ue = null,
        fe = 0,
        _e = 0,
        ar = null,
        En = !1,
        ho = !1,
        Nm = !1,
        Tn = 0,
        Le = 0,
        fi = 0,
        oa = 0,
        Rm = 0,
        mr = 0,
        yo = 0,
        es = null,
        Fr = null,
        Cm = !1,
        Mm = 0,
        ts = 1 / 0,
        Pc = null,
        pi = null,
        Ic = !1,
        ua = null,
        rs = 0,
        Bm = 0,
        Dm = null,
        ns = 0,
        Pm = null;
      return oe.attemptContinuousHydration = function (r) {
        if (r.tag === 13) {
          var n = kn(r, 67108864);
          n !== null && At(n, r, 67108864), tm(r, 67108864);
        }
      }, oe.attemptHydrationAtCurrentPriority = function (r) {
        if (r.tag === 13) {
          var n = $t(),
            o = kn(r, n);
          o !== null && At(o, r, n), tm(r, n);
        }
      }, oe.attemptSynchronousHydration = function (r) {
        switch (r.tag) {
          case 3:
            if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
              var n = I(r.pendingLanes);
              if (n !== 0) {
                for (r.pendingLanes |= 2, r.entangledLanes |= 2; n;) {
                  var o = 1 << 31 - tr(n);
                  r.entanglements[1] |= o, n &= ~o;
                }
                Ur(r), !(be & 6) && (ts = qr() + 500, Va(0, !1));
              }
            }
            break;
          case 13:
            n = kn(r, 2), n !== null && At(n, r, 2), mE(), tm(r, 2);
        }
      }, oe.batchedUpdates = function (r, n) {
        return r(n);
      }, oe.createComponentSelector = function (r) {
        return {
          $$typeof: Rc,
          value: r
        };
      }, oe.createContainer = function (r, n, o, s, c, p, g, E, N, P) {
        return NE(r, n, !1, null, o, s, p, g, E, N, P, null);
      }, oe.createHasPseudoClassSelector = function (r) {
        return {
          $$typeof: Cc,
          value: r
        };
      }, oe.createHydrationContainer = function (r, n, o, s, c, p, g, E, N, P, F, V, Y) {
        return r = NE(o, s, !0, r, c, p, E, N, P, F, V, Y), r.context = RE(null), o = r.current, s = $t(), c = Qn(s), c.callback = n !== null && n !== void 0 ? n : null, Zn(o, c, s), r.current.lanes = s, he(r, s), Ur(r), r;
      }, oe.createPortal = function (r, n, o) {
        var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Wa,
          key: s == null ? null : "" + s,
          children: r,
          containerInfo: n,
          implementation: o
        };
      }, oe.createRoleSelector = function (r) {
        return {
          $$typeof: Mc,
          value: r
        };
      }, oe.createTestNameSelector = function (r) {
        return {
          $$typeof: Bc,
          value: r
        };
      }, oe.createTextSelector = function (r) {
        return {
          $$typeof: Dc,
          value: r
        };
      }, oe.defaultOnCaughtError = function (r) {
        console.error(r);
      }, oe.defaultOnRecoverableError = function (r) {
        p1(r);
      }, oe.defaultOnUncaughtError = function (r) {
        p1(r);
      }, oe.deferredUpdates = function (r) {
        var n = ee.T,
          o = Wi();
        try {
          return Lt(32), ee.T = null, r();
        } finally {
          Lt(o), ee.T = n;
        }
      }, oe.discreteUpdates = function (r, n, o, s, c) {
        var p = ee.T,
          g = Wi();
        try {
          return Lt(2), ee.T = null, r(n, o, s, c);
        } finally {
          Lt(g), ee.T = p, be === 0 && (ts = qr() + 500);
        }
      }, oe.findAllNodes = Yv, oe.findBoundingRects = function (r, n) {
        if (!Vu) throw Error(a(363));
        n = Yv(r, n), r = [];
        for (var o = 0; o < n.length; o++) r.push(qj(n[o]));
        for (n = r.length - 1; 0 < n; n--) {
          o = r[n];
          for (var s = o.x, c = s + o.width, p = o.y, g = p + o.height, E = n - 1; 0 <= E; E--) if (n !== E) {
            var N = r[E],
              P = N.x,
              F = P + N.width,
              V = N.y,
              Y = V + N.height;
            if (s >= P && p >= V && c <= F && g <= Y) {
              r.splice(n, 1);
              break;
            } else if (s !== P || o.width !== N.width || Y < p || V > g) {
              if (!(p !== V || o.height !== N.height || F < s || P > c)) {
                P > s && (N.width += P - s, N.x = s), F < c && (N.width = c - P), r.splice(n, 1);
                break;
              }
            } else {
              V > p && (N.height += V - p, N.y = p), Y < g && (N.height = g - V), r.splice(n, 1);
              break;
            }
          }
        }
        return r;
      }, oe.findHostInstance = CE, oe.findHostInstanceWithNoPortals = function (r) {
        return r = S(r), r = r !== null ? R(r) : null, r === null ? null : Ku(r.stateNode);
      }, oe.findHostInstanceWithWarning = function (r) {
        return CE(r);
      }, oe.flushPassiveEffects = Qi, oe.flushSyncFromReconciler = function (r) {
        var n = be;
        be |= 1;
        var o = ee.T,
          s = Wi();
        try {
          if (Lt(2), ee.T = null, r) return r();
        } finally {
          Lt(s), ee.T = o, be = n, !(be & 6) && Va(0, !1);
        }
      }, oe.flushSyncWork = mE, oe.focusWithin = function (r, n) {
        if (!Vu) throw Error(a(363));
        for (r = Gv(r), n = fE(r, n), n = Array.from(n), r = 0; r < n.length;) {
          var o = n[r++],
            s = o.tag;
          if (!Yu(o)) {
            if ((s === 5 || s === 26 || s === 27) && Oj(o.stateNode)) return !0;
            for (o = o.child; o !== null;) n.push(o), o = o.sibling;
          }
        }
        return !1;
      }, oe.getFindAllNodesFailureDescription = function (r, n) {
        if (!Vu) throw Error(a(363));
        var o = 0,
          s = [];
        r = [Gv(r), 0];
        for (var c = 0; c < r.length;) {
          var p = r[c++],
            g = p.tag,
            E = r[c++],
            N = n[E];
          if ((g !== 5 && g !== 26 && g !== 27 || !Yu(p)) && (Kv(p, N) && (s.push(Vv(N)), E++, E > o && (o = E)), E < n.length)) for (p = p.child; p !== null;) r.push(p, E), p = p.sibling;
        }
        if (o < n.length) {
          for (r = []; o < n.length; o++) r.push(Vv(n[o]));
          return "findAllNodes was able to match part of the selector:\n  " + (s.join(" > ") + "\n\nNo matching component was found for:\n  ") + r.join(" > ");
        }
        return null;
      }, oe.getPublicRootInstance = function (r) {
        if (r = r.current, !r.child) return null;
        switch (r.child.tag) {
          case 27:
          case 5:
            return Ku(r.child.stateNode);
          default:
            return r.child.stateNode;
        }
      }, oe.injectIntoDevTools = function () {
        var r = {
          bundleType: 0,
          version: ij,
          rendererPackageName: aj,
          currentDispatcherRef: ee,
          findFiberByHostInstance: HE,
          reconcilerVersion: "19.0.0"
        };
        if (LE !== null && (r.rendererConfig = LE), (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__)) > "u") r = !1;else {
          var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (n.isDisabled || !n.supportsFiber) r = !0;else {
            try {
              Xu = n.inject(r), rr = n;
            } catch (_unused64) {}
            r = !!n.checkDCE;
          }
        }
        return r;
      }, oe.isAlreadyRendering = function () {
        return !1;
      }, oe.observeVisibleRects = function (r, n, o, s) {
        if (!Vu) throw Error(a(363));
        r = Yv(r, n);
        var c = wj(r, o, s).disconnect;
        return {
          disconnect: function disconnect() {
            c();
          }
        };
      }, oe.shouldError = function () {
        return null;
      }, oe.shouldSuspend = function () {
        return !1;
      }, oe.startHostTransition = function (r, n, o, s) {
        if (r.tag !== 5) throw Error(a(476));
        var c = bS(r).queue;
        gS(r, c, n, $a, o === null ? i : function () {
          var p = bS(r).next.queue;
          return Iu(r, p, {}, $t()), o(s);
        });
      }, oe.updateContainer = function (r, n, o, s) {
        var c = n.current,
          p = $t();
        return ME(c, p, r, n, o, s), p;
      }, oe.updateContainerSync = function (r, n, o, s) {
        return n.tag === 0 && Qi(), ME(n.current, 2, r, n, o, s), 2;
      }, oe;
    };
    jl.exports.default = jl.exports;
    Object.defineProperty(jl.exports, "__esModule", {
      value: !0
    });
  });
  var dL = m(function (l4e, pL) {
    "use strict";

    pL.exports = fL();
  });
  var vL = m(function (Gi) {
    "use strict";

    Gi.ConcurrentRoot = 1;
    Gi.ContinuousEventPriority = 8;
    Gi.DefaultEventPriority = 32;
    Gi.DiscreteEventPriority = 2;
    Gi.IdleEventPriority = 268435456;
    Gi.LegacyRoot = 0;
    Gi.NoEventPriority = 0;
  });
  var hL = m(function (f4e, mL) {
    "use strict";

    mL.exports = vL();
  });
  function j5(e, t) {
    return e.__proto__ = t, e;
  }
  function F5(e, t) {
    for (var i in t) Object.prototype.hasOwnProperty.call(e, i) || (e[i] = t[i]);
    return e;
  }
  typeof Object.setPrototypeOf != "function" && (Object.setPrototypeOf = {
    __proto__: []
  } instanceof Array ? j5 : F5);
  var rwe = W(Lq()),
    nwe = W(iA()),
    iwe = W(cA()),
    awe = W(hA()),
    owe = W(TA()),
    uwe = W(TO()),
    swe = W(wO()),
    lwe = W(IO()),
    cwe = W(O2()),
    fwe = W(M2()),
    pwe = W(U2()),
    dwe = W(H2()),
    vwe = W(Yw()),
    mwe = W(rN()),
    hwe = W(cN()),
    ywe = W(xN()),
    gwe = W(_N()),
    bwe = W(CN()),
    xwe = W(jN()),
    Swe = W(KN()),
    Ewe = W(kN()),
    Twe = W(nM()),
    qwe = W(IB()),
    Awe = W(yI()),
    _we = W(TI()),
    Owe = W(MI()),
    wwe = W(E3()),
    Nwe = W(c4()),
    Rwe = W(y4()),
    Cwe = W(I4()),
    Mwe = W(H4()),
    g6 = W(X4());
  var Bt;
  function Ab() {
    return Bt || (Bt = Function("return this")(), Bt);
  }
  Bt = Ab();
  for (var _i3 = 0, _arr = ["globalThis", "global", "self"]; _i3 < _arr.length; _i3++) {
    var e = _arr[_i3];
    _typeof(Bt[e]) != "object" && (Bt[e] = Bt);
  }
  var lde = (_Bt$console = Bt.console) === null || _Bt$console === void 0 ? void 0 : _Bt$console.log;
  typeof lde != "function" && (Bt.console = {
    log: Bt.print,
    error: Bt.print,
    info: Bt.print,
    debug: Bt.print,
    warn: Bt.print
  });
  function cde(e) {
    var t = e.codePointAt(0);
    if (t < 128) return [t];
    if (t < 2048) {
      var i = 192 | t >> 6,
        a = 128 | t & 63;
      return [i, a];
    }
    if (t < 65536) {
      var _i4 = 224 | t >> 12,
        _a2 = 128 | t >> 6 & 63,
        u = 128 | t & 63;
      return [_i4, _a2, u];
    }
    if (t <= 1114111) {
      var _i5 = 240 | t >> 18,
        _a3 = 128 | t >> 12 & 63,
        _u2 = 128 | t >> 6 & 63,
        l = 128 | t & 63;
      return [_i5, _a3, _u2, l];
    }
    return [];
  }
  var kp = /*#__PURE__*/function () {
    function kp() {
      _classCallCheck(this, kp);
    }
    return _createClass(kp, [{
      key: "encode",
      value: function encode(t) {
        var i = [];
        var _iterator2 = _createForOfIteratorHelper(t),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var a = _step2.value;
            i.push.apply(i, _toConsumableArray(cde(a)));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return new Uint8Array(i);
      }
    }]);
  }();
  function Mr() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("Invalid UTF-8 sequence");
  }
  function Qp(e) {
    var t = [];
    for (var i = 0; i < e.length;) if (e[i] < 128) t.push(String.fromCharCode(e[i])), i++;else if (e[i] > 191 && e[i] < 224) t.push(String.fromCharCode((e[i] & 31) << 6 | e[i + 1] & 63)), i += 2;else if (e[i] > 223 && e[i] < 240) t.push(String.fromCharCode((e[i] & 15) << 12 | (e[i + 1] & 63) << 6 | e[i + 2] & 63)), i += 3;else {
      var a = (e[i] & 7) << 18 | (e[i + 1] & 63) << 12 | (e[i + 2] & 63) << 6 | e[i + 3] & 63;
      t.push(String.fromCodePoint(a)), i += 4;
    }
    return t.join("");
  }
  function fde(e) {
    var t = [],
      i = e.length,
      a = 0;
    for (; a < i;) {
      var u = e[a];
      if (u < 128) t.push(String.fromCharCode(u)), a++;else if (u >> 5 === 6) {
        a + 2 > i && Mr();
        var l = e[a + 1];
        l >> 6 !== 2 && Mr(), t.push(Qp([u, l])), a += 2;
      } else if (u >> 4 === 14) {
        a + 3 > i && Mr();
        var _l2 = e[a + 1];
        _l2 >> 6 !== 2 && Mr();
        var f = e[a + 2];
        f >> 6 !== 2 && Mr(), t.push(Qp([u, _l2, f])), a += 3;
      } else if (u >> 3 === 30) {
        a + 4 > i && Mr();
        var _l3 = e[a + 1];
        _l3 >> 6 !== 2 && Mr();
        var _f3 = e[a + 2];
        _f3 >> 6 !== 2 && Mr();
        var d = e[a + 3];
        d >> 6 !== 2 && Mr(), t.push(Qp([u, _l3, _f3, d])), a += 4;
      } else Mr();
    }
    return t.join("");
  }
  var Zp = /*#__PURE__*/function () {
    function Zp() {
      _classCallCheck(this, Zp);
    }
    return _createClass(Zp, [{
      key: "decode",
      value: function decode(t) {
        return fde(t);
      }
    }]);
  }();
  var Wp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~*'()";
  function ht() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("URI malformed");
  }
  function pde(e) {
    return Number.parseInt(e, 16);
  }
  function Sl(e) {
    var t = [];
    for (var i = 0; i < e.length;) if (e[i] < 128) t.push(String.fromCharCode(e[i])), i++;else if (e[i] > 191 && e[i] < 224) t.push(String.fromCharCode((e[i] & 31) << 6 | e[i + 1] & 63)), i += 2;else if (e[i] > 223 && e[i] < 240) t.push(String.fromCharCode((e[i] & 15) << 12 | (e[i + 1] & 63) << 6 | e[i + 2] & 63)), i += 3;else {
      var a = (e[i] & 7) << 18 | (e[i + 1] & 63) << 12 | (e[i + 2] & 63) << 6 | e[i + 3] & 63;
      t.push(String.fromCodePoint(a)), i += 4;
    }
    return t.join("");
  }
  function Ni(e, t) {
    t + 2 > e.length && ht();
    var i = e.slice(t, t + 2);
    return /^[0-9A-Fa-f]{2}$/.test(i) || ht(), pde(i);
  }
  function k4(e) {
    var t = [],
      i = e.length,
      a = 0;
    for (; a < i;) {
      var u = e[a];
      if (Wp.includes(u)) t.push(u), a++;else if (u === "%") {
        var l = Ni(e, a + 1);
        if (l < 128) t.push(Sl([l])), a += 3;else if (l >> 5 === 6) {
          (a + 6 > i || e[a + 3] !== "%") && ht();
          var f = Ni(e, a + 4);
          f >> 6 !== 2 && ht(), t.push(Sl([l, f])), a += 6;
        } else if (l >> 4 === 14) {
          (a + 9 > i || e[a + 3] !== "%" || e[a + 6] !== "%") && ht();
          var _f4 = Ni(e, a + 4);
          _f4 >> 6 !== 2 && ht();
          var d = Ni(e, a + 7);
          d >> 6 !== 2 && ht(), t.push(Sl([l, _f4, d])), a += 9;
        } else if (l >> 3 === 30) {
          (a + 12 > i || e[a + 3] !== "%" || e[a + 6] !== "%" || e[a + 9] !== "%") && ht();
          var _f5 = Ni(e, a + 4);
          _f5 >> 6 !== 2 && ht();
          var _d2 = Ni(e, a + 7);
          _d2 >> 6 !== 2 && ht();
          var v = Ni(e, a + 10);
          v >> 6 !== 2 && ht(), t.push(Sl([l, _f5, _d2, v])), a += 12;
        } else ht();
      } else ht();
    }
    return t.join("");
  }
  function dde(e) {
    var t = e.codePointAt(0);
    if (t >= 55296 && t <= 57343 && ht(), t < 128) return [t];
    if (t < 2048) {
      var i = 192 | t >> 6,
        a = 128 | t & 63;
      return [i, a];
    }
    if (t < 65536) {
      var _i6 = 224 | t >> 12,
        _a4 = 128 | t >> 6 & 63,
        u = 128 | t & 63;
      return [_i6, _a4, u];
    }
    if (t <= 1114111) {
      var _i7 = 240 | t >> 18,
        _a5 = 128 | t >> 12 & 63,
        _u3 = 128 | t >> 6 & 63,
        l = 128 | t & 63;
      return [_i7, _a5, _u3, l];
    }
    ht();
  }
  function Q4(e) {
    var t = [];
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var i = _step3.value;
        if (Wp.indexOf(i) !== -1) t.push(i);else {
          var a = dde(i).map(function (u) {
            return "%".concat(u.toString(16).padStart(2, "0").toUpperCase());
          }).join("");
          t.push(a);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return t.join("");
  }
  var b6 = W(h6()),
    y6 = Ab();
  for (var _i8 = 0, _Object$entries = Object.entries({
      TextEncoder: kp,
      TextDecoder: Zp,
      Symbol: g6.default,
      encodeURIComponent: Q4,
      decodeURIComponent: k4,
      Buffer: b6.Buffer
    }); _i8 < _Object$entries.length; _i8++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i8], 2),
      _e2 = _Object$entries$_i[0],
      t = _Object$entries$_i[1];
    globalThis[_e2] || (globalThis[_e2] = t);
  }
  y6.performance || (y6.performance = {
    now: function now() {
      return Date.now();
    }
  });
  var B6 = W(yt()),
    D6 = W(yt()),
    tn = (0, D6.forwardRef)(function (e, t) {
      return e.display !== "none" && B6.default.createElement("mpv-box", _objectSpread({
        ref: t
      }, e));
    });
  var P6 = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", '"', ",", ".", "<", ">", "/", "?", "`", "~"],
    I6 = ["ESC", "ENTER", "BS", "SPACE"],
    Hb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    Gb = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  function ot(e) {
    try {
      return !!rd(e);
    } catch (_unused65) {
      return !1;
    }
  }
  function kt(e) {
    return e.replaceAll("\\\\", "//").replaceAll("\\", "/");
  }
  function Tl(e) {
    var _kt$split$at;
    return (_kt$split$at = kt(e).split("/").at(-1)) === null || _kt$split$at === void 0 ? void 0 : _kt$split$at.split("?").at(0);
  }
  var nd = "mpv-easy-config";
  var U6 = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
    HEAD: "HEAD",
    OPTIONS: "OPTIONS"
  };
  var tNe = "3g2,3gp,asf,avi,f4v,flv,h264,h265,m2ts,m4v,mkv,mov,mp4,mp4v,mpeg,mpg,ogm,ogv,rm,rmvb,ts,vob,webm,wmv,y4m,m4s".split(","),
    rNe = "aac,ac3,aiff,ape,au,cue,dsf,dts,flac,m4a,mid,midi,mka,mp3,mp4a,oga,ogg,opus,spx,tak,tta,wav,weba,wma,wv".split(","),
    nNe = "apng,avif,bmp,gif,j2k,jp2,jfif,jpeg,jpg,jxl,mj2,png,svg,tga,tif,tiff,webp".split(","),
    lve = "aqt,ass,gsub,idx,jss,lrc,mks,pgs,pjs,psb,rt,sbv,slt,smi,sub,sup,srt,ssa,ssf,ttxt,usf,vt,vtt".split(",");
  function Dt(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var u = od({
      name: "subprocess",
      args: e,
      playback_only: t,
      capture_stdout: i,
      capture_stderr: a
    });
    if (u.status < 0) throw new Error("subprocess error status:".concat(u.status, " stderr:").concat(u.stderr));
    return u.stdout.replaceAll("\r\n", "\n");
  }
  function Qt(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    return new Promise(function (u, l) {
      L6({
        name: "subprocess",
        args: e,
        playback_only: t,
        capture_stdout: i,
        capture_stderr: a
      }, function (f, d, v) {
        f ? d.status < 0 ? l(d.stderr.replaceAll("\r\n", "\n")) : u(d.stdout.replaceAll("\r\n", "\n")) : l(v);
      });
    });
  }
  var cve = {
    windows: "windows",
    linux: "linux",
    osx: "darwin",
    mac: "darwin",
    darwin: "darwin",
    "^mingw": "windows",
    "^cygwin": "windows",
    bsd$: "darwin",
    sunos: "darwin",
    android: "android"
  };
  var id;
  function ke() {
    if (id) return id;
    function e() {
      return Al("platform");
    }
    var t;
    function i() {
      if (t) return t;
      var u = (Dt(["uname", "-s"]) || "").toLowerCase();
      t = "windows";
      for (var _i9 = 0, _Object$entries2 = Object.entries(cve); _i9 < _Object$entries2.length; _i9++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i9], 2),
          l = _Object$entries2$_i[0],
          f = _Object$entries2$_i[1];
        if (u.match(new RegExp(l))) {
          t = f;
          break;
        }
      }
      return t;
    }
    return id = e() || i(), id;
  }
  var Ln = /*#__PURE__*/function () {
    function e(t, i, a, u) {
      _classCallCheck(this, e);
      this.x = t;
      this.y = i;
      this.width = a;
      this.height = u;
    }
    return _createClass(e, [{
      key: "cx",
      get: function get() {
        return this.x + this.width / 2;
      }
    }, {
      key: "cy",
      get: function get() {
        return this.y + this.height / 2;
      }
    }, {
      key: "x0",
      get: function get() {
        return this.x;
      }
    }, {
      key: "y0",
      get: function get() {
        return this.y;
      }
    }, {
      key: "x1",
      get: function get() {
        return this.x + this.width;
      }
    }, {
      key: "y1",
      get: function get() {
        return this.y + this.height;
      }
    }, {
      key: "toCoord",
      value: function toCoord() {
        return {
          x0: this.x0,
          y0: this.y0,
          x1: this.x1,
          y1: this.y1
        };
      }
    }, {
      key: "hasPoint",
      value: function hasPoint(t, i) {
        return t >= this.x0 && t <= this.x1 && i >= this.y0 && i <= this.y1;
      }
    }, {
      key: "placeCenter",
      value: function placeCenter(t) {
        var i = (this.width - t.width) / 2,
          a = (this.height - t.height) / 2,
          u = this.x + i,
          l = this.y + a;
        return new e(u, l, t.width, t.height);
      }
    }, {
      key: "scale",
      value: function scale(t) {
        return new e(this.x * t, this.y * t, this.width * t, this.height * t);
      }
    }, {
      key: "scaleFromPoint",
      value: function scaleFromPoint(t, i, a, u) {
        var l = this.width * a,
          f = this.height * u,
          d = (this.width - l) * ((t - this.x) / this.width),
          v = (this.height - f) * ((i - this.y) / this.height),
          h = this.x + d,
          y = this.y + v;
        return new e(h, y, l, f);
      }
    }, {
      key: "scaleCenterXY",
      value: function scaleCenterXY(t, i) {
        var a = this.x + this.width / 2,
          u = this.y + this.height / 2,
          l = this.width * t,
          f = this.height * i,
          d = a - l / 2,
          v = u - f / 2;
        return new e(d, v, l, f);
      }
    }, {
      key: "offsetXY",
      value: function offsetXY(t, i) {
        return new e(this.x + t, this.y + i, this.width, this.height);
      }
    }, {
      key: "scaleXY",
      value: function scaleXY(t, i) {
        return new e(this.x * t, this.y * i, this.width * t, this.height * i);
      }
    }, {
      key: "intersection",
      value: function intersection(t) {
        var i = Math.max(this.x, t.x),
          a = Math.max(this.y, t.y),
          u = Math.min(this.x + this.width, t.x + t.width),
          l = Math.min(this.y + this.height, t.y + t.height),
          f = u - i,
          d = l - a;
        if (f > 0 && d > 0) return new e(i, a, f, d);
      }
    }], [{
      key: "fromCoord",
      value: function fromCoord(t) {
        var i = Math.min(t.x0, t.x1),
          a = Math.min(t.y0, t.y1),
          u = Math.abs(t.x0 - t.x1),
          l = Math.abs(t.y0 - t.y1);
        return new e(i, a, u, l);
      }
    }]);
  }();
  var z6 = !1,
    ql = -1,
    Kb = 0;
  function cu() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 720;
    return z6 || (z6 = !0, ql = wa("osd-height") || 0, Kb = e / ql, j6("osd-height", function (t, i) {
      ql !== i && i && (ql = i, Kb = e / ql);
    })), Kb;
  }
  function ut(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    F6(e, t), print(e);
  }
  function H6(e) {
    return e[0] === "#" ? parseInt(e.slice(1), 16) : parseInt(e, 16);
  }
  function _l(e) {
    return e >> 24 & 255;
  }
  function Na(e) {
    return e >> 16 & 255;
  }
  function Ra(e) {
    return e >> 8 & 255;
  }
  function Ca(e) {
    return e & 255;
  }
  function fu(e, t) {
    return e & 16777215 | t << 24;
  }
  function Ma(e, t) {
    return e & 4278255615 | t << 16;
  }
  function Ba(e, t) {
    return e & 4294902015 | t << 8;
  }
  function pu(e, t) {
    return e & 4294967040 | t;
  }
  function gt(e) {
    this.color = typeof e == "number" ? e : H6(e);
  }
  gt.prototype = new gt(0);
  gt.prototype.byteCount = 6;
  gt.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    var i = this.red << 24 | this.green << 16 | this.blue << 8 | (t ? 255 - e : e);
    return new Da(i, t);
  };
  gt.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new jn(e);
  };
  gt.prototype.toBgr = function () {
    return this.toRgb().toBgr();
  };
  gt.prototype.toBgra = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, t).toBgra();
  };
  gt.prototype.toArgb = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, t).toArgb();
  };
  gt.prototype.toAbgr = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, t).toAbgr();
  };
  gt.prototype.invert = function () {
    var e = ~this.color & 16777215;
    return new jn(e);
  };
  gt.prototype.toHex = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t = (this.color >>> 0).toString(16).padStart(this.byteCount, "0");
    return (e + t).toUpperCase();
  };
  function bt(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    gt.call(this, e), this.invertAlpha = t, this.byteCount = 8, Object.defineProperty(this, "alpha", {
      get: function get() {
        return this.invertAlpha ? 255 - this.rawAlpha : this.rawAlpha;
      },
      set: function set(i) {
        this.rawAlpha = this.invertAlpha ? 255 - i : i;
      }
    });
  }
  bt.prototype = new gt(0);
  bt.prototype.byteCount = 8;
  bt.prototype.toRgba = function () {
    var e = this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
    return new Da(e, this.invertAlpha);
  };
  bt.prototype.toBgra = function () {
    var e = this.blue << 24 | this.green << 16 | this.red << 8 | this.alpha;
    return new du(e, this.invertAlpha);
  };
  bt.prototype.toAbgr = function () {
    var e = this.alpha << 24 | this.blue << 16 | this.green << 8 | this.red;
    return new Vb(e, this.invertAlpha);
  };
  bt.prototype.toArgb = function () {
    var e = this.alpha << 24 | this.red << 16 | this.green << 8 | this.blue;
    return new vu(e, this.invertAlpha);
  };
  bt.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new jn(e);
  };
  bt.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new jn(e);
  };
  function Da(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    bt.call(this, e, t), Object.defineProperty(this, "red", {
      get: function get() {
        return _l(this.color);
      },
      set: function set(i) {
        this.color = fu(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Na(this.color);
      },
      set: function set(i) {
        this.color = Ma(this.color, i);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Ra(this.color);
      },
      set: function set(i) {
        this.color = Ba(this.color, i);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return Ca(this.color);
      },
      set: function set(i) {
        this.color = pu(this.color, i);
      }
    });
  }
  Da.prototype = Object.create(bt.prototype);
  Da.prototype.constructor = bt;
  Da.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new Da(t, this.invertAlpha);
  };
  function jn(e) {
    gt.call(this, e), Object.defineProperty(this, "red", {
      get: function get() {
        return Na(this.color);
      },
      set: function set(t) {
        this.color = Ma(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ra(this.color);
      },
      set: function set(t) {
        this.color = Ba(this.color, t);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Ca(this.color);
      },
      set: function set(t) {
        this.color = pu(this.color, t);
      }
    });
  }
  jn.prototype = new gt(0);
  jn.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    var i = this.color << 8 | (t ? 255 - e : e);
    return new Da(i, t);
  };
  jn.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new G6(e);
  };
  function du(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    bt.call(this, e, t), Object.defineProperty(this, "blue", {
      get: function get() {
        return _l(this.color);
      },
      set: function set(i) {
        this.color = fu(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Na(this.color);
      },
      set: function set(i) {
        this.color = Ma(this.color, i);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Ra(this.color);
      },
      set: function set(i) {
        this.color = Ba(this.color, i);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return Ca(this.color);
      },
      set: function set(i) {
        this.color = pu(this.color, i);
      }
    });
  }
  du.prototype = new bt(0);
  du.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new du(t);
  };
  function G6(e) {
    gt.call(this, e), Object.defineProperty(this, "blue", {
      get: function get() {
        return Na(this.color);
      },
      set: function set(t) {
        this.color = fu(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ra(this.color);
      },
      set: function set(t) {
        this.color = Ma(this.color, t);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Ca(this.color);
      },
      set: function set(t) {
        this.color = Ba(this.color, t);
      }
    });
  }
  G6.prototype = new gt(0);
  function vu(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    bt.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return _l(this.color);
      },
      set: function set(i) {
        this.color = fu(this.color, i);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Na(this.color);
      },
      set: function set(i) {
        this.color = Ma(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ra(this.color);
      },
      set: function set(i) {
        this.color = Ba(this.color, i);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Ca(this.color);
      },
      set: function set(i) {
        this.color = pu(this.color, i);
      }
    });
  }
  vu.prototype = new bt(0);
  vu.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new du(t, this.invertAlpha);
  };
  function Vb(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    bt.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return _l(this.color);
      },
      set: function set(i) {
        this.color = fu(this.color, i);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Na(this.color);
      },
      set: function set(i) {
        this.color = Ma(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ra(this.color);
      },
      set: function set(i) {
        this.color = Ba(this.color, i);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Ca(this.color);
      },
      set: function set(i) {
        this.color = pu(this.color, i);
      }
    });
  }
  Vb.prototype = new bt(0);
  Vb.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new du(t, this.invertAlpha);
  };
  var sd = {
    AliceBlue: 15792383,
    AntiqueWhite: 16444375,
    Aqua: 65535,
    Aquamarine: 8388564,
    Azure: 15794175,
    Beige: 16119260,
    Bisque: 16770244,
    Black: 0,
    BlanchedAlmond: 16772045,
    Blue: 255,
    BlueViolet: 9055202,
    Brown: 10824234,
    BurlyWood: 14596231,
    CadetBlue: 6266528,
    Chartreuse: 8388352,
    Chocolate: 13789470,
    Coral: 16744272,
    CornflowerBlue: 6591981,
    Cornsilk: 16775388,
    Crimson: 14423100,
    Cyan: 65535,
    DarkBlue: 139,
    DarkCyan: 35723,
    DarkGoldenRod: 12092939,
    DarkGray: 11119017,
    DarkGrey: 11119017,
    DarkGreen: 25600,
    DarkKhaki: 12433259,
    DarkMagenta: 9109643,
    DarkOliveGreen: 5597999,
    DarkOrange: 16747520,
    DarkOrchid: 10040012,
    DarkRed: 9109504,
    DarkSalmon: 15308410,
    DarkSeaGreen: 9419919,
    DarkSlateBlue: 4734347,
    DarkSlateGray: 3100495,
    DarkSlateGrey: 3100495,
    DarkTurquoise: 52945,
    DarkViolet: 9699539,
    DeepPink: 16716947,
    DeepSkyBlue: 49151,
    DimGray: 6908265,
    DimGrey: 6908265,
    DodgerBlue: 2003199,
    FireBrick: 11674146,
    FloralWhite: 16775920,
    ForestGreen: 2263842,
    Fuchsia: 16711935,
    Gainsboro: 14474460,
    GhostWhite: 16316671,
    Gold: 16766720,
    GoldenRod: 14329120,
    Gray: 8421504,
    Grey: 8421504,
    Green: 32768,
    GreenYellow: 11403055,
    HoneyDew: 15794160,
    HotPink: 16738740,
    IndianRed: 13458524,
    Indigo: 4915330,
    Ivory: 16777200,
    Khaki: 15787660,
    Lavender: 15132410,
    LavenderBlush: 16773365,
    LawnGreen: 8190976,
    LemonChiffon: 16775885,
    LightBlue: 11393254,
    LightCoral: 15761536,
    LightCyan: 14745599,
    LightGoldenRodYellow: 16448210,
    LightGray: 13882323,
    LightGrey: 13882323,
    LightGreen: 9498256,
    LightPink: 16758465,
    LightSalmon: 16752762,
    LightSeaGreen: 2142890,
    LightSkyBlue: 8900346,
    LightSlateGray: 7833753,
    LightSlateGrey: 7833753,
    LightSteelBlue: 11584734,
    LightYellow: 16777184,
    Lime: 65280,
    LimeGreen: 3329330,
    Linen: 16445670,
    Magenta: 16711935,
    Maroon: 8388608,
    MediumAquaMarine: 6737322,
    MediumBlue: 205,
    MediumOrchid: 12211667,
    MediumPurple: 9662683,
    MediumSeaGreen: 3978097,
    MediumSlateBlue: 8087790,
    MediumSpringGreen: 64154,
    MediumTurquoise: 4772300,
    MediumVioletRed: 13047173,
    MidnightBlue: 1644912,
    MintCream: 16121850,
    MistyRose: 16770273,
    Moccasin: 16770229,
    NavajoWhite: 16768685,
    Navy: 128,
    OldLace: 16643558,
    Olive: 8421376,
    OliveDrab: 7048739,
    Orange: 16753920,
    OrangeRed: 16729344,
    Orchid: 14315734,
    PaleGoldenRod: 15657130,
    PaleGreen: 10025880,
    PaleTurquoise: 11529966,
    PaleVioletRed: 14381203,
    PapayaWhip: 16773077,
    PeachPuff: 16767673,
    Peru: 13468991,
    Pink: 16761035,
    Plum: 14524637,
    PowderBlue: 11591910,
    Purple: 8388736,
    RebeccaPurple: 6697881,
    Red: 16711680,
    RosyBrown: 12357519,
    RoyalBlue: 4286945,
    SaddleBrown: 9127187,
    Salmon: 16416882,
    SandyBrown: 16032864,
    SeaGreen: 3050327,
    SeaShell: 16774638,
    Sienna: 10506797,
    Silver: 12632256,
    SkyBlue: 8900331,
    SlateBlue: 6970061,
    SlateGray: 7372944,
    SlateGrey: 7372944,
    Snow: 16775930,
    SpringGreen: 65407,
    SteelBlue: 4620980,
    Tan: 13808780,
    Teal: 32896,
    Thistle: 14204888,
    Tomato: 16737095,
    Turquoise: 4251856,
    Violet: 15631086,
    Wheat: 16113331,
    White: 16777215,
    WhiteSmoke: 16119285,
    Yellow: 16776960,
    YellowGreen: 10145074
  };
  var ld = .551915024494,
    Ci = /*#__PURE__*/function () {
      function Ci() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        _classCallCheck(this, Ci);
        _defineProperty(this, "_scale", void 0);
        _defineProperty(this, "_textBuffer", []);
        this._scale = t;
      }
      return _createClass(Ci, [{
        key: "newEvent",
        value: function newEvent() {
          return this._textBuffer.length > 0 && this._textBuffer.push("\n"), this;
        }
      }, {
        key: "font",
        value: function font(t) {
          return this.append("{\\fn".concat(t, "}"));
        }
      }, {
        key: "scale",
        value: function scale(t) {
          return this._scale = t, this;
        }
      }, {
        key: "clear",
        value: function clear() {
          return this._textBuffer.length = 0, this;
        }
      }, {
        key: "drawStart",
        value: function drawStart() {
          return this._textBuffer.push("{\\p".concat(this._scale, "}")), this;
        }
      }, {
        key: "drawStop",
        value: function drawStop() {
          return this._textBuffer.push("{\\p0}"), this;
        }
      }, {
        key: "coord",
        value: function coord(t, i) {
          var a = Math.pow(2, this._scale - 1),
            u = Math.ceil(t * a),
            l = Math.ceil(i * a);
          return this._textBuffer.push(" ".concat(u, " ").concat(l)), this;
        }
      }, {
        key: "append",
        value: function append(t) {
          return this._textBuffer.push(t), this;
        }
      }, {
        key: "merge",
        value: function merge(t) {
          return this._textBuffer.push(t.toString()), this;
        }
      }, {
        key: "pos",
        value: function pos(t, i) {
          return this.append("{\\pos(".concat(t, ",").concat(i, ")}"));
        }
      }, {
        key: "an",
        value: function an(t) {
          return this.append("{\\an".concat(t, "}"));
        }
      }, {
        key: "moveTo",
        value: function moveTo(t, i) {
          return this.append(" m").coord(t, i);
        }
      }, {
        key: "lineTo",
        value: function lineTo(t, i) {
          return this.append(" l").coord(t, i);
        }
      }, {
        key: "bezierCurve",
        value: function bezierCurve(t, i, a, u, l, f) {
          return this.append(" b").coord(t, i).coord(a, u).coord(l, f);
        }
      }, {
        key: "q",
        value: function q(t) {
          return this.append("{\\q".concat(t, "}"));
        }
      }, {
        key: "bold",
        value: function bold(t) {
          return this.append("{\\b".concat(+t, "}"));
        }
      }, {
        key: "borderSize",
        value: function borderSize(t) {
          return this.append("{\\bord".concat(t, "}"));
        }
      }, {
        key: "fontBorderSize",
        value: function fontBorderSize(t) {
          return this.append("{\\bord".concat(t, "}"));
        }
      }, {
        key: "borderColor",
        value: function borderColor(t) {
          return this.append("{\\3c&H".concat(t, "&}"));
        }
      }, {
        key: "blur",
        value: function blur(t) {
          return this.append("{\\blur".concat(t, "}"));
        }
      }, {
        key: "blurX",
        value: function blurX(t) {
          return this.append("{\\blurX".concat(t, "}"));
        }
      }, {
        key: "blurY",
        value: function blurY(t) {
          return this.append("{\\blurY".concat(t, "}"));
        }
      }, {
        key: "fontSize",
        value: function fontSize(t) {
          return this.append("{\\fs".concat(t, "}"));
        }
      }, {
        key: "fontBorderAlpha",
        value: function fontBorderAlpha(t) {
          if (t.length !== 2) throw new Error("alpha error: ".concat(t));
          return this.append("{\\3a&H".concat(t, "}"));
        }
      }, {
        key: "fontBorderColor",
        value: function fontBorderColor(t) {
          if (t.length === 6) return this.append("{\\3c".concat(t, "&}"));
          if (t.length === 8) return this.append("{\\3c&".concat(t.slice(0, 6), "&}")).fontBorderAlpha(t.slice(-2));
          if (t.length === 7) return this.append("{\\3c".concat(t.slice(1, 7), "&}"));
          if (t.length === 9) return this.append("{\\3c&".concat(t.slice(1, 7), "&}")).fontBorderAlpha(t.slice(7, 9));
          throw new Error("color error: ".concat(t));
        }
      }, {
        key: "newLine",
        value: function newLine() {
          return this.append("\r");
        }
      }, {
        key: "rectCcw",
        value: function rectCcw(t, i, a, u) {
          return this.moveTo(t, i).lineTo(t, u).lineTo(a, u).lineTo(a, i);
        }
      }, {
        key: "rectCw",
        value: function rectCw(t, i, a, u) {
          return this.moveTo(t, i).lineTo(a, i).lineTo(a, u).lineTo(t, u);
        }
      }, {
        key: "hexagonCw",
        value: function hexagonCw(t, i, a, u, l) {
          var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          return this.moveTo(t + l, i), t !== a && this.lineTo(a - f, i), this.lineTo(a, i + f), t !== a && this.lineTo(a - f, u), this.lineTo(t + l, u), this.lineTo(t, i + l), this;
        }
      }, {
        key: "hexagonCcw",
        value: function hexagonCcw(t, i, a, u, l) {
          var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          return this.moveTo(t + l, i), this.lineTo(t, i + l), this.lineTo(t + l, u), t !== a && this.lineTo(a - f, u), this.lineTo(a, i + f), t !== a && this.lineTo(a - f, i), this;
        }
      }, {
        key: "roundRectCw",
        value: function roundRectCw(t, i, a, u, l) {
          var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          var d = ld * l,
            v = ld * f;
          return this.moveTo(t + l, i), this.lineTo(a - f, i), f > 0 && this.bezierCurve(a - f + v, i, a, i + f - v, a, i + f), this.lineTo(a, u - f), f > 0 && this.bezierCurve(a, u - f + v, a - f + v, u, a - f, u), this.lineTo(t + l, u), l > 0 && this.bezierCurve(t + l - d, u, t, u - l + d, t, u - l), this.lineTo(t, i + l), l > 0 && this.bezierCurve(t, i + l - d, t + l - d, i, t + l, i), this;
        }
      }, {
        key: "roundRectCcw",
        value: function roundRectCcw(t, i, a, u, l) {
          var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          var d = ld * l,
            v = ld * f;
          return this.moveTo(t + l, i), l > 0 && this.bezierCurve(t + l - d, i, t, i + l - d, t, i + l), this.lineTo(t, u - l), l > 0 && this.bezierCurve(t, u - l + d, t + l - d, u, t + l, u), this.lineTo(a - f, u), f > 0 && this.bezierCurve(a - f + v, u, a, u - f + v, a, u - f), this.lineTo(a, i + f), f > 0 && this.bezierCurve(a, i + f - v, a - f + v, i, a - f, i), this;
        }
      }, {
        key: "drawTriangle",
        value: function drawTriangle(t, i, a, u, l, f) {
          return this.moveTo(t, i).lineTo(a, u).lineTo(l, f).lineTo(t, i);
        }
      }, {
        key: "drawRrhCw",
        value: function drawRrhCw(t, i, a, u, l, f, d) {
          return f ? this.hexagonCw(t, i, a, u, l, d) : this.roundRectCw(t, i, a, u, l, d);
        }
      }, {
        key: "drawRrHCcw",
        value: function drawRrHCcw(t, i, a, u, l, f, d) {
          return f ? this.hexagonCcw(t, i, a, u, l, d) : this.roundRectCcw(t, i, a, u, l, d);
        }
      }, {
        key: "end",
        value: function end() {
          return this.append(" s");
        }
      }, {
        key: "color",
        value: function color(t) {
          if (typeof t == "number" && (t = t.toString(16).padStart(6, "0")), t.length === 8) return this.append("{\\c&".concat(t.slice(0, 6), "&}")).alpha(t.slice(-2));
          if (t.length === 6) return this.append("{\\c&".concat(t, "&}"));
          if (t.length === 9) return this.append("{\\c&".concat(t.slice(1, 7), "&}")).alpha(t.slice(7, 9));
          if (t.length === 7) return this.append("{\\c&".concat(t.slice(1, 7), "&}"));
          throw new Error("AssDraw color error: ".concat(t));
        }
      }, {
        key: "colorText",
        value: function colorText(t, i) {
          return this.color(t).append(i);
        }
      }, {
        key: "alpha",
        value: function alpha(t) {
          return typeof t == "number" && (t = t.toString(16).padStart(2, "0")), this.append("{\\alpha&H".concat(t.padStart(2, "0"), "}"));
        }
      }, {
        key: "toString",
        value: function toString() {
          return this._textBuffer.join("");
        }
      }]);
    }();
  var _loop2 = function _loop2() {
    var t = _e3.charAt(0).toLowerCase() + _e3.slice(1),
      i = new jn(sd[_e3]);
    _typeof(i.color) > "u" && (i.color = sd[_e3]);
    var a = i.toHex();
    Ci.prototype[t] = function () {
      return this.color(a);
    }, Ci.prototype["".concat(t, "Text")] = function (u) {
      return this.colorText(a, u);
    };
  };
  for (var _e3 in sd) {
    _loop2();
  }
  var K6 = new Ci();
  function V6(_ref) {
    var e = _ref.x,
      t = _ref.y,
      _ref$borderSize = _ref.borderSize,
      i = _ref$borderSize === void 0 ? 0 : _ref$borderSize,
      _ref$color = _ref.color,
      a = _ref$color === void 0 ? "#00000000" : _ref$color,
      u = _ref.width,
      l = _ref.height,
      _ref$borderColor = _ref.borderColor,
      f = _ref$borderColor === void 0 ? "#00000000" : _ref$borderColor,
      _ref$borderRadius = _ref.borderRadius,
      d = _ref$borderRadius === void 0 ? 0 : _ref$borderRadius;
    return K6.clear().color(a).drawStart().pos(e, t).borderSize(i).borderColor(f).roundRectCw(0, 0, u, l, d).end().toString();
  }
  function Y6(_ref2) {
    var e = _ref2.x,
      t = _ref2.y,
      i = _ref2.width,
      a = _ref2.height,
      u = _ref2.borderSize,
      l = _ref2.borderColor;
    return K6.clear().color(l).drawStart().borderSize(0).pos(e, t).rectCw(0, 0, i, u).rectCw(0, 0, u, a).rectCw(0, a - u, i, a).rectCw(i - u, 0, i, a).toString();
  }
  var cd = [];
  function fve() {
    for (var _t2 = 0; _t2 < cd.length; _t2++) {
      var i = cd[_t2];
      if (i && !i.busy) return i.busy = !0, i.overlay;
    }
    var e = Yb();
    return e.remove = function () {
      e.hidden = !0, e.data = "", e.compute_bounds = !1, e.update(), cd[e.id || 0].busy = !1;
    }, cd[e.id || 0] = {
      overlay: e,
      busy: !0
    }, e;
  }
  var Fn = /*#__PURE__*/function () {
    function Fn() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Fn);
      _defineProperty(this, "overlay", void 0);
      _defineProperty(this, "cache", void 0);
      _defineProperty(this, "_lastResY", void 0);
      _defineProperty(this, "_lastResX", void 0);
      _defineProperty(this, "_lastHidden", void 0);
      _defineProperty(this, "_lastComputeBounds", void 0);
      _defineProperty(this, "_lastData", void 0);
      _defineProperty(this, "_lastZ", void 0);
      _defineProperty(this, "_lastRect", void 0);
      var _t$hidden = t.hidden,
        i = _t$hidden === void 0 ? !1 : _t$hidden,
        _t$resX = t.resX,
        a = _t$resX === void 0 ? 0 : _t$resX,
        _t$resY = t.resY,
        u = _t$resY === void 0 ? 720 : _t$resY,
        _t$z = t.z,
        l = _t$z === void 0 ? 0 : _t$z,
        _t$computeBounds = t.computeBounds,
        f = _t$computeBounds === void 0 ? !0 : _t$computeBounds,
        _t$data = t.data,
        d = _t$data === void 0 ? "" : _t$data,
        _t$cache = t.cache,
        v = _t$cache === void 0 ? !1 : _t$cache,
        _t$overlay = t.overlay,
        h = _t$overlay === void 0 ? fve() : _t$overlay;
      h.res_x = a, h.res_y = u, h.hidden = i, h.compute_bounds = f, h.data = d, h.z = l, this.cache = v, this.overlay = h;
    }
    return _createClass(Fn, [{
      key: "hidden",
      get: function get() {
        return this.overlay.hidden;
      },
      set: function set(t) {
        this.overlay.hidden = t;
      }
    }, {
      key: "computeBounds",
      get: function get() {
        return this.overlay.compute_bounds;
      },
      set: function set(t) {
        this.overlay.compute_bounds = t;
      }
    }, {
      key: "z",
      get: function get() {
        return this.overlay.z;
      },
      set: function set(t) {
        this.overlay.z = t;
      }
    }, {
      key: "data",
      get: function get() {
        return this.overlay.data;
      },
      set: function set(t) {
        this.overlay.data = t;
      }
    }, {
      key: "resX",
      get: function get() {
        return this.overlay.res_x;
      },
      set: function set(t) {
        this.overlay.res_x = t;
      }
    }, {
      key: "resY",
      get: function get() {
        return this.overlay.res_y;
      },
      set: function set(t) {
        this.overlay.res_y = t;
      }
    }, {
      key: "remove",
      value: function remove() {
        this.overlay.remove();
      }
    }, {
      key: "update",
      value: function update() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        if (this.cache) {
          if (this._lastResX === this.resX && this._lastResY === this.resY && this._lastHidden === this.hidden && this._lastComputeBounds === this.computeBounds && this._lastData === this.data && this._lastZ === this.z) return this._lastRect;
          this._lastResY = this.resY, this._lastResX = this.resX, this._lastHidden = this.hidden, this._lastComputeBounds = this.computeBounds, this._lastData = this.data, this._lastZ = this.z;
          var a = this.overlay.update();
          return this._lastRect = Ln.fromCoord(a).scale(t), this._lastRect;
        }
        var i = this.overlay.update();
        return Ln.fromCoord(i).scale(t);
      }
    }]);
  }();
  function Ee() {
    return globalThis.mp;
  }
  function rn(e) {
    return Ee().command(e);
  }
  function ad() {
    var _Ee;
    return (_Ee = Ee()).commandv.apply(_Ee, arguments);
  }
  function od(e) {
    return Ee().command_native(e);
  }
  function L6(e, t) {
    return Ee().command_native_async(e, t);
  }
  function Al(e, t) {
    var _Ee$get_property;
    return (_Ee$get_property = Ee().get_property(e)) !== null && _Ee$get_property !== void 0 ? _Ee$get_property : t;
  }
  function su(e, t) {
    var _Ee$get_property_bool;
    return (_Ee$get_property_bool = Ee().get_property_bool(e)) !== null && _Ee$get_property_bool !== void 0 ? _Ee$get_property_bool : t;
  }
  function ud(e, t) {
    var _Ee$get_property_nati;
    return (_Ee$get_property_nati = Ee().get_property_native(e)) !== null && _Ee$get_property_nati !== void 0 ? _Ee$get_property_nati : t;
  }
  function wa(e, t) {
    var _Ee$get_property_numb;
    return (_Ee$get_property_numb = Ee().get_property_number(e)) !== null && _Ee$get_property_numb !== void 0 ? _Ee$get_property_numb : t;
  }
  function mu(e, t) {
    var _Ee$get_property_nati2;
    return (_Ee$get_property_nati2 = Ee().get_property_native(e)) !== null && _Ee$get_property_nati2 !== void 0 ? _Ee$get_property_nati2 : t;
  }
  function lu(e, t) {
    return Ee().set_property_bool(e, t);
  }
  function Mi(e, t) {
    return Ee().set_property_native(e, t);
  }
  function hu(e, t, i, a) {
    return Ee().add_key_binding(e, t, i, a);
  }
  function nn(e, t, i) {
    return Ee().observe_property(e, t, i);
  }
  function j6(e, t) {
    return nn(e, "number", function (i, a) {
      return t(i, a);
    });
  }
  function X6(e) {
    return Ee().unobserve_property(e);
  }
  function F6(e, t) {
    return Ee().osd_message(e, t);
  }
  function an(e, t) {
    return Ee().register_script_message(e, t);
  }
  function Yb() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ass-events";
    return Ee().create_osd_overlay(e);
  }
  function Xb() {
    return Ee().get_osd_size();
  }
  var fd;
  function kb() {
    return fd || (fd = kt(Ee().get_script_file().split("/").slice(0, -1).join("/")), fd);
  }
  var pd;
  function k6() {
    return pd || (pd = Qe(kb(), nd), pd);
  }
  function Q6(e, t, i) {
    return typeof i == "function" ? Ee().options.read_options(e, t, i) : Ee().options.read_options(e, t);
  }
  function rd(e) {
    return Ee().utils.file_info(e);
  }
  function pve(e) {
    return Ee().utils.split_path(e);
  }
  function Qe() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    return kt(e.reduce(function (t, i) {
      return Ee().utils.join_path(t, i);
    }));
  }
  function dd(e) {
    return Ee().utils.getenv(e);
  }
  function on(e, t) {
    return Ee().utils.read_file(e, t);
  }
  function Br(e, t) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "file://";
    var a = i + kt(e);
    return Ee().utils.write_file(a, t);
  }
  function Ol() {
    return globalThis.print.apply(globalThis, arguments);
  }
  function Z6() {
    var e = dve("~~home/"),
      t = ke() === "windows" ? "mpv.exe" : "mpv",
      i = Qe.apply(void 0, _toConsumableArray(pve(e).slice(0, -1)).concat([t]));
    return ke() === "windows" ? i.replaceAll("/", "\\\\") : i;
  }
  function dve(e) {
    return od(["expand-path", e]);
  }
  function vve() {
    this.__data__ = [], this.size = 0;
  }
  var W6 = vve;
  function mve(e, t) {
    return e === t || e !== e && t !== t;
  }
  var vd = mve;
  function hve(e, t) {
    for (var i = e.length; i--;) if (vd(e[i][0], t)) return i;
    return -1;
  }
  var Bi = hve;
  var yve = Array.prototype,
    gve = yve.splice;
  function bve(e) {
    var t = this.__data__,
      i = Bi(t, e);
    if (i < 0) return !1;
    var a = t.length - 1;
    return i == a ? t.pop() : gve.call(t, i, 1), --this.size, !0;
  }
  var J6 = bve;
  function xve(e) {
    var t = this.__data__,
      i = Bi(t, e);
    return i < 0 ? void 0 : t[i][1];
  }
  var $6 = xve;
  function Sve(e) {
    return Bi(this.__data__, e) > -1;
  }
  var eU = Sve;
  function Eve(e, t) {
    var i = this.__data__,
      a = Bi(i, e);
    return a < 0 ? (++this.size, i.push([e, t])) : i[a][1] = t, this;
  }
  var tU = Eve;
  function yu(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  yu.prototype.clear = W6;
  yu.prototype.delete = J6;
  yu.prototype.get = $6;
  yu.prototype.has = eU;
  yu.prototype.set = tU;
  var Di = yu;
  function Tve() {
    this.__data__ = new Di(), this.size = 0;
  }
  var rU = Tve;
  function qve(e) {
    var t = this.__data__,
      i = t.delete(e);
    return this.size = t.size, i;
  }
  var nU = qve;
  function Ave(e) {
    return this.__data__.get(e);
  }
  var iU = Ave;
  function _ve(e) {
    return this.__data__.has(e);
  }
  var aU = _ve;
  var Ove = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
    md = Ove;
  var wve = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
    Nve = md || wve || Function("return this")(),
    st = Nve;
  var Rve = st.Symbol,
    Hn = Rve;
  var oU = Object.prototype,
    Cve = oU.hasOwnProperty,
    Mve = oU.toString,
    wl = Hn ? Hn.toStringTag : void 0;
  function Bve(e) {
    var t = Cve.call(e, wl),
      i = e[wl];
    try {
      e[wl] = void 0;
      var a = !0;
    } catch (_unused66) {}
    var u = Mve.call(e);
    return a && (t ? e[wl] = i : delete e[wl]), u;
  }
  var uU = Bve;
  var Dve = Object.prototype,
    Pve = Dve.toString;
  function Ive(e) {
    return Pve.call(e);
  }
  var sU = Ive;
  var Uve = "[object Null]",
    zve = "[object Undefined]",
    lU = Hn ? Hn.toStringTag : void 0;
  function Lve(e) {
    return e == null ? e === void 0 ? zve : Uve : lU && lU in Object(e) ? uU(e) : sU(e);
  }
  var Gn = Lve;
  function jve(e) {
    var t = _typeof(e);
    return e != null && (t == "object" || t == "function");
  }
  var hd = jve;
  var Fve = "[object AsyncFunction]",
    Hve = "[object Function]",
    Gve = "[object GeneratorFunction]",
    Kve = "[object Proxy]";
  function Vve(e) {
    if (!hd(e)) return !1;
    var t = Gn(e);
    return t == Hve || t == Gve || t == Fve || t == Kve;
  }
  var yd = Vve;
  var Yve = st["__core-js_shared__"],
    gd = Yve;
  var cU = function () {
    var e = /[^.]+$/.exec(gd && gd.keys && gd.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function Xve(e) {
    return !!cU && cU in e;
  }
  var fU = Xve;
  var kve = Function.prototype,
    Qve = kve.toString;
  function Zve(e) {
    if (e != null) {
      try {
        return Qve.call(e);
      } catch (_unused67) {}
      try {
        return e + "";
      } catch (_unused68) {}
    }
    return "";
  }
  var Kn = Zve;
  var Wve = /[\\^$.*+?()[\]{}|]/g,
    Jve = /^\[object .+?Constructor\]$/,
    $ve = Function.prototype,
    eme = Object.prototype,
    tme = $ve.toString,
    rme = eme.hasOwnProperty,
    nme = RegExp("^" + tme.call(rme).replace(Wve, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function ime(e) {
    if (!hd(e) || fU(e)) return !1;
    var t = yd(e) ? nme : Jve;
    return t.test(Kn(e));
  }
  var pU = ime;
  function ame(e, t) {
    return e === null || e === void 0 ? void 0 : e[t];
  }
  var dU = ame;
  function ome(e, t) {
    var i = dU(e, t);
    return pU(i) ? i : void 0;
  }
  var xr = ome;
  var ume = xr(st, "Map"),
    Pi = ume;
  var sme = xr(Object, "create"),
    Vn = sme;
  function lme() {
    this.__data__ = Vn ? Vn(null) : {}, this.size = 0;
  }
  var vU = lme;
  function cme(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var mU = cme;
  var fme = "__lodash_hash_undefined__",
    pme = Object.prototype,
    dme = pme.hasOwnProperty;
  function vme(e) {
    var t = this.__data__;
    if (Vn) {
      var i = t[e];
      return i === fme ? void 0 : i;
    }
    return dme.call(t, e) ? t[e] : void 0;
  }
  var hU = vme;
  var mme = Object.prototype,
    hme = mme.hasOwnProperty;
  function yme(e) {
    var t = this.__data__;
    return Vn ? t[e] !== void 0 : hme.call(t, e);
  }
  var yU = yme;
  var gme = "__lodash_hash_undefined__";
  function bme(e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = Vn && t === void 0 ? gme : t, this;
  }
  var gU = bme;
  function gu(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  gu.prototype.clear = vU;
  gu.prototype.delete = mU;
  gu.prototype.get = hU;
  gu.prototype.has = yU;
  gu.prototype.set = gU;
  var Qb = gu;
  function xme() {
    this.size = 0, this.__data__ = {
      hash: new Qb(),
      map: new (Pi || Di)(),
      string: new Qb()
    };
  }
  var bU = xme;
  function Sme(e) {
    var t = _typeof(e);
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  var xU = Sme;
  function Eme(e, t) {
    var i = e.__data__;
    return xU(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
  }
  var Ii = Eme;
  function Tme(e) {
    var t = Ii(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  var SU = Tme;
  function qme(e) {
    return Ii(this, e).get(e);
  }
  var EU = qme;
  function Ame(e) {
    return Ii(this, e).has(e);
  }
  var TU = Ame;
  function _me(e, t) {
    var i = Ii(this, e),
      a = i.size;
    return i.set(e, t), this.size += i.size == a ? 0 : 1, this;
  }
  var qU = _me;
  function bu(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  bu.prototype.clear = bU;
  bu.prototype.delete = SU;
  bu.prototype.get = EU;
  bu.prototype.has = TU;
  bu.prototype.set = qU;
  var bd = bu;
  var Ome = 200;
  function wme(e, t) {
    var i = this.__data__;
    if (i instanceof Di) {
      var a = i.__data__;
      if (!Pi || a.length < Ome - 1) return a.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new bd(a);
    }
    return i.set(e, t), this.size = i.size, this;
  }
  var AU = wme;
  function xu(e) {
    var t = this.__data__ = new Di(e);
    this.size = t.size;
  }
  xu.prototype.clear = rU;
  xu.prototype.delete = nU;
  xu.prototype.get = iU;
  xu.prototype.has = aU;
  xu.prototype.set = AU;
  var xd = xu;
  var Nme = "__lodash_hash_undefined__";
  function Rme(e) {
    return this.__data__.set(e, Nme), this;
  }
  var _U = Rme;
  function Cme(e) {
    return this.__data__.has(e);
  }
  var OU = Cme;
  function Sd(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.__data__ = new bd(); ++t < i;) this.add(e[t]);
  }
  Sd.prototype.add = Sd.prototype.push = _U;
  Sd.prototype.has = OU;
  var wU = Sd;
  function Mme(e, t) {
    for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) if (t(e[i], i, e)) return !0;
    return !1;
  }
  var NU = Mme;
  function Bme(e, t) {
    return e.has(t);
  }
  var RU = Bme;
  var Dme = 1,
    Pme = 2;
  function Ime(e, t, i, a, u, l) {
    var f = i & Dme,
      d = e.length,
      v = t.length;
    if (d != v && !(f && v > d)) return !1;
    var h = l.get(e),
      y = l.get(t);
    if (h && y) return h == t && y == e;
    var b = -1,
      S = !0,
      T = i & Pme ? new wU() : void 0;
    for (l.set(e, t), l.set(t, e); ++b < d;) {
      var R = e[b],
        A = t[b];
      if (a) var _ = f ? a(A, R, b, t, e, l) : a(R, A, b, e, t, l);
      if (_ !== void 0) {
        if (_) continue;
        S = !1;
        break;
      }
      if (T) {
        if (!NU(t, function (x, q) {
          if (!RU(T, q) && (R === x || u(R, x, i, a, l))) return T.push(q);
        })) {
          S = !1;
          break;
        }
      } else if (!(R === A || u(R, A, i, a, l))) {
        S = !1;
        break;
      }
    }
    return l.delete(e), l.delete(t), S;
  }
  var Ed = Ime;
  var Ume = st.Uint8Array,
    Zb = Ume;
  function zme(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (a, u) {
      i[++t] = [u, a];
    }), i;
  }
  var CU = zme;
  function Lme(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (a) {
      i[++t] = a;
    }), i;
  }
  var MU = Lme;
  var jme = 1,
    Fme = 2,
    Hme = "[object Boolean]",
    Gme = "[object Date]",
    Kme = "[object Error]",
    Vme = "[object Map]",
    Yme = "[object Number]",
    Xme = "[object RegExp]",
    kme = "[object Set]",
    Qme = "[object String]",
    Zme = "[object Symbol]",
    Wme = "[object ArrayBuffer]",
    Jme = "[object DataView]",
    BU = Hn ? Hn.prototype : void 0,
    Wb = BU ? BU.valueOf : void 0;
  function $me(e, t, i, a, u, l, f) {
    switch (i) {
      case Jme:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        e = e.buffer, t = t.buffer;
      case Wme:
        return !(e.byteLength != t.byteLength || !l(new Zb(e), new Zb(t)));
      case Hme:
      case Gme:
      case Yme:
        return vd(+e, +t);
      case Kme:
        return e.name == t.name && e.message == t.message;
      case Xme:
      case Qme:
        return e == t + "";
      case Vme:
        var d = CU;
      case kme:
        var v = a & jme;
        if (d || (d = MU), e.size != t.size && !v) return !1;
        var h = f.get(e);
        if (h) return h == t;
        a |= Fme, f.set(e, t);
        var y = Ed(d(e), d(t), a, u, l, f);
        return f.delete(e), y;
      case Zme:
        if (Wb) return Wb.call(e) == Wb.call(t);
    }
    return !1;
  }
  var DU = $me;
  function ehe(e, t) {
    for (var i = -1, a = t.length, u = e.length; ++i < a;) e[u + i] = t[i];
    return e;
  }
  var PU = ehe;
  var the = Array.isArray,
    Pa = the;
  function rhe(e, t, i) {
    var a = t(e);
    return Pa(e) ? a : PU(a, i(e));
  }
  var IU = rhe;
  function nhe(e, t) {
    for (var i = -1, a = e == null ? 0 : e.length, u = 0, l = []; ++i < a;) {
      var f = e[i];
      t(f, i, e) && (l[u++] = f);
    }
    return l;
  }
  var UU = nhe;
  function ihe() {
    return [];
  }
  var zU = ihe;
  var ahe = Object.prototype,
    ohe = ahe.propertyIsEnumerable,
    LU = Object.getOwnPropertySymbols,
    uhe = LU ? function (e) {
      return e == null ? [] : (e = Object(e), UU(LU(e), function (t) {
        return ohe.call(e, t);
      }));
    } : zU,
    jU = uhe;
  function she(e, t) {
    for (var i = -1, a = Array(e); ++i < e;) a[i] = t(i);
    return a;
  }
  var FU = she;
  function lhe(e) {
    return e != null && _typeof(e) == "object";
  }
  var Yn = lhe;
  var che = "[object Arguments]";
  function fhe(e) {
    return Yn(e) && Gn(e) == che;
  }
  var Jb = fhe;
  var HU = Object.prototype,
    phe = HU.hasOwnProperty,
    dhe = HU.propertyIsEnumerable,
    vhe = Jb(function () {
      return arguments;
    }()) ? Jb : function (e) {
      return Yn(e) && phe.call(e, "callee") && !dhe.call(e, "callee");
    },
    GU = vhe;
  function mhe() {
    return !1;
  }
  var KU = mhe;
  var XU = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
    VU = XU && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
    hhe = VU && VU.exports === XU,
    YU = hhe ? st.Buffer : void 0,
    yhe = YU ? YU.isBuffer : void 0,
    ghe = yhe || KU,
    Nl = ghe;
  var bhe = 9007199254740991,
    xhe = /^(?:0|[1-9]\d*)$/;
  function She(e, t) {
    var _t3;
    var i = _typeof(e);
    return t = (_t3 = t) !== null && _t3 !== void 0 ? _t3 : bhe, !!t && (i == "number" || i != "symbol" && xhe.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var kU = She;
  var Ehe = 9007199254740991;
  function The(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ehe;
  }
  var Td = The;
  var qhe = "[object Arguments]",
    Ahe = "[object Array]",
    _he = "[object Boolean]",
    Ohe = "[object Date]",
    whe = "[object Error]",
    Nhe = "[object Function]",
    Rhe = "[object Map]",
    Che = "[object Number]",
    Mhe = "[object Object]",
    Bhe = "[object RegExp]",
    Dhe = "[object Set]",
    Phe = "[object String]",
    Ihe = "[object WeakMap]",
    Uhe = "[object ArrayBuffer]",
    zhe = "[object DataView]",
    Lhe = "[object Float32Array]",
    jhe = "[object Float64Array]",
    Fhe = "[object Int8Array]",
    Hhe = "[object Int16Array]",
    Ghe = "[object Int32Array]",
    Khe = "[object Uint8Array]",
    Vhe = "[object Uint8ClampedArray]",
    Yhe = "[object Uint16Array]",
    Xhe = "[object Uint32Array]",
    Ce = {};
  Ce[Lhe] = Ce[jhe] = Ce[Fhe] = Ce[Hhe] = Ce[Ghe] = Ce[Khe] = Ce[Vhe] = Ce[Yhe] = Ce[Xhe] = !0;
  Ce[qhe] = Ce[Ahe] = Ce[Uhe] = Ce[_he] = Ce[zhe] = Ce[Ohe] = Ce[whe] = Ce[Nhe] = Ce[Rhe] = Ce[Che] = Ce[Mhe] = Ce[Bhe] = Ce[Dhe] = Ce[Phe] = Ce[Ihe] = !1;
  function khe(e) {
    return Yn(e) && Td(e.length) && !!Ce[Gn(e)];
  }
  var QU = khe;
  function Qhe(e) {
    return function (t) {
      return e(t);
    };
  }
  var ZU = Qhe;
  var WU = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
    Rl = WU && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
    Zhe = Rl && Rl.exports === WU,
    $b = Zhe && md.process,
    Whe = function () {
      try {
        var e = Rl && Rl.require && Rl.require("util").types;
        return e || $b && $b.binding && $b.binding("util");
      } catch (_unused69) {}
    }(),
    ex = Whe;
  var JU = ex && ex.isTypedArray,
    Jhe = JU ? ZU(JU) : QU,
    qd = Jhe;
  var $he = Object.prototype,
    eye = $he.hasOwnProperty;
  function tye(e, t) {
    var i = Pa(e),
      a = !i && GU(e),
      u = !i && !a && Nl(e),
      l = !i && !a && !u && qd(e),
      f = i || a || u || l,
      d = f ? FU(e.length, String) : [],
      v = d.length;
    for (var h in e) (t || eye.call(e, h)) && !(f && (h == "length" || u && (h == "offset" || h == "parent") || l && (h == "buffer" || h == "byteLength" || h == "byteOffset") || kU(h, v))) && d.push(h);
    return d;
  }
  var $U = tye;
  var rye = Object.prototype;
  function nye(e) {
    var t = e && e.constructor,
      i = typeof t == "function" && t.prototype || rye;
    return e === i;
  }
  var ez = nye;
  function iye(e, t) {
    return function (i) {
      return e(t(i));
    };
  }
  var tz = iye;
  var aye = tz(Object.keys, Object),
    rz = aye;
  var oye = Object.prototype,
    uye = oye.hasOwnProperty;
  function sye(e) {
    if (!ez(e)) return rz(e);
    var t = [];
    for (var i in Object(e)) uye.call(e, i) && i != "constructor" && t.push(i);
    return t;
  }
  var nz = sye;
  function lye(e) {
    return e != null && Td(e.length) && !yd(e);
  }
  var iz = lye;
  function cye(e) {
    return iz(e) ? $U(e) : nz(e);
  }
  var az = cye;
  function fye(e) {
    return IU(e, az, jU);
  }
  var tx = fye;
  var pye = 1,
    dye = Object.prototype,
    vye = dye.hasOwnProperty;
  function mye(e, t, i, a, u, l) {
    var f = i & pye,
      d = tx(e),
      v = d.length,
      h = tx(t),
      y = h.length;
    if (v != y && !f) return !1;
    for (var b = v; b--;) {
      var S = d[b];
      if (!(f ? S in t : vye.call(t, S))) return !1;
    }
    var T = l.get(e),
      R = l.get(t);
    if (T && R) return T == t && R == e;
    var A = !0;
    l.set(e, t), l.set(t, e);
    for (var _ = f; ++b < v;) {
      S = d[b];
      var x = e[S],
        q = t[S];
      if (a) var I = f ? a(q, x, S, t, e, l) : a(x, q, S, e, t, l);
      if (!(I === void 0 ? x === q || u(x, q, i, a, l) : I)) {
        A = !1;
        break;
      }
      _ || (_ = S == "constructor");
    }
    if (A && !_) {
      var w = e.constructor,
        B = t.constructor;
      w != B && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof B == "function" && B instanceof B) && (A = !1);
    }
    return l.delete(e), l.delete(t), A;
  }
  var oz = mye;
  var hye = xr(st, "DataView"),
    Ad = hye;
  var yye = xr(st, "Promise"),
    _d = yye;
  var gye = xr(st, "Set"),
    Od = gye;
  var bye = xr(st, "WeakMap"),
    wd = bye;
  var uz = "[object Map]",
    xye = "[object Object]",
    sz = "[object Promise]",
    lz = "[object Set]",
    cz = "[object WeakMap]",
    fz = "[object DataView]",
    Sye = Kn(Ad),
    Eye = Kn(Pi),
    Tye = Kn(_d),
    qye = Kn(Od),
    Aye = Kn(wd),
    Ia = Gn;
  (Ad && Ia(new Ad(new ArrayBuffer(1))) != fz || Pi && Ia(new Pi()) != uz || _d && Ia(_d.resolve()) != sz || Od && Ia(new Od()) != lz || wd && Ia(new wd()) != cz) && (Ia = function Ia(e) {
    var t = Gn(e),
      i = t == xye ? e.constructor : void 0,
      a = i ? Kn(i) : "";
    if (a) switch (a) {
      case Sye:
        return fz;
      case Eye:
        return uz;
      case Tye:
        return sz;
      case qye:
        return lz;
      case Aye:
        return cz;
    }
    return t;
  });
  var rx = Ia;
  var _ye = 1,
    pz = "[object Arguments]",
    dz = "[object Array]",
    Nd = "[object Object]",
    Oye = Object.prototype,
    vz = Oye.hasOwnProperty;
  function wye(e, t, i, a, u, l) {
    var f = Pa(e),
      d = Pa(t),
      v = f ? dz : rx(e),
      h = d ? dz : rx(t);
    v = v == pz ? Nd : v, h = h == pz ? Nd : h;
    var y = v == Nd,
      b = h == Nd,
      S = v == h;
    if (S && Nl(e)) {
      if (!Nl(t)) return !1;
      f = !0, y = !1;
    }
    if (S && !y) return l || (l = new xd()), f || qd(e) ? Ed(e, t, i, a, u, l) : DU(e, t, v, i, a, u, l);
    if (!(i & _ye)) {
      var T = y && vz.call(e, "__wrapped__"),
        R = b && vz.call(t, "__wrapped__");
      if (T || R) {
        var A = T ? e.value() : e,
          _ = R ? t.value() : t;
        return l || (l = new xd()), u(A, _, i, a, l);
      }
    }
    return S ? (l || (l = new xd()), oz(e, t, i, a, u, l)) : !1;
  }
  var mz = wye;
  function hz(e, t, i, a, u) {
    return e === t ? !0 : e == null || t == null || !Yn(e) && !Yn(t) ? e !== e && t !== t : mz(e, t, i, a, hz, u);
  }
  var yz = hz;
  function Nye(e, t) {
    return yz(e, t);
  }
  var gz = Nye;
  var Rd = /*#__PURE__*/function () {
    function Rd(t) {
      _classCallCheck(this, Rd);
      this.name = t;
    }
    return _createClass(Rd, [{
      key: "value",
      get: function get() {
        return mu(this.name);
      },
      set: function set(t) {
        Mi(this.name, t);
      }
    }, {
      key: "set",
      value: function set(t) {
        return this.value = t, this;
      }
    }, {
      key: "get",
      value: function get() {
        return this.value;
      }
    }, {
      key: "observe",
      value: function observe(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gz;
        var a;
        return nn(this.name, "native", function (u, l) {
          (_typeof(a) > "u" || !i(l, a)) && (a = l, t(u, l));
        });
      }
    }, {
      key: "unobserve",
      value: function unobserve(t) {
        return X6(t);
      }
    }]);
  }();
  function bz(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "powershell";
    Br(e, t);
    var u = Dt([a, e]);
    return i && (u = on(i)), u;
  }
  function Ui(e) {
    var t = ke(),
      i = "where ".concat(e);
    try {
      var u = Cye(i).stdout.trim().split("\n")[0];
      return ot(u) ? u : !1;
    } catch (_unused70) {
      return !1;
    }
  }
  function Cye(e) {
    var t = ke(),
      _ref3 = t === "windows" ? ["cmd", "/c"] : ["sh", "-c"],
      _ref4 = _slicedToArray(_ref3, 2),
      i = _ref4[0],
      a = _ref4[1];
    try {
      return {
        ok: !0,
        stdout: Dt([i, a, e]).replaceAll("\r\n", "\n"),
        stderr: ""
      };
    } catch (u) {
      return {
        ok: !1,
        stderr: String(u).replaceAll("\r\n", "\n"),
        stdout: ""
      };
    }
  }
  function xz(_x2) {
    return _xz.apply(this, arguments);
  }
  function _xz() {
    _xz = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var t, _ref31, _ref32, i, a;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            t = ke(), _ref31 = t === "windows" ? ["cmd", "/c"] : ["sh", "-c"], _ref32 = _slicedToArray(_ref31, 2), i = _ref32[0], a = _ref32[1];
            _context2.prev = 1;
            _context2.t0 = !0;
            _context2.next = 5;
            return Qt([i, a, e]);
          case 5:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", {
              ok: _context2.t0,
              stdout: _context2.t1,
              stderr: ""
            });
          case 9:
            _context2.prev = 9;
            _context2.t2 = _context2["catch"](1);
            return _context2.abrupt("return", {
              ok: !1,
              stderr: String(_context2.t2),
              stdout: ""
            });
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 9]]);
    }));
    return _xz.apply(this, arguments);
  }
  var Su;
  function Mye() {
    if (Su) return Su;
    var e = Dt(["powershell", "-c", 'Get-ItemProperty -Path "HKCU:\\Control Panel\\Cursors"']).trim();
    Su = {
      Arrow: "",
      Hand: ""
    };
    var _iterator4 = _createForOfIteratorHelper(e.split("\n")),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _t4 = _step4.value;
        var i = _t4.indexOf(":"),
          a = _t4.slice(0, i).trim(),
          u = _t4.slice(i + 1).trim();
        a === "Arrow" ? Su.Arrow = u : a === "Hand" && (Su.Hand = u);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return Su;
  }
  var nx;
  function ix(e) {
    nx || (nx = Mye());
    var t = nx[e];
    if (!t.length) return;
    var i = "Set-ItemProperty -Path 'HKCU:\\Control Panel\\Cursors' -Name 'Arrow' -Value '".concat(t, "';\nAdd-Type -TypeDefinition @'\npublic class SysParamsInfo {\n    [System.Runtime.InteropServices.DllImport(\"user32.dll\", EntryPoint = \"SystemParametersInfo\")]\n    public static extern bool SystemParametersInfo(uint uiAction, uint uiParam, uint pvParam, uint fWinIni);\n\n    const int SPI_SETCURSORS = 0x0057;\n    const int SPIF_UPDATEINIFILE = 0x01;\n    const int SPIF_SENDCHANGE = 0x02;\n\n    public static void CursorHasChanged() {\n        SystemParametersInfo(SPI_SETCURSORS, 0, 0, SPIF_UPDATEINIFILE | SPIF_SENDCHANGE);\n    }\n}\n'@\n[SysParamsInfo]::CursorHasChanged()"),
      u = Qe(kb(), nd, "mpv_easy_tool_set_mouse_style.ps1");
    bz(u, i);
  }
  function Sz(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
  }
  function Cd(e) {
    return Dye(e), Number.parseFloat(e.slice(0, -1)) / 100;
  }
  function Bye(e) {
    return e.endsWith("%");
  }
  function Dye(e) {
    Sz(Bye(e), "not a valid percentage string: ".concat(e));
  }
  var Ez = 64,
    ax = new Array(Ez).map(function () {
      return !1;
    }),
    Md = /*#__PURE__*/function () {
      function Md(t) {
        _classCallCheck(this, Md);
        _defineProperty(this, "x", 0);
        _defineProperty(this, "y", 0);
        _defineProperty(this, "file", "");
        _defineProperty(this, "offset", 0);
        _defineProperty(this, "fmt", "bgra");
        _defineProperty(this, "w", 0);
        _defineProperty(this, "h", 0);
        _defineProperty(this, "stride", 0);
        this.id = t;
        if (ax[t]) throw new Error("overlay's id has already been used.".concat(t));
        if (t < 0 || t >= Ez) throw new Error("overlay's id must be in the range [0, 63]".concat(t));
        ax[t] = !0;
      }
      return _createClass(Md, [{
        key: "update",
        value: function update() {
          ad("overlay-add", this.id, this.x, this.y, this.file, 0, this.fmt, this.w, this.h, this.stride, this.w, this.h);
        }
      }, {
        key: "remove",
        value: function remove() {
          rn("overlay-remove ".concat(this.id));
        }
      }, {
        key: "destroy",
        value: function destroy() {
          ax[this.id] = !1;
        }
      }]);
    }();
  var Pye = "mpv-easy-ext",
    un = function un() {
      return Qe(k6(), Pye);
    },
    Iye = "mpv-easy-ext-macos",
    Uye = "mpv-easy-ext-windows.exe",
    zye = "mpv-easy-ext-android",
    Lye = "mpv-easy-ext-linux";
  function Ua() {
    var e = ke();
    switch (e) {
      case "darwin":
        return Qe(un(), Iye);
      case "linux":
        return Qe(un(), Lye);
      case "windows":
        return Qe(un(), Uye);
      case "android":
        return Qe(un(), zye);
      default:
        throw new Error("mpv-easy-ext not support os: ".concat(e));
    }
  }
  function zi() {
    return dd("TMPDIR") || dd("TMP") || dd("tmp") || ".";
  }
  function qz(_x3, _x4) {
    return _qz.apply(this, arguments);
  }
  function _qz() {
    _qz = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e, t) {
      var i,
        a,
        _JSON$parse,
        u,
        l,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            i = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : Ua();
            a = t ? [i, "fetch", JSON.stringify(e), JSON.stringify(t)] : [i, "fetch", JSON.stringify(e)];
            _context3.t0 = JSON;
            _context3.next = 5;
            return Qt(a);
          case 5:
            _context3.t1 = _context3.sent;
            _JSON$parse = _context3.t0.parse.call(_context3.t0, _context3.t1);
            u = _JSON$parse.status;
            l = _JSON$parse.text;
            return _context3.abrupt("return", {
              status: u,
              ok: u === 200,
              text: function text() {
                return Promise.resolve(l);
              },
              json: function json() {
                return Promise.resolve(JSON.parse(l));
              }
            });
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _qz.apply(this, arguments);
  }
  function Fye(e) {
    var t = e.method;
    return t ? ["-X", U6[t.toUpperCase()] || t.toUpperCase()] : ["-X", "GET"];
  }
  var Hye = function Hye(e, t) {
    return "\"".concat(e, ": ").concat("".concat(t).replace(/(\\|")/g, "\\$1"), "\"");
  };
  function Gye() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _e$headers = e.headers,
      t = _e$headers === void 0 ? {} : _e$headers,
      i = !1,
      a = ["-s"];
    return e.redirect === "follow" && a.push("-L"), Object.keys(t).map(function (u) {
      u.toLocaleLowerCase() !== "content-length" && (a.push("-H"), a.push(Hye(u, t[u]))), u.toLocaleLowerCase() === "accept-encoding" && (i = !0);
    }), {
      params: a,
      isEncode: i
    };
  }
  function Az(e) {
    return typeof e != "string" ? JSON.stringify(e) : e.replace(/'/g, "'\\''");
  }
  function Kye(e) {
    return e ? ["--data-binary", "".concat(Az(_typeof(e) == "object" ? JSON.stringify(e) : e))] : [];
  }
  function Vye(e) {
    return e ? " --compressed" : "";
  }
  var Yye = function Yye(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _t$body = t.body,
      i = _t$body === void 0 ? "" : _t$body,
      a = Gye(t);
    return ["curl", "".concat(e)].concat(_toConsumableArray(Fye(t)), _toConsumableArray(a.params), _toConsumableArray(Kye(i)), [Vye(a.isEncode)]).filter(function (u) {
      return !!u.length;
    });
  };
  function Xye(_x5) {
    return _Xye.apply(this, arguments);
  }
  function _Xye() {
    _Xye = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var t,
        i,
        a,
        u,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            t = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            i = Yye(e, t);
            _context4.next = 4;
            return Qt(i);
          case 4:
            a = _context4.sent;
            u = 200;
            return _context4.abrupt("return", {
              status: u,
              ok: u === 200,
              text: function text() {
                return Promise.resolve(a);
              },
              json: function json() {
                return Promise.resolve(JSON.parse(a));
              }
            });
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _Xye.apply(this, arguments);
  }
  function za(_x6) {
    return _za.apply(this, arguments);
  }
  function _za() {
    _za = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
      var t,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            t = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
            if (!(typeof globalThis.fetch == "function")) {
              _context5.next = 3;
              break;
            }
            return _context5.abrupt("return", t ? globalThis.fetch(e, t) : globalThis.fetch(e));
          case 3:
            if (!ot(Ua())) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return", qz(e, t));
          case 5:
            if (!Ui("curl")) {
              _context5.next = 7;
              break;
            }
            return _context5.abrupt("return", Xye(e, t));
          case 7:
            throw new Error("fetch command not found");
          case 8:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _za.apply(this, arguments);
  }
  var Jye = "ffmpeg",
    $ye = "ffmpeg.exe",
    ege = "ffmpeg",
    tge = "ffmpeg";
  function rge() {
    var e = ke();
    switch (e) {
      case "darwin":
        return Qe(un(), Jye);
      case "linux":
        return Qe(un(), tge);
      case "windows":
        return Qe(un(), $ye);
      case "android":
        return Qe(un(), ege);
      default:
        throw new Error("mpv-easy-ext not support os: ".concat(e));
    }
  }
  function Cl() {
    var e = rge();
    return ot(e) ? e : Ui("ffmpeg");
  }
  function _z() {
    var e = [],
      t = mu("track-list", []).filter(function (i) {
        return i.type === "sub";
      });
    for (var i = 0; i < t.length; i++) {
      var a = t[i],
        u = a.title,
        l = a.lang,
        f = a.selected,
        d = a.external,
        v = a.id,
        h = a["external-filename"];
      e.push({
        title: u,
        lang: l,
        selected: f,
        id: v,
        external: d,
        externalFilename: h
      });
    }
    return e;
  }
  function Li() {
    return _z().find(function (e) {
      return e.selected;
    });
  }
  function Oz(_x7, _x8, _x9) {
    return _Oz.apply(this, arguments);
  }
  function _Oz() {
    _Oz = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e, t, i) {
      var a,
        u,
        l,
        f,
        _args6 = arguments;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            a = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : [];
            if (e) {
              _context6.next = 3;
              break;
            }
            return _context6.abrupt("return");
          case 3:
            u = _z().find(function (d) {
              return d.id === t;
            });
            if (u) {
              _context6.next = 6;
              break;
            }
            return _context6.abrupt("return");
          case 6:
            l = Cl();
            if (l) {
              _context6.next = 10;
              break;
            }
            ut("ffmpeg not found");
            return _context6.abrupt("return");
          case 10:
            f = [l, "-y", "-hide_banner", "-loglevel", "error", "-i", e, "-map", "0:s:".concat(u.id - 1)];
            a.length === 2 && f.push("-ss", a[0].toString(), "-to", a[1].toString()), f.push(i);
            _context6.prev = 12;
            _context6.next = 15;
            return Qt(f);
          case 15:
            _context6.next = 20;
            break;
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](12);
            return _context6.abrupt("return");
          case 20:
            return _context6.abrupt("return", on(i));
          case 21:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[12, 17]]);
    }));
    return _Oz.apply(this, arguments);
  }
  var wz = ["en-US", "en-GB", "zh-CN", "zh-TW", "ja-JP", "ko-KR", "fr-FR", "de-DE", "es-ES", "it-IT", "ru-RU", "pt-BR", "ar-SA", "hi-IN", "tr-TR", "nl-NL", "pl-PL", "sv-SE", "fi-FI", "da-DK", "no-NO", "hu-HU", "cs-CZ", "el-GR", "he-IL", "th-TH", "vi-VN", "id-ID", "ms-MY", "fil-PH"],
    ox;
  function ji() {
    if (ox) return ox;
    switch (ke()) {
      case "windows":
        return ox = Dt(["powershell", "-c", "(Get-Culture).Name"]).trim();
      case "linux":
      case "darwin":
      case "android":
        return "en-US";
    }
  }
  var nge = "-->";
  function Nz(e) {
    return String(Number(e)) === e;
  }
  function ige(e) {
    return e.includes(nge);
  }
  function age(e) {
    return e.trim().length === 0;
  }
  function oge(e) {
    var t = [],
      i = e.trim().replaceAll("\r\n", "\n").split("\n"),
      a = i.length,
      u = 0;
    for (; u < a;) {
      for (; u < a && !Nz(i[u]);) u++;
      if (u >= a) continue;
      var l = u++,
        f = u++;
      for (; u + 2 < a && !(age(i[u]) && Nz(i[u + 1]) && ige(i[u + 2]));) u++;
      u + 2 >= a && (u = a);
      var d = i.slice(f + 1, u).join("\n");
      t.push({
        id: i[l],
        time: i[f],
        text: d
      });
    }
    return t;
  }
  var La = /*#__PURE__*/function () {
    function La(t) {
      _classCallCheck(this, La);
      _defineProperty(this, "blocks", void 0);
      this.srt = t;
      this.blocks = oge(t);
    }
    return _createClass(La, [{
      key: "toString",
      value: function toString() {
        return this.blocks.map(function (t) {
          return "".concat(t.id, "\n").concat(t.time, "\n").concat(t.text);
        }).join("\n\n");
      }
    }, {
      key: "toText",
      value: function toText() {
        return this.blocks.map(function (t) {
          return t.text;
        }).join("\n");
      }
    }]);
  }();
  function Rz(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var a = Z6();
    return xz("".concat(a, " --load-scripts=no --loop=").concat(i, " --volume=").concat(t, " --force-window=no ").concat(e));
  }
  function Cz(e, t, i) {
    var a = {};
    for (var l in t) a[l] = "";
    Q6(a, e, i);
    var u = {};
    for (var _l4 in a) {
      var f = t[_l4].key || _l4,
        d = a[_l4].trim();
      if ((d.startsWith('"') && d.endsWith('"') || d.startsWith("'") && d.endsWith("'")) && (d = d.slice(1, -1)), d.length) switch (t[_l4].type) {
        case "number":
          {
            u[f] = +d;
            break;
          }
        case "string":
          {
            u[f] = d;
            break;
          }
        case "boolean":
          {
            u[f] = d === "yes";
            break;
          }
        case "color":
          {
            var v = new vu(d.length === 7 ? d : "#FF".concat(d.slice(1)), !0).toBgra().toHex("#");
            u[f] = v;
            break;
          }
      } else t[_l4].default !== void 0 && (u[f] = t[_l4].default);
    }
    return u;
  }
  var Uz = W(Iz());
  function Pd(e) {
    return (0, Uz.default)(e).toString();
  }
  function Eu(_x10, _x11) {
    return _Eu.apply(this, arguments);
  }
  function _Eu() {
    _Eu = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e, t) {
      var i, a, u, l;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            i = zi(), a = Pd(e), u = kt("".concat(i, "/").concat(a));
            if (!ot(u)) {
              _context7.next = 3;
              break;
            }
            return _context7.abrupt("return", on(u));
          case 3:
            _context7.next = 5;
            return t();
          case 5:
            l = _context7.sent;
            return _context7.abrupt("return", (Br(u, l), l));
          case 7:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return _Eu.apply(this, arguments);
  }
  var zz = {
    "&quot;": '"',
    "&#34;": '"',
    "&apos;": "'",
    "&#39;": "'",
    "&amp;": "&",
    "&#38;": "&",
    "&gt;": ">",
    "&#62;": ">",
    "&lt;": "<",
    "&#60;": "<"
  };
  function Id(e) {
    for (var _t5 in zz) e = e.replaceAll(_t5, zz[_t5]);
    return e;
  }
  var Ml = W(yt());
  function uge(e) {
    return e.endsWith("Hover");
  }
  function sge(e) {
    return e.slice(0, -5);
  }
  function lge(e) {
    var t = {};
    for (var i in e) {
      var a = sge(i),
        u = e[i];
      uge(i) && (t[a] = u);
    }
    return t;
  }
  var ux = Ml.default.forwardRef(function (_ref5, i) {
    var e = _ref5.text,
      t = _objectWithoutProperties(_ref5, _excluded);
    var a = lge(t),
      _ref6 = (0, Ml.useState)(!1),
      _ref7 = _slicedToArray(_ref6, 2),
      u = _ref7[0],
      l = _ref7[1];
    return Ml.default.createElement(tn, _objectSpread(_objectSpread(_objectSpread({}, t), u ? a : {}), {}, {
      ref: i,
      onMouseDown: function onMouseDown(f) {
        var _t$onMouseDown;
        (_t$onMouseDown = t.onMouseDown) === null || _t$onMouseDown === void 0 || _t$onMouseDown.call(t, f);
      },
      onMouseEnter: function onMouseEnter(f) {
        var _t$onMouseEnter;
        l(!0), t.enableMouseStyle && ix("Hand"), (_t$onMouseEnter = t.onMouseEnter) === null || _t$onMouseEnter === void 0 ? void 0 : _t$onMouseEnter.call(t, f);
      },
      onMouseLeave: function onMouseLeave(f) {
        var _t$onMouseLeave;
        l(!1), t.enableMouseStyle && ix("Arrow"), (_t$onMouseLeave = t.onMouseLeave) === null || _t$onMouseLeave === void 0 ? void 0 : _t$onMouseLeave.call(t, f);
      },
      text: e
    }));
  });
  var cge = W(yt()),
    sx = W(yt());
  var sn = W(yt());
  var Bl = /*#__PURE__*/function () {
    function e(t, i, a, u) {
      _classCallCheck(this, e);
      this.x = t;
      this.y = i;
      this.width = a;
      this.height = u;
    }
    return _createClass(e, [{
      key: "x0",
      get: function get() {
        return this.x;
      }
    }, {
      key: "y0",
      get: function get() {
        return this.y;
      }
    }, {
      key: "x1",
      get: function get() {
        return this.x + this.width;
      }
    }, {
      key: "y1",
      get: function get() {
        return this.y + this.height;
      }
    }, {
      key: "toCoord",
      value: function toCoord() {
        return {
          x0: this.x0,
          y0: this.y0,
          x1: this.x1,
          y1: this.y1
        };
      }
    }, {
      key: "hasPoint",
      value: function hasPoint(t, i) {
        return t >= this.x0 && t <= this.x1 && i >= this.y0 && i <= this.y1;
      }
    }, {
      key: "placeCenter",
      value: function placeCenter(t) {
        var i = (this.width - t.width) / 2,
          a = (this.height - t.height) / 2,
          u = this.x + i,
          l = this.y + a;
        return new e(u, l, t.width, t.height);
      }
    }, {
      key: "scale",
      value: function scale(t) {
        return new e(this.x * t, this.y * t, this.width * t, this.height * t);
      }
    }], [{
      key: "fromCoord",
      value: function fromCoord(t) {
        return new e(t.x0, t.y0, t.x1 - t.x0, t.y1 - t.y0);
      }
    }]);
  }();
  var Ud = /*#__PURE__*/function () {
      function Ud(t, i, a, u, l) {
        _classCallCheck(this, Ud);
        _defineProperty(this, "event", void 0);
        _defineProperty(this, "x", void 0);
        _defineProperty(this, "y", void 0);
        _defineProperty(this, "hover", void 0);
        _defineProperty(this, "target", void 0);
        _defineProperty(this, "bubbles", !0);
        _defineProperty(this, "defaultPrevented", !1);
        _defineProperty(this, "source", void 0);
        this.source = t, this.x = i, this.y = a, this.event = l, this.hover = u;
      }
      return _createClass(Ud, [{
        key: "preventDefault",
        value: function preventDefault() {
          this.defaultPrevented = !0;
        }
      }, {
        key: "clientX",
        get: function get() {
          return this.x;
        }
      }, {
        key: "clientY",
        get: function get() {
          return this.y;
        }
      }, {
        key: "offsetX",
        get: function get() {
          var _this$target;
          return this.x - (((_this$target = this.target) === null || _this$target === void 0 ? void 0 : _this$target.layoutNode.x) || 0);
        }
      }, {
        key: "offsetY",
        get: function get() {
          var _this$target2;
          return this.y - (((_this$target2 = this.target) === null || _this$target2 === void 0 ? void 0 : _this$target2.layoutNode.y) || 0);
        }
      }, {
        key: "stopPropagation",
        value: function stopPropagation() {
          this.bubbles = !1;
        }
      }]);
    }(),
    zd = /*#__PURE__*/function (_Bl) {
      function zd() {
        var _this2;
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var u = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var f = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var d = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var v = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
        var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new Bl(0, 0, 0, 0);
        var y = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !1;
        var b = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : !1;
        var S = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : !1;
        var T = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : !1;
        var R = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : !1;
        var A = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : !1;
        _classCallCheck(this, zd);
        _this2 = _callSuper(this, zd, [i, a, u, l]);
        _this2.x = i;
        _this2.y = a;
        _this2.width = u;
        _this2.height = l;
        _this2.padding = f;
        _this2.border = d;
        _this2.hide = v;
        _this2.textRect = h;
        _this2._hideCache = y;
        _this2._renderCache = b;
        _this2._mouseDown = S;
        _this2._mouseUp = T;
        _this2._mouseIn = R;
        _this2._focus = A;
        return _this2;
      }
      _inherits(zd, _Bl);
      return _createClass(zd);
    }(Bl),
    lx = ["onClick", "onMouseDown", "onMouseUp", "onMouseMove", "onMousePress", "onMouseEnter", "onMouseLeave", "onWheelDown", "onWheelUp", "onBlur", "onFocus"];
  function jd(e, t) {
    t.parentNode && Dl(t.parentNode, t), t.parentNode = e, e.childNodes.push(t);
  }
  function cx(e, t, i) {
    t.parentNode && Dl(t.parentNode, t), t.parentNode = e;
    var a = e.childNodes.indexOf(i);
    if (a >= 0) {
      e.childNodes.splice(a, 0, t);
      return;
    }
    e.childNodes.push(t);
  }
  function Dl(e, t) {
    t.parentNode = void 0;
    var i = e.childNodes.indexOf(t);
    i >= 0 && e.childNodes.splice(i, 1);
  }
  function Pt(e, t, i) {
    e.attributes[t] = i;
  }
  function ja(e, t, i) {
    e.layoutNode[t] = i;
  }
  function Ld(e, t) {
    return e.attributes[t];
  }
  function Xn(e, t) {
    for (; e && _typeof(Ld(e, t)) > "u";) if (e.parentNode) e = e.parentNode;else return;
    return Ld(e, t);
  }
  function Fa(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
  }
  function Tu(e) {
    return fge(e), Number.parseFloat(e.slice(0, -1)) / 100;
  }
  function fx(e) {
    return e.endsWith("%");
  }
  function fge(e) {
    Fa(fx(e), "not a valid percentage string: ".concat(e));
  }
  function jz(e) {
    return _typeof(e.attributes.top) < "u" || _typeof(e.attributes.left) < "u" || _typeof(e.attributes.bottom) < "u" || _typeof(e.attributes.right) < "u";
  }
  function Fi(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    switch (_typeof(t)) {
      case "number":
        return t;
      case "undefined":
        break;
      case "string":
        return fx(t) ? te(e.parentNode, i) * Tu(t) : +t;
      default:
        throw new Error("len type error: ".concat(t));
    }
    return a;
  }
  function pge(e) {
    return e.attributes.position === "absolute" || jz(e) || _typeof(e.attributes.x) < "u" || _typeof(e.attributes.y) < "u";
  }
  var dge = 1;
  function px(e, t) {
    return t ? e.attributes.width : e.attributes.height;
  }
  function Lz(e, t) {
    return t ? e.layoutNode.x : e.layoutNode.y;
  }
  function te(e, t) {
    return t ? e.layoutNode.width : e.layoutNode.height;
  }
  function le(e, t, i) {
    i ? e.layoutNode.x = t : e.layoutNode.y = t;
  }
  function qu(e, t, i) {
    i ? e.layoutNode.width = t : e.layoutNode.height = t;
  }
  var Fd = /*#__PURE__*/function () {
    function Fd() {
      _classCallCheck(this, Fd);
      _defineProperty(this, "rootNode", void 0);
      this.rootNode = this.customCreateRootNode();
    }
    return _createClass(Fd, [{
      key: "renderRoot",
      value: function renderRoot() {
        this.computeNodeSize(this.rootNode), this.computeNodeLayout(this.rootNode), this.customRenderRoot(this.rootNode);
      }
    }, {
      key: "computedNodeTLBR",
      value: function computedNodeTLBR(t) {
        var i = t.attributes,
          a = t.layoutNode,
          u = t.parentNode ? t.parentNode : t;
        for (; u && u.attributes.position === "absolute";) u = u.parentNode;
        switch (Fa(!(_typeof(i.left) < "u" && _typeof(i.right) < "u"), "absolute position: do not set both left and right"), Fa(!(_typeof(i.top) < "u" && _typeof(i.bottom) < "u"), "absolute position: do not set both top and bottom"), le(t, u.layoutNode.x, !0), le(t, u.layoutNode.y, !1), _typeof(i.left)) {
          case "number":
            {
              a.x = u.layoutNode.x + i.left;
              break;
            }
          case "undefined":
            break;
          case "string":
            {
              a.x = u.layoutNode.x + u.layoutNode.width * Tu(i.left);
              break;
            }
          default:
            throw new Error("left type error: ".concat(i.left));
        }
        switch (_typeof(i.right)) {
          case "number":
            {
              a.x = u.layoutNode.x + u.layoutNode.width - i.right - a.width;
              break;
            }
          case "string":
            {
              a.x = u.layoutNode.x + u.layoutNode.width - a.width - u.layoutNode.width * Tu(i.right);
              break;
            }
          case "undefined":
            break;
          default:
            throw new Error("right type error: ".concat(i.right));
        }
        switch (_typeof(i.top)) {
          case "number":
            {
              a.y = u.layoutNode.y + i.top;
              break;
            }
          case "string":
            {
              a.y = u.layoutNode.y + u.layoutNode.height * Tu(i.top);
              break;
            }
          case "undefined":
            break;
          default:
            throw new Error("bottom type top: ".concat(i.top));
        }
        switch (_typeof(i.bottom)) {
          case "number":
            {
              a.y = u.layoutNode.y + u.layoutNode.height - i.bottom - a.height;
              break;
            }
          case "string":
            {
              a.y = u.layoutNode.y + u.layoutNode.height - a.height - u.layoutNode.height * Tu(i.bottom);
              break;
            }
          case "undefined":
            break;
          default:
            throw new Error("bottom type bottom: ".concat(i.bottom));
        }
      }
    }, {
      key: "computeZIndex",
      value: function computeZIndex(t) {
        var i = t.attributes;
        if (typeof i.zIndex == "number") return i.zIndex;
        var a = t.parentNode,
          u = 1;
        for (; a;) {
          var _a6;
          if (_typeof(a.attributes.zIndex) > "u" && (a = a.parentNode, u += dge), a && typeof ((_a6 = a) === null || _a6 === void 0 || (_a6 = _a6.attributes) === null || _a6 === void 0 ? void 0 : _a6.zIndex) == "number") return a.attributes.zIndex + u;
        }
        return u;
      }
    }, {
      key: "computeNodeSize",
      value: function computeNodeSize(t) {
        var i = t.attributes,
          a = t.layoutNode,
          u = i.flexDirection !== "row",
          l = this.computeZIndex(t);
        this.customComputeZIndex(t, l);
        var f = Fi(t, i.padding, u);
        a.padding = f;
        var d = Fi(t, i.borderSize, u);
        a.border = d;
        var v = f * 2 + d * 2,
          h = px(t, u),
          y = px(t, !u),
          b = h === void 0 || h === "auto",
          S = y === void 0 || y === "auto";
        if (typeof i.text == "string") {
          var _this$customMeasureNo = this.customMeasureNode(t),
            T = _this$customMeasureNo.width,
            R = _this$customMeasureNo.height;
          a.width = b ? v + T : v + Fi(t, h, !0), a.height = S ? v + R : v + Fi(t, y, !1);
          var _iterator5 = _createForOfIteratorHelper(t.childNodes),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var A = _step5.value;
              this.computeNodeSize(A);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          return;
        }
        if (b || S) {
          var _T2 = 0,
            _R2 = 0,
            _A2 = 0,
            _ = 0;
          b || this.computeNodeSizeAxis(t, h, u, v), S || this.computeNodeSizeAxis(t, y, !u, v);
          var _iterator6 = _createForOfIteratorHelper(t.childNodes),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _x12 = _step6.value;
              if (this.computeNodeSize(_x12), _x12.attributes.position === "absolute") continue;
              var q = te(_x12, u),
                I = te(_x12, !u);
              _T2 = Math.max(_T2, q), _R2 = Math.max(_R2, I), _A2 += q, _ += I;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          if (b && (u ? qu(t, _A2 + v, !0) : qu(t, _R2 + v, !0)), S && (u ? qu(t, _R2 + v, !1) : qu(t, _A2 + v, !1)), t.attributes.alignContent === "stretch") {
            var _iterator7 = _createForOfIteratorHelper(t.childNodes),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var x = _step7.value;
                u ? _typeof(x.attributes.height) > "u" && (x.layoutNode.height = t.layoutNode.height - v) : _typeof(x.attributes.width) > "u" && (x.layoutNode.width = t.layoutNode.width - v);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        } else {
          this.computeNodeSizeAxis(t, h, u, v), this.computeNodeSizeAxis(t, y, !u, v);
          var _T3 = 0,
            _R3 = 0;
          var _iterator8 = _createForOfIteratorHelper(t.childNodes),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _A4 = _step8.value;
              this.computeNodeSize(_A4);
              var _10 = te(_A4, u),
                _x13 = te(_A4, !u);
              _T3 = Math.max(_T3, _10), _R3 = Math.max(_R3, _x13);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          if (t.attributes.alignContent === "stretch") {
            var _iterator9 = _createForOfIteratorHelper(t.childNodes),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var _A3 = _step9.value;
                u ? _typeof(_A3.attributes.height) > "u" && (_A3.layoutNode.height = t.layoutNode.height - v) : _typeof(_A3.attributes.width) > "u" && (_A3.layoutNode.width = t.layoutNode.width - v);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        }
      }
    }, {
      key: "computeNodeSizeAxis",
      value: function computeNodeSizeAxis(t, i, a, u) {
        switch (_typeof(i)) {
          case "number":
            {
              var l = i + u;
              qu(t, l, a);
              return;
            }
          case "string":
            {
              Fa(i.endsWith("%"), "length string must end with %");
              var _l5 = px(t.parentNode, a);
              Fa(!(_l5 === "auto" || _l5 === void 0), "The parent of a node of relative size cannot be auto or undefined");
              var f = Fi(t, i, a) + u;
              qu(t, f, a);
              return;
            }
        }
        throw new Error("computeNodeSize error, not support length: ".concat(i));
      }
    }, {
      key: "computedNodeAlign",
      value: function computedNodeAlign(t) {
        var i = t.attributes,
          a = i.flexDirection !== "row",
          _i$justifyContent = i.justifyContent,
          u = _i$justifyContent === void 0 ? "start" : _i$justifyContent,
          _i$alignItems = i.alignItems,
          l = _i$alignItems === void 0 ? "start" : _i$alignItems,
          f = t.childNodes.filter(function (w) {
            return !pge(w);
          });
        u === "end" && f.reverse();
        var d = t.layoutNode.padding + t.layoutNode.border,
          v = Lz(t, a) + d,
          h = Lz(t, !a) + d,
          y = te(t, a) - d * 2,
          b = te(t, !a) - d * 2,
          S = v + y,
          T = v + y,
          R = h + b,
          A = 0,
          _ = 0,
          x = 0,
          q = 0,
          I = 0;
        switch (u) {
          case "start":
            switch (l) {
              case "space-between":
              case "start":
                {
                  A = v, _ = h;
                  var _iterator10 = _createForOfIteratorHelper(f),
                    _step10;
                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var w = _step10.value;
                      var B = te(w, a),
                        U = te(w, !a);
                      q = Math.max(q, U), x = Math.max(x, B), A + B > T ? (_ += q, le(w, v, a), le(w, _, !a), A = v + B) : (le(w, A, a), le(w, _, !a), A += B);
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }
                  return;
                }
              case "end":
                {
                  A = v, _ = R;
                  var _iterator11 = _createForOfIteratorHelper(f),
                    _step11;
                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      var _w2 = _step11.value;
                      var _B2 = te(_w2, a),
                        _U2 = te(_w2, !a);
                      q = Math.max(q, _U2), x = Math.max(x, _B2), A + _B2 > T ? (_ += q, le(_w2, v, a), le(_w2, _ - _U2, !a), A = v + _B2) : (le(_w2, A, a), le(_w2, _ - _U2, !a), A += _B2);
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }
                  return;
                }
              case "center":
                {
                  var _iterator12 = _createForOfIteratorHelper(f),
                    _step12;
                  try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                      var _w3 = _step12.value;
                      var _B3 = te(_w3, a),
                        _U3 = te(_w3, !a);
                      I += _B3, q = Math.max(q, _U3);
                    }
                  } catch (err) {
                    _iterator12.e(err);
                  } finally {
                    _iterator12.f();
                  }
                  A = v, _ = h;
                  var _iterator13 = _createForOfIteratorHelper(f),
                    _step13;
                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                      var _w4 = _step13.value;
                      var _B4 = te(_w4, a),
                        _U4 = te(_w4, !a);
                      A + _B4 > S ? (_ += q, le(_w4, v, a), le(_w4, _, !a), A = v + _B4) : (le(_w4, A, a), le(_w4, _ + (b - _U4) / 2, !a), A += _B4);
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                  return;
                }
            }
          case "end":
            switch (l) {
              case "space-between":
              case "start":
                {
                  A = T, _ = h;
                  var _iterator14 = _createForOfIteratorHelper(f),
                    _step14;
                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _w5 = _step14.value;
                      var _B5 = te(_w5, a),
                        _U5 = te(_w5, !a);
                      q = Math.max(q, _U5), x = Math.max(x, _B5), A - _B5 < v ? (_ -= q, le(_w5, T - _B5, a), le(_w5, _, !a), A -= _B5) : (le(_w5, A - _B5, a), le(_w5, _, !a), A -= _B5);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }
                  return;
                }
              case "end":
                {
                  A = T, _ = R;
                  var _iterator15 = _createForOfIteratorHelper(f),
                    _step15;
                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _w6 = _step15.value;
                      var _B6 = te(_w6, a),
                        _U6 = te(_w6, !a);
                      q = Math.max(q, _U6), x = Math.max(x, _B6), A - _B6 < v ? (_ -= q, le(_w6, T - _B6, a), le(_w6, _ - _U6, !a), A -= _B6) : (le(_w6, A - _B6, a), le(_w6, _ - _U6, !a), A -= _B6);
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }
                  return;
                }
              case "center":
                {
                  A = T, _ = h;
                  var _iterator16 = _createForOfIteratorHelper(f),
                    _step16;
                  try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                      var _w7 = _step16.value;
                      var _B7 = te(_w7, a),
                        _U7 = te(_w7, !a);
                      q = Math.max(q, _U7), x = Math.max(x, _B7);
                    }
                  } catch (err) {
                    _iterator16.e(err);
                  } finally {
                    _iterator16.f();
                  }
                  var _iterator17 = _createForOfIteratorHelper(f),
                    _step17;
                  try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                      var _w8 = _step17.value;
                      var _B8 = te(_w8, a),
                        _U8 = te(_w8, !a),
                        k = A - _B8;
                      k < v || (le(_w8, k, a), le(_w8, _ + (q - _U8) / 2, !a), A -= _B8);
                    }
                  } catch (err) {
                    _iterator17.e(err);
                  } finally {
                    _iterator17.f();
                  }
                  return;
                }
            }
          case "center":
            switch (l) {
              case "space-between":
              case "start":
                {
                  _ = h;
                  var _iterator18 = _createForOfIteratorHelper(f),
                    _step18;
                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var _w9 = _step18.value;
                      var _B9 = te(_w9, a),
                        _U9 = te(_w9, !a);
                      q = Math.max(q, _U9), x = Math.max(x, _B9), I += _B9;
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }
                  A = v + (y - I) / 2;
                  var _iterator19 = _createForOfIteratorHelper(f),
                    _step19;
                  try {
                    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                      var _w10 = _step19.value;
                      var _B10 = te(_w10, a);
                      A + _B10 > T || (le(_w10, A, a), le(_w10, _, !a), A += _B10);
                    }
                  } catch (err) {
                    _iterator19.e(err);
                  } finally {
                    _iterator19.f();
                  }
                  return;
                }
              case "end":
                {
                  _ = R;
                  var _iterator20 = _createForOfIteratorHelper(f),
                    _step20;
                  try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                      var _w11 = _step20.value;
                      var _B11 = te(_w11, a),
                        _U10 = te(_w11, !a);
                      q = Math.max(q, _U10), x = Math.max(x, _B11), I += _B11;
                    }
                  } catch (err) {
                    _iterator20.e(err);
                  } finally {
                    _iterator20.f();
                  }
                  A = v + (y - I) / 2;
                  var _iterator21 = _createForOfIteratorHelper(f),
                    _step21;
                  try {
                    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                      var _w12 = _step21.value;
                      var _B12 = te(_w12, a),
                        _U11 = te(_w12, !a);
                      A + _B12 > T || (le(_w12, A, a), le(_w12, _ - _U11, !a), A += _B12);
                    }
                  } catch (err) {
                    _iterator21.e(err);
                  } finally {
                    _iterator21.f();
                  }
                  return;
                }
              case "center":
                {
                  _ = h;
                  var _iterator22 = _createForOfIteratorHelper(f),
                    _step22;
                  try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                      var _w13 = _step22.value;
                      var _B13 = te(_w13, a),
                        _U12 = te(_w13, !a);
                      q = Math.max(q, _U12), x = Math.max(x, _B13), I += _B13;
                    }
                  } catch (err) {
                    _iterator22.e(err);
                  } finally {
                    _iterator22.f();
                  }
                  A = v + (y - I) / 2;
                  var _iterator23 = _createForOfIteratorHelper(f),
                    _step23;
                  try {
                    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                      var _w14 = _step23.value;
                      var _B14 = te(_w14, a),
                        _U13 = te(_w14, !a);
                      A + _B14 > T || (le(_w14, A, a), le(_w14, _ + (b - _U13) / 2, !a), A += _B14);
                    }
                  } catch (err) {
                    _iterator23.e(err);
                  } finally {
                    _iterator23.f();
                  }
                  return;
                }
            }
          case "space-between":
            switch (l) {
              case "space-between":
              case "start":
                {
                  _ = h;
                  var _iterator24 = _createForOfIteratorHelper(f),
                    _step24;
                  try {
                    for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                      var _B16 = _step24.value;
                      var _U15 = te(_B16, a),
                        _k3 = te(_B16, !a);
                      q = Math.max(q, _k3), x = Math.max(x, _U15), I += _U15;
                    }
                  } catch (err) {
                    _iterator24.e(err);
                  } finally {
                    _iterator24.f();
                  }
                  A = v;
                  var _w15 = (y - I) / (f.length - 1);
                  for (var _B15 = 0; _B15 < f.length; _B15++) {
                    var _U14 = f[_B15],
                      _k2 = te(_U14, a);
                    A + _k2 > T || (le(_U14, A, a), le(_U14, _, !a), A += _k2 + _w15);
                  }
                  return;
                }
              case "end":
                {
                  _ = R;
                  var _iterator25 = _createForOfIteratorHelper(f),
                    _step25;
                  try {
                    for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                      var _B18 = _step25.value;
                      var _U17 = te(_B18, a),
                        _k5 = te(_B18, !a);
                      q = Math.max(q, _k5), x = Math.max(x, _U17), I += _U17;
                    }
                  } catch (err) {
                    _iterator25.e(err);
                  } finally {
                    _iterator25.f();
                  }
                  A = v;
                  var _w16 = (y - I) / (f.length - 1);
                  for (var _B17 = 0; _B17 < f.length; _B17++) {
                    var _U16 = f[_B17],
                      _k4 = te(_U16, a),
                      ne = te(_U16, !a);
                    A + _k4 > T || (le(_U16, A, a), le(_U16, _ - ne, !a), A += _k4 + _w16);
                  }
                  return;
                }
              case "center":
                {
                  _ = h;
                  var _iterator26 = _createForOfIteratorHelper(f),
                    _step26;
                  try {
                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                      var _B20 = _step26.value;
                      var _U19 = te(_B20, a),
                        _k7 = te(_B20, !a);
                      q = Math.max(q, _k7), x = Math.max(x, _U19), I += _U19;
                    }
                  } catch (err) {
                    _iterator26.e(err);
                  } finally {
                    _iterator26.f();
                  }
                  A = v;
                  var _w17 = (y - I) / (f.length - 1);
                  for (var _B19 = 0; _B19 < f.length; _B19++) {
                    var _U18 = f[_B19],
                      _k6 = te(_U18, a),
                      _ne2 = te(_U18, !a);
                    A + _k6 > T || (le(_U18, A, a), le(_U18, _ + (b - _ne2) / 2, !a), A += _k6 + _w17);
                  }
                  return;
                }
            }
        }
        throw new Error("not support flex align: ".concat(u, " ").concat(l));
      }
    }, {
      key: "computeNodeLayout",
      value: function computeNodeLayout(t) {
        var i = t.layoutNode,
          a = t.attributes;
        switch (jz(t) && this.computedNodeTLBR(t), typeof a.x == "number" && (i.x = a.x), typeof a.y == "number" && (i.y = a.y), a.position) {
          case "relative":
          case void 0:
            {
              t.childNodes.length && a.display === "flex" && this.computedNodeAlign(t);
              break;
            }
          case "absolute":
            {
              t.childNodes.length && a.display === "flex" && this.computedNodeAlign(t);
              break;
            }
          default:
            throw new Error("error position: ".concat(a.position));
        }
        var _iterator27 = _createForOfIteratorHelper(t.childNodes),
          _step27;
        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var u = _step27.value;
            this.computeNodeLayout(u);
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }
      }
    }, {
      key: "dispatchMouseEventInner",
      value: function dispatchMouseEventInner(t, i, a) {
        if (!(t.attributes.hide || t.attributes.pointerEvents === "none")) {
          var _iterator28 = _createForOfIteratorHelper(t.childNodes),
            _step28;
          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var u = _step28.value;
              this.dispatchMouseEventInner(u, i, a);
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }
          this.dispatchMouseEventForNode(t, i, a);
        }
      }
    }, {
      key: "dispatchMouseEvent",
      value: function dispatchMouseEvent(t, i) {
        var a = {
          onClick: [],
          onMouseDown: [],
          onMouseUp: [],
          onMouseMove: [],
          onMousePress: [],
          onMouseEnter: [],
          onMouseLeave: [],
          onWheelDown: [],
          onWheelUp: [],
          onBlur: [],
          onFocus: []
        };
        this.dispatchMouseEventInner(t, i, a);
        for (var _i10 = 0, _lx = lx; _i10 < _lx.length; _i10++) {
          var u = _lx[_i10];
          var l = a[u];
          if (!l.length) continue;
          var f = l.sort(function (d, v) {
            return (v.attributes.zIndex || 0) - (d.attributes.zIndex || 0);
          });
          var _iterator29 = _createForOfIteratorHelper(f),
            _step29;
          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
              var _d$attributes$u, _d$attributes;
              var d = _step29.value;
              i.bubbles && ((u === "onMouseLeave" || u === "onMouseEnter") && (i.target = d), (_d$attributes$u = (_d$attributes = d.attributes)[u]) === null || _d$attributes$u === void 0 ? void 0 : _d$attributes$u.call(_d$attributes, i));
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }
        }
      }
    }, {
      key: "dispatchMouseEventForNode",
      value: function dispatchMouseEventForNode(t, i, a) {
        if (!i.bubbles || t.attributes.pointerEvents === "none" || t.attributes.hide) return;
        var u = t.layoutNode;
        if (t.layoutNode.hasPoint(i.x, i.y)) {
          if (_typeof(i.target) > "u" && (i.target = t), i.hover) {
            if (this.customIsWheelDown(i)) {
              a.onWheelDown.push(t);
              return;
            }
            if (this.customIsWheelUp(i)) {
              a.onWheelUp.push(t);
              return;
            }
            this.customIsMousePress(i) ? u._mouseDown ? a.onMousePress.push(t) : u._mouseIn ? a.onMouseMove.push(t) : (a.onMouseEnter.push(t), u._mouseIn = !0) : !u._mouseDown && (this.customIsMouseDown(i) || this.customIsMouseClick(i)) ? u._mouseDown || (a.onMouseDown.push(t), a.onClick.push(t), u._mouseDown = !0, u._mouseUp = !1, u._focus || (u._focus = !0, a.onFocus.push(t)), this.customIsMouseClick(i) && (u._mouseDown = !1, a.onMouseUp.push(t))) : this.customIsMouseUp(i) && (u._mouseUp || (a.onMouseUp.push(t), u._mouseDown = !1, u._mouseUp = !0, u._focus || (a.onFocus.push(t), u._focus = !0)));
          } else u._mouseIn && (a.onMouseLeave.push(t), u._mouseIn = !1);
        } else u._mouseIn && (a.onMouseLeave.push(t), u._mouseIn = !1), u._focus && (this.customIsMouseDown(i) || this.customIsMouseUp(i)) && (a.onBlur.push(t), u._focus = !1);
      }
    }]);
  }();
  function dx(e, t) {
    e.attributes = t;
  }
  function Fz() {
    var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref8$onlyFirst = _ref8.onlyFirst,
      e = _ref8$onlyFirst === void 0 ? !1 : _ref8$onlyFirst;
    var t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
    return new RegExp(t, e ? void 0 : "g");
  }
  var M8e = Fz();
  var Hz = "@mpv-easy/root";
  var Pl = function Pl(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [new Fn({
      cache: !0
    }), new Fn({
      cache: !0
    }), new Fn({
      cache: !0
    })];
    return {
      attributes: {},
      childNodes: [],
      parentNode: void 0,
      layoutNode: new zd(),
      props: {
        nodeName: e,
        osdOverlays: t
      },
      dirty: !0
    };
  };
  var vge = new Ci();
  function mge(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (!t || e.length <= t) return e;
    var i = [],
      a = [];
    var _iterator30 = _createForOfIteratorHelper(e.split("")),
      _step30;
    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var u = _step30.value;
        u === "\n" ? (i.push(a.join("")), a = []) : (a.push(u), a.length === t && (i.push(a.join("")), a = []));
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }
    return a.length && (i.push(a.join("")), a = []), i.join("\n");
  }
  function vx(e, t, i) {
    var _Xn, _Xn2, _Xn3, _Xn4, _Xn5;
    var _e$attributes$text = e.attributes.text,
      a = _e$attributes$text === void 0 ? "" : _e$attributes$text,
      u = mge(a.replaceAll("\r\n", "\n"), e.attributes.maxWidth).replaceAll("\n", "\\N").replaceAll("	", "    "),
      l = cu(),
      f = (_Xn = Xn(e, "font")) !== null && _Xn !== void 0 ? _Xn : "",
      d = (_Xn2 = Xn(e, "color")) !== null && _Xn2 !== void 0 ? _Xn2 : "#FFFFFFFF",
      v = (_Xn3 = Xn(e, "fontSize")) !== null && _Xn3 !== void 0 ? _Xn3 : "5%",
      h = Xn(e, "fontWeight") === "bold",
      y = (_Xn4 = Xn(e, "fontBorderSize")) !== null && _Xn4 !== void 0 ? _Xn4 : 0,
      b = (_Xn5 = Xn(e, "fontBorderColor")) !== null && _Xn5 !== void 0 ? _Xn5 : "#000000",
      S = "FF";
    return (d.length === 7 || d.length === 6) && (S = "00"), (d.length === 8 || d.length === 9) && (S = d.slice(-2), d = d.slice(0, -2)), vge.clear().pos(t, i).font(f).fontSize(Fi(e, v, !1, 32) * l).fontBorderColor(b).fontBorderSize(Fi(e, y, !1, 0) * l).color(d).alpha(S).bold(h).append(u).toString();
  }
  var Hd;
  function Gz(e) {
    var t = cu(),
      i = vx(e, 0, 0);
    Hd || (Hd = new Fn({
      computeBounds: !0,
      hidden: !0
    })), Hd.data = i;
    var _Hd$update = Hd.update(1 / t),
      a = _Hd$update.width,
      u = _Hd$update.height,
      l = e.layoutNode;
    return l.textRect.width = a, l.textRect.height = u, {
      width: a,
      height: u
    };
  }
  var Kz = "@mpv-easy/root",
    hge = "@mpv-easy/box",
    Gd,
    Au = function Au() {
      return Gd || (Gd = Pl(Kz), Gd);
    },
    Vz = 30;
  function yge(e) {
    var _Xn6;
    var t = (_Xn6 = Xn(e, "hide")) !== null && _Xn6 !== void 0 ? _Xn6 : !1,
      _e$props$osdOverlays = _slicedToArray(e.props.osdOverlays, 3),
      i = _e$props$osdOverlays[0],
      a = _e$props$osdOverlays[1],
      u = _e$props$osdOverlays[2],
      l = e.layoutNode,
      f = e.attributes;
    if (t) {
      var _e$props$imageOverlay;
      if (l._hideCache) return;
      l._hideCache = !0;
      var _iterator31 = _createForOfIteratorHelper(e.props.osdOverlays),
        _step31;
      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
          var d = _step31.value;
          d.hidden = !0, d.computeBounds = !1, d.update();
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }
      typeof f.backgroundImage == "string" && e.props.imageOverlay && ((_e$props$imageOverlay = e.props.imageOverlay) === null || _e$props$imageOverlay === void 0 ? void 0 : _e$props$imageOverlay.remove());
    } else if (e.props.nodeName === "@mpv-easy/box") {
      l._hideCache = !1;
      var _d3 = cu(),
        v = f.backgroundColor,
        h = f.borderSize,
        _f$borderColor = f.borderColor,
        y = _f$borderColor === void 0 ? "#FFFFFFFF" : _f$borderColor,
        _f$padding = f.padding,
        b = _f$padding === void 0 ? 0 : _f$padding,
        _f$justifyContent = f.justifyContent,
        S = _f$justifyContent === void 0 ? "start" : _f$justifyContent,
        _f$alignItems = f.alignItems,
        T = _f$alignItems === void 0 ? "start" : _f$alignItems,
        _f$borderRadius = f.borderRadius,
        R = _f$borderRadius === void 0 ? 0 : _f$borderRadius,
        _f$flexDirection = f.flexDirection,
        A = _f$flexDirection === void 0 ? "column" : _f$flexDirection,
        _ = f.backgroundImage,
        _f$backgroundImageFor = f.backgroundImageFormat,
        x = _f$backgroundImageFor === void 0 ? "bgra" : _f$backgroundImageFor,
        q = typeof b == "string" ? Cd(b) * l.width : b,
        I = typeof R == "string" ? Cd(R) * l.width : R;
      y.length === 7 && (y += "00"), typeof h == "string" && (h = l.width * Cd(h));
      var w = l.x,
        B = l.y,
        U = l.width,
        k = l.height;
      if (_typeof(h) < "u" && (u.data = Y6({
        x: w * _d3,
        y: B * _d3,
        width: U * _d3,
        height: k * _d3,
        borderColor: y,
        borderSize: h * _d3
      }), u.hidden = !1, u.computeBounds = !1, u.hidden = !1, u.update()), h = h || 0, _typeof(f.text) < "u") {
        var he = 0 + q + l.x + h,
          qe = 0 + q + l.y + h,
          ce = l.textRect;
        switch (A) {
          case "column":
            {
              switch (S) {
                case "start":
                  break;
                case "center":
                  {
                    he += (l.width - ce.width - 2 * q - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    he += l.width - ce.width - 2 * q - 2 * h;
                    break;
                  }
              }
              switch (T) {
                case "start":
                  break;
                case "center":
                  {
                    qe += (l.height - ce.height - 2 * q - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    qe += l.height - ce.height - 2 * q - 2 * h;
                    break;
                  }
              }
              break;
            }
          case "row":
            {
              switch (S) {
                case "start":
                  break;
                case "center":
                  {
                    qe += (l.height - ce.height - 2 * q - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    qe += l.height - ce.height - 2 * q - 2 * h;
                    break;
                  }
              }
              switch (T) {
                case "start":
                  break;
                case "center":
                  {
                    he += (l.width - ce.width - 2 * q - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    he += l.width - ce.width - 2 * q - 2 * h;
                    break;
                  }
              }
            }
          default:
            throw new Error("text layout not support: justifyContent ".concat(S, " alignItems ").concat(T));
        }
        i.data = vx(e, he * _d3, qe * _d3), i.hidden = !1, i.computeBounds = !0;
      }
      var He = i.update(1 / _d3);
      if (_typeof(v) < "u") {
        v.length === 7 && (v += "00");
        var _he2 = new Ln(w + h + q, B + h + q, U - 2 * h - 2 * q, k - 2 * h - 2 * q),
          _qe2 = V6(_objectSpread(_objectSpread({}, _he2.scale(_d3)), {}, {
            color: v,
            borderRadius: I * _d3
          }));
        a.data = _qe2, a.hidden = !1, a.update();
      } else a.data = "", a.hidden = !0, a.update();
      if (typeof _ == "string" && !t) {
        var _he3 = f.height,
          _qe3 = f.width,
          _ce2 = f.id;
        if (typeof _ce2 != "number" || _ce2 < 0 || _ce2 > 63) throw new Error("backgroundImage'id must be a number in [0, 63]");
        if (typeof _qe3 != "number" || typeof _he3 != "number") throw new Error("backgroundImage's width and height must be number");
        e.props.imageOverlay || (e.props.imageOverlay = new Md(_ce2));
        var Me = e.props.imageOverlay;
        _ = _.split("?")[0];
        var Ir = rd(_);
        if (!Ir) Ol("backgroundImage file not found: ".concat(_));else {
          var cn = Ir.size;
          _qe3 * _he3 * 4 !== cn ? Ol("backgroundImage size error: ".concat(_qe3, "-").concat(_he3, "-").concat(cn)) : (Me.x = w | 0, Me.y = B | 0, Me.file = _, Me.fmt = x, Me.w = _qe3 | 0, Me.h = _he3 | 0, Me.offset = 0, Me.stride = (_qe3 | 0) << 2, Me.update());
        }
      }
    }
  }
  function Yz(e) {
    yge(e);
    var _iterator32 = _createForOfIteratorHelper(e.childNodes),
      _step32;
    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var _t6 = _step32.value;
        Yz(_t6);
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
  }
  var hx = /*#__PURE__*/function (_Fd) {
      function hx() {
        var _this3;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, hx);
        _this3 = _callSuper(this, hx), _this3.rootNode = Au();
        return _this3;
      }
      _inherits(hx, _Fd);
      return _createClass(hx, [{
        key: "customCreateMouseEvent",
        value: function customCreateMouseEvent(t, i, a, u, l) {
          return new Ud(t, i, a, u, l);
        }
      }, {
        key: "customIsWheelDown",
        value: function customIsWheelDown(t) {
          return t.event.key_name === "WHEEL_DOWN";
        }
      }, {
        key: "customIsWheelUp",
        value: function customIsWheelUp(t) {
          return t.event.key_name === "WHEEL_UP";
        }
      }, {
        key: "customIsMousePress",
        value: function customIsMousePress(t) {
          return t.event.event === "press";
        }
      }, {
        key: "customIsMouseDown",
        value: function customIsMouseDown(t) {
          return t.event.event === "down";
        }
      }, {
        key: "customIsMouseUp",
        value: function customIsMouseUp(t) {
          return t.event.event === "up";
        }
      }, {
        key: "customIsMouseClick",
        value: function customIsMouseClick(t) {
          return t.event.arg === "click";
        }
      }, {
        key: "customCreateNode",
        value: function customCreateNode() {
          return Pl(hge);
        }
      }, {
        key: "customIsRootNode",
        value: function customIsRootNode(t) {
          return t.props.nodeName === Kz;
        }
      }, {
        key: "customCreateRootNode",
        value: function customCreateRootNode() {
          return Au();
        }
      }, {
        key: "customRenderRoot",
        value: function customRenderRoot(t) {
          Yz(t);
        }
      }, {
        key: "customComputeZIndex",
        value: function customComputeZIndex(t, i) {
          var _t$props$osdOverlays = _slicedToArray(t.props.osdOverlays, 3),
            a = _t$props$osdOverlays[0],
            u = _t$props$osdOverlays[1],
            l = _t$props$osdOverlays[2];
          a.z = i + 3, u.z = i + 2, l.z = i + 1;
        }
      }, {
        key: "customMeasureNode",
        value: function customMeasureNode(t) {
          return Gz(t);
        }
      }]);
    }(Fd),
    mx;
  function Il() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return mx || (mx = new hx(e));
  }
  var Xz = function Xz(e, t, i) {
      var a = Il().customCreateMouseEvent(e, t.x, t.y, t.hover, i);
      Il().dispatchMouseEvent(e, a);
    },
    kz = function kz() {
      Il().renderRoot();
    };
  function gge(e, t, i, a) {
    var u = i / 2,
      l = a / 2;
    return e < u ? t < l ? "left-top" : "left-bottom" : t < l ? "right-top" : "right-bottom";
  }
  function bge(e, t, i, a) {
    var _ref9 = Xb() || {},
      _ref9$width = _ref9.width,
      u = _ref9$width === void 0 ? 0 : _ref9$width,
      _ref9$height = _ref9.height,
      l = _ref9$height === void 0 ? 0 : _ref9$height,
      f = {
        x: 0,
        y: 0
      };
    if (!e) return f;
    var _e$layoutNode = e.layoutNode,
      d = _e$layoutNode.height,
      v = _e$layoutNode.width;
    if (!u && !l) switch (a) {
      case "left-bottom":
        {
          f.x = t, f.y = i - d;
          break;
        }
      case "left-top":
        {
          f.x = t, f.y = i;
          break;
        }
      case "right-bottom":
        {
          f.x = t - v, f.y = i - d;
          break;
        }
      case "right-top":
        {
          f.x = t - v, f.y = i;
          break;
        }
    } else switch (a) {
      case "left-bottom":
        {
          t >= v / 2 ? f.x = t - v / 2 : f.x = 0, f.y = i - d;
          break;
        }
      case "left-top":
        {
          t >= v / 2 ? f.x = t - v / 2 : f.x = 0, f.y = i;
          break;
        }
      case "right-bottom":
        {
          u - t >= v / 2 ? f.x = t - v / 2 : f.x = u - v, f.y = i - d;
          break;
        }
      case "right-top":
        {
          u - t >= v / 2 ? f.x = t - v / 2 : f.x = u - v, f.y = i;
          break;
        }
    }
    return f;
  }
  function Qz(e, t, i) {
    if (!Ld(e, "hide")) {
      var _e$attributes$title;
      var _iterator33 = _createForOfIteratorHelper(e.childNodes),
        _step33;
      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var a = _step33.value;
          var u = Qz(a, t, i);
          if (u) return u;
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
      if (e.layoutNode.hasPoint(t, i) && (_e$attributes$title = e.attributes.title) !== null && _e$attributes$title !== void 0 && _e$attributes$title.length) return e;
    }
  }
  var Zz = function Zz(_ref10) {
    var _h3;
    var e = _ref10.mousePos,
      t = _objectWithoutProperties(_ref10, _excluded2);
    var _ref11 = (0, sn.useState)(!1),
      _ref12 = _slicedToArray(_ref11, 2),
      i = _ref12[0],
      a = _ref12[1],
      _ref13 = (0, sn.useState)(""),
      _ref14 = _slicedToArray(_ref13, 2),
      u = _ref14[0],
      l = _ref14[1],
      _ref15 = (0, sn.useState)({
        x: 0,
        y: 0
      }),
      _ref16 = _slicedToArray(_ref15, 2),
      f = _ref16[0],
      d = _ref16[1],
      v = (0, sn.useRef)(null),
      h;
    if (!e) h = void 0;else {
      var y = e.x,
        b = e.y,
        S = e.hover;
      S ? h = Qz(Au(), y, b) : h = void 0;
    }
    return (0, sn.useEffect)(function () {
      var _h2;
      if (!h) {
        a(!1);
        return;
      }
      var y = (_h2 = h) === null || _h2 === void 0 ? void 0 : _h2.attributes.title;
      if (y !== null && y !== void 0 && y.length && e) {
        var _b2 = gge(e.x, e.y, Au().layoutNode.width, Au().layoutNode.height),
          _S3 = bge(v.current, e.x, e.y, _b2);
        d(_S3), a(!0), l(y);
      } else a(!1);
    }, [e === null || e === void 0 ? void 0 : e.x, e === null || e === void 0 ? void 0 : e.y, e === null || e === void 0 ? void 0 : e.hover, (_h3 = h) === null || _h3 === void 0 ? void 0 : _h3.attributes.text]), sn.default.createElement(tn, _objectSpread(_objectSpread({
      id: "tooltip"
    }, t), {}, {
      hide: !v.current || t.hide || !i,
      ref: v,
      x: f.x,
      y: f.y,
      text: u,
      position: "absolute"
    }));
  };
  var yx = W(yt());
  var xge = W(yt());
  var Sge = W(yt()),
    P3e = [].concat(I6, Hb, Gb, P6);
  var Ege = W(yt());
  var Tge = W(yt());
  var Jz = W(yt());
  var Wz = W(yt()),
    qge = _typeof(globalThis.window) < "u",
    Y3e = !qge || "Deno" in globalThis;
  var bL = W(dL()),
    Hl = W(hL());
  var yL = {};
  function xL(e) {
    var _e$props$imageOverlay2, _e$props$imageOverlay3;
    var _iterator34 = _createForOfIteratorHelper(e.childNodes),
      _step34;
    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var i = _step34.value;
        xL(i);
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }
    var _iterator35 = _createForOfIteratorHelper(e.props.osdOverlays),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        var _i11 = _step35.value;
        _i11.remove();
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
    var t = e.attributes.backgroundImage;
    typeof t == "string" && ((_e$props$imageOverlay2 = e.props.imageOverlay) !== null && _e$props$imageOverlay2 !== void 0 && _e$props$imageOverlay2.remove(), (_e$props$imageOverlay3 = e.props.imageOverlay) === null || _e$props$imageOverlay3 === void 0 ? void 0 : _e$props$imageOverlay3.destroy());
  }
  function _ge(e) {
    return (0, bL.default)({
      supportsMutation: !0,
      supportsPersistence: !1,
      supportsMicrotasks: !1,
      resolveUpdatePriority: function resolveUpdatePriority() {
        return Hl.DiscreteEventPriority;
      },
      getCurrentUpdatePriority: function getCurrentUpdatePriority() {
        return Hl.DiscreteEventPriority;
      },
      setCurrentUpdatePriority: function setCurrentUpdatePriority() {
        return Hl.DiscreteEventPriority;
      },
      maySuspendCommit: function maySuspendCommit() {
        return !1;
      },
      appendChildToContainer: function appendChildToContainer(t, i) {
        jd(t, i), e();
      },
      insertInContainerBefore: cx,
      commitUpdate: function commitUpdate(t, i, a, u) {
        dx(t, u), e();
      },
      commitTextUpdate: function commitTextUpdate(t, i, a) {
        throw new Error("not support Text Component update");
      },
      commitMount: function commitMount() {},
      removeChildFromContainer: function removeChildFromContainer(t, i) {
        Dl(t, i), e();
      },
      createInstance: function createInstance(t, i, a, u, l) {
        var f = Pl("@mpv-easy/box");
        return dx(f, i), f;
      },
      createTextInstance: function createTextInstance(t, i, a, u) {
        throw new Error("not support Text components");
      },
      hideTextInstance: function hideTextInstance(t) {},
      unhideTextInstance: function unhideTextInstance(t, i) {},
      hideInstance: function hideInstance(t) {},
      unhideInstance: function unhideInstance(t) {},
      appendInitialChild: function appendInitialChild(t, i) {
        jd(t, i), e();
      },
      appendChild: function appendChild(t, i) {
        jd(t, i), e();
      },
      insertBefore: function insertBefore(t, i, a) {
        cx(t, i, a), e();
      },
      finalizeInitialChildren: function finalizeInitialChildren(t, i, a, u, l) {
        return !1;
      },
      shouldSetTextContent: function shouldSetTextContent(t, i) {
        return !1;
      },
      getRootHostContext: function getRootHostContext(t) {
        return yL;
      },
      getChildHostContext: function getChildHostContext(t, i, a) {
        return yL;
      },
      getPublicInstance: function getPublicInstance(t) {
        return t;
      },
      prepareForCommit: function prepareForCommit(t) {
        return null;
      },
      resetTextContent: function resetTextContent(t) {},
      clearContainer: function clearContainer() {},
      resetAfterCommit: function resetAfterCommit(t) {},
      preparePortalMount: function preparePortalMount(t) {},
      scheduleTimeout: function scheduleTimeout(t, i) {
        return setTimeout(t, i);
      },
      cancelTimeout: function cancelTimeout(t) {
        return clearTimeout(t);
      },
      noTimeout: -1,
      isPrimaryRenderer: !0,
      getCurrentEventPriority: function getCurrentEventPriority() {
        return Hl.DiscreteEventPriority;
      },
      getInstanceFromNode: function getInstanceFromNode(t) {
        return null;
      },
      beforeActiveInstanceBlur: function beforeActiveInstanceBlur() {},
      afterActiveInstanceBlur: function afterActiveInstanceBlur() {},
      prepareScopeUpdate: function prepareScopeUpdate(t, i) {},
      getInstanceFromScope: function getInstanceFromScope(t) {
        return null;
      },
      detachDeletedInstance: function detachDeletedInstance(t) {
        xL(t);
      },
      removeChild: function removeChild(t, i) {
        Dl(t, i), e();
      },
      supportsHydration: !1
    });
  }
  var Ax = 0,
    gL = 0,
    Fl = [],
    _x = 0,
    Qd = 0;
  function Oge() {
    var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref17$enableMouseMov = _ref17.enableMouseMoveEvent,
      e = _ref17$enableMouseMov === void 0 ? !0 : _ref17$enableMouseMov,
      _ref17$fps = _ref17.fps,
      t = _ref17$fps === void 0 ? Vz : _ref17$fps,
      _ref17$flex = _ref17.flex,
      i = _ref17$flex === void 0 ? Il() : _ref17$flex,
      _ref17$showFps = _ref17.showFps,
      a = _ref17$showFps === void 0 ? !1 : _ref17$showFps,
      _ref17$throttle = _ref17.throttle,
      u = _ref17$throttle === void 0 ? !0 : _ref17$throttle,
      _ref17$customRender = _ref17.customRender,
      l = _ref17$customRender === void 0 ? function () {
        function d() {
          _x = Date.now(), clearTimeout(Qd), Qd = 0, gL++;
          var y = Date.now();
          kz();
          var S = Date.now() - y;
          Ax = Math.max(Ax, S), Fl.push(S), Fl.length > 32 && Fl.shift();
          var T = Fl.reduce(function (R, A) {
            return R + A;
          }, 0) / Fl.length;
          a && Ol("render time(react):", gL, S, Ax, T);
        }
        var v = 1e3 / t,
          h = Date.now();
        if (u && h - _x < v) {
          var y = v - (h - _x);
          clearTimeout(Qd), Qd = +setTimeout(d, y);
          return;
        }
        d();
      } : _ref17$customRender,
      _ref17$customDispatch = _ref17.customDispatch,
      f = _ref17$customDispatch === void 0 ? Xz : _ref17$customDispatch;
    var d = _ge(l);
    return function (v) {
      var h = d.createContainer(i.rootNode, 0, null, !1, null, "", function (_) {
          throw _;
        }, null),
        y = {
          x: 0,
          y: 0,
          hover: !1
        };
      nn("mouse-pos", "native", function (_, x) {
        y = x, e && f(i.rootNode, y, {
          event: "press",
          is_mouse: !0,
          key: "",
          canceled: !1,
          scale: 0,
          arg: ""
        });
      });
      function b(_) {
        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        f(i.rootNode, y, {
          key_name: _,
          key: _,
          event: "down",
          is_mouse: !0,
          canceled: !1,
          scale: 0,
          arg: x
        });
      }
      an("mouse-left-click", function () {
        b("MOUSE_BTN0", "click");
      }), an("mouse-mid-click", function () {
        b("MOUSE_BTN1", "click");
      }), an("mouse-right-click", function () {
        b("MOUSE_BTN2", "click");
      }), an("mouse-wheel-up", function () {
        b("WHEEL_UP");
      }), an("mouse-wheel-down", function () {
        b("WHEEL_DOWN");
      }), hu("MOUSE_BTN0", "MPV_EASY_MOUSE_LEFT", function (_) {
        f(i.rootNode, y, _);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), hu("MOUSE_BTN1", "MPV_EASY_MOUSE_MID", function (_) {
        f(i.rootNode, y, _);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), hu("MOUSE_BTN3", "MPV_EASY_WHEEL_UP", function (_) {
        f(i.rootNode, y, _);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), hu("MOUSE_BTN4", "MPV_EASY_WHEEL_DOWN", function (_) {
        f(i.rootNode, y, _);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      });
      var S = 0,
        T = 0,
        R = new Rd("osd-dimensions");
      function A() {
        var _ref18 = R.value || {
            w: 0,
            h: 0
          },
          _ = _ref18.w,
          x = _ref18.h;
        !_ || !x || S === _ && T === x || (S = _, T = x, Pt(i.rootNode, "id", Hz), Pt(i.rootNode, "width", _), Pt(i.rootNode, "height", x), Pt(i.rootNode, "position", "relative"), Pt(i.rootNode, "color", "#FFFFFF"), Pt(i.rootNode, "backgroundColor", "#000000FF"), Pt(i.rootNode, "display", "flex"), Pt(i.rootNode, "padding", 0), Pt(i.rootNode, "borderSize", 0), Pt(i.rootNode, "x", 0), Pt(i.rootNode, "y", 0), Pt(i.rootNode, "zIndex", 0), Pt(i.rootNode, "alignContent", "stretch"), Pt(i.rootNode, "fontSize", 16), ja(i.rootNode, "x", 0), ja(i.rootNode, "y", 0), ja(i.rootNode, "width", _), ja(i.rootNode, "height", x), ja(i.rootNode, "padding", 0), ja(i.rootNode, "border", 0), d.updateContainer(v, h, null, null));
      }
      R.observe(A);
    };
  }
  var Ox,
    SL = function SL(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Ox || (Ox = Oge(t)), Ox(e);
    };
  var _u = {
      subFontSize: 55,
      subColor: "#FFFFFF00",
      subBackColor: "#FFFFFFFF",
      subBackColorHover: "#000000BF",
      subColorHover: "#00FFFF00",
      subBold: !1,
      subScale: 1,
      subOutlineSize: 0,
      subOutlineColor: "#FF000000",
      subZIndex: 512,
      targetLang: ji(),
      sourceLang: "",
      subSrtScale: .4,
      firstSubColor: "",
      secondSubColor: "",
      firstSubFontface: "",
      secondSubFontface: ""
    },
    Zd = {
      tooltioFontSize: 32,
      tooltipColor: "#FFFFFF00",
      tooltipBackColor: "#00000000",
      tooltipScale: 1,
      tooltipBold: !1,
      tooltipOutlineSize: 0,
      tooltipOutlineColor: "#00000000",
      tooltipMaxWidth: 64,
      tooltipZIndex: 1024,
      tooltipLeft: 0,
      tooltipBottom: 32
    };
  var wge = {
    "sec-ch-ua": '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    "x-browser-year": "2024",
    "x-browser-channel": "stable",
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-form-factors": '"Desktop"',
    "x-browser-copyright": "Copyright 2024 Google LLC. All rights reserved."
  };
  function Gl(_x14, _x15, _x16) {
    return _Gl.apply(this, arguments);
  }
  function _Gl() {
    _Gl = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e, t, i) {
      var a, u, l, f, d;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (!(e.trim().length === 0)) {
              _context8.next = 2;
              break;
            }
            return _context8.abrupt("return", "");
          case 2:
            a = i === null || i === void 0 ? void 0 : i.split("-")[0].toLowerCase(), u = t.split("-")[0].toLowerCase(), l = wz.map(function (f) {
              return f.split("-")[0];
            });
            (!u || !l.includes(u)) && (u = ji().split("-")[0].toLowerCase()), (!a || !l.includes(a)) && (a = "auto");
            _context8.prev = 4;
            f = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=".concat(a, "&tl=").concat(u, "&dt=t&q=").concat(encodeURIComponent(e));
            _context8.next = 8;
            return Eu(f, function () {
              return za(f, {
                headers: wge
              }).then(function (h) {
                return h.text();
              });
            });
          case 8:
            d = _context8.sent;
            return _context8.abrupt("return", JSON.parse(d)[0].map(function (h) {
              return h[0];
            }).join(""));
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](4);
            return _context8.abrupt("return", (console.log("translate error: ", _context8.t0), ""));
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[4, 12]]);
    }));
    return _Gl.apply(this, arguments);
  }
  var Nge = 4e3;
  function Rge(_x17, _x18, _x19) {
    return _Rge.apply(this, arguments);
  }
  function _Rge() {
    _Rge = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e, t, i) {
      var a, u, l, f, d, v, y, b, S, T, R;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            a = new La(e), u = a.blocks, l = [], f = 0, d = 0, v = u.length;
          case 1:
            if (!(d < v)) {
              _context9.next = 13;
              break;
            }
            y = d;
            for (; d < v && f + u[d].text.length < Nge;) f += u[d].text.length, l.push(u[d].text), d++;
            b = "\n\n\n";
            S = l.join(b);
            _context9.next = 8;
            return Gl(S, t, i);
          case 8:
            T = _context9.sent.split(b);
            for (R = 0; R < T.length; R++) u[y + R].text = T[R];
            l = [], f = 0;
          case 11:
            _context9.next = 1;
            break;
          case 13:
            return _context9.abrupt("return", a.toString());
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _Rge.apply(this, arguments);
  }
  var Pr, Er;
  function Cge(e, t, i, a, u, l, f, d, v) {
    var h = on(e),
      y = on(t),
      b = new La(h),
      S = new La(y),
      T = new La(h),
      R = ["size=\"".concat(a, "\"")],
      A = ["size=\"".concat(u, "\"")];
    l.length && R.push("color=\"".concat(l, "\"")), d.length && R.push("face=\"".concat(d, "\"")), f.length && A.push("color=\"".concat(f, "\"")), v.length && A.push("face=\"".concat(v, "\""));
    var _ = R.join(" "),
      x = A.join(" ");
    for (var I = 0; I < T.blocks.length; I++) {
      var w = b.blocks[I].text.split("\n"),
        B = S.blocks[I].text.split("\n"),
        U = [];
      for (var k = 0; k < w.length; k++) U.push("<font ".concat(_, " >").concat(w[k] || "", "</font>\n<font ").concat(x, " >").concat(B[k] || "", "</font>"));
      T.blocks[I].text = U.join("\n");
    }
    var q = T.toString();
    Br(i, q);
  }
  function wx() {
    return _wx.apply(this, arguments);
  }
  function _wx() {
    _wx = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var _e$targetLang, _e$sourceLang;
      var e,
        t,
        _e$firstFontSize,
        i,
        _e$secondFontSize,
        a,
        _e$firstSubColor,
        u,
        _e$secondSubColor,
        l,
        _e$firstSubFontface,
        f,
        _e$secondSubFontface,
        d,
        v,
        h,
        y,
        b,
        S,
        T,
        R,
        A,
        _,
        q,
        I,
        x,
        _args10 = arguments;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            e = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
            t = e.mix, _e$firstFontSize = e.firstFontSize, i = _e$firstFontSize === void 0 ? 22 : _e$firstFontSize, _e$secondFontSize = e.secondFontSize, a = _e$secondFontSize === void 0 ? 11 : _e$secondFontSize, _e$firstSubColor = e.firstSubColor, u = _e$firstSubColor === void 0 ? "" : _e$firstSubColor, _e$secondSubColor = e.secondSubColor, l = _e$secondSubColor === void 0 ? "" : _e$secondSubColor, _e$firstSubFontface = e.firstSubFontface, f = _e$firstSubFontface === void 0 ? "" : _e$firstSubFontface, _e$secondSubFontface = e.secondSubFontface, d = _e$secondSubFontface === void 0 ? "" : _e$secondSubFontface, v = Li();
            if (v) {
              _context10.next = 5;
              break;
            }
            ut("subtitle not found");
            return _context10.abrupt("return");
          case 5:
            h = ud("path");
            if (ot(h)) {
              _context10.next = 9;
              break;
            }
            ut("not support remote video");
            return _context10.abrupt("return");
          case 9:
            y = (_e$targetLang = e.targetLang) !== null && _e$targetLang !== void 0 && _e$targetLang.length ? e.targetLang : ji(), b = (_e$sourceLang = e.sourceLang) !== null && _e$sourceLang !== void 0 && _e$sourceLang.length ? e.sourceLang : v.lang;
            if (!(t && Er && v.title === "".concat(y, "-mix"))) {
              _context10.next = 13;
              break;
            }
            Mi("sid", Er.id), rn("sub-remove ".concat(v.id)), Er = void 0;
            return _context10.abrupt("return");
          case 13:
            if (!(!t && Pr && v.title === y)) {
              _context10.next = 16;
              break;
            }
            Mi("sid", Pr.id), rn("sub-remove ".concat(v.id)), Pr = void 0;
            return _context10.abrupt("return");
          case 16:
            if (!(t && Pr && (Mi("sid", Pr.id), rn("sub-remove ".concat(v.id)), Pr = void 0), !t && Er && (Mi("sid", Er.id), rn("sub-remove ".concat(v.id)), Er = void 0), v = Li(), !v)) {
              _context10.next = 19;
              break;
            }
            ut("subtitle not found");
            return _context10.abrupt("return");
          case 19:
            t ? Er = v : Pr = v;
            S = zi(), T = Tl(h), R = Pd([h, b, y, v.id, i, a, u, l, f, d].join("-")), A = kt("".concat(S, "/").concat(R, ".").concat(T, ".").concat(b, ".srt")), _ = v.external ? v.externalFilename : kt("".concat(S, "/").concat(R, ".").concat(T, ".").concat(b, ".").concat(y, ".srt"));
            if (ot(_)) {
              _context10.next = 35;
              break;
            }
            _context10.next = 24;
            return Oz(h, v.id, A);
          case 24:
            _context10.t0 = !_context10.sent;
            if (_context10.t0) {
              _context10.next = 27;
              break;
            }
            _context10.t0 = !ot(A);
          case 27:
            if (!_context10.t0) {
              _context10.next = 30;
              break;
            }
            ut("save subtitle error");
            return _context10.abrupt("return");
          case 30:
            q = on(A);
            _context10.next = 33;
            return Rge(q, y, b);
          case 33:
            I = _context10.sent;
            Br(_, I);
          case 35:
            x = kt("".concat(S, "/").concat(R, ".").concat(T, ".").concat(b, ".").concat(y, ".mix.srt"));
            t ? (ot(x) || Cge(_, A, x, i, a, u, l, f, d), rn("sub-add \"".concat(x, "\" select ").concat(y, "-mix ").concat(y))) : rn("sub-add \"".concat(_, "\" select ").concat(y, " ").concat(y));
          case 37:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return _wx.apply(this, arguments);
  }
  function EL(_x20) {
    return _EL.apply(this, arguments);
  }
  function _EL() {
    _EL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e) {
      var i;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            i = "https://cn.bing.com/dict/clientsearch?mkt=zh-CN&setLang=zh&form=BDVEHC&ClientVer=BDDTV3.5.1.4320&q=".concat(encodeURIComponent(e));
            _context11.next = 3;
            return Eu(i, function () {
              return za(i).then(function (u) {
                return u.text();
              });
            });
          case 3:
            return _context11.abrupt("return", _context11.sent);
          case 4:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return _EL.apply(this, arguments);
  }
  var Fe = W(yt());
  var Mge = ["enes", "enfr", "deen", "enpl", "ensl", "defr", "dees", "deru", "depl", "desl", "deit", "dept", "detr", "deel", "dela", "espl", "frpl", "itpl", "plru", "essl", "frsl", "itsl", "enit", "enpt", "enru", "espt", "esfr", "delb", "dezh", "enzh", "eszh", "frzh", "denl", "arde", "aren", "dade", "csde", "dehu", "deno", "desv", "dede", "dedx"];
  function TL(_x21, _x22, _x23) {
    return _TL.apply(this, arguments);
  }
  function _TL() {
    _TL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(e, t, i) {
      var a, u, l;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            a = encodeURIComponent(e), u = i + t;
            if (Mge.includes(u)) {
              _context12.next = 3;
              break;
            }
            return _context12.abrupt("return", (ut("pons not support language combos: ".concat(u)), ""));
          case 3:
            l = "http://en.pons.com/translate?q=".concat(a, "&l=").concat(u, "&in=").concat(i);
            _context12.next = 6;
            return Eu(l, function () {
              return za(l, {
                redirect: "follow"
              }).then(function (d) {
                return d.text();
              });
            });
          case 6:
            return _context12.abrupt("return", _context12.sent);
          case 7:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return _TL.apply(this, arguments);
  }
  function qL(_x24) {
    return _qL.apply(this, arguments);
  }
  function _qL() {
    _qL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(e) {
      var _t$match, _t$match2, _t$match3;
      var t, i, a, u, l;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return EL(e);
          case 2:
            t = _context13.sent;
            i = ((_t$match = t.match(/data-definition="(.*?)"/)) === null || _t$match === void 0 ? void 0 : _t$match[1]) || "";
            a = Id(i).split(";").map(function (f) {
              return f.trim();
            });
            u = Id(((_t$match2 = t.match(/data-word="(.*?)"/)) === null || _t$match2 === void 0 ? void 0 : _t$match2[1]) || e).trim();
            l = Id(((_t$match3 = t.match(/audiomd5="(.*?)"/)) === null || _t$match3 === void 0 ? void 0 : _t$match3[1]) || "").trim();
            return _context13.abrupt("return", {
              word: u,
              detail: a,
              audio: l
            });
          case 8:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return _qL.apply(this, arguments);
  }
  function AL(_x25) {
    return _AL.apply(this, arguments);
  }
  function _AL() {
    _AL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(e) {
      var _t$match4;
      var t, i, a, u, l, f, d, v, y;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return TL(e, "en", "de");
          case 2:
            t = _context14.sent;
            i = ((_t$match4 = t.match(/<h2 class="">\s(.*?)<span class/)) === null || _t$match4 === void 0 ? void 0 : _t$match4[1].trim()) || e;
            a = 'class="translations first">';
            u = '<div class="link-examples-toolbar">';
            l = t.indexOf(a);
            f = t.indexOf(u);
            d = "@@NEW_LINE@@";
            v = "@@SPLIT@@";
            y = t.slice(l + a.length, f).replaceAll("</dl>", d).replaceAll("</h3>", d).replaceAll("</dt>", v).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").replaceAll(d, "\n").replaceAll(v, "	").trim().split("\n").map(function (b) {
              var _b$trim$split$map = b.trim().split("	").map(function (R) {
                  return R.trim();
                }),
                _b$trim$split$map2 = _slicedToArray(_b$trim$split$map, 2),
                S = _b$trim$split$map2[0],
                T = _b$trim$split$map2[1];
              return "".concat(S, "    ").concat(T !== null && T !== void 0 ? T : "").trim();
            });
            return _context14.abrupt("return", {
              word: i,
              detail: y
            });
          case 12:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return _AL.apply(this, arguments);
  }
  function Bge(_x26, _x27, _x28) {
    return _Bge.apply(this, arguments);
  }
  function _Bge() {
    _Bge = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(e, t, i) {
      var a;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            if (!(t.startsWith("zh") && i.startsWith("en"))) {
              _context15.next = 2;
              break;
            }
            return _context15.abrupt("return", qL(e));
          case 2:
            if (!(t.startsWith("en") && i.startsWith("de"))) {
              _context15.next = 4;
              break;
            }
            return _context15.abrupt("return", AL(e));
          case 4:
            _context15.next = 6;
            return Gl(e, t, i);
          case 6:
            a = _context15.sent;
            return _context15.abrupt("return", Promise.resolve({
              word: e,
              detail: [a]
            }));
          case 8:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    return _Bge.apply(this, arguments);
  }
  function Dge(e) {
    return e.trim().replaceAll(/\s+/g, " ").replaceAll(" ", "  ").split(" ");
  }
  var Pge = '!"#$%&()*+,./:;<=>?@[]^{|}~'.split("");
  function Ige(e) {
    var _iterator36 = _createForOfIteratorHelper(Pge),
      _step36;
    try {
      for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
        var _t7 = _step36.value;
        e = e.replaceAll(_t7, "");
      }
    } catch (err) {
      _iterator36.e(err);
    } finally {
      _iterator36.f();
    }
    return e;
  }
  function Uge(_ref19) {
    var e = _ref19.word,
      t = _ref19.showTitle,
      i = _ref19.subConfig,
      a = _ref19.skipTranslate;
    var _ref20 = (0, Fe.useState)({
        word: "",
        detail: []
      }),
      _ref21 = _slicedToArray(_ref20, 2),
      u = _ref21[0],
      l = _ref21[1],
      f = (0, Fe.useRef)(!1);
    return (0, Fe.useEffect)(function () {
      if (f.current || !e.length || a) return;
      f.current = !0;
      var d = e;
      Bge(Ige(e), i.targetLang, i.sourceLang).then(function (v) {
        d === e && l(v), f.current = !1;
      });
    }, [e]), e.length ? Fe.default.createElement(ux, {
      onClick: function () {
        var _onClick = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(d) {
          var _u$audio;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                d.event.key_name === "MBTN_LEFT" && ((_u$audio = u.audio) === null || _u$audio === void 0 ? void 0 : _u$audio.length) && Rz(u.audio);
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function onClick(_x29) {
          return _onClick.apply(this, arguments);
        }
        return onClick;
      }(),
      display: "flex",
      position: "relative",
      fontSize: i.subFontSize,
      color: i.subColor,
      fontBorderSize: i.subOutlineSize,
      fontBorderColor: i.subOutlineColor,
      fontWeight: i.subBold ? "bold" : "normal",
      colorHover: a ? i.subColor : i.subColorHover,
      backgroundColorHover: a ? i.subBackColor : i.subBackColorHover,
      backgroundColor: i.subBackColor,
      title: t ? a ? "" : u.detail.join("\n").trim() : "",
      text: e
    }) : Fe.default.createElement(tn, {
      width: e === "" ? i.subFontSize / 2 : void 0,
      height: e === "" ? i.subFontSize / 2 : void 0
    });
  }
  function zge(_ref22) {
    var e = _ref22.line,
      t = _ref22.subConfig,
      i = _ref22.lineIndex,
      a = _ref22.isMix;
    var u = Dge(e),
      _ref23 = (0, Fe.useState)(!0),
      _ref24 = _slicedToArray(_ref23, 2),
      l = _ref24[0],
      f = _ref24[1],
      d = (0, Fe.useRef)(!1),
      _ref25 = (0, Fe.useState)(""),
      _ref26 = _slicedToArray(_ref25, 2),
      v = _ref26[0],
      h = _ref26[1],
      y = a && !(i & 1);
    return (0, Fe.useEffect)(function () {
      if (d.current || !e.length || y) return;
      d.current = !0;
      var b = e;
      Gl(e, ji()).then(function (S) {
        b === e && h(S.trim()), d.current = !1;
      });
    }, [e]), Fe.default.createElement(tn, {
      position: "relative",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "end",
      alignContent: "stretch",
      onClick: function onClick(b) {
        b.event.key_name === "MBTN_MID" && f(function (S) {
          return !S;
        });
      },
      title: l ? "" : v
    }, u.map(function (b, S) {
      return Fe.default.createElement(Uge, {
        showTitle: l,
        key: [b, S].join(","),
        word: b.trim(),
        subConfig: t,
        skipTranslate: y
      });
    }));
  }
  function _L(e) {
    var _u$e = _objectSpread(_objectSpread({}, _u), e),
      t = _u$e.subFontSize,
      i = _u$e.subColor,
      a = _u$e.subBackColor,
      u = _u$e.subBackColorHover,
      l = _u$e.subColorHover,
      f = _u$e.subBold,
      d = _u$e.subScale,
      v = _u$e.subOutlineSize,
      h = _u$e.subOutlineColor,
      y = _u$e.subZIndex,
      b = _u$e.targetLang,
      S = _u$e.sourceLang,
      T = _u$e.subSrtScale,
      R = _u$e.firstSubColor,
      A = _u$e.firstSubFontface,
      _ = _u$e.secondSubFontface,
      x = _u$e.secondSubColor,
      _ref27 = (0, Fe.useState)(!1),
      _ref28 = _slicedToArray(_ref27, 2),
      q = _ref28[0],
      I = _ref28[1],
      _ref29 = (0, Fe.useState)(""),
      _ref30 = _slicedToArray(_ref29, 2),
      w = _ref30[0],
      B = _ref30[1],
      U = (0, Fe.useRef)(null);
    U.current = function (ce) {
      q && B(ce || "");
    };
    var k = b.toLocaleLowerCase(),
      ne = S.toLocaleLowerCase();
    if (!ne.length && (Pr && (ne = Pr.lang || Pr.title || ""), Er && (ne = Er.lang || Er.title || ""), !ne.length)) {
      var ce = Li();
      ce && (ne = (ce.lang || ce.title || "").toLocaleLowerCase());
    }
    var He = Math.round(T * t * d),
      he = Math.round(He / 2);
    (0, Fe.useEffect)(function () {
      an("translate", function () {
        if (Li() || ut("subtitle not found"), !Cl()) {
          ut("ffmpeg not found");
          return;
        }
        if (!Ui("curl")) {
          ut("curl not found");
          return;
        }
        wx({
          targetLang: k,
          sourceLang: ne,
          mix: !1,
          firstFontSize: He,
          secondFontSize: he,
          firstSubColor: R,
          firstSubFontface: A,
          secondSubFontface: _,
          secondSubColor: x
        });
      }), an("mix-translate", function () {
        if (Li() || ut("subtitle not found"), !Cl()) {
          ut("ffmpeg not found");
          return;
        }
        if (!Ui("curl")) {
          ut("curl not found");
          return;
        }
        wx({
          targetLang: k,
          sourceLang: ne,
          mix: !0,
          firstFontSize: He,
          secondFontSize: he,
          firstSubColor: R,
          firstSubFontface: A,
          secondSubFontface: _,
          secondSubColor: x
        });
      }), an("interactive-translate", function () {
        if (Li || ut("subtitle not found"), !Ui("curl")) {
          ut("curl not found");
          return;
        }
        I(function (Me) {
          return !Me;
        }), lu("sub-visibility", !su("sub-visibility"));
      }), nn("sub-text", "string", function (ce, Me) {
        var _U$current;
        (_U$current = U.current) === null || _U$current === void 0 || _U$current.call(U, Me);
      });
    }, []);
    var qe = !!Er;
    return Fe.default.createElement(tn, _objectSpread({
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "100%",
      hide: !q,
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center"
    }, e), w.trim().replaceAll("\r\n", "\n").split("\n").map(function (ce, Me) {
      return Fe.default.createElement(zge, {
        isMix: qe,
        key: [ce, Me].join(),
        line: ce,
        lineIndex: Me,
        subConfig: {
          subFontSize: t,
          subColor: i,
          subBackColor: a,
          subBackColorHover: u,
          subColorHover: l,
          subBold: f,
          subScale: d,
          subOutlineSize: v,
          subOutlineColor: h,
          targetLang: k,
          sourceLang: ne,
          subZIndex: y,
          subSrtScale: T,
          firstSubColor: R,
          firstSubFontface: A,
          secondSubFontface: _,
          secondSubColor: x
        }
      });
    }));
  }
  var Lge = "@mpv-easy/translate",
    jge = _objectSpread(_objectSpread({}, _u), Zd),
    n6e = function n6e(e, t) {
      return {
        name: Lge,
        defaultConfig: jge,
        create: function create() {},
        destroy: function destroy() {}
      };
    };
  var Ou = W(yt());
  var _u$Zd$Cz$subScale = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _u), Zd), Cz("translate", {
      "sub-font-size": {
        type: "number",
        key: "subFontSize"
      },
      "sub-color": {
        type: "color",
        key: "subColor"
      },
      "sub-back-color": {
        type: "color",
        key: "subBackColor"
      },
      "sub-back-color-hover": {
        type: "color",
        key: "subBackColorHover"
      },
      "sub-color-hover": {
        type: "color",
        key: "subColorHover"
      },
      "sub-bold": {
        type: "boolean",
        key: "subBold"
      },
      "sub-outline-size": {
        type: "number",
        key: "subOutlineSize"
      },
      "sub-outline-color": {
        type: "color",
        key: "subOutlineColor"
      },
      "sub-zindex": {
        type: "number",
        key: "subZIndex"
      },
      "tooltip-font-size": {
        type: "number",
        key: "tooltioFontSize"
      },
      "tooltip-color": {
        type: "color",
        key: "tooltipColor"
      },
      "tooltip-back-color": {
        type: "color",
        key: "tooltipBackColor"
      },
      "tooltip-scale": {
        type: "number",
        key: "tooltipScale"
      },
      "tooltip-bold": {
        type: "boolean",
        key: "tooltipBold"
      },
      "tooltip-outline-size": {
        type: "number",
        key: "tooltipOutlineSize"
      },
      "tooltip-outline-color": {
        type: "color",
        key: "tooltipOutlineColor"
      },
      "tooltip-max-width": {
        type: "number",
        key: "tooltipMaxWidth"
      },
      "tooltip-zindex": {
        type: "number",
        key: "tooltipZIndex"
      },
      "tooltip-left": {
        type: "number",
        key: "tooltipLeft"
      },
      "tooltip-bottom": {
        type: "number",
        key: "tooltipBottom"
      },
      "target-lang": {
        type: "string",
        key: "targetLang"
      },
      "source-lang": {
        type: "string",
        key: "sourceLang"
      },
      "sub-srt-scale": {
        type: "number",
        key: "subSrtScale"
      },
      "first-sub-color": {
        type: "string",
        key: "firstSubColor"
      },
      "second-sub-color": {
        type: "string",
        key: "secondSubColor"
      },
      "first-sub-fontface": {
        type: "string",
        key: "firstSubFontface"
      },
      "second-sub-fontface": {
        type: "string",
        key: "secondSubFontface"
      }
    })), {}, {
      subScale: wa("sub-scale", 1)
    }),
    Fge = _u$Zd$Cz$subScale.subFontSize,
    Hge = _u$Zd$Cz$subScale.subColor,
    Gge = _u$Zd$Cz$subScale.subBackColor,
    Kge = _u$Zd$Cz$subScale.subBackColorHover,
    Vge = _u$Zd$Cz$subScale.subColorHover,
    Yge = _u$Zd$Cz$subScale.subBold,
    Xge = _u$Zd$Cz$subScale.subScale,
    kge = _u$Zd$Cz$subScale.subOutlineSize,
    Qge = _u$Zd$Cz$subScale.subOutlineColor,
    Zge = _u$Zd$Cz$subScale.subZIndex,
    Wge = _u$Zd$Cz$subScale.targetLang,
    Jge = _u$Zd$Cz$subScale.sourceLang,
    $ge = _u$Zd$Cz$subScale.tooltioFontSize,
    e0e = _u$Zd$Cz$subScale.tooltipColor,
    t0e = _u$Zd$Cz$subScale.tooltipBackColor,
    r0e = _u$Zd$Cz$subScale.tooltipScale,
    n0e = _u$Zd$Cz$subScale.tooltipBold,
    i0e = _u$Zd$Cz$subScale.tooltipOutlineSize,
    a0e = _u$Zd$Cz$subScale.tooltipOutlineColor,
    o0e = _u$Zd$Cz$subScale.tooltipMaxWidth,
    u0e = _u$Zd$Cz$subScale.tooltipZIndex,
    s0e = _u$Zd$Cz$subScale.tooltipLeft,
    l0e = _u$Zd$Cz$subScale.tooltipBottom,
    c0e = _u$Zd$Cz$subScale.firstSubColor,
    f0e = _u$Zd$Cz$subScale.secondSubColor,
    p0e = _u$Zd$Cz$subScale.firstSubFontface,
    d0e = _u$Zd$Cz$subScale.secondSubFontface;
  function v0e() {
    return Ou.default.createElement(Ou.default.Fragment, null, Ou.default.createElement(Zz, {
      zIndex: u0e,
      maxWidth: o0e,
      backgroundColor: t0e,
      fontSize: $ge * r0e,
      color: e0e,
      fontWeight: n0e ? "bold" : "normal",
      borderColor: a0e,
      borderSize: i0e,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }), Ou.default.createElement(_L, {
      zIndex: Zge,
      subFontSize: Fge,
      subScale: Xge,
      subColor: Hge,
      subBold: Yge,
      subOutlineSize: kge,
      subOutlineColor: Qge,
      sourceLang: Jge,
      targetLang: Wge,
      subBackColor: Gge,
      subBackColorHover: Kge,
      subColorHover: Vge,
      left: s0e,
      bottom: l0e,
      firstSubColor: c0e,
      secondSubColor: f0e,
      firstSubFontface: p0e,
      secondSubFontface: d0e
    }));
  }
  SL(Ou.default.createElement(v0e, null));
})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler.production.js:
  (**
   * @license React
   * react-reconciler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler-constants.production.js:
  (**
   * @license React
   * react-reconciler-constants.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
