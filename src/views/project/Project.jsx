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
			<section className="single-project bg-color-gray-light">
				<h1>{selectedProject.title}</h1>
				<img src={selectedProject.image} className="image image-mobile" alt="" />
				<p>{selectedProject.description}</p>
				<a href={selectedProject.links.demo}>Demo</a>
				<a href={selectedProject.links.code}>Code</a>
				<a href="/#section-projects" className="back-button">Back to Projects</a>
			</section>
		</>
	);
}
