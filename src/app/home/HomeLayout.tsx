'use client'
import { PropsWithChildren } from "react";
import TransitionBackdrop from '../../components/ui/TransitionBackdrop/TransitionBackdrop';
import { Hero } from './Hero/Hero';
import { ServicesSection } from '../../components/ui/ServicesSection/ServicesSection'
import { BusinessPartners } from './BusinessPartners/BusinessPartners';
import { Activities } from './Activities/Activities';
import { Reviews } from "./Reviews/Reviews";
import { ContactsSection } from '../../components/ui/ContactsSection/ContactsSection';

export default function HomeLayout({children}: PropsWithChildren) {
    return (
        <>
            <TransitionBackdrop/>
            <Hero/>
            <ServicesSection/>
            <BusinessPartners/>
            <Activities/>
            <Reviews/>
            <ContactsSection/>
            {children}
        </>
    )
}