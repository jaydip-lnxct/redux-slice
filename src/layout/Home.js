import style from './Home.module.css';
export const Home=(props)=>{
    return(
        <div className={style.Home}>
            {props.children}
        </div>
    )
}