import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    console.log("OnInit");

    this.observable.subscribe((data)=>{
      console.log(data)
    }, err => console.log(err),
      ()=>{
        console.log("Complete Observable")
      }
    )
    console.log("After Subscription");
  }

  title = 'sample-app';
  shouldDisplayMovie: boolean = true;

  public observable: Observable<any> = new Observable((observer) =>{
    observer.next("Start")

    setTimeout(()=>{
      observer.next("Working...")
    }, 3000)

    setTimeout(()=>{
      observer.complete()
    }, 6000)
  })

  toggleMovieComponent(){
    this.shouldDisplayMovie = !this.shouldDisplayMovie;
  }
}
