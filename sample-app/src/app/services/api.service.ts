import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from '../models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAlbums(): Observable<Array<IAlbum>>{
    const url: string = 'https://jsonplaceholder.typicode.com/albums';
    return this.http.get(url, {})  as Observable<Array<IAlbum>>;
  }
}
