import style from './PopularDishes.module.scss';
import Title from '../../../../components/common/Title/Title';

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
                    <Title 
                    subTitle='Popular categories'
                    title={`Choose Your Best Food \nFrom Categories`}
                    horizontalPosition='left'
                    />
                    <p className={style.descriptionText}>
                        A ball is a geometric body; the totality of all points in space located at a distance from the center, no more than a given one. This distance is called the radius of the ball. The ball is formed by rotating a semicircle around its fixed diameter.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PopularDishes;