import style from './Title.module.scss'

interface Props {
   title: string,
   subTitle: string,
   horizontalPosition: 'center' | 'left' | 'right',
}

const Title = (props: Props) => {
   return (
      <div 
      style={{textAlign: props.horizontalPosition}}
      >
         <div className={style.subTitle}>
            {props.subTitle}
         </div>
         <h3 className={style.title}>
            {props.title}
         </h3>
      </div>
   );
};

export default Title;