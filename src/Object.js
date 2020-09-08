
/**
 * 克隆对象
 *
 * @param {Object} o
 * @returns {Object}
 */
function clone (o) {
  return JSON.parse(JSON.stringify(o))
}


/**
* 获取对象key数量
*
* @param {Object} o
* @returns {Number}
*/
function size(o) {
  return Object.keys(o).length
}




export{
    clone,
    size
}