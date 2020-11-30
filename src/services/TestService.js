import {BadRequestError, FieldError} from "../utils/ErrorUtils";

export function testService() {
  // throw new BadRequestError('test', 'test 1233', [new FieldError('test', 'test.code', 'test message')])
  throw new Error('test')
}
