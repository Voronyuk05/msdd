import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { MediaComponent } from './MediaComponent/MediaComponent';
import { LoadingCircle } from '../../../../components/ui/LoadingCircle/LoadingCircle';
import { IActivities } from "@/types/activities.types"
import Link from "next/link"
import styles from './ActivityCard.module.scss'


export const ActivityCard = ({link, title}: IActivities) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
        trackVisibility: true,
        delay: 100
    });

    return (
        <div className={`${styles.activity_card} ${inView ? styles.visible_activity_card : ''}`} ref={ref}>
            <div className={styles.activity_card_img}>
                {inView && 
                <Suspense fallback={<LoadingCircle/>}>
                    <MediaComponent link={link} title={title} />
                </Suspense>
                }
            </div>
            <div className={styles.activity_card_text}>
                <div className={styles.card_title}>
                    <Link href={link} target="_blank">{title}</Link>
                </div>
            </div>
        </div>
    )
}