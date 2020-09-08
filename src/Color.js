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
 * @param {Object} rgb
 * @returns {string}
 */
function rgbToHex(rgb) {
  return '#' + (((rgb.r & 255) << 16) + ((rgb.g & 255) << 8) + (rgb.b & 255)).toString(16).padStart(6,'0');
}


export {
  hexToRgb,
  rgbToHex
}