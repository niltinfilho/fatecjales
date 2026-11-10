import { Request, Response } from "express";
import { ListProfessorService } from "../../services/professor/ListProfessorService";

export class ListProfessorController {
  async handle(_: Request, res: Response) {
    const listProfessor = new ListProfessorService();
    const professors = await listProfessor.execute();
    res.status(200).json(professors);
  };
};
