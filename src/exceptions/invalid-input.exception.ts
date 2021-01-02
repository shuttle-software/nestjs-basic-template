import { BadRequestException } from "@nestjs/common";

export class InvalidInputException extends BadRequestException {

  errors: object

  constructor(errors: object) {
    super();
    this.errors = errors;
  }
}