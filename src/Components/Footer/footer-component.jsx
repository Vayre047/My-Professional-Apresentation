import { Link } from 'react-router-dom';
import './footer-component.scss';

function Footer() {
    const SocialLinks = [
        {
            image: '../../images/facebook-icon.png',
            to: 'https://www.facebook.com/tomas.agua.7'
        },
        {
            image: '../../images/github-icon.png',
            to: 'https://github.com/Vayre047'
        },
        {
            image: '../../images/linkedin-icon.png',
            to: 'https://www.linkedin.com/in/tom%C3%A1s-borda-de-%C3%A1gua-806473144/'
        }
    ];

    return (
        <div id='footer'>
            <ul className='socialPosition'>
                {SocialLinks.map((i, index) => (
                    <li key={index}>
                        {
                            <Link className='socialStyle' to={i.to}>
                                <img className='socialBackground' src={i.image} alt="Social Link Images" />
                            </Link>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Footer;