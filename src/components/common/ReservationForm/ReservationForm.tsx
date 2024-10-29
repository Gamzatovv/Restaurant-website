import style from './ReservationForm.module.scss'

import userImage from '../../../../public/icons/reservationForm/user.png'
import phoneImage from '../../../../public/icons/reservationForm/phone.png'
import calendarImage from '../../../../public/icons/reservationForm/calendar.png'
import watchImage from '../../../../public/icons/something/watch.png'
import arrowImage from '../../../../public/icons/something/arrow.png'

import Title from '../Title/Title'
import Button from '../../ui/button1/button'

const Reservation = () => {
    return (
        <div className={style.reservation}>
            <Title 
                subTitle='booking table'
                title='Make Your Reservation'
                horizontalPosition='center'
            />
            <form className={style.form}>
                <div className={style.item}>
                    <input
                    className={style.itemInput}
                    type="text" 
                    placeholder='Full Name' 
                    name='name' 
                    />
                    <img className={style.image} src={userImage}/>
                </div>

                <div className={style.item}>
                    <input
                    className={style.itemInput}
                    type="email" 
                    placeholder='Email Address' 
                    name='email' 
                    />
                    <div className={`${style.image} ${style.characterEmail}`} >
                        @
                    </div>
                </div>

                <div className={style.item}>
                    <input
                    className={style.itemInput}
                    type="tel" 
                    placeholder='Phone Number' 
                    name='phoneNumber' 
                    />
                    <img className={style.image}  src={phoneImage}/>
                </div>

                <div className={style.item}>
                    
                    <select>
                        <option value="1" selected>1 Person</option>
                        <option value="2">2 Person</option>
                        <option value="3">3 Person</option>
                        <option value="4">4 Person</option>
                    </select>
                    <img 
                    className={`${style.image} ${style.imageArrow}`} 
                    src={arrowImage}/>
                </div>

                <div className={style.item}>
                    <input
                    className={`${style.itemInput} ${style.itemInputDate}`}
                    type="date" 
                    name='name' 
                    />
                    <img 
                    className={`${style.image} ${style.imageCalendar}`}
                    src={calendarImage}/>
                </div>
                
                <div className={style.item}>
                    <input
                    className={style.itemInput}
                    type="text" 
                    placeholder='Time' 
                    name='name' 
                    />
                    <img 
                    className={`${style.image} ${style.imageWatch}`} 
                    src={watchImage}/>
                </div>
                <div className={style.buttonBox}>
                    <Button>
                        Booking table
                    </Button>
                </div>
            </form>     
        </div>
    );
};



export default Reservation;