import style from './MessageForm.module.scss';
import Button from '../../../../components/ui/button1/button';

import imageforInput1 from '../../../../../public/icons/reservationForm/user.png'
import imageforInput2 from '../../../../../public/icons/reservationForm/phone.png'

const MessageForm = () => {
    return (
        <div className={style.MessageForm}>
            <div className={style.subTitle}>
                Concat us
            </div>
            <h3 className={style.title}>
                Send Us Message
            </h3>
            <form className={style.form}>
                <div className={style.UserInfo}>
                    <div className={style.UserInfoInputBox}>
                        <input 
                        className={style.userInfoInput}
                        type="text" 
                        placeholder='Full Name' 
                        name='name' 
                        />
                        <img 
                        className={style.userInfoInputImage}
                        src={imageforInput1}/>
                    </div>
                    <div className={style.UserInfoInputBox}>
                        <input
                        className={style.userInfoInput}
                        type="email" 
                        placeholder='Email Address' 
                        name='email' 
                        />
                        <div className={`${style.userInfoInputImage} ${style.characterEmail}`} >
                            @
                        </div>
                    </div>
                    <div className={style.UserInfoInputBox}>
                        <input
                        className={style.userInfoInput}
                        type="tel" 
                        placeholder='Phone Number' 
                        name='phoneNumber' 
                        />
                        <img 
                        className={style.userInfoInputImage}
                        src={imageforInput2}/>
                    </div>
                </div>

                <input 
                className={style.subjectInput}
                type="text" 
                placeholder='Subject' 
                name='subject'  
                />

                <textarea 
                className={style.messageInput}
                placeholder='Message' 
                name="message"
                required
                ></textarea>

                <div className={style.formButton}>
                    <Button>
                        Send us message
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MessageForm;