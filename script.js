import * as AomdUtils from './index';
(function (window) {
  if (typeof window !== "undefined") {
    window.AomdUtils = AomdUtils
  } else {
    throw new Error('window is not defined')
  }
})(window)
