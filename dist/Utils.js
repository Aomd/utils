(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Array: true,
  Browser: true,
  Color: true,
  Date: true,
  Geometry: true,
  Mouse: true,
  Number: true,
  Object: true,
  Optimize: true,
  Screen: true,
  String: true,
  Type: true,
  Url: true
};
exports.Url = exports.Type = exports.String = exports.Screen = exports.Optimize = exports.Object = exports.Number = exports.Mouse = exports.Geometry = exports.Date = exports.Color = exports.Browser = exports.Array = void 0;

var Array = _interopRequireWildcard(require("./src/Array"));

exports.Array = Array;

var Browser = _interopRequireWildcard(require("./src/Browser"));

exports.Browser = Browser;

var Color = _interopRequireWildcard(require("./src/Color"));

exports.Color = Color;

var Date = _interopRequireWildcard(require("./src/Date"));

exports.Date = Date;

var Geometry = _interopRequireWildcard(require("./src/Geometry"));

exports.Geometry = Geometry;

var Mouse = _interopRequireWildcard(require("./src/Mouse"));

exports.Mouse = Mouse;

var Number = _interopRequireWildcard(require("./src/Number"));

exports.Number = Number;

var Object = _interopRequireWildcard(require("./src/Object"));

exports.Object = Object;

var Optimize = _interopRequireWildcard(require("./src/Optimize"));

exports.Optimize = Optimize;

var Screen = _interopRequireWildcard(require("./src/Screen"));

exports.Screen = Screen;

var String = _interopRequireWildcard(require("./src/String"));

exports.String = String;

var Type = _interopRequireWildcard(require("./src/Type"));

exports.Type = Type;

var Url = _interopRequireWildcard(require("./src/Url"));

exports.Url = Url;

var _cancelAnimationFrame = require("./src/browser/compatible/cancelAnimationFrame");

Object.keys(_cancelAnimationFrame).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cancelAnimationFrame[key];
    }
  });
});

var _exitFullscreen = require("./src/browser/compatible/exitFullscreen");

Object.keys(_exitFullscreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _exitFullscreen[key];
    }
  });
});

var _fullscreenElement = require("./src/browser/compatible/fullscreenElement");

Object.keys(_fullscreenElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fullscreenElement[key];
    }
  });
});

var _indexedDB = require("./src/browser/compatible/indexedDB");

Object.keys(_indexedDB).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _indexedDB[key];
    }
  });
});

var _requestAnimationFrame = require("./src/browser/compatible/requestAnimationFrame");

Object.keys(_requestAnimationFrame).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _requestAnimationFrame[key];
    }
  });
});

var _requestFullscreen = require("./src/browser/compatible/requestFullscreen");

Object.keys(_requestFullscreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _requestFullscreen[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./src/Array":3,"./src/Browser":4,"./src/Color":5,"./src/Date":6,"./src/Geometry":7,"./src/Mouse":8,"./src/Number":9,"./src/Object":10,"./src/Optimize":11,"./src/Screen":12,"./src/String":13,"./src/Type":14,"./src/Url":15,"./src/browser/compatible/cancelAnimationFrame":16,"./src/browser/compatible/exitFullscreen":17,"./src/browser/compatible/fullscreenElement":18,"./src/browser/compatible/indexedDB":19,"./src/browser/compatible/requestAnimationFrame":20,"./src/browser/compatible/requestFullscreen":21}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var AomdUtils = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function (window) {
  if (typeof window !== "undefined") {
    window.AomdUtils = AomdUtils;
  } else {
    throw new Error('window is not defined');
  }
})(window);
},{"./index":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.each = each;
exports.map = map;
exports.sort = sort;
exports.unique = unique;
exports.union = union;
exports.intersect = intersect;
exports.remove = remove;
exports.formArray = formArray;
exports.max = max;
exports.min = min;
exports.sum = sum;
exports.average = average;
exports.where = where;

/**
* @param  {arr} 数组
* @param  {fn} 回调函数
* @return {undefined}
*/
function each(arr, fn) {
  fn = fn || Function;
  var a = [];
  var args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < arr.length; i++) {
    var res = fn.apply(arr, [arr[i], i].concat(args));
    if (res != null) a.push(res);
  }
}
/**
* @param  {arr} 数组
* @param  {fn} 回调函数
* @param  {thisObj} this指向
* @return {Array} 
*/


function map(arr, fn, thisObj) {
  var scope = thisObj || window;
  var a = [];

  for (var i = 0, j = arr.length; i < j; ++i) {
    var res = fn.call(scope, arr[i], i, this);
    if (res != null) a.push(res);
  }

  return a;
}
/**
* @param  {arr} 数组
* @param  {type} 1：从小到大   2：从大到小   3：随机
* @return {Array}
*/


function sort(arr) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return arr.sort(function (a, b) {
    switch (type) {
      case 1:
        return a - b;

      case 2:
        return b - a;

      case 3:
        return Math.random() - 0.5;

      default:
        return arr;
    }
  });
}
/**
*去重
*
* @param {Array} arr
* @returns
*/


function unique(arr) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
        r = [];

    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }

    return r;
  }
}
/**
*求两个集合的并集
*
* @param {Array} a
* @param {Array} b
* @returns
*/


function union(a, b) {
  var newArr = a.concat(b);
  return this.unique(newArr);
}
/**
 *求两个集合的交集
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */


function intersect(a, b) {
  var _this = this;

  a = this.unique(a);
  return this.map(a, function (o) {
    return _this.contains(b, o) ? o : null;
  });
}
/**
*删除其中一个元素
*
* @param {*} arr
* @param {*} ele
* @returns
*/


function remove(arr, ele) {
  var index = arr.indexOf(ele);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}
/**
 *将类数组转换为数组的方法
 *
 * @param {*} ary
 * @returns
 */


function formArray(ary) {
  var arr = [];

  if (Array.isArray(ary)) {
    arr = ary;
  } else {
    arr = Array.prototype.slice.call(ary);
  }

  ;
  return arr;
}
/**
 *最大值
 *
 * @param {*} arr
 * @returns
 */


function max(arr) {
  return Math.max.apply(null, arr);
}
/**
 *最小值
 *
 * @param {*} arr
 * @returns
 */


function min(arr) {
  return Math.min.apply(null, arr);
}
/**
 *求和
 *
 * @param {*} arr
 * @returns
 */


function sum(arr) {
  return arr.reduce(function (pre, cur) {
    return pre + cur;
  });
}
/**
 *平均值
 *
 * @param {*} arr
 * @returns
 */


function average(arr) {
  return this.sum(arr) / arr.length;
}
/**
 *根据条件取出值
 *
 * @param {*} a
 * @param {*} w
 */


function where(a, w) {}
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguage = getLanguage;
exports.getBrowserType = getBrowserType;
exports.getDeviceOS = getDeviceOS;
exports.isPC = isPC;
var u = navigator.userAgent;
/**
 * 获取浏览器语言
 *
 * @returns {String} 当前浏览器语言
 */

function getLanguage() {
  return (navigator.browserLanguage || navigator.language).toLowerCase();
}
/**
 * 获取当前浏览器类型
 *
 * @returns {Object}
 */


function getBrowserType() {
  return {
    trident: u.indexOf('Trident') > -1,
    //IE内核  
    presto: u.indexOf('Presto') > -1,
    //opera内核  
    webKit: u.indexOf('AppleWebKit') > -1,
    //苹果、谷歌内核  
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
    //火狐内核  
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    //是否为移动终端  
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    //ios终端  
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    //android终端或者uc浏览器  
    iPhone: u.indexOf('iPhone') > -1,
    //是否为iPhone或者QQHD浏览器  
    iPad: u.indexOf('iPad') > -1,
    //是否iPad    
    webApp: u.indexOf('Safari') == -1,
    //是否web应该程序，没有头部与底部  
    weixin: u.indexOf('MicroMessenger') > -1,
    //是否微信   
    qq: u.match(/\sQQ/i) == " qq" //是否QQ

  };
}
/**
 * 获取当前系统类型
 *
 * @returns {String} 当前设备系统类型
 */


function getDeviceOS() {
  var isWin = navigator.platform == "Win32" || navigator.platform == "Windows";
  var isMac = navigator.platform == "Mac68K" || navigator.platform == "MacPPC" || navigator.platform == "Macintosh" || navigator.platform == "MacIntel";
  if (isMac) return "Mac";
  var isUnix = navigator.platform == "X11" && !isWin && !isMac;
  if (isUnix) return "Unix";
  var isLinux = String(navigator.platform).indexOf("Linux") > -1;
  if (isLinux) return "Linux";

  if (isWin) {
    var isWin2K = u.indexOf("Windows NT 5.0") > -1 || u.indexOf("Windows 2000") > -1;
    if (isWin2K) return "Win2000";
    var isWinXP = u.indexOf("Windows NT 5.1") > -1 || u.indexOf("Windows XP") > -1;
    if (isWinXP) return "WinXP";
    var isWin2003 = u.indexOf("Windows NT 5.2") > -1 || u.indexOf("Windows 2003") > -1;
    if (isWin2003) return "Win2003";
    var isWinVista = u.indexOf("Windows NT 6.0") > -1 || u.indexOf("Windows Vista") > -1;
    if (isWinVista) return "WinVista";
    var isWin7 = u.indexOf("Windows NT 6.1") > -1 || u.indexOf("Windows 7") > -1;
    if (isWin7) return "Win7";
    var isWin10 = u.indexOf("Windows NT 10") > -1 || u.indexOf("Windows 10") > -1;
    if (isWin10) return "Win10";
  }

  return "other";
}
/**
 * 判断当前设备是否是pc
 *
 * @returns {Boolean} 
 */


function isPC() {
  return getBrowserType().android || getBrowserType().iPad || getBrowserType().iPhone;
}
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgb = hexToRgb;
exports.rgbToHex = rgbToHex;

/**
 * #ffffff -> rgb
 *
 * @param {string} str
 * @returns {object} {r,g,b}
 */
function hexToRgb(str) {
  var hex = parseInt(str.indexOf('#') > -1 ? str.slice(1) : str, 16);
  var r = hex >> 16 & 255;
  var g = hex >> 8 & 255;
  var b = hex >> 0 & 255;
  return {
    r: r,
    g: g,
    b: b
  };
}
/**
 * rgb -> #ffffff 
 *
 * @param {Object} rgb
 * @returns {string}
 */


function rgbToHex(rgb) {
  return '#' + (((rgb.r & 255) << 16) + ((rgb.g & 255) << 8) + (rgb.b & 255)).toString(16).padStart(6, '0');
}
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = formatTime;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function formatTime(time, cFormat) {
  if (arguments.length === 0) return null;

  if ((time + '').length === 10) {
    time = +time * 1000;
  }

  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}',
      date;

  if (_typeof(time) === 'object') {
    date = time;
  } else {
    date = new Date(time);
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];

    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }

    return value || 0;
  });
  return time_str;
}
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.averageLine = averageLine;
exports.getPointFromLine = getPointFromLine;
exports.averagePolyline = averagePolyline;

/**
 *  线段等分
 * @param point1 起始点 
 * @param point2 终止点
 * @param num 等分数
 */
function averageLine(point1, point2, num) {
  var x1 = point1[0];
  var y1 = point1[1];
  var x2 = point2[0];
  var y2 = point2[1];
  var o = [point1];

  for (var i = 1; i < num; i++) {
    var x = (i * x2 + (num - i) * x1) / num;
    var y = (i * y2 + (num - i) * y1) / num;
    o.push([x, y]);
  }

  return o;
}
/**
 * 取线段多少米的点
 *
 * @param {*} point1 起始点 
 * @param {*} point2 终止点
 * @param {*} m 值 单位m
 * @returns
 */


function getPointFromLine(point1, point2, m) {
  // 距离为零就直接返回 point1
  if (+m === 0) {
    return point1;
  }

  var x1 = point1[0];
  var y1 = point1[1];
  var x2 = point2[0];
  var y2 = point2[1]; // AMap.GeometryUtil  https://lbs.amap.com/api/javascript-api/reference/math 
  // AMap.GeometryUtil.distance 两点求距离 m

  var temp_m = AMap.GeometryUtil.distance(point1, point2);
  var num = temp_m / m;
  var x = (x2 + (num - 1) * x1) / num;
  var y = (y2 + (num - 1) * y1) / num;
  return [x, y];
}
/**
 *
 *
 * @param {*} points 点集合
 * @param {*} val 值 单位m
 * @returns
 */


function averagePolyline(points, val) {
  // 所有点
  var pointAll = [points[0]]; // 当前剩余量

  var surplus = 0; // 按线段长

  for (var i = 0; i < points.length - 1; i++) {
    // 总长
    // AMap.GeometryUtil  https://lbs.amap.com/api/javascript-api/reference/math 
    // AMap.GeometryUtil.distance 两点求距离 m
    var total_distance = AMap.GeometryUtil.distance(points[i], points[i + 1]); // 如果第一段余量+第二段总长还不够 val 就跳过直接加上余量

    if (total_distance + surplus < val) {
      surplus += total_distance;
      continue;
    } // 总段数


    var temp_total_section = total_distance / val; // 向下取整

    var total_section = Math.floor(temp_total_section); // 头点计算

    var new_point_start = getPointFromLine(points[i], points[i + 1], val - surplus); // 末点计算

    var new_point_ends = getPointFromLine(new_point_start, points[i + 1], total_section * val);
    var temp_val = averageLine(new_point_start, new_point_ends, total_section); // 处理 误差数据 -------------------------------------------------------- 进度看实际

    if (temp_total_section.toFixed(2).split('.')[1] >= 98) {
      temp_val = temp_val.concat([new_point_ends]);
    } // 合并结果


    pointAll = pointAll.concat(temp_val);

    if (surplus === val) {
      // 计算剩余量
      surplus = total_distance % val;
    } else {
      // 计算剩余量
      surplus = (total_distance + surplus) % val;
    }
  }

  return pointAll;
}
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mouseWheelDirection = mouseWheelDirection;

/**
 * 统一鼠标滚轮方向
 * 上 true
 * 下 false
 * @export
 * @param {Event} e
 * @returns {Boolean} bool
 */
function mouseWheelDirection(evt) {
  var e = evt || event;
  var bool = false;

  if (e.wheelDelta > 0 || e.detail < 0) {
    bool = true;
  } else {
    bool = false;
  }

  return bool;
}
},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;
exports.numberToChinese = numberToChinese;
exports.changeToChinese = changeToChinese;

function random(min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
}

function numberToChinese(num) {
  var AA = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  var BB = ["", "十", "百", "仟", "萬", "億", "点", ""];
  var a = ("" + num).replace(/(^0*)/g, "").split("."),
      k = 0,
      re = "";

  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;

      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0])) re = BB[4] + re;
        break;

      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }

    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) // 加上小数部分(如果有小数部分)
    {
      re += BB[6];

      for (var i = 0; i < a[1].length; i++) {
        re += AA[a[1].charAt(i)];
      }
    }

  if (re == '一十') re = "十";
  if (re.match(/^一/) && re.length == 3) re = re.replace("一", "");
  return re;
}
/*将数字转换为大写金额*/


