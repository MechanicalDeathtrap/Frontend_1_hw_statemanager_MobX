import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoItem} from "./TodoItemType.ts";
import {RootState} from "./store.ts";

type StatusizedSliceTodos = {
    todos: TodoItem[];
}

const initialState  = {
    todos: [] ,
} as StatusizedSliceTodos

export const TodosSlice = createSlice({
    name: "TodosList",
    initialState ,
    reducers:{
        addTodo: (state, todo : PayloadAction<TodoItem>) =>{
            state.todos.push(todo.payload);
        },
        removeTodo: (state, id: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo : TodoItem) => todo.id !== id.payload)
        },
        toggleCompleteness: (state, id: PayloadAction<number>) => {
            state.todos = state.todos.map((todo: TodoItem) =>
                todo.id === id.payload  ? ({...todo, isCompleted: !todo.isCompleted} as TodoItem) : todo)
        }
    }
})

export const {addTodo, removeTodo, toggleCompleteness} = TodosSlice.actions
export default TodosSlice.reducer
export const todosList = (state: RootState) => state.todos.todos