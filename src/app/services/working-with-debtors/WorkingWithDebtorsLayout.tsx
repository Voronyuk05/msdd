'use client'
import { PropsWithChildren } from "react";
import { WorkingWithDebtors } from './WorkingWithDebtors';
  
export default function WorkingWithDebtorsLayout({children}: PropsWithChildren) {
    return (
        <>
            <WorkingWithDebtors/>
            {children}
        </>
    )
}