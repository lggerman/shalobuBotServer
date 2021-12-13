import { Router } from "express";
import verifyAuth from "../middlewares/verifyAuth.js";

const router = Router();

router.post("/", [verifyAuth], (req, res) => {
  res.send("todo ok");
});

export default router;
