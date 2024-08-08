import React from 'react';

import { useSwiper } from 'swiper/react';
import style from './navigationButtons.module.scss'
const navigationButtons = () => {
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

export default navigationButtons;