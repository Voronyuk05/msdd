import { useState } from 'react';
import { activitiesData } from '@/data/activities.data';
import { Section } from '@/components/ui/Section/Section';
import { ActivityCard } from './ActivityCard/ActivityCard';
import { PrimaryButton } from '../../../components/ui/Buttons/Buttons';
import Image from 'next/image';
import activities from '../../../../public/activities.png'
import styles from './Activities.module.scss'

export const Activities = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)

    return (
        <Section section_class={styles.activities_section} id="activities">
            <div className="container">
                <div className="title">
                    <Image src={activities} alt="діялність м-сдд" width={400} height={80}/>
                </div>
                <div className={`${styles.content} ${isOpened ? styles.showed : 0}`}>
                    {activitiesData.map(({id, link, title}, index) => (
                        <ActivityCard id={id} link={link} title={title} key={index}/>
                    ))}
                </div>
                <div className={styles.wrapper_button}>
                    <PrimaryButton onClick={() => setIsOpened(!isOpened)}>
                        {isOpened ? "Сховати" : "Показати ще"}
                    </PrimaryButton>
                </div>
            </div>
        </Section>
    )
}