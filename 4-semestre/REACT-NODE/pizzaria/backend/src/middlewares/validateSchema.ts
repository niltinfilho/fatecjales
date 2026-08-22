// Importa os tipos necessários do Express
// NextFunction: usado para passar o controle para o próximo middleware
// Request e Response: tipagem da requisição e resposta
import { NextFunction, Request, Response } from "express";

// Importa o ZodError (para tratar erros de validação)
// e o ZodType (tipo genérico de schema zod)
import { ZodError, ZodType } from "zod";

// Cria um middleware reutilizável para validação de dados
// Recebe um schema como parâmetro
export const validateSchema = (schema: ZodType) =>

  // Retorna uma função mddleware do Express
  async (req: Request, res: Response, next: NextFunction) => {

    // Tratamento de Exceção e Erros
    try {

      // Tenta validar os dados da requisição usando o schema
      // Inclui body, query e params
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      });

      // Se passar na validação, chama o próximo middleware/controller
      return next();
    } catch (error) {

      // Verifica se o erro é validação do Zod
      if (error instanceof ZodError) {

        // Retorma o status 400 (erro do cliente) com detalhes da validação
        return res.status(400).json({
          error: "Erro de validação",

          // Mapeia os erros para retornar apenas as mensagens
          details: error.issues.map((issue) => ({
            message: issue.message,
          })),
        });
      }

      // Caso seja outro tipo de erro, retorna erro interno (500)
      return res.status(500).json({
        error: "Erro interno do servidor"
      });
    }
  }
