import * as AomdUtils from './build';
(function (window) {
  if (typeof window !== "undefined") {
    window.AomdUtils = AomdUtils
  } else {
    throw new Error('window is not defined')
  }
})(window)
