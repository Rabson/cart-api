import express, { Request, Response } from "express";
import CommonResponse from "../../helpers/common-response";
import modules from "../../modules";
import CustomErrors from "../../utils/CustomErrors";

const { cartService } = modules;
const { ApiError } = CustomErrors;

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: Function) => {
  try {
    return CommonResponse.success({ res, ...(await cartService.getAll()) });
  } catch (error: unknown) {
    return CommonResponse.failure({
      res,
      error,
    });
  }
});

router.get("/:id", async (req: Request, res: Response, next: Function) => {
  const { id } = req.params;
  try {
    return CommonResponse.success({
      res,
      ...(await cartService.getCartById({ id })),
    });
  } catch (error: unknown) {
    return CommonResponse.failure({ res, error });
  }
});

export default router;
