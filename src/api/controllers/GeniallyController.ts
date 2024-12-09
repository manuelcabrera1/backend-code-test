import { Request, Response } from "express";
import CreateGeniallyService from "../../contexts/core/genially/application/CreateGeniallyService";
import DeleteGeniallyService from "../../contexts/core/genially/application/DeleteGeniallyService";
import RenameGeniallyService from "../../contexts/core/genially/application/RenameGeniallyService";

export default class GeniallyController {
  
  constructor(
    private createGeniallyService: CreateGeniallyService, 
    private deleteGeniallyService: DeleteGeniallyService,
    private renameGeniallyService: RenameGeniallyService
  ) {}

  
  public async create(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const genially = await this.createGeniallyService.execute({
        id,
        name,
        description,
      });
      res.status(201).json(genially);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await this.deleteGeniallyService.execute({
        id
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  public async rename(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const genially = await this.renameGeniallyService.execute({
        id,
        name,
      });
      res.status(200).json(genially);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
