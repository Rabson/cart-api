import mongoose from "mongoose";
import { Cart } from "../models";
import { ICart } from "../types";

const cartItems: ICart[] = [
  {
    _id: new mongoose.Types.ObjectId("621faf4d328ace1ae41bfcf9"),
    totalPrice: 40,
    taxPrice: 10,
    shippingPrice: 10,
    items: [{ name: "T-shirt", price: 10, qty: 2 }],
  },
  {
    _id: new mongoose.Types.ObjectId("621faf4d328ace1ae41bfcf9"),
    totalPrice: 110,
    taxPrice: 10,
    shippingPrice: 20,
    items: [{ name: "Shirt", price: 40, qty: 2 }],
  },
];

export default async () => {
  const commonPromise = [];
  for (let index = 0; index < cartItems.length; index += 1) {
    const cartData = cartItems[index];
    const count = await Cart.countDocuments({ _id: cartData._id });
    if (count === 0) commonPromise.push(Cart.create(cartData));
  }
  if (commonPromise.length) await Promise.all(commonPromise);
};
