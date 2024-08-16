import React from 'react';
import MainSlider from '../../../../../components/blocks/mainSlider/mainSlider';
const TopSlider = () => {

    interface SlideItem {
        topText: string;
        description: string;
    }


    const slideItems: SlideItem[] = [
        {
            topText: 'Welcome to the kaffen',
            description: 'Export The Lobsters',
        },
        {
            topText: 'Welcome to the kaffen',
            description: 'Premium Meat Kaffen',
        },
        {
            topText: 'Welcome to the kaffen',
            description: 'Reserve Your Table Today',
        }
    ] 
    return (
        <>
            <MainSlider slideItems={slideItems}/>
        </>
    );
};

export default TopSlider;