/**
 * 统一鼠标滚轮方向
 * 上 true
 * 下 false
 * @export
 * @param {Event} e
 * @returns {Boolean} bool
 */
export function mouseWheelDirection(evt) {
  var e = evt || event;
  var bool = false;
  if (e?.wheelDelta > 0 || e?.detail < 0) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
