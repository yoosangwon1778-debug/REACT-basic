import React from 'react'

const Header = ({ logo }) => {
  const menus = ['소개', '메뉴', '오시는 길']
  return (
    <header>
      {/* 로고 나오게 하기 */}
      <h1>{logo}</h1>
      <ul className="nav">
        {/* menu 뿌려주기 */}
        {menus.map((menu) => (
          <li key={menu}>
            <a href="#">{menu}</a>
          </li>
        ))}
      </ul>

    </header>
  )
}

export default Header