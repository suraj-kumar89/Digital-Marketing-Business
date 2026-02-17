'use client'
import Image from "next/image"
import { useState } from "react"

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
  onIconClick,
}: TeamCardProps) {


    const [isOpen, setIsOpen] = useState(false)

  const isActive = isOpen
  return (
    <div
      className="
        relative flex flex-col justify-between
        w-[23.8125rem]
        rounded-[2rem]
        bg-[#0A0F1D]
        overflow-hidden
        transition-all duration-500
      "
    >
      {/* ================= IMAGE ================= */}

      <div
        className={`
          relative flex flex-col justify-end items-center
          px-[0.75rem] pb-[0.5rem]
          transition-all duration-500 ease-in-out
          ${active ? "h-[18rem] p-[0.5rem] gap-[1rem] items-end" : "h-[36.125rem]"}
        `}
      >
        {/* IMAGE WRAPPER (relative for icon positioning) */}
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">

          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale"
          />

          {/* ================= ICON (BOTTOM RIGHT OF IMAGE) ================= */}

         <button
  onClick={() => setIsOpen(prev => !prev)}
  className="absolute bottom-4 right-4 flex items-center justify-center p-[0.5rem] rounded-[24rem] bg-[#00C0E8] shadow-[0_17px_58.2px_-4px_rgba(0,130,251,0.22)] transition duration-300 hover:scale-110 active:scale-95 z-10"
>

            {/* PLUS (default) */}
            {!isActive && (
              <svg viewBox="0 0 24 24" className="w-[1.5rem] h-[1.5rem]">
                <path
                  d="M21 13.2857H13.2857V21H10.7143V13.2857H3V10.7143H10.7143V3H13.2857V10.7143H21V13.2857Z"
                  fill="#02050E"
                />
              </svg>
            )}

            {/* MINUS (active) */}
            {isActive && (
              <svg viewBox="0 0 24 24" className="w-[1.5rem] h-[1.5rem]">
                <path d="M21 13.2853H3V10.7139H21V13.2853Z" fill="#02050E" />
              </svg>
            )}
          </button>

        </div>

        {/* overlay name (default state) */}
        {!isActive && (
          <div className="absolute bottom-4 left-4 right-16">
            <h3 className="text-white text-[1.5rem] leading-[2.25rem] font-medium">
              {name}
            </h3>

            <span className="text-[#D9D9D9BF] text-[0.875rem]">
              {role}
            </span>
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className={`
          flex flex-col items-start gap-[1.5rem]
          px-[0.75rem] pb-[0.5rem]
          transition-all duration-500
          ${active ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}
        `}
      >
        <h3 className="text-white text-[1.5rem] leading-[2.25rem] font-medium">
          {name}
        </h3>

        <span className="text-[#D9D9D9BF] text-[0.875rem]">
          {role}
        </span>

        <p className="text-white text-[0.875rem]">{description}</p>

        {logos.length > 0 && (
          <div className="flex flex-wrap w-[21.3125rem] gap-y-[0.5rem] gap-x-[1.5rem]">
            {logos.map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt="company"
                width={71}
                height={18}
                className="w-[4.4375rem] h-[1.125rem] object-contain"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
