import style from './Cart.module.scss';
import DishCard from './components/blocks/DishCard/DishCard';
import Form from './components/blocks/Form/Form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../state/store';
import { increment, decrement } from '../../state/dishes/countDishesSlice'


interface DishType {
    id: number;
    type: string;
    name: string;
    price: number;
    description?: string;
    image: string;
  }

  
  const Cart = () => {
    const selectedDishes = useSelector((state: RootState)=>state.dish)
    const dispatch = useDispatch()
    
    // const Dishes: DishType[] = dataBaseDishes
    // const filteredDishes = Dishes.filter((dish)=>selectedDishes.some(item=>item.id === dish.id))
    // .map(dish=>({...dish, count: selectedDishes.find(item=>item.id === dish.id).count}))

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