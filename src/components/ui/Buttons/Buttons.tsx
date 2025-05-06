import { ReactNode } from "react"
import styles from './Buttons.module.scss'

export const PrimaryButton = ({children, ...props}: {children: string | ReactNode,  onClick?: () => void}) => {
    return (
        <button className={styles.primary_button} {...props}>{children}</button>
    )
}

export const SecondaryButton = ({children, ...props}: {children: string | ReactNode,  onClick?: () => void}) => {
    return (
        <button className={styles.secondary_button} {...props}>{children}</button>
    )
}

export const TransparentButton = ({children, ...props}: {children: string | ReactNode,  onClick?: () => void}) => {
    return (
        <button className={styles.transparent_button} {...props}>{children}</button>
    )
}