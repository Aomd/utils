// 参考 https://github.com/mumuy/browser

var u = navigator.userAgent

var match = {
  //内核
  'Trident': u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
  'Presto': u.indexOf('Presto') > -1,
  'WebKit': u.indexOf('AppleWebKit') > -1,
  'Gecko': u.indexOf('Gecko/') > -1,
  'KHTML': u.indexOf('KHTML/') > -1,
  //浏览器
  'Safari': u.indexOf('Safari') > -1,
  'Chrome': u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
  'IE': u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
  'Edge': u.indexOf('Edge') > -1 || u.indexOf('Edg/') > -1,
  'Firefox': u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
  'Firefox Focus': u.indexOf('Focus') > -1,
  'Chromium': u.indexOf('Chromium') > -1,
  'Opera': u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
  'Vivaldi': u.indexOf('Vivaldi') > -1,
  'Yandex': u.indexOf('YaBrowser') > -1,
  'Arora': u.indexOf('Arora') > -1,
  'Lunascape': u.indexOf('Lunascape') > -1,
  'QupZilla': u.indexOf('QupZilla') > -1,
  'Coc Coc': u.indexOf('coc_coc_browser') > -1,
  'Kindle': u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
  'Iceweasel': u.indexOf('Iceweasel') > -1,
  'Konqueror': u.indexOf('Konqueror') > -1,
  'Iceape': u.indexOf('Iceape') > -1,
  'SeaMonkey': u.indexOf('SeaMonkey') > -1,
  'Epiphany': u.indexOf('Epiphany') > -1,
  '360': u.indexOf('QihooBrowser') > -1 || u.indexOf('QHBrowser') > -1,
  '360EE': u.indexOf('360EE') > -1,
  '360SE': u.indexOf('360SE') > -1,
  'UC': u.indexOf('UCBrowser') > -1 || u.indexOf(' UBrowser') > -1,
  'QQBrowser': u.indexOf('QQBrowser') > -1,
  'QQ': u.indexOf('QQ/') > -1,
  'Baidu': u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1 || u.indexOf('baiduboxapp') > -1,
  'Maxthon': u.indexOf('Maxthon') > -1,
  'Sogou': u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
  'Liebao': u.indexOf('LBBROWSER') > -1 || u.indexOf('LieBaoFast') > -1,
  '2345Explorer': u.indexOf('2345Explorer') > -1 || u.indexOf('Mb2345Browser') > -1,
  '115Browser': u.indexOf('115Browser') > -1,
  'TheWorld': u.indexOf('TheWorld') > -1,
  'XiaoMi': u.indexOf('MiuiBrowser') > -1,
  'Quark': u.indexOf('Quark') > -1,
  'Qiyu': u.indexOf('Qiyu') > -1,
  'Wechat': u.indexOf('MicroMessenger') > -1,
  'WechatWork': u.indexOf('wxwork/') > -1,
  'Taobao': u.indexOf('AliApp(TB') > -1,
  'Alipay': u.indexOf('AliApp(AP') > -1,
  'Weibo': u.indexOf('Weibo') > -1,
  'Douban': u.indexOf('com.douban.frodo') > -1,
  'Suning': u.indexOf('SNEBUY-APP') > -1,
  'iQiYi': u.indexOf('IqiyiApp') > -1,
  'DingTalk': u.indexOf('DingTalk') > -1,
  'Huawei': u.indexOf('HuaweiBrowser') > -1 || u.indexOf('HUAWEI/') > -1,
  'Vivo': u.indexOf('VivoBrowser') > -1,
  //系统或平台
  'Windows': u.indexOf('Windows') > -1,
  'Linux': u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
  'Mac OS': u.indexOf('Macintosh') > -1,
  'Android': u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
  'Ubuntu': u.indexOf('Ubuntu') > -1,
  'FreeBSD': u.indexOf('FreeBSD') > -1,
  'Debian': u.indexOf('Debian') > -1,
  'Windows Phone': u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
  'BlackBerry': u.indexOf('BlackBerry') > -1 || u.indexOf('RIM') > -1,
  'MeeGo': u.indexOf('MeeGo') > -1,
  'Symbian': u.indexOf('Symbian') > -1,
  'iOS': u.indexOf('like Mac OS X') > -1,
  'Chrome OS': u.indexOf('CrOS') > -1,
  'WebOS': u.indexOf('hpwOS') > -1,
  //设备
  'Mobile': u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1,
  'Tablet': u.indexOf('Tablet') > -1 || u.indexOf('Pad') > -1 || u.indexOf('Nexus 7') > -1
}

