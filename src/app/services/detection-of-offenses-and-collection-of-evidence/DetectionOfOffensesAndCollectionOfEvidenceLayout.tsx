'use client'
import { PropsWithChildren } from "react";
import { DetectionOfOffensesAndCollectionOfEvidence } from './DetectionOfOffensesAndCollectionOfEvidence'
  
export default function DetectionOfOffensesAndCollectionOfEvidenceLayout({children}: PropsWithChildren) {
    return (
        <>
            <DetectionOfOffensesAndCollectionOfEvidence/>
            {children}
        </>
    )
}