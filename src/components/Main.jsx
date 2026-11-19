import React from 'react'
import './Main.css'

const Main = () => {

    const user = {
        name: 'Liz.B',
        isLogin: false
    }
     if (user.isLogin) {
        return <button className='logout'>로그아웃</button>
    }
    else {

        return <button className='login'>로그인</button>
    }
}

export default Main