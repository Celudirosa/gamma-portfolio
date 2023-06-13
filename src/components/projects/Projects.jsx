import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import projectsData from '/@json/projects.json';
import './projects.scss';
import Project from '../../views/project/Project';

export default function Projects() {
	const [hoveredImage, setHoveredImage] = useState('');

	return (
		<>
			<section className="bg-color-blue-light component-container" id="section-projects">
				<div className='aling-list'>
					<h1 className='text-color-violet-dark'>💻 PROJECTS</h1>
					<div>
						<div>
							{projectsData.map((project) => (
								<div className="list-container" key={project.id}>
									<Link className='list-projects'
										to={`/project/${project.id}`}
										onMouseEnter={() => setHoveredImage(project['imgHover'])}
										onMouseLeave={() => setHoveredImage('')}>
										{project.title}
									</Link>
								</div>
							))}
						</div>
						{hoveredImage && (
              <img
                src={hoveredImage}
                className="hovered-image"
                alt="Hovered Image"
              />
            )}
						<Routes>
							{projectsData.map((project) => (
								<Route key={project.id} path={`/project/${project.id}`} element={<Project project={project} />} />
							))}
						</Routes>
					</div>
				</div>
			</section>
		</>
	);
}
