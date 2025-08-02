import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.scss'
})
export class TodoComponentComponent {
  taskTitle:string = "";
  todoList:string[] = [];

  handleAddTask():void{
    this.todoList.push(this.taskTitle);
    this.taskTitle = ""
    // console.log("Todos: ", this.todoList);
  }

  handleDeleteTask(i:number):void{
    // this.todoList.splice(i,1)
    this.todoList = this.todoList.filter((_,taskIndex)=> taskIndex !== i)
  }
}
