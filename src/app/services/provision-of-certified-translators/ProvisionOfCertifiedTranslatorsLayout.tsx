'use client'
import { PropsWithChildren } from "react";
import { ProvisionOfCertifiedTranslators } from './ProvisionOfCertifiedTranslators'
  
export default function ProvisionOfCertifiedTranslatorsLayout({children}: PropsWithChildren) {
    return (
        <>
            <ProvisionOfCertifiedTranslators/>
            {children}
        </>
    )
}