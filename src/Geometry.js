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

export {
    averageLine,
    getPointFromLine,
    averagePolyline
}
