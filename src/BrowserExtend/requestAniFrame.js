import {w} from './base'
w.requestAniFrame = (function () {
  return w.requestAnimationFrame

      // Older versions Chrome/Webkit
      w.webkitRequestAnimationFrame ||

      // Firefox < 23
      w.mozRequestAnimationFrame ||

      // opera
      w.oRequestAnimationFrame ||

      // ie
      w.msRequestAnimationFrame ||

      function (callback) {
          return w.setTimeout(callback, 1000 / 60);
      };
})()

w.cancelAnimation = (function () {
  return w.cancelAnimationFrame || w.mozCancelAnimationFrame || w.cancelRequestAnimationFrame || function (id) { clearTimeout(id) }
})()
