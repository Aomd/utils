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
    var x2 = point2[1];

    var o = [point1];
    for (var i = 1; i < num; i++) {
        var x = (i * x2 + (num - i) * x1) / num;
        var y = (i * y2 + (num - i) * y1) / num;
        o.push([x, y]);
    }
    return o;
}

export{
    averageLine
}