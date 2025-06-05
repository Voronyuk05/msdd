
import type { Metadata } from "next";
import Head from "next/head";
import type { WithContext, Organization } from "schema-dts";
import { Roboto, Oswald } from "next/font/google";
import DashboardLayout from "@/components/dashboard-layout/DashboardLayout";
import "./globals.scss";

const articleStructuredData: WithContext<Organization> = {
  "@context": "https://schema.org",
  "logo": "https://www.msdd.com/logo.png",
  "@type": "ProfessionalService",
  "name": "М-СДД",
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Anastasiia Prots"
    }
  },
  "telephone": "+380988894542",
  "location": "Ukraine, Kiev",
  "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "9:00",
          "closes": "18:00"
        },
  ],
  "image": "/logo.png"
}

const osb = Oswald({
  subsets: ["cyrillic", "latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-osb',
  style: 'normal'
})

const imb = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-zen',
  style: 'normal'
})

export const metadata: Metadata = {
  title: "М-СДД",
  description: "Офіційний веб сайт Міжнародного - спеціального департаменту детективів. Ми надаємо широкий спектр послуг, включаючи розслідування, консалтинг та підтримку в кримінальних справах. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
        id="faq-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleStructuredData),
        }}/>
        <meta httpEquiv="Content-Security-Policy" />
        <meta property="og:title" content="М-СДД - Міжнародний - Спеціальний Департамент Детективів" />
        <meta property="og:description" content="Підтримка безпеки, справидливості та захист прав громадян" />
        <meta property="og:type" content="professional service" />
        <meta property="og:image" content="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="touch-icon-iphone-retina.png"/>
        <link rel="apple-touch-icon" sizes="167x167" href="touch-icon-ipad-retina.png" />
      </Head>
      <body className={`${osb.className} ${imb.className}`}>
        <DashboardLayout>
          {children}      
        </DashboardLayout>
      </body>
    </html>
  );
}
