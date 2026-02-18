'use client'

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
    <div className="min-h-screen flex justify-center items-center bg-black p-4">
      <div className="w-full max-w-[1100px]">
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/shitanshu-digital/saas-discovery-call"
          style={{
            minWidth: '320px',
            height: '80vh', // mobile default
          }}
        />
      </div>

      {/* Responsive height control */}
      <style jsx>{`
        @media (min-width: 768px) {
          .calendly-inline-widget {
            height: 85vh !important; /* tablet */
          }
        }

        @media (min-width: 1024px) {
          .calendly-inline-widget {
            height: 700px !important; /* desktop (same as your original) */
          }
        }
      `}</style>
    </div>
  )
}
