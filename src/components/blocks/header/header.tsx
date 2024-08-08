import React from 'react';
import style from './header.module.scss'
import NavigationMenu from './components/blocks/navigationMenu/navigationMenu';
import Button from '../../ui/buttons/button1/button';
const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.top + ' container'}>
                <div className={style.schedule}>
                    <img src="\src\assets\watch.svg" />
                    <span> OPENING HOURS : </span>
                    08:00 AM - 09:00 PM
                </div>
                <div className={style.media}>
                    <a href="">
                    </a>
                    <a href="">
                    </a>
                    <a href="">
                    </a>
                    <a href="">
                    </a>
                </div>
                <div className={style.location}>
                    <span>LOCATION : </span>
                    55 MAIN STREET, NEW YORK
                </div>
            </div>
            <div className={style.bottom + ' container'}>
                <div className={style.logo}>
                    coffee
                </div>
                <NavigationMenu/>
                <Button>
                    Book a table
                </Button>
            </div>
        </header>
    );
};

export default Header;