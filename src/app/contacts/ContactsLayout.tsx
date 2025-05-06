'use client'
import { PropsWithChildren } from "react";
import { ContactsSection } from "@/components/ui/ContactsSection/ContactsSection"
import TransitionBackdrop from "@/components/ui/TransitionBackdrop/TransitionBackdrop"

export default function ContactsLayout({children}: PropsWithChildren) {
    return (
        <>
            <TransitionBackdrop/>
            <ContactsSection/>
            {children}
        </>
    )
}