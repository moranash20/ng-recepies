import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  public onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
