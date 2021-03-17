import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from '../app/components/movies/movies.components';
import { MovieComponent } from './components/movie/movie.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    TemplateDrivenFormsComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
