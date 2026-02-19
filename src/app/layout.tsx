import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/sharedComponent/Header'
import Script from "next/script"   // ✅ ADD THIS
import WhatsAppButton from '@/sharedComponent/WhatsApp'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Digital Marketing Agency | Business Outcomes',
  description: 'We help growing businesses scale with ROI-driven decisions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>

      {/* ✅ GOOGLE TAG MANAGER SCRIPT */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M2HQ4L2K');
        `}
      </Script>

      <body
        className="
          antialiased
          bg-[#02050E]
          text-white
          min-h-screen
          flex flex-col
        "
      >
        {/* ✅ GOOGLE TAG MANAGER NOSCRIPT */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2HQ4L2K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />

        <main className="flex-1 w-full">
          {children}
        </main>
      <WhatsAppButton/>
      </body>
    </html>
  )
}
