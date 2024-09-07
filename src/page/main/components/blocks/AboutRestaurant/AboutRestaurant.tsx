import React from 'react';
import style from './AboutRestaurant.module.scss'

import Button from '../../../../../components/ui/buttons/Button1/Button';

import coffeeImage from '../../../../../../public/othersImage/coffee1.png'
import burgerImage from '../../../../../../public/othersImage/burger1.png'
import cakeImage from '../../../../../../public/othersImage/cake1.png'
import croissantImage from '../../../../../../public/othersImage/croissant.png'
import juiceImage from '../../../../../../public/othersImage/juice1.png'

const AboutRestaurant = () => {
    return (
        <div className={style.aboutRestaurant}>
            <div className={style.box + " container"}>
                <div className={style.info}>
                    <h3 className={style.subtitle}>
                        About Kaffen
                    </h3>
                    <div className={style.title}>
                        Have Nice & Enjoyable<br/>
                        Time With Our Foods 
                    </div>
                    <p className={style.description}>
                        A ball is a geometric body; the totality of all points in space located at a distance from the center, no more than a given one. This distance is called the radius of the ball.
                    </p>
                    <div className={style.coffee}>
                        <img
                        className={style.coffeeImage}
                        src={coffeeImage} 
                        />
                        <div className={style.coffeeBlock}>
                            <div className={style.coffeeDescription}>
                                100% ISO Certification
                            </div>
                            <div className={style.coffeeSubDescription}>
                                The ball is formed by rotating a semicircle around its fixed diameter.
                            </div>
                        </div>
                    </div>
                    <Button>
                        Explore more us
                    </Button>
                </div>
                <div className={style.service}>
                    <div className={style.serviceСard}>
                        <div className={style.serviceСardImageBox}>
                            <img 
                            className={style.serviceСardImage}
                            src={cakeImage} 
                            />
                        </div>
                        <div className={style.serviceСardName}>
                            Birthday Cakes
                        </div>
                        <div className={style.serviceСardDescription}>
                            description of the card
                        </div>
                    </div>

                    <div className={style.serviceСard}>
                        <div className={style.serviceСardImageBox}>
                            <img 
                            className={style.serviceСardImage}
                            src={croissantImage} 
                            />
                        </div>
                        <div className={style.serviceСardName}>
                            Fresh Foods
                        </div>
                        <div className={style.serviceСardDescription}>
                            description of the card
                        </div>
                    </div>

                    <div className={style.serviceСard}>
                        <div className={style.serviceСardImageBox}>
                            <img 
                            className={style.serviceСardImage}
                            src={burgerImage} 
                            />
                        </div>
                        <div className={style.serviceСardName}>
                            Skills Chefs
                        </div>
                        <div className={style.serviceСardDescription}>
                            description of the card
                        </div>
                    </div>

                    <div className={style.serviceСard}>
                        <div className={style.serviceСardImageBox}>
                            <img 
                            className={style.serviceСardImage}
                            src={juiceImage} 
                            />
                        </div>
                        <div className={style.serviceСardName}>
                            Organic Juice
                        </div>
                        <div className={style.serviceСardDescription}>
                            description of the card
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutRestaurant;