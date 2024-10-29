import style from './Menu.module.scss';
import TopParallax from '../../components/common/TopParallax/TopParallax';
import ProceedToBooking from '../../components/common/ProceedToBooking/ProceedToBooking';
import MenuFilter from '../../pageComponents/base/menu/MenuFilter/FilterDishes';
import DishList from '../../pageComponents/base/menu/DishList/DishList'
import { useState } from 'react';
import Title from '../../components/common/Title/Title';



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
            <section className={style.sectionParallax}>
                <TopParallax 
                imagePath={'background/imageTopParallax2.jpg'} 
                title={'Menu'}/>
            </section>
            <Title 
                subTitle='Choose best of'
                title='kaffen Menu'
                horizontalPosition='center'
            />
            <section className={style.sectionMenuFilter}>
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