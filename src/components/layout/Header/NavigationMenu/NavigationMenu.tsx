import style from './NavigationMenu.module.scss';
import { Link } from 'react-router-dom';
import cart from '../../../../../public/icons/something/shoppingСart.png'

const NavigationMenu = () => {

    const links = [
        {
            link: '/',
            name: 'Home',
        },
        {
            link: '/Menu',
            name: 'Menu',
        },
        {
            link: '/AboutUs',
            name: 'About',
        },
        {
            link: '/Reservation',
            name: 'Reservation',
        },
        {
            link: '/Contacts',
            name: 'Contacts',
        },
        {
            link: '/Cart',
            image: cart,
        },
    ]

    return (
        <nav className={style.NavigationMenu}>
            <ul className={style.list}>
                {links.map(item=>(
                   <Link to={item.link}>
                        <li className={style.listItem}>
                            <span>
                                {item.name}
                            </span>
                            {item.image ? <img src={item.image} /> : null}
                        </li>
                    </Link> 
                ))}
            </ul>
        </nav>
    );
};

export default NavigationMenu;