import * as Utils from './Utils'
(function (window) {
  if (typeof window !== "undefined") {
    window.Utils = Utils
  } else {
    throw new Error('window is not defined')
  }
})(window)
