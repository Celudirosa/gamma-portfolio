import React from 'react';
import { useParams, Link } from 'react-router-dom';

import './project.scss';

export default function Project({ projects }) {
	const { id } = useParams();

	const projectIndex = projects.findIndex((p) => p.id === id);

  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

	const selectedProject = projects.find((p) => p.id === id);

	// paragraph break
	const lines = selectedProject.description.split('\n');

	return (
		<>
			<section className="single-project bg-color-buff">
				<h1>{selectedProject.title}</h1>
				<img src={selectedProject.image} className="image" alt="" />

				{lines.map((line, index) => (
					<p key={index} className='single-project-description'>
						{line}
					</p>
				))}

				<a href={selectedProject.links.demo} target="_blank">🕹 Demo</a>
				<a href={selectedProject.links.code} target="_blank">&lt;/code&gt;</a>
				<a href="/#section-projects" className="back-button">Back to Projects</a>

				<div className="navigation-buttons">
          {previousProject && (
            <Link to={`/project/${previousProject.id}`} className="button">
              Previous Project
            </Link>
          )}
          {nextProject && (
            <Link to={`/project/${nextProject.id}`} className="button">
              Next Project
            </Link>
          )}
        </div>
			</section>
		</>
	);
}
