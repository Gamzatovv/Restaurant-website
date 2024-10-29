import style from './ImageGallery.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import image1 from '../../../../public/imageGalleryComponent/ImageGalleryComponent1.jpg'
import image2 from '../../../../public/imageGalleryComponent/ImageGalleryComponent2.jpg'
import image3 from '../../../../public/imageGalleryComponent/ImageGalleryComponent3.jpg'
import image4 from '../../../../public/imageGalleryComponent/ImageGalleryComponent4.jpg'
import image5 from '../../../../public/imageGalleryComponent/ImageGalleryComponent5.jpg'
import image6 from '../../../../public/imageGalleryComponent/ImageGalleryComponent6.jpg'

const ImageGallery = () => {

        const brandsImage = [
                image1,
                image2,
                image3,
                image4,
                image5,
                image6,   
        ]

    return (
        <div className={style.ImageGallery}>
                <div className='container'>
                        <Swiper
                        style={{
                                overflow: 'unset',
                                position: 'unset'
                        }}
                        slidesPerView={'auto'}
                        loop={true}
                        speed={1000}
                        modules={[Pagination, FreeMode]}
                        >
                                {brandsImage.map(image=>(
                                        <SwiperSlide style={{width: '382px'}}>
                                                <img src={image} />
                                        </SwiperSlide>
                                ))}
                        </Swiper>
                </div>
        </div>
    );
};

export default ImageGallery;