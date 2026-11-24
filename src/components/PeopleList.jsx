import React,{useState,useMemo} from 'react'

const PeopleList = () => {
    const [keyword, setKeyword]=useState('')
    const [people]=useState([{ name: "David", age: 28 },
    { name: "Alice", age: 22 },
    { name: "Charlie", age: 35 },
    { name: "Bob", age: 30 },])

    const filteredPeople = useMemo(()=>{
        return people
            .filter((p)=>p.name.toLowerCase().includes(keyword.toLowerCase()))
            .sort((a,b)=>a.age - b.age)
    },[people,keyword])
  return (
    <div>
        <h2>useMemo 객체 리스트</h2>
        <input 
        type="text" 
        value={keyword}
        onChange={(e)=>{setKeyword(e.target.value)}}
        placeholder='이름 검색' />
        <ul>
            {filteredPeople.map((p)=>(
                <li key={p.name}>이름 : {p.name} 나이: {p.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default PeopleList