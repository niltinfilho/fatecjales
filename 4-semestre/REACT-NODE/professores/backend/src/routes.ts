import { Router } from "express";
import { CreateProfessorController } from "./controllers/professor/CreateProfessorController";
import { ListProfessorController } from "./controllers/professor/ListProfessorController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAdmin } from "./middlewares/isAdmin";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { validateSchema } from "./middlewares/validateSchema";
import { createProfessorSchema } from "./schemas/professorSchema";
import { authUserSchema, createUserSchema } from "./schemas/userSchema";

export const router = Router();

router.post("/users",
  validateSchema(createUserSchema),
  new CreateUserController().handle
);

router.post("/session",
  validateSchema(authUserSchema),
  new AuthUserController().handle
);

router.get("/me",
  isAuthenticated,
  new DetailUserController().handle
);

router.post("/professor",
  isAuthenticated,
  isAdmin,
  validateSchema(createProfessorSchema),
  new CreateProfessorController().handle
);

router.get("/professor",
  isAuthenticated,
  new ListProfessorController().handle
);
