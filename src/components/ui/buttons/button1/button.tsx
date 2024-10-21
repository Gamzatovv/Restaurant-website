import { ReactNode } from 'react';
import style from './Button.module.scss';
import arrow from '../../../../../public/icons/something/arrow.png';

type ButtonProps = {
    children: ReactNode,
}
const Button = ({children}: ButtonProps) => {
    return (
        <button className={style.button}>
            {children} 
            <img 
            src={arrow}
            className={style.arrow} />
        </button>
    );
};

export default Button;