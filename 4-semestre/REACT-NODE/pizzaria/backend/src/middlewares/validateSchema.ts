// IMporta os tipos necessário do Express
// NextFunction: usado para passar o contorle para o próximo middleware
// Request e Response : tipagem da requisição e resposta
import { NextFunction, Request, Response } from "express";

// Importa o ZodError (para tratart erros de validação) e ZodType (tipo genérico de schema zod)
import { ZodError, ZodType } from "zod";

// Cria um middleware reutilizavel para validação de dados recebe um schema como parâmetro
export const validateSchema =
    (schema: ZodType) =>

        // retorna uma função middleware do express
        async (req: Request, res: Response, next: NextFunction) => {
            // Tratamento de Exceção e Erros
            try {
                // tenta validar os dados da requisição usando o schema
                // Incluindo body, query e params
                await schema.parseAsync({
                    body: req.body,
                    query: req.query,
                    params: req.params,
                });

                // Se passar na validação, camha o próximo middleware/controller
                return next();
            }
            catch (error) {
                // Valida se o erro é validação do zod
                if (error instanceof ZodError) {

                    // retorna status 404 (erro do cliente) com detalhes da validação
                    return res.status(400).json({
                        error: "Erro validação",

                        // Mapeia os erros para retornar apenas as mensagems
                        details: error.issues.map((issue) => ({
                            message: issue.message,
                        })),
                    });
                }

                // Caso seja outro tipo de error, retorna erro interno (500)
                return res.status(500).json({
                    error: "Erro interno do servidor"
                });

            }
        };
