/**
 * 格式化时间日期
 *
 * @export
 * @param {*} [time=new Date()]
 * @param {string} [format='{y}-{m}-{d} {h}:{i}:{s}']
 * @returns
 */
declare function formatTime(time: Date | number | string, cFormat: string): string;

export {
    formatTime
}