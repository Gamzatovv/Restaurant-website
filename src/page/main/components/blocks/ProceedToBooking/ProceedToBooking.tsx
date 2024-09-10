import style from './ProceedToBooking.module.scss';
import Button from '../../../../../components/ui/buttons/Button1/Button';

const ProceedToBooking = () => {
    return (
        <div className={style.ProceedToBooking}>
            <div className={style.contentBox + ' container'}>
                <div className={style.infoBlock}>
                    <div className={style.subtitle}>
                        Need a table on coffee house
                    </div>
                    <h3 className={style.title}>
                        Booking Table For Your & Family Members
                    </h3>
                </div>
                <Button>
                    Booking table
                </Button>
            </div>
        </div>
    );
};

export default ProceedToBooking;