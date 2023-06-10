import Navbar from '../../components/navbar/Navbar';
import Name from '../../components/name/Name';
import About from '../../components/about/About'
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import './home.scss';

export default function Home() {
  return (
    <>
      <div className="content-home">
        <Navbar />
        <div className="sticky-component">
          <Name />
        </div>
        <div className="sticky-component">
          <About />
        </div>
        <div className="sticky-component">
          <Projects />
        </div>
        <div className="sticky-component">
        <Contact />
        </div>
      </div>
    </>
  )
}