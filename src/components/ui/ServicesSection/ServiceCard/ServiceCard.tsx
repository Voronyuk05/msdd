import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { Headings } from '@/components/ui/Headings/Headings';
import { IService } from '@/types/services.types';
import Image from 'next/image';
import styles from './ServiceCard.module.scss'

export const ServiceCard = ({link, img, name}: IService) => {
    const {push} = useRouter()
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0,
        trackVisibility: true,
        delay: 100
    });

    return (
        <div className={`${styles.service_card} ${inView ? styles.visible_card : ''}`} ref={ref} onClick={() => push(`/services/${link}`)}>
            <div className={styles.service_card_img}>
                <Image src={img} alt={name} width={75} height={75} />
            </div>
            <div className={styles.service_card_text}>
                <Headings heading='h4' color='primary' weight='700'>{name}</Headings>
            </div>
        </div>  
    )
}