import React from 'react';
import { useParams } from 'react-router-dom';

import './project.scss';

export default function Project({ projects }) {
	const { id } = useParams();

	console.log(projects);
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

				<a href={selectedProject.links.demo} target="_blank">Demo</a>
				<a href={selectedProject.links.code} target="_blank">Code</a>
				<a href="/#section-projects" className="back-button">Back to Projects</a>
			</section>
		</>
	);
}
