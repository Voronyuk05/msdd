'use client'
import { Section } from "@/components/ui/Section/Section"  
import { Headings } from "@/components/ui/Headings/Headings"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import Image from "next/image"
import detection_of_offenses_and_collection_of_evidence_title from '../../../../public/detection_of_offenses_and_collection_of_evidence_title.png'

export function DetectionOfOffensesAndCollectionOfEvidence() {
    return (
        <Section section_class="solving_crimes">
            <div className="title">
                <Image src={detection_of_offenses_and_collection_of_evidence_title} alt="виявлення правопорушень та збір доказів" width={700} height={80} />
            </div>
            <div className="content">
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Виявлення правопорушень та збір доказів — Міжнародний — Спеціальний Департамент Детективів</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Розслідування правопорушення чи злочину – складний процес, в якому задіяні декілька сторін. Інтереси потерпілого представляє сторона обвинувачення, а можливого правопорушника – адвокат. Навіщо ж тоді звертатися до приватних детективів?</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Приватний детектив – це фахівець, який поглиблюється в Вашу справу і прискіпливо добуває необхідну інформацію, яка безумовно зможе прискорити слідство і відкрити інші сторони правопорушення. Адже у слідчих і правозахисників є дуже багато важливих питань ідій як по Вашій справі, так і по іншим. Тому важливі факти можу бути невчасно помічені або не виявлені взагалі. А це суттєво впливає на хід слідства.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Висококваліфікована експертна група та передові технології в процесі експертизи в Україні</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Наймаючи спеціаліста з Міжнародного — Спеціального Департаменту Детективів Ви забезпечуєте собі надійного помічника у розслідуванні Вашої справи. Наша експертна група організує всі необхідні оперативні дії, використовуючи передові унікальні технології. Це дозволить виявити правопорушення, зібрати докази, знайти свідків або інших фігурантів справи.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Ряд додаткових оперативних дій допоможе правоохоронним органам швидко вийти на слід злочинця і захистити Ваші громадянські і конституційні права.</Paragraph>
                </div>
            </div>    
        </Section>
    )
}