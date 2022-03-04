import { successResponse, failureResponse, FailureError } from "../types";

class CommonResponse {
  static success(payload: successResponse) {
    const { data, res, statusCode = 200 } = payload;
    return res.status(statusCode).json(data);
  }

  static failure(payload: failureResponse) {
    const { res, error } = payload;
    const statusCode = (error as FailureError).statusCode || 500;
    const message = (error as FailureError).message;
    return res.status(statusCode).json({ message, statusCode });
  }
}

export default CommonResponse;
