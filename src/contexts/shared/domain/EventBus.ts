import DomainEvent from "./DomainEvent";

export default interface EventBus {
    publish(event: DomainEvent): Promise<void>;
    subscribe(eventName: string, handler: (event: DomainEvent) => Promise<void>): void;
}