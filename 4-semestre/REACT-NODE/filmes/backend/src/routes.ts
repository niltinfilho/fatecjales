import { Router } from "express";
import { CreateMovieController } from "./controllers/movie/CreateMovieController";
import { ListMovieController } from "./controllers/movie/ListMovieController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAdmin } from "./middlewares/isAdmin";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { validateSchema } from "./middlewares/validateSchema";
import { createMovieSchema } from "./schemas/movieSchema";
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

router.post("/movie",
  isAuthenticated,
  isAdmin,
  validateSchema(createMovieSchema),
  new CreateMovieController().handle
);

router.get("/movie",
  isAuthenticated,
  new ListMovieController().handle
);
