import style from "./App.module.sass"
import Header from "./Header/Header.tsx";
import TodoList from "./TodoList/TodoList.tsx"

function App() {

  return (
    <div className={style.mainScreen}>
        <Header/>
        <TodoList/>
    </div>
  )
}

export default App
