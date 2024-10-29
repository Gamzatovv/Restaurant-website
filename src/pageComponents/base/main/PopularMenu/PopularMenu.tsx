import style from './PopularMenu.module.scss';
import dataBaseDishes from '../../../../assets/dataBase/dataBaseDishes.json'
import Dish from './Dish/Dish';

interface DishType {
    id: number;
    type: string;
    name: string;
    price: number;
    description?: string;
    image: string;
  }
  
const PopularMenu = () => {

    const listDish: DishType[] = dataBaseDishes

    return (
        <div className={style.popularMenu}>
          <div className={style.subtitle}>
            Choose best menus
          </div>
          <h3 className={style.title}>
            Popular Foods Menu
          </h3>
            <div className={style.listMenu + ' container'}>
                {listDish.filter((dish)=> {return dish.type == 'dishes'}).map((dish) => (
                  <Dish key={dish.id} dish={dish} />
                ))}
                <div className={style.verticalLine}></div>
            </div>
        </div>
    );
};

export default PopularMenu;