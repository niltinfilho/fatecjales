import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string("O nome precisa ser um texto!")
      .min(3, "O nome precisa ter no mínimo 3 letras!"),
    email: z
      .email("Precisa ser um e-mail válido!"),
    password: z
      .string("A senha é obrigatória!")
      .min(6, "A senha deve ter no mínimo 6 caracteres!")
  }),
});

export const authUserSchema = z.object({
  body: z.object({
    email: z
      .email("Precisa ser um e-mail válido!"),
    password: z
      .string("A senha é obrigatória!")
      .min(1, "A senha é obrigatória!")
  }),
});
