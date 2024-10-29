import style from './DishCard.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../state/store';
import { increment } from '../../../../state/dishes/countDishesSlice'

import Counter from '../../../../components/common/Counter/Counter';

import image1 from '../../../../../public/icons/something/shoppingСart.png'

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
    
    const count = useSelector((state: RootState)=>state.dish.find(item=>item.id === dish.id))
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
                <Counter dishId={dish.id}/>
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