import BrandsComponent from "../../../../../components/blocks/BrandsComponent/BrandsComponent";
import style from './Brands.module.scss'
const Brands = () => {
    return (
        <div className={style.brands}>
            <div className="container">
                <BrandsComponent/>
            </div>
        </div>
    );
};

export default Brands;