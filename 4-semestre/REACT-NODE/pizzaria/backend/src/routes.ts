// Importar os tipos Request e Response (para tipagem das requisições e respostas)
// e o Router (para criar rotas separadas no Express)
import { Router } from "express";

// Importa o controller responsável por lidar com a criação de usuários
import { CreateUserController } from "./controllers/user/CreateUserController";

// Importa o controller responsável por lidar com o login de usuários
import { AuthUserController } from "./controllers/user/AuthUserController";

// Importa o Middleware de validação com zod
import { validateSchema } from "./middlewares/validateSchema";

// Importa o schema que define as regras de validação para criação de um usuário
import { authUserSchema, createUserSchema } from "./schemas/userSchema";

// Cria uma instância de roteador do Express
const router = Router();

// Define uma rota POST para o endpoint "/users"
router.post("/users",
  // Middleware que valida os dados da requisição (brotliDecompressSync, query e params)
  // antes de chegar no controller
  validateSchema(createUserSchema),

  // Controller responsável por processar  a requisição e executar a lógica de criação do usuário
  new CreateUserController().handle
);

// Define uma rota do tipo POST no caminho "/session"
// Essa rota será usada para autenticação (login do usuário)
router.post("/session", // Endpoint da rota
  // Middleware que valida os dados enviados no body da requisição
  // Ele usa um schema (authUserSchema) para garantir que e-mail e senha estão corretos
  validateSchema(authUserSchema),
  // Controller responsável por processar a requisição
  // Aqui ele executa o método handle, que faz a autenticação do usuário
  new AuthUserController().handle
);

// Exporta o router para ser utilizado em outros arquivos (ex: no app principal)
export { router };
