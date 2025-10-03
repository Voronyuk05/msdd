'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Nav } from '../../ui/Nav/Nav';
import Logo from '../../ui/Logo/Logo';
import Image from 'next/image';
import order from "../../../../public/order.png"
import styles from './Header.module.scss'
import { Headings } from '../../ui/Headings/Headings';

export const Header = () => {
    const path = usePathname()
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isShowed, setIsShowed] = useState<boolean>(true);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isServicesMenuShowed, setIsServicesMenuShowed] = useState<boolean>(false)
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.document.body.style.overflow = isChecked ? 'hidden' : 'auto'
        }

        return () => {window.document.body.style.overflow = 'hidden auto'}
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => {
                if (window.document.body.clientWidth > 1200) {
                    setIsChecked(false)
                    setIsServicesMenuShowed(false)
                }
            })
    
            if (window.document.body.clientWidth > 1200) {
                setIsChecked(false)
                setIsServicesMenuShowed(false)
            }
        }

        return () => window.removeEventListener('resize', () => {})
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 50 && !isChecked) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            })
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                if (window.scrollY > lastScrollY && window.scrollY > 200 && !isChecked) {
                    setIsShowed(false)
                } else {
                  setIsShowed(true)
                }
                lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
            });
        }
    }, [])

    useEffect(() => {
        setIsChecked(false)
    }, [path])
    

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsChecked(false)
            setIsServicesMenuShowed(false)
        }
    }

    const handleSetChecked = () => {
        setIsChecked(!isChecked)
        setIsServicesMenuShowed(false)
    }

    const handleToggleServicesDropdownVisibility = () => {
        setIsServicesMenuShowed(!isServicesMenuShowed)
    }

    return (
        <header className={`${isScrolled && styles.attached } ${!isShowed && styles.hidden} ${styles.header}`}>
            <div className={styles.container}>
                <Logo/>
                <div className={`${styles.menu_button} ${isChecked ? `${styles.checked}` : ''}`} onClick={() => handleSetChecked()}>
                    <span></span>
                </div>
                <div className={`${styles.menu_backdrop} ${isChecked ? styles.menu_opened : ''}`} onClick={handleBackdropClick}>
                    <div className={styles.menu}>
                        <Nav isServicesMenuShowed={isServicesMenuShowed} handleToggleServicesDropdownVisibility={handleToggleServicesDropdownVisibility}/>
                    </div>
                </div>
                <div className={styles.wrapper_company_name}>
                    <Headings heading='h5' color='primary' weight='700'>Міжнародний спеціалізований департамент детективів</Headings>
                    <Image src={order} alt="order of ukrainian governance and the area of ukraine" width={110} height={75} />
                </div>
            </div>
        </header>
    )
}