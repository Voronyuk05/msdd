'use client'
import { Section } from "@/components/ui/Section/Section"  
import { Headings } from "@/components/ui/Headings/Headings"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import Image from "next/image"
import conducting_internal_investigations_and_inspections_title from '../../../../public/conducting_internal_investigations_and_inspections_title.png'


export function ConductingInternalInvestigationsAndInspections() {
    return (
        <Section section_class="solving_crimes">
            <div className="title">
                <Image src={conducting_internal_investigations_and_inspections_title} alt="проведення службових розслідувань та перевірок" width={700} height={80} />
            </div>
            <div className="content">
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Службові розслідування та перевірки за допомогою спецільних методів збору інформації</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Згуртована співпраця трудового колективу і повага свого керівництва – це гарантія успішного розвитку підприємства. Та як дізнатися, чи всі співробітники організації належним чином виконують свої обов’язки, не розкрадають майно компанії та не сприяють змовам і конфліктам?</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Центральне бюро розслідувань – це той інструмент, який гарантовано допоможе Вам виявити всі недоліки в роботі будь-якої структури чи відділу на Вашому підприємстві. Наші експерти професійно виконають в Вашій компанії всі необхідні оперативно – слідчі дії шляхом впровадження в штат підісланого працівника, перевіркою на детекторі брехні, анкетуванні або іншим методом збору інформації.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Міжнародний — Спеціальний Департамент Детективів: як отримати повний внутрішній контроль в Вашій організації</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>За роки діяльності наші спеціалісти викрили ряд несумлінних дій зі сторони внутрішніх охоронних структур, виявили масштабні розкрадання майна підприємств, знайшли змовників і підбурювачів до вчинення противоправних дій.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Особливо важливим завданням для нас є виявлення схем витоку важливої інформації. Для більшості компаній розкриття працівниками комерційної таємниці несе за собою значні матеріальні і кадрові втрати. А також в деяких випадках втрату ділової репутації і закриття бізнесу.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Повний внутрішній контроль діяльності Вашої організації вбереже Вас від неочікуваних негативних дій зі сторони працівників і Ваших фінансових втрат. Замовляйте службове розслідування в М-СДД і нехай ніщо не загрожує діяльності Вашої компанії.</Paragraph>
                </div>
            </div>    
        </Section>
    )
}