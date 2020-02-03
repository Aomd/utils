import {
    d,
    el,
    w
}
from './base';

// 重写alert
w.alert = function(...arg){
    console.log('alert:'+ arg)
}