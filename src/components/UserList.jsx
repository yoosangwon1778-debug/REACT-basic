import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [keyword, setKeyword] = useState('')

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data)
                console.log(res.data)

                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setError('데이터를 가져오지 못했습니다')
                setLoading(false)
            })

    }, [])

    const filtered = useMemo(() => {

        return users
            .filter((u) =>
                u.name.toLowerCase().includes(keyword.toLowerCase())
            )
            .sort((a, b) => a.name - b.name)

    }, [keyword, users])

    if (loading) return <p>로딩중...</p>
    if (error) return <p>{error}</p>
    return (
        <div>
            <h2>사용자 목록</h2>
            <input type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='사용자 이름 검색' />
            <ul>
                {filtered.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList