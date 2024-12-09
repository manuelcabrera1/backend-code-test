import GeniallyCounter from "../domain/GeniallyCounter";
import GeniallyCounterNotExists from "../domain/GeniallyCounterNotExists";
import GeniallyCounterRepository from "../domain/GeniallyCounterRepository";

export default class GetGeniallyCounterService{
    constructor(private repository: GeniallyCounterRepository) {}

    public async execute(): Promise<number> {
        const geniallyCounter = await this.repository.find();
        
        if (!geniallyCounter) {
            throw new GeniallyCounterNotExists();
        }

        return geniallyCounter.counter;
    }
}