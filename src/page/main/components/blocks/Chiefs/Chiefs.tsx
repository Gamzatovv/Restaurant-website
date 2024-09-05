import style from './Chiefs.module.scss'
import dataBaseChiefs from '../../../../../assets/dataBase/dataBaseChiefs/dataBaseChiefs.json'
import Chief from './Chief/Chief'

interface ChiefType {
    id: number;
    name: string;
    level: string;
    image: string;
    email: string;
    "phone number": string;
  }


const Chiefs = () => {

    const listChiefs: ChiefType[] = dataBaseChiefs

    return (
        <div className={style.chiefs}>
            <div className='container'>
                <div className={style.subtitle}>
                    Experience team member
                </div>
                <h3 className={style.title}>
                    Meet Our Professional Chefs
                </h3>
                <div className={style.listChiefs}>
                    {listChiefs.map((chief)=><Chief key={chief.id} chief={chief}/>)}
                </div>
            </div>
        </div>
    );
};

export default Chiefs;