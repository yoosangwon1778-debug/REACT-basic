import React, { useState, useEffect } from 'react'
import axios from 'axios'
const TodoList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                setPosts(res.data.slice(0,5))
                console.log(res.data)

                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setError('데이터를 가져오지 못했습니다')
                setLoading(false)
            })

    }, [])


    if (loading) return <p>로딩중...</p>
    if (error) return <p>{error}</p>
    return (
        <div>
            <h2>todo list 목록</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList