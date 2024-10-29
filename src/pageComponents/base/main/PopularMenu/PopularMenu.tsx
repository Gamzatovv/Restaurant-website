import style from './PopularMenu.module.scss';
import dataBaseDishes from '../../../../assets/dataBase/dataBaseDishes.json'
import Dish from './Dish/Dish';
import Title from '../../../../components/common/Title/Title';

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
          <Title 
            subTitle='Choose best menus'
            title='Popular Foods Menu'
            horizontalPosition='center'
          />
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