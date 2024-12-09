import { Request, Response, NextFunction } from "express";

export const validateId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "Id is required" });
    }
    next();
}

export const validateName = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    if (name.length < 3 || name.length > 20) {
        return res.status(400).json({error: "Name must be between 3 and 20 characters"});
    }
    next();
}

export const validateDescription = (req: Request, res: Response, next: NextFunction) => {
    const { description } = req.body;
    if (description && description.length > 125) {
        return res.status(400).json({error: "Description must be less than 125 characters"});
    }
    next();
}
