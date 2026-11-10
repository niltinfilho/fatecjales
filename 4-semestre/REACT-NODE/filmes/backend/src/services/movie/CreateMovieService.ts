import prismaClient from "../../prisma";

interface CreateMovieProps {
  name: string;
  director: string;
  duration: number;
  genre: string;
  synopsis: string;
};

export class CreateMovieService {
  async execute({ name, director, duration, genre, synopsis }: CreateMovieProps) {
    try {
      return await prismaClient.movie.create({
        data: {
          name: name,
          director: director,
          duration: duration,
          genre: genre,
          synopsis: synopsis
        },
        select: {
          id: true,
          name: true,
          director: true,
          duration: true,
          genre: true,
          synopsis: true,
          createdAt: true
        }
      });
    } catch (error) {
      throw new Error("Falha ao cadastrar filme!");
    }
  };
};
