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
                        <li>
                            <img src="../../../Images/html-icon.png" alt="HTML Icon" />
                        </li>
                        <li>
                            <img src="../../../Images/css-icon.png" alt="CSS Icon" />
                        </li>
                        <li>
                            <img src="../../../Images/bootstrap-icon.png" alt="Bootstrap Icon" />
                        </li>
                        <li>
                            <img src="../../../Images/sass-icon.png" alt="SASS Icon" />
                        </li>
                        <li>
                            <img src="../../../Images/javascript-icon.png" alt="JavaScript Icon" />
                        </li>
                        <li>
                            <img src="../../../Images/angular-icon.png" alt="Agular Icon" />
                        </li>
                        <li>
                            <img src="../../../Images/react-icon.png" alt="React Icon" />
                        </li>
                        <li>
                            <img src="../../../Images/github-icon-1.png" alt="React Icon" />
                        </li>
                        <li>
                            <img src="../../../Images/php-icon.png" alt="React Icon" />
                        </li>
                        <li>
                            <img src="../../../Images/mysql-icon.png" alt="React Icon" />
                        </li>
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