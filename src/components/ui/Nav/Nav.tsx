import { useState } from 'react'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { usePathname } from 'next/navigation'
import { Headings } from '../Headings/Headings'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link'
import styles from './Nav.module.scss'
import { servicesData } from '@/data/services.data';

export const Nav = () => {
    const path = usePathname()
    const [isShowed, setIsShowed] = useState<boolean>(false)
    const {HOME, OUR_MISSION, NEWS, CONTACTS, SERVICES } = DASHBOARD_PAGES

    const handleToggleDropdownVisibility = () => {
        setIsShowed(!isShowed)
    }

    return (
        <nav className={styles.navigation}>
            <Link className={`${path.includes(HOME) ? styles.active : ''}`} href={HOME}>Головна</Link>
            <Link className={`${path.includes(OUR_MISSION) ? styles.active : ''}`} href={OUR_MISSION}>Наша Місія</Link>
            <div className={`${styles.services} ${isShowed && styles.visible_services} `} onMouseEnter={() => setIsShowed(true)} onMouseLeave={() => setIsShowed(false)}>
                <Headings heading='h6_small' color='primary' weight='700' className={`${path.includes(SERVICES) && styles.active}`}
                onClick={handleToggleDropdownVisibility}><>Послуги <IoIosArrowDown/></></Headings>
                <div className={styles.dropdown}>
                    {servicesData.map(({link, name}, index) => (
                        <Link key={index} href={`/services/${link}`} className={`${path.includes(`/services/${link}`) ? styles.active : ''}`}>{name}</Link>
                    ))}
                </div>
            </div>
            <Link className={`${path.includes(NEWS) ? styles.active : ''}`} href={NEWS}>Новини</Link>
            <Link className={`${path.includes(CONTACTS) ? styles.active : ''}`} href={CONTACTS}>Контакти</Link>
        </nav>
    )
}