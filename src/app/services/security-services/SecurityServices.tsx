'use client'
import { Section } from "@/components/ui/Section/Section"  
import { Headings } from "@/components/ui/Headings/Headings"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import Image from "next/image"
import security_services_title from '../../../../public/security_services_title.png'

export function SecurityServices() {
    return (
        <Section section_class="solving_crimes">
            <div className="title">
                <Image src={security_services_title} alt="послуги охорони" width={400} height={80} />
            </div>
            <div className="content">
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Послуги охорони — Міжнародний — Спеціальний Департамент Детективів</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>На перший погляд, сучасне життя достатньо передбачувано з новими технологіями охорони, розвитком цієї системи загалом. Фізична охорона, охорона майна, охорона житла, охорона бізнесу – всі сфери налагоджені з появою охоронної сигналізації, охоронних систем, відеоспостереження та інших допоміжних засобів. Проте разом з цим, нажаль, продовжує розвиватіся світ злочинницства, з’являються нові способи обману та способів замаху на матеріальне чи духовне благополуччя людини, особливо з нелегким на сьогодні періодом для України.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Для людини однією з основних життєвих потреб є почуття безпеки. Тільки якщо людина почуває себе фізично і морально захищеною, то вона спроможна продовжувати свою нормальну життєдіяльність. Саме тому стає очевидним, що охорона є найкращим способом захистити себе, свою сім’ю, житло, бізнес чи майно, тим самим подарувати собі відчуття безпеки, захисту та впевненості в майбутньому. Це може стосуватись як до фізичних та матеріальних благ людини, так і для емоційного та психологічного контролю та заспокоєння.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Фізична охорона, охорона майна, охорона житла, охорона бізнесу</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Охорона в Україні може бути дуже продуктивною та надійною, якщо звернутися до компетентних фахівців у даній сфері. Міжнародний — Спеціальний Департамент Детективів має великий досвід у питанні охорони об’єктів та суб’єктів, організації та проведення охоронних послуг будь-якого ступню. Впродовж багатьох років ми співпрацюємо з надійними організаціями та маємо зв’язки з державними органами та представниками державних служб. Це допомагає нам надавати Послуги Охорони на найвищому рівні.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>До основних послуг охорони відносяться як установка технічних засобів охорони, пультова та фізична охорона та консультація щодо цього, так і, у разі необхідності, надання надійної охорони будь-якого типу для проведення необхідних операцій, нейтралізації загрозливих ситуацій або просто для впевненості в захисті та безпеці. Крім того, Ви в будь-який момент спроможні получити від фахівців М-СДД вичерпну консультацію з питання охорони та будь-якого його аспекту.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Охорона: послуги та консультація в Україні — М-СДД</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Питання охорони та безпеки дуже важливе, тому варто довіритися справжнім професіоналам у даній справі. Міжнародний — Спеціальний Департамент Детективів надає найкращі послуги з охорони в Києві, Україні та ставить понад усе комфорт та безпеку клієнта, конфіденційність та роботу в рамках правових та законодавчих норм.</Paragraph>
                </div>
            </div>    
        </Section>
    )
}