import React from 'react'
import './Projects.scss'
import { projects } from '../../data/projectData'

const Projects = () => {
  return (
    <div className='projects container'>
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
            <p>These are only some of the projects I've worked on. Check out my <a href="">Github</a> for more insights and code examples.</p>
        </div>
    
    </div>
  )
}

export default Projects