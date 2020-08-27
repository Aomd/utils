// @ts-check

import { fullscreenElement } from "./browser/compatible/fullscreenElement";
import { exitFullscreen } from "./browser/compatible/exitFullscreen";
import { requestFullscreen } from "./browser/compatible/requestFullscreen";

/**
 *
 * 开启全屏
 *
 * @returns
 */
function openFullScreen() {
  return requestFullscreen()
}

/**
 * 关闭全屏
 *
 * @returns
 */
function closeFullScreen() {
  if (isFullScreen()) {
    return exitFullscreen()
  }
}

/**
 * 判断是否全屏
 *
 * @returns
 */
function isFullScreen() {
  if (fullscreenElement) {
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