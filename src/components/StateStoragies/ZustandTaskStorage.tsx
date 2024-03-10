import {create} from "zustand";
import {TodoItem, TodoStore} from "./TodoItemType.ts";


export const useTodoListStore  = create<TodoStore>((set) =>({
    todos: [],
    addTodo: (todo : TodoItem) => {
        set((state) => ({
            todos: [
                ...state.todos,
                todo
            ]
        }))
    },
    removeTodo: (id : number) => {
        set((state) => ({
            todos: state.todos.filter((todo : TodoItem) => todo.id !== id)
        }))
    },
    toggleCompleteness: (id: number) => {
        set((state) => ({
            todos: state.todos.map((todo: TodoItem) =>
                todo.id === id ? ({...todo, isCompleted: !todo.isCompleted} as TodoItem) : todo
            ),
        }))
    }
}))
/*
export const useTodoListStore<TodoStore> = create((set) =>({}

));*/
