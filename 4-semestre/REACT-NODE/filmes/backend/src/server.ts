import cors from "cors";
import "dotenv/config";
import express from "express";
import { router } from "./routes";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
