import style from './DishCount.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/store';

const DishCount = () => {

    const selectedDishes = useSelector((state: RootState)=>state.dish)

    return (
        <div className={style.dishCount}>
            In the basket {selectedDishes.length}
        </div>
    );
};

export default DishCount;