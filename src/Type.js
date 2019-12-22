//是否字符串
export const isString = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

//是否数字
export const isNumber = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

//是否对象
export const isObj = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

//是否数组
export const isArray = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

//是否时间
export const isDate = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

//是否boolean
export const isBoolean = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

//是否函数
export const isFunction = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

//是否为null
export const isNull = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

//是否undefined
export const isUndefined = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

export const isFalse = (o) => {
  if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) {
    return true
  } else {
    return false
  }

}

export const isTrue = (o) => {
  return !this.isFalse(o)
}

// 是否是dom
export const isElement = (o) => {
  return Object.prototype.toString.call(o).indexOf('Element') > -1
}
