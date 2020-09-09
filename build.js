// 某些加载器（loader）不支持 export * as  所以单独 使用build来编译es5
export * as Array from './src/Array';
export * as Browser from './src/Browser';
export * as Color from './src/Color';
export * as Date from './src/Date';
export * as Geometry from './src/Geometry';
export * as Mouse from './src/Mouse';
export * as Number from './src/Number';
export * as Object from './src/Object';
export * as Optimize from './src/Optimize';
export * as Screen from './src/Screen';
export * as String from './src/String';
export * as Type from './src/Type';
export * as Url from './src/Url';

export * from './src/browser/compatible/cancelAnimationFrame';
export * from './src/browser/compatible/exitFullscreen';
export * from './src/browser/compatible/fullscreenElement';
export * from './src/browser/compatible/indexedDB';
export * from './src/browser/compatible/requestAnimationFrame';
export * from './src/browser/compatible/requestFullscreen';