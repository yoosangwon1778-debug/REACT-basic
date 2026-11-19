import React from 'react'

const Footer = () => {
        const menus = [
        { id: 1, name: 'contact us' },
        { id: 2, name: 'affiliates' },
        { id: 3, name: 'help' },
        { id: 4, name: 'follow us' }
    ]

  return (
    <footer>
        <h3>{'<FOOTER> SECTION'}</h3>
        <p>navigation links</p>
        <ul>
            {menus.map((menu)=>(
                <li key={menu.id}>
                    <a href="#">{menu.name}</a> {/* Claude 수정: 메뉴는 링크라 a로 감쌈 */}
                </li>
            ))}
        </ul>
    </footer>
  )
}

export default Footer