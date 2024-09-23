import style from './ContactsCardsBlock.module.scss';
import image1 from '../../../../../../public/icons/something/map.png'
import image2 from '../../../../../../public/icons/something/letter2.png'
import image3 from '../../../../../../public/icons/something/headphones.png'


const ContactsCardsBlock = () => {
    return (
        <div className={style.ContactsCardsBlock + ' container'}>
            <div className={style.cardItem}>
                <img 
                className={style.cardItemImage}
                src={image1}/>
                <div className={style.cardItemName}>
                    Main Location
                </div>
                <div className={style.cardItemInfo}>
                    55 Main Street, 2nd Block,<br/>
                    3rd Floor, New York
                </div>
                <div className={style.cardItemLine}>

                </div>
                <div className={style.cardItemInfo}>
                    394 Main Street, 2nd Block,<br/>
                    3rd Floor, USA
                </div>
            </div>

            <div className={style.cardItem}>
                <img 
                className={style.cardItemImage}
                src={image2}/>
                <div className={style.cardItemName}>
                    Email Address
                </div>
                <div className={style.cardItemInfo}>
                    ..............@gmail.com<br/>
                    www.kaffeninformation.com
                </div>
                <div className={style.cardItemLine}>
                
                </div>
                <div className={style.cardItemInfo}>
                    ..............@gmail.com<br/>
                    www.kaffeninformation.com
                </div>
            </div>

            <div className={style.cardItem}>
                <img 
                className={style.cardItemImage}
                src={image3}/>
                <div className={style.cardItemName}>
                    Phone Number
                </div>
                <div className={style.cardItemInfo}>
                    +000 (000) 000 00<br/>
                    1234567890
                </div>
                <div className={style.cardItemLine}>
                
                </div>
                <div className={style.cardItemInfo}>
                    +000 (000) 000 00<br/>
                    1234567890
                </div>
            </div>
        </div>
    );
};

export default ContactsCardsBlock;