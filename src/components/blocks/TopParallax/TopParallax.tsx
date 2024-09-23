import { Parallax } from 'react-parallax';
import style from './TopParallax.module.scss'

interface Props {
    imagePath: string;
    title: string;

}

const TopParallax = ({imagePath, title}: Props) => {
    return (
        <div>
            <Parallax 
            strength={250} 
            bgImage={`../../../../../../public/${imagePath}`} 
            bgImageStyle={{ width: '100%'}}
            >
                <div className={style.TopSliderBlock + ' container'}>
                    <h2 className={style.title}>
                        {title}
                    </h2>  
                </div>
            </Parallax>
        </div>
    );
};

export default TopParallax;