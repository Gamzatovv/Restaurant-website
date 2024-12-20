import style from './SubHeader.module.scss'

import watchImage from '../../../../public/icons/something/watch.png'
import messenger1 from '../../../../public/icons/header/facebook.png'
import messenger2 from '../../../../public/icons/header/twitter.png'
import messenger3 from '../../../../public/icons/header/instagram.png'
import messenger4 from '../../../../public/icons/header/youTube.png'

const SubHeader = () => {
   return (
      <div className={style.top}>
         <div className={style.schedule}>
            <img src={watchImage} />
            <div>
               <span> OPENING HOURS : </span>
               08:00 AM - 09:00 PM
            </div>
         </div>
         <div className={style.media}>
            <a href="">
               <img src={messenger1}/>
            </a>
            <a href="">
               <img src={messenger2}/>
            </a>
            <a href="">
               <img src={messenger3}/>
            </a>
            <a href="">
               <img src={messenger4}/>
            </a>
         </div>
         <div className={style.location}>
            <span>LOCATION : </span>
            55 MAIN STREET, NEW YORK
         </div>
      </div>
   );
};

export default SubHeader;