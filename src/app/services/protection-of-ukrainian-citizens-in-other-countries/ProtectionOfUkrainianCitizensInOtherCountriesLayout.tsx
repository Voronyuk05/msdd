'use client'
import { PropsWithChildren } from "react";
import { ProtectionOfUkrainianCitizensInOtherCountries } from './ProtectionOfUkrainianCitizensInOtherCountries'
  
export default function ProtectionOfUkrainianCitizensInOtherCountriesLayout({children}: PropsWithChildren) {
    return (
        <>
            <ProtectionOfUkrainianCitizensInOtherCountries/>
            {children}
        </>
    )
}