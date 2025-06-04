import { Metadata } from "next";
import ContactsLayout from "./ContactsLayout";

export const metadata: Metadata = {
  title: "М-СДД",
  description: "Контакти Можнародного - Спеціального Департаменту Детективів. Зв'яжіться з нами для отримання дотаткової інформації про наші послуги, команду та місію. Ми завжди готові допомогти вам у вирішенні ваших питань",
};

export default function ContactsPage() {
    return (
        <>
            <ContactsLayout/>
        </>
    )
}