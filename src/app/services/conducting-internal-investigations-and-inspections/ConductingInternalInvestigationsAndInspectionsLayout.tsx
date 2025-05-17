'use client'
import { PropsWithChildren } from "react";
import { ConductingInternalInvestigationsAndInspections } from './ConductingInternalInvestigationsAndInspections'
  
export default function ConductingInternalInvestigationsAndInspectionsLayout({children}: PropsWithChildren) {
    return (
        <>
            <ConductingInternalInvestigationsAndInspections/>
            {children}
        </>
    )
}