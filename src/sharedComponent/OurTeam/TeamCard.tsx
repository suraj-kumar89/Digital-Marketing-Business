'use client'
import Image from "next/image"
import { useState } from "react"
const assetPath = '/digital-marketing-agency';

interface TeamCardProps {
  image: string
  name: string
  role: string
  description: string
  logos?: string[]
  active?: boolean
  onIconClick?: () => void
}

export default function TeamCard({
  image,
  name,
  role,
  description,
  logos = [],
  active = false,
}: TeamCardProps) {

  const [isOpen, setIsOpen] = useState(false)

  // Link isActive to internal state while respecting potential prop overrides
  const isActive = isOpen

  return (
    <div
      className="
        relative flex flex-col justify-between
        /* Responsive Width: Full on mobile, fixed on desktop */
        w-full sm:w-[23.8125rem]
        rounded-[2rem]
        bg-[#0A0F1D]
        overflow-hidden
        transition-all duration-500
        mx-auto
      "
    >
      {/* ================= IMAGE ================= */}

      <div
        className={`
          relative flex flex-col justify-end items-center
          px-[0.75rem] pb-[0.5rem] pt-[0.75rem]
          transition-all duration-500 ease-in-out
          /* Responsive Height: Adjusts based on screen and state */
          ${isActive 
            ? "h-[18rem] md:h-[22rem] p-[0.5rem] gap-[1rem] items-end" 
            : "h-[28rem] sm:h-[32rem] md:h-[36.125rem]"
          }
        `}
      >
        {/* IMAGE WRAPPER */}
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 640px) 100vw, 400px"
          />

          {/* ================= ICON ================= */}
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="absolute bottom-4 right-4 flex items-center justify-center p-[0.5rem] rounded-[24rem] bg-[#00C0E8] shadow-[0_17px_58.2px_-4px_rgba(0,130,251,0.22)] transition duration-300 hover:scale-110 active:scale-95 z-10"
          >
            {!isActive ? (
              <svg viewBox="0 0 24 24" className="w-[1.25rem] h-[1.25rem] md:w-[1.5rem] md:h-[1.5rem]">
                <path
                  d="M21 13.2857H13.2857V21H10.7143V13.2857H3V10.7143H10.7143V3H13.2857V10.7143H21V13.2857Z"
                  fill="#02050E"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-[1.25rem] h-[1.25rem] md:w-[1.5rem] md:h-[1.5rem]">
                <path d="M21 13.2853H3V10.7139H21V13.2853Z" fill="#02050E" />
              </svg>
            )}
          </button>
        </div>

        {/* overlay name (only in default state) */}
        {!isActive && (
          <div className="absolute bottom-6 left-6 right-16">
            <h3 className="text-white text-[1.25rem] md:text-[1.5rem] leading-tight md:leading-[2.25rem] font-medium">
              {name}
            </h3>
            <span className="text-[#D9D9D9BF] text-[0.75rem] md:text-[0.875rem]">
              {role}
            </span>
          </div>
        )}
      </div>

      {/* ================= CONTENT (Active State) ================= */}

      <div
        className={`
          flex flex-col items-start gap-[1rem]
          px-[1.25rem] md:px-[1.5rem]
          transition-all duration-500
          ${isActive ? "opacity-100 max-h-[600px] pb-[1.5rem]" : "opacity-0 max-h-0 pb-0"}
        `}
      >
        <div>
          <h3 className="text-white text-[1.25rem] md:text-[1.5rem] leading-tight md:leading-[2.25rem] font-medium">
            {name}
          </h3>
          <span className="text-[#D9D9D9BF] text-[0.75rem] md:text-[0.875rem]">
            {role}
          </span>
        </div>

        <p className="text-white text-[0.8125rem] md:text-[0.875rem] leading-relaxed">
          {description}
        </p>

        {logos.length > 0 && (
          <div className="flex flex-wrap gap-y-[0.5rem] gap-x-[0.75rem] md:gap-x-[1rem] w-full">
            {logos.map((logo, i) => (
              <div key={i} className="relative w-[3.5rem] md:w-[4.4375rem] h-[1.5rem] md:h-[2rem]">
                <Image
                  src={logo}
                  alt="company logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}