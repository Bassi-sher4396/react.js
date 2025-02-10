import React,{useId} from "react";
import useCurrencyInfo from "../hooks/useCurrencyinfo";
function InputBox( { label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency='usd',
    amountDisable=false,
    currencyDisable=false}){
  const amountInputId= useId()
    return (
        <div style={{backgroundColor:'white'}}>
<div >
    <label htmlFor={amountInputId} style={{display:"inline-block"}}>
       {label}
    </label>
    <input 
    id={amountInputId}
    type="number"
    placeholder="amount"
    disabled={amountDisable}
    value={amount}
    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
</div>
<div>
    <p>
        currency type 
    </p>
    <select
    value={selectCurrency}
    onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
    disabled={currencyDisable}>
       {currencyOption.map((currency)=>(
        <option key={currency} value={currency}>{currency}</option>
       ))}
    </select>
</div>
        </div>
    )
}
 
export default InputBox