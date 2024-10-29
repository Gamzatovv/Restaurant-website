import style from './Brands.module.scss'

import brandImage1 from '../../../../public/brands/brand1.png'
import brandImage2 from '../../../../public/brands/brand2.png'
import brandImage3 from '../../../../public/brands/brand3.png'
import brandImage4 from '../../../../public/brands/brand4.png'
import brandImage5 from '../../../../public/brands/brand5.png'
import brandImage6 from '../../../../public/brands/brand6.png'

const BrandsComponent = () => {

    const brandImages = [
        brandImage1,
        brandImage2,
        brandImage3,
        brandImage4,
        brandImage5,
        brandImage6,
    ]

    return (
        <div className={style.BrandsComponent}>
            <div className={`${style.wrapper} ${' container'}`}>
                {brandImages.map(image=>(
                    <img
                    className={style.BrandImage}
                    src={image}
                    />  
                ))}
            </div>
        </div>
    );
};

export default BrandsComponent;