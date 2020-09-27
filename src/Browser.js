// 参考 https://github.com/mumuy/browser

var u = navigator.userAgent

var match = {
  //内核
  'Trident': u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
  'Presto': u.indexOf('Presto') > -1,
  'WebKit': u.indexOf('AppleWebKit') > -1,
  'Gecko': u.indexOf('Gecko/') > -1,
  'KHTML': u.indexOf('KHTML/') > -1,
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
  if (typeof hash.device != 'string') {
    return 'PC'
  } else {
    return hash.device
  }
}

function isIE() {
  return u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1;
}

function getIEVersion() {
  return u.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
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

function isCanvas() {
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

function isWebgl() {
  var elem = document.createElement('canvas');
  return !!(window.WebGLRenderingContext && ( elem.getContext( 'webgl' ) || elem.getContext( 'experimental-webgl' ) ));
}

function isSvg() {
  return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
}


function isWebsocket() {
  return 'WebSocket' in window || 'MozWebSocket' in window;
}

function isWorker() {
  return !!window.Worker;
}

function isLocalStorage() {
  var key = (+new Date()).toString();
  try {
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

function isGeolocation() {
  return 'geolocation' in navigator;
}

function isFile() {
  return !!(window.File && window.FileReader && window.FileList && window.Blob)
}

export {
  getLanguage,
  getEngine,
  getOs,
  getOsVersion,
  getDevice,
  getIEVersion,
  isIE,
  isPC,
  isTablet,
  isMobile,
  isCanvas,
  isWebgl,
  isSvg,
  isWebsocket,
  isWorker,
  isLocalStorage,
  isGeolocation,
  isFile
}