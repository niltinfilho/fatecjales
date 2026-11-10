import prismaClient from "../../prisma";

export class ListMovieService {
  async execute() {
    try {
      return await prismaClient.movie.findMany({
        select: {
          id: true,
          name: true,
          director: true,
          duration: true,
          genre: true,
          synopsis: true,
          createdAt: true
        },
        orderBy: {
          createdAt: "desc",
        }
      });
    } catch (error) {
      throw new Error("Falha ao buscar filmes!");
    }
  }
};
