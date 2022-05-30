import { Skills } from './skills-db.jsx'
import './professional-career-component.scss';

function ProfissionalCareer() {
    return (
        <div>
            <div>
                <div id="skills">
                    <p className='titlePosition'>Skills</p>
                </div>
                <div className='skillsConfiguration'>
                    <ul>
                        {Skills.map((skill, index) =>(
                            <li key={index}>
                                <img src={skill.Image} alt="Programming Language" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div id="projects">
                <p className='titlePosition'>Projects</p>
            </div>
        </div>
    )
}

export default ProfissionalCareer;