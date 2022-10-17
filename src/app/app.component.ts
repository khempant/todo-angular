import { Component } from '@angular/core';
import {Todo} from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// creating an empty array that is responsible to add todos.

export class AppComponent {
  todos : Todo[] = [];
  newTodo : string;

saveTodo(){
  if(this.newTodo){
    let todo = new Todo();
    todo.name = this.newTodo;
    todo.IsCompleted= true
    this.todos.push(todo);
    this.newTodo = '';
  }else{
    alert('please enter plans');
}
}
done(id:number){
  this.todos[id].IsCompleted = !this.todos[id].IsCompleted;
}
remove(id:number){
  this.todos = this.todos.filter((v,i)=> i !== id);
}

}


