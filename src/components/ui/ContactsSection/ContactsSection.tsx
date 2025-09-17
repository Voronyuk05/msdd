import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from '../ContactForm/ContactForm';
import { Headings } from '../Headings/Headings';
import { FaAt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Paragraph } from '../Paragraph/Paragraph';
import Link from 'next/link';
import styles from './ContactsSection.module.scss'

export const ContactsSection = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    const handleCopy = async (value: string) => {
        setIsDisabled(true)
        
        navigator.clipboard.writeText(value)
        toast('Скопійовано в буфер обміну',
            {
              icon: '👏',
              style: {
                borderRadius: '10px',
                background: '#615959',
                color: '#fff',
              },
            }
        );
        setTimeout(() => {setIsDisabled(false)}, 1000)
    }

    return (
        <section className={styles.contacts}>
                <div className={styles.title}>
                    <Headings heading='h5' color='white' weight='700'>М-СДД Україна</Headings>
                    <Headings heading='h1_huge' color='primary' weight='700'>Наші Контакти</Headings>
                </div>
                <div className={styles.content}>
                    <div className={styles.content_container}>
                        <div className={styles.content_text}>
                            <Paragraph color='black' weight='500'>{`Якщо у Вас залишилися питання або маєте справу в якій ми можемо допомогти чи запропонувати свою консультацію, Ви завжди можете написати листа, зателефонувати або під’їхати до нас в офіс. Або Ви можете написати нам онлайн у спеціальній формі і наші спеціалісти зв'яжуться з Вами.`}</Paragraph>
                            <div className={styles.contacts_list}>
                                <div className={styles.contacts_item}>
                                    <div className={styles.contact_item_icon}>
                                        <FaAt/>
                                    </div>
                                    <Headings heading='h4' color="black" weight='500' className={`${styles.contacts_link} ${styles.contacts_email}`} onClick={() => !isDisabled && handleCopy("cbr.international.group.eu@gmail.com")}>cbr.international.group.eu@gmail.com</Headings>
                                </div>
                                <div className={styles.contacts_item}>
                                    <div className={styles.contact_item_icon}>
                                        <FaPhoneAlt/>
                                    </div>
                                    <Link href="tel:+380988894542" className={styles.contacts_link}>+380 98-889-45-42</Link>
                                </div>
                                <div className={styles.contacts_item}>
                                    <div className={styles.contact_item_icon}>
                                        <FaPhoneAlt/>
                                    </div>
                                    <Link href="tel:+380995175555" className={styles.contacts_link}>+380 99-517-55-55</Link>
                                </div>
                                <div className={styles.contacts_item}>
                                    <div className={styles.contact_item_icon}>
                                        <FaPhoneAlt/>
                                    </div>
                                    <Link href="tel:+380503754146" className={styles.contacts_link}>+33 78-034-98-33</Link>
                                </div>
                            </div>
                        </div>
                        <ContactForm/>
                    </div>
                </div>
                <Toaster
                position="top-center"
                reverseOrder={false}
                />
        </section>
    )
}