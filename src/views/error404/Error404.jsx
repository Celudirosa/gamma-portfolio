import { Link } from 'react-router-dom';
import './error404.scss';

export default function Error404() {
  return (
    <>
      <div className='bg-color-gray' id='section-404'>
        <div>
          <p className='text'>...ups!</p>
          <p className='text'>error</p>
          <p className='text text-404'>404</p>
        </div>
        <Link to="/" className="text-link">I wanna go back to your awesome portfolio! 💥</Link>
      </div>
    </>
  )
}