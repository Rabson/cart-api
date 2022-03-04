import mongoose from "mongoose";
import { Response } from "express";

export interface ICommonResponse {
  message?: string;
  data: Object;
}

interface IItems {
  name: string;
  qty: number;
  price: number;
}

export interface ICart {
  _id?: mongoose.Types.ObjectId;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  items: IItems[];
}

export interface successResponse {
  data: Object;
  res: Response;
  message?: string;
  statusCode?: number;
}

export interface FailureError {
  message: string;
  statusCode: number;
}

export interface failureResponse {
  res: Response;
  error: unknown;
}
