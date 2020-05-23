
/**
 *
 * 开启全屏
 *
 * @returns
 */
function openFullScreen() {
  return d[el].requestFullscreen
    ? d[el].requestFullscreen()
    : d[el].msRequestFullscreen
      ? d[el].msRequestFullscreen()
      : d[el].mozRequestFullScreen
        ? d[el].mozRequestFullScreen()
        : d[el].webkitRequestFullscreen && d[el].webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
}

/**
 * 关闭全屏
 *
 * @returns
 */
function closeFullScreen() {
  if (isFullScreen()) {
    return d.exitFullscreen
      ? d.exitFullscreen()
      : d.msExitFullscreen
        ? d.msExitFullscreen()
        : d.mozCancelFullScreen
          ? d.mozCancelFullScreen()
          : d.webkitExitFullscreen && d.webkitExitFullscreen()
  }
}

/**
 * 判断是否全屏
 *
 * @returns
 */
function isFullScreen() {
  if (d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement) {
    // 全屏
    return true;
  } else {
    // 不是全屏
    return false;
  }
}

export{
  openFullScreen,
  closeFullScreen,
  isFullScreen
}