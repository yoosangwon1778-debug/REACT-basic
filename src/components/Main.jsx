import React from 'react'

const Main = ({content,bgColor}) => {
  return (
    <div style = {{backgroundColor:bgColor}}>
        {content},{bgColor}
    </div>
  )
}

export default Main