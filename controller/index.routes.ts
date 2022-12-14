import { Request, Response, NextFunction } from "express";
import { authRouter } from "./auth.routes";
import { productRouter } from "../controller/product.routes";
// const productRoutes = require("./product.routes");
import { Router } from "express";
import userRouter from "./user.routes";
import { default as orderRouter } from "./order.routes";
import { default as paymentRouter } from "../controller/payment.routes";
import { default as currencyRouter } from "./currency.routes";
const router = Router();

router.get(
  "/readiness",
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.send({ message: "Server is Up!!!" });
    } catch (e) {
      next(e);
    }
  }
);

router.use("/product", productRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/payment", paymentRouter);
router.use("/currency", currencyRouter);
router.use("/order", orderRouter);
module.exports = router;
