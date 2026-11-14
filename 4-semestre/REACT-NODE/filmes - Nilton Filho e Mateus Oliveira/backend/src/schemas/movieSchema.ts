import { z } from "zod";

export const createMovieSchema = z.object({
  body: z.object({
    name: z
      .string("O nome do filme precisa ser um texto!")
      .min(2, "O nome do filme precisa ter no mínimo 2 letras!"),
    director: z
      .string("O nome do diretor precisa ser um texto!")
      .min(2, "O nome do diretor precisa ter no mínimo 2 letras!"),
    duration: z
      .number("A duração precisa ser um número!")
      .int("A duração precisa ser um número inteiro (em minutos)!")
      .positive("A duração precisa ser maior que zero!"),
    genre: z
      .string("O gênero precisa ser um texto!")
      .min(3, "O gênero precisa ter no mínimo 3 letras!"),
    synopsis: z
      .string("A sinopse precisa ser um texto!")
      .min(10, "A sinopse precisa ter no mínimo 10 letras!")
      .max(1000, "A sinopse pode ter no máximo 1000 caracteres!"),
  }),
});
