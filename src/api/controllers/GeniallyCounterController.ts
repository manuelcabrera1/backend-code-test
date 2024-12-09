import { Request, Response } from "express";
import GetGeniallyCounterService from "../../contexts/core/geniallyCounter/application/GetGeniallyCounterService";

export default class GeniallyCounterController {
    constructor(private getCounterService: GetGeniallyCounterService) {}

    async get(req: Request, res: Response) {
        try {
            const counter = await this.getCounterService.execute();
            res.json(counter);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}