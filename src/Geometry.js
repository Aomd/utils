/**
 *  线段等分
 * @param point1 起始点 
 * @param point2 终止点
 * @param num 等分数
 */
function averageLine(point1, point2, num) {
  var x1 = point1[0];
  var y1 = point1[1];
  var x2 = point2[0];
  var y2 = point2[1];

  var o = [point1];
  for (var i = 1; i < num; i++) {
    var x = (i * x2 + (num - i) * x1) / num;
    var y = (i * y2 + (num - i) * y1) / num;
    o.push([x, y]);
  }
  return o;
}

/**
 * 取线段多少米的点
 *
 * @param {*} point1 起始点 
 * @param {*} point2 终止点
 * @param {*} m 值 单位m
 * @returns
 */
function getPointFromLine(point1, point2, m) {
  // 距离为零就直接返回 point1
  if (+m === 0) {
    return point1;
  }
  var x1 = point1[0];
  var y1 = point1[1];
  var x2 = point2[0];
  var y2 = point2[1];
  // AMap.GeometryUtil  https://lbs.amap.com/api/javascript-api/reference/math 
  // AMap.GeometryUtil.distance 两点求距离 m
  // @ts-ignore
  var temp_m = AMap.GeometryUtil.distance(point1, point2)
  var num = temp_m / m
  var x = (x2 + (num - 1) * x1) / num;
  var y = (y2 + (num - 1) * y1) / num;

  return [x, y]
}

/**
 *
 *
 * @param {*} points 点集合
 * @param {*} val 值 单位m
 * @returns
 */
function averagePolyline(points, val) {
  // 所有点
  var pointAll = [points[0]];
  // 当前剩余量
  var surplus = 0;
  // 按线段长
  for (var i = 0; i < points.length - 1; i++) {
    // 总长
    // AMap.GeometryUtil  https://lbs.amap.com/api/javascript-api/reference/math 
    // AMap.GeometryUtil.distance 两点求距离 m
    // @ts-ignore
    var total_distance = AMap.GeometryUtil.distance(points[i], points[i + 1])

    // 如果第一段余量+第二段总长还不够 val 就跳过直接加上余量
    if (total_distance + surplus < val) {
      surplus += total_distance
      continue;
    }

    // 总段数
    var temp_total_section = total_distance / val;

    // 向下取整
    var total_section = Math.floor(temp_total_section)

    // 头点计算
    var new_point_start = getPointFromLine(points[i], points[i + 1], val - surplus);
    // 末点计算
    var new_point_ends = getPointFromLine(new_point_start, points[i + 1], total_section * val)

    var temp_val = averageLine(new_point_start, new_point_ends, total_section)

    // 处理 误差数据 -------------------------------------------------------- 进度看实际
    // @ts-ignore
    if (temp_total_section.toFixed(2).split('.')[1] >= 98) {
      temp_val = temp_val.concat([new_point_ends])
    }

    // 合并结果
    pointAll = pointAll.concat(temp_val);

    if (surplus === val) {
      // 计算剩余量
      surplus = total_distance % val;
    } else {
      // 计算剩余量
      surplus = (total_distance + surplus) % val;
    }
  }
  return pointAll;
}

/**
 * 坐标系：WGS84 经纬度 转 瓦片编号 
 *
 * @export
 * @param {*} lng 经度
 * @param {*} lat 纬度
 * @param {*} z 墨卡托投影 级别
 * @returns 瓦片编号
 */
export function lngLat2XY(lng, lat, z) {
  return {
    x: lng2X(lng, z),
    y: lat2Y(lat, z)
  };
}

/**
 * 坐标系：WGS84 经度 转 瓦片编号 
 *
 * @export
 * @param {*} lng 经度
 * @param {*} z 墨卡托投影 级别
 * @returns x 横向瓦片编号
 */
export function lng2X(lng, z) {
  return Math.floor(2 ** (z - 1) * (lng / 180 + 1));
}

/**
 * 坐标系：WGS84 纬度 转 瓦片编号 
 *
 * @export
 * @param {*} lat 纬度
 * @param {*} z 墨卡托投影 级别
 * @returns y 纵向瓦片编号
 */
export function lat2Y(lat, z) {
  return Math.floor(2 ** (z - 1) * (1 - Math.log(Math.tan((Math.PI * lat) / 180) + 1 / Math.cos((Math.PI * lat) / 180)) / Math.PI))
}

/**
 * 坐标系：WGS84 瓦片编号  转 经度
 *
 *
 * @export
 * @param {*} x 横向瓦片编号
 * @param {*} z 墨卡托投影 级别
 * @param {number} [w=0] 像素偏移
 * @returns lng
 */
export function x2Lng(x, z, w = 0) {
  return (2 ** (1 - z) * (x + w / 256) - 1) * 180;
}

/**
 * 坐标系：WGS84 瓦片编号  转 纬度
 *
 * @export
 * @param {*} y 纵向瓦片编号
 * @param {*} z 墨卡托投影 级别
 * @param {number} [h=0] 像素偏移
 * @returns lat
 */
export function y2Lat(y, z, h = 0) {
  return (360 * Math.atan(Math.E ** ((1 - 2 ** (1 - z) * (y + h / 256)) * Math.PI))) / Math.PI - 90;
}

/**
 * 坐标系：WGS84 瓦片编号  转 经纬度
 *
 * @export
 * @param {*} x 横向瓦片编号
 * @param {*} y 纵向瓦片编号
 * @param {*} z 墨卡托投影 级别
 * @returns 经纬度
 */
export function XY2LngLat(x, y, z) {
  return {
    lng: x2Lng(x, z),
    lat: y2Lat(y, z)
  };
}


/**
 * 判断点是否在 Poly
 * 
 * @param {Array} checkPoint 一维数组    []
 * @param {Array} polygonPoints 二维数组    [[]]
 * @returns {boolean}
 */
function isInPolygon(checkPoint, polygonPoints) {
  var counter = 0;
  var i;
  var xinters;
  var p1, p2;
  var pointCount = polygonPoints.length;
  p1 = polygonPoints[0];

  for (i = 1; i <= pointCount; i++) {
    p2 = polygonPoints[i % pointCount];
    if (
      checkPoint[0] > Math.min(p1[0], p2[0]) &&
      checkPoint[0] <= Math.max(p1[0], p2[0])
    ) {
      if (checkPoint[1] <= Math.max(p1[1], p2[1])) {
        if (p1[0] != p2[0]) {
          xinters =
            (checkPoint[0] - p1[0]) *
            (p2[1] - p1[1]) /
            (p2[0] - p1[0]) +
            p1[1];
          if (p1[1] == p2[1] || checkPoint[1] <= xinters) {
            counter++;
          }
        }
      }
    }
    p1 = p2;
  }
  if (counter % 2 == 0) {
    return false;
  } else {
    return true;
  }
}


export {
  averageLine,
  getPointFromLine,
  averagePolyline
}
