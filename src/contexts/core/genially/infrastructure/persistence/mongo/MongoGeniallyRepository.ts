import Genially from "../../../domain/Genially";
import GeniallyRepository from "../../../domain/GeniallyRepository";
import GeniallyModel from "./MongoGeniallySchema";

export default class MongoGeniallyRepository implements GeniallyRepository {
    
    async save(genially: Genially): Promise<void> {
        await this.delete(genially.id);
        const newGenially = new GeniallyModel(
            {
                _id: genially.id,
                name: genially.name,
                description: genially.description,
                createdAt: genially.createdAt,
                modifiedAt: genially.modifiedAt,
                deletedAt: genially.deletedAt
            }
        );
        await newGenially.save();
    }
    async find(id: string): Promise<Genially | undefined> {
        const genially = await GeniallyModel.findById(id);

        return genially ?
            new Genially(
                genially.id,
                genially.name, 
                genially.description, 
                genially.createdAt,
                genially.modifiedAt,
                genially.deletedAt
            )
        : undefined;
    }
    async delete(id:String): Promise<void> {
       await GeniallyModel.findByIdAndDelete(id);
    }
}
