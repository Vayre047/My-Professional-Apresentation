import { Skills } from './skills-db.jsx'
import './professional-career-component.scss';

function ProfissionalCareer() {
    return (
        <div>
            <div>
                <div id="skills">
                    <p className='h1 text-center'>Skills</p>
                </div>
                <div className='skillsConfiguration'>
                    {Skills.map((skill, index) =>(
                        <div className='listSkills' key={index}>
                            <img src={skill.Image} alt="Programming Language" />
                        </div>
                    ))}
                </div>
            </div>
            <div id="projects">
                <p className='h1 text-center'>Projects</p>
            </div>
        </div>
    )
}

export default ProfissionalCareer;