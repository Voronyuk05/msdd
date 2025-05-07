import { Swiper } from 'swiper/react';
import { ReactNode } from 'react';
import { Navigation, Pagination, FreeMode, A11y } from 'swiper/modules';
import styles from './CardsSwiper.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const CardsSwiper = ({children, slidesPerView}: {children: ReactNode, slidesPerView: number}) => {
    return (
        <div className={styles.swiper_container}>
            <Swiper
                className={styles.slider}
                loop={true}
                role='slider'
                modules={[Navigation, Pagination,FreeMode, A11y]}
                spaceBetween={25}
                slidesPerView={slidesPerView}
                navigation={true}
                pagination={{clickable: true}}>
                {children}
            </Swiper>
        </div>
    )
}