var hash = {
  engine: ['WebKit', 'Trident', 'Gecko', 'Presto', 'KHTML'],
  browser: ['Safari', 'Chrome', 'Edge', 'IE', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera', 'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle', 'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', 'XiaoMi', 'Vivo', '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Huawei', 'Baidu', 'Maxthon', 'Sogou', 'Liebao', '2345Explorer', '115Browser', 'TheWorld', 'Quark', 'Qiyu', 'Wechat', 'WechatWork', 'Taobao', 'Alipay', 'Weibo', 'Douban', 'Suning', 'iQiYi', 'DingTalk'],
  os: ['Windows', 'Linux', 'Mac OS', 'Android', 'Ubuntu', 'FreeBSD', 'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian', 'Chrome OS', 'WebOS'],
  device: ['Mobile', 'Tablet']
};

for (var key in hash) {
  for (var item of hash[key]) {
    if (match[item]) {
      hash[key] = item;
    }
  }
}


function getLanguage() {
  // @ts-ignore
  return (navigator.browserLanguage || navigator.language).toLowerCase()
}

var browserVersion = {
  'Safari': function () {
    return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
  },
  'Chrome': function () {
    return u.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1');
  },
  'IE': function () {
    return u.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
  },
  'Edge': function () {
    return u.replace(/^.*Edge\/([\d.]+).*$/, '$1').replace(/^.*Edg\/([\d.]+).*$/, '$1');
  },
  'Firefox': function () {
    return u.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1');
  },
  'Firefox Focus': function () {
    return u.replace(/^.*Focus\/([\d.]+).*$/, '$1');
  },
  'Chromium': function () {
    return u.replace(/^.*Chromium\/([\d.]+).*$/, '$1');
  },
  'Opera': function () {
    return u.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1');
  },
  'Vivaldi': function () {
    return u.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1');
  },
  'Yandex': function () {
    return u.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1');
  },
  'Arora': function () {
    return u.replace(/^.*Arora\/([\d.]+).*$/, '$1');
  },
  'Lunascape': function () {
    return u.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1');
  },
  'QupZilla': function () {
    return u.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1');
  },
  'Coc Coc': function () {
    return u.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1');
  },
  'Kindle': function () {
    return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
  },
  'Iceweasel': function () {
    return u.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1');
  },
  'Konqueror': function () {
    return u.replace(/^.*Konqueror\/([\d.]+).*$/, '$1');
  },
  'Iceape': function () {
    return u.replace(/^.*Iceape\/([\d.]+).*$/, '$1');
  },
  'SeaMonkey': function () {
    return u.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1');
  },
  'Epiphany': function () {
    return u.replace(/^.*Epiphany\/([\d.]+).*$/, '$1');
  },
  '360': function () {
    return u.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1');
  },
  '360SE': function () {
    var hash = { '78': '12.1', '69': '11.1', '63': '10.0', '55': '9.1', '45': '8.1', '42': '8.0', '31': '7.0', '21': '6.3' };
    var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
    return hash[chrome_version] || '';
  },
  '360EE': function () {
    var hash = { '78': '12.0', '69': '11.0', '63': '9.5', '55': '9.0', '50': '8.7', '30': '7.5' };
    var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
    return hash[chrome_version] || '';
  },
  'Maxthon': function () {
    return u.replace(/^.*Maxthon\/([\d.]+).*$/, '$1');
  },
  'QQBrowser': function () {
    return u.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1');
  },
  'QQ': function () {
    return u.replace(/^.*QQ\/([\d.]+).*$/, '$1');
  },
  'Baidu': function () {
    return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1').replace(/^.*baiduboxapp\/([\d.]+).*$/, '$1');
  },
  'UC': function () {
    return u.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1');
  },
  'Sogou': function () {
    return u.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1');
  },
  'Liebao': function () {
    var version = ''
    if (u.indexOf('LieBaoFast') > -1) {
      version = u.replace(/^.*LieBaoFast\/([\d.]+).*$/, '$1');
    }
    var hash = { '57': '6.5', '49': '6.0', '46': '5.9', '42': '5.3', '39': '5.2', '34': '5.0', '29': '4.5', '21': '4.0' };
    var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
    return version || hash[chrome_version] || '';
  },
  '2345Explorer': function () {
    var hash = { '69': '10.0', '55': '9.9' };
    var chrome_version = navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/, '$1');
    return hash[chrome_version] || u.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1').replace(/^.*Mb2345Browser\/([\d.]+).*$/, '$1');
  },
  '115Browser': function () {
    return u.replace(/^.*115Browser\/([\d.]+).*$/, '$1');
  },
  'TheWorld': function () {
    return u.replace(/^.*TheWorld ([\d.]+).*$/, '$1');
  },
  'XiaoMi': function () {
    return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1');
  },
  'Vivo': function () {
    return u.replace(/^.*VivoBrowser\/([\d.]+).*$/, '$1');
  },
  'Quark': function () {
    return u.replace(/^.*Quark\/([\d.]+).*$/, '$1');
  },
  'Qiyu': function () {
    return u.replace(/^.*Qiyu\/([\d.]+).*$/, '$1');
  },
  'Wechat': function () {
    return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1');
  },
  'WechatWork': function () {
    return u.replace(/^.*wxwork\/([\d.]+).*$/, '$1');
  },
  'Taobao': function () {
    return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1');
  },
  'Alipay': function () {
    return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1');
  },
  'Weibo': function () {
    return u.replace(/^.*weibo__([\d.]+).*$/, '$1');
  },
  'Douban': function () {
    return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1');
  },
  'Suning': function () {
    return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1');
  },
  'iQiYi': function () {
    return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1');
  },
  'DingTalk': function () {
    return u.replace(/^.*DingTalk\/([\d.]+).*$/, '$1');
  },
  'Huawei': function () {
    return u.replace(/^.*Version\/([\d.]+).*$/, '$1').replace(/^.*HuaweiBrowser\/([\d.]+).*$/, '$1');
  }
};
function getBrowser() {
  var browser = ''
  return hash.browser;
}

