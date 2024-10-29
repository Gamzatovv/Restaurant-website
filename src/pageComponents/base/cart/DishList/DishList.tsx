import style from './DishList.module.scss';
import DishCard from '../DishCard/DishCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/store';

const DishList = () => {

    const selectedDishes = useSelector((state: RootState)=>state.dish)

    return (
        <div className={style.foundDishes}>
            {selectedDishes.map(dish=><DishCard dish={dish}/>)}
        </div> 
    );
};

export default DishList;