'use client'
import { PropsWithChildren } from "react";
import { ContactsSection } from "@/components/ui/ContactsSection/ContactsSection"
import TransitionBackdrop from "@/components/ui/TransitionBackdrop/TransitionBackdrop"
import { OurMisisonSection } from './OurMissionSection/OurMissionSection';

export default function OurMissionLayout({children}: PropsWithChildren) {
    return (
        <>
            <OurMisisonSection />
            <TransitionBackdrop/>
            <ContactsSection/>
            {children}
        </>
    )
}