function getBrowserVersion() {
  return browserVersion[hash.browser]();
}

function getEngine() {
  return hash.engine
}

function getOs() {
  return hash.os
}

var osVersion = {
  'Windows': function () {
    var v = u.replace(/^Mozilla\/\d.0 \(Windows NT ([\d.]+);.*$/, '$1');
    var hash = {
      '10': '10',
      '6.4': '10',
      '6.3': '8.1',
      '6.2': '8',
      '6.1': '7',
      '6.0': 'Vista',
      '5.2': 'XP',
      '5.1': 'XP',
      '5.0': '2000'
    };
    return hash[v] || v;
  },
  'Android': function () {
    return u.replace(/^.*Android ([\d.]+);.*$/, '$1');
  },
  'iOS': function () {
    return u.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.');
  },
  'Debian': function () {
    return u.replace(/^.*Debian\/([\d.]+).*$/, '$1');
  },
  'Windows Phone': function () {
    return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2');
  },
  'Mac OS': function () {
    return u.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.');
  },
  'WebOS': function () {
    return u.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1');
  }
};
function getOsVersion() {
  return osVersion[hash.os]();
}

function getDevice() {
  if(typeof hash.device != 'string'){
    return 'PC'
  }else{
    return hash.device
  }
}

function isPC() {
  return !match.Tablet || !match.Mobile
}

function isTablet() {
  return match.Tablet
}
function isMobile() {
  return match.Mobile
}

function isCanvas(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d')); 
}

function isWebgl(){
  
}

function isSvg(){

}

function isVML(){

}


function isWebsocket(){

}

function isWorker(){
  return !!window.Worker;
}

function isLocalStorage(){

}

function isGeolocation(){

}

function isFile(){
  return !!(window.File && window.FileReader && window.FileList && window.Blob)
}


export {
  getLanguage,
  getBrowser,
  getBrowserVersion,
  getEngine,
  getOs,
  getOsVersion,
  getDevice,
  isPC,
  isTablet,
  isMobile,
  isCanvas,
  isWebgl,
  isSvg,
  isVML,
  isWebsocket,
  isWorker,
  isLocalStorage,
  isGeolocation,
  isFile
}