import React from 'react';
import style from './NavigationMenu.module.scss';
import { Link } from 'react-router-dom';
import arrow1 from '../../../../../../../public/icons/something/arrow.png'

const NavigationMenu = () => {
    return (
        <nav className={style.NavigationMenu}>
            <ul className={style.nav}>
                <Link to={'/'}>
                    <li className={style.navItem}>
                            <span>
                                Home
                            </span>
                    </li>
                </Link>
                <Link to={'/Menu'}>
                    <li className={style.navItem}>
                        <span>
                            Menu
                        </span>
                    </li>
                </Link>
                <Link to={'/AboutUs'}>
                    <li className={style.navItem}>
                        <span>
                            About
                        </span>
                    </li>
                </Link>
                <Link to={'/Reservation'}>
                    <li className={style.navItem}>
                        <span>
                            Reservation
                        </span>
                    </li>
                </Link>
                <Link to={'/Contacts'}>
                    <li className={style.navItem}>
                        <span>
                            Contacts
                        </span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default NavigationMenu;