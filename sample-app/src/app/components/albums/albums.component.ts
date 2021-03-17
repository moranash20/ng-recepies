import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(private api: ApiService) { }

  public albums: Array<IAlbum> = [];

  public columns: Array<string> = ["id", "UserId", "title"]

  ngOnInit(): void {
    this.api.getAlbums().subscribe(data => {
      console.log(data)
      this.albums = data;
    })
  }



}
