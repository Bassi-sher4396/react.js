import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [length,setLength]=useState(8)
const [numberAllowed,setNumberAllowed]=useState(false)
const [CharAllowed,setCharAllowed]=useState(false)
const [password,setPassword]=useState('')

const passwordGenerator =useCallback(()=>{let pass=''
  let str='ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numberAllowed){
    str +='0123456789'
  }
  if(CharAllowed){
    str +='!@#$%^&*_+=[]{}~`'
  }
for(let i=1;i<=length;i++){
  let char=Math.floor(Math.random()*str.length+1)

pass+=str.charAt(char)
}
setPassword(pass)
},[length,numberAllowed,CharAllowed,setPassword])
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,CharAllowed,passwordGenerator])
  const passwordRef=useRef(null)
  const copyPass=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    },[password])
return (
    <>
    <div class='div'><div class='andarla'>
      <input type="text" 
      value={password}
      placeholder='password'
      readOnly 
      ref={passwordRef}/>
      <button onClick={copyPass}>copy</button>

      </div>
      <div>
        <input type="range" 
        min={6}
        max={100}
        value={length}
         onChange={(e)=>{setLength(e.target.value)}}/>
        <label>length:{length}</label>
        
      </div>
      <div>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
        <label>number</label>
        <input type="checkbox"
        defaultChecked={CharAllowed}
        id='charInput'
        onChange={()=>{setCharAllowed((prev)=>!prev)}} />
        <label>characters</label>
      </div>
      </div>
      </>
  )
}

export default App
