import style from './Cart.module.scss';
import DishCard from './components/blocks/DishCard/DishCard';
import Form from './components/blocks/Form/Form';
import { useSelector} from 'react-redux';
import { RootState } from '../../state/store';

  const Cart = () => {
    const selectedDishes = useSelector((state: RootState)=>state.dish);

    return (
        <div className={style.Cart}>
            <div className='container'>
                <div className={style.dishCount}>
                    In the basket {selectedDishes.length}
                </div>
                <div className={style.cartWrapper}>
                    <div className={style.foundDishes}>
                        {selectedDishes.map(dish=><DishCard dish={dish}/>)}
                    </div>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

export default Cart;