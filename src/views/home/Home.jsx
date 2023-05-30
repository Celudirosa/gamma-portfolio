import Navbar from '../../components/navbar/Navbar';
import Name from '../../components/name/Name';
import About from '../../components/about/About'
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Name />
      <About />
      <Projects />
      <Contact />
    </>
  )
}