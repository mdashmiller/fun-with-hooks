import React, { useState, useEffect } from 'react'

const Greeting = () => {
  const [name, setName] = useState('web')

  useEffect(() => {
    document.title = `Hello, ${name}`
  })

  return (
    <div className="Greeting">
      <h1>Hello, {name}!</h1>
      <button
        onClick={() => setName('user')}
      >
        Click me to change the name
      </button>
    </div>
  )
}

export default Greeting
