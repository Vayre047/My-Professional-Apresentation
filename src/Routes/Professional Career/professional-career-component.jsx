import { Link } from 'react-router-dom';
import { Skills } from './skills-db.jsx'
import './professional-career-component.scss';

function ProfissionalCareer() {
    return (
        <div>
            <div className='container p-2 pb-5'>
                <div className="row">
                    <p className='h1 text-center pb-4 titleConfiguration'>Background</p>
                    <div class="card-group">
                        <div class="card text-center border-0">
                            <img src="../../../Images/accounting.jpeg" class="card-img-top imageConfiguration px-2" alt="Accounting" />
                            <div class="card-body pt-4">
                                <h5 class="card-title h2 titleConfiguration">Accounting</h5>
                                <p class="card-text">Acquisition of knowledge in Accounting, focused meanly on financial calculation, methods and economic and financial analysis techniques, carrying out IRS, IRC and accounting codes and standards accounting.</p>
                            </div>
                        </div>
                        <div class="card text-center border-0 figure">
                            <img src="../../../Images/navy-icon.jpg" class="card-img-top imageConfiguration px-2" alt="Portuguese Navy" />
                            <div class="card-body pt-4">
                                <h5 class="card-title h2 titleConfiguration">Portuguese Navy</h5>
                                <p class="card-text">24-hour navigation in the corvette NRP João Roby on missions to stop the entry of drugs into Portugal. Participation in search and rescue missions within the scope of the Portuguese coast patrol. Navigation on the frigate NRP Álvares Cabral in exercises such as CONTEX-PHIBEX 21 with the aim of detect and identify damaged submarines through naval means with the help of sonar multibeam.</p>
                            </div>
                        </div>
                        <div class="card text-center border-0">
                            <img src="../../../Images/full-stack-web-developer.jpeg" class="card-img-top imageConfiguration px-2" alt="Full Stack Web Developer" />
                            <div class="card-body pt-4">
                                <h5 class="card-title h2 titleConfiguration">Full Stack Web Developer</h5>
                                <p class="card-text">Learned about: HTML5, CSS3, JavaScript (React and Angular), Git, MySQL, PHP, Rest API'S, MondoDB, NodeJS, ExpressJS.
                                I had a chance to prove my skills in front-end and back-end dev by doing a website to stream Films and Series (see below)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="skills">
                        <p className='h1 text-center pb-4 titleConfiguration'>Skills</p>
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
                    <p className='h1 text-center titleConfiguration'>Projects</p>
                    <div className='card col-6 text-center pt-3 pb-3 projectDetails'>
                        <p className='h3 titleConfiguration'>TBAFlix</p>
                        <p>TBAFlix is the front-end final project of my course and is where you can watch your favourite series and movies. This project was built with HTML5, CSS3 and JavaScript using React framework. This project helped me to consolidate my logical thinking and my skills in my frot-end skills.</p>
                        <Link className='linkDetail' to='https://github.com/Vayre047/ProjectoFront-EndReact'>Front-End Project link to GitHub Repository</Link>
                    </div>
                    <div className='card col-6 text-center pt-3 pb-3 projectDetails'>
                        <p className='h3 titleConfiguration'>Initial Shop</p>
                        <p></p>
                        <Link className='linkDetail' to='https://github.com/Vayre047/Initial-Shop'>Initial Shop link to GitHub Repository</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfissionalCareer;