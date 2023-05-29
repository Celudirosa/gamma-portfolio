import { useState } from 'react';
import './navbar.scss';

export default function Navbar() {

  const [ menu , setMenu ] = useState( false )

  const toggleMenu = () => {
    setMenu( !menu )
  }

  const closeMenu = () => {
    setMenu( false )
  }

  return (
    <>
      <header className='header-nav'>

        <h1 className='h1-nav'>
          <a className='a-nav' href='#section-home'>C</a>
        </h1>

        <button onClick={ toggleMenu } className='nav-button'>
          <a className='nav-burger'>🍔</a>
        </button>

        <nav className={ `main-nav ${ menu ? 'isActive' : '' }` }>
          <ul className='nav-links'>
            <li className='link-item'><a onClick={ closeMenu } className='a-nav' href='#section-about'>ABOUT</a></li>
            <li className='link-item'><a onClick={ closeMenu } className='a-nav' href='#section-projects'>PROJECTS</a></li>
            <li className='link-item'><a onClick={ closeMenu } className='a-nav' href='#section-contact'>CONTACT</a></li>
          </ul>
        </nav>

      </header>
    </>
  )
}