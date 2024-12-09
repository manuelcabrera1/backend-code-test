import EventBus from '../domain/EventBus';
import DomainEvent from '../domain/DomainEvent';

export class InMemoryEventBus implements EventBus {
    private handlers: { [key: string]: Array<(event: DomainEvent) => Promise<void>> } = {};

    async publish(event: DomainEvent): Promise<void> {
        const handlers = this.handlers[event.eventName] || [];
        const promises = handlers.map(handler => handler(event));
        await Promise.all(promises);
    }

    subscribe(eventName: string, handler: (event: DomainEvent) => Promise<void>): void {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    }
}
