/**
 * url 转 js 对象
* @param  {string} getUrl 
* @return {Object} obj
*/
function urlToObject(getUrl) {
  var obj = {};
  var index = getUrl.indexOf('?');
  if (index > -1) {
    var getUrl = getUrl.slice(index + 1);
    var arr = getUrl.split('&');
    for (var item of arr) {
      var res = item.split('=')
      obj[res[0]] = res[1];
    }
  }
  return obj
}

// base64转blob
function base64toBlob(base64) {
  var arr = base64.split(',')
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export{
  urlToObject,
  base64toBlob
}