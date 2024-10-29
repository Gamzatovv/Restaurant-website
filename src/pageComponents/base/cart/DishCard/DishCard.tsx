import style from './DishCard.module.scss';
import dataBaseDishes from '../../../../assets/dataBase/dataBaseDishes.json'
import Counter from '../../../../components/common/Counter/Counter'
import image1 from '../../../../../public/icons/something/trashcan.png'

interface Dish {
    id: number,
    count: number,
}

interface DishProps {
    dish: Dish,
}

const DishCard = ({dish}: DishProps) => {

    const FoundDish = dataBaseDishes.find(item=>item.id === dish.id)
    if (!FoundDish) {
        return null
    }

    return (
        <div className={style.DishCard}>
            <div
            className={style.image}
            style={{backgroundImage:`url(/menu/${FoundDish.type}/${FoundDish.image})`}}
            >
            </div>
            <div className={style.block}>
                <div className={style.blockTop}>
                    <div className={style.name}>
                        {FoundDish.name}
                    </div>
                    <div className={style.price}>
                        {'$' + FoundDish.price}
                    </div>
                </div>
                <div className={style.description}>
                    {FoundDish.description}
                </div>
                <div className={style.blockBottom}>
                    <img 
                    className={style.deleteImage}
                    src={image1} />
                    <Counter dishId={FoundDish.id}/>
                </div>
            </div>
        </div>
    );
};

export default DishCard;