function changeToChinese(Num) {
  //判断如果传递进来的不是字符的话转换为字符
  if (typeof Num == "number") {
    Num = new String(Num);
  }

  ;
  Num = Num.replace(/,/g, ""); //替换tomoney()中的“,”

  Num = Num.replace(/ /g, ""); //替换tomoney()中的空格

  Num = Num.replace(/￥/g, ""); //替换掉可能出现的￥字符

  if (isNaN(Num)) {
    //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return "";
  }

  ; //字符处理完毕后开始转换，采用前后两部分分别转换

  var part = String(Num).split(".");
  var newchar = ""; //小数点前进行转化

  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return ""; //若数量超过拾亿单位，提示
    }

    var tmpnewchar = "";
    var perchar = part[0].charAt(i);

    switch (perchar) {
      case "0":
        tmpnewchar = "零" + tmpnewchar;
        break;

      case "1":
        tmpnewchar = "壹" + tmpnewchar;
        break;

      case "2":
        tmpnewchar = "贰" + tmpnewchar;
        break;

      case "3":
        tmpnewchar = "叁" + tmpnewchar;
        break;

      case "4":
        tmpnewchar = "肆" + tmpnewchar;
        break;

      case "5":
        tmpnewchar = "伍" + tmpnewchar;
        break;

      case "6":
        tmpnewchar = "陆" + tmpnewchar;
        break;

      case "7":
        tmpnewchar = "柒" + tmpnewchar;
        break;

      case "8":
        tmpnewchar = "捌" + tmpnewchar;
        break;

      case "9":
        tmpnewchar = "玖" + tmpnewchar;
        break;
    }

    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + "元";
        break;

      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;

      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;

      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;

      case 4:
        tmpnewchar = tmpnewchar + "万";
        break;

      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;

      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;

      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;

      case 8:
        tmpnewchar = tmpnewchar + "亿";
        break;

      case 9:
        tmpnewchar = tmpnewchar + "拾";
        break;
    }

    var newchar = tmpnewchar + newchar;
  } //小数点之后进行转化


  if (Num.indexOf(".") != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2);
    }

    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = "";
      perchar = part[1].charAt(i);

      switch (perchar) {
        case "0":
          tmpnewchar = "零" + tmpnewchar;
          break;

        case "1":
          tmpnewchar = "壹" + tmpnewchar;
          break;

        case "2":
          tmpnewchar = "贰" + tmpnewchar;
          break;

        case "3":
          tmpnewchar = "叁" + tmpnewchar;
          break;

        case "4":
          tmpnewchar = "肆" + tmpnewchar;
          break;

        case "5":
          tmpnewchar = "伍" + tmpnewchar;
          break;

        case "6":
          tmpnewchar = "陆" + tmpnewchar;
          break;

        case "7":
          tmpnewchar = "柒" + tmpnewchar;
          break;

        case "8":
          tmpnewchar = "捌" + tmpnewchar;
          break;

        case "9":
          tmpnewchar = "玖" + tmpnewchar;
          break;
      }

      if (i == 0) tmpnewchar = tmpnewchar + "角";
      if (i == 1) tmpnewchar = tmpnewchar + "分";
      newchar = newchar + tmpnewchar;
    }
  } //替换所有无用汉字


  while (newchar.search("零零") != -1) {
    newchar = newchar.replace("零零", "零");
  }

  newchar = newchar.replace("零亿", "亿");
  newchar = newchar.replace("亿万", "亿");
  newchar = newchar.replace("零万", "万");
  newchar = newchar.replace("零元", "元");
  newchar = newchar.replace("零角", "");
  newchar = newchar.replace("零分", "");

  if (newchar.charAt(newchar.length - 1) == "元") {
    newchar = newchar + "整";
  }

  return newchar;
}
},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.size = size;

/**
 * 克隆对象
 *
 * @param {Object} o
 * @returns {Object}
 */
function clone(o) {
  return JSON.parse(JSON.stringify(o));
}
/**
* 获取对象key数量
*
* @param {Object} o
* @returns {Number}
*/


function size(o) {
  return Object.keys(o).length;
}
},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;
exports.throttle = throttle;

// 优化

/**
 * 防抖
 *
 * @param {*} func 回调函数
 * @param {*} wait 间隔时间
 * @param {boolean} [immediate=true] 一开始执行还是最后执行
 * @returns
 */
function debounce(func, wait) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var timeout, _this, args;

  var later = function later() {
    return setTimeout(function () {
      timeout = null;

      if (!immediate) {
        func.apply(_this, args);
        _this = args = null;
      }
    }, wait);
  };

  var debounced = function debounced() {
    if (!timeout) {
      timeout = later();

      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      if (immediate) {
        func.apply(this, params);
      } else {
        _this = this;
        args = params;
      }
    } else {
      clearTimeout(timeout);
      timeout = later();
    }
  };

  return debounced;
}

;
/**
 * 节流
 *
 * @param {*} func 回调函数
 * @param {*} wait 间隔时间
 * @param {boolean} [immediate=true] 一开始执行还是最后执行
 * @returns
 */

function throttle(func, wait) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var timeout, _this, args;

  var later = function later() {
    return setTimeout(function () {
      timeout = null;

      if (!immediate) {
        func.apply(_this, args);
        _this = args = null;
      }
    }, wait);
  };

  var throttled = function throttled() {
    if (!timeout) {
      timeout = later();

      for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      if (immediate) {
        immediate = false;
        func.apply(this, params);
      }

      _this = this;
      args = params;
    }
  };

  return throttled;
}

