import style from './ImageGallery.module.scss';
import ImageGalleryComponent from '../../../../../components/blocks/ImageGalleryComponent/ImageGalleryComponent';
const ImageGallery = () => {
    return (
        <div className={style.ImageGallery}>
            <div className={style.ImageGalleryBackgroundBox}>
                <ImageGalleryComponent/>
            </div>
        </div>
    );
};

export default ImageGallery;