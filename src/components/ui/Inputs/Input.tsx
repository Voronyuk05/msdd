import { Path, UseFormRegister } from "react-hook-form"
import { IContactForm } from "@/types/forms.types"
import styles from './Input.module.scss'

export const Input = ({placeHolder, register, label, ...props}: {placeHolder: string, register: UseFormRegister<IContactForm>, label:Path<IContactForm> }) => {
    return (
        <div className={styles.wrapper_input}>
            <input className={styles.input} type="text" placeholder={placeHolder} {...register(label)} {...props}/>
        </div>
    )
}