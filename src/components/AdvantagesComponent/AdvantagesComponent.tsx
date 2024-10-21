import style from './AdvantagesComponent.module.scss';
import advantageImage1 from '../../../public/icons/advantages/image1.png';
import advantageImage2 from '../../../public/icons/advantages/image2.png';
import advantageImage3 from '../../../public/icons/advantages/image3.png';
import advantageImage4 from '../../../public/icons/advantages/image4.png';
const AdvantagesComponent = () => {
    return (
        <div className={style.AdvantagesComponent}>
            <div className={style.list + ' container'}>
                <div className={style.item}>
                    <div className={style.imageBox}>
                        <img
                        className={style.image}
                        src={advantageImage1}/>
                    </div>
                    <div className={style.quantity}>
                        256+
                    </div>
                    <div className={style.name}>
                        Premium Clients
                    </div>
                    <div className={style.description}>

                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.imageBox}>
                        <img
                        className={style.image}
                        src={advantageImage2}/>
                    </div>
                    <div className={style.quantity}>
                        36+
                    </div>
                    <div className={style.name}>
                        Professional Chefs
                    </div>
                    <div className={style.description}>

                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.imageBox}>
                        <img
                        className={style.image}
                        src={advantageImage3}/>
                    </div>
                    <div className={style.quantity}>
                        753+
                    </div>
                    <div className={style.name}>
                        Winning Awards
                    </div>
                    <div className={style.description}>

                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.imageBox}>
                        <img
                        className={style.image}
                        src={advantageImage4}/>
                    </div>
                    <div className={style.quantity}>
                        100+
                    </div>
                    <div className={style.name}>
                        5 Star Reviews
                    </div>
                    <div className={style.description}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantagesComponent;