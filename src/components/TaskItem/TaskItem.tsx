import style from "./TaskItem.module.sass"
import {useSelector, useDispatch, TypedUseSelectorHook} from "react-redux";
import {RootState} from "../../StateStorage/store.ts";
import {removeTodo, toggleCompleteness} from "../../StateStorage/TodosListSlice.ts";

const TaskItem = () =>{

    const dispatch = useDispatch()
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    const todos = useAppSelector((state) => state.todos.todos)

    return(
        <>
            {
                todos.length ?
                    (
                        todos.map(todo =>(
                           <li className={`${style.listItem} ${todo.isCompleted ? style.completed : ''}`} key={todo.id}>
                               <p className={`${style.itemText} ${todo.isCompleted ? style.completedText : ''}`}>{todo.text}</p>
                               <div className={style.todoButtons}>
                                   <button className={`${style.deleteButton} ${todo.isCompleted ? style.completedButton : ''}`} onClick={() => dispatch(toggleCompleteness(todo.id))}>
                                       <span className={`${style.deleteText} ${todo.isCompleted ? style.completedButtonText : ''}`}>done</span>
                                   </button>
                                   <button className={`${style.deleteButton} ${todo.isCompleted ? style.completedButton : ''}`} onClick={() => dispatch(removeTodo(todo.id))}>
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