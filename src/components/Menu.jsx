import React from 'react'
import MenuCard from './MenuCard'

const Menu = () => {

  const menus =[
    {
      icon:'🥐',
      name:'크루아상',
      price:3500,
      tag:'인기'
    },
    {
      icon:'🍞',
      name:'우유식빵',
      price:4800,
      tag:'신메뉴'
    },
    {
      icon:'🥯',
      name:'플레인 베이글',
      price:3000,
    },
  ]

  return (
    <div className='menu'>
      <h2>오늘의 빵</h2>
      <ul className="list">
      {/* MenuCard뿌려주기 데이터 전달하기*/}
          {menus.map((menu) => (
            <MenuCard key={menu.name} {...menu}/>
          ))}
      </ul>
    </div>
  )
}

export default Menu