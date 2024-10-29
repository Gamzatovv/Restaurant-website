import style from './Reservation.module.scss'
import ReservationForm from '../../../../components/common/ReservationForm/ReservationForm';
const Reservation = () => {
    return (
        <div className={style.reservation}>
            <div className={style['image-left']}></div>
            <ReservationForm/>
            <div className={style['image-right']}></div>
        </div>
    );
};



export default Reservation;