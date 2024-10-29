import style from './ImageGallery.module.scss';
import ImageGalleryComponent from '../../../../components/common/ImageGallery/ImageGallery';
const ImageGallery = () => {
    return (
        <div className={style.ImageGallery}>
            <ImageGalleryComponent/>
        </div>
    );
};

export default ImageGallery;