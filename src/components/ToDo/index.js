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

  function handleKeyDown(e) {
    if(e.key === 'Enter') {
      addTodoOnNextLine(e.target.id)
    }
  }

  function addTodoOnNextLine(currentLineId) {
    const newTodos = [...todos]
    const insertAfter = todos.filter((todo) => todo.uid === currentLineId)
    const spliceInIndex = todos.indexOf(insertAfter[0]) + 1

    newTodos.splice(spliceInIndex, 0, {
      uid: uuidv4(),
      content: '',
      isComplete: false
    })

    setTodos(newTodos)

    // setTimeout(() => {
    //   document.forms[0].elements[i + 1].focus()
    // }, 0)
  }

  return (
    <section className="todo-section">
      <h1 className="todo-title">To Dos</h1>
      <form className="todo-list">
        <ul>
          {todos.map(todo => 
            <div className="todo" key={todo.uid}>
              <div className="checkbox" />
              <input
                id={todo.uid}
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e)}  
              />
            </div>
          )}
        </ul>
      </form>
    </section>
  )
}

export default ToDoList
