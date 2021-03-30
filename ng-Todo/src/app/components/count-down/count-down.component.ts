import { Component, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  constructor() { }

  @Input() set dDay(dDay: Date){
    this._dDay = dDay;
    this.dateNow = new Date()
  }

  private subscription: Subscription = new Subscription();
  private _dDay: Date;
  private dateNow: Date = new Date();

  private milliseconds: number = 1000;
  private secondsInMinute: number = 60;
  private minutesInHour: number = 60;
  private hoursInADay: number = 24;

  public timeDiff: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(() =>{
        this.getTimeDiff();
      })
    )
  }

  private getTimeDiff():void {
    this.timeDiff = new Date(this._dDay).getTime() - new Date().getTime();
    this.setTimeUnits(this.timeDiff);
  }

  private setTimeUnits(timeDiff: number){
    this.seconds = Math.floor((timeDiff) / (this.milliseconds) % this.secondsInMinute);
    this.minutes = Math.floor(timeDiff / (this.milliseconds * this.minutesInHour) % this.minutesInHour);
    this.hours = Math.floor(timeDiff / (this.milliseconds * this.minutesInHour * this.secondsInMinute) % this.hoursInADay);
    this.days = Math.floor(timeDiff / (this.milliseconds * this.minutesInHour * this.secondsInMinute * this.hoursInADay));
  }
}
