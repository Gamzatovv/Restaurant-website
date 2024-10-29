import style from './PopularDishes.module.scss';


const PopularDishes = () => {
    return (
        <div className={style.popularDishes}>
            <div className={style.box + ' container'}>
                <div className={style.images}>
                    
                    <div className={style.imagesItem}>
                        <div>Chiken Roll</div>
                    </div>
                    <div className={style.imagesItem}>
                        <div>Salad Bowl</div>
                    </div>
                    <div className={style.imagesItem}>
                        <div>Lobsters</div>
                    </div>
                    <div className={style.imagesItem}>
                        <div>Italian Burger</div>
                    </div>
                    
                </div>
                <div className={style.description}>
                    <div className={style.topText}>
                        Popular categories
                    </div>
                    <h3 className={style.title}>
                        Choose Your Best Food<br/>
                        From Categories
                    </h3>
                    <p className={style.descriptionText}>
                        A ball is a geometric body; the totality of all points in space located at a distance from the center, no more than a given one. This distance is called the radius of the ball. The ball is formed by rotating a semicircle around its fixed diameter.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default PopularDishes;