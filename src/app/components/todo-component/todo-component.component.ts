import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.scss',
})
export class TodoComponentComponent {
  taskTitle: string = '';
  todoList: string[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  handleAddTask(): void {
    if (this.taskTitle && this.taskTitle.trim()) {
      this.todoList.push(this.taskTitle);
    }
    this.taskTitle = '';
    this.saveToLocalStorage();
    // console.log("Todos: ", this.todoList);
  }

  handleDeleteTask(i: number): void {
    // this.todoList.splice(i,1)
    this.todoList = this.todoList.filter((_, taskIndex) => taskIndex !== i);
    this.saveToLocalStorage();
  }

  handleEditTask(i: number): void {
    const newEditedTask = prompt('Enter the task change: ');
    if (newEditedTask && newEditedTask.trim()) {
      this.todoList = this.todoList.map((item, itemIndex) =>
        itemIndex === i ? newEditedTask : item
      );
    }
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('Todos', JSON.stringify(this.todoList));
  }

  loadFromLocalStorage() {
    const savedTodos = localStorage.getItem('Todos');
    if (savedTodos) {
      this.todoList = JSON.parse(savedTodos);
    }
  }
}
