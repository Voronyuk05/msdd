import { useInView } from 'react-intersection-observer';
import { SwiperSlide } from 'swiper/react';
import { businessPartnersData } from '@/data/businessPartners.data';
import { CardsSwiper } from '../../../components/ui/CardsSwiper/CardsSwiper';
import { Headings } from '../../../components/ui/Headings/Headings';
import { Paragraph } from '../../../components/ui/Paragraph/Paragraph';
import Image from 'next/image';
import business_partners from '../../../../public/business_partners.png'
import styles from './BusinessPartners.module.scss';

export const BusinessPartners = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
        trackVisibility: true,
        delay: 100
    });

    return (
        <section className={`${inView ? styles.visible_section : ''} ${styles.business_partners_section}`} ref={ref} id="business_partners">
            <div className="container">
                <div className="title">
                    <Image src={business_partners} alt="наші ділові партнери" width={500} height={80}/>
                </div>
                <CardsSwiper slidesPerView={1}>
                    {businessPartnersData.map(({img, name, title, quote}, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.card}>
                                <div className={styles.card_img}>
                                    <Image src={img} alt={name} width={150} height={150}/>
                                </div>
                                <div className={styles.card_text}>
                                    <div className={styles.card_title}>
                                        <Headings heading='h4' color='primary' weight='700'>{name}</Headings>
                                        <Headings heading='h6_small' color='primary' weight='500'>{title}</Headings>
                                    </div>
                                    <div className={styles.card_quote}>
                                        <Paragraph color='black' weight='500'>{quote}</Paragraph>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </CardsSwiper>
            </div>
        </section>
    )
}