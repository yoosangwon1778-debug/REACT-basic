import React,{useState,useMemo} from 'react'

const Square = () => {
    const [number,setNumber] = useState(0)
    const [count,setCount] = useState(0)

    const Squared=useMemo(()=>{
        console.log('제곱근 계산중...');
        return number * number
        
    },[number])

    const onKeyupEnter=(e)=>{
        if(e.key==='Enter'){
            console.log('Enter key')
        }
    }
  return (
    <div>
        <h2>숫자의 제곱근 구하기</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="number"
            onKeyUp={onKeyupEnter}
            onChange={(e)=>setNumber(Number(e.target.value))}
            placeholder='숫자를 입력하세요' />
            <p>{number}의 제곱근은 ? {Squared}</p>
            <p>카운트 : {count}</p>
            <button onClick={()=>setCount(count+1)}>카운트 증가:{count}</button>
        </form>
    </div>
  )
}

export default Square