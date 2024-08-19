import React from 'react';
import MainSlider from '../../../../../components/blocks/mainSlider/mainSlider';
const TopSlider = () => {

    interface SlideItem {
        topText: string;
        description: string;
        image: string;
    }


    const slideItems: SlideItem[] = [
        {
            topText: 'Welcome to the kaffen',
            description: 'Export The Lobsters',
            image: 'slide1'
        },
        {
            topText: 'Welcome to the kaffen',
            description: 'Premium Meat Kaffen',
            image: 'slide2'
        },
        {
            topText: 'Welcome to the kaffen',
            description: 'Reserve Your Table Today',
            image: 'slide3'
        }
    ] 
    return (
        <>
            <MainSlider slideItems={slideItems}/>
        </>
    );
};

export default TopSlider;