import { Headings } from '../Headings/Headings';
import ukrainian_flag from "../../../../public/Flag_of_Ukraine.png";
import european_flag from "../../../../public/Flag_of_Europe.png";
import Image from "next/image";
import styles from "./Logo.module.scss";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <div className={styles.logo_item}>
                <Image src={ukrainian_flag} alt="флаг України" priority width={50} height={37} />
                <Headings color="secondary" heading="h6" weight="700">Міжнародний Спеціалізований Департамент Детективів</Headings>
            </div>
            <div className={styles.line}></div>
            <div className={styles.logo_item}>
                <Image src={european_flag} alt='флаг Європи' priority width={50} height={37}/>
                <Headings color='primary' heading='h6' weight='700'>Département International Spécialisé Dans Les Enquêtes Privées</Headings>
            </div>
        </div>
    )
}