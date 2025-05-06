import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { Headings } from '@/components/ui/Headings/Headings'
import { SecondaryButton } from '../../../components/ui/Buttons/Buttons';
import styles from './Hero.module.scss'

export const Hero = () => {
    const {push} = useRouter()
    const [isAdapted, setIsAdapted] = useState<boolean>(false)
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0,
        trackVisibility: true,
        delay: 500
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => {
                if (window.document.body.clientWidth < 1200) {
                    setIsAdapted(true)
                } else {
                    setIsAdapted(false)
                }
            })
    
            if (window.document.body.clientWidth < 1200) {
                setIsAdapted(true)
            } else {
                setIsAdapted(false)
            }
        }

        return () => window.removeEventListener('resize', () => {})
    }, [])

    return (
        <section className={styles.hero} id='hero'>
            <div className={`${styles.container} ${inView ? styles.visible_content : ''}`} ref={ref}>
                <div className={styles.wrapper_text}>
                    <Headings heading='h5' color='secondary' weight='700'>М-СДД</Headings>
                    <Headings heading='h1_huge' color='secondary' weight='700'>Міжнародний {`${isAdapted ? '' : '-'}`} спеціальний департамент детективів</Headings>
                </div>
                <div className={styles.wrapper_button}>
                    <SecondaryButton onClick={() => push('/#services')}>
                        Дивитись далі
                    </SecondaryButton>
                </div>
            </div>
        </section>
    )
}