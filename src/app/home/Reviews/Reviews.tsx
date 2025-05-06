import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SwiperSlide } from 'swiper/react';
import { reviewsData } from '@/data/reviews.data';
import { CardsSwiper } from '../../../components/ui/CardsSwiper/CardsSwiper';
import { Stars } from '../../../components/ui/Stars/Stars';
import { Headings } from '@/components/ui/Headings/Headings';
import { Paragraph } from '@/components/ui/Paragraph/Paragraph';
import { Modal } from '@/components/ui/Modal/Modal';
import { ReviewCard } from './ReviewCard/ReviewCard';
import { IReview } from '@/types/reviews.types';
import Image from 'next/image';
import reviews_about_msdd from '../../../../public/reviews_about_msdd.png'
import styles from './Reviews.module.scss'


export const Reviews = () => {
    const [currentReview, setCurrentReview] = useState<IReview | null>(null)
    const [slidesPerView, setSlidesPerView] = useState<number>(3)
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
        trackVisibility: true,
        delay: 100
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => {
                const windowWidth = window.document.body.clientWidth
                if (windowWidth > 1200) {
                    setSlidesPerView(3)
                } else if (windowWidth < 1200 && windowWidth > 768) {
                    setSlidesPerView(2)
                } else {
                    setSlidesPerView(1)
                }
            })
        }

        return () => window.removeEventListener('resize', () => {})
    })

    function handleCloseModal() {
        setCurrentReview(null)
    }

    return (
        <section className={`${styles.reviews_section} section io_section ${inView ? 'visible_io_section' : ''}`} ref={ref} id='reviews'>
            {currentReview && 
                <Modal handleCloseModal={handleCloseModal}>
                    <div className={styles.modal_review}>
                        <div className={styles.review_title}>
                            <Headings heading='h4' color='primary' weight='700'>{currentReview.name}</Headings>
                            <Stars rating={currentReview.rating}/>
                        </div>
                        <div className={styles.review_text}>
                            <Paragraph color='black' weight='500'>{currentReview.message}</Paragraph>
                        </div>
                    </div>
                </Modal>}
            <div className="container">
                <div className="title">
                    <Image src={reviews_about_msdd} alt="відгуки про М-СДД" width={400} height={80}/>
                </div>
                <CardsSwiper slidesPerView={slidesPerView}>
                    {reviewsData.map((review, index) => (
                        <SwiperSlide key={index}><ReviewCard review={review} setCurrentReview={setCurrentReview}/></SwiperSlide>
                    ))}
                </CardsSwiper>
            </div>
        </section>
    )
}