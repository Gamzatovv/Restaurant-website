import style from './VideoReview.module.scss';
import { useState } from 'react';
import ReactPlayer from 'react-player';

interface Props {
    parallaxEffect: boolean,
}


const VideoReview = ({parallaxEffect}: Props) => {

    const [visible, setVisible] = useState(false)

    return (
        <div className={`${style.VideoReview} ${parallaxEffect ? style.parallaxActive : ''}`}>
            <button 
            onClick={()=>setVisible(!visible)}
            className={`${style.button} ${visible ? style.buttonInvisible : ''}`}>
                <div className={style.whiteCircle}>
                    <div className={style.arrow}>
                        
                    </div>
                </div>
            </button>
            <div className={`${style.videoBlock} ${visible ? style.videoBlockVisible : ''}`}>
                <ReactPlayer 
                url='https://youtu.be/YZ84iQrbYjw?si=XVOlibuY1jJa-dTp' 
                width={'100%'}
                height={'100%'}
                />
            </div>
        </div>
    );
};

export default VideoReview;