//@ts-check

class BaseError extends Error{
  constructor(param = {}){
    super(JSON.stringify(param.data || {}));
    this.type = param.type || ''
    this.data = param.data || {}
  }
}

export{
  BaseError
}