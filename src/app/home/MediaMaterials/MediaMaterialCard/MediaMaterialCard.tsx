import { useInView } from 'react-intersection-observer';
import { IMediaMaterial } from "@/types/mediaMaterials.types"
import Link from "next/link"
import styles from './MediaMaterialCard.module.scss'

export const MediaMaterialCard = ({link, title}: IMediaMaterial) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
        trackVisibility: true,
        delay: 100
    });

    return (
        <div className={`${styles.media_card} ${inView ? styles.visible_media_card : ''}`} ref={ref}>
            <div className={styles.media_card_img}>
                {inView && <iframe className={styles.media} width="400px" height="200px" src={link} title={title} allowFullScreen loading="lazy"></iframe>}
            </div>
            <div className={styles.media_card_text}>
                <div className={styles.card_title}>
                    <Link href={link} target="_blank">{title}</Link>
                </div>
            </div>
        </div>
    )
}