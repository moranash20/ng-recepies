import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      title:"Grizzly bear",
      description:"Ursus arctos",
      isCompleted:true,
      isArchived:true,
      endDate: 3/13/2021
    },
    {
      title:"Grenadier, purple","description":"Uraeginthus granatina",
      isCompleted:true,
      isArchived:true,
      endDate: 10/16/2020
    },
    {
      title:"Lion, southern sea","description":"Otaria flavescens",
      isCompleted:false,
      isArchived:true,
      endDate: 11/2/2020
    },
    {
      title:"Vulture, griffon","description":"Gyps fulvus",
      isCompleted:true,
      isArchived:false,
      endDate: 4/14/2020
    },
    {
      title:"Ass, asiatic wild","description":"Equus hemionus",
      isCompleted:false,
      isArchived:false,
      endDate: 9/10/2020
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }
}
