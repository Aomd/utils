/**
 * url 转 js 对象
* @param  {string} str 
* @return {Object} obj
*/
export const urlToObject = (str) => {
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

// base64转blob
export const base64toBlob = (dataurl) => {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}