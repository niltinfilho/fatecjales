// Importar os tipos Request e Response (para tipagem das requisições e respostas)
// e o Router (para criar rotas separadas no Express)
import { Request, Response, Router } from "express";

// Cria uma instância de roteador do Express
const router = Router();

// Define uma rota POST para o endpoint "/users"
router.post("/users", (req: Request, res: Response) => {
  
  // Envia uma resposta em formato JSON quando a rota for acessada
  res.json({ message: "FUNCIONANDO!" });
});

// Exporta o router para ser utilizado em outros arquivos (ex: no app principal)
export { router };
