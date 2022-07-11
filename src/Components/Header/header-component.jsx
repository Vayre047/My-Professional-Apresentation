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
        }
    ];

    return (
        <div className='header'>
            <ul className='headerSettings d-inline d-flex justify-content-end list-unstyled'>
                <Link className='linkHome p-3' to='/'>
                    <img className='homeImg' width={30} src="../../Images/home-icon.png" alt="Home Icon" />
                </Link>
                {MenuHeader.map((i, index) => (
                    <li className='list p-3' key={index}>
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