import style from './Cart.module.scss';
import Form from '../../pageComponents/base/cart/Form/Form';
import DishCount from '../../pageComponents/base/cart/DishCount/DishCount';
import DishList from '../../pageComponents/base/cart/DishList/DishList';
const Cart = () => {
  
    
    return (
        <div className={style.Cart}>
            <section className='container'>
                <DishCount/>
                <div className={style.cartWrapper}>
                    <DishList/>
                    <Form/>
                </div>
            </section>
        </div>
    );
};

export default Cart;