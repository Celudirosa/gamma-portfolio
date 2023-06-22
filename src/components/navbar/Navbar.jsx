import { useState } from 'react';
import './navbar.scss';
import SvgCSmall from '../letters/SvgCSmall';

export default function Navbar() {

  // update the menu value
  const [ menu , setMenu ] = useState( false )

  // change state menu
  const toggleMenu = () => {
    setMenu( !menu )
  }

  // close menu
  const closeMenu = () => {
    setMenu( false )
  }

  return (
    <>
      <header className='header-nav'>

        {/* Header title */}
        <h1>
          <a className='c-icon' href='#section-name'><SvgCSmall /></a>
        </h1>

        {/* Menu toggle button */}
        <button onClick={ toggleMenu } className='nav-button'>
          <a className='nav-burger'>🍔</a>
        </button>

        {/* Main navigation */}
        <nav className={ `main-nav ${ menu ? 'isActive' : '' }` }>
          <ul className='nav-links'>
            {/* About section link */}
            <li className='link-item color-about'><a onClick={ closeMenu } className='a-nav font-weight-bold' href='#section-about'>ABOUT</a></li>
            {/* Projects section link */}
            <li className='link-item color-projects'><a onClick={ closeMenu } className='a-nav font-weight-bold' href='#section-projects'>PROJECTS</a></li>
            {/* Contact section link */}
            <li className='link-item color-contact'><a onClick={ closeMenu } className='a-nav font-weight-bold' href='#section-contact'>CONTACT</a></li>
          </ul>
        </nav>

      </header>
    </>
  )
}