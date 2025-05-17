'use client'
import { PropsWithChildren } from "react";
import { LegalAssistanceInConcludingContracts } from './LegalAssistanceInConcludingContracts'
  
export default function LegalAssistanceInConcludingContractsLayout({children}: PropsWithChildren) {
    return (
        <>
            <LegalAssistanceInConcludingContracts/>
            {children}
        </>
    )
}