import React, { useState } from 'react'
import LifeCycle from './LifeCycle'
import Child from './Child'

const Parent = () => {
    const colors = ['red','blue','green']
    const [index,setIndex]=useState(0)

    const changeColor=()=>{
        setIndex((prev)=>{
            return (prev+1) % colors.length
        })
    }


    const [show,setShow] = useState(true)
  return (
    <div>
        <button onClick={changeColor}>색상변경</button>
        <Child color={colors[index]}/>
        <h1>부모영역</h1>
        <button onClick={()=>setShow(true)}>마운트</button>
        <button onClick={()=>setShow(false)}>언마운트</button>
        {show && <LifeCycle/>}
    </div>
  )
}

export default Parent