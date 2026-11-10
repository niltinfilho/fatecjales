import { z } from "zod";

export const createProfessorSchema = z.object({
  body: z.object({
    name: z
      .string("O nome do professor precisa ser um texto!")
      .min(2, "O nome do professor precisa ter no mínimo 2 letras!"),
    email: z
      .email("O e-mail precisa ser válido!"),
    subject: z
      .string("O nome da disciplina precisa ser um texto!")
      .min(2, "O nome da disciplina precisa ter no mínimo 2 letras!"),
    phoneNumber: z
      .string("O número do celular precisa ser um texto!")
      .regex(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
        "O número do celular precisa ser válido!"
      ),
  }),
});
