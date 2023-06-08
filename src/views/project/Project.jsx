import React from 'react';
import { useParams } from 'react-router-dom';
import './project.scss';

export default function Project({ project }) {
  const { id } = useParams();

  const selectedProject = project.find((p) => p.id === id);
  
  return (
    <>
      <section>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </section>
    </>
  )
}