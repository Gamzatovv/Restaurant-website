import style from './Contacts.module.scss';
import TopParallax from '../../components/blocks/TopParallax/TopParallax';
import ContactsCardsBlock from './components/blocks/ContactsCardsBlock/ContactsCardsBlock';
import MessageForm from './components/blocks/MessageForm/MessageForm';
import ImageGalleryComponent from '../../components/blocks/ImageGalleryComponent/ImageGalleryComponent';
import BrandsComponent from '../../components/blocks/BrandsComponent/BrandsComponent';

const Contacts = () => {
    return (
        <div>
            <TopParallax 
            title={'Contact Us'}
            imagePath={'background/aboutUsPage/image5.jpg'}/>
            <div className={style.cardsBlock}>
                <ContactsCardsBlock/>
            </div>
            <div className={style.MessageFormBlock}>
                <MessageForm/>
            </div>
            <div className={style.imageGalleryBlock}>
                <ImageGalleryComponent/>
            </div>
            <div className={style.BrandsBlock}>
                <div className='container'>
                    <BrandsComponent/>

                </div>
                
            </div>
        </div>
    );
};

export default Contacts;