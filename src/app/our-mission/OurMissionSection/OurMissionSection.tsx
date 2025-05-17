import { principlesCardsData } from '@/data/cardsBlocks.data';
import { CardsBlock } from '@/components/ui/CardsBlock/CardsBlock';
import { Section } from '@/components/ui/Section/Section';
import { Headings } from '../../../components/ui/Headings/Headings';
import { Paragraph } from '../../../components/ui/Paragraph/Paragraph';
import Image from 'next/image'
import our_mission_heading_image from '../../../../public/our_mission_heading.png'
import our_misison_content from '../../../../public/our_mission_content.jpg'
import styles from './OurMissionSection.module.scss'

export const OurMisisonSection = () => {
    return (
        <Section section_class={styles.our_mission_section}>
            <div className="title">
                <Image src={our_mission_heading_image} alt="наша місія" width={300} height={80} />
            </div>
            <div className="content">
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Міжнародний — Спеціальний Департамент Детективів — професійна команда на боці пошуку та відстоювання справедливості</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Міжнародний — Спеціальний Департамент Детективів було створено командою професіональних співробітників спецслужб, правоохоронних органів та детективних агентств, які закінчили свою трудову діяльність на державні структури і розпочали власну справу безпосередньо на користь наших громадян.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Наш штат складається з кваліфікованих спеціалістів в сфері криміналістики, аналітики, юриспруденції, психологіі, а також передових інформаційних технологій. Ми працюємо по всій території України і за потреби надаємо послуги за межами нашої держави.</Paragraph>
                    <div className='article_img'>
                        <Image src={our_misison_content} alt="investigation table" width={1000} height={440} />
                    </div>
                    <Paragraph color='black' weight='500' className='article_text'>Основна мета Міжнародного — Спеціального Департаменту Детективів – це захист прав наших громадян і допомога в відновленні справедливості. Кожна справа розслідується професійно і прискіпливо до усіх деталей.</Paragraph>
                    <CardsBlock block_name="principles" title="Наші Принципи" cardsList={principlesCardsData}/>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>М-СДД в Україні: переваги співпраці з нами</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Міжнародний — Спеціальний Департамент Детективів працює виключно у межах правового поля і користується законними методами отримання інформації. За роки трудової діяльності в державних і приватних структурах України наші експерти заручилися підтримкою колег і партнерів. Ми маємо налагоджену співпрацю з правоохоронними органами, адвокатськими об`єднаннями, громадськими спілкам.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Звертаючись до нас, Ви можете бути впевнені, що отримаєте всю необхідну інформацію і гарантовано вирішите свою справу.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Для нас немає безнадійних справ. Є тільки не вирішені до нас!</Paragraph>
                </div>
            </div>
        </Section>
    )
}