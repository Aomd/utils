var u = navigator.userAgent

/**
 * 获取浏览器语言
 *
 * @returns {String} 当前浏览器语言
 */
function getLanguage(){
  return (navigator.browserLanguage || navigator.language).toLowerCase()
}

/**
 * 获取当前浏览器类型
 *
 * @returns {Object}
 */
function getBrowserType(){
  return {
    trident: u.indexOf('Trident') > -1, //IE内核  
    presto: u.indexOf('Presto') > -1, //opera内核  
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器  
    iPad: u.indexOf('iPad') > -1, //是否iPad    
    webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部  
    weixin: u.indexOf('MicroMessenger') > -1, //是否微信   
    qq: u.match(/\sQQ/i) == " qq" //是否QQ
  };
}

/**
 * 获取当前系统类型
 *
 * @returns {String} 当前设备系统类型
 */
function getDeviceOS(){
  var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
  var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
  if (isMac) return "Mac";
  var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
  if (isUnix) return "Unix";
  var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
  if (isLinux) return "Linux";
  if (isWin) {
    var isWin2K = u.indexOf("Windows NT 5.0") > -1 || u.indexOf("Windows 2000") > -1;
    if (isWin2K) return "Win2000";
    var isWinXP = u.indexOf("Windows NT 5.1") > -1 || u.indexOf("Windows XP") > -1;
    if (isWinXP) return "WinXP";
    var isWin2003 = u.indexOf("Windows NT 5.2") > -1 || u.indexOf("Windows 2003") > -1;
    if (isWin2003) return "Win2003";
    var isWinVista = u.indexOf("Windows NT 6.0") > -1 || u.indexOf("Windows Vista") > -1;
    if (isWinVista) return "WinVista";
    var isWin7 = u.indexOf("Windows NT 6.1") > -1 || u.indexOf("Windows 7") > -1;
    if (isWin7) return "Win7";
    var isWin10 = u.indexOf("Windows NT 10") > -1 || u.indexOf("Windows 10") > -1;
    if (isWin10) return "Win10";
  }
  return "other";
}

/**
 * 判断当前设备是否是pc
 *
 * @returns {Boolean} 
 */
function isPC (){
  return getBrowserType().android || getBrowserType().iPad || getBrowserType().iPhone
}

export{
  getLanguage,
  getBrowserType,
  getDeviceOS,
  isPC
}