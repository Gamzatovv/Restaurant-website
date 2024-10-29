import style from './TopSlider.module.scss';

import Button from '../../../../components/ui/button1/button';
import NavigationButtons from './NavigationButtons/NavigationButtons';

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

const TopSlider = () => {

    const slideItems: SlideItem[] = [
        {
            topText: 'Welcome to the kaffen',
            description: 'Export The Lobsters',
            image: 'slide1'
        },
        {
            topText: 'Welcome to the kaffen',
            description: 'Premium Meat Kaffen',
            image: 'slide2'
        },
        {
            topText: 'Welcome to the kaffen',
            description: 'Reserve Your Table Today',
            image: 'slide3'
        }
    ] 

    return (
        <>
            <div className={style.TopSlider}>
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
                            strength={200} 
                            bgImage={'../../../../public/mainSlider/' + slideItem.image + '.jpg'} 
                            bgImageStyle={{  height: '100vh' }}
                            >
                                <div  className={style.slide}>
                                    <div className={style.content}>
                                        <div className={style.topText}>
                                            <div className={style.topTextLine}>

                                            </div>
                                            {slideItem.topText}
                                        </div>
                                        <div className={style.description}>
                                            {slideItem.description}
                                        </div>
                                        <div className={style.buttonBlock}>
                                            <div className={style.buttonWrapper}>
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
        </>
    );
};

export default TopSlider;