import style from './Advantages.module.scss'
import advantageImage1 from '../../../../public/icons/advantages/image1.png'
import advantageImage2 from '../../../../public/icons/advantages/image2.png'
import advantageImage3 from '../../../../public/icons/advantages/image3.png'
import advantageImage4 from '../../../../public/icons/advantages/image4.png'


const AdvantagesComponent = () => {

    const advantages = [
        {
            image: advantageImage1,
            quantity: '256+',
            name: 'Premium Clients',
            description: 'description advantages',
        },
        {
            image: advantageImage2,
            quantity: '36+',
            name: 'Professional Chefs',
            description: 'description advantages',
        },
        {
            image: advantageImage3,
            quantity: '753+',
            name: 'Winning Awards',
            description: 'description advantages',
        },
        {
            image: advantageImage4,
            quantity: '100+',
            name: '5 Star Reviews',
            description: 'description advantages',
        },
    ]

    return (
        <div className={style.AdvantagesComponent}>
            <div className={style.list + ' container'}>
                {advantages.map(advantage=>(
                    <div className={style.item}>
                        <div className={style.imageWrapper}>
                            <img
                            className={style.image}
                            src={advantage.image}/>
                        </div>
                        <div className={style.quantity}>
                            {advantage.quantity}
                        </div>
                        <div className={style.name}>
                            {advantage.name}
                        </div>
                        <div className={style.description}>
                            {advantage.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvantagesComponent;