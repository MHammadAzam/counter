import { useState } from 'react' // HOOKS COME FROM HERE
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0) // STATE HOOK.

  function addValue() {
     setCounter(counter + 1)
  }

  function decreaseValue(){
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Hammad Azam</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App

