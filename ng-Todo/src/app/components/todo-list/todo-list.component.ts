import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todos: Array<ITodo> = [];

  private subscription: Subscription = new Subscription();

  constructor(private tosoService: TodoService) { }

  ngOnInit(): void {
    this. subscription.add(
      this.tosoService.getTodos().subscribe(data => {
        console.log(data);
        this.todos = data;
      })
    )
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
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
