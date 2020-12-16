/**
 * 格式化时间日期
 *
 * @export
 * @param {*} [time=new Date()]
 * @param {string} [format='{y}-{m}-{d} {h}:{i}:{s}']
 * @returns
 */
export function formatTime (time = new Date(), format = '{y}-{m}-{d} {h}:{i}:{s}') {

  try {
    var date = new Date(time)
  } catch (error) {
    throw new Error(error);
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    var value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

