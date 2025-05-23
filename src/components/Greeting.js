import React,{useState} from "react";

const Greeting = () => {
  const [input,setInput] = useState('');
  const onInput = (e)=>{
      const {value} = e.target
    setInput(value)
  }
  const onClear = ()=>{
    setInput('')
  }
  
  return (
    <div>
      <p>Enter your name:</p>
    <input value={input} onChange={onInput} />
    {!!input.length&&<p>Hello {input}!</p>}
    <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default Greeting
