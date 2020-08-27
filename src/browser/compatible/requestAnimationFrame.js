// 动画函数
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
  return setTimeout(callback(Date.now), 1000 / 60);
};

export  {
  requestAnimationFrame
}

