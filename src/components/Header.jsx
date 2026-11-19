import React from 'react'

const Header = () => {
    const isLoggedIn=false
  return (
    <div>
      <h1>Logo</h1>
      <p>
        {isLoggedIn ? 
        <strong>hello</strong> : <strong>goodbye</strong>}
      </p>
      
    </div>
  )
}

export default Header