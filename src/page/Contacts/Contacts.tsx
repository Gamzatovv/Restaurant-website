import style from './Contacts.module.scss'
import TopParallax from '../../components/common/TopParallax/TopParallax';
import ContactsCardsBlock from '../../pageComponents/base/contacts/ContactsCardsBlock/ContactsCardsBlock';
import MessageForm from '../../pageComponents/base/contacts/MessageForm/MessageForm';
import ImageGallery from '../../components/common/ImageGallery/ImageGallery';
import Brands from '../../components/common/Brands/Brands';

const Contacts = () => {
    return (
        <div>
            <section>
                <TopParallax 
                title={'Contact Us'}
                imagePath={'background/aboutUsPage/image5.jpg'}/>
            </section>
            <section className={style.cardsBlock}>
                <ContactsCardsBlock/>
            </section>
            <section className={style.MessageFormBlock}>
                <MessageForm/>
            </section>
            <section className={style.imageGalleryBlock}>
                <ImageGallery/>
            </section>
            <section className={style.BrandsBlock}>
                <Brands/>
            </section>
        </div>
    );
};

export default Contacts;