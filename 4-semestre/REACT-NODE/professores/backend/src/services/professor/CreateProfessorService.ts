import prismaClient from "../../prisma";

interface CreateProfessorProps {
  name: string;
  email: string;
  subject: string;
  phoneNumber: string;
};

export class CreateProfessorService {
  async execute({ name, email, subject, phoneNumber, }: CreateProfessorProps) {
    try {
      return await prismaClient.professor.create({
        data: {
          name: name,
          email: email,
          subject: subject,
          phoneNumber: phoneNumber,
        },
        select: {
          id: true,
          name: true,
          subject: true,
          phoneNumber: true,
          createdAt: true
        }
      });
    } catch (error) {
      console.log(error);

      throw new Error("Falha ao cadastrar professor!");
    }
  };
};
