/**
 * #ffffff -> rgb
 *
 * @param {string} str
 * @returns {object} {r,g,b}
 */
function hexToRgb(str) {
  var hex = parseInt(str.indexOf('#') > -1 ? str.slice(1) : str, 16)
  var r = hex >> 16 & 255
  var g = hex >> 8 & 255
  var b = hex >> 0 & 255
  return {
    r, g, b
  }
}

/**
 * rgb -> #ffffff 
 *
 * @param {*} r
 * @param {*} g
 * @param {*} b
 * @returns {string}
 */
function rgbToHex(r, g, b) {
  return '#' + (((r & 255) << 16) + ((g & 255) << 8) + (b & 255)).toString(16)
}


export {
  hexToRgb,
  rgbToHex
}