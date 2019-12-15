/**
 * url 转 js 对象
* @param  {string} str 
* @return {Object} obj
*/
export const UrlToObject = (str) => {
  var obj = {};
  var index = str.indexOf('?');
  if (index > -1) {
    var str = str.slice(index + 1);
    var arr = str.split('&');
    for (var item of arr) {
      var res = item.split('=')
      obj[res[0]] = res[1];
    }
  }
  return obj
}
