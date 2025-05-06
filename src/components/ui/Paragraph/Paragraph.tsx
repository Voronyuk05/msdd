import { ReactElement } from "react"
import { IEventProps } from '../../../types/events.types';
import styles from './Paragraph.module.scss'

interface IParagraphProps extends IEventProps {
    children: string | ReactElement | ReactElement[] | (string | ReactElement)[]
    className?: string
    color: string
    weight: string
}

export const Paragraph = ({children, color, weight, className, ...props}: IParagraphProps) => {
    const fontWeight = `weight-${weight}` 
    return (
        <p className={`${color} ${fontWeight} ${styles.paragraph} ${className}`} {...props}>{children}</p>
    )
        
}