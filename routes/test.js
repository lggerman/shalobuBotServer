import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  console.log(req.body);
  console.log("ruta test");
});

export default router;
