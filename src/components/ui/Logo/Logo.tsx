import { Headings } from '../Headings/Headings';
import logo from '../../../../public/logo.png';
import ukrainian_flag from "../../../../public/Flag_of_Ukraine.png";
import european_flag from "../../../../public/Flag_of_Europe.png";
import Image from "next/image";
import styles from "./Logo.module.scss";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image className={styles.logo_icon} src={logo} alt='лого Міжнародного Спеціалізованого Департаменту Детективів' priority width={90} height={90}/>
            <div className={styles.line}></div>
            <div className={styles.logo_item}>
                <Image src={ukrainian_flag} alt="флаг України" priority width={50} height={37} />
                <Headings color="secondary" heading="h6_small" weight="700">Міжнародний Спеціалізований Департамент Детективів</Headings>
            </div>
            <div className={styles.line}></div>
            <div className={styles.logo_item}>
                <Image src={european_flag} alt='флаг Європи' priority width={50} height={37}/>
                <Headings color='primary' heading='h6_small' weight='700'>Département International Spécialisé Dans Les Enquêtes Privées</Headings>
            </div>
        </div>
    )
}