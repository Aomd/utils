
/**
 * 克隆对象
 *
 * @param {Object} o
 * @returns {Object}
 */
export  const clone = (o) => {
  return JSON.parse(JSON.stringify(o))
}


/**
* 获取对象key数量
*
* @param {Object} o
* @returns {Number}
*/
export const size = (o) => {
  return Object.keys(o).length
}

export const pluck = () => {

}

/**
* 获取
*
* @param {String} pototype 要找的原型链
* @param {String|Array|Number|Array|Object} defined 默认值
* @returns {Object}
*/
export const getDefined = (pototype, defined) => {
  if (typeof pototype !== 'string') {
      return defined;
  }
  var pototypeArray = pototype.split('.');
  var baseItem = ''
  try {
      if (/[a-z|A-Z|0-9|_]+/.test(pototypeArray[0])) {
          baseItem = eval(pototypeArray[0]);
      } else {
          return defined;
      }

      for (var i = 1; i < pototypeArray.length; i++) {
          if (pototypeArray[i] in baseItem) {
              baseItem = baseItem[pototypeArray[i]]
          } else {
              return defined;
          }
      }
      return baseItem
  } catch (error) {
      return defined
  }

}
