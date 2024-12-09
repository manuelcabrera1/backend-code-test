import Genially from "../domain/Genially";
import GeniallyRepository from "../domain/GeniallyRepository";

type RenameGeniallyServiceRequest = {
  id: string;
  name: string;
};

export default class RenameGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(req: RenameGeniallyServiceRequest): Promise<Genially> {
    const { id, name } = req;

    const genially = await this.repository.find(id);

    if (!genially || genially.deletedAt) {
      throw new Error("Genially not found");
    }

    genially.name = name;
    genially.modifiedAt = new Date();
    
    await this.repository.save(genially);

    return genially;
  }
}
