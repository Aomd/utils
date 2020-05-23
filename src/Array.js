

/**
* @param  {arr} 数组
* @param  {fn} 回调函数
* @return {undefined}
*/
function each  (arr, fn) {
  fn = fn || Function;
  var a = [];
  var args = Array.prototype.slice.call(arguments, 1);
  for (var i = 0; i < arr.length; i++) {
    var res = fn.apply(arr, [arr[i], i].concat(args));
    if (res != null) a.push(res);
  }
}

/**
* @param  {arr} 数组
* @param  {fn} 回调函数
* @param  {thisObj} this指向
* @return {Array} 
*/
function map  (arr, fn, thisObj)  {
  var scope = thisObj || window;
  var a = [];
  for (var i = 0, j = arr.length; i < j; ++i) {
    var res = fn.call(scope, arr[i], i, this);
    if (res != null) a.push(res);
  }
  return a;
}


/**
* @param  {arr} 数组
* @param  {type} 1：从小到大   2：从大到小   3：随机
* @return {Array}
*/
function sort  (arr, type = 1)  {
  return arr.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  })
}


/**
*去重
*
* @param {Array} arr
* @returns
*/
function unique  (arr)  {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var n = {}, r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
}


/**
*求两个集合的并集
*
* @param {Array} a
* @param {Array} b
* @returns
*/
function union  (a, b)  {
  var newArr = a.concat(b);
  return this.unique(newArr);
}

/**
 *求两个集合的交集
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
function intersect  (a, b)  {
  var _this = this;
  a = this.unique(a);
  return this.map(a, function (o) {
    return _this.contains(b, o) ? o : null;
  });
}

/**
*删除其中一个元素
*
* @param {*} arr
* @param {*} ele
* @returns
*/
function remove  (arr, ele)  {
  var index = arr.indexOf(ele);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

/**
 *将类数组转换为数组的方法
 *
 * @param {*} ary
 * @returns
 */
function formArray (ary)  {
  var arr = [];
  if (Array.isArray(ary)) {
    arr = ary;
  } else {
    arr = Array.prototype.slice.call(ary);
  };
  return arr;
}


/**
 *最大值
 *
 * @param {*} arr
 * @returns
 */
function max  (arr)  {
  return Math.max.apply(null, arr);
}

/**
 *最小值
 *
 * @param {*} arr
 * @returns
 */
function min  (arr)  {
  return Math.min.apply(null, arr);
}

/**
 *求和
 *
 * @param {*} arr
 * @returns
 */
function sum  (arr)  {
  return arr.reduce((pre, cur) => {
    return pre + cur
  })
}

/**
 *平均值
 *
 * @param {*} arr
 * @returns
 */
function average (arr)  {
  return this.sum(arr) / arr.length
}



/**
 *根据条件取出值
 *
 * @param {*} a
 * @param {*} w
 */
function where  (a, w)  {

}
export{
  each,
  map,
  sort,
  unique,
  union,
  intersect,
  remove,
  formArray,
  max,
  min,
  sum,
  average,
  where
}