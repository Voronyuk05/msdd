import { Metadata } from "next";
import OurMissionLayout from "./OurMissionLayout";

export const metadata: Metadata = {
  title: "Наша місія, цінності та команда | М-СДД",
  description: "Дізнайтесь більше про Міжнародний - Спеціальний Департамент Детективів, про його місію, цінності та команду професіоналів, які працюють над забезпеченням безпеки та справедливості.",
};

export default function OurMissionPage() {
    return (
        <>
            <OurMissionLayout/>
        </>
    )
}