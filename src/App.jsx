import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counter from './components/Counter'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'
import './App.css'
/* Claude 수정: import './Exam1.css' 줄을 지움. src 폴더엔 Exam1.css가 없어서(components 안에 있음) 파일을 못 찾아 화면 전체가 멈췄음 → Exam1.jsx로 옮김 */

function App() {
  const user = {
    name:'Alice',
    age:21
  }
  return (
    <div>
      <Exam1 {...user}/>
      <Exam2/>
      <Exam3/>
      <h1>Hello React!</h1>
      <Counter/>
    </div>
  )
}

export default App
