import style from './TopSlider.module.scss'

import { Parallax } from 'react-parallax';

const TopBlock = () => {
    return (
        <div className={style.TopSlider}>
            <Parallax 
            strength={250} 
            bgImage={'../../../../../../public/background/aboutUsPage/image1.jpg'} 
            bgImageStyle={{ width: '100%'}}
            >
                <div className={style.TopSliderBlock + ' container'}>
                    <h2 className={style.title}>
                        About Us
                    </h2>  
                </div>
            </Parallax>
        </div>
    );
};

export default TopBlock;