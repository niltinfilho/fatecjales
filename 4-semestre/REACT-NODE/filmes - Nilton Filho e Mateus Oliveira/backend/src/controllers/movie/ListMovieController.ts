import { Request, Response } from "express";
import { ListMovieService } from "../../services/movie/ListMovieService";

export class ListMovieController {
  async handle(_: Request, res: Response) {
    const listMovie = new ListMovieService();
    const movies = await listMovie.execute();
    res.status(200).json(movies);
  };
};
