import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import projectsData from './projects.json';
import './projects.scss';
import Project from '../../views/project/Project';

export default function Projects() {
	// En principio esto no te hace falta, con el 'to' del Link sobra para ir al proyecto
	// const navigate = useNavigate();

	// const handleProjectClick = (id) => {
	//   navigate(`/project/${id}`);
	// };

	return (
		<>
			<section className="bg-color-blue-light component-container" id="section-projects">
				<div>
					<h1>Projects</h1>
					<div>
						{projectsData.map((project) => (
							<div key={project.id}>
								<Link
									to={`/project/${project.id}`}
									// onClick={() => handleProjectClick(project.id)} Esto sobra
								>
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
