import './contact.scss';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <section className='bg-color-buff component-container' id='section-contact'>
        <h1>Let's get in touch and work on something awesome together! 🎉</h1>
        <a className='a-hover' href="mailto:cluqued@live.com" target="_blank">✉️ cluqued@live.com</a>
        <a href="https://www.linkedin.com/in/celia-luque-d%C3%ADaz-837a99130/" target="_blank"><AiFillLinkedin /> <span>Linkedin</span></a>
        <a href="https://github.com/Celudirosa" target="_blank"><FaGithubSquare /> <span>GitHub</span></a>
        <a href="https://www.instagram.com/celudirosa.dsgn/" target="_blank"><FaInstagramSquare /> <span>Instagram</span></a>
      </section>
    </>
  )
}