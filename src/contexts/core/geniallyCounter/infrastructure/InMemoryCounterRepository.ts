import GeniallyCounterRepository from "../domain/GeniallyCounterRepository";
import GeniallyCounter from "../domain/GeniallyCounter";

export default class InMemoryCounterRepository implements GeniallyCounterRepository {
    private _counter: GeniallyCounter;

    constructor() {
        this._counter = new GeniallyCounter("1", 0);
    }

    async save(geniallyCounter: GeniallyCounter): Promise<void> {
        this._counter = geniallyCounter;
    }  

    async find(): Promise<GeniallyCounter | undefined> {
        return this._counter
            ? this._counter
            : undefined;
    }
}