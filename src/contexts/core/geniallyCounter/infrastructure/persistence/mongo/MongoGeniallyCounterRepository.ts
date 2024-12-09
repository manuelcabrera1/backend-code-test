import GeniallyCounter from "../../../domain/GeniallyCounter";
import GeniallyCounterSchema from "./GeniallyCounterSchema";
import GeniallyCounterRepository from "../../../domain/GeniallyCounterRepository";

export default class MongoGeniallyCounterRepository implements GeniallyCounterRepository {
    public async save(geniallyCounter: GeniallyCounter): Promise<void>{

        await GeniallyCounterSchema.findOneAndUpdate({_id: geniallyCounter.id}, {counter: geniallyCounter.counter}, {upsert: true});
    }

    public async find(): Promise<GeniallyCounter | undefined> {
        const geniallyCounter = await GeniallyCounterSchema.findOne();
        return geniallyCounter ? 
            new GeniallyCounter(geniallyCounter._id, geniallyCounter.counter)
            : undefined;
    }

}
