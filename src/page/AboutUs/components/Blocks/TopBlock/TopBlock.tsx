import style from './TopBlock.module.scss'
import TopParallax from '../../../../../components/blocks/TopParallax/TopParallax';


const TopBlock = () => {
    return (
        <div className={style.TopSlider}>
            <TopParallax 
            title={'About Us'}
            imagePath={'background/aboutUsPage/image1.jpg'}/>
        </div>
    );
};

export default TopBlock;