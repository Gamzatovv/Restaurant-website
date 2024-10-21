import style from './Form.module.scss';
import userImage from '../../../../../../public/icons/reservationForm/user.png';
import phoneImage from '../../../../../../public/icons/reservationForm/phone.png';
import Button1 from '../../../../../components/ui/buttons/Button1/Button';

const Form = () => {
    return (
        <form className={style.Form}>
            <div className={style.item}>
                    <input
                    className={style.input}
                    type="text" 
                    placeholder='Full Name' 
                    name='name' 
                    />
                    <img className={style.image} src={userImage}/>
                </div>

                <div className={style.item}>
                    <input
                    className={style.input}
                    type="tel" 
                    placeholder='Phone Number' 
                    name='phoneNumber' 
                    />
                    <img className={style.image}  src={phoneImage}/>
                </div>

                <div className={style.item}>
                    <input
                    className={style.input}
                    type="text" 
                    placeholder='address' 
                    name='address' 
                    />
                </div>
                <div className={style.buttonWrapper}>
                    <Button1 children='place an order'/>
                </div>
        </form>
    );
};

export default Form;