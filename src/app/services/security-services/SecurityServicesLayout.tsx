'use client'
import { PropsWithChildren } from "react";
import { SecurityServices } from './SecurityServices'
  
export default function SecurityServicesLayout({children}: PropsWithChildren) {
    return (
        <>
            <SecurityServices/>
            {children}
        </>
    )
}