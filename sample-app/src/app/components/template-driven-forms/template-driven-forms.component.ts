import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('f') form: any;

  constructor(private movieService: MovieService) { }

  public langs:Array<string> = [
    'English',
    'Hebrew',
    'Franch'
  ]

  ngOnInit(): void {
    console.log("random num: (Forms)" +this.movieService.random);
  }

  public onSubmitForm():void{
    if(this.form.valid){
      console.log("our form" +this.form);
    }
    else{
       console.log("form not valid");
    }
  }

}
