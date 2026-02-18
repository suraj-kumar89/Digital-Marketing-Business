'use client'

import Footer from '@/sharedComponent/Footer'
import { useEffect } from 'react'

export default function BookDemo() {
  useEffect(() => {
    // Inject Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, []) // ✅ prevent multiple script injections

 return (
  <div className="min-h-screen flex flex-col justify-between bg-black">
    
    {/* CENTER CONTENT */}
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-[1100px]">
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/shitanshu-digital/saas-discovery-call"
          style={{
            minWidth: '320px',
            height: '80vh',
          }}
        />
      </div>
    </div>

    {/* ✅ FULL WIDTH FOOTER */}
    <Footer />

    {/* Responsive height control */}
    <style jsx>{`
      @media (min-width: 768px) {
        .calendly-inline-widget {
          height: 85vh !important;
        }
      }

      @media (min-width: 1024px) {
        .calendly-inline-widget {
          height: 700px !important;
        }
      }
    `}</style>

  </div>
)

}
