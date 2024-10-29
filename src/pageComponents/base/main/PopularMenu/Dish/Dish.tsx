import style from './Dish.module.scss';

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

const Dish = ({dish}: DishProps) => {
    return (
        <div className={style.Dish}>
            <div 
                className={style.image}
                style={{backgroundImage:`url(/menu/${dish.type}/${dish.image})`}}>
            </div>
            <div className={style.blockInfo}>
                <div className={style.blockInfoTop}>
                    <div className={style.name}>
                        {dish.name}
                    </div>
                    <div className={style.line}></div>
                    <div className={style.price}>
                        {'$'+dish.price.toFixed(2)}
                    </div>
                </div>
                <div className={style.description}>
                        {dish.description}
                </div>
            </div>
        </div>
    );
};

export default Dish;