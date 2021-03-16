import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MovieType } from 'src/app/models/movie-type.enum';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit, AfterViewInit{

  @ViewChild('f') form: any;

  constructor(private movieService: MovieService) { }

  public langs:Array<string> = [
    'English',
    'Hebrew',
    'Franch'
  ]

  ngOnInit(): void {
    console.log("random num: (Forms)" +this.movieService);
  }

  ngAfterViewInit(){
    console.log("Movies",this.movieService.getMovies());
  }

  public onButtonClick(): void{
    const movie: Movie = {
      name: "Spiderman Far From Home",
      mainChar: "Peter Parker",
      rating: 9.5,
      releaseDate: new Date(),
      type: MovieType.Action
    }
    this.movieService.movieSubject$.next(movie);
  }

  public onSubmitForm():void{
    
  }

}
