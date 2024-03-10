import {useTodoListStore} from "../StateStoragies/ZustandTaskStorage.tsx";
import style from "./TaskItem.module.sass"

function TaskItem(){

    const {todos, removeTodo, toggleCompleteness} = useTodoListStore();
    console.log(todos);

    return(
        <>
            {
                todos.length ?
                    (
                       todos.map(todo =>(
                           <li className={`${style.listItem} ${todo.isCompleted ? style.completed : ''}`} key={todo.id}>
                               <p className={`${style.itemText} ${todo.isCompleted ? style.completedText : ''}`}>{todo.text}</p>
                               <div className={style.todoButtons}>
                                   <button className={`${style.deleteButton} ${todo.isCompleted ? style.completedButton : ''}`} onClick={() => toggleCompleteness(todo.id)}>
                                       <span className={`${style.deleteText} ${todo.isCompleted ? style.completedButtonText : ''}`}>done</span>
                                   </button>
                                   <button className={`${style.deleteButton} ${todo.isCompleted ? style.completedButton : ''}`} onClick={() => removeTodo(todo.id)}>
                                       <span className={`${style.deleteText} ${todo.isCompleted ? style.completedButtonText : ''}`}>remove</span>
                                   </button>
                               </div>
                           </li>
                       ))
                    ) : (<> </>)
            }
        </>
    )
}
export default TaskItem;