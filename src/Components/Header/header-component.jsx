import { Link } from 'react-router-dom';
import './header-component.scss';

function Header() {
    const MenuHeader = [
        {
            title: 'Personal Life',
            to: '/personalLife'
        },
        {
            title: 'Professional Career',
            to: '/professionalCareer'
        },
        {
            title: 'Contacts',
            to: '/contacts'
        }
    ];

    return (
        <div className='header'>
            <ul className='headerSettings'>
                <Link to='/'>
                    <img className='homeImg' width={40} src="../../images/home-icon.png" alt="Home Icon" />
                </Link>
                {MenuHeader.map((i, index) => (
                    <li key={index}>
                        {
                            <Link className='styleList' to={i.to}>{i.title}</Link>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header;