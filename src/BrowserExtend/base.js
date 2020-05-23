var d = document;
var el = 'documentElement';
var w = window

export{
  d,
  el,
  w
}



import './requestAniFrame';

import { openFullScreen, closeFullScreen, isFullScreen } from './screen';

w.screen.openFullScreen = openFullScreen;

w.screen.closeFullScreen = closeFullScreen;

w.screen.isFullScreen = isFullScreen;

import { alert } from './alert';

w.alert =  alert