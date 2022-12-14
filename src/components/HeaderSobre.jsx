import styles from '../styles/components/headerSobre.module.css'

export function HeaderSobre(props) {
    return(
        <div className={styles.headerSobre}>
            <img className={styles.headerImage} src={props.image} alt="" />
           
            <div className={styles.sobre}>
                <img className={styles.sobreMim} src={props.imagem} alt="" />
                <div className={styles.headerContainerSobre}>
                    <h1 className={styles.headerTitle}>{props.text}</h1>
                    <p className={styles.headerDescription}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}