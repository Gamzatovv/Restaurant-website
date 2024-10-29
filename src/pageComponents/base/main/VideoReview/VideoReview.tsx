import style from './VideoReview.module.scss';
import VideoReviewComponent from '../../../../components/common/VideoReview/VideoReview';


const VideoReview = () => {
    return (
        <div className={style.videoReview}>
            <VideoReviewComponent/>
        </div>
    );
};

export default VideoReview;