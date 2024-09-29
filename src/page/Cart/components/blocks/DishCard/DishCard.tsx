import style from './DishCard.module.scss';
import dataBaseDishes from '../../../../../assets/dataBase/dataBaseDishes/dataBaseDishes.json'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../state/store';
import { increment, decrement } from '../../../../../state/dishes/countDishesSlice'

import image1 from '../../../../../../public/icons/something/trashcan.png'

interface Dish {
    id?: number,
    count?: number,
}

interface DishProps {
    dish: Dish,
}



const DishCard = ({dish}: DishProps) => {
    const FoundDish = dataBaseDishes.find(item=>item.id === dish.id)
    if (!FoundDish) {
        return null
    }

    const count = useSelector((state: RootState)=>state.dish.find(item=>item.id === dish.id))
    const dispatch = useDispatch()
    return (
        <div className={style.DishCard}>
            
            <div
            className={style.image}
            style={{backgroundImage:`url(/menu/${FoundDish.type}/${FoundDish.image})`}}
            >
            </div>
            <div className={style.info}>
                <div className={style.infoTop}>
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
                <div className={style.infoBottom}>
                    <img 
                    className={style.deleteImage}
                    src={image1} />
                    <div className={style.counterBlock}>
                        <div 
                        onClick={()=>dispatch(decrement(FoundDish.id))} 
                        className={style.counterButton}>
                            -
                        </div>
                        <div className={style.counterCount}>
                            {count ? count.count : ''}
                        </div>
                        <div 
                        onClick={()=>dispatch(increment(FoundDish.id))} 
                        className={style.counterButton}>
                            +
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishCard;