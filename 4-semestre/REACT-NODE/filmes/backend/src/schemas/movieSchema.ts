import {z} from "zod";

export const createMovieSchema = z.object({
  body: z.object({
    name: z
    .string("O nome do filme precisa ser um texto!")
    .min(2, "O nome do filme precisa ter no mínimo 2 letras!")
  }),
});
