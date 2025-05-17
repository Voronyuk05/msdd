import { Headings } from '../Headings/Headings';
import { IBlockCard } from '@/types/cardsBlock.types';
import Image from 'next/image'
import styles from './CardsBlock.module.scss'

export const CardsBlock = ({block_name, title, cardsList}: {block_name: string, title: string, cardsList: IBlockCard[]}) => {
    return (
        <div className={`${block_name} ${styles.cards_block}`}>
            <div className={styles.title}>
                <Headings heading='h3' color='black' weight='700'>{title}</Headings>
            </div>
            <div className={styles.cards_list}>
                {cardsList.map(({img, name}, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.card_img}>
                            <Image src={img} alt={name} width={50} height={50}/>
                        </div>
                        <div className={styles.card_text}>
                            <Headings heading='h5' color='primary' weight='700'>{name}</Headings>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}