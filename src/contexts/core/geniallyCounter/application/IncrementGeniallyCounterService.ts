import GeniallyCounter from "../domain/GeniallyCounter";
import GeniallyCounterRepository from "../domain/GeniallyCounterRepository";
import { v4 as uuidv4 } from "uuid";

export default class IncrementGeniallyCounterService {
    constructor(private repository: GeniallyCounterRepository) {}

    public async execute(): Promise<void> {
        let geniallyCounter = await this.repository.find();

        if (!geniallyCounter) {
            geniallyCounter = new GeniallyCounter(uuidv4(), 0);
        } 
        geniallyCounter.increment();
        await this.repository.save(geniallyCounter);
        
    }
}