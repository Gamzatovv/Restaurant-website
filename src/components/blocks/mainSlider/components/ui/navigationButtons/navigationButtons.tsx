import React from 'react';

import { useSwiper } from 'swiper/react';
import style from './NavigationButtons.module.scss'
const NavigationButtons = () => {
    const swiper = useSwiper();
    return (
        <div className={style.navigationButtons}>
            <div className={style.prev} onClick={()=>swiper.slidePrev()}>
                <img src="" />
            </div>
            <div className={style.next} onClick={()=>swiper.slideNext()}>
            <img src="" />
            
            </div>
        </div>
    );
};

export default NavigationButtons;