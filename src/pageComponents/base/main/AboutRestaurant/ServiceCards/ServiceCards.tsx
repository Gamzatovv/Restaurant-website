import style from './ServiceCards.module.scss'

import burgerImage from '../../../../../../public/othersImage/burger1.png'
import cakeImage from '../../../../../../public/othersImage/cake1.png'
import croissantImage from '../../../../../../public/othersImage/croissant.png'
import juiceImage from '../../../../../../public/othersImage/juice1.png'
import ServiceCard from '../../../../../components/common/ServiceCard/ServiceCard'

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
        <div className={style.service}>
            {serviceСard.map(card=>(
                <div className={style.ServiceCardWrapper}>
                    <ServiceCard content={card} width={'268px'} height={'299px'}/>
                </div>
            ))}
        </div>
    );
};

export default ServiceCards;