import style from "./TodoList.module.sass"
import { CreateTaskType} from "./FunctionsTypes.ts";
import {useTodoListStore} from "../StateStoragies/ZustandTaskStorage.tsx";
import {useEffect, useState} from "react";
import {TodoItem} from "../StateStoragies/TodoItemType.ts";
import TaskItem from "../TaskItem/TaskItem.tsx";

/*const DeleteTask: DeleteTaskType = (id) => {
    const {removeTodo} = useTodoListStore();
    removeTodo(id);
}*/



function TodoList(){

    const [todoText, setTodoText] = useState('')
    const {addTodo, todos} = useTodoListStore();

    const DayCounter = () =>{
        const weekDay :number = (new Date).getDay();
        const daysName :string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        return daysName.at(weekDay-1);
    }

    const MonthYearCounter = () => {
        const day = (new Date).getDate();
        const month = (new Date).getMonth();
        const year = (new Date).getFullYear();
        return `${day} . ${month+1} . ${year}`;

    }

    const CreateTask: CreateTaskType = (text) => {
        addTodo({
            id: Math.random()*100000,
            text: text,
            isCompleted: false
        } as TodoItem)
    }

    useEffect(() => {
        console.log(todos);
    }, [])

    return(
        <div className={style.mainPageContent}>
            <div className={style.listInput}>
                <div className={style.date}>
                    <span className={style.day}>{DayCounter()}</span>
                    <span className={style.monthYear}>{MonthYearCounter()}</span>
                </div>
                <form action="" className={style.form}>
                    <input type="text" className={style.formInput} placeholder="I need to..."
                           id="input" onChange={(e) => setTodoText(e.target.value)}/>
                        <button type="button" className={style.inputButton}
                                onClick={() => {
                                    todoText.length ? CreateTask(todoText) : ''
                                }
                        }>Add</button>
                </form>
                <ul className={style.todoList} id="todo-list">
                    <TaskItem/>
                </ul>
            </div>
        </div>
    )
}

export default TodoList