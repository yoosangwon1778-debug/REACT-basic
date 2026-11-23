import React from 'react'
import './Exam1.css' /* Claude 수정: CSS는 그걸 쓰는 컴포넌트에서 연결. 같은 폴더라서 ./Exam1.css */

const Exam1 = ({age,name}) => {
  return (
    <div>
        <h3>안녕 나는 
            <span className='name'>
            {name}</span>이고
            내 나이는 <span className='age'>{age}</span>살이야</h3>
    </div>
  )
}

export default Exam1