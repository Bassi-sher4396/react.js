import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [Color,setColor]=useState('white')

  return (
    <>
     <div class ='lulla' style={{backgroundColor: Color}}>
      <div class= 'chhoti'style={{backgroundColor:'white'}}>
        <button onClick={()=>{setColor('red')
          console.log(Color);
          
        }} style={{backgroundColor:'red'}}>red</button>
        <button  onClick={()=>{setColor('blue')
          console.log(Color);
          
        }}style={{backgroundColor:'blue'}}>blue</button>
        <button  onClick={()=>{setColor('green')
          console.log(Color);
          
        }} style={{backgroundColor:'green'}}>green</button>
        <button  onClick={()=>{setColor('pink')
          console.log(Color);
          
        }}style={{backgroundColor:'pink'}}>pink</button>
        <button  onClick={()=>{setColor('purple')
          console.log(Color);
          
        }} style={{backgroundColor:'purple'}}>purple</button>
      </div>
     </div>
    </>
  )
}

export default App
