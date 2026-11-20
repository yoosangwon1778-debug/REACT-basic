import React from 'react'

const MenuButton = ({ label, color }) => {
  return (
    <button style={{ color: color }} onClick={() => console.log(label)}>
      {label}
    </button>
  )
}

export default MenuButton
