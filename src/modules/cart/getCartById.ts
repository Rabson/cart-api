import { ICommonResponse } from "../../types";
import { Cart } from "../../models";
import mongoose from "mongoose";
import CustomErrors from "../../utils/CustomErrors";

type TGetCartById = { id: String };

export const getCartById = async ({
  id,
}: TGetCartById): Promise<ICommonResponse> => {
  if (!mongoose.isValidObjectId(id)) {
    throw new CustomErrors.ApiError({
      statusCode: 400,
      message: "InValid cart id",
    });
  }

  const cartDoc = await Cart.findById(
    { _id: id },
    { _id: 1, taxPrice: 1, totalPrice: 1, items: 1 }
  );

  if (!cartDoc) {
    throw new CustomErrors.ApiError({
      statusCode: 400,
      message: "Cart not found",
    });
  }
  return { data: cartDoc || {} };
};
