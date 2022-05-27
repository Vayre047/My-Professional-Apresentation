import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './homepage-component.scss';

function Homepage() {
    return(
        <div>
            <div className='grid-homepage-container'>
                <div className='gridImage'>
                    <img className='imageSizing' src="../../Images/tomas-borda-de-agua.png" alt="Image Profissional" />
                </div>
                <div className='gridFullName'>
                    <h1>Tomás Borda de Água</h1>
                </div>
                <div className='gridBornDate'>
                    <p>08/04/1994</p>
                </div>
                <div className='gridInformation'>
                    <p>Do you want to know more about me ? Discover below ...</p>
                </div>
                <div className='gridSkills'>
                    <HashLink className='linkPosition' smooth to={'/professional-career#skills'}>Skills</HashLink>
                </div>
                <div className='gridProjects'>
                    <HashLink className='linkPosition' smooth to={'/professional-career#projects'}>Projects</HashLink>
                </div>
                <div className='gridHobbies'>
                    <HashLink className='linkPosition' smooth to={'/personal-life#hobbies'}>Hobbies</HashLink>
                </div>
            </div>
        </div>
    )
}

export default Homepage;