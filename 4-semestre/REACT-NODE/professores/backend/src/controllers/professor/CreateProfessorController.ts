import { Request, Response } from "express";
import { CreateProfessorService } from "../../services/professor/CreateProfessorService";

export class CreateProfessorController {
  async handle(req: Request, res: Response) {
    const { name, email, subject, phoneNumber } = req.body;

    const createProfessor = new CreateProfessorService();
    const professor = await createProfessor.execute({
      name: name,
      email: email,
      subject: subject,
      phoneNumber: phoneNumber
    });
    res.status(201).json(professor);
  };
};
