
type  engine =  'WebKit'| 'Trident'| 'Gecko'| 'Presto'| 'KHTML';
type  os = 'Windows'| 'Linux'| 'Mac OS'| 'Android'| 'Ubuntu'| 'FreeBSD'| 'Debian'| 'iOS'| 'Windows Phone'| 'BlackBerry'| 'MeeGo'| 'Symbian'| 'Chrome OS'| 'WebOS';
type  device = 'Mobile'| 'Tablet';



declare function getLanguage():string;
declare function getEngine():engine;
declare function getOs():os;
declare function getOsVersion():string;
declare function getDevice():device;
declare function getIEVersion():string;
declare function isIE():boolean;
declare function isPC():boolean;
declare function isTablet():boolean;
declare function isMobile():boolean;
declare function isCanvas():boolean;
declare function isWebgl():boolean;
declare function isSvg():boolean;
declare function isWebsocket():boolean;
declare function isWorker():boolean;
declare function isLocalStorage():boolean;
declare function isGeolocation():boolean;
declare function isFile():boolean;

export{
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