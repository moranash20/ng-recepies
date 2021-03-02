import { Component } from '@angular/core'
import { MovieType } from 'src/app/models/movie-type.enum';
import { Movie } from 'src/app/models/movie.interface';

@Component({
    selector : "app-movies",
    templateUrl : "./movies.components.html",
    styleUrls : ["./movies.components.scss"]
})

export class MoviesComponent{
    title = "movies component works!"

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


    ngOnInit(){
        console.log('Movie on Init');
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