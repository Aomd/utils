// 入口函数
// 可以按需加载
import * as Array from './src/Array';
import * as Browser from './src/Browser';
import * as Color from './src/Color';
import * as Date from './src/Date';
import * as Geometry from './src/Geometry';
import * as Mouse from './src/Mouse';
import * as Number from './src/Number';
import * as Object from './src/Object';
import * as Optimize from './src/Optimize';
import * as Screen from './src/Screen';
import * as String from './src/String';
import * as Type from './src/Type';
import * as Url from './src/Url';

export * from './src/browser/compatible/cancelAnimationFrame';
export * from './src/browser/compatible/exitFullscreen';
export * from './src/browser/compatible/fullscreenElement';
export * from './src/browser/compatible/indexedDB';
export * from './src/browser/compatible/requestAnimationFrame';
export * from './src/browser/compatible/requestFullscreen';

export {
  Array,
  Browser,
  Color,
  Date,
  Geometry,
  Mouse,
  Number,
  Object,
  Optimize,
  Screen,
  String,
  Type,
  Url
}