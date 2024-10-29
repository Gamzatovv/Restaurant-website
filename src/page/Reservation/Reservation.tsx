import style from './Reservation.module.scss'
import ReservationForm from '../../components/common/ReservationForm/ReservationForm';
import TopParallax from '../../components/common/TopParallax/TopParallax';
import ImageGallery from '../../components/common/ImageGallery/ImageGallery';
import Brands from '../../components/common/Brands/Brands';

const Reservation = () => {
    return (
        <div>
            <section>
                <TopParallax
                title={'Reservation'}
                imagePath={'background/aboutUsPage/image4.jpg'}/>
            </section>
            <section className={style.reservationWrapper}>
                <ReservationForm/>
            </section>
            <section className={style.imageGalleryWrapper}>
                <ImageGallery/>
            </section>
            <section className={style.BrandsWrapper }>
                <Brands/>
            </section>
        </div>
    );
};

export default Reservation;