import React from 'react';
import { useParams } from 'react-router-dom';
import './project.scss';

export default function Project({ projects }) {
	const { id } = useParams();

	console.log(projects);
	const selectedProject = projects.find((p) => p.id === id);

	return (
		<>
			<section>
				<h1>{selectedProject.title}</h1>
				<p>{selectedProject.description}</p>
			</section>
		</>
	);
}
