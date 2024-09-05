import React from 'react';
import style from './NavigationMenu.module.scss';

const NavigationMenu = () => {
    return (
        <ul className={style.navigation}>
            <li>
                <a href="#">
                    Home
                </a>
            </li>
            <li>
                <a href="#">
                    About
                </a>
            </li>
            <li>
                <a href="#">
                    Menu
                </a>
                
            </li>
            <li>
                <a href="#">
                    Pages                
                </a>
            </li>
            <li>
                <a href="#">
                    Blog
                </a>
            </li>
            <li>
                <a href="#">
                    Contacts                
                </a>
            </li>
            
        </ul>
    );
};

export default NavigationMenu;