'use client'
import { PropsWithChildren } from "react";
import { CheckingTheBusinessReputationOfPartners } from './CheckingTheBusinessReputationOfPartners'
  
export default function CheckingTheBusinessReputationOfPartnersLayout({children}: PropsWithChildren) {
    return (
        <>
            <CheckingTheBusinessReputationOfPartners/>
            {children}
        </>
    )
}