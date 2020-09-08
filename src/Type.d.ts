declare function isString(o: object): boolean;
declare function isNumber(o: object): boolean;
declare function isObj(o: object): boolean;
declare function isArray(o: object): boolean;
declare function isDate(o: object): boolean;
declare function isBoolean(o: object): boolean;
declare function isFunction(o: object): boolean;
declare function isNull(o: object): boolean;
declare function isUndefined(o: object): boolean;
declare function isBlob(o: object): boolean;
declare function isFalse(o: object): boolean;
declare function isTrue(o: object): boolean;
declare function isElement(o: object): boolean;

export {
  isString,
  isNumber,
  isObj,
  isArray,
  isDate,
  isBoolean,
  isFunction,
  isNull,
  isUndefined,
  isBlob,
  isFalse,
  isTrue,
  isElement
}