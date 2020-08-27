interface Point {
  x: number,
  y: number
}
declare function averageLine(point1: Array<number>, point2: Array<number>, num: number): Array<Point>;

declare function getPointFromLine(point1: Array<number>, point2: Array<number>, num: number): Point;

declare function averagePolyline(Array<Point>, val: number): Array<Point>;


export {
  averageLine,
  getPointFromLine,
  averagePolyline
}