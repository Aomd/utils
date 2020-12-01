import { BaseError } from "./BaseError";

class PromiseError extends BaseError {
  constructor(param) {
    super(param);
    this.name = 'PromiseError'
  }
}

export{
  PromiseError
}