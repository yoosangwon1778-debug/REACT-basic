import React from 'react'

const Footer = ({address, hours}) => {
  return (
    <footer>
      {/* 주소와 시간 나오게 하기 */}
      <p>BREAD DAY {address}</p>
      <p>영업시간 {hours}</p>
    </footer>
  )
}

export default Footer