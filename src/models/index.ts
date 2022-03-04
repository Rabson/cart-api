import mongoose from "mongoose";
import { ICart } from "../types";

interface cartModelInterface extends mongoose.Model<CartDoc> {
  build(attr: ICart): CartDoc;
}

interface CartDoc extends mongoose.Document {
  title: string;
  description: string;
}

const cartSchema = new mongoose.Schema(
  {
    taxPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },
    items: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

cartSchema.statics.build = (attr: ICart) => {
  return new Cart(attr);
};

const Cart = mongoose.model<CartDoc, cartModelInterface>("Cart", cartSchema);

export { Cart };
