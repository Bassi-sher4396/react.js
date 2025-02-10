import { useState, useTransition } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import './App.css'
 
function App() {
  
const [amount,setAmount]= useState(0)
const [from,setFrom]=useState('usd')
const [to,setTo]=useState('inr')
const [convertedAmount,setConvertedAmount]=useState(0)


const currencyInfo=useCurrencyInfo(from)
const options=Object.keys(currencyInfo)

const swap = ()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 
}

const convert =()=>{
  setConvertedAmount(amount*currencyInfo[to])
}
  return (
    <>
      <div>
        <div>
          <form onSubmit={(e)=>{e.preventDefault()
            convert()
          }}></form>
          <div>
         <InputBox label="from"
         amount={amount}
         currencyOption={options}
         onCurrencyChange={(currency)=>setFrom(currency)}
         selectCurrency={from}
         onAmountChange={(amount)=>setAmount(amount) }/>

          </div>
          <div>
<button type='button' onClick={swap}>swap</button>
          </div>

          <div>
            <InputBox
            label="To"
            amount={convertedAmount}
            currencyOption={options}
             onCurrencyChange={(currency)=>setTo(currency)}
            selectCurrency={from}
            amountDisable/>
            <button type='submit' onClick={convert}>convert {from} to {to} </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
