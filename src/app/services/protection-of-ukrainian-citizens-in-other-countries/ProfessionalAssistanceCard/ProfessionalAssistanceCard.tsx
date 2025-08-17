import { useInView } from 'react-intersection-observer';
import { Headings } from '@/components/ui/Headings/Headings';
import { Paragraph } from '../../../../components/ui/Paragraph/Paragraph';
import { IProfessionalAssistanceCard } from '../../../../types/professionalAssistance';
import Image from 'next/image';
import styles from './ProfessionalAssistanceCard.module.scss'

export const ProfessionalAssistanceCard = ({img, title, text}: IProfessionalAssistanceCard) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0,
        trackVisibility: true,
        delay: 100
    });

    return (
        <div className={`${styles.professional_assistance_card} ${inView ? styles.visible_card : ''}`} ref={ref}>
            <div className={styles.professional_assistance_card_img}>
                <Image src={img} alt={title} width={75} height={75} />
            </div>
            <div className={styles.professional_assistance_card_text}>
                <Headings heading='h4' color='primary' weight='700'>{title}</Headings>
                <Paragraph color='primary' weight='500'>{text}</Paragraph>
            </div>
        </div>  
    )
}