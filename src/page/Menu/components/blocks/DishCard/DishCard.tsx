import style from './DishCard.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../state/store';
import { increment, decrement } from '../../../../../state/dishes/countDishesSlice'

import image1 from '../../../../../../public/icons/something/shoppingСart.png'

interface Dish {
    id: number;
    type: string;
    name: string;
    price: number;
    description?: string;
    image: string;
  }
  

  interface DishProps {
    dish: Dish;
  }


const DishCard = ({dish}: DishProps) => {
    const count = useSelector((state: RootState)=>state.dish[dish.id])
    const dispatch = useDispatch()
    return (
        <div className={style.DishCard}>
            <div 
            className={style.Image}
            style={{backgroundImage:`url(/menu/${dish.type}/${dish.image})`}}>
                
            </div>
            <div className={style.Name}>
                {dish.name}
            </div>
            <div className={style.Description}>
                {dish.description}
            </div>
            <div className={style.BottomBlock}>
                <div className={`${style.counter} ${count ? style.counterActive : ''}`}>
                    <div 
                    onClick={()=>dispatch(decrement(dish.id))} 
                    className={style.counterButton}>
                        -
                    </div>
                    <div className={style.counterCount}>
                        {count ? count.count : ''}
                    </div>
                    <div 
                    onClick={()=>dispatch(increment(dish.id))} 
                    className={style.counterButton}>
                        +
                    </div>
                </div>
                <div 
                onClick={()=>dispatch(increment(dish.id))} 
                className={`${style.addDish} ${count ? '' : style.addDishActive}`}>
                    add 
                    <img 
                    className={style.addDishImage}
                    src={image1}/>
                </div>
                <div className={style.Price}>
                    {'$' + dish.price.toFixed(2)} 
                </div>
            </div>
        </div>
    );
};

export default DishCard;