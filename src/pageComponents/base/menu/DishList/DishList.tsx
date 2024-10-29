import style from './DishList.module.scss';
import DishCard from '../DishCard/DishCard';
import dataBaseDishes from '../../../../assets/dataBase/dataBaseDishes.json'

interface DishType {
    id: number;
    type: string;
    name: string;
    price: number;
    description?: string;
    image: string;
}
const Dishes: DishType[] = dataBaseDishes

interface Props {
    selectedСategory: string,
}

const DishList = ({selectedСategory}: Props) => {



    return (
        <div className={style.menuList + ' container'}>
            {Dishes.filter((dish)=> {return dish.type === selectedСategory}).map((dish) => (
                <DishCard key={dish.id} dish={dish} />
            ))}
        </div>  
    );
};

export default DishList;