'use client'
import { PropsWithChildren } from "react";
import { ControlOfComplianceWithTradeSecrets } from './ControlOfComplianceWithTradeSecrets'
  
export default function ControlOfComplianceWithTradeSecretsLayout({children}: PropsWithChildren) {
    return (
        <>
            <ControlOfComplianceWithTradeSecrets/>
            {children}
        </>
    )
}