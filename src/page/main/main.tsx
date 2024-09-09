import React from 'react';
import style from './Main.module.scss';
import TopSlider from './components/blocks/TopSlider/TopSlider';
import PopularDishes from './components/blocks/PopularDishes/PopularDishes';
import PopularMenu from './components/blocks/PopularMenu/PopularMenu';
import Chiefs from './components/blocks/Chiefs/Chiefs';
import Reservation from './components/blocks/Reservation/Reservation';
import AboutRestaurant from './components/blocks/AboutRestaurant/AboutRestaurant';
import VideoReview from './components/blocks/VideoReview/VideoReview';
import Advantages from './components/blocks/Advantages/Advantages';

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
            <section>
                <VideoReview/>
            </section>
            <section>
                <Advantages/>
            </section>
        </>
    );
};

export default Main;