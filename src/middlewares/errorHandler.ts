import { Request, Response, NextFunction } from "express";

export class ApiError extends Error {
  constructor(
    readonly statusCode: number,
    readonly message: string,
    readonly source?: Error
  ) {
    super();
  }
}

export class NotFoundError extends ApiError {
  constructor(readonly message: string = "Not Found", source?: Error | any) {
    super(404, message, source);
  }
}

export class ForbiddenError extends ApiError {
  constructor(readonly message: string = "Forbidden", source?: Error | any) {
    super(403, message, source);
  }
}

export class InternalServerError extends ApiError {
  constructor(
    readonly message: string = "Internal Server Error",
    source?: Error | any
  ) {
    super(500, message, source);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(
    readonly message: string = "Unauthorized Request",
    source?: Error | any
  ) {
    super(401, message, source);
  }
}

export class BadRequestError extends ApiError {
  constructor(readonly message: string = "Bad Request", source?: Error | any) {
    super(400, message, source);
  }
}

export default function (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.source) {
    console.error(error.source);
  }

  res.status(error.statusCode).json({
    status: "error",
    statusCode: error.statusCode,
    message: error.message,
  });
}
