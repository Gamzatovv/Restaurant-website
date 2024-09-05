import React, { ReactNode } from 'react';
import style from './Button.module.scss';

type ButtonProps = {
    children: ReactNode,
}
const Button = ({children}: ButtonProps) => {
    return (
        <button className={style.button}>
            {children} <div></div>
        </button>
    );
};

export default Button;