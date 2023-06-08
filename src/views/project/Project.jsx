import React from 'react';
import { useParams } from 'react-router-dom';
import './project.scss';

export default function Project({ projects }) {
	const { id } = useParams();

	// Luego aqui no le pasabas proyectos, por lo que no te podia hacer el find ya que era undefined
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
