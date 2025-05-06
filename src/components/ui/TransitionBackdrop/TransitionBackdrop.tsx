'use client'
import { useInView } from "react-intersection-observer";
import styles from './TransitionBackdrop.module.scss'

export default function TransitionBackdrop() {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0,
        trackVisibility: true,
        delay: 100
    });
    
    return (
        <div ref={ref} className={`${inView ? styles.visible_backdrop : ''} ${styles.backdrop}`}></div>
    )
}