import { Headings } from '../Headings/Headings';
import logo from "../../../../public/logo.png";
import Image from "next/image";
import styles from "./Logo.module.scss";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image src={logo} alt="international special department of detectives logo" width={75} height={75} />
            <Headings color="primary" heading="h1" weight="700">М-СДД</Headings>
        </div>
    )
}