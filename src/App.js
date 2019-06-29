import React from 'react'
import Greeting from './components/Greeting/'
import Modal from './components/Modal/'
import useModal from './hooks/useModal'
import Form from './components/Form/'
import ToDoList from './components/ToDo'
import Dice from './components/Dice'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const { isShowing, toggle } = useModal()

  return (
    <div className="App">
      <Greeting />
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      <Form />
      <ToDoList />
      <Dice />
      <MusicPlayer />
    </div>
  )
}

export default App
