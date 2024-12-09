import IncrementGeniallyCounterService from "./IncrementGeniallyCounterService";
import DomainEvent from "../../../shared/domain/DomainEvent";

export default class IncrementCounterOnGeniallyCreated {
    constructor(private incrementCounterService: IncrementGeniallyCounterService) {}

    async handle(event: DomainEvent): Promise<void> {
        await this.incrementCounterService.execute();
    }
} 