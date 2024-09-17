import React from 'react';
import style from './MainSlider.module.scss';

import Button from '../../ui/buttons/Button1/Button';
import NavigationButtons from './components/ui/NavigationButtons/NavigationButtons';

import { Parallax } from 'react-parallax';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface SlideItem {
    topText: string;
    description: string;
    image: string;
}

interface Props {
    slideItems: SlideItem[]

}
// style={{backgroundImage: ` linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(../../../../public/mainSlider/${slideItem.img}.jpg)`}}
const MainSlider = ({slideItems}: Props) => {
    return (
        <div className={style.block}>
            <Swiper
            modules={[Autoplay]}
            speed={1000}
            loop={true}
            autoplay={{
                delay: 10000,
            }}>
            
                {slideItems.map((slideItem)=>(
                    <SwiperSlide>
                        <Parallax 
                        strength={500} 
                        bgImage={'../../../../public/mainSlider/' + slideItem.image + '.jpg'} 
                        bgImageStyle={{height: '110%', width: '110%'}}
                        >
                            <div  className={style.slide}>
                                <div className={style.content}>
                                    <div className={style['top-text']}>
                                        <div>

                                        </div>
                                        {slideItem.topText}
                                    </div>
                                    <div className={style.description}>
                                        {slideItem.description}
                                    </div>
                                    <div className={style['button-block']}>
                                        <div className={style.button}>
                                            <Button>
                                                Explore more
                                            </Button>
                                        </div>
                                        <div className={style.button}>
                                            <Button>
                                                Get delivery
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </SwiperSlide>
                ))}
                <NavigationButtons/>
            </Swiper>
        </div>
    );
};

export default MainSlider;