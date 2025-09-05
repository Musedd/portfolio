import React from 'react'
import './Skills.scss'
import {skills} from '../../data/skillsData'
import type { SkillItems } from '../../data/skillsData'

const Skills = () => {
  return (
    <div className='skills container'>
        <h1 className="title">Skills</h1>
        <div className='skill-list-container'>
            <ul className="skill-list">
                {skills.map(skill => (
                    <li key={skill.id} className='skill-card'>
                        <img src={skill.img} alt={skill.skill_name} />
                        <p>{skill.skill_name}</p>
                    </li>
                ))}

            </ul>
        </div>

    </div>
  )
}

export default Skills