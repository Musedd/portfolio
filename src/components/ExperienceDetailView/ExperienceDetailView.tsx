import React from 'react'
import type { ExperienceItem } from '../../data/experienceData'
import './ExperienceDetailView.scss'

type Props = {
    experience: ExperienceItem | null;
};

const ExperienceDetailView = ({experience}: Props) => {

    if (!experience) {
        return <div className='detail-view-empty'>Hover over a job to see details</div>
        
    }

  return (
    <div className='detail-view'>
        <p>{experience.period}</p>
        <p>{experience.employer}</p>
        <p>{experience.role}<span>{experience.roleHighlight}</span></p>
        <ul>
            {experience.details.map((d, i) => 
                <li key={i}>{d}</li>
            )}
        </ul>
    </div>
  )
}

export default ExperienceDetailView