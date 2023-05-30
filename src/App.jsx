import About from './components/about/About'
import Contact from './components/contact/Contact'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import './scss/global.scss'
import Home from './views/home/Home'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <main>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
