'use client'
import { type PropsWithChildren } from "react"
import { usePathname } from 'next/navigation';
import { useInView } from "react-intersection-observer";
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './DashboardLayout.module.scss'

export default function DashboardLayout({children}: PropsWithChildren) {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0,
        trackVisibility: true,
        delay: 500
    });
    const path = usePathname()
    
    return (
        <div className={`${path === '/home' ? styles.dashboard_primary : ''} ${styles.dashboard}`}>
            <div ref={ref} className={`${inView ? styles.visible_backdrop : ''} ${styles.backdrop}`}></div>
            <div className={`${styles.background}`}>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </div>
    )
}