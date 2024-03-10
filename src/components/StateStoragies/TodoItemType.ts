export type TodoItem = {
    id : number,
    text: string,
    isCompleted: boolean
}

export type TodoStore = {
    todos: TodoItem[],
    addTodo: (todo: TodoItem) => void,
    removeTodo: (id: number) => void,
    toggleCompleteness: (id: number) => void
}