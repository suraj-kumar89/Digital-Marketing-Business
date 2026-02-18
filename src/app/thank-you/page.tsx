'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BookDemo() {
  const router = useRouter()

  useEffect(() => {
    // Inject Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Listen for the calendly scheduled event
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        router.push('/meeting-booked')
      }
    }

    window.addEventListener('message', handleCalendlyEvent)

    return () => {
      window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [router])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black px-4 py-8">
      <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold text-center pt-12 lg:pt-20 pb-8 lg:pb-10 leading-tight">
        Thank You! Your Next Step:
        <br />
        Book a Call With Me
      </h1>

      {/* Responsive container */}
      <div className="w-full max-w-[1100px]">
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/shitanshu-digital/saas-performance-marketing"
          style={{
            minWidth: '320px',
            height: '80vh', // mobile default
          }}
        />
      </div>

      {/* Responsive height handling */}
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
