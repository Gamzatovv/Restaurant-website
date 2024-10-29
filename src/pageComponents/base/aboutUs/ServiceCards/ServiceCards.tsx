import style from './ServiceCards.module.scss'

import ServiceCard from "../../../../components/common/ServiceCard/ServiceCard";
import burgerImage from '../../../../../public/othersImage/burger1.png'
import cakeImage from '../../../../../public/othersImage/cake1.png'
import croissantImage from '../../../../../public/othersImage/croissant.png'
import juiceImage from '../../../../../public/othersImage/juice1.png'

const ServiceCards = () => {

    const serviceСard = [
        {
            image: burgerImage,
            name: 'Birthday Cakes',
            description: 'description of the card' ,
        },
        {
            image: cakeImage,
            name: 'Fresh Foods',
            description: 'description of the card' ,
        },
        {
            image: croissantImage,
            name: 'Skills Chefs',
            description: 'description of the card' ,
        },
        {
            image: juiceImage,
            name: 'Organic Juice',
            description: 'description of the card' ,
        },
    ]


    return (
        <div className={style.ServiceCards}>
            <div className='container'>
                <div className={style.ServiceCardsWrapper}>
                    {serviceСard.map(card=>(
                        <ServiceCard content={card} width={'260px'} height={'299px'}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;