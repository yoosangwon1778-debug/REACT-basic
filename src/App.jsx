
import './App.css'
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'
function App() {
  
  return (
    <div className='container'>
      <Header/>
      <div className="content">
        <Aside/>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
