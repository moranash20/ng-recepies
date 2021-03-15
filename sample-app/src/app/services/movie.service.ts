import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public random: number = Math.floor(Math.random() * 100);
  
  private _movies: Movie[] = [];
  
  constructor() { }

  public getMovies(): Movie[]{
    return this._movies;
  }

  public setMovies(movies: Movie[]): void{
    this._movies = [...this._movies, ...movies ];
  }


}
