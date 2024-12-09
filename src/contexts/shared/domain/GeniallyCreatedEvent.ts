import DomainEvent from "./DomainEvent";

export default class GeniallyCreatedEvent extends DomainEvent {
    static readonly eventName = "genially.created";

    constructor(
        readonly id: string,
        readonly title: string,
        readonly occurredOn: Date,
    ) {
        super();
        this.eventName = GeniallyCreatedEvent.eventName;
    }

}