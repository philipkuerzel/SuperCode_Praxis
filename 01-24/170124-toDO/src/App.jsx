import './App.css'
import TodoList from './assets/components/todoList/TodoList'
import todo from "./assets/data/todo"

function App() {

  return (
    <>
      <TodoList todo={todo}/>
    </>
  )
}

export default App

