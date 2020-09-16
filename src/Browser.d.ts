
type  engine =  'WebKit'| 'Trident'| 'Gecko'| 'Presto'| 'KHTML';
type  browser =  'Safari'| 'Chrome'| 'Edge'| 'IE'| 'Firefox'| 'Firefox Focus'| 'Chromium'| 'Opera'| 'Vivaldi'| 'Yandex'| 'Arora'| 'Lunascape'| 'QupZilla'| 'Coc Coc'| 'Kindle'| 'Iceweasel'| 'Konqueror'| 'Iceape'| 'SeaMonkey'| 'Epiphany'| 'XiaoMi'| 'Vivo'| '360'| '360SE'| '360EE'| 'UC'| 'QQBrowser'| 'QQ'| 'Huawei'| 'Baidu'| 'Maxthon'| 'Sogou'| 'Liebao'| '2345Explorer'| '115Browser'| 'TheWorld'| 'Quark'| 'Qiyu'| 'Wechat'| 'WechatWork'| 'Taobao'| 'Alipay'| 'Weibo'| 'Douban'| 'Suning'| 'iQiYi'| 'DingTalk';
type  os = 'Windows'| 'Linux'| 'Mac OS'| 'Android'| 'Ubuntu'| 'FreeBSD'| 'Debian'| 'iOS'| 'Windows Phone'| 'BlackBerry'| 'MeeGo'| 'Symbian'| 'Chrome OS'| 'WebOS';
type  device = 'Mobile'| 'Tablet';



declare function getLanguage():string;
declare function getBrowser():browser;
declare function getBrowserVersion():string;
declare function getEngine():engine;
declare function getOs():os;
declare function getOsVersion():string;
declare function getDevice():device;
declare function isPC():boolean;
declare function isTablet():boolean;
declare function isMobile():boolean;
declare function isCanvas():boolean;
declare function isWebgl():boolean;
declare function isSvg():boolean;
declare function isVML():boolean;
declare function isWebsocket():boolean;
declare function isWorker():boolean;
declare function isLocalStorage():boolean;
declare function isGeolocation():boolean;
declare function isFile():boolean;

export{
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