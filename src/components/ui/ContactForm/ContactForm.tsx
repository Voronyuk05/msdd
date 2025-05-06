import { SubmitHandler, useForm } from 'react-hook-form';
import { Headings } from '../Headings/Headings';
import { PrimaryButton } from '../Buttons/Buttons';
import { Input } from '../Inputs/Input';
import { TextArea } from '../TextArea/TextArea';
import { IContactForm } from '../../../types/forms.types';
import styles from './ContactForm.module.scss'

export const ContactForm = () => {
    const {register, handleSubmit, reset} = useForm<IContactForm>({})

    const onSubmit: SubmitHandler<IContactForm> = (data) => {
        reset()
    }

    return (
        <div className={styles.wrapper_form}>
            <div className={styles.wrapper_heading}>
                <Headings heading='h2' color="black" weight="700" className={styles.heading}>Написати онлайн</Headings>
            </div>
            <form onSubmit={() => handleSubmit(onSubmit)} className={styles.contact_form}>
                <label className={styles.label}>
                    <Input placeHolder='Ваш Email' label='email' register={register}/>
                </label>
                <label className={styles.label}>
                    <Input placeHolder='Ваш телефон' label='tel' register={register}/>
                </label>
                <label className={styles.label_textarea}>
                    <TextArea placeHolder='Ваше питання' label='message' register={register}/>
                </label>
                <div className={styles.wrapper_button}>
                    <PrimaryButton>Відправити</PrimaryButton>
                </div>
            </form>
        </div>
    )
}