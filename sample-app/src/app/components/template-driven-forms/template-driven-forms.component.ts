import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('f') form: any;

  constructor() { }

  public langs:Array<string> = [
    'English',
    'Hebrew',
    'Franch'
  ]

  ngOnInit(): void {
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
