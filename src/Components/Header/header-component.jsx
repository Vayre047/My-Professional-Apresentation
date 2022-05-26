import { Link } from 'react-router-dom';
import './header-component.scss';

function Header() {
    const MenuHeader = [
        {
            title: 'Personal Life',
            to: '/personal-life'
        },
        {
            title: 'Professional Career',
            to: '/professional-career'
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
                    <img className='homeImg' width={30} src="../../images/home-icon.png" alt="Home Icon" />
                </Link>
                {MenuHeader.map((i, index) => (
                    <li className='list' key={index}>
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