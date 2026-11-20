import React from 'react'

const Button = ({ text, color = 'black', children }) => {
  const onClickButton = () => {
    console.log(text)
  }

  return (
    <button style={{ color: color }} onClick={onClickButton}>
      {text}-{color.toUpperCase()}
      {children}
    </button>
  )
}

export default Button
