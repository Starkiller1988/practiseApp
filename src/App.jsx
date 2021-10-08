import { useState, useRef } from 'react'
import logo from './logo.svg'
import './App.css'
import ToDoList from './ToDoList'
import uuidv4 from 'uuid/v4'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
    <ToDoList todos={todos} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add ToDos</button>
    <button>Clear Completed ToDos</button>
    <div>0 left to do</div>
    </>
  )

}

export default App
