/**
* 字符串小数 toFixed
* @param  {str} 待处理字符串
* @return {string} 
*/
export const toFixed = (str) => {
    var idnex = str.indexOf('.')
    return str.substr(0,str.indexOf('.'))
}
