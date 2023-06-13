import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './project.scss';

export default function Project({ projects }) {
	const { id } = useParams();

	console.log(projects);
	const selectedProject = projects.find((p) => p.id === id);

	return (
		<>
			<section className="single-project bg-color-buff">
				<h1>{selectedProject.title}</h1>
				<img src={selectedProject.image} className="image" alt="" />
				<p>{selectedProject.description}</p>
				<a href={selectedProject.links.demo} target="_blank">Demo</a>
				<a href={selectedProject.links.code} target="_blank">Code</a>
				<a href="/#section-projects" className="back-button">Back to Projects</a>
			</section>
		</>
	);
}
