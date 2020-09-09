// 退出全屏
function exitFullscreen() {
  if ('exitFullscreen' in document) {
    return document.exitFullscreen()
  }
  if ('msExitFullscreen' in document) {
    return document.msExitFullscreen()
  }
  if ('mozCancelFullScreen' in document) {
    return document.mozCancelFullScreen()
  }
  if ('webkitExitFullscreen' in document) {
    return document.webkitExitFullscreen()
  }
}

export {
  exitFullscreen
}