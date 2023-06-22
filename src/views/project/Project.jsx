import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './project.scss';

export default function Project({ projects }) {

	// access by id
	const { id } = useParams();

	// search in the array projects and find the project whose id matches the value obtained
	const selectedProject = projects.find((p) => p.id === id);

	// get the index of the selected project in the array
	const projectIndex = projects.findIndex((p) => p.id === id);

	// access the previous and next projects in the array
  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

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

				{/* <p>
					{selectedProject.tools.map((tool, index) => (
						<span key={index}>
							{tool.name}
							<img src={tool.icon} alt={tool.name}  className="tool-icon"/>
						</span>
					))}
					</p> */}

				<div className='project-links'>
					<a href={selectedProject.links.demo} target="_blank">🕹 Demo</a>
					<a href={selectedProject.links.code} target="_blank">&lt;/code&gt;</a>
				</div>

				{/* navigation between projects */}
				<div className="navigation-buttons">
					{previousProject ? (
						<Link to={`/project/${previousProject.id}`} className="button">👈🏻</Link>
					) : (
						<div className="empty-button"></div>
					)}
					<a href="/" className="back-button">🏠</a>
					{nextProject ? (
						<Link to={`/project/${nextProject.id}`} className="button">👉🏻</Link>
					) : (
						<div className="empty-button"></div>
					)}
				</div>

			</section>
		</>
	);
}
