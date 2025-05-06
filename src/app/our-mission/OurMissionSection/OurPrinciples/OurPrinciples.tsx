import { Headings } from '../../../../components/ui/Headings/Headings';
import Image from 'next/image'
import confidential from '../../../../../public/confidential.png'
import professionalism from '../../../../../public/professionalism.png'
import document_formatization from '../../../../../public/document_formatization.png'
import reporting from '../../../../../public/reporting.png'
import styles from './OurPrinciples.module.scss'

export const OurPrinciples = () => {
    return (
        <div className={styles.principles}>
            <div className={styles.title}>
                <Headings heading='h3' color='black' weight='700'>Наші Принципи</Headings>
            </div>
            <div className={styles.principles_list}>
                <div className={styles.principle_card}>
                    <div className={styles.principle_card_img}>
                        <Image src={confidential} alt="Повна конфіденційність" width={50} height={50}/>
                    </div>
                    <div className={styles.principle_card_text}>
                        <Headings heading='h5' color='primary' weight='700'>Повна конфіденційність</Headings>
                    </div>
                </div>
                <div className={styles.principle_card}>
                    <div className={styles.principle_card_img}>
                        <Image src={professionalism} alt="Професіоналізм" width={50} height={50}/>
                    </div>
                    <div className={styles.principle_card_text}>
                        <Headings heading='h5' color='primary' weight='700'>Професіоналізм</Headings>
                    </div>
                </div>
                <div className={styles.principle_card}>
                    <div className={styles.principle_card_img}>
                        <Image src={document_formatization} alt="Офіційне оформлення договірних відносин" width={50} height={50}/>
                    </div>
                    <div className={styles.principle_card_text}>
                        <Headings heading='h5' color='primary' weight='700'>Офіційне оформлення договірних відносин</Headings>
                    </div>
                </div>
                <div className={styles.principle_card}>
                    <div className={styles.principle_card_img}>
                        <Image src={reporting} alt="Докладна звітність" width={50} height={50}/>
                    </div>
                    <div className={styles.principle_card_text}>
                        <Headings heading='h5' color='primary' weight='700'>Докладна звітність</Headings>
                    </div>
                </div>
            </div>
        </div>
    )
}