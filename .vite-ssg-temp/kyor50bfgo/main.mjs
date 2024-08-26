import { h, getCurrentInstance, effectScope, inject, onMounted, onUnmounted, ref, computed, watch, Fragment, isRef, createVNode, Text, defineComponent, resolveComponent, mergeProps, useSSRContext, unref, withCtx } from "vue";
import NProgress from "nprogress";
import { createPinia, defineStore } from "pinia";
import { ViteSSG } from "vite-ssg";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { useCounter, useDark, useToggle } from "@vueuse/core";
import { useHead } from "@vueuse/head";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var shared = { exports: {} };
var shared_cjs_prod = {};
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredShared_cjs_prod;
function requireShared_cjs_prod() {
  if (hasRequiredShared_cjs_prod) return shared_cjs_prod;
  hasRequiredShared_cjs_prod = 1;
  Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
  const inBrowser = typeof window !== "undefined";
  let mark;
  let measure;
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
  function warn(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const assign = Object.assign;
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  const isArray = Array.isArray;
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isSymbol = (val) => typeof val === "symbol";
  const isObject = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const toDisplayString = (val) => {
    return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  const RANGE = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function createEmitter() {
    const events = /* @__PURE__ */ new Map();
    const emitter = {
      events,
      on(event, handler) {
        const handlers = events.get(event);
        const added = handlers && handlers.push(handler);
        if (!added) {
          events.set(event, [handler]);
        }
      },
      off(event, handler) {
        const handlers = events.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(event, payload) {
        (events.get(event) || []).slice().map((handler) => handler(payload));
        (events.get("*") || []).slice().map((handler) => handler(event, payload));
      }
    };
    return emitter;
  }
  shared_cjs_prod.assign = assign;
  shared_cjs_prod.createEmitter = createEmitter;
  shared_cjs_prod.escapeHtml = escapeHtml;
  shared_cjs_prod.format = format;
  shared_cjs_prod.friendlyJSONstringify = friendlyJSONstringify;
  shared_cjs_prod.generateCodeFrame = generateCodeFrame;
  shared_cjs_prod.generateFormatCacheKey = generateFormatCacheKey;
  shared_cjs_prod.getGlobalThis = getGlobalThis;
  shared_cjs_prod.hasOwn = hasOwn;
  shared_cjs_prod.inBrowser = inBrowser;
  shared_cjs_prod.isArray = isArray;
  shared_cjs_prod.isBoolean = isBoolean;
  shared_cjs_prod.isDate = isDate;
  shared_cjs_prod.isEmptyObject = isEmptyObject;
  shared_cjs_prod.isFunction = isFunction;
  shared_cjs_prod.isNumber = isNumber;
  shared_cjs_prod.isObject = isObject;
  shared_cjs_prod.isPlainObject = isPlainObject;
  shared_cjs_prod.isPromise = isPromise;
  shared_cjs_prod.isRegExp = isRegExp;
  shared_cjs_prod.isString = isString;
  shared_cjs_prod.isSymbol = isSymbol;
  shared_cjs_prod.makeSymbol = makeSymbol;
  shared_cjs_prod.mark = mark;
  shared_cjs_prod.measure = measure;
  shared_cjs_prod.objectToString = objectToString;
  shared_cjs_prod.toDisplayString = toDisplayString;
  shared_cjs_prod.toTypeString = toTypeString;
  shared_cjs_prod.warn = warn;
  return shared_cjs_prod;
}
var shared_cjs = {};
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredShared_cjs;
function requireShared_cjs() {
  if (hasRequiredShared_cjs) return shared_cjs;
  hasRequiredShared_cjs = 1;
  Object.defineProperty(shared_cjs, "__esModule", { value: true });
  const inBrowser = typeof window !== "undefined";
  shared_cjs.mark = void 0;
  shared_cjs.measure = void 0;
  {
    const perf2 = inBrowser && window.performance;
    if (perf2 && perf2.mark && perf2.measure && perf2.clearMarks && perf2.clearMeasures) {
      shared_cjs.mark = (tag) => perf2.mark(tag);
      shared_cjs.measure = (name, startTag, endTag) => {
        perf2.measure(name, startTag, endTag);
        perf2.clearMarks(startTag);
        perf2.clearMarks(endTag);
      };
    }
  }
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
  function warn(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const assign = Object.assign;
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  const isArray = Array.isArray;
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isSymbol = (val) => typeof val === "symbol";
  const isObject = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const toDisplayString = (val) => {
    return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  const RANGE = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function createEmitter() {
    const events = /* @__PURE__ */ new Map();
    const emitter = {
      events,
      on(event, handler) {
        const handlers = events.get(event);
        const added = handlers && handlers.push(handler);
        if (!added) {
          events.set(event, [handler]);
        }
      },
      off(event, handler) {
        const handlers = events.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(event, payload) {
        (events.get(event) || []).slice().map((handler) => handler(payload));
        (events.get("*") || []).slice().map((handler) => handler(event, payload));
      }
    };
    return emitter;
  }
  shared_cjs.assign = assign;
  shared_cjs.createEmitter = createEmitter;
  shared_cjs.escapeHtml = escapeHtml;
  shared_cjs.format = format;
  shared_cjs.friendlyJSONstringify = friendlyJSONstringify;
  shared_cjs.generateCodeFrame = generateCodeFrame;
  shared_cjs.generateFormatCacheKey = generateFormatCacheKey;
  shared_cjs.getGlobalThis = getGlobalThis;
  shared_cjs.hasOwn = hasOwn;
  shared_cjs.inBrowser = inBrowser;
  shared_cjs.isArray = isArray;
  shared_cjs.isBoolean = isBoolean;
  shared_cjs.isDate = isDate;
  shared_cjs.isEmptyObject = isEmptyObject;
  shared_cjs.isFunction = isFunction;
  shared_cjs.isNumber = isNumber;
  shared_cjs.isObject = isObject;
  shared_cjs.isPlainObject = isPlainObject;
  shared_cjs.isPromise = isPromise;
  shared_cjs.isRegExp = isRegExp;
  shared_cjs.isString = isString;
  shared_cjs.isSymbol = isSymbol;
  shared_cjs.makeSymbol = makeSymbol;
  shared_cjs.objectToString = objectToString;
  shared_cjs.toDisplayString = toDisplayString;
  shared_cjs.toTypeString = toTypeString;
  shared_cjs.warn = warn;
  return shared_cjs;
}
if (process.env.NODE_ENV === "production") {
  shared.exports = requireShared_cjs_prod();
} else {
  shared.exports = requireShared_cjs();
}
var sharedExports = shared.exports;
var coreBase = { exports: {} };
var coreBase_cjs_prod = {};
var messageCompiler = { exports: {} };
var messageCompiler_cjs_prod = {};
var sourceMap = {};
var sourceMapGenerator = {};
var base64Vlq = {};
var base64 = {};
var hasRequiredBase64;
function requireBase64() {
  if (hasRequiredBase64) return base64;
  hasRequiredBase64 = 1;
  var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  base64.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) {
      return intToCharMap[number];
    }
    throw new TypeError("Must be between 0 and 63: " + number);
  };
  base64.decode = function(charCode) {
    var bigA = 65;
    var bigZ = 90;
    var littleA = 97;
    var littleZ = 122;
    var zero = 48;
    var nine = 57;
    var plus = 43;
    var slash = 47;
    var littleOffset = 26;
    var numberOffset = 52;
    if (bigA <= charCode && charCode <= bigZ) {
      return charCode - bigA;
    }
    if (littleA <= charCode && charCode <= littleZ) {
      return charCode - littleA + littleOffset;
    }
    if (zero <= charCode && charCode <= nine) {
      return charCode - zero + numberOffset;
    }
    if (charCode == plus) {
      return 62;
    }
    if (charCode == slash) {
      return 63;
    }
    return -1;
  };
  return base64;
}
var hasRequiredBase64Vlq;
function requireBase64Vlq() {
  if (hasRequiredBase64Vlq) return base64Vlq;
  hasRequiredBase64Vlq = 1;
  var base642 = requireBase64();
  var VLQ_BASE_SHIFT = 5;
  var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
  var VLQ_BASE_MASK = VLQ_BASE - 1;
  var VLQ_CONTINUATION_BIT = VLQ_BASE;
  function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
  }
  function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
  }
  base64Vlq.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
      digit = vlq & VLQ_BASE_MASK;
      vlq >>>= VLQ_BASE_SHIFT;
      if (vlq > 0) {
        digit |= VLQ_CONTINUATION_BIT;
      }
      encoded += base642.encode(digit);
    } while (vlq > 0);
    return encoded;
  };
  base64Vlq.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
      if (aIndex >= strLen) {
        throw new Error("Expected more digits in base 64 VLQ value.");
      }
      digit = base642.decode(aStr.charCodeAt(aIndex++));
      if (digit === -1) {
        throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
      }
      continuation = !!(digit & VLQ_CONTINUATION_BIT);
      digit &= VLQ_BASE_MASK;
      result = result + (digit << shift);
      shift += VLQ_BASE_SHIFT;
    } while (continuation);
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
  };
  return base64Vlq;
}
var util = {};
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  (function(exports) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = "";
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ":";
      }
      url += "//";
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports.urlGenerate = urlGenerate;
    function normalize(aPath) {
      var path = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path = url.path;
      }
      var isAbsolute = exports.isAbsolute(path);
      var parts = path.split(/\/+/);
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path = parts.join("/");
      if (path === "") {
        path = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path;
        return urlGenerate(url);
      }
      return path;
    }
    exports.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports.join = join;
    exports.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports.relative = relative;
    var supportsNullProto = function() {
      var obj = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in obj);
    }();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 === null) {
        return 1;
      }
      if (aStr2 === null) {
        return -1;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
      return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
      sourceURL = sourceURL || "";
      if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
          sourceRoot += "/";
        }
        sourceURL = sourceRoot + sourceURL;
      }
      if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
          throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
          var index = parsed.path.lastIndexOf("/");
          if (index >= 0) {
            parsed.path = parsed.path.substring(0, index + 1);
          }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
      }
      return normalize(sourceURL);
    }
    exports.computeSourceURL = computeSourceURL;
  })(util);
  return util;
}
var arraySet = {};
var hasRequiredArraySet;
function requireArraySet() {
  if (hasRequiredArraySet) return arraySet;
  hasRequiredArraySet = 1;
  var util2 = requireUtil();
  var has = Object.prototype.hasOwnProperty;
  var hasNativeMap = typeof Map !== "undefined";
  function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for (var i = 0, len = aArray.length; i < len; i++) {
      set.add(aArray[i], aAllowDuplicates);
    }
    return set;
  };
  ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util2.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
      this._array.push(aStr);
    }
    if (!isDuplicate) {
      if (hasNativeMap) {
        this._set.set(aStr, idx);
      } else {
        this._set[sStr] = idx;
      }
    }
  };
  ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) {
      return this._set.has(aStr);
    } else {
      var sStr = util2.toSetString(aStr);
      return has.call(this._set, sStr);
    }
  };
  ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
      var idx = this._set.get(aStr);
      if (idx >= 0) {
        return idx;
      }
    } else {
      var sStr = util2.toSetString(aStr);
      if (has.call(this._set, sStr)) {
        return this._set[sStr];
      }
    }
    throw new Error('"' + aStr + '" is not in the set.');
  };
  ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
      return this._array[aIdx];
    }
    throw new Error("No element indexed by " + aIdx);
  };
  ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
  };
  arraySet.ArraySet = ArraySet;
  return arraySet;
}
var mappingList = {};
var hasRequiredMappingList;
function requireMappingList() {
  if (hasRequiredMappingList) return mappingList;
  hasRequiredMappingList = 1;
  var util2 = requireUtil();
  function generatedPositionAfter(mappingA, mappingB) {
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util2.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
  }
  function MappingList() {
    this._array = [];
    this._sorted = true;
    this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };
  MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
      this._last = aMapping;
      this._array.push(aMapping);
    } else {
      this._sorted = false;
      this._array.push(aMapping);
    }
  };
  MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
      this._array.sort(util2.compareByGeneratedPositionsInflated);
      this._sorted = true;
    }
    return this._array;
  };
  mappingList.MappingList = MappingList;
  return mappingList;
}
var hasRequiredSourceMapGenerator;
function requireSourceMapGenerator() {
  if (hasRequiredSourceMapGenerator) return sourceMapGenerator;
  hasRequiredSourceMapGenerator = 1;
  var base64VLQ = requireBase64Vlq();
  var util2 = requireUtil();
  var ArraySet = requireArraySet().ArraySet;
  var MappingList = requireMappingList().MappingList;
  function SourceMapGenerator(aArgs) {
    if (!aArgs) {
      aArgs = {};
    }
    this._file = util2.getArg(aArgs, "file", null);
    this._sourceRoot = util2.getArg(aArgs, "sourceRoot", null);
    this._skipValidation = util2.getArg(aArgs, "skipValidation", false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
  }
  SourceMapGenerator.prototype._version = 3;
  SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };
      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util2.relative(sourceRoot, newMapping.source);
        }
        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };
        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }
      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util2.relative(sourceRoot, sourceFile);
      }
      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };
  SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util2.getArg(aArgs, "generated");
    var original = util2.getArg(aArgs, "original", null);
    var source = util2.getArg(aArgs, "source", null);
    var name = util2.getArg(aArgs, "name", null);
    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }
    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }
    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }
    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source,
      name
    });
  };
  SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util2.relative(this._sourceRoot, source);
    }
    if (aSourceContent != null) {
      if (!this._sourcesContents) {
        this._sourcesContents = /* @__PURE__ */ Object.create(null);
      }
      this._sourcesContents[util2.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      delete this._sourcesContents[util2.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };
  SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    if (sourceRoot != null) {
      sourceFile = util2.relative(sourceRoot, sourceFile);
    }
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    this._mappings.unsortedForEach(function(mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util2.join(aSourceMapPath, mapping.source);
          }
          if (sourceRoot != null) {
            mapping.source = util2.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }
      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }
      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }
    }, this);
    this._sources = newSources;
    this._names = newNames;
    aSourceMapConsumer.sources.forEach(function(sourceFile2) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile2 = util2.join(aSourceMapPath, sourceFile2);
        }
        if (sourceRoot != null) {
          sourceFile2 = util2.relative(sourceRoot, sourceFile2);
        }
        this.setSourceContent(sourceFile2, content);
      }
    }, this);
  };
  SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    }
    if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
      return;
    } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
      return;
    } else {
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };
  SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = "";
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = "";
      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ";";
          previousGeneratedLine++;
        }
      } else {
        if (i > 0) {
          if (!util2.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ",";
        }
      }
      next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;
      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;
        next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;
        next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;
        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }
      result += next;
    }
    return result;
  };
  SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util2.relative(aSourceRoot, source);
      }
      var key = util2.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
  };
  SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }
    return map;
  };
  SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };
  sourceMapGenerator.SourceMapGenerator = SourceMapGenerator;
  return sourceMapGenerator;
}
var sourceMapConsumer = {};
var binarySearch = {};
var hasRequiredBinarySearch;
function requireBinarySearch() {
  if (hasRequiredBinarySearch) return binarySearch;
  hasRequiredBinarySearch = 1;
  (function(exports) {
    exports.GREATEST_LOWER_BOUND = 1;
    exports.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index = recursiveSearch(
        -1,
        aHaystack.length,
        aNeedle,
        aHaystack,
        aCompare,
        aBias || exports.GREATEST_LOWER_BOUND
      );
      if (index < 0) {
        return -1;
      }
      while (index - 1 >= 0) {
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
          break;
        }
        --index;
      }
      return index;
    };
  })(binarySearch);
  return binarySearch;
}
var quickSort = {};
var hasRequiredQuickSort;
function requireQuickSort() {
  if (hasRequiredQuickSort) return quickSort;
  hasRequiredQuickSort = 1;
  function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
  }
  function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
  }
  function doQuickSort(ary, comparator, p, r) {
    if (p < r) {
      var pivotIndex = randomIntInRange(p, r);
      var i = p - 1;
      swap(ary, pivotIndex, r);
      var pivot = ary[r];
      for (var j = p; j < r; j++) {
        if (comparator(ary[j], pivot) <= 0) {
          i += 1;
          swap(ary, i, j);
        }
      }
      swap(ary, i + 1, j);
      var q = i + 1;
      doQuickSort(ary, comparator, p, q - 1);
      doQuickSort(ary, comparator, q + 1, r);
    }
  }
  quickSort.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
  };
  return quickSort;
}
var hasRequiredSourceMapConsumer;
function requireSourceMapConsumer() {
  if (hasRequiredSourceMapConsumer) return sourceMapConsumer;
  hasRequiredSourceMapConsumer = 1;
  var util2 = requireUtil();
  var binarySearch2 = requireBinarySearch();
  var ArraySet = requireArraySet().ArraySet;
  var base64VLQ = requireBase64Vlq();
  var quickSort2 = requireQuickSort().quickSort;
  function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap2 = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap2 = util2.parseSourceMapInput(aSourceMap);
    }
    return sourceMap2.sections != null ? new IndexedSourceMapConsumer(sourceMap2, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap2, aSourceMapURL);
  }
  SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
  };
  SourceMapConsumer.prototype._version = 3;
  SourceMapConsumer.prototype.__generatedMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
      if (!this.__generatedMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }
      return this.__generatedMappings;
    }
  });
  SourceMapConsumer.prototype.__originalMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
      if (!this.__originalMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }
      return this.__originalMappings;
    }
  });
  SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };
  SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };
  SourceMapConsumer.GENERATED_ORDER = 1;
  SourceMapConsumer.ORIGINAL_ORDER = 2;
  SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
  SourceMapConsumer.LEAST_UPPER_BOUND = 2;
  SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch (order) {
      case SourceMapConsumer.GENERATED_ORDER:
        mappings = this._generatedMappings;
        break;
      case SourceMapConsumer.ORIGINAL_ORDER:
        mappings = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util2.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };
  SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util2.getArg(aArgs, "line");
    var needle = {
      source: util2.getArg(aArgs, "source"),
      originalLine: line,
      originalColumn: util2.getArg(aArgs, "column", 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }
    var mappings = [];
    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util2.compareByOriginalPositions,
      binarySearch2.LEAST_UPPER_BOUND
    );
    if (index >= 0) {
      var mapping = this._originalMappings[index];
      if (aArgs.column === void 0) {
        var originalLine = mapping.originalLine;
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util2.getArg(mapping, "generatedLine", null),
            column: util2.getArg(mapping, "generatedColumn", null),
            lastColumn: util2.getArg(mapping, "lastGeneratedColumn", null)
          });
          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;
        while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util2.getArg(mapping, "generatedLine", null),
            column: util2.getArg(mapping, "generatedColumn", null),
            lastColumn: util2.getArg(mapping, "lastGeneratedColumn", null)
          });
          mapping = this._originalMappings[++index];
        }
      }
    }
    return mappings;
  };
  sourceMapConsumer.SourceMapConsumer = SourceMapConsumer;
  function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap2 = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap2 = util2.parseSourceMapInput(aSourceMap);
    }
    var version = util2.getArg(sourceMap2, "version");
    var sources = util2.getArg(sourceMap2, "sources");
    var names = util2.getArg(sourceMap2, "names", []);
    var sourceRoot = util2.getArg(sourceMap2, "sourceRoot", null);
    var sourcesContent = util2.getArg(sourceMap2, "sourcesContent", null);
    var mappings = util2.getArg(sourceMap2, "mappings");
    var file = util2.getArg(sourceMap2, "file", null);
    if (version != this._version) {
      throw new Error("Unsupported version: " + version);
    }
    if (sourceRoot) {
      sourceRoot = util2.normalize(sourceRoot);
    }
    sources = sources.map(String).map(util2.normalize).map(function(source) {
      return sourceRoot && util2.isAbsolute(sourceRoot) && util2.isAbsolute(source) ? util2.relative(sourceRoot, source) : source;
    });
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
      return util2.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
  }
  BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
  BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util2.relative(this.sourceRoot, relativeSource);
    }
    if (this._sources.has(relativeSource)) {
      return this._sources.indexOf(relativeSource);
    }
    var i;
    for (i = 0; i < this._absoluteSources.length; ++i) {
      if (this._absoluteSources[i] == aSource) {
        return i;
      }
    }
    return -1;
  };
  BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(
      smc._sources.toArray(),
      smc.sourceRoot
    );
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
      return util2.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping();
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;
      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;
        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }
        destOriginalMappings.push(destMapping);
      }
      destGeneratedMappings.push(destMapping);
    }
    quickSort2(smc.__originalMappings, util2.compareByOriginalPositions);
    return smc;
  };
  BasicSourceMapConsumer.prototype._version = 3;
  Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
  }
  BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while (index < length) {
      if (aStr.charAt(index) === ";") {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      } else if (aStr.charAt(index) === ",") {
        index++;
      } else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);
        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }
          if (segment.length === 2) {
            throw new Error("Found a source, but no line and column");
          }
          if (segment.length === 3) {
            throw new Error("Found a source and line, but no column");
          }
          cachedSegments[str] = segment;
        }
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;
        if (segment.length > 1) {
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          mapping.originalLine += 1;
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;
          if (segment.length > 4) {
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }
        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === "number") {
          originalMappings.push(mapping);
        }
      }
    }
    quickSort2(generatedMappings, util2.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort2(originalMappings, util2.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };
  BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    if (aNeedle[aLineName] <= 0) {
      throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
    }
    return binarySearch2.search(aNeedle, aMappings, aComparator, aBias);
  };
  BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];
        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }
      mapping.lastGeneratedColumn = Infinity;
    }
  };
  BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util2.getArg(aArgs, "line"),
      generatedColumn: util2.getArg(aArgs, "column")
    };
    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util2.compareByGeneratedPositionsDeflated,
      util2.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
    );
    if (index >= 0) {
      var mapping = this._generatedMappings[index];
      if (mapping.generatedLine === needle.generatedLine) {
        var source = util2.getArg(mapping, "source", null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util2.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util2.getArg(mapping, "name", null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source,
          line: util2.getArg(mapping, "originalLine", null),
          column: util2.getArg(mapping, "originalColumn", null),
          name
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };
  BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
      return sc == null;
    });
  };
  BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }
    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util2.relative(this.sourceRoot, relativeSource);
    }
    var url;
    if (this.sourceRoot != null && (url = util2.urlParse(this.sourceRoot))) {
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
      }
      if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }
    if (nullOnMissing) {
      return null;
    } else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };
  BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util2.getArg(aArgs, "source");
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    var needle = {
      source,
      originalLine: util2.getArg(aArgs, "line"),
      originalColumn: util2.getArg(aArgs, "column")
    };
    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util2.compareByOriginalPositions,
      util2.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
    );
    if (index >= 0) {
      var mapping = this._originalMappings[index];
      if (mapping.source === needle.source) {
        return {
          line: util2.getArg(mapping, "generatedLine", null),
          column: util2.getArg(mapping, "generatedColumn", null),
          lastColumn: util2.getArg(mapping, "lastGeneratedColumn", null)
        };
      }
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };
  sourceMapConsumer.BasicSourceMapConsumer = BasicSourceMapConsumer;
  function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap2 = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap2 = util2.parseSourceMapInput(aSourceMap);
    }
    var version = util2.getArg(sourceMap2, "version");
    var sections = util2.getArg(sourceMap2, "sections");
    if (version != this._version) {
      throw new Error("Unsupported version: " + version);
    }
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
      line: -1,
      column: 0
    };
    this._sections = sections.map(function(s) {
      if (s.url) {
        throw new Error("Support for url field in sections not implemented.");
      }
      var offset = util2.getArg(s, "offset");
      var offsetLine = util2.getArg(offset, "line");
      var offsetColumn = util2.getArg(offset, "column");
      if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
        throw new Error("Section offsets must be ordered and non-overlapping.");
      }
      lastOffset = offset;
      return {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: offsetLine + 1,
          generatedColumn: offsetColumn + 1
        },
        consumer: new SourceMapConsumer(util2.getArg(s, "map"), aSourceMapURL)
      };
    });
  }
  IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
  IndexedSourceMapConsumer.prototype._version = 3;
  Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
    get: function() {
      var sources = [];
      for (var i = 0; i < this._sections.length; i++) {
        for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
          sources.push(this._sections[i].consumer.sources[j]);
        }
      }
      return sources;
    }
  });
  IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util2.getArg(aArgs, "line"),
      generatedColumn: util2.getArg(aArgs, "column")
    };
    var sectionIndex = binarySearch2.search(
      needle,
      this._sections,
      function(needle2, section2) {
        var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }
        return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
      }
    );
    var section = this._sections[sectionIndex];
    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }
    return section.consumer.originalPositionFor({
      line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
      bias: aArgs.bias
    });
  };
  IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };
  IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    } else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };
  IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      if (section.consumer._findSourceIndex(util2.getArg(aArgs, "source")) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
        };
        return ret;
      }
    }
    return {
      line: null,
      column: null
    };
  };
  IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];
        var source = section.consumer._sources.at(mapping.source);
        source = util2.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);
        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }
        var adjustedMapping = {
          source,
          generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name
        };
        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === "number") {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }
    quickSort2(this.__generatedMappings, util2.compareByGeneratedPositionsDeflated);
    quickSort2(this.__originalMappings, util2.compareByOriginalPositions);
  };
  sourceMapConsumer.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  return sourceMapConsumer;
}
var sourceNode = {};
var hasRequiredSourceNode;
function requireSourceNode() {
  if (hasRequiredSourceNode) return sourceNode;
  hasRequiredSourceNode = 1;
  var SourceMapGenerator = requireSourceMapGenerator().SourceMapGenerator;
  var util2 = requireUtil();
  var REGEX_NEWLINE = /(\r?\n)/;
  var NEWLINE_CODE = 10;
  var isSourceNode = "$$$isSourceNode$$$";
  function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
  }
  SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    var node = new SourceNode();
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      var newLine = getNextLine() || "";
      return lineContents + newLine;
      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
      }
    };
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
      if (lastMapping !== null) {
        if (lastGeneratedLine < mapping.generatedLine) {
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
        } else {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          var code2 = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code2);
          lastMapping = mapping;
          return;
        }
      }
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || "";
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util2.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });
    return node;
    function addMappingWithCode(mapping, code2) {
      if (mapping === null || mapping.source === void 0) {
        node.add(code2);
      } else {
        var source = aRelativePath ? util2.join(aRelativePath, mapping.source) : mapping.source;
        node.add(new SourceNode(
          mapping.originalLine,
          mapping.originalColumn,
          source,
          code2,
          mapping.name
        ));
      }
    }
  };
  SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
      aChunk.forEach(function(chunk) {
        this.add(chunk);
      }, this);
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      if (aChunk) {
        this.children.push(aChunk);
      }
    } else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };
  SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
      for (var i = aChunk.length - 1; i >= 0; i--) {
        this.prepend(aChunk[i]);
      }
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      this.children.unshift(aChunk);
    } else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };
  SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for (var i = 0, len = this.children.length; i < len; i++) {
      chunk = this.children[i];
      if (chunk[isSourceNode]) {
        chunk.walk(aFn);
      } else {
        if (chunk !== "") {
          aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
          });
        }
      }
    }
  };
  SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
      newChildren = [];
      for (i = 0; i < len - 1; i++) {
        newChildren.push(this.children[i]);
        newChildren.push(aSep);
      }
      newChildren.push(this.children[i]);
      this.children = newChildren;
    }
    return this;
  };
  SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) {
      lastChild.replaceRight(aPattern, aReplacement);
    } else if (typeof lastChild === "string") {
      this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    } else {
      this.children.push("".replace(aPattern, aReplacement));
    }
    return this;
  };
  SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util2.toSetString(aSourceFile)] = aSourceContent;
  };
  SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }
    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util2.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };
  SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
      str += chunk;
    });
    return str;
  };
  SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
      code: "",
      line: 1,
      column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
      generated.code += chunk;
      if (original.source !== null && original.line !== null && original.column !== null) {
        if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
        lastOriginalSource = original.source;
        lastOriginalLine = original.line;
        lastOriginalColumn = original.column;
        lastOriginalName = original.name;
        sourceMappingActive = true;
      } else if (sourceMappingActive) {
        map.addMapping({
          generated: {
            line: generated.line,
            column: generated.column
          }
        });
        lastOriginalSource = null;
        sourceMappingActive = false;
      }
      for (var idx = 0, length = chunk.length; idx < length; idx++) {
        if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
          generated.line++;
          generated.column = 0;
          if (idx + 1 === length) {
            lastOriginalSource = null;
            sourceMappingActive = false;
          } else if (sourceMappingActive) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
        } else {
          generated.column++;
        }
      }
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
      map.setSourceContent(sourceFile, sourceContent);
    });
    return { code: generated.code, map };
  };
  sourceNode.SourceNode = SourceNode;
  return sourceNode;
}
var hasRequiredSourceMap;
function requireSourceMap() {
  if (hasRequiredSourceMap) return sourceMap;
  hasRequiredSourceMap = 1;
  sourceMap.SourceMapGenerator = requireSourceMapGenerator().SourceMapGenerator;
  sourceMap.SourceMapConsumer = requireSourceMapConsumer().SourceMapConsumer;
  sourceMap.SourceNode = requireSourceNode().SourceNode;
  return sourceMap;
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredMessageCompiler_cjs_prod;
function requireMessageCompiler_cjs_prod() {
  if (hasRequiredMessageCompiler_cjs_prod) return messageCompiler_cjs_prod;
  hasRequiredMessageCompiler_cjs_prod = 1;
  Object.defineProperty(messageCompiler_cjs_prod, "__esModule", { value: true });
  var shared2 = sharedExports;
  var sourceMap2 = requireSourceMap();
  const CompileErrorCodes = {
    // tokenizer error codes
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    // parser error codes
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    // Special value for higher-order compilers to pick up the last code
    // to avoid collision of error codes. This should always be kept as the last
    // item.
    __EXTEND_POINT__: 15
  };
  const errorMessages2 = {
    // tokenizer error messages
    [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
    [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
    [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
    [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
    [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
    [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
    [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
    [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
    [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
    [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
    // parser error messages
    [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
    [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
    [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
    [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`
  };
  function createCompileError(code2, loc, options = {}) {
    const { domain, messages, args } = options;
    const msg = code2;
    const error = new SyntaxError(String(msg));
    error.code = code2;
    if (loc) {
      error.location = loc;
    }
    error.domain = domain;
    return error;
  }
  function defaultOnError(error) {
    throw error;
  }
  const LocationStub = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 }
  };
  function createPosition(line, column, offset) {
    return { line, column, offset };
  }
  function createLocation(start, end, source) {
    const loc = { start, end };
    if (source != null) {
      loc.source = source;
    }
    return loc;
  }
  const CHAR_SP = " ";
  const CHAR_CR = "\r";
  const CHAR_LF = "\n";
  const CHAR_LS = String.fromCharCode(8232);
  const CHAR_PS = String.fromCharCode(8233);
  function createScanner(str) {
    const _buf = str;
    let _index = 0;
    let _line = 1;
    let _column = 1;
    let _peekOffset = 0;
    const isCRLF = (index2) => _buf[index2] === CHAR_CR && _buf[index2 + 1] === CHAR_LF;
    const isLF = (index2) => _buf[index2] === CHAR_LF;
    const isPS = (index2) => _buf[index2] === CHAR_PS;
    const isLS = (index2) => _buf[index2] === CHAR_LS;
    const isLineEnd = (index2) => isCRLF(index2) || isLF(index2) || isPS(index2) || isLS(index2);
    const index = () => _index;
    const line = () => _line;
    const column = () => _column;
    const peekOffset = () => _peekOffset;
    const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
    const currentChar = () => charAt(_index);
    const currentPeek = () => charAt(_index + _peekOffset);
    function next() {
      _peekOffset = 0;
      if (isLineEnd(_index)) {
        _line++;
        _column = 0;
      }
      if (isCRLF(_index)) {
        _index++;
      }
      _index++;
      _column++;
      return _buf[_index];
    }
    function peek() {
      if (isCRLF(_index + _peekOffset)) {
        _peekOffset++;
      }
      _peekOffset++;
      return _buf[_index + _peekOffset];
    }
    function reset() {
      _index = 0;
      _line = 1;
      _column = 1;
      _peekOffset = 0;
    }
    function resetPeek(offset = 0) {
      _peekOffset = offset;
    }
    function skipToPeek() {
      const target = _index + _peekOffset;
      while (target !== _index) {
        next();
      }
      _peekOffset = 0;
    }
    return {
      index,
      line,
      column,
      peekOffset,
      charAt,
      currentChar,
      currentPeek,
      next,
      peek,
      reset,
      resetPeek,
      skipToPeek
    };
  }
  const EOF = void 0;
  const LITERAL_DELIMITER = "'";
  const ERROR_DOMAIN$1 = "tokenizer";
  function createTokenizer(source, options = {}) {
    const location = options.location !== false;
    const _scnr = createScanner(source);
    const currentOffset = () => _scnr.index();
    const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
    const _initLoc = currentPosition();
    const _initOffset = currentOffset();
    const _context = {
      currentType: 14,
      offset: _initOffset,
      startLoc: _initLoc,
      endLoc: _initLoc,
      lastType: 14,
      lastOffset: _initOffset,
      lastStartLoc: _initLoc,
      lastEndLoc: _initLoc,
      braceNest: 0,
      inLinked: false,
      text: ""
    };
    const context = () => _context;
    const { onError } = options;
    function emitError(code2, pos, offset, ...args) {
      const ctx = context();
      pos.column += offset;
      pos.offset += offset;
      if (onError) {
        const loc = createLocation(ctx.startLoc, pos);
        const err = createCompileError(code2, loc, {
          domain: ERROR_DOMAIN$1,
          args
        });
        onError(err);
      }
    }
    function getToken(context2, type, value) {
      context2.endLoc = currentPosition();
      context2.currentType = type;
      const token = { type };
      if (location) {
        token.loc = createLocation(context2.startLoc, context2.endLoc);
      }
      if (value != null) {
        token.value = value;
      }
      return token;
    }
    const getEndToken = (context2) => getToken(
      context2,
      14
      /* EOF */
    );
    function eat(scnr, ch) {
      if (scnr.currentChar() === ch) {
        scnr.next();
        return ch;
      } else {
        emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
        return "";
      }
    }
    function peekSpaces(scnr) {
      let buf = "";
      while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
        buf += scnr.currentPeek();
        scnr.peek();
      }
      return buf;
    }
    function skipSpaces(scnr) {
      const buf = peekSpaces(scnr);
      scnr.skipToPeek();
      return buf;
    }
    function isIdentifierStart(ch) {
      if (ch === EOF) {
        return false;
      }
      const cc = ch.charCodeAt(0);
      return cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc === 95;
    }
    function isNumberStart(ch) {
      if (ch === EOF) {
        return false;
      }
      const cc = ch.charCodeAt(0);
      return cc >= 48 && cc <= 57;
    }
    function isNamedIdentifierStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 2) {
        return false;
      }
      peekSpaces(scnr);
      const ret = isIdentifierStart(scnr.currentPeek());
      scnr.resetPeek();
      return ret;
    }
    function isListIdentifierStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 2) {
        return false;
      }
      peekSpaces(scnr);
      const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
      const ret = isNumberStart(ch);
      scnr.resetPeek();
      return ret;
    }
    function isLiteralStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 2) {
        return false;
      }
      peekSpaces(scnr);
      const ret = scnr.currentPeek() === LITERAL_DELIMITER;
      scnr.resetPeek();
      return ret;
    }
    function isLinkedDotStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 8) {
        return false;
      }
      peekSpaces(scnr);
      const ret = scnr.currentPeek() === ".";
      scnr.resetPeek();
      return ret;
    }
    function isLinkedModifierStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 9) {
        return false;
      }
      peekSpaces(scnr);
      const ret = isIdentifierStart(scnr.currentPeek());
      scnr.resetPeek();
      return ret;
    }
    function isLinkedDelimiterStart(scnr, context2) {
      const { currentType } = context2;
      if (!(currentType === 8 || currentType === 12)) {
        return false;
      }
      peekSpaces(scnr);
      const ret = scnr.currentPeek() === ":";
      scnr.resetPeek();
      return ret;
    }
    function isLinkedReferStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 10) {
        return false;
      }
      const fn = () => {
        const ch = scnr.currentPeek();
        if (ch === "{") {
          return isIdentifierStart(scnr.peek());
        } else if (ch === "@" || ch === "%" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
          return false;
        } else if (ch === CHAR_LF) {
          scnr.peek();
          return fn();
        } else {
          return isIdentifierStart(ch);
        }
      };
      const ret = fn();
      scnr.resetPeek();
      return ret;
    }
    function isPluralStart(scnr) {
      peekSpaces(scnr);
      const ret = scnr.currentPeek() === "|";
      scnr.resetPeek();
      return ret;
    }
    function detectModuloStart(scnr) {
      const spaces = peekSpaces(scnr);
      const ret = scnr.currentPeek() === "%" && scnr.peek() === "{";
      scnr.resetPeek();
      return {
        isModulo: ret,
        hasSpace: spaces.length > 0
      };
    }
    function isTextStart(scnr, reset = true) {
      const fn = (hasSpace = false, prev = "", detectModulo = false) => {
        const ch = scnr.currentPeek();
        if (ch === "{") {
          return prev === "%" ? false : hasSpace;
        } else if (ch === "@" || !ch) {
          return prev === "%" ? true : hasSpace;
        } else if (ch === "%") {
          scnr.peek();
          return fn(hasSpace, "%", true);
        } else if (ch === "|") {
          return prev === "%" || detectModulo ? true : !(prev === CHAR_SP || prev === CHAR_LF);
        } else if (ch === CHAR_SP) {
          scnr.peek();
          return fn(true, CHAR_SP, detectModulo);
        } else if (ch === CHAR_LF) {
          scnr.peek();
          return fn(true, CHAR_LF, detectModulo);
        } else {
          return true;
        }
      };
      const ret = fn();
      reset && scnr.resetPeek();
      return ret;
    }
    function takeChar(scnr, fn) {
      const ch = scnr.currentChar();
      if (ch === EOF) {
        return EOF;
      }
      if (fn(ch)) {
        scnr.next();
        return ch;
      }
      return null;
    }
    function takeIdentifierChar(scnr) {
      const closure = (ch) => {
        const cc = ch.charCodeAt(0);
        return cc >= 97 && cc <= 122 || // a-z
        cc >= 65 && cc <= 90 || // A-Z
        cc >= 48 && cc <= 57 || // 0-9
        cc === 95 || // _
        cc === 36;
      };
      return takeChar(scnr, closure);
    }
    function takeDigit(scnr) {
      const closure = (ch) => {
        const cc = ch.charCodeAt(0);
        return cc >= 48 && cc <= 57;
      };
      return takeChar(scnr, closure);
    }
    function takeHexDigit(scnr) {
      const closure = (ch) => {
        const cc = ch.charCodeAt(0);
        return cc >= 48 && cc <= 57 || // 0-9
        cc >= 65 && cc <= 70 || // A-F
        cc >= 97 && cc <= 102;
      };
      return takeChar(scnr, closure);
    }
    function getDigits(scnr) {
      let ch = "";
      let num = "";
      while (ch = takeDigit(scnr)) {
        num += ch;
      }
      return num;
    }
    function readModulo(scnr) {
      skipSpaces(scnr);
      const ch = scnr.currentChar();
      if (ch !== "%") {
        emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      }
      scnr.next();
      return "%";
    }
    function readText(scnr) {
      let buf = "";
      while (true) {
        const ch = scnr.currentChar();
        if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
          break;
        } else if (ch === "%") {
          if (isTextStart(scnr)) {
            buf += ch;
            scnr.next();
          } else {
            break;
          }
        } else if (ch === CHAR_SP || ch === CHAR_LF) {
          if (isTextStart(scnr)) {
            buf += ch;
            scnr.next();
          } else if (isPluralStart(scnr)) {
            break;
          } else {
            buf += ch;
            scnr.next();
          }
        } else {
          buf += ch;
          scnr.next();
        }
      }
      return buf;
    }
    function readNamedIdentifier(scnr) {
      skipSpaces(scnr);
      let ch = "";
      let name = "";
      while (ch = takeIdentifierChar(scnr)) {
        name += ch;
      }
      if (scnr.currentChar() === EOF) {
        emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
      }
      return name;
    }
    function readListIdentifier(scnr) {
      skipSpaces(scnr);
      let value = "";
      if (scnr.currentChar() === "-") {
        scnr.next();
        value += `-${getDigits(scnr)}`;
      } else {
        value += getDigits(scnr);
      }
      if (scnr.currentChar() === EOF) {
        emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
      }
      return value;
    }
    function readLiteral(scnr) {
      skipSpaces(scnr);
      eat(scnr, `'`);
      let ch = "";
      let literal = "";
      const fn = (x) => x !== LITERAL_DELIMITER && x !== CHAR_LF;
      while (ch = takeChar(scnr, fn)) {
        if (ch === "\\") {
          literal += readEscapeSequence(scnr);
        } else {
          literal += ch;
        }
      }
      const current = scnr.currentChar();
      if (current === CHAR_LF || current === EOF) {
        emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
        if (current === CHAR_LF) {
          scnr.next();
          eat(scnr, `'`);
        }
        return literal;
      }
      eat(scnr, `'`);
      return literal;
    }
    function readEscapeSequence(scnr) {
      const ch = scnr.currentChar();
      switch (ch) {
        case "\\":
        case `'`:
          scnr.next();
          return `\\${ch}`;
        case "u":
          return readUnicodeEscapeSequence(scnr, ch, 4);
        case "U":
          return readUnicodeEscapeSequence(scnr, ch, 6);
        default:
          emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
          return "";
      }
    }
    function readUnicodeEscapeSequence(scnr, unicode, digits) {
      eat(scnr, unicode);
      let sequence = "";
      for (let i = 0; i < digits; i++) {
        const ch = takeHexDigit(scnr);
        if (!ch) {
          emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
          break;
        }
        sequence += ch;
      }
      return `\\${unicode}${sequence}`;
    }
    function readInvalidIdentifier(scnr) {
      skipSpaces(scnr);
      let ch = "";
      let identifiers = "";
      const closure = (ch2) => ch2 !== "{" && ch2 !== "}" && ch2 !== CHAR_SP && ch2 !== CHAR_LF;
      while (ch = takeChar(scnr, closure)) {
        identifiers += ch;
      }
      return identifiers;
    }
    function readLinkedModifier(scnr) {
      let ch = "";
      let name = "";
      while (ch = takeIdentifierChar(scnr)) {
        name += ch;
      }
      return name;
    }
    function readLinkedRefer(scnr) {
      const fn = (detect = false, buf) => {
        const ch = scnr.currentChar();
        if (ch === "{" || ch === "%" || ch === "@" || ch === "|" || !ch) {
          return buf;
        } else if (ch === CHAR_SP) {
          return buf;
        } else if (ch === CHAR_LF) {
          buf += ch;
          scnr.next();
          return fn(detect, buf);
        } else {
          buf += ch;
          scnr.next();
          return fn(true, buf);
        }
      };
      return fn(false, "");
    }
    function readPlural(scnr) {
      skipSpaces(scnr);
      const plural = eat(
        scnr,
        "|"
        /* Pipe */
      );
      skipSpaces(scnr);
      return plural;
    }
    function readTokenInPlaceholder(scnr, context2) {
      let token = null;
      const ch = scnr.currentChar();
      switch (ch) {
        case "{":
          if (context2.braceNest >= 1) {
            emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
          }
          scnr.next();
          token = getToken(
            context2,
            2,
            "{"
            /* BraceLeft */
          );
          skipSpaces(scnr);
          context2.braceNest++;
          return token;
        case "}":
          if (context2.braceNest > 0 && context2.currentType === 2) {
            emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
          }
          scnr.next();
          token = getToken(
            context2,
            3,
            "}"
            /* BraceRight */
          );
          context2.braceNest--;
          context2.braceNest > 0 && skipSpaces(scnr);
          if (context2.inLinked && context2.braceNest === 0) {
            context2.inLinked = false;
          }
          return token;
        case "@":
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = readTokenInLinked(scnr, context2) || getEndToken(context2);
          context2.braceNest = 0;
          return token;
        default:
          let validNamedIdentifier = true;
          let validListIdentifier = true;
          let validLiteral = true;
          if (isPluralStart(scnr)) {
            if (context2.braceNest > 0) {
              emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            }
            token = getToken(context2, 1, readPlural(scnr));
            context2.braceNest = 0;
            context2.inLinked = false;
            return token;
          }
          if (context2.braceNest > 0 && (context2.currentType === 5 || context2.currentType === 6 || context2.currentType === 7)) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            context2.braceNest = 0;
            return readToken(scnr, context2);
          }
          if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
            token = getToken(context2, 5, readNamedIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
            token = getToken(context2, 6, readListIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validLiteral = isLiteralStart(scnr, context2)) {
            token = getToken(context2, 7, readLiteral(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
            token = getToken(context2, 13, readInvalidIdentifier(scnr));
            emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
            skipSpaces(scnr);
            return token;
          }
          break;
      }
      return token;
    }
    function readTokenInLinked(scnr, context2) {
      const { currentType } = context2;
      let token = null;
      const ch = scnr.currentChar();
      if ((currentType === 8 || currentType === 9 || currentType === 12 || currentType === 10) && (ch === CHAR_LF || ch === CHAR_SP)) {
        emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
      }
      switch (ch) {
        case "@":
          scnr.next();
          token = getToken(
            context2,
            8,
            "@"
            /* LinkedAlias */
          );
          context2.inLinked = true;
          return token;
        case ".":
          skipSpaces(scnr);
          scnr.next();
          return getToken(
            context2,
            9,
            "."
            /* LinkedDot */
          );
        case ":":
          skipSpaces(scnr);
          scnr.next();
          return getToken(
            context2,
            10,
            ":"
            /* LinkedDelimiter */
          );
        default:
          if (isPluralStart(scnr)) {
            token = getToken(context2, 1, readPlural(scnr));
            context2.braceNest = 0;
            context2.inLinked = false;
            return token;
          }
          if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
            skipSpaces(scnr);
            return readTokenInLinked(scnr, context2);
          }
          if (isLinkedModifierStart(scnr, context2)) {
            skipSpaces(scnr);
            return getToken(context2, 12, readLinkedModifier(scnr));
          }
          if (isLinkedReferStart(scnr, context2)) {
            skipSpaces(scnr);
            if (ch === "{") {
              return readTokenInPlaceholder(scnr, context2) || token;
            } else {
              return getToken(context2, 11, readLinkedRefer(scnr));
            }
          }
          if (currentType === 8) {
            emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
          }
          context2.braceNest = 0;
          context2.inLinked = false;
          return readToken(scnr, context2);
      }
    }
    function readToken(scnr, context2) {
      let token = {
        type: 14
        /* EOF */
      };
      if (context2.braceNest > 0) {
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      }
      if (context2.inLinked) {
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      }
      const ch = scnr.currentChar();
      switch (ch) {
        case "{":
          return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
        case "}":
          emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
          scnr.next();
          return getToken(
            context2,
            3,
            "}"
            /* BraceRight */
          );
        case "@":
          return readTokenInLinked(scnr, context2) || getEndToken(context2);
        default:
          if (isPluralStart(scnr)) {
            token = getToken(context2, 1, readPlural(scnr));
            context2.braceNest = 0;
            context2.inLinked = false;
            return token;
          }
          const { isModulo, hasSpace } = detectModuloStart(scnr);
          if (isModulo) {
            return hasSpace ? getToken(context2, 0, readText(scnr)) : getToken(context2, 4, readModulo(scnr));
          }
          if (isTextStart(scnr)) {
            return getToken(context2, 0, readText(scnr));
          }
          break;
      }
      return token;
    }
    function nextToken() {
      const { currentType, offset, startLoc, endLoc } = _context;
      _context.lastType = currentType;
      _context.lastOffset = offset;
      _context.lastStartLoc = startLoc;
      _context.lastEndLoc = endLoc;
      _context.offset = currentOffset();
      _context.startLoc = currentPosition();
      if (_scnr.currentChar() === EOF) {
        return getToken(
          _context,
          14
          /* EOF */
        );
      }
      return readToken(_scnr, _context);
    }
    return {
      nextToken,
      currentOffset,
      currentPosition,
      context
    };
  }
  const ERROR_DOMAIN = "parser";
  const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
  function fromEscapeSequence(match, codePoint4, codePoint6) {
    switch (match) {
      case `\\\\`:
        return `\\`;
      case `\\'`:
        return `'`;
      default: {
        const codePoint = parseInt(codePoint4 || codePoint6, 16);
        if (codePoint <= 55295 || codePoint >= 57344) {
          return String.fromCodePoint(codePoint);
        }
        return "�";
      }
    }
  }
  function createParser(options = {}) {
    const location = options.location !== false;
    const { onError } = options;
    function emitError(tokenzer, code2, start, offset, ...args) {
      const end = tokenzer.currentPosition();
      end.offset += offset;
      end.column += offset;
      if (onError) {
        const loc = createLocation(start, end);
        const err = createCompileError(code2, loc, {
          domain: ERROR_DOMAIN,
          args
        });
        onError(err);
      }
    }
    function startNode(type, offset, loc) {
      const node = {
        type,
        start: offset,
        end: offset
      };
      if (location) {
        node.loc = { start: loc, end: loc };
      }
      return node;
    }
    function endNode(node, offset, pos, type) {
      node.end = offset;
      if (location && node.loc) {
        node.loc.end = pos;
      }
    }
    function parseText(tokenizer, value) {
      const context = tokenizer.context();
      const node = startNode(3, context.offset, context.startLoc);
      node.value = value;
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseList(tokenizer, index) {
      const context = tokenizer.context();
      const { lastOffset: offset, lastStartLoc: loc } = context;
      const node = startNode(5, offset, loc);
      node.index = parseInt(index, 10);
      tokenizer.nextToken();
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseNamed(tokenizer, key) {
      const context = tokenizer.context();
      const { lastOffset: offset, lastStartLoc: loc } = context;
      const node = startNode(4, offset, loc);
      node.key = key;
      tokenizer.nextToken();
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseLiteral(tokenizer, value) {
      const context = tokenizer.context();
      const { lastOffset: offset, lastStartLoc: loc } = context;
      const node = startNode(9, offset, loc);
      node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
      tokenizer.nextToken();
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseLinkedModifier(tokenizer) {
      const token = tokenizer.nextToken();
      const context = tokenizer.context();
      const { lastOffset: offset, lastStartLoc: loc } = context;
      const node = startNode(8, offset, loc);
      if (token.type !== 12) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
        node.value = "";
        endNode(node, offset, loc);
        return {
          nextConsumeToken: token,
          node
        };
      }
      if (token.value == null) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
      }
      node.value = token.value || "";
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return {
        node
      };
    }
    function parseLinkedKey(tokenizer, value) {
      const context = tokenizer.context();
      const node = startNode(7, context.offset, context.startLoc);
      node.value = value;
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseLinked(tokenizer) {
      const context = tokenizer.context();
      const linkedNode = startNode(6, context.offset, context.startLoc);
      let token = tokenizer.nextToken();
      if (token.type === 9) {
        const parsed = parseLinkedModifier(tokenizer);
        linkedNode.modifier = parsed.node;
        token = parsed.nextConsumeToken || tokenizer.nextToken();
      }
      if (token.type !== 10) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
      }
      token = tokenizer.nextToken();
      if (token.type === 2) {
        token = tokenizer.nextToken();
      }
      switch (token.type) {
        case 11:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseNamed(tokenizer, token.value || "");
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseList(tokenizer, token.value || "");
          break;
        case 7:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseLiteral(tokenizer, token.value || "");
          break;
        default:
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
          const nextContext = tokenizer.context();
          const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
          emptyLinkedKeyNode.value = "";
          endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
          linkedNode.key = emptyLinkedKeyNode;
          endNode(linkedNode, nextContext.offset, nextContext.startLoc);
          return {
            nextConsumeToken: token,
            node: linkedNode
          };
      }
      endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
      return {
        node: linkedNode
      };
    }
    function parseMessage(tokenizer) {
      const context = tokenizer.context();
      const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
      const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
      const node = startNode(2, startOffset, startLoc);
      node.items = [];
      let nextToken = null;
      do {
        const token = nextToken || tokenizer.nextToken();
        nextToken = null;
        switch (token.type) {
          case 0:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseText(tokenizer, token.value || ""));
            break;
          case 6:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseList(tokenizer, token.value || ""));
            break;
          case 5:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseNamed(tokenizer, token.value || ""));
            break;
          case 7:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseLiteral(tokenizer, token.value || ""));
            break;
          case 8:
            const parsed = parseLinked(tokenizer);
            node.items.push(parsed.node);
            nextToken = parsed.nextConsumeToken || null;
            break;
        }
      } while (context.currentType !== 14 && context.currentType !== 1);
      const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
      const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
      endNode(node, endOffset, endLoc);
      return node;
    }
    function parsePlural(tokenizer, offset, loc, msgNode) {
      const context = tokenizer.context();
      let hasEmptyMessage = msgNode.items.length === 0;
      const node = startNode(1, offset, loc);
      node.cases = [];
      node.cases.push(msgNode);
      do {
        const msg = parseMessage(tokenizer);
        if (!hasEmptyMessage) {
          hasEmptyMessage = msg.items.length === 0;
        }
        node.cases.push(msg);
      } while (context.currentType !== 14);
      if (hasEmptyMessage) {
        emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
      }
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseResource(tokenizer) {
      const context = tokenizer.context();
      const { offset, startLoc } = context;
      const msgNode = parseMessage(tokenizer);
      if (context.currentType === 14) {
        return msgNode;
      } else {
        return parsePlural(tokenizer, offset, startLoc, msgNode);
      }
    }
    function parse(source) {
      const tokenizer = createTokenizer(source, shared2.assign({}, options));
      const context = tokenizer.context();
      const node = startNode(0, context.offset, context.startLoc);
      if (location && node.loc) {
        node.loc.source = source;
      }
      node.body = parseResource(tokenizer);
      if (context.currentType !== 14) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
      }
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    return { parse };
  }
  function getTokenCaption(token) {
    if (token.type === 14) {
      return "EOF";
    }
    const name = (token.value || "").replace(/\r?\n/gu, "\\n");
    return name.length > 10 ? name.slice(0, 9) + "…" : name;
  }
  function createTransformer(ast, options = {}) {
    const _context = {
      ast,
      helpers: /* @__PURE__ */ new Set()
    };
    const context = () => _context;
    const helper = (name) => {
      _context.helpers.add(name);
      return name;
    };
    return { context, helper };
  }
  function traverseNodes(nodes, transformer) {
    for (let i = 0; i < nodes.length; i++) {
      traverseNode(nodes[i], transformer);
    }
  }
  function traverseNode(node, transformer) {
    switch (node.type) {
      case 1:
        traverseNodes(node.cases, transformer);
        transformer.helper(
          "plural"
          /* PLURAL */
        );
        break;
      case 2:
        traverseNodes(node.items, transformer);
        break;
      case 6:
        const linked = node;
        traverseNode(linked.key, transformer);
        transformer.helper(
          "linked"
          /* LINKED */
        );
        transformer.helper(
          "type"
          /* TYPE */
        );
        break;
      case 5:
        transformer.helper(
          "interpolate"
          /* INTERPOLATE */
        );
        transformer.helper(
          "list"
          /* LIST */
        );
        break;
      case 4:
        transformer.helper(
          "interpolate"
          /* INTERPOLATE */
        );
        transformer.helper(
          "named"
          /* NAMED */
        );
        break;
    }
  }
  function transform(ast, options = {}) {
    const transformer = createTransformer(ast);
    transformer.helper(
      "normalize"
      /* NORMALIZE */
    );
    ast.body && traverseNode(ast.body, transformer);
    const context = transformer.context();
    ast.helpers = Array.from(context.helpers);
  }
  function createCodeGenerator(ast, options) {
    const { sourceMap: sourceMap$1, filename, breakLineCode, needIndent: _needIndent } = options;
    const _context = {
      source: ast.loc.source,
      filename,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode,
      needIndent: _needIndent,
      indentLevel: 0
    };
    const context = () => _context;
    function push(code2, node) {
      _context.code += code2;
      if (_context.map) {
        if (node && node.loc && node.loc !== LocationStub) {
          addMapping(node.loc.start, getMappingName(node));
        }
        advancePositionWithSource(_context, code2);
      }
    }
    function _newline(n, withBreakLine = true) {
      const _breakLineCode = withBreakLine ? breakLineCode : "";
      push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
    }
    function indent(withNewLine = true) {
      const level = ++_context.indentLevel;
      withNewLine && _newline(level);
    }
    function deindent(withNewLine = true) {
      const level = --_context.indentLevel;
      withNewLine && _newline(level);
    }
    function newline() {
      _newline(_context.indentLevel);
    }
    const helper = (key) => `_${key}`;
    const needIndent = () => _context.needIndent;
    function addMapping(loc, name) {
      _context.map.addMapping({
        name,
        source: _context.filename,
        original: {
          line: loc.line,
          column: loc.column - 1
        },
        generated: {
          line: _context.line,
          column: _context.column - 1
        }
      });
    }
    if (sourceMap$1) {
      _context.map = new sourceMap2.SourceMapGenerator();
      _context.map.setSourceContent(filename, _context.source);
    }
    return {
      context,
      push,
      indent,
      deindent,
      newline,
      helper,
      needIndent
    };
  }
  function generateLinkedNode(generator, node) {
    const { helper } = generator;
    generator.push(`${helper(
      "linked"
      /* LINKED */
    )}(`);
    generateNode(generator, node.key);
    if (node.modifier) {
      generator.push(`, `);
      generateNode(generator, node.modifier);
      generator.push(`, _type`);
    } else {
      generator.push(`, undefined, _type`);
    }
    generator.push(`)`);
  }
  function generateMessageNode(generator, node) {
    const { helper, needIndent } = generator;
    generator.push(`${helper(
      "normalize"
      /* NORMALIZE */
    )}([`);
    generator.indent(needIndent());
    const length = node.items.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.items[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push("])");
  }
  function generatePluralNode(generator, node) {
    const { helper, needIndent } = generator;
    if (node.cases.length > 1) {
      generator.push(`${helper(
        "plural"
        /* PLURAL */
      )}([`);
      generator.indent(needIndent());
      const length = node.cases.length;
      for (let i = 0; i < length; i++) {
        generateNode(generator, node.cases[i]);
        if (i === length - 1) {
          break;
        }
        generator.push(", ");
      }
      generator.deindent(needIndent());
      generator.push(`])`);
    }
  }
  function generateResource(generator, node) {
    if (node.body) {
      generateNode(generator, node.body);
    } else {
      generator.push("null");
    }
  }
  function generateNode(generator, node) {
    const { helper } = generator;
    switch (node.type) {
      case 0:
        generateResource(generator, node);
        break;
      case 1:
        generatePluralNode(generator, node);
        break;
      case 2:
        generateMessageNode(generator, node);
        break;
      case 6:
        generateLinkedNode(generator, node);
        break;
      case 8:
        generator.push(JSON.stringify(node.value), node);
        break;
      case 7:
        generator.push(JSON.stringify(node.value), node);
        break;
      case 5:
        generator.push(`${helper(
          "interpolate"
          /* INTERPOLATE */
        )}(${helper(
          "list"
          /* LIST */
        )}(${node.index}))`, node);
        break;
      case 4:
        generator.push(`${helper(
          "interpolate"
          /* INTERPOLATE */
        )}(${helper(
          "named"
          /* NAMED */
        )}(${JSON.stringify(node.key)}))`, node);
        break;
      case 9:
        generator.push(JSON.stringify(node.value), node);
        break;
      case 3:
        generator.push(JSON.stringify(node.value), node);
        break;
    }
  }
  const generate = (ast, options = {}) => {
    const mode = shared2.isString(options.mode) ? options.mode : "normal";
    const filename = shared2.isString(options.filename) ? options.filename : "message.intl";
    const sourceMap3 = !!options.sourceMap;
    const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
    const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
    const helpers = ast.helpers || [];
    const generator = createCodeGenerator(ast, {
      mode,
      filename,
      sourceMap: sourceMap3,
      breakLineCode,
      needIndent
    });
    generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
    generator.indent(needIndent);
    if (helpers.length > 0) {
      generator.push(`const { ${helpers.map((s) => `${s}: _${s}`).join(", ")} } = ctx`);
      generator.newline();
    }
    generator.push(`return `);
    generateNode(generator, ast);
    generator.deindent(needIndent);
    generator.push(`}`);
    const { code: code2, map } = generator.context();
    return {
      ast,
      code: code2,
      map: map ? map.toJSON() : void 0
      // eslint-disable-line @typescript-eslint/no-explicit-any
    };
  };
  function getMappingName(node) {
    switch (node.type) {
      case 3:
      case 9:
      case 8:
      case 7:
        return node.value;
      case 5:
        return node.index.toString();
      case 4:
        return node.key;
      default:
        return void 0;
    }
  }
  function advancePositionWithSource(pos, source, numberOfCharacters = source.length) {
    let linesCount = 0;
    let lastNewLinePos = -1;
    for (let i = 0; i < numberOfCharacters; i++) {
      if (source.charCodeAt(i) === 10) {
        linesCount++;
        lastNewLinePos = i;
      }
    }
    pos.offset += numberOfCharacters;
    pos.line += linesCount;
    pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
    return pos;
  }
  function baseCompile(source, options = {}) {
    const assignedOptions = shared2.assign({}, options);
    const parser = createParser(assignedOptions);
    const ast = parser.parse(source);
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  }
  messageCompiler_cjs_prod.CompileErrorCodes = CompileErrorCodes;
  messageCompiler_cjs_prod.ERROR_DOMAIN = ERROR_DOMAIN;
  messageCompiler_cjs_prod.LocationStub = LocationStub;
  messageCompiler_cjs_prod.baseCompile = baseCompile;
  messageCompiler_cjs_prod.createCompileError = createCompileError;
  messageCompiler_cjs_prod.createLocation = createLocation;
  messageCompiler_cjs_prod.createParser = createParser;
  messageCompiler_cjs_prod.createPosition = createPosition;
  messageCompiler_cjs_prod.defaultOnError = defaultOnError;
  messageCompiler_cjs_prod.errorMessages = errorMessages2;
  return messageCompiler_cjs_prod;
}
var messageCompiler_cjs = {};
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredMessageCompiler_cjs;
function requireMessageCompiler_cjs() {
  if (hasRequiredMessageCompiler_cjs) return messageCompiler_cjs;
  hasRequiredMessageCompiler_cjs = 1;
  Object.defineProperty(messageCompiler_cjs, "__esModule", { value: true });
  var shared2 = sharedExports;
  var sourceMap2 = requireSourceMap();
  const CompileErrorCodes = {
    // tokenizer error codes
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    // parser error codes
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    // Special value for higher-order compilers to pick up the last code
    // to avoid collision of error codes. This should always be kept as the last
    // item.
    __EXTEND_POINT__: 15
  };
  const errorMessages2 = {
    // tokenizer error messages
    [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
    [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
    [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
    [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
    [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
    [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
    [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
    [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
    [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
    [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
    // parser error messages
    [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
    [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
    [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
    [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`
  };
  function createCompileError(code2, loc, options = {}) {
    const { domain, messages, args } = options;
    const msg = shared2.format((messages || errorMessages2)[code2] || "", ...args || []);
    const error = new SyntaxError(String(msg));
    error.code = code2;
    if (loc) {
      error.location = loc;
    }
    error.domain = domain;
    return error;
  }
  function defaultOnError(error) {
    throw error;
  }
  const LocationStub = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 }
  };
  function createPosition(line, column, offset) {
    return { line, column, offset };
  }
  function createLocation(start, end, source) {
    const loc = { start, end };
    if (source != null) {
      loc.source = source;
    }
    return loc;
  }
  const CHAR_SP = " ";
  const CHAR_CR = "\r";
  const CHAR_LF = "\n";
  const CHAR_LS = String.fromCharCode(8232);
  const CHAR_PS = String.fromCharCode(8233);
  function createScanner(str) {
    const _buf = str;
    let _index = 0;
    let _line = 1;
    let _column = 1;
    let _peekOffset = 0;
    const isCRLF = (index2) => _buf[index2] === CHAR_CR && _buf[index2 + 1] === CHAR_LF;
    const isLF = (index2) => _buf[index2] === CHAR_LF;
    const isPS = (index2) => _buf[index2] === CHAR_PS;
    const isLS = (index2) => _buf[index2] === CHAR_LS;
    const isLineEnd = (index2) => isCRLF(index2) || isLF(index2) || isPS(index2) || isLS(index2);
    const index = () => _index;
    const line = () => _line;
    const column = () => _column;
    const peekOffset = () => _peekOffset;
    const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
    const currentChar = () => charAt(_index);
    const currentPeek = () => charAt(_index + _peekOffset);
    function next() {
      _peekOffset = 0;
      if (isLineEnd(_index)) {
        _line++;
        _column = 0;
      }
      if (isCRLF(_index)) {
        _index++;
      }
      _index++;
      _column++;
      return _buf[_index];
    }
    function peek() {
      if (isCRLF(_index + _peekOffset)) {
        _peekOffset++;
      }
      _peekOffset++;
      return _buf[_index + _peekOffset];
    }
    function reset() {
      _index = 0;
      _line = 1;
      _column = 1;
      _peekOffset = 0;
    }
    function resetPeek(offset = 0) {
      _peekOffset = offset;
    }
    function skipToPeek() {
      const target = _index + _peekOffset;
      while (target !== _index) {
        next();
      }
      _peekOffset = 0;
    }
    return {
      index,
      line,
      column,
      peekOffset,
      charAt,
      currentChar,
      currentPeek,
      next,
      peek,
      reset,
      resetPeek,
      skipToPeek
    };
  }
  const EOF = void 0;
  const LITERAL_DELIMITER = "'";
  const ERROR_DOMAIN$1 = "tokenizer";
  function createTokenizer(source, options = {}) {
    const location = options.location !== false;
    const _scnr = createScanner(source);
    const currentOffset = () => _scnr.index();
    const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
    const _initLoc = currentPosition();
    const _initOffset = currentOffset();
    const _context = {
      currentType: 14,
      offset: _initOffset,
      startLoc: _initLoc,
      endLoc: _initLoc,
      lastType: 14,
      lastOffset: _initOffset,
      lastStartLoc: _initLoc,
      lastEndLoc: _initLoc,
      braceNest: 0,
      inLinked: false,
      text: ""
    };
    const context = () => _context;
    const { onError } = options;
    function emitError(code2, pos, offset, ...args) {
      const ctx = context();
      pos.column += offset;
      pos.offset += offset;
      if (onError) {
        const loc = createLocation(ctx.startLoc, pos);
        const err = createCompileError(code2, loc, {
          domain: ERROR_DOMAIN$1,
          args
        });
        onError(err);
      }
    }
    function getToken(context2, type, value) {
      context2.endLoc = currentPosition();
      context2.currentType = type;
      const token = { type };
      if (location) {
        token.loc = createLocation(context2.startLoc, context2.endLoc);
      }
      if (value != null) {
        token.value = value;
      }
      return token;
    }
    const getEndToken = (context2) => getToken(
      context2,
      14
      /* EOF */
    );
    function eat(scnr, ch) {
      if (scnr.currentChar() === ch) {
        scnr.next();
        return ch;
      } else {
        emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
        return "";
      }
    }
    function peekSpaces(scnr) {
      let buf = "";
      while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
        buf += scnr.currentPeek();
        scnr.peek();
      }
      return buf;
    }
    function skipSpaces(scnr) {
      const buf = peekSpaces(scnr);
      scnr.skipToPeek();
      return buf;
    }
    function isIdentifierStart(ch) {
      if (ch === EOF) {
        return false;
      }
      const cc = ch.charCodeAt(0);
      return cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc === 95;
    }
    function isNumberStart(ch) {
      if (ch === EOF) {
        return false;
      }
      const cc = ch.charCodeAt(0);
      return cc >= 48 && cc <= 57;
    }
    function isNamedIdentifierStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 2) {
        return false;
      }
      peekSpaces(scnr);
      const ret = isIdentifierStart(scnr.currentPeek());
      scnr.resetPeek();
      return ret;
    }
    function isListIdentifierStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 2) {
        return false;
      }
      peekSpaces(scnr);
      const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
      const ret = isNumberStart(ch);
      scnr.resetPeek();
      return ret;
    }
    function isLiteralStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 2) {
        return false;
      }
      peekSpaces(scnr);
      const ret = scnr.currentPeek() === LITERAL_DELIMITER;
      scnr.resetPeek();
      return ret;
    }
    function isLinkedDotStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 8) {
        return false;
      }
      peekSpaces(scnr);
      const ret = scnr.currentPeek() === ".";
      scnr.resetPeek();
      return ret;
    }
    function isLinkedModifierStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 9) {
        return false;
      }
      peekSpaces(scnr);
      const ret = isIdentifierStart(scnr.currentPeek());
      scnr.resetPeek();
      return ret;
    }
    function isLinkedDelimiterStart(scnr, context2) {
      const { currentType } = context2;
      if (!(currentType === 8 || currentType === 12)) {
        return false;
      }
      peekSpaces(scnr);
      const ret = scnr.currentPeek() === ":";
      scnr.resetPeek();
      return ret;
    }
    function isLinkedReferStart(scnr, context2) {
      const { currentType } = context2;
      if (currentType !== 10) {
        return false;
      }
      const fn = () => {
        const ch = scnr.currentPeek();
        if (ch === "{") {
          return isIdentifierStart(scnr.peek());
        } else if (ch === "@" || ch === "%" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
          return false;
        } else if (ch === CHAR_LF) {
          scnr.peek();
          return fn();
        } else {
          return isIdentifierStart(ch);
        }
      };
      const ret = fn();
      scnr.resetPeek();
      return ret;
    }
    function isPluralStart(scnr) {
      peekSpaces(scnr);
      const ret = scnr.currentPeek() === "|";
      scnr.resetPeek();
      return ret;
    }
    function detectModuloStart(scnr) {
      const spaces = peekSpaces(scnr);
      const ret = scnr.currentPeek() === "%" && scnr.peek() === "{";
      scnr.resetPeek();
      return {
        isModulo: ret,
        hasSpace: spaces.length > 0
      };
    }
    function isTextStart(scnr, reset = true) {
      const fn = (hasSpace = false, prev = "", detectModulo = false) => {
        const ch = scnr.currentPeek();
        if (ch === "{") {
          return prev === "%" ? false : hasSpace;
        } else if (ch === "@" || !ch) {
          return prev === "%" ? true : hasSpace;
        } else if (ch === "%") {
          scnr.peek();
          return fn(hasSpace, "%", true);
        } else if (ch === "|") {
          return prev === "%" || detectModulo ? true : !(prev === CHAR_SP || prev === CHAR_LF);
        } else if (ch === CHAR_SP) {
          scnr.peek();
          return fn(true, CHAR_SP, detectModulo);
        } else if (ch === CHAR_LF) {
          scnr.peek();
          return fn(true, CHAR_LF, detectModulo);
        } else {
          return true;
        }
      };
      const ret = fn();
      reset && scnr.resetPeek();
      return ret;
    }
    function takeChar(scnr, fn) {
      const ch = scnr.currentChar();
      if (ch === EOF) {
        return EOF;
      }
      if (fn(ch)) {
        scnr.next();
        return ch;
      }
      return null;
    }
    function takeIdentifierChar(scnr) {
      const closure = (ch) => {
        const cc = ch.charCodeAt(0);
        return cc >= 97 && cc <= 122 || // a-z
        cc >= 65 && cc <= 90 || // A-Z
        cc >= 48 && cc <= 57 || // 0-9
        cc === 95 || // _
        cc === 36;
      };
      return takeChar(scnr, closure);
    }
    function takeDigit(scnr) {
      const closure = (ch) => {
        const cc = ch.charCodeAt(0);
        return cc >= 48 && cc <= 57;
      };
      return takeChar(scnr, closure);
    }
    function takeHexDigit(scnr) {
      const closure = (ch) => {
        const cc = ch.charCodeAt(0);
        return cc >= 48 && cc <= 57 || // 0-9
        cc >= 65 && cc <= 70 || // A-F
        cc >= 97 && cc <= 102;
      };
      return takeChar(scnr, closure);
    }
    function getDigits(scnr) {
      let ch = "";
      let num = "";
      while (ch = takeDigit(scnr)) {
        num += ch;
      }
      return num;
    }
    function readModulo(scnr) {
      skipSpaces(scnr);
      const ch = scnr.currentChar();
      if (ch !== "%") {
        emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      }
      scnr.next();
      return "%";
    }
    function readText(scnr) {
      let buf = "";
      while (true) {
        const ch = scnr.currentChar();
        if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
          break;
        } else if (ch === "%") {
          if (isTextStart(scnr)) {
            buf += ch;
            scnr.next();
          } else {
            break;
          }
        } else if (ch === CHAR_SP || ch === CHAR_LF) {
          if (isTextStart(scnr)) {
            buf += ch;
            scnr.next();
          } else if (isPluralStart(scnr)) {
            break;
          } else {
            buf += ch;
            scnr.next();
          }
        } else {
          buf += ch;
          scnr.next();
        }
      }
      return buf;
    }
    function readNamedIdentifier(scnr) {
      skipSpaces(scnr);
      let ch = "";
      let name = "";
      while (ch = takeIdentifierChar(scnr)) {
        name += ch;
      }
      if (scnr.currentChar() === EOF) {
        emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
      }
      return name;
    }
    function readListIdentifier(scnr) {
      skipSpaces(scnr);
      let value = "";
      if (scnr.currentChar() === "-") {
        scnr.next();
        value += `-${getDigits(scnr)}`;
      } else {
        value += getDigits(scnr);
      }
      if (scnr.currentChar() === EOF) {
        emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
      }
      return value;
    }
    function readLiteral(scnr) {
      skipSpaces(scnr);
      eat(scnr, `'`);
      let ch = "";
      let literal = "";
      const fn = (x) => x !== LITERAL_DELIMITER && x !== CHAR_LF;
      while (ch = takeChar(scnr, fn)) {
        if (ch === "\\") {
          literal += readEscapeSequence(scnr);
        } else {
          literal += ch;
        }
      }
      const current = scnr.currentChar();
      if (current === CHAR_LF || current === EOF) {
        emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
        if (current === CHAR_LF) {
          scnr.next();
          eat(scnr, `'`);
        }
        return literal;
      }
      eat(scnr, `'`);
      return literal;
    }
    function readEscapeSequence(scnr) {
      const ch = scnr.currentChar();
      switch (ch) {
        case "\\":
        case `'`:
          scnr.next();
          return `\\${ch}`;
        case "u":
          return readUnicodeEscapeSequence(scnr, ch, 4);
        case "U":
          return readUnicodeEscapeSequence(scnr, ch, 6);
        default:
          emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
          return "";
      }
    }
    function readUnicodeEscapeSequence(scnr, unicode, digits) {
      eat(scnr, unicode);
      let sequence = "";
      for (let i = 0; i < digits; i++) {
        const ch = takeHexDigit(scnr);
        if (!ch) {
          emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
          break;
        }
        sequence += ch;
      }
      return `\\${unicode}${sequence}`;
    }
    function readInvalidIdentifier(scnr) {
      skipSpaces(scnr);
      let ch = "";
      let identifiers = "";
      const closure = (ch2) => ch2 !== "{" && ch2 !== "}" && ch2 !== CHAR_SP && ch2 !== CHAR_LF;
      while (ch = takeChar(scnr, closure)) {
        identifiers += ch;
      }
      return identifiers;
    }
    function readLinkedModifier(scnr) {
      let ch = "";
      let name = "";
      while (ch = takeIdentifierChar(scnr)) {
        name += ch;
      }
      return name;
    }
    function readLinkedRefer(scnr) {
      const fn = (detect = false, buf) => {
        const ch = scnr.currentChar();
        if (ch === "{" || ch === "%" || ch === "@" || ch === "|" || !ch) {
          return buf;
        } else if (ch === CHAR_SP) {
          return buf;
        } else if (ch === CHAR_LF) {
          buf += ch;
          scnr.next();
          return fn(detect, buf);
        } else {
          buf += ch;
          scnr.next();
          return fn(true, buf);
        }
      };
      return fn(false, "");
    }
    function readPlural(scnr) {
      skipSpaces(scnr);
      const plural = eat(
        scnr,
        "|"
        /* Pipe */
      );
      skipSpaces(scnr);
      return plural;
    }
    function readTokenInPlaceholder(scnr, context2) {
      let token = null;
      const ch = scnr.currentChar();
      switch (ch) {
        case "{":
          if (context2.braceNest >= 1) {
            emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
          }
          scnr.next();
          token = getToken(
            context2,
            2,
            "{"
            /* BraceLeft */
          );
          skipSpaces(scnr);
          context2.braceNest++;
          return token;
        case "}":
          if (context2.braceNest > 0 && context2.currentType === 2) {
            emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
          }
          scnr.next();
          token = getToken(
            context2,
            3,
            "}"
            /* BraceRight */
          );
          context2.braceNest--;
          context2.braceNest > 0 && skipSpaces(scnr);
          if (context2.inLinked && context2.braceNest === 0) {
            context2.inLinked = false;
          }
          return token;
        case "@":
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = readTokenInLinked(scnr, context2) || getEndToken(context2);
          context2.braceNest = 0;
          return token;
        default:
          let validNamedIdentifier = true;
          let validListIdentifier = true;
          let validLiteral = true;
          if (isPluralStart(scnr)) {
            if (context2.braceNest > 0) {
              emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            }
            token = getToken(context2, 1, readPlural(scnr));
            context2.braceNest = 0;
            context2.inLinked = false;
            return token;
          }
          if (context2.braceNest > 0 && (context2.currentType === 5 || context2.currentType === 6 || context2.currentType === 7)) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            context2.braceNest = 0;
            return readToken(scnr, context2);
          }
          if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
            token = getToken(context2, 5, readNamedIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
            token = getToken(context2, 6, readListIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validLiteral = isLiteralStart(scnr, context2)) {
            token = getToken(context2, 7, readLiteral(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
            token = getToken(context2, 13, readInvalidIdentifier(scnr));
            emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
            skipSpaces(scnr);
            return token;
          }
          break;
      }
      return token;
    }
    function readTokenInLinked(scnr, context2) {
      const { currentType } = context2;
      let token = null;
      const ch = scnr.currentChar();
      if ((currentType === 8 || currentType === 9 || currentType === 12 || currentType === 10) && (ch === CHAR_LF || ch === CHAR_SP)) {
        emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
      }
      switch (ch) {
        case "@":
          scnr.next();
          token = getToken(
            context2,
            8,
            "@"
            /* LinkedAlias */
          );
          context2.inLinked = true;
          return token;
        case ".":
          skipSpaces(scnr);
          scnr.next();
          return getToken(
            context2,
            9,
            "."
            /* LinkedDot */
          );
        case ":":
          skipSpaces(scnr);
          scnr.next();
          return getToken(
            context2,
            10,
            ":"
            /* LinkedDelimiter */
          );
        default:
          if (isPluralStart(scnr)) {
            token = getToken(context2, 1, readPlural(scnr));
            context2.braceNest = 0;
            context2.inLinked = false;
            return token;
          }
          if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
            skipSpaces(scnr);
            return readTokenInLinked(scnr, context2);
          }
          if (isLinkedModifierStart(scnr, context2)) {
            skipSpaces(scnr);
            return getToken(context2, 12, readLinkedModifier(scnr));
          }
          if (isLinkedReferStart(scnr, context2)) {
            skipSpaces(scnr);
            if (ch === "{") {
              return readTokenInPlaceholder(scnr, context2) || token;
            } else {
              return getToken(context2, 11, readLinkedRefer(scnr));
            }
          }
          if (currentType === 8) {
            emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
          }
          context2.braceNest = 0;
          context2.inLinked = false;
          return readToken(scnr, context2);
      }
    }
    function readToken(scnr, context2) {
      let token = {
        type: 14
        /* EOF */
      };
      if (context2.braceNest > 0) {
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      }
      if (context2.inLinked) {
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      }
      const ch = scnr.currentChar();
      switch (ch) {
        case "{":
          return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
        case "}":
          emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
          scnr.next();
          return getToken(
            context2,
            3,
            "}"
            /* BraceRight */
          );
        case "@":
          return readTokenInLinked(scnr, context2) || getEndToken(context2);
        default:
          if (isPluralStart(scnr)) {
            token = getToken(context2, 1, readPlural(scnr));
            context2.braceNest = 0;
            context2.inLinked = false;
            return token;
          }
          const { isModulo, hasSpace } = detectModuloStart(scnr);
          if (isModulo) {
            return hasSpace ? getToken(context2, 0, readText(scnr)) : getToken(context2, 4, readModulo(scnr));
          }
          if (isTextStart(scnr)) {
            return getToken(context2, 0, readText(scnr));
          }
          break;
      }
      return token;
    }
    function nextToken() {
      const { currentType, offset, startLoc, endLoc } = _context;
      _context.lastType = currentType;
      _context.lastOffset = offset;
      _context.lastStartLoc = startLoc;
      _context.lastEndLoc = endLoc;
      _context.offset = currentOffset();
      _context.startLoc = currentPosition();
      if (_scnr.currentChar() === EOF) {
        return getToken(
          _context,
          14
          /* EOF */
        );
      }
      return readToken(_scnr, _context);
    }
    return {
      nextToken,
      currentOffset,
      currentPosition,
      context
    };
  }
  const ERROR_DOMAIN = "parser";
  const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
  function fromEscapeSequence(match, codePoint4, codePoint6) {
    switch (match) {
      case `\\\\`:
        return `\\`;
      case `\\'`:
        return `'`;
      default: {
        const codePoint = parseInt(codePoint4 || codePoint6, 16);
        if (codePoint <= 55295 || codePoint >= 57344) {
          return String.fromCodePoint(codePoint);
        }
        return "�";
      }
    }
  }
  function createParser(options = {}) {
    const location = options.location !== false;
    const { onError } = options;
    function emitError(tokenzer, code2, start, offset, ...args) {
      const end = tokenzer.currentPosition();
      end.offset += offset;
      end.column += offset;
      if (onError) {
        const loc = createLocation(start, end);
        const err = createCompileError(code2, loc, {
          domain: ERROR_DOMAIN,
          args
        });
        onError(err);
      }
    }
    function startNode(type, offset, loc) {
      const node = {
        type,
        start: offset,
        end: offset
      };
      if (location) {
        node.loc = { start: loc, end: loc };
      }
      return node;
    }
    function endNode(node, offset, pos, type) {
      node.end = offset;
      if (location && node.loc) {
        node.loc.end = pos;
      }
    }
    function parseText(tokenizer, value) {
      const context = tokenizer.context();
      const node = startNode(3, context.offset, context.startLoc);
      node.value = value;
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseList(tokenizer, index) {
      const context = tokenizer.context();
      const { lastOffset: offset, lastStartLoc: loc } = context;
      const node = startNode(5, offset, loc);
      node.index = parseInt(index, 10);
      tokenizer.nextToken();
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseNamed(tokenizer, key) {
      const context = tokenizer.context();
      const { lastOffset: offset, lastStartLoc: loc } = context;
      const node = startNode(4, offset, loc);
      node.key = key;
      tokenizer.nextToken();
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseLiteral(tokenizer, value) {
      const context = tokenizer.context();
      const { lastOffset: offset, lastStartLoc: loc } = context;
      const node = startNode(9, offset, loc);
      node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
      tokenizer.nextToken();
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseLinkedModifier(tokenizer) {
      const token = tokenizer.nextToken();
      const context = tokenizer.context();
      const { lastOffset: offset, lastStartLoc: loc } = context;
      const node = startNode(8, offset, loc);
      if (token.type !== 12) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
        node.value = "";
        endNode(node, offset, loc);
        return {
          nextConsumeToken: token,
          node
        };
      }
      if (token.value == null) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
      }
      node.value = token.value || "";
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return {
        node
      };
    }
    function parseLinkedKey(tokenizer, value) {
      const context = tokenizer.context();
      const node = startNode(7, context.offset, context.startLoc);
      node.value = value;
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseLinked(tokenizer) {
      const context = tokenizer.context();
      const linkedNode = startNode(6, context.offset, context.startLoc);
      let token = tokenizer.nextToken();
      if (token.type === 9) {
        const parsed = parseLinkedModifier(tokenizer);
        linkedNode.modifier = parsed.node;
        token = parsed.nextConsumeToken || tokenizer.nextToken();
      }
      if (token.type !== 10) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
      }
      token = tokenizer.nextToken();
      if (token.type === 2) {
        token = tokenizer.nextToken();
      }
      switch (token.type) {
        case 11:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseNamed(tokenizer, token.value || "");
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseList(tokenizer, token.value || "");
          break;
        case 7:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseLiteral(tokenizer, token.value || "");
          break;
        default:
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
          const nextContext = tokenizer.context();
          const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
          emptyLinkedKeyNode.value = "";
          endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
          linkedNode.key = emptyLinkedKeyNode;
          endNode(linkedNode, nextContext.offset, nextContext.startLoc);
          return {
            nextConsumeToken: token,
            node: linkedNode
          };
      }
      endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
      return {
        node: linkedNode
      };
    }
    function parseMessage(tokenizer) {
      const context = tokenizer.context();
      const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
      const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
      const node = startNode(2, startOffset, startLoc);
      node.items = [];
      let nextToken = null;
      do {
        const token = nextToken || tokenizer.nextToken();
        nextToken = null;
        switch (token.type) {
          case 0:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseText(tokenizer, token.value || ""));
            break;
          case 6:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseList(tokenizer, token.value || ""));
            break;
          case 5:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseNamed(tokenizer, token.value || ""));
            break;
          case 7:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseLiteral(tokenizer, token.value || ""));
            break;
          case 8:
            const parsed = parseLinked(tokenizer);
            node.items.push(parsed.node);
            nextToken = parsed.nextConsumeToken || null;
            break;
        }
      } while (context.currentType !== 14 && context.currentType !== 1);
      const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
      const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
      endNode(node, endOffset, endLoc);
      return node;
    }
    function parsePlural(tokenizer, offset, loc, msgNode) {
      const context = tokenizer.context();
      let hasEmptyMessage = msgNode.items.length === 0;
      const node = startNode(1, offset, loc);
      node.cases = [];
      node.cases.push(msgNode);
      do {
        const msg = parseMessage(tokenizer);
        if (!hasEmptyMessage) {
          hasEmptyMessage = msg.items.length === 0;
        }
        node.cases.push(msg);
      } while (context.currentType !== 14);
      if (hasEmptyMessage) {
        emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
      }
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseResource(tokenizer) {
      const context = tokenizer.context();
      const { offset, startLoc } = context;
      const msgNode = parseMessage(tokenizer);
      if (context.currentType === 14) {
        return msgNode;
      } else {
        return parsePlural(tokenizer, offset, startLoc, msgNode);
      }
    }
    function parse(source) {
      const tokenizer = createTokenizer(source, shared2.assign({}, options));
      const context = tokenizer.context();
      const node = startNode(0, context.offset, context.startLoc);
      if (location && node.loc) {
        node.loc.source = source;
      }
      node.body = parseResource(tokenizer);
      if (context.currentType !== 14) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
      }
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    return { parse };
  }
  function getTokenCaption(token) {
    if (token.type === 14) {
      return "EOF";
    }
    const name = (token.value || "").replace(/\r?\n/gu, "\\n");
    return name.length > 10 ? name.slice(0, 9) + "…" : name;
  }
  function createTransformer(ast, options = {}) {
    const _context = {
      ast,
      helpers: /* @__PURE__ */ new Set()
    };
    const context = () => _context;
    const helper = (name) => {
      _context.helpers.add(name);
      return name;
    };
    return { context, helper };
  }
  function traverseNodes(nodes, transformer) {
    for (let i = 0; i < nodes.length; i++) {
      traverseNode(nodes[i], transformer);
    }
  }
  function traverseNode(node, transformer) {
    switch (node.type) {
      case 1:
        traverseNodes(node.cases, transformer);
        transformer.helper(
          "plural"
          /* PLURAL */
        );
        break;
      case 2:
        traverseNodes(node.items, transformer);
        break;
      case 6:
        const linked = node;
        traverseNode(linked.key, transformer);
        transformer.helper(
          "linked"
          /* LINKED */
        );
        transformer.helper(
          "type"
          /* TYPE */
        );
        break;
      case 5:
        transformer.helper(
          "interpolate"
          /* INTERPOLATE */
        );
        transformer.helper(
          "list"
          /* LIST */
        );
        break;
      case 4:
        transformer.helper(
          "interpolate"
          /* INTERPOLATE */
        );
        transformer.helper(
          "named"
          /* NAMED */
        );
        break;
    }
  }
  function transform(ast, options = {}) {
    const transformer = createTransformer(ast);
    transformer.helper(
      "normalize"
      /* NORMALIZE */
    );
    ast.body && traverseNode(ast.body, transformer);
    const context = transformer.context();
    ast.helpers = Array.from(context.helpers);
  }
  function createCodeGenerator(ast, options) {
    const { sourceMap: sourceMap$1, filename, breakLineCode, needIndent: _needIndent } = options;
    const _context = {
      source: ast.loc.source,
      filename,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode,
      needIndent: _needIndent,
      indentLevel: 0
    };
    const context = () => _context;
    function push(code2, node) {
      _context.code += code2;
      if (_context.map) {
        if (node && node.loc && node.loc !== LocationStub) {
          addMapping(node.loc.start, getMappingName(node));
        }
        advancePositionWithSource(_context, code2);
      }
    }
    function _newline(n, withBreakLine = true) {
      const _breakLineCode = withBreakLine ? breakLineCode : "";
      push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
    }
    function indent(withNewLine = true) {
      const level = ++_context.indentLevel;
      withNewLine && _newline(level);
    }
    function deindent(withNewLine = true) {
      const level = --_context.indentLevel;
      withNewLine && _newline(level);
    }
    function newline() {
      _newline(_context.indentLevel);
    }
    const helper = (key) => `_${key}`;
    const needIndent = () => _context.needIndent;
    function addMapping(loc, name) {
      _context.map.addMapping({
        name,
        source: _context.filename,
        original: {
          line: loc.line,
          column: loc.column - 1
        },
        generated: {
          line: _context.line,
          column: _context.column - 1
        }
      });
    }
    if (sourceMap$1) {
      _context.map = new sourceMap2.SourceMapGenerator();
      _context.map.setSourceContent(filename, _context.source);
    }
    return {
      context,
      push,
      indent,
      deindent,
      newline,
      helper,
      needIndent
    };
  }
  function generateLinkedNode(generator, node) {
    const { helper } = generator;
    generator.push(`${helper(
      "linked"
      /* LINKED */
    )}(`);
    generateNode(generator, node.key);
    if (node.modifier) {
      generator.push(`, `);
      generateNode(generator, node.modifier);
      generator.push(`, _type`);
    } else {
      generator.push(`, undefined, _type`);
    }
    generator.push(`)`);
  }
  function generateMessageNode(generator, node) {
    const { helper, needIndent } = generator;
    generator.push(`${helper(
      "normalize"
      /* NORMALIZE */
    )}([`);
    generator.indent(needIndent());
    const length = node.items.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.items[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push("])");
  }
  function generatePluralNode(generator, node) {
    const { helper, needIndent } = generator;
    if (node.cases.length > 1) {
      generator.push(`${helper(
        "plural"
        /* PLURAL */
      )}([`);
      generator.indent(needIndent());
      const length = node.cases.length;
      for (let i = 0; i < length; i++) {
        generateNode(generator, node.cases[i]);
        if (i === length - 1) {
          break;
        }
        generator.push(", ");
      }
      generator.deindent(needIndent());
      generator.push(`])`);
    }
  }
  function generateResource(generator, node) {
    if (node.body) {
      generateNode(generator, node.body);
    } else {
      generator.push("null");
    }
  }
  function generateNode(generator, node) {
    const { helper } = generator;
    switch (node.type) {
      case 0:
        generateResource(generator, node);
        break;
      case 1:
        generatePluralNode(generator, node);
        break;
      case 2:
        generateMessageNode(generator, node);
        break;
      case 6:
        generateLinkedNode(generator, node);
        break;
      case 8:
        generator.push(JSON.stringify(node.value), node);
        break;
      case 7:
        generator.push(JSON.stringify(node.value), node);
        break;
      case 5:
        generator.push(`${helper(
          "interpolate"
          /* INTERPOLATE */
        )}(${helper(
          "list"
          /* LIST */
        )}(${node.index}))`, node);
        break;
      case 4:
        generator.push(`${helper(
          "interpolate"
          /* INTERPOLATE */
        )}(${helper(
          "named"
          /* NAMED */
        )}(${JSON.stringify(node.key)}))`, node);
        break;
      case 9:
        generator.push(JSON.stringify(node.value), node);
        break;
      case 3:
        generator.push(JSON.stringify(node.value), node);
        break;
      default: {
        throw new Error(`unhandled codegen node type: ${node.type}`);
      }
    }
  }
  const generate = (ast, options = {}) => {
    const mode = shared2.isString(options.mode) ? options.mode : "normal";
    const filename = shared2.isString(options.filename) ? options.filename : "message.intl";
    const sourceMap3 = !!options.sourceMap;
    const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
    const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
    const helpers = ast.helpers || [];
    const generator = createCodeGenerator(ast, {
      mode,
      filename,
      sourceMap: sourceMap3,
      breakLineCode,
      needIndent
    });
    generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
    generator.indent(needIndent);
    if (helpers.length > 0) {
      generator.push(`const { ${helpers.map((s) => `${s}: _${s}`).join(", ")} } = ctx`);
      generator.newline();
    }
    generator.push(`return `);
    generateNode(generator, ast);
    generator.deindent(needIndent);
    generator.push(`}`);
    const { code: code2, map } = generator.context();
    return {
      ast,
      code: code2,
      map: map ? map.toJSON() : void 0
      // eslint-disable-line @typescript-eslint/no-explicit-any
    };
  };
  function getMappingName(node) {
    switch (node.type) {
      case 3:
      case 9:
      case 8:
      case 7:
        return node.value;
      case 5:
        return node.index.toString();
      case 4:
        return node.key;
      default:
        return void 0;
    }
  }
  function advancePositionWithSource(pos, source, numberOfCharacters = source.length) {
    let linesCount = 0;
    let lastNewLinePos = -1;
    for (let i = 0; i < numberOfCharacters; i++) {
      if (source.charCodeAt(i) === 10) {
        linesCount++;
        lastNewLinePos = i;
      }
    }
    pos.offset += numberOfCharacters;
    pos.line += linesCount;
    pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
    return pos;
  }
  function baseCompile(source, options = {}) {
    const assignedOptions = shared2.assign({}, options);
    const parser = createParser(assignedOptions);
    const ast = parser.parse(source);
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  }
  messageCompiler_cjs.CompileErrorCodes = CompileErrorCodes;
  messageCompiler_cjs.ERROR_DOMAIN = ERROR_DOMAIN;
  messageCompiler_cjs.LocationStub = LocationStub;
  messageCompiler_cjs.baseCompile = baseCompile;
  messageCompiler_cjs.createCompileError = createCompileError;
  messageCompiler_cjs.createLocation = createLocation;
  messageCompiler_cjs.createParser = createParser;
  messageCompiler_cjs.createPosition = createPosition;
  messageCompiler_cjs.defaultOnError = defaultOnError;
  messageCompiler_cjs.errorMessages = errorMessages2;
  return messageCompiler_cjs;
}
var hasRequiredMessageCompiler;
function requireMessageCompiler() {
  if (hasRequiredMessageCompiler) return messageCompiler.exports;
  hasRequiredMessageCompiler = 1;
  if (process.env.NODE_ENV === "production") {
    messageCompiler.exports = requireMessageCompiler_cjs_prod();
  } else {
    messageCompiler.exports = requireMessageCompiler_cjs();
  }
  return messageCompiler.exports;
}
var devtoolsIf = { exports: {} };
var devtoolsIf_cjs_prod = {};
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredDevtoolsIf_cjs_prod;
function requireDevtoolsIf_cjs_prod() {
  if (hasRequiredDevtoolsIf_cjs_prod) return devtoolsIf_cjs_prod;
  hasRequiredDevtoolsIf_cjs_prod = 1;
  Object.defineProperty(devtoolsIf_cjs_prod, "__esModule", { value: true });
  const IntlifyDevToolsHooks = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  devtoolsIf_cjs_prod.IntlifyDevToolsHooks = IntlifyDevToolsHooks;
  return devtoolsIf_cjs_prod;
}
var devtoolsIf_cjs = {};
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredDevtoolsIf_cjs;
function requireDevtoolsIf_cjs() {
  if (hasRequiredDevtoolsIf_cjs) return devtoolsIf_cjs;
  hasRequiredDevtoolsIf_cjs = 1;
  Object.defineProperty(devtoolsIf_cjs, "__esModule", { value: true });
  const IntlifyDevToolsHooks = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  devtoolsIf_cjs.IntlifyDevToolsHooks = IntlifyDevToolsHooks;
  return devtoolsIf_cjs;
}
var hasRequiredDevtoolsIf;
function requireDevtoolsIf() {
  if (hasRequiredDevtoolsIf) return devtoolsIf.exports;
  hasRequiredDevtoolsIf = 1;
  if (process.env.NODE_ENV === "production") {
    devtoolsIf.exports = requireDevtoolsIf_cjs_prod();
  } else {
    devtoolsIf.exports = requireDevtoolsIf_cjs();
  }
  return devtoolsIf.exports;
}
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredCoreBase_cjs_prod;
function requireCoreBase_cjs_prod() {
  if (hasRequiredCoreBase_cjs_prod) return coreBase_cjs_prod;
  hasRequiredCoreBase_cjs_prod = 1;
  Object.defineProperty(coreBase_cjs_prod, "__esModule", { value: true });
  var messageCompiler2 = requireMessageCompiler();
  var shared2 = sharedExports;
  var devtoolsIf2 = requireDevtoolsIf();
  const pathStateMachine = [];
  pathStateMachine[
    0
    /* BEFORE_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      0
      /* BEFORE_PATH */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    1
    /* IN_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      1
      /* IN_PATH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    2
    /* BEFORE_IDENT */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    3
    /* IN_IDENT */
  ] = {
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "w"
      /* WORKSPACE */
    ]: [
      1,
      1
      /* PUSH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2,
      1
      /* PUSH */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      1
      /* PUSH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7,
      1
      /* PUSH */
    ]
  };
  pathStateMachine[
    4
    /* IN_SUB_PATH */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      5,
      0
      /* APPEND */
    ],
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      6,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      2
      /* INC_SUB_PATH_DEPTH */
    ],
    [
      "]"
      /* RIGHT_BRACKET */
    ]: [
      1,
      3
      /* PUSH_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      4,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    5
    /* IN_SINGLE_QUOTE */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      5,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    6
    /* IN_DOUBLE_QUOTE */
  ] = {
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      6,
      0
      /* APPEND */
    ]
  };
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
  }
  function getPathCharType(ch) {
    if (ch === void 0 || ch === null) {
      return "o";
    }
    const code3 = ch.charCodeAt(0);
    switch (code3) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return ch;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function formatSubPath(path) {
    const trimmed = path.trim();
    if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
  }
  function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0;
    let subPathDepth = 0;
    let c;
    let key;
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[
      0
      /* APPEND */
    ] = () => {
      if (key === void 0) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions[
      1
      /* PUSH */
    ] = () => {
      if (key !== void 0) {
        keys.push(key);
        key = void 0;
      }
    };
    actions[
      2
      /* INC_SUB_PATH_DEPTH */
    ] = () => {
      actions[
        0
        /* APPEND */
      ]();
      subPathDepth++;
    };
    actions[
      3
      /* PUSH_SUB_PATH */
    ] = () => {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4;
        actions[
          0
          /* APPEND */
        ]();
      } else {
        subPathDepth = 0;
        if (key === void 0) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[
            1
            /* PUSH */
          ]();
        }
      }
    };
    function maybeUnescapeQuote() {
      const nextChar = path[index + 1];
      if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
        index++;
        newChar = "\\" + nextChar;
        actions[
          0
          /* APPEND */
        ]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c = path[index];
      if (c === "\\" && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap[
        "l"
        /* ELSE */
      ] || 8;
      if (transition === 8) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== void 0) {
        action = actions[transition[1]];
        if (action) {
          newChar = c;
          if (action() === false) {
            return;
          }
        }
      }
      if (mode === 7) {
        return keys;
      }
    }
  }
  const cache = /* @__PURE__ */ new Map();
  function resolveWithKeyValue(obj, path) {
    return shared2.isObject(obj) ? obj[path] : null;
  }
  function resolveValue(obj, path) {
    if (!shared2.isObject(obj)) {
      return null;
    }
    let hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    if (!hit) {
      return null;
    }
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
      const val = last[hit[i]];
      if (val === void 0) {
        return null;
      }
      last = val;
      i++;
    }
    return last;
  }
  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => "";
  const DEFAULT_MESSAGE_DATA_TYPE = "text";
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
  const DEFAULT_INTERPOLATE = shared2.toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    const index = shared2.isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    return options.named && (shared2.isNumber(options.named.count) || shared2.isNumber(options.named.n)) ? shared2.isNumber(options.named.count) ? options.named.count : shared2.isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
      props.count = pluralIndex;
    }
    if (!props.n) {
      props.n = pluralIndex;
    }
  }
  function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = shared2.isObject(options.pluralRules) && shared2.isString(locale) && shared2.isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    const orgPluralRule = shared2.isObject(options.pluralRules) && shared2.isString(locale) && shared2.isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
    const plural = (messages) => {
      return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
    };
    const _list = options.list || [];
    const list = (index) => _list[index];
    const _named = options.named || {};
    shared2.isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
      const msg = shared2.isFunction(options.messages) ? options.messages(key) : shared2.isObject(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
    }
    const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
    const normalize = shared2.isPlainObject(options.processor) && shared2.isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    const interpolate = shared2.isPlainObject(options.processor) && shared2.isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    const type = shared2.isPlainObject(options.processor) && shared2.isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    const linked = (key, ...args) => {
      const [arg1, arg2] = args;
      let type2 = "text";
      let modifier = "";
      if (args.length === 1) {
        if (shared2.isObject(arg1)) {
          modifier = arg1.modifier || modifier;
          type2 = arg1.type || type2;
        } else if (shared2.isString(arg1)) {
          modifier = arg1 || modifier;
        }
      } else if (args.length === 2) {
        if (shared2.isString(arg1)) {
          modifier = arg1 || modifier;
        }
        if (shared2.isString(arg2)) {
          type2 = arg2 || type2;
        }
      }
      let msg = message(key)(ctx);
      if (type2 === "vnode" && shared2.isArray(msg) && modifier) {
        msg = msg[0];
      }
      return modifier ? _modifier(modifier)(msg, type2) : msg;
    };
    const ctx = {
      [
        "list"
        /* LIST */
      ]: list,
      [
        "named"
        /* NAMED */
      ]: named,
      [
        "plural"
        /* PLURAL */
      ]: plural,
      [
        "linked"
        /* LINKED */
      ]: linked,
      [
        "message"
        /* MESSAGE */
      ]: message,
      [
        "type"
        /* TYPE */
      ]: type,
      [
        "interpolate"
        /* INTERPOLATE */
      ]: interpolate,
      [
        "normalize"
        /* NORMALIZE */
      ]: normalize
    };
    return ctx;
  }
  let devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function getDevToolsHook() {
    return devtools;
  }
  function initI18nDevTools(i18n2, version, meta) {
    devtools && devtools.emit(devtoolsIf2.IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: i18n2,
      version,
      meta
    });
  }
  const translateDevTools = /* @__PURE__ */ createDevToolsHook(devtoolsIf2.IntlifyDevToolsHooks.FunctionTranslate);
  function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
  }
  const CoreWarnCodes = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
  };
  const warnMessages2 = {
    [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
    [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
    [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
    [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
    [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
    [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`
  };
  function getWarnMessage2(code3, ...args) {
    return shared2.format(warnMessages2[code3], ...args);
  }
  function fallbackWithSimple(ctx, fallback, start) {
    return [.../* @__PURE__ */ new Set([
      start,
      ...shared2.isArray(fallback) ? fallback : shared2.isObject(fallback) ? Object.keys(fallback) : shared2.isString(fallback) ? [fallback] : [start]
    ])];
  }
  function fallbackWithLocaleChain(ctx, fallback, start) {
    const startLocale = shared2.isString(start) ? start : DEFAULT_LOCALE;
    const context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = /* @__PURE__ */ new Map();
    }
    let chain = context.__localeChainCache.get(startLocale);
    if (!chain) {
      chain = [];
      let block = [start];
      while (shared2.isArray(block)) {
        block = appendBlockToChain(chain, block, fallback);
      }
      const defaults = shared2.isArray(fallback) || !shared2.isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
      block = shared2.isString(defaults) ? [defaults] : defaults;
      if (shared2.isArray(block)) {
        appendBlockToChain(chain, block, false);
      }
      context.__localeChainCache.set(startLocale, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && shared2.isBoolean(follow); i++) {
      const locale = block[i];
      if (shared2.isString(locale)) {
        follow = appendLocaleToChain(chain, block[i], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split("-");
    do {
      const target = tokens.join("-");
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== "!";
        const locale = target.replace(/!/g, "");
        chain.push(locale);
        if ((shared2.isArray(blocks) || shared2.isPlainObject(blocks)) && blocks[locale]) {
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }
  const VERSION2 = "9.2.2";
  const NOT_REOSLVED = -1;
  const DEFAULT_LOCALE = "en-US";
  const MISSING_RESOLVE_VALUE = "";
  const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
  function getDefaultLinkedModifiers() {
    return {
      upper: (val, type) => {
        return type === "text" && shared2.isString(val) ? val.toUpperCase() : type === "vnode" && shared2.isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
      },
      lower: (val, type) => {
        return type === "text" && shared2.isString(val) ? val.toLowerCase() : type === "vnode" && shared2.isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
      },
      capitalize: (val, type) => {
        return type === "text" && shared2.isString(val) ? capitalize(val) : type === "vnode" && shared2.isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
      }
    };
  }
  let _compiler;
  function registerMessageCompiler(compiler) {
    _compiler = compiler;
  }
  let _resolver;
  function registerMessageResolver(resolver) {
    _resolver = resolver;
  }
  let _fallbacker;
  function registerLocaleFallbacker(fallbacker) {
    _fallbacker = fallbacker;
  }
  let _additionalMeta = null;
  const setAdditionalMeta = (meta) => {
    _additionalMeta = meta;
  };
  const getAdditionalMeta = () => _additionalMeta;
  let _fallbackContext = null;
  const setFallbackContext = (context) => {
    _fallbackContext = context;
  };
  const getFallbackContext = () => _fallbackContext;
  let _cid = 0;
  function createCoreContext(options = {}) {
    const version = shared2.isString(options.version) ? options.version : VERSION2;
    const locale = shared2.isString(options.locale) ? options.locale : DEFAULT_LOCALE;
    const fallbackLocale = shared2.isArray(options.fallbackLocale) || shared2.isPlainObject(options.fallbackLocale) || shared2.isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const messages = shared2.isPlainObject(options.messages) ? options.messages : { [locale]: {} };
    const datetimeFormats = shared2.isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
    const numberFormats = shared2.isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
    const modifiers = shared2.assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = shared2.isFunction(options.missing) ? options.missing : null;
    const missingWarn = shared2.isBoolean(options.missingWarn) || shared2.isRegExp(options.missingWarn) ? options.missingWarn : true;
    const fallbackWarn = shared2.isBoolean(options.fallbackWarn) || shared2.isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = shared2.isFunction(options.postTranslation) ? options.postTranslation : null;
    const processor = shared2.isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = shared2.isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler3 = shared2.isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
    const messageResolver = shared2.isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
    const localeFallbacker = shared2.isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
    const fallbackContext = shared2.isObject(options.fallbackContext) ? options.fallbackContext : void 0;
    const onWarn = shared2.isFunction(options.onWarn) ? options.onWarn : shared2.warn;
    const internalOptions = options;
    const __datetimeFormatters = shared2.isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
    const __numberFormatters = shared2.isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
    const __meta = shared2.isObject(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
      version,
      cid: _cid,
      locale,
      fallbackLocale,
      messages,
      modifiers,
      pluralRules,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackFormat,
      unresolving,
      postTranslation,
      processor,
      warnHtmlMessage,
      escapeParameter,
      messageCompiler: messageCompiler3,
      messageResolver,
      localeFallbacker,
      fallbackContext,
      onWarn,
      __meta
    };
    {
      context.datetimeFormats = datetimeFormats;
      context.numberFormats = numberFormats;
      context.__datetimeFormatters = __datetimeFormatters;
      context.__numberFormatters = __numberFormatters;
    }
    return context;
  }
  function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
  }
  function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
  }
  function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    if (missing !== null) {
      const ret = missing(context, locale, key, type);
      return shared2.isString(ret) ? ret : key;
    } else {
      return key;
    }
  }
  function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = /* @__PURE__ */ new Map();
    ctx.localeFallbacker(ctx, fallback, locale);
  }
  const defaultOnCacheKey = (source) => source;
  let compileCache = /* @__PURE__ */ Object.create(null);
  function clearCompileCache() {
    compileCache = /* @__PURE__ */ Object.create(null);
  }
  function compileToFunction(source, options = {}) {
    {
      const onCacheKey = options.onCacheKey || defaultOnCacheKey;
      const key = onCacheKey(source);
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      let occurred = false;
      const onError = options.onError || messageCompiler2.defaultOnError;
      options.onError = (err) => {
        occurred = true;
        onError(err);
      };
      const { code: code3 } = messageCompiler2.baseCompile(source, options);
      const msg = new Function(`return ${code3}`)();
      return !occurred ? compileCache[key] = msg : msg;
    }
  }
  let code2 = messageCompiler2.CompileErrorCodes.__EXTEND_POINT__;
  const inc2 = () => ++code2;
  const CoreErrorCodes = {
    INVALID_ARGUMENT: code2,
    INVALID_DATE_ARGUMENT: inc2(),
    INVALID_ISO_DATE_ARGUMENT: inc2(),
    __EXTEND_POINT__: inc2()
    // 18
  };
  function createCoreError(code3) {
    return messageCompiler2.createCompileError(code3, null, void 0);
  }
  ({
    [CoreErrorCodes.INVALID_ARGUMENT]: "Invalid arguments",
    [CoreErrorCodes.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
  });
  const NOOP_MESSAGE_FUNCTION = () => "";
  const isMessageFunction = (val) => shared2.isFunction(val);
  function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, messageCompiler: messageCompiler3, fallbackLocale, messages } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = shared2.isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = shared2.isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const escapeParameter = shared2.isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    const defaultMsgOrKey = shared2.isString(options.default) || shared2.isBoolean(options.default) ? !shared2.isBoolean(options.default) ? options.default : !messageCompiler3 ? () => key : key : fallbackFormat ? !messageCompiler3 ? () => key : key : "";
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
    const locale = shared2.isString(options.locale) ? options.locale : context.locale;
    escapeParameter && escapeParams(options);
    let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
      key,
      locale,
      messages[locale] || {}
    ];
    let format = formatScope;
    let cacheBaseKey = key;
    if (!resolvedMessage && !(shared2.isString(format) || isMessageFunction(format))) {
      if (enableDefaultMsg) {
        format = defaultMsgOrKey;
        cacheBaseKey = format;
      }
    }
    if (!resolvedMessage && (!(shared2.isString(format) || isMessageFunction(format)) || !shared2.isString(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let occurred = false;
    const errorDetector = () => {
      occurred = true;
    };
    const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) : format;
    if (occurred) {
      return format;
    }
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    const ret = postTranslation ? postTranslation(messaged, key) : messaged;
    return ret;
  }
  function escapeParams(options) {
    if (shared2.isArray(options.list)) {
      options.list = options.list.map((item) => shared2.isString(item) ? shared2.escapeHtml(item) : item);
    } else if (shared2.isObject(options.named)) {
      Object.keys(options.named).forEach((key) => {
        if (shared2.isString(options.named[key])) {
          options.named[key] = shared2.escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
    const locales = localeFallbacker(context, fallbackLocale, locale);
    let message = {};
    let targetLocale;
    let format = null;
    const type = "translate";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = locales[i];
      message = messages[targetLocale] || {};
      if ((format = resolveValue2(message, key)) === null) {
        format = message[key];
      }
      if (shared2.isString(format) || shared2.isFunction(format))
        break;
      const missingRet = handleMissing(
        context,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        key,
        targetLocale,
        missingWarn,
        type
      );
      if (missingRet !== key) {
        format = missingRet;
      }
    }
    return [format, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
    const { messageCompiler: messageCompiler3, warnHtmlMessage } = context;
    if (isMessageFunction(format)) {
      const msg2 = format;
      msg2.locale = msg2.locale || targetLocale;
      msg2.key = msg2.key || key;
      return msg2;
    }
    if (messageCompiler3 == null) {
      const msg2 = () => format;
      msg2.locale = targetLocale;
      msg2.key = key;
      return msg2;
    }
    const msg = messageCompiler3(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    const messaged = msg(msgCtx);
    return messaged;
  }
  function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!shared2.isString(arg1) && !shared2.isNumber(arg1) && !isMessageFunction(arg1)) {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    const key = shared2.isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (shared2.isNumber(arg2)) {
      options.plural = arg2;
    } else if (shared2.isString(arg2)) {
      options.default = arg2;
    } else if (shared2.isPlainObject(arg2) && !shared2.isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (shared2.isArray(arg2)) {
      options.list = arg2;
    }
    if (shared2.isNumber(arg3)) {
      options.plural = arg3;
    } else if (shared2.isString(arg3)) {
      options.default = arg3;
    } else if (shared2.isPlainObject(arg3)) {
      shared2.assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
      warnHtmlMessage,
      onError: (err) => {
        errorDetector && errorDetector(err);
        {
          throw err;
        }
      },
      onCacheKey: (source2) => shared2.generateFormatCacheKey(locale, key, source2)
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
    const resolveMessage = (key) => {
      let val = resolveValue2(message, key);
      if (val == null && fallbackContext) {
        const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
        val = resolveValue2(message2, key);
      }
      if (shared2.isString(val)) {
        let occurred = false;
        const errorDetector = () => {
          occurred = true;
        };
        const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    const ctxOptions = {
      locale,
      modifiers,
      pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (shared2.isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __datetimeFormatters } = context;
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = shared2.isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    shared2.isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = shared2.isString(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(
      context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      fallbackLocale,
      locale
    );
    if (!shared2.isString(key) || key === "") {
      return new Intl.DateTimeFormat(locale, overrides).format(value);
    }
    let datetimeFormat = {};
    let targetLocale;
    let format = null;
    const type = "datetime format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = locales[i];
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format = datetimeFormat[key];
      if (shared2.isPlainObject(format))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
    }
    if (!shared2.isPlainObject(format) || !shared2.isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!shared2.isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, shared2.assign({}, format, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  const DATETIME_FORMAT_OPTIONS_KEYS = [
    "localeMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "formatMatcher",
    "hour12",
    "timeZone",
    "dateStyle",
    "timeStyle",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "hourCycle",
    "fractionalSecondDigits"
  ];
  function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    let value;
    if (shared2.isString(arg1)) {
      const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!matches) {
        throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
      }
      const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
      value = new Date(dateTime);
      try {
        value.toISOString();
      } catch (e) {
        throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (shared2.isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
      }
      value = arg1;
    } else if (shared2.isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    if (shared2.isString(arg2)) {
      options.key = arg2;
    } else if (shared2.isPlainObject(arg2)) {
      Object.keys(arg2).forEach((key) => {
        if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
          overrides[key] = arg2[key];
        } else {
          options[key] = arg2[key];
        }
      });
    }
    if (shared2.isString(arg3)) {
      options.locale = arg3;
    } else if (shared2.isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (shared2.isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearDateTimeFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
      const id = `${locale}__${key}`;
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters.delete(id);
    }
  }
  function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __numberFormatters } = context;
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = shared2.isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    shared2.isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = shared2.isString(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(
      context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      fallbackLocale,
      locale
    );
    if (!shared2.isString(key) || key === "") {
      return new Intl.NumberFormat(locale, overrides).format(value);
    }
    let numberFormat = {};
    let targetLocale;
    let format = null;
    const type = "number format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = locales[i];
      numberFormat = numberFormats[targetLocale] || {};
      format = numberFormat[key];
      if (shared2.isPlainObject(format))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
    }
    if (!shared2.isPlainObject(format) || !shared2.isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!shared2.isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, shared2.assign({}, format, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  const NUMBER_FORMAT_OPTIONS_KEYS = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "roundingMode",
    "roundingPriority",
    "roundingIncrement",
    "trailingZeroDisplay"
  ];
  function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    if (!shared2.isNumber(arg1)) {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    const value = arg1;
    if (shared2.isString(arg2)) {
      options.key = arg2;
    } else if (shared2.isPlainObject(arg2)) {
      Object.keys(arg2).forEach((key) => {
        if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
          overrides[key] = arg2[key];
        } else {
          options[key] = arg2[key];
        }
      });
    }
    if (shared2.isString(arg3)) {
      options.locale = arg3;
    } else if (shared2.isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (shared2.isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearNumberFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
      const id = `${locale}__${key}`;
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters.delete(id);
    }
  }
  coreBase_cjs_prod.CompileErrorCodes = messageCompiler2.CompileErrorCodes;
  coreBase_cjs_prod.createCompileError = messageCompiler2.createCompileError;
  coreBase_cjs_prod.CoreErrorCodes = CoreErrorCodes;
  coreBase_cjs_prod.CoreWarnCodes = CoreWarnCodes;
  coreBase_cjs_prod.DATETIME_FORMAT_OPTIONS_KEYS = DATETIME_FORMAT_OPTIONS_KEYS;
  coreBase_cjs_prod.DEFAULT_LOCALE = DEFAULT_LOCALE;
  coreBase_cjs_prod.DEFAULT_MESSAGE_DATA_TYPE = DEFAULT_MESSAGE_DATA_TYPE;
  coreBase_cjs_prod.MISSING_RESOLVE_VALUE = MISSING_RESOLVE_VALUE;
  coreBase_cjs_prod.NOT_REOSLVED = NOT_REOSLVED;
  coreBase_cjs_prod.NUMBER_FORMAT_OPTIONS_KEYS = NUMBER_FORMAT_OPTIONS_KEYS;
  coreBase_cjs_prod.VERSION = VERSION2;
  coreBase_cjs_prod.clearCompileCache = clearCompileCache;
  coreBase_cjs_prod.clearDateTimeFormat = clearDateTimeFormat;
  coreBase_cjs_prod.clearNumberFormat = clearNumberFormat;
  coreBase_cjs_prod.compileToFunction = compileToFunction;
  coreBase_cjs_prod.createCoreContext = createCoreContext;
  coreBase_cjs_prod.createCoreError = createCoreError;
  coreBase_cjs_prod.createMessageContext = createMessageContext;
  coreBase_cjs_prod.datetime = datetime;
  coreBase_cjs_prod.fallbackWithLocaleChain = fallbackWithLocaleChain;
  coreBase_cjs_prod.fallbackWithSimple = fallbackWithSimple;
  coreBase_cjs_prod.getAdditionalMeta = getAdditionalMeta;
  coreBase_cjs_prod.getDevToolsHook = getDevToolsHook;
  coreBase_cjs_prod.getFallbackContext = getFallbackContext;
  coreBase_cjs_prod.getWarnMessage = getWarnMessage2;
  coreBase_cjs_prod.handleMissing = handleMissing;
  coreBase_cjs_prod.initI18nDevTools = initI18nDevTools;
  coreBase_cjs_prod.isMessageFunction = isMessageFunction;
  coreBase_cjs_prod.isTranslateFallbackWarn = isTranslateFallbackWarn;
  coreBase_cjs_prod.isTranslateMissingWarn = isTranslateMissingWarn;
  coreBase_cjs_prod.number = number;
  coreBase_cjs_prod.parse = parse;
  coreBase_cjs_prod.parseDateTimeArgs = parseDateTimeArgs;
  coreBase_cjs_prod.parseNumberArgs = parseNumberArgs;
  coreBase_cjs_prod.parseTranslateArgs = parseTranslateArgs;
  coreBase_cjs_prod.registerLocaleFallbacker = registerLocaleFallbacker;
  coreBase_cjs_prod.registerMessageCompiler = registerMessageCompiler;
  coreBase_cjs_prod.registerMessageResolver = registerMessageResolver;
  coreBase_cjs_prod.resolveValue = resolveValue;
  coreBase_cjs_prod.resolveWithKeyValue = resolveWithKeyValue;
  coreBase_cjs_prod.setAdditionalMeta = setAdditionalMeta;
  coreBase_cjs_prod.setDevToolsHook = setDevToolsHook;
  coreBase_cjs_prod.setFallbackContext = setFallbackContext;
  coreBase_cjs_prod.translate = translate;
  coreBase_cjs_prod.translateDevTools = translateDevTools;
  coreBase_cjs_prod.updateFallbackLocale = updateFallbackLocale;
  return coreBase_cjs_prod;
}
var coreBase_cjs = {};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredCoreBase_cjs;
function requireCoreBase_cjs() {
  if (hasRequiredCoreBase_cjs) return coreBase_cjs;
  hasRequiredCoreBase_cjs = 1;
  Object.defineProperty(coreBase_cjs, "__esModule", { value: true });
  var messageCompiler2 = requireMessageCompiler();
  var shared2 = sharedExports;
  var devtoolsIf2 = requireDevtoolsIf();
  const pathStateMachine = [];
  pathStateMachine[
    0
    /* BEFORE_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      0
      /* BEFORE_PATH */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    1
    /* IN_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      1
      /* IN_PATH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    2
    /* BEFORE_IDENT */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    3
    /* IN_IDENT */
  ] = {
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "w"
      /* WORKSPACE */
    ]: [
      1,
      1
      /* PUSH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2,
      1
      /* PUSH */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      1
      /* PUSH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7,
      1
      /* PUSH */
    ]
  };
  pathStateMachine[
    4
    /* IN_SUB_PATH */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      5,
      0
      /* APPEND */
    ],
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      6,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      2
      /* INC_SUB_PATH_DEPTH */
    ],
    [
      "]"
      /* RIGHT_BRACKET */
    ]: [
      1,
      3
      /* PUSH_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      4,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    5
    /* IN_SINGLE_QUOTE */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      5,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    6
    /* IN_DOUBLE_QUOTE */
  ] = {
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      6,
      0
      /* APPEND */
    ]
  };
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
  }
  function getPathCharType(ch) {
    if (ch === void 0 || ch === null) {
      return "o";
    }
    const code3 = ch.charCodeAt(0);
    switch (code3) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return ch;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function formatSubPath(path) {
    const trimmed = path.trim();
    if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
  }
  function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0;
    let subPathDepth = 0;
    let c;
    let key;
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[
      0
      /* APPEND */
    ] = () => {
      if (key === void 0) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions[
      1
      /* PUSH */
    ] = () => {
      if (key !== void 0) {
        keys.push(key);
        key = void 0;
      }
    };
    actions[
      2
      /* INC_SUB_PATH_DEPTH */
    ] = () => {
      actions[
        0
        /* APPEND */
      ]();
      subPathDepth++;
    };
    actions[
      3
      /* PUSH_SUB_PATH */
    ] = () => {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4;
        actions[
          0
          /* APPEND */
        ]();
      } else {
        subPathDepth = 0;
        if (key === void 0) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[
            1
            /* PUSH */
          ]();
        }
      }
    };
    function maybeUnescapeQuote() {
      const nextChar = path[index + 1];
      if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
        index++;
        newChar = "\\" + nextChar;
        actions[
          0
          /* APPEND */
        ]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c = path[index];
      if (c === "\\" && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap[
        "l"
        /* ELSE */
      ] || 8;
      if (transition === 8) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== void 0) {
        action = actions[transition[1]];
        if (action) {
          newChar = c;
          if (action() === false) {
            return;
          }
        }
      }
      if (mode === 7) {
        return keys;
      }
    }
  }
  const cache = /* @__PURE__ */ new Map();
  function resolveWithKeyValue(obj, path) {
    return shared2.isObject(obj) ? obj[path] : null;
  }
  function resolveValue(obj, path) {
    if (!shared2.isObject(obj)) {
      return null;
    }
    let hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    if (!hit) {
      return null;
    }
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
      const val = last[hit[i]];
      if (val === void 0) {
        return null;
      }
      last = val;
      i++;
    }
    return last;
  }
  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => "";
  const DEFAULT_MESSAGE_DATA_TYPE = "text";
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
  const DEFAULT_INTERPOLATE = shared2.toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    const index = shared2.isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    return options.named && (shared2.isNumber(options.named.count) || shared2.isNumber(options.named.n)) ? shared2.isNumber(options.named.count) ? options.named.count : shared2.isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
      props.count = pluralIndex;
    }
    if (!props.n) {
      props.n = pluralIndex;
    }
  }
  function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = shared2.isObject(options.pluralRules) && shared2.isString(locale) && shared2.isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    const orgPluralRule = shared2.isObject(options.pluralRules) && shared2.isString(locale) && shared2.isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
    const plural = (messages) => {
      return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
    };
    const _list = options.list || [];
    const list = (index) => _list[index];
    const _named = options.named || {};
    shared2.isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
      const msg = shared2.isFunction(options.messages) ? options.messages(key) : shared2.isObject(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
    }
    const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
    const normalize = shared2.isPlainObject(options.processor) && shared2.isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    const interpolate = shared2.isPlainObject(options.processor) && shared2.isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    const type = shared2.isPlainObject(options.processor) && shared2.isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    const linked = (key, ...args) => {
      const [arg1, arg2] = args;
      let type2 = "text";
      let modifier = "";
      if (args.length === 1) {
        if (shared2.isObject(arg1)) {
          modifier = arg1.modifier || modifier;
          type2 = arg1.type || type2;
        } else if (shared2.isString(arg1)) {
          modifier = arg1 || modifier;
        }
      } else if (args.length === 2) {
        if (shared2.isString(arg1)) {
          modifier = arg1 || modifier;
        }
        if (shared2.isString(arg2)) {
          type2 = arg2 || type2;
        }
      }
      let msg = message(key)(ctx);
      if (type2 === "vnode" && shared2.isArray(msg) && modifier) {
        msg = msg[0];
      }
      return modifier ? _modifier(modifier)(msg, type2) : msg;
    };
    const ctx = {
      [
        "list"
        /* LIST */
      ]: list,
      [
        "named"
        /* NAMED */
      ]: named,
      [
        "plural"
        /* PLURAL */
      ]: plural,
      [
        "linked"
        /* LINKED */
      ]: linked,
      [
        "message"
        /* MESSAGE */
      ]: message,
      [
        "type"
        /* TYPE */
      ]: type,
      [
        "interpolate"
        /* INTERPOLATE */
      ]: interpolate,
      [
        "normalize"
        /* NORMALIZE */
      ]: normalize
    };
    return ctx;
  }
  let devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function getDevToolsHook() {
    return devtools;
  }
  function initI18nDevTools(i18n2, version, meta) {
    devtools && devtools.emit(devtoolsIf2.IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: i18n2,
      version,
      meta
    });
  }
  const translateDevTools = /* @__PURE__ */ createDevToolsHook(devtoolsIf2.IntlifyDevToolsHooks.FunctionTranslate);
  function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
  }
  const CoreWarnCodes = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
  };
  const warnMessages2 = {
    [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
    [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
    [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
    [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
    [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
    [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`
  };
  function getWarnMessage2(code3, ...args) {
    return shared2.format(warnMessages2[code3], ...args);
  }
  function fallbackWithSimple(ctx, fallback, start) {
    return [.../* @__PURE__ */ new Set([
      start,
      ...shared2.isArray(fallback) ? fallback : shared2.isObject(fallback) ? Object.keys(fallback) : shared2.isString(fallback) ? [fallback] : [start]
    ])];
  }
  function fallbackWithLocaleChain(ctx, fallback, start) {
    const startLocale = shared2.isString(start) ? start : DEFAULT_LOCALE;
    const context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = /* @__PURE__ */ new Map();
    }
    let chain = context.__localeChainCache.get(startLocale);
    if (!chain) {
      chain = [];
      let block = [start];
      while (shared2.isArray(block)) {
        block = appendBlockToChain(chain, block, fallback);
      }
      const defaults = shared2.isArray(fallback) || !shared2.isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
      block = shared2.isString(defaults) ? [defaults] : defaults;
      if (shared2.isArray(block)) {
        appendBlockToChain(chain, block, false);
      }
      context.__localeChainCache.set(startLocale, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && shared2.isBoolean(follow); i++) {
      const locale = block[i];
      if (shared2.isString(locale)) {
        follow = appendLocaleToChain(chain, block[i], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split("-");
    do {
      const target = tokens.join("-");
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== "!";
        const locale = target.replace(/!/g, "");
        chain.push(locale);
        if ((shared2.isArray(blocks) || shared2.isPlainObject(blocks)) && blocks[locale]) {
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }
  const VERSION2 = "9.2.2";
  const NOT_REOSLVED = -1;
  const DEFAULT_LOCALE = "en-US";
  const MISSING_RESOLVE_VALUE = "";
  const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
  function getDefaultLinkedModifiers() {
    return {
      upper: (val, type) => {
        return type === "text" && shared2.isString(val) ? val.toUpperCase() : type === "vnode" && shared2.isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
      },
      lower: (val, type) => {
        return type === "text" && shared2.isString(val) ? val.toLowerCase() : type === "vnode" && shared2.isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
      },
      capitalize: (val, type) => {
        return type === "text" && shared2.isString(val) ? capitalize(val) : type === "vnode" && shared2.isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
      }
    };
  }
  let _compiler;
  function registerMessageCompiler(compiler) {
    _compiler = compiler;
  }
  let _resolver;
  function registerMessageResolver(resolver) {
    _resolver = resolver;
  }
  let _fallbacker;
  function registerLocaleFallbacker(fallbacker) {
    _fallbacker = fallbacker;
  }
  let _additionalMeta = null;
  const setAdditionalMeta = (meta) => {
    _additionalMeta = meta;
  };
  const getAdditionalMeta = () => _additionalMeta;
  let _fallbackContext = null;
  const setFallbackContext = (context) => {
    _fallbackContext = context;
  };
  const getFallbackContext = () => _fallbackContext;
  let _cid = 0;
  function createCoreContext(options = {}) {
    const version = shared2.isString(options.version) ? options.version : VERSION2;
    const locale = shared2.isString(options.locale) ? options.locale : DEFAULT_LOCALE;
    const fallbackLocale = shared2.isArray(options.fallbackLocale) || shared2.isPlainObject(options.fallbackLocale) || shared2.isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const messages = shared2.isPlainObject(options.messages) ? options.messages : { [locale]: {} };
    const datetimeFormats = shared2.isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
    const numberFormats = shared2.isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
    const modifiers = shared2.assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = shared2.isFunction(options.missing) ? options.missing : null;
    const missingWarn = shared2.isBoolean(options.missingWarn) || shared2.isRegExp(options.missingWarn) ? options.missingWarn : true;
    const fallbackWarn = shared2.isBoolean(options.fallbackWarn) || shared2.isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = shared2.isFunction(options.postTranslation) ? options.postTranslation : null;
    const processor = shared2.isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = shared2.isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler3 = shared2.isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
    const messageResolver = shared2.isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
    const localeFallbacker = shared2.isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
    const fallbackContext = shared2.isObject(options.fallbackContext) ? options.fallbackContext : void 0;
    const onWarn = shared2.isFunction(options.onWarn) ? options.onWarn : shared2.warn;
    const internalOptions = options;
    const __datetimeFormatters = shared2.isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
    const __numberFormatters = shared2.isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
    const __meta = shared2.isObject(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
      version,
      cid: _cid,
      locale,
      fallbackLocale,
      messages,
      modifiers,
      pluralRules,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackFormat,
      unresolving,
      postTranslation,
      processor,
      warnHtmlMessage,
      escapeParameter,
      messageCompiler: messageCompiler3,
      messageResolver,
      localeFallbacker,
      fallbackContext,
      onWarn,
      __meta
    };
    {
      context.datetimeFormats = datetimeFormats;
      context.numberFormats = numberFormats;
      context.__datetimeFormatters = __datetimeFormatters;
      context.__numberFormatters = __numberFormatters;
    }
    {
      context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
    }
    {
      initI18nDevTools(context, version, __meta);
    }
    return context;
  }
  function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
  }
  function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
  }
  function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("missing", {
          locale,
          key,
          type,
          groupId: `${type}:${key}`
        });
      }
    }
    if (missing !== null) {
      const ret = missing(context, locale, key, type);
      return shared2.isString(ret) ? ret : key;
    } else {
      if (isTranslateMissingWarn(missingWarn, key)) {
        onWarn(getWarnMessage2(CoreWarnCodes.NOT_FOUND_KEY, { key, locale }));
      }
      return key;
    }
  }
  function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = /* @__PURE__ */ new Map();
    ctx.localeFallbacker(ctx, fallback, locale);
  }
  const RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
  const WARN_MESSAGE = `Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.`;
  function checkHtmlMessage(source, options) {
    const warnHtmlMessage = shared2.isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    if (warnHtmlMessage && RE_HTML_TAG.test(source)) {
      shared2.warn(shared2.format(WARN_MESSAGE, { source }));
    }
  }
  const defaultOnCacheKey = (source) => source;
  let compileCache = /* @__PURE__ */ Object.create(null);
  function clearCompileCache() {
    compileCache = /* @__PURE__ */ Object.create(null);
  }
  function compileToFunction(source, options = {}) {
    {
      checkHtmlMessage(source, options);
      const onCacheKey = options.onCacheKey || defaultOnCacheKey;
      const key = onCacheKey(source);
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      let occurred = false;
      const onError = options.onError || messageCompiler2.defaultOnError;
      options.onError = (err) => {
        occurred = true;
        onError(err);
      };
      const { code: code3 } = messageCompiler2.baseCompile(source, options);
      const msg = new Function(`return ${code3}`)();
      return !occurred ? compileCache[key] = msg : msg;
    }
  }
  let code2 = messageCompiler2.CompileErrorCodes.__EXTEND_POINT__;
  const inc2 = () => ++code2;
  const CoreErrorCodes = {
    INVALID_ARGUMENT: code2,
    INVALID_DATE_ARGUMENT: inc2(),
    INVALID_ISO_DATE_ARGUMENT: inc2(),
    __EXTEND_POINT__: inc2()
    // 18
  };
  function createCoreError(code3) {
    return messageCompiler2.createCompileError(code3, null, { messages: errorMessages2 });
  }
  const errorMessages2 = {
    [CoreErrorCodes.INVALID_ARGUMENT]: "Invalid arguments",
    [CoreErrorCodes.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
  };
  const NOOP_MESSAGE_FUNCTION = () => "";
  const isMessageFunction = (val) => shared2.isFunction(val);
  function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, messageCompiler: messageCompiler3, fallbackLocale, messages } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = shared2.isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = shared2.isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const escapeParameter = shared2.isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    const defaultMsgOrKey = shared2.isString(options.default) || shared2.isBoolean(options.default) ? !shared2.isBoolean(options.default) ? options.default : !messageCompiler3 ? () => key : key : fallbackFormat ? !messageCompiler3 ? () => key : key : "";
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
    const locale = shared2.isString(options.locale) ? options.locale : context.locale;
    escapeParameter && escapeParams(options);
    let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
      key,
      locale,
      messages[locale] || {}
    ];
    let format = formatScope;
    let cacheBaseKey = key;
    if (!resolvedMessage && !(shared2.isString(format) || isMessageFunction(format))) {
      if (enableDefaultMsg) {
        format = defaultMsgOrKey;
        cacheBaseKey = format;
      }
    }
    if (!resolvedMessage && (!(shared2.isString(format) || isMessageFunction(format)) || !shared2.isString(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    if (shared2.isString(format) && context.messageCompiler == null) {
      shared2.warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
      return key;
    }
    let occurred = false;
    const errorDetector = () => {
      occurred = true;
    };
    const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) : format;
    if (occurred) {
      return format;
    }
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    const ret = postTranslation ? postTranslation(messaged, key) : messaged;
    {
      const payloads = {
        timestamp: Date.now(),
        key: shared2.isString(key) ? key : isMessageFunction(format) ? format.key : "",
        locale: targetLocale || (isMessageFunction(format) ? format.locale : ""),
        format: shared2.isString(format) ? format : isMessageFunction(format) ? format.source : "",
        message: ret
      };
      payloads.meta = shared2.assign({}, context.__meta, getAdditionalMeta() || {});
      translateDevTools(payloads);
    }
    return ret;
  }
  function escapeParams(options) {
    if (shared2.isArray(options.list)) {
      options.list = options.list.map((item) => shared2.isString(item) ? shared2.escapeHtml(item) : item);
    } else if (shared2.isObject(options.named)) {
      Object.keys(options.named).forEach((key) => {
        if (shared2.isString(options.named[key])) {
          options.named[key] = shared2.escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
    const locales = localeFallbacker(context, fallbackLocale, locale);
    let message = {};
    let targetLocale;
    let format = null;
    let from = locale;
    let to = null;
    const type = "translate";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage2(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      message = messages[targetLocale] || {};
      let start = null;
      let startTag;
      let endTag;
      if (shared2.inBrowser) {
        start = window.performance.now();
        startTag = "intlify-message-resolve-start";
        endTag = "intlify-message-resolve-end";
        shared2.mark && shared2.mark(startTag);
      }
      if ((format = resolveValue2(message, key)) === null) {
        format = message[key];
      }
      if (shared2.inBrowser) {
        const end = window.performance.now();
        const emitter = context.__v_emitter;
        if (emitter && start && format) {
          emitter.emit("message-resolve", {
            type: "message-resolve",
            key,
            message: format,
            time: end - start,
            groupId: `${type}:${key}`
          });
        }
        if (startTag && endTag && shared2.mark && shared2.measure) {
          shared2.mark(endTag);
          shared2.measure("intlify message resolve", startTag, endTag);
        }
      }
      if (shared2.isString(format) || shared2.isFunction(format))
        break;
      const missingRet = handleMissing(
        context,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        key,
        targetLocale,
        missingWarn,
        type
      );
      if (missingRet !== key) {
        format = missingRet;
      }
      from = to;
    }
    return [format, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
    const { messageCompiler: messageCompiler3, warnHtmlMessage } = context;
    if (isMessageFunction(format)) {
      const msg2 = format;
      msg2.locale = msg2.locale || targetLocale;
      msg2.key = msg2.key || key;
      return msg2;
    }
    if (messageCompiler3 == null) {
      const msg2 = () => format;
      msg2.locale = targetLocale;
      msg2.key = key;
      return msg2;
    }
    let start = null;
    let startTag;
    let endTag;
    if (shared2.inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-compilation-start";
      endTag = "intlify-message-compilation-end";
      shared2.mark && shared2.mark(startTag);
    }
    const msg = messageCompiler3(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
    if (shared2.inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-compilation", {
          type: "message-compilation",
          message: format,
          time: end - start,
          groupId: `${"translate"}:${key}`
        });
      }
      if (startTag && endTag && shared2.mark && shared2.measure) {
        shared2.mark(endTag);
        shared2.measure("intlify message compilation", startTag, endTag);
      }
    }
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    let start = null;
    let startTag;
    let endTag;
    if (shared2.inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-evaluation-start";
      endTag = "intlify-message-evaluation-end";
      shared2.mark && shared2.mark(startTag);
    }
    const messaged = msg(msgCtx);
    if (shared2.inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-evaluation", {
          type: "message-evaluation",
          value: messaged,
          time: end - start,
          groupId: `${"translate"}:${msg.key}`
        });
      }
      if (startTag && endTag && shared2.mark && shared2.measure) {
        shared2.mark(endTag);
        shared2.measure("intlify message evaluation", startTag, endTag);
      }
    }
    return messaged;
  }
  function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!shared2.isString(arg1) && !shared2.isNumber(arg1) && !isMessageFunction(arg1)) {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    const key = shared2.isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (shared2.isNumber(arg2)) {
      options.plural = arg2;
    } else if (shared2.isString(arg2)) {
      options.default = arg2;
    } else if (shared2.isPlainObject(arg2) && !shared2.isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (shared2.isArray(arg2)) {
      options.list = arg2;
    }
    if (shared2.isNumber(arg3)) {
      options.plural = arg3;
    } else if (shared2.isString(arg3)) {
      options.default = arg3;
    } else if (shared2.isPlainObject(arg3)) {
      shared2.assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
      warnHtmlMessage,
      onError: (err) => {
        errorDetector && errorDetector(err);
        {
          const message = `Message compilation error: ${err.message}`;
          const codeFrame = err.location && shared2.generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
          const emitter = context.__v_emitter;
          if (emitter) {
            emitter.emit("compile-error", {
              message: source,
              error: err.message,
              start: err.location && err.location.start.offset,
              end: err.location && err.location.end.offset,
              groupId: `${"translate"}:${key}`
            });
          }
          console.error(codeFrame ? `${message}
${codeFrame}` : message);
        }
      },
      onCacheKey: (source2) => shared2.generateFormatCacheKey(locale, key, source2)
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
    const resolveMessage = (key) => {
      let val = resolveValue2(message, key);
      if (val == null && fallbackContext) {
        const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
        val = resolveValue2(message2, key);
      }
      if (shared2.isString(val)) {
        let occurred = false;
        const errorDetector = () => {
          occurred = true;
        };
        const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    const ctxOptions = {
      locale,
      modifiers,
      pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (shared2.isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  const intlDefined = typeof Intl !== "undefined";
  const Availabilities = {
    dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
    numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
  };
  function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __datetimeFormatters } = context;
    if (!Availabilities.dateTimeFormat) {
      onWarn(getWarnMessage2(CoreWarnCodes.CANNOT_FORMAT_DATE));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = shared2.isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = shared2.isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = shared2.isString(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(
      context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      fallbackLocale,
      locale
    );
    if (!shared2.isString(key) || key === "") {
      return new Intl.DateTimeFormat(locale, overrides).format(value);
    }
    let datetimeFormat = {};
    let targetLocale;
    let format = null;
    let from = locale;
    let to = null;
    const type = "datetime format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage2(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format = datetimeFormat[key];
      if (shared2.isPlainObject(format))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!shared2.isPlainObject(format) || !shared2.isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!shared2.isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, shared2.assign({}, format, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  const DATETIME_FORMAT_OPTIONS_KEYS = [
    "localeMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "formatMatcher",
    "hour12",
    "timeZone",
    "dateStyle",
    "timeStyle",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "hourCycle",
    "fractionalSecondDigits"
  ];
  function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    let value;
    if (shared2.isString(arg1)) {
      const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!matches) {
        throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
      }
      const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
      value = new Date(dateTime);
      try {
        value.toISOString();
      } catch (e) {
        throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (shared2.isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
      }
      value = arg1;
    } else if (shared2.isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    if (shared2.isString(arg2)) {
      options.key = arg2;
    } else if (shared2.isPlainObject(arg2)) {
      Object.keys(arg2).forEach((key) => {
        if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
          overrides[key] = arg2[key];
        } else {
          options[key] = arg2[key];
        }
      });
    }
    if (shared2.isString(arg3)) {
      options.locale = arg3;
    } else if (shared2.isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (shared2.isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearDateTimeFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
      const id = `${locale}__${key}`;
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters.delete(id);
    }
  }
  function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __numberFormatters } = context;
    if (!Availabilities.numberFormat) {
      onWarn(getWarnMessage2(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = shared2.isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = shared2.isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = shared2.isString(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(
      context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      fallbackLocale,
      locale
    );
    if (!shared2.isString(key) || key === "") {
      return new Intl.NumberFormat(locale, overrides).format(value);
    }
    let numberFormat = {};
    let targetLocale;
    let format = null;
    let from = locale;
    let to = null;
    const type = "number format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage2(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      numberFormat = numberFormats[targetLocale] || {};
      format = numberFormat[key];
      if (shared2.isPlainObject(format))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!shared2.isPlainObject(format) || !shared2.isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!shared2.isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, shared2.assign({}, format, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  const NUMBER_FORMAT_OPTIONS_KEYS = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "roundingMode",
    "roundingPriority",
    "roundingIncrement",
    "trailingZeroDisplay"
  ];
  function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    if (!shared2.isNumber(arg1)) {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    const value = arg1;
    if (shared2.isString(arg2)) {
      options.key = arg2;
    } else if (shared2.isPlainObject(arg2)) {
      Object.keys(arg2).forEach((key) => {
        if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
          overrides[key] = arg2[key];
        } else {
          options[key] = arg2[key];
        }
      });
    }
    if (shared2.isString(arg3)) {
      options.locale = arg3;
    } else if (shared2.isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (shared2.isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearNumberFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
      const id = `${locale}__${key}`;
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters.delete(id);
    }
  }
  coreBase_cjs.CompileErrorCodes = messageCompiler2.CompileErrorCodes;
  coreBase_cjs.createCompileError = messageCompiler2.createCompileError;
  coreBase_cjs.CoreErrorCodes = CoreErrorCodes;
  coreBase_cjs.CoreWarnCodes = CoreWarnCodes;
  coreBase_cjs.DATETIME_FORMAT_OPTIONS_KEYS = DATETIME_FORMAT_OPTIONS_KEYS;
  coreBase_cjs.DEFAULT_LOCALE = DEFAULT_LOCALE;
  coreBase_cjs.DEFAULT_MESSAGE_DATA_TYPE = DEFAULT_MESSAGE_DATA_TYPE;
  coreBase_cjs.MISSING_RESOLVE_VALUE = MISSING_RESOLVE_VALUE;
  coreBase_cjs.NOT_REOSLVED = NOT_REOSLVED;
  coreBase_cjs.NUMBER_FORMAT_OPTIONS_KEYS = NUMBER_FORMAT_OPTIONS_KEYS;
  coreBase_cjs.VERSION = VERSION2;
  coreBase_cjs.clearCompileCache = clearCompileCache;
  coreBase_cjs.clearDateTimeFormat = clearDateTimeFormat;
  coreBase_cjs.clearNumberFormat = clearNumberFormat;
  coreBase_cjs.compileToFunction = compileToFunction;
  coreBase_cjs.createCoreContext = createCoreContext;
  coreBase_cjs.createCoreError = createCoreError;
  coreBase_cjs.createMessageContext = createMessageContext;
  coreBase_cjs.datetime = datetime;
  coreBase_cjs.fallbackWithLocaleChain = fallbackWithLocaleChain;
  coreBase_cjs.fallbackWithSimple = fallbackWithSimple;
  coreBase_cjs.getAdditionalMeta = getAdditionalMeta;
  coreBase_cjs.getDevToolsHook = getDevToolsHook;
  coreBase_cjs.getFallbackContext = getFallbackContext;
  coreBase_cjs.getWarnMessage = getWarnMessage2;
  coreBase_cjs.handleMissing = handleMissing;
  coreBase_cjs.initI18nDevTools = initI18nDevTools;
  coreBase_cjs.isMessageFunction = isMessageFunction;
  coreBase_cjs.isTranslateFallbackWarn = isTranslateFallbackWarn;
  coreBase_cjs.isTranslateMissingWarn = isTranslateMissingWarn;
  coreBase_cjs.number = number;
  coreBase_cjs.parse = parse;
  coreBase_cjs.parseDateTimeArgs = parseDateTimeArgs;
  coreBase_cjs.parseNumberArgs = parseNumberArgs;
  coreBase_cjs.parseTranslateArgs = parseTranslateArgs;
  coreBase_cjs.registerLocaleFallbacker = registerLocaleFallbacker;
  coreBase_cjs.registerMessageCompiler = registerMessageCompiler;
  coreBase_cjs.registerMessageResolver = registerMessageResolver;
  coreBase_cjs.resolveValue = resolveValue;
  coreBase_cjs.resolveWithKeyValue = resolveWithKeyValue;
  coreBase_cjs.setAdditionalMeta = setAdditionalMeta;
  coreBase_cjs.setDevToolsHook = setDevToolsHook;
  coreBase_cjs.setFallbackContext = setFallbackContext;
  coreBase_cjs.translate = translate;
  coreBase_cjs.translateDevTools = translateDevTools;
  coreBase_cjs.updateFallbackLocale = updateFallbackLocale;
  return coreBase_cjs;
}
if (process.env.NODE_ENV === "production") {
  coreBase.exports = requireCoreBase_cjs_prod();
} else {
  coreBase.exports = requireCoreBase_cjs();
}
var coreBaseExports = coreBase.exports;
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof globalThis !== "undefined" && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
    supported = true;
    perf = globalThis.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy) {
      setupFn(proxy.proxiedTarget);
    }
  }
}
var vueDevtools = { exports: {} };
var vueDevtools_cjs_prod = {};
/*!
  * vue-devtools v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredVueDevtools_cjs_prod;
function requireVueDevtools_cjs_prod() {
  if (hasRequiredVueDevtools_cjs_prod) return vueDevtools_cjs_prod;
  hasRequiredVueDevtools_cjs_prod = 1;
  Object.defineProperty(vueDevtools_cjs_prod, "__esModule", { value: true });
  const VueDevToolsLabels = {
    [
      "vue-devtools-plugin-vue-i18n"
      /* PLUGIN */
    ]: "Vue I18n devtools",
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "I18n Resources",
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: "Vue I18n"
  };
  const VueDevToolsPlaceholders = {
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "Search for scopes ..."
  };
  const VueDevToolsTimelineColors = {
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: 16764185
  };
  vueDevtools_cjs_prod.VueDevToolsLabels = VueDevToolsLabels;
  vueDevtools_cjs_prod.VueDevToolsPlaceholders = VueDevToolsPlaceholders;
  vueDevtools_cjs_prod.VueDevToolsTimelineColors = VueDevToolsTimelineColors;
  return vueDevtools_cjs_prod;
}
var vueDevtools_cjs = {};
/*!
  * vue-devtools v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var hasRequiredVueDevtools_cjs;
function requireVueDevtools_cjs() {
  if (hasRequiredVueDevtools_cjs) return vueDevtools_cjs;
  hasRequiredVueDevtools_cjs = 1;
  Object.defineProperty(vueDevtools_cjs, "__esModule", { value: true });
  const VueDevToolsLabels = {
    [
      "vue-devtools-plugin-vue-i18n"
      /* PLUGIN */
    ]: "Vue I18n devtools",
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "I18n Resources",
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: "Vue I18n"
  };
  const VueDevToolsPlaceholders = {
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "Search for scopes ..."
  };
  const VueDevToolsTimelineColors = {
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: 16764185
  };
  vueDevtools_cjs.VueDevToolsLabels = VueDevToolsLabels;
  vueDevtools_cjs.VueDevToolsPlaceholders = VueDevToolsPlaceholders;
  vueDevtools_cjs.VueDevToolsTimelineColors = VueDevToolsTimelineColors;
  return vueDevtools_cjs;
}
if (process.env.NODE_ENV === "production") {
  vueDevtools.exports = requireVueDevtools_cjs_prod();
} else {
  vueDevtools.exports = requireVueDevtools_cjs();
}
var vueDevtoolsExports = vueDevtools.exports;
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.2.2";
function initFeatureFlags() {
  let needWarn = false;
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    sharedExports.getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
  if (process.env.NODE_ENV !== "production" && needWarn) {
    console.warn(`You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.`);
  }
}
let code$1 = coreBaseExports.CoreWarnCodes.__EXTEND_POINT__;
const inc$1 = () => ++code$1;
const I18nWarnCodes = {
  FALLBACK_TO_ROOT: code$1,
  NOT_SUPPORTED_PRESERVE: inc$1(),
  NOT_SUPPORTED_FORMATTER: inc$1(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
  NOT_FOUND_PARENT_SCOPE: inc$1()
  // 13
};
const warnMessages = {
  [I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE]: `Not supported 'preserve'.`,
  [I18nWarnCodes.NOT_SUPPORTED_FORMATTER]: `Not supported 'formatter'.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: `Not supported 'preserveDirectiveContent'.`,
  [I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX]: `Not supported 'getChoiceIndex'.`,
  [I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE]: `Component name legacy compatible: '{name}' -> 'i18n'`,
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`
};
function getWarnMessage(code2, ...args) {
  return sharedExports.format(warnMessages[code2], ...args);
}
let code = coreBaseExports.CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: code,
  // legacy module errors
  INVALID_ARGUMENT: inc(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  // directive module errors
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  // unexpected error
  UNEXPECTED_ERROR: inc(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  // for enhancement
  __EXTEND_POINT__: inc()
  // 29
};
function createI18nError(code2, ...args) {
  return coreBaseExports.createCompileError(code2, null, process.env.NODE_ENV !== "production" ? { messages: errorMessages, args } : void 0);
}
const errorMessages = {
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [I18nErrorCodes.INVALID_ARGUMENT]: "Invalid argument",
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [I18nErrorCodes.NOT_INSLALLED]: "Need to install with `app.use` function",
  [I18nErrorCodes.UNEXPECTED_ERROR]: "Unexpected error",
  [I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
  [I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
  [I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [I18nErrorCodes.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
};
const TransrateVNodeSymbol = /* @__PURE__ */ sharedExports.makeSymbol("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ sharedExports.makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ sharedExports.makeSymbol("__numberParts");
const EnableEmitter = /* @__PURE__ */ sharedExports.makeSymbol("__enableEmitter");
const DisableEmitter = /* @__PURE__ */ sharedExports.makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = sharedExports.makeSymbol("__setPluralRules");
sharedExports.makeSymbol("__intlifyMeta");
const InejctWithOption = /* @__PURE__ */ sharedExports.makeSymbol("__injectWithOption");
function handleFlatJson(obj) {
  if (!sharedExports.isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!sharedExports.hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (sharedExports.isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (sharedExports.isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = sharedExports.isPlainObject(messages) ? messages : sharedExports.isArray(__i18n) ? {} : { [locale]: {} };
  if (sharedExports.isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        sharedExports.isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (sharedExports.hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !sharedExports.isObject(val) || sharedExports.isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (sharedExports.hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages = sharedExports.isObject(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(global2.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (sharedExports.isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (sharedExports.isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = sharedExports.isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : sharedExports.isString(options.locale) ? options.locale : coreBaseExports.DEFAULT_LOCALE
  );
  const _fallbackLocale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : sharedExports.isString(options.fallbackLocale) || sharedExports.isArray(options.fallbackLocale) || sharedExports.isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(sharedExports.isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(sharedExports.isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : sharedExports.isBoolean(options.missingWarn) || sharedExports.isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : sharedExports.isBoolean(options.fallbackWarn) || sharedExports.isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : sharedExports.isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = sharedExports.isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = sharedExports.isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = sharedExports.isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : sharedExports.isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : sharedExports.isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && coreBaseExports.setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = sharedExports.isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = sharedExports.isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    if (process.env.NODE_ENV !== "production") {
      ctxOptions.__v_emitter = sharedExports.isPlainObject(_context) ? _context.__v_emitter : void 0;
    }
    const ctx = coreBaseExports.createCoreContext(ctxOptions);
    _isGlobal && coreBaseExports.setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  coreBaseExports.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      coreBaseExports.updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return sharedExports.isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type, arg) {
    return type !== "translate" || !arg.resolvedMessage;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
      try {
        coreBaseExports.setAdditionalMeta(getMetaInfo());
        if (!_isGlobal) {
          _context.fallbackContext = __root ? coreBaseExports.getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        coreBaseExports.setAdditionalMeta(null);
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
    } else {
      ret = fn(_context);
    }
    if (sharedExports.isNumber(ret) && ret === coreBaseExports.NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      if (process.env.NODE_ENV !== "production" && __root && sharedExports.isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
        if (_fallbackRoot && (coreBaseExports.isTranslateFallbackWarn(_fallbackWarn, key) || coreBaseExports.isTranslateMissingWarn(_missingWarn, key))) {
          sharedExports.warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
            key,
            type: warnType
          }));
        }
        if (process.env.NODE_ENV !== "production") {
          const { __v_emitter: emitter } = _context;
          if (emitter && _fallbackRoot) {
            emitter.emit("fallback", {
              type: warnType,
              key,
              to: "global",
              groupId: `${warnType}:${key}`
            });
          }
        }
      }
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(coreBaseExports.translate, null, [context, ...args]), () => coreBaseExports.parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => sharedExports.isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !sharedExports.isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, sharedExports.assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(coreBaseExports.datetime, null, [context, ...args]), () => coreBaseExports.parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => coreBaseExports.MISSING_RESOLVE_VALUE, (val) => sharedExports.isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(coreBaseExports.number, null, [context, ...args]), () => coreBaseExports.parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => coreBaseExports.MISSING_RESOLVE_VALUE, (val) => sharedExports.isString(val));
  }
  function normalize(values) {
    return values.map((val) => sharedExports.isString(val) || sharedExports.isNumber(val) || sharedExports.isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(coreBaseExports.translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => coreBaseExports.parseTranslateArgs(...args),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[TransrateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => sharedExports.isArray(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(coreBaseExports.number, null, [context, ...args]),
      () => coreBaseExports.parseNumberArgs(...args),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[NumberPartsSymbol](...args),
      () => [],
      (val) => sharedExports.isString(val) || sharedExports.isArray(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(coreBaseExports.datetime, null, [context, ...args]),
      () => coreBaseExports.parseDateTimeArgs(...args),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[DatetimePartsSymbol](...args),
      () => [],
      (val) => sharedExports.isString(val) || sharedExports.isArray(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = sharedExports.isString(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = coreBaseExports.fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    coreBaseExports.clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = sharedExports.assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    coreBaseExports.clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    coreBaseExports.clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = sharedExports.assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    coreBaseExports.clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root && sharedExports.inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        coreBaseExports.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        coreBaseExports.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        coreBaseExports.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TransrateVNodeSymbol] = transrateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  if (process.env.NODE_ENV !== "production") {
    composer[EnableEmitter] = (emitter) => {
      _context.__v_emitter = emitter;
    };
    composer[DisableEmitter] = () => {
      _context.__v_emitter = void 0;
    };
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponetI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return slot = [
        ...slot,
        ...sharedExports.isArray(current.children) ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment;
}
const Translation = (
  /* defineComponent */
  {
    /* eslint-disable */
    name: "i18n-t",
    props: sharedExports.assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validator: (val) => sharedExports.isNumber(val) || !isNaN(val)
      }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
      const { slots, attrs } = context;
      const i18n2 = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      return () => {
        const keys = Object.keys(slots).filter((key) => key !== "_");
        const options = {};
        if (props.locale) {
          options.locale = props.locale;
        }
        if (props.plural !== void 0) {
          options.plural = sharedExports.isString(props.plural) ? +props.plural : props.plural;
        }
        const arg = getInterpolateArg(context, keys);
        const children = i18n2[TransrateVNodeSymbol](props.keypath, arg, options);
        const assignedAttrs = sharedExports.assign({}, attrs);
        const tag = sharedExports.isString(props.tag) || sharedExports.isObject(props.tag) ? props.tag : getFragmentableTag();
        return h(tag, assignedAttrs, children);
      };
    }
  }
);
function isVNode(target) {
  return sharedExports.isArray(target) && !sharedExports.isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (sharedExports.isString(props.format)) {
      options.key = props.format;
    } else if (sharedExports.isObject(props.format)) {
      if (sharedExports.isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? sharedExports.assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (sharedExports.isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (sharedExports.isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = sharedExports.assign({}, attrs);
    const tag = sharedExports.isString(props.tag) || sharedExports.isObject(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormat = (
  /* defineComponent */
  {
    /* eslint-disable */
    name: "i18n-n",
    props: sharedExports.assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, coreBaseExports.NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[NumberPartsSymbol](...args)
      ));
    }
  }
);
const DatetimeFormat = (
  /*defineComponent */
  {
    /* eslint-disable */
    name: "i18n-d",
    props: sharedExports.assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, coreBaseExports.DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[DatetimePartsSymbol](...args)
      ));
    }
  }
);
function getComposer$2(i18n2, instance) {
  const i18nInternal = i18n2;
  if (i18n2.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n2.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
  }
}
function vTDirective(i18n2) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n2, instance.$);
    if (process.env.NODE_ENV !== "production" && modifiers.preserve) {
      sharedExports.warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE));
    }
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    if (sharedExports.inBrowser && i18n2.global === composer) {
      el.__i18nWatcher = watch(composer.locale, () => {
        binding.instance && binding.instance.$forceUpdate();
      });
    }
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (sharedExports.inBrowser && el.__i18nWatcher) {
      el.__i18nWatcher();
      el.__i18nWatcher = void 0;
      delete el.__i18nWatcher;
    }
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (sharedExports.isString(value)) {
    return { path: value };
  } else if (sharedExports.isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (sharedExports.isString(locale)) {
    options.locale = locale;
  }
  if (sharedExports.isNumber(choice)) {
    options.plural = choice;
  }
  if (sharedExports.isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n2, ...options) {
  const pluginOptions = sharedExports.isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = sharedExports.isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (process.env.NODE_ENV !== "production" && globalInstall && useI18nComponentName) {
    sharedExports.warn(getWarnMessage(I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE, {
      name: Translation.name
    }));
  }
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n2));
  }
}
const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
let devtoolsApi;
async function enableDevTools(app, i18n2) {
  return new Promise((resolve, reject) => {
    try {
      setupDevtoolsPlugin({
        id: "vue-devtools-plugin-vue-i18n",
        label: vueDevtoolsExports.VueDevToolsLabels[
          "vue-devtools-plugin-vue-i18n"
          /* PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (api) => {
        devtoolsApi = api;
        api.on.visitComponentTree(({ componentInstance, treeNode }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n2);
        });
        api.on.inspectComponent(({ componentInstance, instanceData }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n2.mode === "legacy") {
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n2.global.__composer) {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            } else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api.addInspector({
          id: "vue-i18n-resource-inspector",
          label: vueDevtoolsExports.VueDevToolsLabels[
            "vue-i18n-resource-inspector"
            /* CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: vueDevtoolsExports.VueDevToolsPlaceholders[
            "vue-i18n-resource-inspector"
            /* CUSTOM_INSPECTOR */
          ]
        });
        api.on.getInspectorTree((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            registerScope(payload, i18n2);
          }
        });
        const roots = /* @__PURE__ */ new Map();
        api.on.getInspectorState(async (payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            api.unhighlightElement();
            inspectScope(payload, i18n2);
            if (payload.nodeId === "global") {
              if (!roots.has(payload.app)) {
                const [root] = await api.getComponentInstances(payload.app);
                roots.set(payload.app, root);
              }
              api.highlightElement(roots.get(payload.app));
            } else {
              const instance = getComponentInstance(payload.nodeId, i18n2);
              instance && api.highlightElement(instance);
            }
          }
        });
        api.on.editInspectorState((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            editScope(payload, i18n2);
          }
        });
        api.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: vueDevtoolsExports.VueDevToolsLabels[
            "vue-i18n-timeline"
            /* TIMELINE */
          ],
          color: vueDevtoolsExports.VueDevToolsTimelineColors[
            "vue-i18n-timeline"
            /* TIMELINE */
          ]
        });
        resolve(true);
      });
    } catch (e) {
      console.error(e);
      reject(false);
    }
  });
}
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || "Anonymous";
}
function updateComponentTreeTags(instance, treeNode, i18n2) {
  const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    if (instance.vnode.el.__VUE_I18N__ !== global2) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: "locale",
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type,
    key: "availableLocales",
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type,
    key: "fallbackLocale",
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type,
    key: "inheritLocale",
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type,
    key: "messages",
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  {
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
}
function getLocaleMessageValue(messages) {
  const value = {};
  Object.keys(messages).forEach((key) => {
    const v = messages[key];
    if (sharedExports.isFunction(v) && "source" in v) {
      value[key] = getMessageFunctionDetails(v);
    } else if (sharedExports.isObject(v)) {
      value[key] = getLocaleMessageValue(v);
    } else {
      value[key] = v;
    }
  });
  return value;
}
const ESC = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
  return ESC[a] || a;
}
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n2) {
  payload.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
  for (const [keyInstance, instance] of i18n2.__instances) {
    const composer = i18n2.mode === "composition" ? instance : instance.__composer;
    if (global2 === composer) {
      continue;
    }
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`
    });
  }
}
function getComponentInstance(nodeId, i18n2) {
  let instance = null;
  if (nodeId !== "global") {
    for (const [component, composer] of i18n2.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$1(nodeId, i18n2) {
  if (nodeId === "global") {
    return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
  } else {
    const instance = Array.from(i18n2.__instances.values()).find((item) => item.id.toString() === nodeId);
    if (instance) {
      return i18n2.mode === "composition" ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n2) {
  const composer = getComposer$1(payload.nodeId, i18n2);
  if (composer) {
    payload.state = makeScopeInspectState(composer);
  }
  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = "Locale related info";
  const localeStates = [
    {
      type: localeType,
      key: "locale",
      editable: true,
      value: composer.locale.value
    },
    {
      type: localeType,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    },
    {
      type: localeType,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    },
    {
      type: localeType,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    }
  ];
  state[localeType] = localeStates;
  const localeMessagesType = "Locale messages info";
  const localeMessagesStates = [
    {
      type: localeMessagesType,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    }
  ];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && "groupId" in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
      }
    });
  }
}
function editScope(payload, i18n2) {
  const composer = getComposer$1(payload.nodeId, i18n2);
  if (composer) {
    const [field] = payload.path;
    if (field === "locale" && sharedExports.isString(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === "fallbackLocale" && (sharedExports.isString(payload.state.value) || sharedExports.isArray(payload.state.value) || sharedExports.isObject(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === "inheritLocale" && sharedExports.isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}
const I18nInjectionKey = /* @__PURE__ */ sharedExports.makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = sharedExports.isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = sharedExports.makeSymbol(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n2 = {
      // mode
      get mode() {
        return "composition";
      },
      // allowComposition
      get allowComposition() {
        return __allowComposition;
      },
      // install plugin
      async install(app, ...options2) {
        if ((process.env.NODE_ENV !== "production" || false) && true) {
          app.__VUE_I18N__ = i18n2;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
        if (__globalInjection) {
          injectGlobalFields(app, i18n2.global);
        }
        {
          apply(app, i18n2, ...options2);
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          i18n2.dispose();
          unmountApp();
        };
        if ((process.env.NODE_ENV !== "production" || false) && true) {
          const ret = await enableDevTools(app, i18n2);
          if (!ret) {
            throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          }
          const emitter = sharedExports.createEmitter();
          {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      // global accessor
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      // @internal
      __instances,
      // @internal
      __getInstance,
      // @internal
      __setInstance,
      // @internal
      __deleteInstance
    };
    return i18n2;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n2 = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n2);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n2, instance, options.__useComponent);
    if (composer2 == null) {
      if (process.env.NODE_ENV !== "production") {
        sharedExports.warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
      }
      composer2 = global2;
    }
    return composer2;
  }
  const i18nInternal = i18n2;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = sharedExports.assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance, composer);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n2 = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n2) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n2;
  }
}
function getScope(options, componentOptions) {
  return sharedExports.isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n2) {
  return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
}
function getComposer(i18n2, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n2, target, composer) {
  let emitter = null;
  {
    onMounted(() => {
      if ((process.env.NODE_ENV !== "production" || false) && true && target.vnode.el) {
        target.vnode.el.__VUE_I18N__ = composer;
        emitter = sharedExports.createEmitter();
        const _composer = composer;
        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        emitter.on("*", addTimelineEvent);
      }
    }, target);
    onUnmounted(() => {
      if ((process.env.NODE_ENV !== "production" || false) && true && target.vnode.el && target.vnode.el.__VUE_I18N__) {
        emitter && emitter.off("*", addTimelineEvent);
        const _composer = composer;
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n2.__deleteInstance(target);
    }, target);
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n2 = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n2, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n2;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
coreBaseExports.registerMessageResolver(coreBaseExports.resolveValue);
coreBaseExports.registerLocaleFallbacker(coreBaseExports.fallbackWithLocaleChain);
{
  initFeatureFlags();
}
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const target = sharedExports.getGlobalThis();
  target.__INTLIFY__ = true;
  coreBaseExports.setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
if (process.env.NODE_ENV !== "production") ;
const i18n = createI18n({
  legacy: false,
  locale: "",
  messages: {}
});
const localesMap = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({ "../../locales/en.yml": () => import("./assets/en-BVloBWQk.js"), "../../locales/zh-CN.yml": () => import("./assets/zh-CN-CwYb-ich.js") })).map(([path, loadLocale]) => {
    var _a;
    return [
      (_a = path.match(/([\w-]*)\.yml$/)) == null ? void 0 : _a[1],
      loadLocale
    ];
  })
);
const availableLocales = Object.keys(localesMap);
const loadedLanguages = [];
function setI18nLanguage(lang) {
  var _a;
  i18n.global.locale.value = lang;
  if (typeof document !== "undefined") (_a = document.querySelector("html")) == null ? void 0 : _a.setAttribute("lang", lang);
  return lang;
}
async function loadLanguageAsync(lang) {
  if (i18n.global.locale.value === lang) return setI18nLanguage(lang);
  if (loadedLanguages.includes(lang)) return setI18nLanguage(lang);
  const messages = await localesMap[lang]();
  i18n.global.setLocaleMessage(lang, messages.default);
  loadedLanguages.push(lang);
  return setI18nLanguage(lang);
}
const install$2 = ({ app }) => {
  app.use(i18n);
  loadLanguageAsync("en");
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  availableLocales,
  install: install$2,
  loadLanguageAsync
}, Symbol.toStringTag, { value: "Module" }));
const install$1 = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const install = ({ isClient, initialState, app }) => {
  const pinia = createPinia();
  app.use(pinia);
  if (isClient) pinia.state.value = initialState.pinia || {};
  else initialState.pinia = pinia.state.value;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<main${ssrRenderAttrs(mergeProps({
        p: "x4 y10",
        text: "center teal-700 dark:gray-200"
      }, _attrs))}><div text-4xl><div i-carbon-warning inline-block></div></div>`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`<div><button text-sm btn m="3 t8"> 返回 </button></div></main>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/404.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheCounter",
  __ssrInlineRender: true,
  props: {
    initial: null
  },
  setup(__props) {
    const props = __props;
    const { count, inc: inc2, dec } = useCounter(+props.initial);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(count))} <button class="inc">+</button><button class="dec">-</button></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TheCounter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_TheCounter = _sfc_main$4;
  const _component_RouterView = resolveComponent("RouterView");
  _push(`<main${ssrRenderAttrs(mergeProps({
    "px-4": "",
    "py-10": "",
    text: "text-center gray-700 dark:gray-200"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheCounter, { initial: "1" }, null, _parent));
  _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(` default <div mx-auto mt-5 text-center text-30px opacity-50> [Default Layout] </div></main>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = resolveComponent("RouterView");
  _push(`<main${ssrRenderAttrs(mergeProps({
    "px-4": "",
    "py-10": "",
    text: "center gray-700 dark:gray-200"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(` home <div mt-5 text-20px opacity-50> [Home Layout] </div></main>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __layout_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const layouts = {
  "404": _sfc_main$5,
  "default": __layout_1,
  "home": __layout_2
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      meta: route.meta,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: route.path === "/" ? [route] : [{ ...route, path: "" }]
    };
  });
}
const _imports_0$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bienao",
      meta: [
        {
          name: "description",
          content: "My page description"
        }
      ]
    });
    const isDark = useDark();
    useToggle(isDark);
    const { t, locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4e3bfc07><div class="bg-[length:5px_5px] backdrop-saturate-50 backdrop-blur-[8px] bg-white/80 dark:bg-gray-900/75 dark:border-gray-800" w-full h-80px px-20px border-b-1.5px border-solid f-c-c justify-between fixed bg-auto z-20 px-38px data-v-4e3bfc07><div hover:drop-shadow-xl dark:text-gray-100 data-v-4e3bfc07><img${ssrRenderAttr("src", _imports_0$1)} tag="logo" alt="" data-v-4e3bfc07></div><div dark:text-gray-100 data-v-4e3bfc07>${ssrInterpolate(unref(t)("content"))}</div><div w-30 flex justify-around data-v-4e3bfc07><button dark:text-gray-100 icon-btn title="主题颜色切换" data-v-4e3bfc07><div i="carbon-sun dark:carbon-moon" data-v-4e3bfc07></div></button><button icon-btn dark:text-gray-100 title="语言切换" data-v-4e3bfc07><div i-carbon-language data-v-4e3bfc07></div></button>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        "icon-btn": "",
        "dark:text-gray-100": "",
        to: "/",
        title: "首页"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-carbon-api data-v-4e3bfc07${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { "i-carbon-api": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        "icon-btn": "",
        "dark:text-gray-100": "",
        to: "/markdown",
        title: "MarkDown",
        "data-test-id": "about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-carbon-dicom-overlay data-v-4e3bfc07${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { "i-carbon-dicom-overlay": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div pt-100px px-38px data-v-4e3bfc07><h1 text-pink text-20px data-v-4e3bfc07>Get your in the game.</h1><h1 text-60px dark:text-gray-100 data-v-4e3bfc07>Get your in the game.</h1><div bg-amber dark:bg-cyan h-200px data-v-4e3bfc07></div><div h-1000px data-v-4e3bfc07>`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4e3bfc07"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='31.88'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20257'%3e%3cdefs%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb466'%20x1='-.828%25'%20x2='57.636%25'%20y1='7.652%25'%20y2='78.411%25'%3e%3cstop%20offset='0%25'%20stop-color='%2341D1FF'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23BD34FE'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb467'%20x1='43.376%25'%20x2='50.316%25'%20y1='2.242%25'%20y2='89.03%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFEA83'%3e%3c/stop%3e%3cstop%20offset='8.333%25'%20stop-color='%23FFDD35'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23FFA800'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb466)'%20d='M255.153%2037.938L134.897%20252.976c-2.483%204.44-8.862%204.466-11.382.048L.875%2037.958c-2.746-4.814%201.371-10.646%206.827-9.67l120.385%2021.517a6.537%206.537%200%200%200%202.322-.004l117.867-21.483c5.438-.991%209.574%204.796%206.877%209.62Z'%3e%3c/path%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb467)'%20d='M185.432.063L96.44%2017.501a3.268%203.268%200%200%200-2.634%203.014l-5.474%2092.456a3.268%203.268%200%200%200%203.997%203.378l24.777-5.718c2.318-.535%204.413%201.507%203.936%203.838l-7.361%2036.047c-.495%202.426%201.782%204.5%204.151%203.78l15.304-4.649c2.372-.72%204.652%201.36%204.15%203.788l-11.698%2056.621c-.732%203.542%203.979%205.473%205.943%202.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505%204.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z'%3e%3c/path%3e%3c/svg%3e";
const useUserStore = defineStore("user", () => {
  const savedName = ref("");
  const previousNames = ref(/* @__PURE__ */ new Set());
  const usedNames = computed(() => Array.from(previousNames.value));
  const otherNames = computed(() => usedNames.value.filter((name) => name !== savedName.value));
  function setNewName(name) {
    if (savedName.value)
      previousNames.value.add(savedName.value);
    savedName.value = name;
  }
  return {
    setNewName,
    otherNames,
    savedName
  };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "IndexPage"
  },
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserStore();
    const name = ref(user.savedName);
    const router = useRouter();
    function go() {
      if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheInput = resolveComponent("TheInput");
      _push(`<!--[--><div f-c-c my-3><img${ssrRenderAttr("src", _imports_0)} alt=""></div>`);
      _push(ssrRenderComponent(_component_TheInput, {
        modelValue: unref(name),
        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
        placeholder: "whats-your-name",
        autocomplete: "false",
        onKeydown: go
      }, null, _parent));
      _push(`<label class="hidden" for="input">whats-your-name</label><div><button m-3 text-sm btn${ssrIncludeBooleanAttr(!unref(name)) ? " disabled" : ""}> 点击 </button></div><!--]-->`);
    };
  }
});
const block0 = {};
if (typeof block0 === "function") block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_0__ = () => import("./assets/xiangqing-B-Wch1yi.js");
const __pages_import_1__ = () => import("./assets/README-P3ZWxfbl.js");
const __pages_import_2__ = () => import("./assets/markdown-DbNnBUd5.js");
const __pages_import_4__ = () => import("./assets/CSS-CAmWxl3r.js");
const __pages_import_5__ = () => import("./assets/about-CO3UVcFZ.js");
const __pages_import_6__ = () => import("./assets/_...all_-oLySfGoP.js");
const __pages_import_7__ = () => import("./assets/_name_-BHEz6YA6.js");
const routes$1 = [{ "name": "xiangqing", "path": "/xiangqing", "component": __pages_import_0__, "props": true }, { "name": "README", "path": "/readme", "component": __pages_import_1__, "props": true }, { "name": "markdown", "path": "/markdown", "component": __pages_import_2__, "props": true }, { "name": "index", "path": "/", "component": _sfc_main, "props": true, "meta": { "layout": "home" } }, { "name": "CSS", "path": "/css", "component": __pages_import_4__, "props": true }, { "name": "about", "path": "/about", "component": __pages_import_5__, "props": true }, { "name": "all", "path": "/:all(.*)*", "component": __pages_import_6__, "props": true, "meta": { "layout": 404 } }, { "name": "hi-name", "path": "/hi/:name", "component": __pages_import_7__, "props": true }];
const routes = setupLayouts(routes$1);
const createApp = ViteSSG(App, { routes, base: "/" }, (ctx) => {
  Object.values(
    /* @__PURE__ */ Object.assign({ "./modules/i18n.ts": __vite_glob_0_0, "./modules/nprogress.ts": __vite_glob_0_1, "./modules/pinia.ts": __vite_glob_0_2 })
  ).forEach((i) => {
    var _a;
    return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
  });
});
export {
  _export_sfc as _,
  useUserStore as a,
  block0 as b,
  createApp,
  useI18n as u
};
