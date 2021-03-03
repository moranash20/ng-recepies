import { Component, Input, OnInit, Output } from '@angular/core';
import { MovieType } from 'src/app/models/movie-type.enum';
import { Movie } from 'src/app/models/movie.interface';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Movie works!');
  }

  get movieTypeEnum(){
    return MovieType;
  }

  @Input() movie!: Movie;

  @Input() borderWidth!: number;

  @Input() movieIndex! : number;

  @Output() onDeleteMovie: EventEmitter<number> = new EventEmitter();

  public deleteMovie(){
    /*console.log(this.movieIndex);*/
    this.onDeleteMovie.emit(this.movieIndex);
  }

}
