import React, {useState} from 'react'

const Exam3 = () => {
    const [input,setInput] = useState('')
    const onChangeInput=(e)=>{
        setInput(e.target.value)
    }
    const resetButton = () => {
        setInput('')
    }
  return (
    <div>
        <input type="text" 
        onChange={onChangeInput}
        value={input}/>
        <p>{input}</p>
        <button onClick={resetButton}>reset</button>
    </div>
  )
}

export default Exam3