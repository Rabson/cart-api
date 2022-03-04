import { ICommonResponse } from "../../types";
import { Cart } from "../../models";

export const getAll = async (): Promise<ICommonResponse> => {
  const cart = await Cart.find(
    {},
    { _id: 1, taxPrice: 1, totalPrice: 1, items: 1 }
  );
  return { data: { items: cart } };
};
