import React from 'react';
import style from './Main.module.scss';
import TopSlider from './components/blocks/TopSlider/TopSlider';
import PopularDishes from './components/blocks/PopularDishes/PopularDishes';
import PopularMenu from './components/blocks/PopularMenu/PopularMenu';
import Chiefs from './components/blocks/Chiefs/Chiefs';
import Reservation from './components/blocks/Reservation/Reservation';
import AboutRestaurant from './components/blocks/AboutRestaurant/AboutRestaurant';


const Main = () => {
    
    return (
        <>
            <section>
                <TopSlider/>
            </section>
            <section>
                <PopularDishes/>
            </section>
            <section>
                <PopularMenu/>
            </section>
            <section>
                <Chiefs/>
            </section>
            <section>
                <Reservation/>
            </section>
            <section>
                <AboutRestaurant/>
            </section>
        </>
    );
};

export default Main;