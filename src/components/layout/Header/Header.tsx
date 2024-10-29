import style from './Header.module.scss'
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Button from '../../ui/button1/button';

const Header = () => {
    return (
        <header className={style.Header}>
            <div className={style.bottom}>
                <div className={style.logo}>
                    Kaffen
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