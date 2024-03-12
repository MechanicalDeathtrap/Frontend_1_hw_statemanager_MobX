import {makeAutoObservable} from "mobx";
import {TodoItem} from "./TodoItemType.ts";

export class TodoTasksStore{
    todosList: TodoItem[] = [];
    constructor(){
        makeAutoObservable(this);
    }

    addTodo(todo: TodoItem){
        this.todosList.push(todo);
    }

    removeTodo(id: number){
        this.todosList = this.todosList.filter((todo : TodoItem) => todo.id !== id)
    }

    toggleCompleteness(id: number){
        this.todosList = this.todosList.map((todo: TodoItem) =>
            todo.id === id ? ({...todo, isCompleted: !todo.isCompleted} as TodoItem) : todo);
    }
}

export const todoTasksStore = new TodoTasksStore();