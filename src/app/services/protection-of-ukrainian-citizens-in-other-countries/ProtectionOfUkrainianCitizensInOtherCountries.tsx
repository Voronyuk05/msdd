'use client'
import { professionalAssistanceData } from '../../../data/professionalAssistance.data';
import { Section } from "@/components/ui/Section/Section"  
import { ProfessionalAssistanceCard } from "./ProfessionalAssistanceCard/ProfessionalAssistanceCard"
import { Headings } from "@/components/ui/Headings/Headings"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import Image from "next/image"
import protection_of_ukrainian_citizens_title from '../../../../public/protection_of_ukrainian_citizens_title.png'

export function ProtectionOfUkrainianCitizensInOtherCountries() {
    return (
        <Section section_class="solving_crimes">
            <div className="title">
                <Image src={protection_of_ukrainian_citizens_title} alt="захист громадян України в інших країнах" width={700} height={80} />
            </div>
            <div className="content">
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Захист громадян України в інших країнах: Міжнародний — Спеціальний Департамент Детективів</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Кожен громадянин має право на відстоювання власних інтересів та прав, навіть якщо знаходиться в іншій державі. Це стосується як фізичних, так і юридичних осіб. Найкращою допомогою та тилом в такій ситуації буде допомога від справжніх професіоналів.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Відстоювання та захист прав громадян України за кордоном – це важливий момент для кожного, адже коли таке питання постає в іншій країні – це стає надзвичайно неоднозначним та досить некомфортним фактом. Перебуваючи в іншій країні, людина може бути скута у відстоюванні власних прав, або навіть стиснута з боку представників іншої держави. Задля забезпечення уникнення подібних ситуацій, необхідно звертатися до фахівців.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>М-СДД: професійна консультація, підтримка та захист наших громадян</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Методи захисту громадян зі сторони Міжнародного — Спеціального Департаменту Детективів проходять в  рамках закону та правових норм, тому рівень успіху такого захисту надзвичайно високий. Зокрема, Конституція України, Закон України «Про звернення громадян», Консульський статут України та інші правові засади стають одними з основних аспектів, на які орієнтується М-СДД. Іншими аспектами є будь-яка цінна інформація або метод вирішення питання захисту громадянина. Звісно, він також відбувається у межах правових норм.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Приватні детективні агентства завжди зацікавлені швидко і ефективно розплутати справу, отримати винагороду за свою роботи і приступити до розкриття іншого злочину, не накопляючи незавершені справи. Ділова репутація і рекомендації вдячних клієнтів – найкраща реклама і успіх в нашій справі.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Звертаючись до нас, Ви можете бути впевнені, що ми доведемо розслідування до логічного кінця і викриємо винуватців.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Захист та відстоювання прав українців за кордоном</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Захист громадян України в інших країнах включає в себе цілий спектр можливих способів впровадження цього захисту. Договори про співробітництво, меморандуми з компетентними службами. На практиці також використовуються такі заходи, як виявлення випадків порушення прав та законних інтересів громадян, вжиття заходів щодо цього, захист від будь-якої дискримінації, вжиття заходів, у випадках арешту або затримання громадян України в іншій країні, співпраця з різноманітними організаціями міжнародного формату, робота з інформацією та багато інших.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Фахівці Міжнародного — Спеціального Департаменту Детективів мають величезний досвід та успішну практику у питаннях захисту громадян поза межами України. Захищаємо законні інтереси та права громадян, по відношенню до яких скоєні злочини в таких країнах, як: Польща, Чехія, Англія, Франція, країни Прибалтики та СНГ. Ми також забезпечимо при необхідності вичерпною консультацією з будь-якого питання, залучимо до справи найкращі міжнародні зв’язки, щоб максимально успішно довести Вашу справу до кінця.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Професійна допомога з питань імміграції та статусу у Франції</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Пропонуєм підтримку на всіх етапах взаємодії з французькими імміграційними та адміністративними органами:</Paragraph>
                    <div className="article_cards_block">
                    {professionalAssistanceData.map((item, index) => (
                        <ProfessionalAssistanceCard key={index} img={item.img} title={item.title} text={item.text} />
                    ))}
                    </div>
                </div>
            </div>    
        </Section>
    )
}