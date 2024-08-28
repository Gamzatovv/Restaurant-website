import React from 'react';
import style from './main.module.scss';
import TopSlider from './components/blocks/topSlider/topSlider';
import PopularDishes from './components/blocks/popularDishes/popularDishes';
import PopularMenu from './components/blocks/popularMenu/popularMenu';
const Main = () => {
    
    return (
        <>
            <TopSlider/>
            <PopularDishes/>
            <PopularMenu/>
        </>
    );
};

export default Main;