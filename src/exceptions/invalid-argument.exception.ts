import { InvalidInputException } from './invalid-input.exception';

export class InvalidArgException extends InvalidInputException {
  constructor(name, msg) {
    super({ name, msg });
  }
}
