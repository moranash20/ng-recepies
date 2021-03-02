import { Component, OnInit } from '@angular/core';

export interface Movie{
  name: string;
  mainChar: string;
  rating: number;
  releaseDate: Date;
}

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

  public movie: Movie = {
    name: "Ironman",
    mainChar: "Tony Stark",
    rating:7.1,
    releaseDate: new Date()
  };

  public changeMovie(event: Event): void{
    this.movie = {
      name: "Captain Marvel",
      mainChar: "Carol Denvers",
      rating: 8.5,
      releaseDate: new Date()
      }
    }
  

}
