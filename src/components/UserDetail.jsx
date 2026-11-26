import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserDetail = () => {
    const [userId, setUserId] = useState(1)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => {
                setUser(res.data)
                setLoading(false)
            })

    }, [userId])
    return (
        <div>
            <button onClick={()=>setUserId(1)}>1</button>
            <button onClick={()=>setUserId(2)}>2</button>
            <button onClick={()=>setUserId(3)}>3</button>
            {loading && <>로딩중...</>}
            {user && (
                <div className="content">
                    <p>이름:{user.name}</p>
                    <p>이메일:{user.email}</p>
                    <p>회사명:{user.company.name}</p>
                </div>

            )}

        </div>
    )
}

export default UserDetail