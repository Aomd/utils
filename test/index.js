function test(conputer,value){
  if(conputer !== value){
    throw new Error('Mismatch')
  }
}


test(AomdUtils.Type.isArray([]),true);

test(AomdUtils.Type.isBlob(new Blob([])),true);

test(AomdUtils.Type.isBoolean(true),true);
test(AomdUtils.Type.isBoolean(false),true);
test(AomdUtils.Type.isBoolean(0),false);

test(AomdUtils.Type.isDate(new Date()),true);

test(AomdUtils.Type.isElement(document.body),true);

test(AomdUtils.Type.isFalse(NaN),true);
test(AomdUtils.Type.isFalse(0),true);
test(AomdUtils.Type.isFalse(undefined),true);
test(AomdUtils.Type.isFalse(false),true);

test(AomdUtils.Type.isFunction(function(){}),true);

test(AomdUtils.Type.isNull(undefined),false);
test(AomdUtils.Type.isNull(null),true);

test(AomdUtils.Type.isNumber('0'),false)
test(AomdUtils.Type.isNumber(0),true)

test(AomdUtils.Type.isObj({}),true);

test(AomdUtils.Type.isString(''),true);

test(AomdUtils.Type.isUndefined(undefined),true);

test(AomdUtils.Url.urlToObject('?a=1').a,'1');

test(AomdUtils.Url.base64toBlob(btoa('1')).size,1);