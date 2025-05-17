'use client'
import { PropsWithChildren } from "react";
import { AllTypesOfForensicExaminations } from './AllTypesOfForensicExaminations'
  
export default function AllTypesOfForensicExaminationsLayout({children}: PropsWithChildren) {
    return (
        <>
            <AllTypesOfForensicExaminations/>
            {children}
        </>
    )
}