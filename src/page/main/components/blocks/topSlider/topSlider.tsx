import React from 'react';
import MainSlider from '../../../../../components/blocks/mainSlider/mainSlider';
const TopSlider = () => {

    const slideItems = [
        {
            topText: 'Welcome to the kaffen',
            description: 'Export The Lobsters',
            img: 'slide1'
        },
        {
            topText: 'Welcome to the kaffen',
            description: 'Premium Meat Kaffen',
            img: 'slide2'
        },
        {
            topText: 'Welcome to the kaffen',
            description: 'Reserve Your Table Today',
            img: 'slide3'
        }
    ] 
    return (
        <>
            <MainSlider slideItems={slideItems}/>
        </>
    );
};

export default TopSlider;