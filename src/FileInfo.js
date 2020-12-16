import { prefixZero } from "./String"

var files = {
  '74,70,73,70': {
    sign: 'JFIF',
    _width: function (uint8Array) {
      return uint8Array.slice(165, 167)
    },
    _height: function (uint8Array) {
      return uint8Array.slice(163, 165)
    },
    extname: 'jpg'
  },
  '80,78,71': {
    sign: 'PNG',
    _width: function (uint8Array) {
      return uint8Array.slice(18, 20)
    },
    _height: function (uint8Array) {
      return uint8Array.slice(22, 24)
    },
    extname: 'png'
  },
  '69,120,105,102': {
    sign: 'Exif',
    _width: function (uint8Array) {
      return _parseExif(uint8Array).width
    },
    _height: function (uint8Array) {
      return _parseExif(uint8Array).height
    },
    extname: 'jpg'
  },
  '71,73,70': {
    sign: 'GIF',
    _width: function (uint8Array) {
      return uint8Array.slice(6, 8).reverse()
    },
    _height: function (uint8Array) {
      return uint8Array.slice(8, 10).reverse()
    },
    extname: 'gif'
  },
  '87,69,66,80': {
    sign: 'WEBP',
    _width: function (uint8Array) {
      return uint8Array.slice(26, 28).reverse()
    },
    _height: function (uint8Array) {
      return uint8Array.slice(28, 30).reverse()
    },
    extname: 'webp'
  },
  '66,77,184': {
    sign: 'BM¸',
    _width: function (uint8Array) {
      return uint8Array.slice(18, 20).reverse()
    },
    _height: function (uint8Array) {
      return uint8Array.slice(22, 24).reverse()
    },
    extname: 'bmp'
  },
  '66,77,232': {
    sign: 'BMè',
    _width: function (uint8Array) {
      return uint8Array.slice(18, 20).reverse()
    },
    _height: function (uint8Array) {
      return uint8Array.slice(22, 24).reverse()
    },
    extname: 'bmp'
  },
  '66,77,48,72': {
    // os
    sign: 'BM0H',
    _width: function (uint8Array) {
      return uint8Array.slice(18, 20).reverse()
    },
    _height: function (uint8Array) {
      return uint8Array.slice(20, 22).reverse()
    },
    extname: 'bmp'
  },
  '66,77,76,72': {
    // window
    sign: 'BMLH',
    _width: function (uint8Array) {
      return uint8Array.slice(18, 20).reverse()
    },
    _height: function (uint8Array) {
      return uint8Array.slice(22, 24).reverse()
    },
    extname: 'bmp'
  },
  '80,54,10': {
    sign: 'P6\n',
    extname: 'pbm'
  },
  '73,73,42': {
    sign: 'II*',
    extname: 'tif'
  },
  '0,0,131,14,131,15': {
    sign: 'II*',
    extname: 'wbm'
  },
  '70,79,82,77': {
    sign: 'FORM',
    extname: 'iff'
  }
}


function imageInfo(arraybuffer) {
  var uint8Array = Array.from(new Uint8Array(arraybuffer))
  var uint8Array_string = uint8Array.slice(0, 30).join();
  for (var key in files) {
    if (uint8Array_string.includes(key)) {
      if ('_width' in files[key]) {
        files[key]['width'] = toHexJoin(files[key]._width(uint8Array))
      }
      if ('_height' in files[key]) {
        files[key]['height'] = toHexJoin(files[key]._height(uint8Array))
      }
      return {
        ...files[key],
      }
    }
  }
}

function toHexJoin(ary) {
  var hex_str = '';
  ary.map((data) => {
    hex_str += prefixZero(data.toString(16), 2)
  })
  return +('0x' + hex_str)
}

function _parseExif(uint8Array) {
  var header = uint8Array.slice(12, 20);
  var byte_align = '';
  // 判断大端还是小端
  if (header[0] == 73) {
    // 小端
    byte_align = 'I'
  } else if (header[0] == 77) {
    // 大端
    byte_align = 'M'
  }
  // // IFD偏移
  // var offset = header.slice(4);
  var width = 0;
  var height = 0;
  for (let i = uint8Array.length; i > 0; i--) {
    if (uint8Array[i] == 0
      && uint8Array[i + 1] == 0
      && uint8Array[i + 2] == 0
      && uint8Array[i + 3] == 0
      && uint8Array[i + 4] == 0
      && uint8Array[i + 5] == 0
      && uint8Array[i + 6] == 0
      && uint8Array[i + 7] == 0
      && uint8Array[i + 8] == 0
      && uint8Array[i + 9] == 0
      && uint8Array[i + 11] != 0
      && uint8Array[i + 12] == 0
      && uint8Array[i + 13] == 0
      && uint8Array[i + 15] != 0
      && i % 2 == 0
    ) {
      debugger
      width = uint8Array.slice((i + 8), (i + 12))
      height = uint8Array.slice((i + 12), (i + 16))
      break;
    }
  }
  if (width == 0 && height == 0) {
    for (let i = uint8Array.length; i > 0; i--) {
      if (uint8Array[i] == 0xff && uint8Array[i + 1] == 0xc0 && uint8Array[i + 2] == 0x0) {
        height = uint8Array.slice((i + 5), (i + 7))
        width = uint8Array.slice((i + 7), (i + 9))
        break;
      }
    }
  }

  return {
    width,
    height
  }
}


export {
  imageInfo
}