
import './App.css'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Section from './components/Section'
import Aside from './components/Aside'
function App() {

  return (
    <main className='container'>
      <Header/>
      <Nav/>
      <div className="content">
        <Section/>
        <Article/>
        <Aside/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
