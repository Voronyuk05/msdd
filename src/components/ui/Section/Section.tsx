import { ReactNode } from "react"
import { useInView } from 'react-intersection-observer'

export const Section = ({section_class, children, ...props}: {section_class: string, children: ReactNode, id?: string}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0,
        trackVisibility: true,
        delay: 100
    });

    return (
        <section className={`${section_class} section io_section ${inView ? 'visible_io_section' : ''}`} ref={ref} {...props}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}