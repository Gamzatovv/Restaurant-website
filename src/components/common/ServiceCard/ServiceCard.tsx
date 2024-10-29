import style from './ServiceCard.module.scss';

interface CardConten {
    image: string,
    name: string,
    description: string,
}

interface Props {
    content: CardConten,
    width: string,
    height: string,
}

const ServiceCard = ({content, width, height}: Props) => {
    return (
        <div 
        className={style.ServiceСard}
        style={{
            width: width,
            height: height,
        }}>
            <div className={style.imageWrapper}>
                <img 
                className={style.serviceСardImage}
                src={content.image} 
                />
            </div>
            <div className={style.serviceСardName}>
                {content.name}
            </div>
            <div className={style.serviceСardDescription}>
                {content.description}
            </div>
        </div>
    );
};

export default ServiceCard;