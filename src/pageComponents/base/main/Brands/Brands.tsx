import BrandsComponent from "../../../../components/common/Brands/Brands";
import style from './Brands.module.scss'
const Brands = () => {
    return (
        <div className={style.brands + 'container'}>
            <BrandsComponent/>
        </div>
    );
};

export default Brands;