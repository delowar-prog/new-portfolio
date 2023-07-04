import { Fragment } from 'react'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import About from './component/About'
import Skill from './component/Skill'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {

  return (
    <div className='bg-zinc-700'>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Skill></Skill>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default App
