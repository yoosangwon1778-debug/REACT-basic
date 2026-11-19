import React from 'react'

const Section = () => {
    const boardList = [
        { id: 1, title: '공지사항', content: '사이트 점검 안내' },
        { id: 2, title: '이벤트', content: '신규 가입 이벤트 진행 중' },
        { id: 3, title: '업데이트', content: '버전 2.0 출시' }
    ];
  return (
    <section>
        <ul>
            {boardList.map((board,i)=>(
                <li key={board.id}>
                    <h2>{i+1} : {board.title}</h2>
                    <p>{board.content}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Section