import React from 'react'
import Greeting from './components/Greeting/'
import Modal from './components/Modal/'
import useModal from './hooks/useModal'
import Form from './components/Form/'
import ToDoList from './components/ToDo'
import Dice from './components/Dice'
import MusicPlayer from './components/MusicPlayer'
import Timer from './components/Timer'
import List from './components/List'

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
      <Timer />
      <div className="container">
        <div className="row">
          <div className="col-6 justify-content-center my-5">
            <List />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
