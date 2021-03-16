import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public random: number = Math.floor(Math.random() * 100);

  public movieSubject$: Subject<Movie> = new Subject();

  private movieBehaviorSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  
  private _movies: Movie[] = [];
  
  constructor() { }

  public setMovie(movie: Movie): void {
    this.movieSubject$.next(movie);

  }

  public getMovie() : Observable<Movie>{
    return this.movieBehaviorSubject$.asObservable();
  }

  public getMovies(): Movie[]{
    return this._movies;
  }

  public setMovies(movies: Movie[]): void{
    this._movies = [...this._movies, ...movies ];
  }


}
