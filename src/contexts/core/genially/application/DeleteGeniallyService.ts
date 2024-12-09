import GeniallyRepository from "../domain/GeniallyRepository";

type DeleteGeniallyServiceRequest = {
  id: string;
};

export default class DeleteGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(req: DeleteGeniallyServiceRequest): Promise<void> {
    const { id } = req;
    
    const genially = await this.repository.find(id);

    if (!genially) {
      throw new Error("Genially not found");
    }

    if (genially.deletedAt) {
      throw new Error("Genially already deleted");
    }

    genially.deletedAt = new Date();

    await this.repository.save(genially);
  }
}
