import React from 'react';

import style from './BrandsComponent.module.scss';

import brandImage1 from '../../../../public/brands/brand1.png';
import brandImage2 from '../../../../public/brands/brand2.png';
import brandImage3 from '../../../../public/brands/brand3.png';
import brandImage4 from '../../../../public/brands/brand4.png';
import brandImage5 from '../../../../public/brands/brand5.png';
import brandImage6 from '../../../../public/brands/brand6.png';

const BrandsComponent = () => {
    return (
        <div className={style.BrandsComponent}>
            <img
            className={style.Brandimage}
            src={brandImage1}
            />            
            <img
            className={style.Brandimage}
            src={brandImage2}
            />            
            <img
            className={style.Brandimage}
            src={brandImage3}
            />            
            <img
            className={style.Brandimage}
            src={brandImage4}
            />            
            <img
            className={style.Brandimage}
            src={brandImage5}
            />            
            <img
            className={style.Brandimage}
            src={brandImage6}
            />            
        </div>
    );
};

export default BrandsComponent;