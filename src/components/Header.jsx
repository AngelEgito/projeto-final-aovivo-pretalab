import style from '../styles/components/header.module.css'

export function Header(props) {
    return(
        <div className={style.headerContainer}>
            
            <h1 className={style.headerTitle}>{props.text}</h1>
            <img className={style.headerImage} src={props.image} alt="" />
        </div>
    )
}