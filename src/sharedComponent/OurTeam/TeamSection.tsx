'use client'

import TeamCard from './TeamCard'
import { useEffect, useState } from "react"
const assetPath = '/digital-marketing-agency';

/* ================= SECTION ================= */

export default function OurTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3)
    }, 4000) // Increased slightly to give users more time to read active cards

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="
        flex flex-col justify-center items-center
        gap-[2.5rem]
        /* Responsive padding: 1.5rem on mobile, 3rem on tablet, 7.5rem on desktop */
        px-6 md:px-12 lg:px-[7.5rem] 
        py-[3.5rem] md:py-[5rem]
        w-full
        bg-[#050914]
      "
    >
      {/* ================= HEADING ================= */}

      <div className="flex flex-col items-center gap-3 text-center max-w-[42rem]">
        <h2
          className="
            text-white text-center
            /* Responsive Font Sizes */
            text-[2rem] md:text-[2.5rem] lg:text-[3rem]
            leading-[2.75rem] md:leading-[3.5rem] lg:leading-[4rem]
            font-medium
            font-[var(--Type-Font-Family-Headings)]
          "
        >
          Who You’ll{' '}
          <span className="text-[#F90]">
            Work With
          </span>
        </h2>

        <p
          className="
            text-[#C2CAD6]
            text-[0.875rem]
            leading-[1.25rem]
            font-normal
            font-[var(--Type-Font-Family-Body)]
          "
        >
          Work is handled by a small, focused team with clear responsibility.
          There are no layers or hand-offs that dilute decision-making.
        </p>
      </div>

      {/* ================= TEAM GRID ================= */}

      <div className="
        grid 
        /* 1 column on mobile, 2 on tablet, 3 on desktop */
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-8 
        w-full 
        max-w-[90rem]
        justify-items-center
      ">
        <TeamCard
          active={activeIndex === 0}
          image={`${assetPath}/team/shitanshu.jpg`}
          name="Shitanshu Kumar"
          role="Founder · Performance Marketing Lead"
          description="Owns overall strategy, paid acquisition decisions, and performance direction. Involved from planning through execution to ensure outcomes stay aligned with business goals."
          logos={[`${assetPath}/logo/logo18.svg`, `${assetPath}/logo/logo19.svg`, `${assetPath}/logo/logo20.svg`, `${assetPath}/logo/logo21.svg`, `${assetPath}/logo/logo22.svg`, `${assetPath}/logo/logo23.svg`]}
        />

        <TeamCard
          active={activeIndex === 1}
          image={`${assetPath}/team/shikhar.png`}
          name="Shikhar Chawla"
          role="Landing Pages & Conversion"
          description="Focuses on landing page structure, messaging clarity, and conversion flow to ensure traffic turns into meaningful results."
          logos={[`${assetPath}/logo/logo24.svg`, `${assetPath}/logo/logo25.svg`, `${assetPath}/logo/logo26.svg`, `${assetPath}/logo/logo27.svg`, `${assetPath}/logo/logo28.svg`]}
        />

        {/* This card spans 1 or 2 cols depending on breakpoint to avoid awkward layout on tablet */}
        <div className="md:col-span-2 lg:col-span-1 flex justify-center w-full">
          <TeamCard
            active={activeIndex === 2}
            image={`${assetPath}/team/pritesh.png`}
            name="Pritesh Mishra"
            role="Sr. SEO Manager"
            description="Focuses on landing page structure, messaging clarity, and conversion flow to ensure traffic turns into meaningful results."
            logos={[`${assetPath}/logo/logo29.svg`, `${assetPath}/logo/logo30.svg`, `${assetPath}/logo/logo31.svg`, `${assetPath}/logo/logo32.svg`]}
          />
        </div>

      </div>
    </section>
  )
}