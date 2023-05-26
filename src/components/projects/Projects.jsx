import { Route, Routes } from 'react-router-dom';
import './projects.scss';
import Project from '../../views/project/Project';

export default function Projects() {
  return (
    <>
      <section className='bg-color-blue-light component-container' id='section-projects'>
        <div>
          <h1>Projects</h1>
          <div>
            <Link to='/project'>Project 1</Link>
          </div>
          <Routes>
            <Route path='/project' element={<Project />} />
          </Routes>
        </div>
      </section>
    </>
  )
}