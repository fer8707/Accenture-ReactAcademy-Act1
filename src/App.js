import React, { useState } from 'react'
import './App.css';
import Counter from './Components/Counter'
import Actions from './Components/Actions'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function App() {
  const[counter, setCounter] = useState(0)

  const add = () => {
    setCounter(counter + 1)
  }

  const subtract = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter counter={counter} />
        <ButtonGroup color="primary" >
          <Actions action={add} text='Sumar' />
          <Actions action={subtract} text='Restar' />
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;