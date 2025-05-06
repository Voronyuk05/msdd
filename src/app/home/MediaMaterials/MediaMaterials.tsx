import { useState } from 'react';
import { mediaMaterialsData } from '@/data/mediaMaterials.data';
import { Section } from '@/components/ui/Section/Section';
import { MediaMaterialCard } from './MediaMaterialCard/MediaMaterialCard';
import { PrimaryButton } from '../../../components/ui/Buttons/Buttons';
import Image from 'next/image';
import media_materials from '../../../../public/media_materials.png'
import styles from './MediaMaterials.module.scss'

export const MediaMaterials = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)

    return (
        <Section section_class={styles.media_materials_section} id="media_materials">
            <div className="container">
                <div className="title">
                    <Image src={media_materials} alt="відео матеріали" width={400} height={80}/>
                </div>
                <div className={`${styles.content} ${isOpened ? styles.showed : 0}`}>
                    {mediaMaterialsData.map(({id, link, title}, index) => (
                        <MediaMaterialCard id={id} link={link} title={title} key={index}/>
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