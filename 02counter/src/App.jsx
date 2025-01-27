import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]= useState(5)
// let counter=5
const addValue=()=> {
  console.log(`value added`,Math.random(),counter)
 if(counter<20){counter= counter+1
 setCounter(counter)}
 
}
const remove=()=>{
  if(counter>0){counter=counter-1
  setCounter(counter)}
}
  return (
    <>
    <h1>chut aur react</h1>
    <h2>counter value:{counter}</h2>

    <button onClick={addValue}>add value{counter}</button> <br />
    <button onClick={remove}>remove value{counter}</button>
    </>
  )
}

export default App
