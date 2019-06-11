import React, { useState } from 'react'
import './index.scss'

const ToDoList = () => {
  return (
    <section className="todo-section">
      <h1 className="todo-title">To Dos</h1>
      <form className="todo-list">
        <ul>
          <div className="todo">
            <div className="checkbox">
              <input type="text" value="item one" />
            </div>
          </div>
        </ul>
      </form>
    </section>
  )
}

export default ToDoList
