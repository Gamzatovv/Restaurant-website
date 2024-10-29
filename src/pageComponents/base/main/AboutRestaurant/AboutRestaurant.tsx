import style from './AboutRestaurant.module.scss'
import Button from '../../../../components/ui/button1/button';
import coffeeImage from '../../../../../public/othersImage/coffee1.png'
import ServiceCards from './ServiceCards/ServiceCards';

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
                <ServiceCards/>
            </div>

        </div>
    );
};

export default AboutRestaurant;