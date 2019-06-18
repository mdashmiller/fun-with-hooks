import React, { useState } from 'react'
import uuidv4 from 'uuid/v4'
import './index.scss'

const ToDoList = () => {

  const [todos, setTodos] = useState([
    {
      uid: uuidv4(),
      content: 'pickup for maids',
      isComplete: true
    },
    {
      uid: uuidv4(),
      content: 'code in React',
      isComplete: false
    },
    {
      uid: uuidv4(),
      content: 'work on inbox UI',
      isComplete: false
    }
  ])

  function handleKeyDown(e, i) {
    if(e.key === 'Enter') {
      addTodoOnNextLine(i)
    }

    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault()
      return removeTodoAtIndex(i)
    }
  }

  function addTodoOnNextLine(i) {
    const newTodos = [...todos]
    const newTodo = {
      uid: uuidv4(),
      content: '',
      isComplete: false
    }

    newTodos.splice(i + 1, 0, newTodo)

    setTodos(newTodos)

    setTimeout(() => {
      document.forms[1].elements[i + 1].focus()
    }, 0)
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos]
    newTodos[i].content = e.target.value
    setTodos(newTodos)
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)))
    setTimeout(() => {
      if (i === 0) {
        document.forms[1].elements[i].focus()
      } else {
        document.forms[1].elements[i - 1].focus()
      }
    }, 0)
  }

  return (
    <section className="todo-section">
      <h1 className="todo-title">To Dos</h1>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => 
            <div className="todo" key={todo.uid}>
              <div className="checkbox" />
              <input
                id={todo.uid}
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}  
              />
            </div>
          )}
        </ul>
      </form>
    </section>
  )
}

export default ToDoList
