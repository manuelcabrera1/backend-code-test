import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";
import EventBus from "../../../shared/domain/EventBus";
import GeniallyCreatedEvent from "../../../shared/domain/GeniallyCreatedEvent";

type CreateGeniallyServiceRequest = {
  id: string;
  name: string;
  description: string;
};

export default class CreateGeniallyService {
  constructor(
    private repository: GeniallyRepository,
    private eventBus: EventBus
  ) {}

  public async execute(req: CreateGeniallyServiceRequest): Promise<Genially> {
    const { id, name, description } = req;

    const genially = new Genially(id, name, description);

    await this.repository.save(genially);

    await this.eventBus.publish(new GeniallyCreatedEvent(genially.id, genially.name, new Date()));


    return genially;
  }
}
