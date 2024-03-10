import style from "./App.module.sass"
import Header from "./components/Header/Header.tsx";
import TodoList from "./components/TodoList/TodoList.tsx"

function App() {

  return (
    <div className={style.mainScreen}>
        <Header/>
        <TodoList/>
    </div>
  )
}

export default App
