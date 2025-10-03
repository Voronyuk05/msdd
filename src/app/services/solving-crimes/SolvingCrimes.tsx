'use client'
import { crimesCardsData } from "@/data/cardsBlocks.data"
import { CardsBlock } from "@/components/ui/CardsBlock/CardsBlock"
import { Section } from "@/components/ui/Section/Section"  
import { Headings } from "@/components/ui/Headings/Headings"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import Image from "next/image"
import solving_crimes_title from '../../../../public/solving_crimes_title.png'

export function SolvingCrimes() {
    return (
        <Section section_class="solving_crimes">
            <div className="title">
                <Image src={solving_crimes_title} alt="розкриття злочинів" width={400} height={80} />
            </div>
            <div className="content">
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Розкриття злочинів та протиправних дій — Міжнародний — спеціалізований департамент детективів</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Якщо Ви потрапили у складні життєві обставини, а правоохоронні органи належним чином не можуть Вам допомогти, вихід є. Експертна група М-СДД виконає всі необхідні слідчі дії, щоб допомогти розплутати будь-який злочин, вчинений проти Вашої особистості. Ми допоможемо розкрити такі противоправні дії, як:</Paragraph>
                    <CardsBlock block_name="crimes" title="Ми допоможемо розкрити такі противоправні дії" cardsList={crimesCardsData}/>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Експертна група М-СДД — багаторічний досвід та бездоганна ділова репутація</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Завдяки досвіду наших експертів, ми розуміємо психологію злочинця, чітко визначаємо мотиви і знаходимо зачіпки для успішного розкриття злочину. Досконале і надсучасне технічне оснащення нашого бюро дозволяє нам виконати всі необхідні дії, щодо пошуку інформації і її аналізу. Тісна співпраця з правоохоронними органами і спецпідрозділами дозволяє нам в самий короткий термін надати Вам позитивний результат в розслідуванні.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Приватні детективні агентства завжди зацікавлені швидко і ефективно розплутати справу, отримати винагороду за свою роботи і приступити до розкриття іншого злочину, не накопляючи незавершені справи. Ділова репутація і рекомендації вдячних клієнтів – найкраща реклама і успіх в нашій справі.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Звертаючись до нас, Ви можете бути впевнені, що ми доведемо розслідування до логічного кінця і викриємо винуватців.</Paragraph>
                </div>
            </div>    
        </Section>
    )
}