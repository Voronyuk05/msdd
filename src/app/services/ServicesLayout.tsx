'use client'
import { PropsWithChildren } from "react";
import { ServicesSection } from '../../components/ui/ServicesSection/ServicesSection'  

export default function ServicesLayout({children}: PropsWithChildren) {
    return (
        <>
            <ServicesSection/>
            {children}
        </>
    )
}