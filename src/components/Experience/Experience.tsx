import { useState } from 'react'
import './Experience.scss'
import { experiences } from '../../data/experienceData'
import type { ExperienceItem } from '../../data/experienceData'
import ExperienceDetailView from '../ExperienceDetailView/ExperienceDetailView'

const Experience = () => {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  // Funktion für Close Button
  const handleClose = () => setSelected(null);

  return (
    <>
      <h1 className='title'>Experience</h1>
      <div className="experience-layout">
        {/* Left Side */}
        <div className="experience-list">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="exp-blog"
              onMouseEnter={() => {
                if (window.innerWidth > 900) setSelected(exp); // nur Desktop
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 900) setSelected(null); // nur Desktop
              }}
              onClick={() => {
                if (window.innerWidth <= 900) setSelected(exp); // nur Mobile
              }}
            >
              <p className="time-period">{exp.period}</p>
              <p className="employer">{exp.employer}</p>
              <p className="role">
                {exp.role}
                <span>{exp.roleHighlight}</span>
              </p>
              <ul className="skills">
                {exp.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="experience-detail-desktop">
          <ExperienceDetailView experience={selected} />
        </div>

        {selected && (
          <div className="experience-detail-mobile">
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>
            <ExperienceDetailView experience={selected} />
          </div>
        )}
      </div>
    </>
  )
}

export default Experience
