import { Component } from '@angular/core'
import { MovieType } from 'src/app/models/movie-type.enum';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector : "app-movies",
    templateUrl : "./movies.components.html",
    styleUrls : ["./movies.components.scss"]
})

export class MoviesComponent{
    title = "movies component works!";

    constructor(private movieService: MovieService) { }

    public movies: Movie[] = [];

    public listOfMovies: Movie[] = [
        {
            name:"Captain America",
            mainChar: "Steve Rogers",
            rating: 7.5,
            releaseDate: new Date(),
            type: MovieType.Action
        },
        {
            name:"Spiderman",
            mainChar: "Peter Parker",
            rating: 8.5,
            releaseDate: new Date(2018, 11, 20),
            type: MovieType.Drama
        },
        {
            name:"Guardians of the Galaxy",
            mainChar: "Peter",
            rating: 6.5,
            releaseDate: new Date(2014, 8, 20),
            type: MovieType.Action
        }
    ];

    public deleteMovie(movieIndex: number) : void{
        this.listOfMovies.splice(movieIndex, 1);
    }

    ngOnInit(){        
        this.movieService.setMovies(this.listOfMovies);
        this.movies = this.movieService.getMovies();

        this.movieService.movieSubject$.subscribe(data => {
            console.log(data);
            this.movies.push(data);
        })
    }

    /*ngOnChanges(changes: SimpleChanges): void{
        console.log(changes);
    }*/

    ngAfterViewInit(){
        console.log('after ViewInit');
    }

    ngOnDestroy(): void{
        console.log('Destroy');
    }
}