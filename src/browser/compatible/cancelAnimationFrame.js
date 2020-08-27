// 取消动画函数
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.cancelRequestAnimationFrame || function (id) { clearTimeout(id) }

export  {
  cancelAnimationFrame
}