;
},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openFullScreen = openFullScreen;
exports.closeFullScreen = closeFullScreen;
exports.isFullScreen = isFullScreen;

var _fullscreenElement = require("./browser/compatible/fullscreenElement");

var _exitFullscreen = require("./browser/compatible/exitFullscreen");

var _requestFullscreen = require("./browser/compatible/requestFullscreen");

// @ts-check

/**
 *
 * 开启全屏
 *
 * @returns
 */
function openFullScreen() {
  return (0, _requestFullscreen.requestFullscreen)();
}
/**
 * 关闭全屏
 *
 * @returns
 */


function closeFullScreen() {
  if (isFullScreen()) {
    return (0, _exitFullscreen.exitFullscreen)();
  }
}
/**
 * 判断是否全屏
 *
 * @returns
 */


function isFullScreen() {
  if (_fullscreenElement.fullscreenElement) {
    // 全屏
    return true;
  } else {
    // 不是全屏
    return false;
  }
}
},{"./browser/compatible/exitFullscreen":17,"./browser/compatible/fullscreenElement":18,"./browser/compatible/requestFullscreen":21}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utf16to8 = utf16to8;

/**
 * utf16 to utf8
 *
 * @param {*} str
 * @returns
 */
function utf16to8(str) {
  var out, i, len, c;
  out = "";
  len = str.length;

  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);

    if (c >= 0x0001 && c <= 0x007F) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
      out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
      out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
    } else {
      out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
      out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
    }
  }

  return out;
}
},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = isString;
exports.isNumber = isNumber;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isDate = isDate;
exports.isBoolean = isBoolean;
exports.isFunction = isFunction;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.isBlob = isBlob;
exports.isFalse = isFalse;
exports.isTrue = isTrue;
exports.isElement = isElement;

//是否字符串
function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
} //是否数字


function isNumber(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
} //是否对象


function isObj(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
} //是否数组


function isArray(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
} //是否时间


function isDate(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
} //是否boolean


function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
} //是否函数


function isFunction(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
} //是否为null


function isNull(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
} //是否undefined


function isUndefined(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
}

function isBlob(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Blob';
}

function isFalse(o) {
  if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) {
    return true;
  } else {
    return false;
  }
}

function isTrue(o) {
  return isFalse(o);
} // 是否是dom


function isElement(o) {
  return Object.prototype.toString.call(o).indexOf('Element') > -1;
}
},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlToObject = urlToObject;
exports.base64toBlob = base64toBlob;

/**
 * url 转 js 对象
* @param  {string} getUrl 
* @return {Object} obj
*/
function urlToObject(getUrl) {
  var obj = {};
  var index = getUrl.indexOf('?');

  if (index > -1) {
    var getUrl = getUrl.slice(index + 1);
    var arr = getUrl.split('&');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var res = item.split('=');
        obj[res[0]] = res[1];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return obj;
} // base64转blob


function base64toBlob(base64) {
  var arr = base64.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], {
    type: mime
  });
}
},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelAnimationFrame = void 0;

// 取消动画函数
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.cancelRequestAnimationFrame || function (id) {
  clearTimeout(id);
};

exports.cancelAnimationFrame = cancelAnimationFrame;
},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exitFullscreen = void 0;
// 退出全屏
var exitFullscreen = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
exports.exitFullscreen = exitFullscreen;
},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullscreenElement = void 0;
// 是否全屏
var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
exports.fullscreenElement = fullscreenElement;
},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexedDB = void 0;
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
exports.indexedDB = indexedDB;
},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAnimationFrame = void 0;

// 动画函数
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
  return setTimeout(callback(Date.now), 1000 / 60);
};

exports.requestAnimationFrame = requestAnimationFrame;
},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestFullscreen = void 0;
// 全屏
var requestFullscreen = document.documentElement.requestFullscreen || document.documentElement.msRequestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen;
exports.requestFullscreen = requestFullscreen;
},{}]},{},[2]);
