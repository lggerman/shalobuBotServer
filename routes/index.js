import { Router } from "express";
import authRouter from "./auth.js";
import testRouter from "./test.js";

const router = Router();

router.get("", (req, res) => {
  res.send("xd");
});
router.use("/auth", authRouter);
router.use("/test", testRouter);

export default router;
