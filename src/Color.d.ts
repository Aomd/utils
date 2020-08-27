interface RGB {
  r: number,
  g: number,
  b: number
}

declare function hexToRgb(str: string): RGB;

declare function rgbToHex(rgb: RGB): string;

export{
  hexToRgb,
  rgbToHex
}
