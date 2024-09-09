import React, { useState } from 'react';

import style from './VideoReviewComponent.module.scss';

import ReactPlayer from 'react-player';

const VideoReviewComponent = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div className={style.videoReviewComponent}>
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

export default VideoReviewComponent;