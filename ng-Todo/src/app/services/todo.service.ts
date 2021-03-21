import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      id: 1,
      title:"Grizzly bear",
      description:"Ursus arctos",
      isCompleted:false,
      isArchived:true,
      endDate: 3/13/2021,
      selected: true
    },
    {
      id: 2,
      title:"Grenadier, purple","description":"Uraeginthus granatina",
      isCompleted:false,
      isArchived:false,
      endDate: 10/16/2020,
      selected: false
    },
    {
      id: 3,
      title:"Lion, southern sea","description":"Otaria flavescens",
      isCompleted:false,
      isArchived:false,
      endDate: 11/2/2020,
      selected: false
    },
    {
      id: 4,
      title:"Vulture, griffon","description":"Gyps fulvus",
      isCompleted:false,
      isArchived:false,
      endDate: 4/14/2020,
      selected: false
    },
    {
      id: 5,
      title:"Ass, asiatic wild","description":"Equus hemionus",
      isCompleted:false,
      isArchived:false,
      endDate: 9/10/2020,
      selected: false
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0])
  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo>{
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo){
    this._singleTodoSubject.next(todo);
  }
}
