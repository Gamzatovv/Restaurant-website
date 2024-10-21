import style from './ImageGalleryComponent.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import image1 from '../../../../public/imageGalleryComponent/ImageGalleryComponent1.jpg';
import image2 from '../../../../public/imageGalleryComponent/ImageGalleryComponent2.jpg';
import image3 from '../../../../public/imageGalleryComponent/ImageGalleryComponent3.jpg';
import image4 from '../../../../public/imageGalleryComponent/ImageGalleryComponent4.jpg';
import image5 from '../../../../public/imageGalleryComponent/ImageGalleryComponent5.jpg';
import image6 from '../../../../public/imageGalleryComponent/ImageGalleryComponent6.jpg';

const ImageGalleryComponent = () => {













    return (
        <div className={style.ImageGalleryComponent}>
            <div className='container'>
                <Swiper
                style={{
                    overflow: 'unset',
                    position: 'unset'
                }}
                slidesPerView={'auto'}
                loop={true}
                speed={1000}
                // centeredSlides={true}
                // slidesOffsetBefore={offset}
                modules={[Pagination, FreeMode]}
                
                >

                    <SwiperSlide style={{width: '382px'}}>
                            <img src={image1} />
                    </SwiperSlide>
                    <SwiperSlide style={{width: '382px'}}>
                            <img src={image2} />
                    </SwiperSlide>
                    <SwiperSlide style={{width: '382px'}}>
                            <img src={image3} />
                    </SwiperSlide>
                    <SwiperSlide style={{width: '382px'}}>
                            <img src={image4} />
                    </SwiperSlide>
                    <SwiperSlide style={{width: '382px'}}>
                            <img src={image5} />
                    </SwiperSlide>
                    <SwiperSlide style={{width: '382px'}}>
                            <img src={image6} />
                    </SwiperSlide>
                    
                </Swiper>
                </div>
        </div>
    );
};

export default ImageGalleryComponent;