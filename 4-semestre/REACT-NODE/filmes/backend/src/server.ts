import cors from "cors";
import express, { Request, Response, Router } from "express";
import "dotenv/config";

const PORT = process.env.PORT;
const router = Router();

router.post("/users", (req: Request, res: Response) => {
  res.json({ message: "Está funcionando!" });
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
