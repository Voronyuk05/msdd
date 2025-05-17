'use client'
import { PropsWithChildren } from "react";
import { ConsultationOnBusinessSecurity } from './ConsultationOnBusinessSecurity'
  
export default function ConsultationOnBusinessSecurityLayout({children}: PropsWithChildren) {
    return (
        <>
            <ConsultationOnBusinessSecurity/>
            {children}
        </>
    )
}