import { Component, Input, OnInit } from '@angular/core';
import { MovieType } from 'src/app/models/movie-type.enum';
import { Movie } from 'src/app/models/movie.interface';



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

}
