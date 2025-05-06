import { UseFormRegister,Path } from "react-hook-form"
import { IContactForm } from "@/types/forms.types"
import styles from './TextArea.module.scss'

export const TextArea = ({placeHolder, register, label, value, ...props}: {placeHolder: string, value?: string, error?: boolean, register: UseFormRegister<IContactForm>, label:Path<IContactForm>}) => {
    return (
        <textarea value={value}  {...register(label)} className={styles.text_area} placeholder={placeHolder} {...props}></textarea>
    )
}