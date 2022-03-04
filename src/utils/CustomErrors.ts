/**
 * Class representing an API error.
 * @extends ApiError
 */
class ApiError extends Error {
  statusCode;
  constructor({ message = "Internal server error", statusCode = 500 } = {}) {
    super("Api Error");
    this.message = message;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export default {
  ApiError,
};
