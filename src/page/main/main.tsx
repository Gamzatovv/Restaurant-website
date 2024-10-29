import TopSlider from '../../pageComponents/base/main/TopSlider/TopSlider';
import PopularDishes from '../../pageComponents/base/main/PopularDishes/PopularDishes';
import PopularMenu from '../../pageComponents/base/main/PopularMenu/PopularMenu';
import Chiefs from '../../components/common/Chiefs/Chiefs';
import Reservation from '../../pageComponents/base/main/Reservation/Reservation';
import AboutRestaurant from '../../pageComponents/base/main/AboutRestaurant/AboutRestaurant';
import VideoReview from '../../pageComponents/base/main/VideoReview/VideoReview';
import Advantages from '../../pageComponents/base/main/Advantages/Advantages';
import ProceedToBooking from '../../components/common/ProceedToBooking/ProceedToBooking';
import ImageGallery from '../../pageComponents/base/main/ImageGallery/ImageGallery';
import Brands from '../../pageComponents/base/main/Brands/Brands';

const Main = () => {
    
    return (
        <>
            <section>
                <TopSlider/>
            </section>
            <section>
                <PopularDishes/>
            </section>
            <section>
                <PopularMenu/>
            </section>
            <section>
                <Chiefs background='#0e1317' backgroundCard='#090c0f'/>
            </section>
            <section>
                <Reservation/>
            </section>
            <section>
                <AboutRestaurant/>
            </section>
            <section>
                <VideoReview/>
            </section>
            <section>
                <Advantages/>
            </section>
            <section>
                <ProceedToBooking background='image1.jpg'/>
            </section>
            <section>
                <ImageGallery/>
            </section>
            <section>
                <Brands/>
            </section>
        </>
    );
};

export default Main;