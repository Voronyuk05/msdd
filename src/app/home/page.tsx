import { Metadata } from "next";
import HomeLayout from "./HomeLayout"

export const metadata: Metadata = {
  title: "М-СДД",
  description: "Офіційний веб сайт Міжнародного - спеціального департаменту детективів. Ми надаємо широкий спектр послуг, включаючи розслідування, консалтинг та підтримку в кримінальних справах. ",
};

export default function HomePage() {
    return (
      <>
        <HomeLayout/>
      </>
    )
  }
  