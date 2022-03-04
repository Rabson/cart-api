import { Router } from "express";

import cartsRouter from "./carts.route";

const router = Router();

router.use("/cart", cartsRouter);

export default router;
