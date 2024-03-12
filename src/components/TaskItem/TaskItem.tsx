import style from "./TaskItem.module.sass"
import {observer} from "mobx-react-lite";
import {todoTasksStore} from "../../StateStorage/TaskStorage.ts";

const TaskItem = observer(() => {

    return(
        <>
            {
                todoTasksStore.todosList.length ?
                    (
                        todoTasksStore.todosList.map(todo =>(
                            <li className={`${style.listItem} ${todo.isCompleted ? style.completed : ''}`} key={todo.id}>
                                <p className={`${style.itemText} ${todo.isCompleted ? style.completedText : ''}`}>{todo.text}</p>
                                <div className={style.todoButtons}>
                                    <button className={`${style.deleteButton} ${todo.isCompleted ? style.completedButton : ''}`} onClick={() => todoTasksStore.toggleCompleteness(todo.id)}>
                                        <span className={`${style.deleteText} ${todo.isCompleted ? style.completedButtonText : ''}`}>done</span>
                                    </button>
                                    <button className={`${style.deleteButton} ${todo.isCompleted ? style.completedButton : ''}`} onClick={() => todoTasksStore.removeTodo(todo.id)}>
                                        <span className={`${style.deleteText} ${todo.isCompleted ? style.completedButtonText : ''}`}>remove</span>
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (<> </>)
            }
        </>
    )
})
export default TaskItem;