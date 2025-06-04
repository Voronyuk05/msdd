import { Metadata } from "next";
import ServicesLayout from "./ServicesLayout"

export const metadata: Metadata = {
  title: "М-СДД",
  description: "Дізнайтесь більше про які послуги надає Міжнародний - Спеціальний Департамент Детекивів. Ми пропонуємо широкий спектр послуг, включаючи розслідування, консалтинг та підтримку в кримінальних справах.",
};

export default function ServicesPage() {
    return (
      <>
        <ServicesLayout/>
      </>
    )
  }
  
