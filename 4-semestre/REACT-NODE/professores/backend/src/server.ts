import cors from "cors";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});

app.use((error: Error, _: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    });
  }

  return res.status(500).json({
    error: "Erro interno do servidor!",
  });
});
