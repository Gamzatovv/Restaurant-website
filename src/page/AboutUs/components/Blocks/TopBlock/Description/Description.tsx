import React from 'react';
import style from './Description.module.scss'
import Button from '../../../../../../components/ui/buttons/Button1/Button';


const Description = () => {
    return (
        <div className={style.Description}>
            <div className={style.wrapperContent + ' container'}>
                <div className={style.descriptionBlock}>
                    <div className={style.subTitle}>
                        About Kaffen
                    </div>
                    <h3 className={style.title}>
                        New London Coffee Founded For Extraordinary Test
                    </h3>
                    <p className={style.descriptionText}>
                    A ball is a geometric body; the totality of all points in space located at a distance from the center, no more than a given one. This distance is called the radius of the ball.
                    </p>
                    <div className={style.advantages}>
                        <div className={style.advantagesItem}>
                            <div className={style.advantageDescription}>
                                Natural Coffee Beans

                            </div>
                            <div className={style.advantageSubDescription}>
                                A ball is a geometric body; the totality of all points in space located at a distance from the center.
                            </div>
                        </div>
                        <div className={style.advantagesItem}>
                            <div className={style.advantageDescription}>
                                100% ISO Certification

                            </div>
                            <div className={style.advantageSubDescription}>
                                A ball is a geometric body; the totality of all points in space located at a distance from the center.

                            </div>
                        </div>
                    </div>
                    <Button>
                        our menu
                    </Button>
                </div>
                <div className={style.imageblock}>
                    
                </div>
            </div>
        </div>
    );
};

export default Description;