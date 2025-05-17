'use client'
import { PropsWithChildren } from "react";
import { SolvingCrimes } from './SolvingCrimes';
  
export default function SolvingCrimesLayout({children}: PropsWithChildren) {
    return (
        <>
            <SolvingCrimes/>
            {children}
        </>
    )
}