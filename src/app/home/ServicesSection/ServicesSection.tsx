import { servicesData } from '../../../data/services.data'
import { Section } from '@/components/ui/Section/Section';
import { ServiceCard } from './ServiceCard/ServiceCard';
import Image from 'next/image';
import our_services from '../../../../public/our_services.png';
import styles from './ServicesSection.module.scss'

export const ServicesSection = () => {
    
    return (
        <Section section_class={styles.services_section}>
            <div className='container'>
                <div className='title'>
                    <Image src={our_services} alt='наші послуги' width={400} height={80}/>
                </div>
                <div className={styles.content}>
                    {servicesData.map(({id, img, name}, index) => (
                        <ServiceCard id={id} img={img} name={name} key={index} />
                    ))}
                </div>
            </div>
        </Section>
    )
}