import { Link, Route, Routes } from 'react-router-dom';
import projectsData from '/@json/projects.json';
import './projects.scss';
import Project from '../../views/project/Project';

export default function Projects() {

	return (
		<>
			<section className="bg-color-blue-light component-container" id="section-projects">
				<h1 className='text-color-violet-dark'>💻 PROJECTS</h1>
				<div>
					<div>
						{projectsData.map((project) => (
							<div className="list-container" key={project.id}>
								<Link className='list-projects'
									to={`/project/${project.id}`}>
									{project.title}
								</Link>
							</div>
						))}
					</div>
					<Routes>
						{projectsData.map((project) => (
							<Route key={project.id} path={`/project/${project.id}`} element={<Project project={project} />} />
						))}
					</Routes>
				</div>
			</section>
		</>
	);
}
