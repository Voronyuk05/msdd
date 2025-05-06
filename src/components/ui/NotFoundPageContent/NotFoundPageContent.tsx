'use client'

import { useRouter } from 'next/navigation';
import { PrimaryButton } from '../Buttons/Buttons';
import { Headings } from '../Headings/Headings';
import styles from './NotFoundPageContent.module.scss'

export const NotFoundPageContent = () => {
    const {push} = useRouter()

    return (
        <div className={styles.not_found_text}>
            <Headings heading='h2' color="black" weight="700">Page is not found</Headings>
            <div className={styles.wrapper_button}>
                <PrimaryButton onClick={() => push("/home")}>Return Home</PrimaryButton>
            </div>
        </div>
    )
}