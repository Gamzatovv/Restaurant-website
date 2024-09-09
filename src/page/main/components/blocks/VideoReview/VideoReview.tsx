import style from './VideoReview.module.scss';
import VideoReviewComponent from '../../../../../components/blocks/VideoReviewComponent/VideoReviewComponent';


const VideoReview = () => {
    return (
        <div className={style.videoReview}>
            <VideoReviewComponent/>
        </div>
    );
};

export default VideoReview;