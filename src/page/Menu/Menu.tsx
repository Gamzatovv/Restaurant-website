import style from './Menu.module.scss';
import DishCard from './components/blocks/DishCard/DishCard';
import dataBaseDishes from '../../assets/dataBase/dataBaseDishes/dataBaseDishes.json';
import TopParallax from '../../components/blocks/TopParallax/TopParallax';
import ProceedToBooking from '../../components/blocks/ProceedToBooking/ProceedToBooking';
import { useState } from 'react';


interface DishType {
    id: number;
    type: string;
    name: string;
    price: number;
    description?: string;
    image: string;
  }


  
const Menu = () => {

    // filtering an array
    const Dishes: DishType[] = dataBaseDishes;

    const [categorieDishes, setCategoriesDishes] = useState<string>('dishes');
    const [addClass, setAddClass] = useState<number>(0);
    const handleCategoryChange = (category: string, index: number) => {
        setCategoriesDishes(category);
        setAddClass(index);
    };
    
    const categoriesFilterItem = [
        'dishes',
        'rotulis',
        'deserts',
        'drinks',
        'coffee',
    ];


    return (
        <div className={style.Menu}>
            <TopParallax imagePath={'background/imageTopParallax2.jpg'} title={'Menu'}/>
            <div className={style.subTitle}>
                Choose best of
            </div>
            <h3 className={style.title}>
                kaffen Menu
            </h3>
            <ul className={style.categoriesFilter}>
                {categoriesFilterItem.map((item, index)=>(
                    <li 
                    onClick={()=>handleCategoryChange(item, index)}
                    className={
                    `${style.categoriesFilterItem}
                    ${index === addClass ? style.categoriesFilterItemActive : ''}`
                    }>
                        {item}
                    </li>
                ))}
                
            </ul>
            <div className={style.menuList + ' container'}>
                {Dishes.filter((dish)=> {return dish.type === categorieDishes;}).map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </div>
            <ProceedToBooking background='image1.jpg'/>
        </div>
    );
};

export default Menu;