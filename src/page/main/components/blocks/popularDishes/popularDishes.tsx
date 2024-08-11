import React from 'react';
import style from './popularDishes.module.scss';
import dish1 from '../../../../../../public/popularDishes/dish1.jpg'
import dish2 from '../../../../../../public/popularDishes/dish2.jpg'
import dish3 from '../../../../../../public/popularDishes/dish3.jpg'
import dish4 from '../../../../../../public/popularDishes/dish4.jpg'
const PopularDishes = () => {
    return (
        <div className={style.popularDishes}>
            <div className={style.box + ' container'}>
                <div className={style.images}>
                    
                    <div className={style['images__item']}>
                        <div>Chiken Roll</div>
                    </div>
                    <div className={style['images__item']}>
                        <div>Salad Bowl</div>
                    </div>
                    <div className={style['images__item']}>
                        <div>Lobsters</div>
                    </div>
                    <div className={style['images__item']}>
                        <div>Italian Burger</div>
                    </div>
                    
                </div>
                <div className={style.description}>
                    <div className={style['top-text']}>
                        Popular categories
                    </div>
                    <h3 className={style.title}>
                        Choose Your Best Food<br/>
                        From Categories
                    </h3>
                    <div className={style['description-text']}>
                        A ball is a geometric body; the totality of all points in space located at a distance from the center, no more than a given one. This distance is called the radius of the ball. The ball is formed by rotating a semicircle around its fixed diameter.
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default PopularDishes;