import React,{useMemo,useState} from 'react'

const SortTableList = () => {
    const [keyword,setKeyword]=useState('')
    const [names]=useState(['David', 'Alice', 'Charlie', 'Bob'])

    const filtered=useMemo(()=>{
        return names
            .filter((name)=>name.toLowerCase().includes(keyword.toLowerCase()))
    },[names,keyword])
  return (
    <div>
        <h2>useMemo 정렬 리스트</h2>
        <input 
        value={keyword}
        onChange={(e)=>setKeyword(e.target.value)}
        type="text" />
        <p>{keyword}</p>
        <ul>
            {filtered.map((name)=>(
                <li key={name}>{name}</li>
            ))}
        </ul>
    </div>
  )
}

export default SortTableList