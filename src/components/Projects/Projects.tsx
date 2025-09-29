import React from 'react'
import './Projects.scss'
import { projects } from '../../data/projectData'

const Projects = () => {
  return (
    <>
        <h1 className="title">Projects</h1>
        <div className="projets-list-container">
            <ul className="project-list">
                {projects.map(project => (
                    <li key={project.id} className='project-card'>
                        <a target="_blank" href={project.link}>
                            <img src={project.img} alt={project.title} />
                            {project.title}
                        </a>
                    </li>
                ))}
            </ul>
            <p>Check out my <a target="_blank" href="https://github.com/Musedd">Github</a> for more insights and code examples.</p>
        </div>
    
    </>
  )
}

export default Projects