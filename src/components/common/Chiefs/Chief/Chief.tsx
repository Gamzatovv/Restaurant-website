import style from './Chief.module.scss'
import messenger1 from '../../../../../public/icons/messengers/messenger1.png'
import messenger2 from '../../../../../public/icons/messengers/messenger2.png'
import messenger3 from '../../../../../public/icons/messengers/messenger3.png'
import messenger4 from '../../../../../public/icons/messengers/messenger4.png'

interface Chief {
    id: number,
    name: string,
    level: string,
    image: string,
    email: string,
    ['phone number']: string,
  }
  
  interface Props {
    chief: Chief,
    backgroundCard: string,
  }

const Chief = ({chief, backgroundCard}: Props) => {
    return (
        <div 
        className={style.Chief}
        style={{
            backgroundColor: backgroundCard,
        }}
        >
            <div className={style.name}>
                {chief.name}
            </div>
            <div className={style.level}>
                {chief.level + ' Chefs'}
            </div>
            <div 
            className={style.photoInfo}
            style={{
                backgroundImage:`url(/chiefs/${chief.image})`,
            }}>
                <div className={style.photoInfoContent}>
                    <div className={style.email}>
                        {chief.email}
                    </div>
                    <div className={style.phoneNumber}>
                        {chief['phone number']}
                    </div>
                    <div className={style.messengersList}>
                        <a href="#">
                            <img src={messenger1} />
                        </a>
                        <a href="#">
                            <img src={messenger2} />
                        </a>
                        <a href="#">
                            <img src={messenger3} />
                        </a>
                        <a href="#">
                            <img src={messenger4} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chief;