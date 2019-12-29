export const clone = () => {

}

export const size = (o) => {
    return Object.keys(o).length
}

export const pluck = () => {

}

export const getDefined = (pototype, defined) =>{
    if (typeof pototype !== 'string') {
      return defined;
    }
    var pototypeArray = pototype.split('.');
    var baseItem = ''
    try {
      if (/[a-z|A-Z|0-9|_]+/.test(pototypeArray[0])) {
        baseItem = eval(pototypeArray[0]);
      }else{
        return defined;
      }

      for (var i = 1; i < pototypeArray.length; i++) {
        if (pototypeArray[i] in baseItem) {
          baseItem = baseItem[pototypeArray[i]]
        } else {
          return defined;
        }
      }
      return baseItem
    } catch (error) {
      return defined
    }

  }
