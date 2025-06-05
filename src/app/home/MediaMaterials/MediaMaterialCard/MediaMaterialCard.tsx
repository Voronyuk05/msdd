import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { MediaComponent } from './MediaComponent/MediaComponent';
import { LoadingCircle } from '../../../../components/ui/LoadingCircle/LoadingCircle';
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
                {inView && 
                <Suspense fallback={<LoadingCircle/>}>
                    <MediaComponent link={link} title={title} />
                </Suspense>
                }
            </div>
            <div className={styles.media_card_text}>
                <div className={styles.card_title}>
                    <Link href={link} target="_blank">{title}</Link>
                </div>
            </div>
        </div>
    )
}