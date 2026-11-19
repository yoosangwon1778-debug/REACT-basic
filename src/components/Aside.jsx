import React from 'react'

const Aside = () => {
  const links=[1,2,3,4,5,6]
    return (
    <aside>
        <h3>{'<ASIDE> SECTION'}</h3>
        <ul>
            {links.map((link)=>(
                <li key={link}>
                    <a href="#">links</a> {/* Claude 수정: 링크 목록이라 a로 감쌈 */}
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default Aside