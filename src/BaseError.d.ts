interface PromiseErrorParam {
  /**
   * 类型
   *
   * @type {string}
   * @memberof PromiseErrorParam
   */
  type: string,

  /**
   * 携带参数
   *
   * @type {object}
   * @memberof PromiseErrorParam
   */
  data?: object
}

interface BaseError extends Error {
  new(param?: PromiseErrorParam): this;
}

declare var BaseError: BaseError

export {
  BaseError
}
