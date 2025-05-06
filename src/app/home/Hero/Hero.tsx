import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Headings } from '@/components/ui/Headings/Headings'
import styles from './Hero.module.scss'

export const Hero = () => {
    const [isAdapted, setIsAdapted] = useState<boolean>(false)
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0,
        trackVisibility: true,
        delay: 500
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.document.body.clientWidth < 1200) {
                setIsAdapted(true)
            } else {
                setIsAdapted(false)
            }
        })
    })

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div ref={ref} className={`${styles.wrapper_text} ${inView ? styles.visible_text : ''}`}>
                    <Headings heading='h5' color='secondary' weight='700'>М-СДД</Headings>
                    <Headings heading='h1_huge' color='secondary' weight='700'>Міжнародний {`${isAdapted ? '' : '-'}`} спеціальний <span>департамент детективів</span></Headings>
                </div>
            </div>
        </section>
    )
}