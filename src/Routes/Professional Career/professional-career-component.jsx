import { Skills } from './skills-db.jsx'
import './professional-career-component.scss';

function ProfissionalCareer() {
    return (
        <div>
            <div className='container p-2 pb-5'>
                <div className="row">
                    <p className='h1 text-center pb-4'>Background</p>
                    <div class="card-group">
                        <div class="card text-center border-0">
                            <img src="../../../Images/accounting.jpeg" class="card-img-top imageConfiguration px-2" alt="Accounting" />
                            <div class="card-body pt-4">
                                <h5 class="card-title h2">Accounting</h5>
                                <p class="card-text">Acquisition of knowledge in Accounting, focused meanly on financial calculation, methods and economic and financial analysis techniques, carrying out IRS, IRC and accounting codes and standards accounting.</p>
                            </div>
                        </div>
                        <div class="card text-center border-0 figure">
                            <img src="../../../Images/navy-icon.jpg" class="card-img-top imageConfiguration px-2" alt="Portuguese Navy" />
                            <div class="card-body pt-4">
                                <h5 class="card-title h2">Portuguese Navy</h5>
                                <p class="card-text">24-hour navigation in the corvette NRP João Roby on missions to stop the entry of drugs into Portugal. Participation in search and rescue missions within the scope of the Portuguese coast patrol. Navigation on the frigate NRP Álvares Cabral in exercises such as CONTEX-PHIBEX 21 with the aim of detect and identify damaged submarines through naval means with the help of sonar multibeam.</p>
                            </div>
                        </div>
                        <div class="card text-center border-0">
                            <img src="../../../Images/full-stack-web-developer.jpeg" class="card-img-top imageConfiguration px-2" alt="Full Stack Web Developer" />
                            <div class="card-body pt-4">
                                <h5 class="card-title h2">Full Stack Web Developer</h5>
                                <p class="card-text">Learned about: HTML5, CSS3, JavaScript (React and Angular), Git, MySQL, PHP, Rest API'S, MondoDB, NodeJS, ExpressJS.
                                I had a chance to prove my skills in front-end and back-end dev by doing a website to stream Films and Series (see below)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="skills">
                        <p className='h1 text-center pb-4'>Skills</p>
                    </div>
                    <div className='skillsConfiguration row'>
                        {Skills.map((skill, index) =>(
                            <div className='col-6 col-md-3 ps-5' key={index}>
                                <img src={skill.Image} alt="Programming Language" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <p className='h1 text-center'>Projects</p>
                </div>
            </div>
        </div>
    )
}

export default ProfissionalCareer;