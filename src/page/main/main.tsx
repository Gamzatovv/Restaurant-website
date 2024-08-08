import React from 'react';
import style from './main.module.scss';
import TopSlider from './components/blocks/topSlider/topSlider';
import PopularDishes from './components/blocks/popularDishes/popularDishes';
const Main = () => {
    
    return (
        <>
            <TopSlider/>
            <PopularDishes/>
        </>
    );
};

export default Main;