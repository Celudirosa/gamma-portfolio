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
			<Navbar />
			<section className="bg-color-gray">
				<img src={selectedProject.imageIphone} alt="" />
				<img src={selectedProject.imageDesktop} alt="" />
				<h1>{selectedProject.title}</h1>
				<p>{selectedProject.description}</p>
				<a href={selectedProject.links.demo}>demo</a>
				<a href={selectedProject.links.code}>code</a>
			</section>
		</>
	);
}
