//是否字符串
function isString(o) {
  return toString(o).slice(8, -1) === 'String'
}

//是否数字
function isNumber(o) {
  return toString(o).slice(8, -1) === 'Number'
}

//是否对象
function isObj(o) {
  return toString(o).slice(8, -1) === 'Object'
}

//是否数组
function isArray(o) {
  return toString(o).slice(8, -1) === 'Array'
}

//是否时间
function isDate(o) {
  return toString(o).slice(8, -1) === 'Date'
}

//是否boolean
function isBoolean(o) {
  return toString(o).slice(8, -1) === 'Boolean'
}

//是否函数
function isFunction(o) {
  return toString(o).slice(8, -1) === 'Function'
}

//是否为null
function isNull(o) {
  return toString(o).slice(8, -1) === 'Null'
}

//是否undefined
function isUndefined(o) {
  return toString(o).slice(8, -1) === 'Undefined'
}

function isBlob(o) {
  return toString(o).slice(8, -1) === 'Blob'
}

// 是否是dom
function isElement(o) {
  return toString(o).indexOf('Element') > -1
}

function toString(o){
  return Object.prototype.toString.call(o)
}

function isFalse(o) {
  if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || isNaN(o)) {
    return true;
  } else {
    return false;
  }

}

function isTrue(o) {
  return isFalse(o)
}



export {
  isString,
  isNumber,
  isObj,
  isArray,
  isDate,
  isBoolean,
  isFunction,
  isNull,
  isUndefined,
  isBlob,
  isElement,
  toString,
  isFalse,
  isTrue
}