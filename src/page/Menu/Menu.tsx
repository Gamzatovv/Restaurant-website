import style from './Menu.module.scss';
import TopParallax from '../../components/common/TopParallax/TopParallax';
import ProceedToBooking from '../../components/common/ProceedToBooking/ProceedToBooking';
import MenuFilter from '../../pageComponents/base/menu/MenuFilter/FilterDishes';
import DishList from '../../pageComponents/base/menu/DishList/DishList'
import { useState } from 'react';




const Menu = () => {

    const [selectedCategory, setSelectedCategory] = useState<string>("dishes")
    
    const categoryDishes = [
        'dishes',
        'rotulis',
        'deserts',
        'drinks',
        'coffee',
    ]

    return (
        <div className={style.Menu}>
            <section>
                <TopParallax 
                imagePath={'background/imageTopParallax2.jpg'} 
                title={'Menu'}/>
            </section>
            <div className={style.subTitle}>
                Choose best of
            </div>
            <h3 className={style.title}>
                kaffen Menu
            </h3>
            <section>
                <MenuFilter categories={categoryDishes} selectedСategory={setSelectedCategory}/>
            </section>
            <section>
                <DishList selectedСategory={selectedCategory}/>
            </section>
            <section>
                <ProceedToBooking background='image1.jpg'/>
            </section>
        </div>
    );
};

export default Menu;