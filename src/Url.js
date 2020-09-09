/**
 * url 转 js 对象
* @param  {string} getUrl 
* @return {Object}
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

/**
 * base64转blob
 *
 * @param {string} base64
 * @returns {Blob}
 */
function base64toBlob(base64) {
  var arr = base64.split(',')
  var matchSize = arr[0].match(/:(.*?);/);
  var mime = 'application/octet-stream';
  if (matchSize && 'length' in matchSize && matchSize.length >= 2) {
    mime = arr[0].match(/:(.*?);/)[1];
  }
  var bstr = atob(arr[arr.length-1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export {
  urlToObject,
  base64toBlob
}