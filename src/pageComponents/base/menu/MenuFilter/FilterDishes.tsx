import { useState } from 'react';
import style from './FilterDishes.module.scss';

interface Props {
    categories: string[],
    selectedСategory: React.Dispatch<React.SetStateAction<string>>
}

const FilterDishes = ({categories, selectedСategory}: Props) => {

    const [addClass, setAddClass] = useState<number>(0)
    const handleCategoryChange = (category: string, index: number) => {
        selectedСategory(category);
        setAddClass(index)
    };

    return (
        <div className={style.FilterDishes}>
            {categories.map((item, index)=>(
                <button 
                onClick={()=>handleCategoryChange(item, index)}
                className={
                    `${style.filterButton} ${index === addClass ? style.filterButtonActive : ''}`
                }>
                    {item}
                </button>
            ))}
        </div>
    );
};

export default FilterDishes;