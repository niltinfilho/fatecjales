import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string("O nome precisa ser um texto!")
      .min(3, { message: "O nome precisa ter no mínimo 3 caracteres!" }),
    email: z.email({ message: "O e-mail precisa ser válido!" }),
    password: z
      .string({ message: "A senha é obrigatória!" })
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres!" })
  }),
});
