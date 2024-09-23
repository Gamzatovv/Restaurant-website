import style from './Reservation.module.scss'
import ReservationForm from '../../../../../components/blocks/Reservation/ReservationForm';
const Reservation = () => {
    return (
        <div className={style.reservation}>
            
            <div className={style.reservationBlock}>
                <div className={style['image-left']}></div>
                <ReservationForm/>
                <div className={style['image-right']}></div>
            </div>
        </div>
    );
};



export default Reservation;