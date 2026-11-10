import prismaClient from "../../prisma";

export class ListProfessorService {
  async execute() {
    try {
      return await prismaClient.professor.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          subject: true,
          phoneNumber: true,
          createdAt: true
        },
        orderBy: {
          createdAt: "desc",
        }
      });
    } catch (error) {
      throw new Error("Falha ao buscar professores!");
    }
  }
};
