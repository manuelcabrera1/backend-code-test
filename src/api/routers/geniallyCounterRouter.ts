import {Router} from "express";

import GeniallyCounterController from "../controllers/GeniallyCounterController";
import GetGeniallyCounterService from "../../contexts/core/geniallyCounter/application/GetGeniallyCounterService";
import { counterRepository } from "../dependencies/dependencies";

const geniallyCounterRouter = Router();


const geniallyCounterController = new GeniallyCounterController(new GetGeniallyCounterService(counterRepository));


geniallyCounterRouter.get("/", (req, res) => geniallyCounterController.get(req, res));

export default geniallyCounterRouter;
