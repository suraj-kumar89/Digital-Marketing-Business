import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/sharedComponent/Header'

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
    // font-variable is applied here
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body
        className="
          antialiased
          bg-[#02050E]
          text-white
          min-h-screen
          flex flex-col
        "
      >
        <Header />
        {/* Adding a 'flex-1' ensures the main content pushes 
          the footer down, and 'w-full' prevents overflow issues.
        */}
        <main className="flex-1 w-full ">
          {children}
        </main>
      </body>
    </html>
  )
}