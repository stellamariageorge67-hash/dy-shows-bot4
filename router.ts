import { Router, type IRouter } from "express";
import healthRouter from "./health.ts";
import contentRouter from "./content.ts";
import webhookRouter from "./webhook.ts";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/content", contentRouter);
router.use(webhookRouter);

export default router;
