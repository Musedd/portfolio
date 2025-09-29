import './Skills.scss'
import {skills} from '../../data/skillsData'


const Skills = () => {
  return (
    <>
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

    </>
  )
}

export default Skills