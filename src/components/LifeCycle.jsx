import React,{useState,useEffect} from 'react'

const LifeCycle = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('마운트 됨');
        
        return ()=>{
            console.log('언마운트됨')
        }
    },[])

    useEffect(()=>{
        if(count>3){
            console.log(`${count}가 3보다 커짐`)
        }
    })
  return (
    <div>
        <p>클릭된 수{count}</p>
        <button onClick={()=>setCount((prev)=>prev+1)}>클릭</button>
    </div>
  )
}

export default LifeCycle