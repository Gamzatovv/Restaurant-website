import style from './ProceedToBooking.module.scss';
import Button from '../../ui/button1/button';
import Title from '../Title/Title';

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
                    <Title 
                        subTitle='Need a table on coffee house'
                        title='Booking Table For Your & Family Members'
                        horizontalPosition='left'
                    />
                </div>
                <Button>
                    Booking table
                </Button>
            </div>
        </div>
    );
};

export default ProceedToBooking;