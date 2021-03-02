import { MovieType } from "./movie-type.enum";

export interface Movie{
    name: string;
    mainChar: string;
    rating: number;
    releaseDate: Date;
    type: MovieType;
  }