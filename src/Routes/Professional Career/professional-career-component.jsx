import { Skills } from './skills-db.jsx'
import { Professional } from '../../Components/Card/professional-db.jsx'
import { ProjectsDB } from '../../Components/Projects/projects-db.jsx';
import './professional-career-component.scss';
import Star from '../../Components/Star/star.component.jsx';
import Card from '../../Components/Card/card-component.jsx';
import Projects from '../../Components/Projects/projects-component.jsx';

function ProfissionalCareer() {
    
    return (
        <div>
            <div className='container p-2 pb-5'>
                <div className="row pt-4">
                    <p className='h1 text-center pb-4 title'>Background</p>
                    <div class="card-group">
                        {Professional.map((x, index) =>( 
                            <Card data={x} />
                        ))}
                    </div>
                </div>
                <div id="skills" className="row">
                        <p className='h1 text-center pb-4 title'>Skills</p>
                    <div className='skillsConfiguration row'>
                        {Skills.map((skill, index) =>(
                            <div className='col-6 col-md-3 ps-5 pt-4' key={index}>
                            <a target={'_blank'} href={skill.Link}>
                                <img className='skillsimg' src={skill.Image} alt="Programming Language" />
                            </a>
                            <Star rate={skill.Rate}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="projects" className="row py-5 mt-4">
                    <p className='h1 text-center title pb-2'>Projects</p>
                        {ProjectsDB.map((x, index) =>( 
                            <Projects data={x} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ProfissionalCareer;