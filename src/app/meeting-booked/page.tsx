'use client'

import Footer from '@/sharedComponent/Footer'
import { useEffect } from 'react'

export default function BookDemo() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black">
      
      {/* CENTER CONTENT */}
      <div className="flex flex-col justify-center items-center px-4 py-12">
        <h1 className="text-white text-4xl md:text-6xl lg:text-9xl font-semibold text-center pb-6 md:pb-8 lg:pb-10">
          Thank You!
        </h1>

        <p className="text-white text-sm md:text-base lg:text-lg font-semibold text-center max-w-[600px]">
          Your meeting has been booked. I look forward to connecting with you soon.
        </p>
      </div>

      {/* ✅ FULL WIDTH FOOTER */}
      <Footer />

    </div>
  )
}
