import './navbar.scss';

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li><a href='#section-about'>ABOUT</a></li>
          <li><a href='#section-projects'>PROJECTS</a></li>
          <li><a href='#section-contact'>CONTACT</a></li>
        </ul>
      </nav>
    </>
  )
}