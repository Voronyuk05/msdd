'use client'
import { PropsWithChildren } from "react";
import { RepaymentOfDebtsUnderBankGuarantees } from './RepaymentOfDebtsUnderBankGuarantees'
  
export default function RepaymentOfDebtsUnderBankGuaranteesLayout({children}: PropsWithChildren) {
    return (
        <>
            <RepaymentOfDebtsUnderBankGuarantees/>
            {children}
        </>
    )
}