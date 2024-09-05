import React from 'react';
import style from './Header.module.scss'
import NavigationMenu from './components/blocks/NavigationMenu/NavigationMenu';
import Button from '../../ui/buttons/Button1/Button';
import watchImage from '../../../../public/icons/something/watch.png'
const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.top}>
                <div className={style.schedule}>
                    <img src={watchImage} />
                    <div>
                        <span> OPENING HOURS : </span>
                        08:00 AM - 09:00 PM
                    </div>
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
            <div className={style.bottom}>
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