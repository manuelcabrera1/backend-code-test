import { Router } from "express";
import * as healthController from "../controllers/health";

const healthRouter = Router();

healthRouter.get("/", healthController.check);

export default healthRouter;
