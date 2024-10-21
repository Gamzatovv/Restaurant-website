import style from './Chief.module.scss';
import messenger1 from '../../../../../../../public/icons/messengers/messenger1.png';
import messenger2 from '../../../../../../../public/icons/messengers/messenger2.png';
import messenger3 from '../../../../../../../public/icons/messengers/messenger3.png';
import messenger4 from '../../../../../../../public/icons/messengers/messenger4.png';


interface Chief {
    id: number;
    name: string;
    level: string;
    image: string;
    email: string;
    "phone number": string;
  }
  
  interface ChiefProps {
    chief: Chief;
  }



const Chief = ({chief}: ChiefProps) => {
    return (
        <div className={style.chief}>
            <div className={style.name}>
                {chief.name}
            </div>
            <div className={style.level}>
                {chief.level + ' Chefs'}
            </div>
            <div 
            className={style['photo-info']}
            style={{
                backgroundImage:`url(/chiefs/${chief.image})`,
            }}>
                <div className={style['photo-info__content']}>
                    <div className={style.email}>
                        {chief.email}
                    </div>
                    <div className={style['phone-number']}>
                        {chief['phone number']}
                    </div>
                    <div className={style['messengers-list']}>
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