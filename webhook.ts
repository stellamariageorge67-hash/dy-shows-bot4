import { Router } from "express";
import { bot } from "./bot.ts";

const router = Router();

router.post("/webhook", async (req, res) => {
  try {
    await bot.handleUpdate(req.body, res);
  } catch (err) {
    res.status(200).end();
  }
});

export default router;
