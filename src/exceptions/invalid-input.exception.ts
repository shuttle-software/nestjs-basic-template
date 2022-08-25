import { BadRequestException } from "@nestjs/common";

export class InvalidInputException extends BadRequestException {

  errors: object

  constructor(name: object | string, msg?: string) {
    super();
    
    if(typeof name === 'object') {
      this.errors = name;
    } else {
      this.errors = { name, msg };
    }
  }
}