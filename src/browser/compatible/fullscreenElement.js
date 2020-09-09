// 是否全屏
function fullscreenElement(){
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
}
export  {
  fullscreenElement
}