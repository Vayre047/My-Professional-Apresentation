import { Link } from 'react-router-dom';
import './header-component.scss'

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
        <div>
            <ul className='headerSettings'>
                {MenuHeader.map((i, index) => (
                    <li key={index}>
                        {
                            <Link className='styleList' to={i.to}>{i.title}</Link>
                        }
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    )
}

export default Header;