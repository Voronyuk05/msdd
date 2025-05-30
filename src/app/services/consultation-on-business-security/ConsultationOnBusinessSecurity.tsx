'use client'
import { Section } from "@/components/ui/Section/Section"  
import { Headings } from "@/components/ui/Headings/Headings"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import Image from "next/image"
import consultation_on_business_security_title from '../../../../public/consultation_on_business_security_title.png'

export function ConsultationOnBusinessSecurity() {
    return (
        <Section section_class="solving_crimes">
            <div className="title">
                <Image src={consultation_on_business_security_title} alt="консультація з безпеки бізнесу" width={550} height={80} />
            </div>
            <div className="content">
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Безпека бізнесу — заходи та методи захисту за допомогою професіоналів</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Успішний бізнес — це, в першу чергу, його безпека. Якщо бізнесу та його власникам гарантована безпека, то стрімкість його розвитку та відмінного функціювання фактично забезпечена. Безпеку Вашого бізнесу можна отримати кількома способами, одним з них є кропітлива, відповідальна та професійна організація системи захисту.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Безпека бізнесу — це комплекс спеціальних мір та методів всестороннього захисту промислової діяльності від різноманітних видів загроз. До загроз безпеки бізнесу відносяться такі, як інформаційні, юридичні, економічні, організаційно-кадрові, фізичні та інші загрози, що можуть виникнути навіть у, здавалося б, суцільно захищеній справі чи бізнесі. Впровадження якісних методів та способів захисту, а також перевірка існуючих загроз допомагає забезпечити найкращих результатів, розвиток, успішну діяльність.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Консультація з безпеки бізнесу: Міжнародний — Спеціальний Департамент Детективів</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Кожен з видів загроз бізнесу потребує специфічного підходу та індивідуальних методів роботи саме з цим видом загрози. Тому максимально важливо звернутися до професіоналів, щоб захистити власний бізнес згідно з нормативно-правовими та законодавчими нормами нашої держави. Тільки комплексний підхід досвідчених професіоналів своєї справи зможуть надати дійсно ефективну консультацію з безпеки бізнесу в Україні та інших країнах, а також допомогти у цій справі.</Paragraph>
                </div>
                <div className="article">
                    <Headings heading='h3' color='black' weight='700' className='article_title'>Консультація з безпеки бізнесу в Україні</Headings>
                    <Paragraph color='black' weight='500' className='article_text'>Безпека стосується бізнесу будь-якого виду. Кожен з них має місце для загрози та ризику. Керівник точно знає, що обов’язково необхідно вжити заходи з захисту бізнесу від вищезгаданих видів загроз.</Paragraph>
                    <Paragraph color='black' weight='500' className='article_text'>Міжнародний — Спеціальний Департамент Детективів проводить ретельну, професійну організацію повної системи захисту бізнесу. Консультація, зваження всіх аспектів даної ситуації, практичні поради та максимально дієві способи реалізації найвищого рівня безпеки Вашого бізнесу. Наші висококваліфіковані фахівці мають найкращі зв’язки та дорогоцінний досвід у вирішенні подібних питань з точки зору шляхетного рівня роботи: тільки законодавча та юридична компетентність, гарантована анонімність та досконалий рівень кожного етапу співпраці М-СДД з Вами та Вашим бізнесом.</Paragraph>
                </div>
            </div>    
        </Section>
    )
}