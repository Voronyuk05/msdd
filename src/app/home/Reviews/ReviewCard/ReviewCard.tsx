import { useInView } from 'react-intersection-observer'
import { Stars } from '@/components/ui/Stars/Stars'
import { Headings } from '@/components/ui/Headings/Headings'
import { Paragraph } from '@/components/ui/Paragraph/Paragraph'
import { TransparentButton } from '../../../../components/ui/Buttons/Buttons';
import { IReview } from '@/types/reviews.types';
import styles from './ReviewCard.module.scss'

export const ReviewCard = ({review, setCurrentReview}: {review: IReview, setCurrentReview: (review: IReview) => void}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
        trackVisibility: true,
        delay: 100
    });
    const { name, message, rating } = review
    const showedText = message.length > 125 ? message.slice(0, 125) + "..." : message

    return (
        <div className={`${styles.review_card} ${inView ? styles.visible_review_card : ''}`} ref={ref}>
            <div className={styles.review_card_title}>
                <Headings heading='h4' color='primary' weight='700'>{name}</Headings>
                <Stars rating={rating}/>
            </div>
            <div className={styles.review_card_text}>
                <Paragraph color='black' weight='500'>{showedText}</Paragraph>
            </div>
            {message.length > 100 && <div className={styles.wrapper_button}>
                <TransparentButton onClick={() => setCurrentReview(review)}>
                    Read More
                </TransparentButton>
            </div>}
        </div>
    )
}