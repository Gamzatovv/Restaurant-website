import React from 'react';
import style from './Reservation.module.scss'
import ReservationForm from '../../components/blocks/Reservation/ReservationForm';
import TopParallax from '../../components/blocks/TopParallax/TopParallax';
import ImageGalleryComponent from '../../components/blocks/ImageGalleryComponent/ImageGalleryComponent';
import BrandsComponent from '../../components/blocks/BrandsComponent/BrandsComponent';

const Reservation = () => {
    return (
        <div>
            <TopParallax 
            title={'Reservation'}
            imagePath={'background/aboutUsPage/image4.jpg'}/>
            <div className={style.reservationBlock}>
                <ReservationForm/>
            </div>
            <div className={style.imageGalleryBlock}>
                <ImageGalleryComponent/>
            </div>
            <div className={style.BrandsBlock }>
                <div className='container'>

                <BrandsComponent/>
                </div>
            </div>

        </div>
    );
};

export default Reservation;