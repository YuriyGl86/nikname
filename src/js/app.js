// TODO: write your code here

export default class Validator {
  static validateUsername(userName) {
    return Validator.validateStart(userName)
        && Validator.validateEnd(userName)
        && Validator.validateSimbols(userName)
        && Validator.validateFigures(userName);
  }

  static validateStart(userName) {
    const regexp = /^[A-Za-z]+/;
    return regexp.test(userName);
  }

  static validateEnd(userName) {
    const regexp = /[A-Za-z]$/;
    return regexp.test(userName);
  }

  static validateSimbols(userName) {
    const regexp = /[^\d\w-]+/;
    return !regexp.test(userName);
  }

  static validateFigures(userName) {
    const regexp = /\d{4,}/;
    return !regexp.test(userName);
  }
}
