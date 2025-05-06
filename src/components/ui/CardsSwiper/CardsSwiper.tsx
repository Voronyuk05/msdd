import { Swiper } from 'swiper/react';
import { ReactNode } from 'react';
import { Pagination, FreeMode, A11y } from 'swiper/modules';
import styles from './CardsSwiper.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const CardsSwiper = ({children, slidesPerView}: {children: ReactNode, slidesPerView: number}) => {
    return (
        <Swiper
            className={styles.slider}
            loop={true}
            role='slider'
            modules={[Pagination,FreeMode, A11y]}
            spaceBetween={25}
            slidesPerView={slidesPerView}
            pagination={{clickable: true}}>
            {children}
        </Swiper>
    )
}