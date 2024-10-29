import style from './Counter.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../state/store';
import { increment, decrement } from '../../../state/dishes/countDishesSlice'

interface dishIdProps {
    dishId: number,
}

const Counter = ({dishId}: dishIdProps) => {

    const count = useSelector((state: RootState)=>state.dish.find(item=>item.id === dishId))
    const dispatch = useDispatch()

    return (
        <div className={`${style.Counter} ${count ? style.CounterActive : ''}`}>
            <div className={style.wrapper}>
                <div 
                onClick={()=>dispatch(decrement(dishId))} 
                className={style.counterButton}>
                    -
                </div>
                <div className={style.counterCount}>
                    {count ? count.count : ''}
                </div>
                <div 
                onClick={()=>dispatch(increment(dishId))} 
                className={style.counterButton}>
                    +
                </div>
            </div>
        </div>
    );
};

export default Counter;