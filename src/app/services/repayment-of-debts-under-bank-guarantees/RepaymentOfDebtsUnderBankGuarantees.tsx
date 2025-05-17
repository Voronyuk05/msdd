'use client'
import { repaymentMethodsCardsData } from "@/data/cardsBlocks.data"
import { CardsBlock } from '../../../components/ui/CardsBlock/CardsBlock';
import { Section } from "@/components/ui/Section/Section"  
import { Headings } from "@/components/ui/Headings/Headings"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import Image from "next/image"
import repayment_of_debts_under_bank_guarantees_title from '../../../../public/repayment_of_debts_under_bank_guarantees_title.png'

export function RepaymentOfDebtsUnderBankGuarantees() {
    return (
        <Section section_class="solving_crimes">
            <div className="title">
                <Image src={repayment_of_debts_under_bank_guarantees_title} alt="повернення боргів під гарантіями банка" width={700} height={80} />
            </div>
            <div className="content">
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Що таке повернення боргів під гарантіями банку?</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Повернення боргів під гарантіями банку — це юридичний механізм забезпечення виконання боргових зобов’язань, коли третьою стороною виступає банк. У такій схемі банк надає гарантію кредитору (постачальнику, партнеру або інвестору), що в разі невиконання боржником своїх зобов’язань, саме банк виконає їх у межах визначеної суми.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Це забезпечує додатковий рівень фінансової безпеки для всіх учасників угоди та часто використовується у великому бізнесі, міжнародній торгівлі або інвестиційних проектах.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Однак, навіть наявність банківської гарантії не виключає ризиків шахрайства або умисного ухилення від боргів. Саме в таких ситуаціях Міжнародний - Спеціальний Департамент Детективів розпочинає розслідування та застосовує комплекс заходів для повернення коштів.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Як Міжнародний - Спеціальний Департамент Детективів допомагає у поверненні боргів під гарантіями банку?</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Наш департамент спеціалізується на поверненні боргів із залученням банківських гарантій, використовуючи легальні інструменти та спеціалізовані розслідувальні методи.</Paragraph>
                    <CardsBlock block_name="repayment methods" title="Ми діємо у трьох ключових напрямках" cardsList={repaymentMethodsCardsData}/>
                    <Paragraph color='black' weight='500' className='article_text'>Ми працюємо конфіденційно, швидко та результативно, ставлячи на перше місце захист інтересів наших клієнтів та відновлення справедливості в фінансових відносинах.</Paragraph>
                </div>
            </div>    
        </Section>
    )
}