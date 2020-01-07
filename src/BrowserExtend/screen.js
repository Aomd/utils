import {d,el,w} from './base'

w.screen.openFullScreen = function(){
  d[el].requestFullscreen 
  ? d[el].requestFullscreen() 
  : d[el].msRequestFullscreen 
  ? d[el].msRequestFullscreen() 
  : d[el].mozRequestFullScreen 
  ? d[el].mozRequestFullScreen() 
  : d[el].webkitRequestFullscreen && d[el].webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
  log('进入全屏')
}

w.screen.closeFullScreen = function(){
 if(this.isFullScreen()){
  return d.exitFullscreen 
  ? d.exitFullscreen() 
  : d.msExitFullscreen 
  ? d.msExitFullscreen()
  : d.mozCancelFullScreen 
  ? d.mozCancelFullScreen() 
  :d.webkitExitFullscreen && d.webkitExitFullscreen() 
 }
}

w.screen.isFullScreen = function(){
  // 判断是否全屏
  if(d.fullscreenElement||d.webkitFullscreenElement||d.mozFullScreenElement||d.msFullscreenElement){
      // 全屏
      return true;
  }else{
      // 不是全屏
      return false;
  }    
}