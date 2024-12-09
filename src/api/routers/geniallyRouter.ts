import { Router } from "express";
import GeniallyController from "../controllers/GeniallyController";
import CreateGeniallyService from "../../contexts/core/genially/application/CreateGeniallyService";
import DeleteGeniallyService from "../../contexts/core/genially/application/DeleteGeniallyService";
import RenameGeniallyService from "../../contexts/core/genially/application/RenameGeniallyService";
import { validateId, validateName, validateDescription } from "../middlewares/geniallyValidationMiddleware";
import { InMemoryEventBus } from "../../contexts/shared/infraestructure/InMemoryEventBus";
import IncrementGeniallyCounterService from "../../contexts/core/geniallyCounter/application/IncrementGeniallyCounterService";
import IncrementCounterOnGeniallyCreated from "../../contexts/core/geniallyCounter/application/IncrementCounterOnGeniallyCreated";
import GeniallyCreatedEvent from "../../contexts/shared/domain/GeniallyCreatedEvent";
import { geniallyRepository, counterRepository } from "../dependencies/dependencies";
//Router
const geniallyRouter = Router();

//Instantiate repository


const eventBus = new InMemoryEventBus();
const incrementCounterOnGeniallyCreated = new IncrementCounterOnGeniallyCreated(new IncrementGeniallyCounterService(counterRepository));

//Subscribe to events
eventBus.subscribe(GeniallyCreatedEvent.eventName, async (event: GeniallyCreatedEvent) => {
    await incrementCounterOnGeniallyCreated.handle(event);
});

//Instantiate services
const createGeniallyService = new CreateGeniallyService(geniallyRepository, eventBus);
const deleteGeniallyService = new DeleteGeniallyService(geniallyRepository);
const renameGeniallyService = new RenameGeniallyService(geniallyRepository);

//Instantiate controller
const geniallyController = new GeniallyController(createGeniallyService, deleteGeniallyService, renameGeniallyService);

geniallyRouter.put("/:id", validateId, validateName, validateDescription, (req, res) => geniallyController.create(req, res));
geniallyRouter.delete("/:id", validateId, (req, res) => geniallyController.delete(req, res));
geniallyRouter.patch("/:id", validateId, validateName, (req, res) => geniallyController.rename(req, res));
export default geniallyRouter;
