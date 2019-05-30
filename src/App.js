import React, { useState, useEffect } from 'react'

function App() {
  const [ name, setName ] = useState('web')

  useEffect(() => {
    document.title = `Hello, ${name}`
  })

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <button
        onClick={() => setName('user')}
      >
        Click me to change the name
      </button>
    </div>
  )
}

export default App
