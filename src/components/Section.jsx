import React from 'react'

const Section = () => {
    const name = 'Alice'
    const age = 25
    const numbers = [1, 2, 3, 4]
    const obj = {
        city: 'seoul',
        hobby: 'programing'
    }
    return (
        <div>
            <p>내 이름은 {name} 입니다.</p>
            <p>내 나이는 {age}살 입니다.</p>
            <p>숫자 배열 꺼내기 {numbers[0]}</p>
            <p>객체 꺼내서 넣기 {obj.hobby}</p>
        </div>
    )
}

export default Section