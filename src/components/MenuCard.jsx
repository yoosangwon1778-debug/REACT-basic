import React from 'react'

const MenuCard = ({icon,name,price,tag='기본'}) => {
  return (
    <li className='menu-item'>
      <span className="tag">{tag}</span>
      <p className="menu-icon">{icon}</p>
      <h3>{name}</h3>
      <p className="price">
        {price.toLocaleString()}원
      </p>
      <button className='btn-cart'>담기</button>
    </li>
  )
}

export default MenuCard