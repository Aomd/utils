// 全屏
function requestFullscreen(options) {
  if ('requestFullscreen' in document.documentElement) {
    return document.documentElement.requestFullscreen(options)
  }
  if ('msRequestFullscreen' in document.documentElement) {
    return document.documentElement.msRequestFullscreen(options)
  }
  if ('mozRequestFullScreen' in document.documentElement) {
    return document.documentElement.mozRequestFullScreen(options)
  }
  if ('webkitRequestFullscreen' in document.documentElement) {
    return document.documentElement.webkitRequestFullscreen(options)
  }
}

export {
  requestFullscreen
}