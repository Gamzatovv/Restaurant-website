import style from './AboutUs.module.scss'

import TopParallax from '../../components/common/TopParallax/TopParallax'
import Description from '../../pageComponents/base/aboutUs/Description/Description';
import Advantages from '../../components/common/Advantages/Advantages';
import ProceedToBooking from '../../components/common/ProceedToBooking/ProceedToBooking';
import ImageGallery from '../../components/common/ImageGallery/ImageGallery';
import Brands from '../../components/common/Brands/Brands';
import VideoReview from '../../components/common/VideoReview/VideoReview'
import ServiceCards from '../../pageComponents/base/aboutUs/ServiceCards/ServiceCards';
import Chiefs from '../../components/common/Chiefs/Chiefs'

const AboutUs = () => {
    return (
        <div>
            <section>
                <TopParallax 
                title={'About Us'}
                imagePath={'background/aboutUsPage/image1.jpg'}/>
            </section>
            <section>
                <Description/>
            </section>
            <section className={style.advantagesWrapper}>
                <Advantages/>
            </section>
            <section className={style.VideoReviewWrapper}>
                <div className='container'>
                    <VideoReview parallaxEffect={false}/>
                </div>
            </section>
            <section>
                <ServiceCards/>
            </section>
            <section>
                <Chiefs background='#090c0f' backgroundCard='#0e1317'/>
            </section>
            <section>
                <Brands/>
            </section>
            <section>
                <ProceedToBooking background='image1.jpg'/>
            </section>
            {/* <div className={style.imageGalleryWrapper}>
                <ImageGallery/>
            </div> */}
        </div>
    );
};

export default AboutUs;