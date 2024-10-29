import style from './ProceedToBooking.module.scss';
import Button from '../../ui/button1/button';

interface Props {
    background: string;
}

const ProceedToBooking = ({background}: Props) => {
    return (
        <div 
        style={{backgroundImage: `url(/public/background/ProceedToBooking/${background})`}}
        className={style.ProceedToBooking}>
            <div className={style.contentWrapper + ' container'}>
                <div className={style.titleBlock}>
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