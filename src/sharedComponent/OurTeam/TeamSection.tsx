'use client'


import TeamCard from './TeamCard'
import { useEffect, useState } from "react"



/* ================= SECTION ================= */

export default function OurTeamSection() {
const [activeIndex, setActiveIndex] = useState(0)


useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % 3)
  }, 2000)

  return () => clearInterval(interval)
}, [])





  return (
    <section
      className="
        flex flex-col justify-center items-center
        gap-[2.5rem]
        px-[7.5rem] py-[5rem]
        w-full
        bg-[#050914]
      "
    >
      {/* ================= HEADING ================= */}

      <div className="flex flex-col items-center gap-3 text-center max-w-[42rem]">

        <h2
          className="
            text-white text-center
            text-[3rem]
            leading-[4rem]
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

      <div className="grid grid-cols-3 gap-8 w-full max-w-[90rem]">

        <TeamCard
         active={activeIndex === 0}
          image="/team/shitanshu.jpg"
          name="Shitanshu Kumar"
          role="Founder · Performance Marketing Lead"
          description="Owns overall strategy, paid acquisition decisions, and performance direction. Involved from planning through execution to ensure outcomes stay aligned with business goals."
          logos={['/logo/logo18.svg','/logo/logo19.svg','/logo/logo20.svg','/logo/logo21.svg', '/logo/logo22.svg', '/logo/logo23.svg']}
        />

        <TeamCard
         active={activeIndex === 1}
          image="/team/shikhar.png"
          name="Shikhar Chawla"
          role="Landing Pages & Conversion"
          description="Focuses on landing page structure, messaging clarity, and conversion flow to ensure traffic turns into meaningful results."
          logos={['/logo/logo24.svg','/logo/logo25.svg','/logo/logo26.svg','/logo/logo27.svg','/logo/logo28.svg']}
        />

        <TeamCard
             active={activeIndex === 2}
          image="/team/pritesh.png"
          name="Pritesh Mishra"
          role="Sr. SEO Manager"
          description="Focuses on landing page structure, messaging clarity, and conversion flow to ensure traffic turns into meaningful results."
          logos={['/logo/logo29.svg','/logo/logo30.svg','/logo/logo31.svg','/logo/logo32.svg']}
        />

      </div>
    </section>
  )
}