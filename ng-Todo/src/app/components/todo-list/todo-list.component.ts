import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

 @Input() todos: Array<ITodo> = [];

  constructor(private tosoService: TodoService) { }

  ngOnInit(): void {
    
  } 

  public onTodoClick(todo: ITodo, index: number){
    this.tosoService.setSelectedTodo(todo);
    this.todos.forEach(todo => {
      if(todo.selected){
        todo.selected = false;
      }
    })
    this.todos[index].selected = true;
  }
}
