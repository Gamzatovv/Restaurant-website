import React from 'react';
import style from './mainSlider.module.scss';
import Button from '../../ui/buttons/button1/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import NavigationButtons from './components/ui/navigationButtons/navigationButtons';
interface Props {
    slideItems: []

}

const MainSlider = ({slideItems}: Props) => {
    return (
        <div className={style.block}>
            <Swiper
            modules={[Autoplay]}
            speed={1000}
            loop={true}
            autoplay={{
                delay: 10000,
            }}
            >
                {slideItems.map((slideItem)=>(
                    <SwiperSlide>
                            <div style={{backgroundImage: ` linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(../../../../public/mainSlider/${slideItem.img}.jpg)`}} className={style.slide}>
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
                    </SwiperSlide>
                ))}
                <NavigationButtons/>
            </Swiper>
        </div>
    );
};

export default MainSlider;