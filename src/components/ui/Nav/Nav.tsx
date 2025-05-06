import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Nav.module.scss'

export const Nav = () => {
    const path = usePathname()
    const {HOME, OUR_MISSION, SERVICES, NEWS, CONTACTS} = DASHBOARD_PAGES

    return (
        <nav className={styles.navigation}>
            <Link className={`${path.includes(HOME) ? styles.active : ''}`} href={HOME}>Головна</Link>
            <Link className={`${path.includes(OUR_MISSION) ? styles.active : ''}`} href={OUR_MISSION}>Наша Місія</Link>
            <div className={styles.services}>
                <Link className={`${path.includes(SERVICES) ? styles.active : ''}`} href={SERVICES}>Послуги</Link>
                <div className={styles.dropwown}>
                    
                </div>
            </div>
            <Link className={`${path.includes(NEWS) ? styles.active : ''}`} href={NEWS}>Новини</Link>
            <Link className={`${path.includes(CONTACTS) ? styles.active : ''}`} href={CONTACTS}>Контакти</Link>
        </nav>
    )
}