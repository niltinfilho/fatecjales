import { Request, Response } from "express";
import { CreateMovieService } from "../../services/movie/CreateMovieService";

export class CreateMovieController {
  async handle(req: Request, res: Response) {
    const { name, director, duration, genre, synopsis } = req.body;

    const createMovie = new CreateMovieService();
    const movie = await createMovie.execute({
      name: name,
      director: director,
      duration: duration,
      genre: genre,
      synopsis: synopsis
    });
    res.status(201).json(movie);
  };
};
