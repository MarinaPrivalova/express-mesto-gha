const { STATUS_CODES } = require('../constants');

module.exports = class InternalServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CODES.SERVER_ERROR;
  }
};
