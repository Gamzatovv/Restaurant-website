import React from 'react';

import TopBlock from './components/blocks/TopBlock/TopBlock'
import Description from './components/blocks/Description/Description';
import Advantages from './components/blocks/Advantages/Advantages';
import ProceedToBooking from '../../components/blocks/ProceedToBooking/ProceedToBooking';
import ImageGallery from './components/blocks/ImageGallery/ImageGallery';

const AboutUs = () => {
    return (
        <div>
            <TopBlock/>
            <Description/>
            <Advantages/>
            <ProceedToBooking background='image1.jpg'/>
            <ImageGallery/>
        </div>
    );
};

export default AboutUs;