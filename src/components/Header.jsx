import React from 'react'

const Header = () => {
  const menus = [
    { id: 1, name: 'page2' },
    { id: 2, name: 'page3' },
    { id: 3, name: 'page4' },
    { id: 4, name: 'page5' },
    { id: 5, name: 'page6' },
  ]
  return (
    <header>
      <h1>Site Name</h1>
      <div className="header-right">
        <p>{'<HEADER> SECTION'}</p>
        <nav>
          <p>navigation links</p>
          <ul>
            {menus.map((menu) => (
              <li key={menu.id}>
                <a href="#">{menu.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header