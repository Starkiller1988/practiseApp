import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ToDoList from './ToDoList'

function App() {
  const [todos, setTodos] = useState(['ToDo 1', 'ToDo 2'])
  return (
    <>
    <ToDoList todos={todos} />
    <input type="text" />
    <button>Add ToDos</button>
    <button>Clear Completed ToDos</button>
    <div>0 left to do</div>
    </>
  )

}

export default App
