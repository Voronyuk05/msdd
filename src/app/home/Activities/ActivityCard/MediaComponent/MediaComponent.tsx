import styles from './MediaComponent.module.scss'

export const MediaComponent = ({link, title}: {link: string, title: string}) => {
    return (
        <iframe className={styles.media} width="400px" height="200px" src={link} title={title} allowFullScreen></iframe>
    )
}