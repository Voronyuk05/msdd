'use client'
import { Headings } from '../../ui/Headings/Headings';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import styles from './Footer.module.scss'

export function Footer() {

    return (
        <footer role="footer" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.main_footer}>
                    <div className={styles.social_icons}>
                        <Link href="https://www.facebook.com/CbrUkraine/" target="_blank"><FcGoogle className={styles.google_icon}/></Link>
                        <Link href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html" target="_blank"><FaFacebook className={styles.facebook_icon}/></Link>
                        <Link href="https://www.youtube.com/channel/UCS5KTrFQPcy7pkbP5fz0tLA" target="_blank"><FaYoutube className={styles.youtube_icon}/></Link>
                    </div>
                </div>
                <div className={styles.sub_footer}>
                    <div className={styles.copyright}>
                        <FaRegCopyright/>
                        <div className={styles.copyright_text}>
                            <Headings heading='h6_small' color='grey' weight='700'>М-СДД - Міжнародний - спецільний департамент детективів.</Headings>
                            <Headings heading='h6_small' color='grey' weight='700'>Всі права захищені.</Headings>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
     
}