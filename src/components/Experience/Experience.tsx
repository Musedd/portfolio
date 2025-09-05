import React, { useState } from 'react'
import './Experience.scss'
import { experiences } from '../../data/experienceData'
import type { ExperienceItem } from '../../data/experienceData'
import ExperienceDetailView from '../ExperienceDetailView/ExperienceDetailView'

const Experience = () => {

    const [selected, setSelected] = useState<ExperienceItem | null>(null);

  return (
    <div className='experience container'>
        <h1 className='title'>Experience</h1>
        <div className="experience-layout">
            {/*Left Side */}
            <div className="experience-list">
                {experiences.map((exp) => (
                    <div key={exp.id} className="exp-blog" onMouseEnter={() => setSelected(exp)} onMouseLeave={() => setSelected(null)}>
                        <p className="time-period">{exp.period}</p>
                        <p className="employer">{exp.employer}</p>
                        <p className="role">{exp.role}<span>{exp.roleHighlight}</span></p>
                        <ul className='skills'>
                            {exp.skills.map((s,i) => (
                                <li key={i}>{s}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/*Right Side */}
            <ExperienceDetailView experience={selected}/>
        </div>
    </div>
  )
}

export default Experience