    import { Component } from '@angular/core';
    import { Todo } from '../models/todo.model';
    
    @Component({
      selector: 'app-todo',
      templateUrl: './todo.component.html',
      styleUrls: ['./todo.component.css']
    })
    export class TodoComponent {
      todos: Todo[] = [];
      newTodoText: string = '';
    
      addTodo() {
        if (this.newTodoText.trim() !== '') {
          this.todos.push({
            id: Date.now(),
            text: this.newTodoText,
            completed: false
          });
          this.newTodoText = '';
        }
      }
    
      toggleComplete(id: number) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      }
    
      deleteTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    }
