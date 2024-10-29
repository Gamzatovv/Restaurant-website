import style from './Chiefs.module.scss'
import dataBaseChiefs from '../../../assets/dataBase/dataBaseChiefs.json'
import Chief from './Chief/Chief'
import Title from '../Title/Title'

interface ChiefType {
    id: number;
    name: string;
    level: string;
    image: string;
    email: string;
    "phone number": string;
  }

  interface Props {
    backgroundCard: string,
    background: string,
  }

const Chiefs = ({backgroundCard, background}: Props) => {

    const listChiefs: ChiefType[] = dataBaseChiefs

    return (
        <div 
        className={style.chiefs}
        style={{
            backgroundColor: background
        }}
        >
            <div className='container'>
                <Title 
                    subTitle='Experience team member'
                    title='Meet Our Professional Chefs'
                    horizontalPosition='center'
                />
                <div className={style.listChiefs}>
                    {listChiefs.map((chief)=>
                        <Chief key={chief.id} chief={chief} backgroundCard={backgroundCard}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chiefs;