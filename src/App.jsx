import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import FocusInput from './components/FocusInput'
import Counter from './components/Counter'
import ClickLogger from './components/ClickLogger'
import './App.css'

function App() {
  
  return (
    <div>
      <ClickLogger/>
      <Counter/>
      <FocusInput/>
    </div>
  )
}

export default App
