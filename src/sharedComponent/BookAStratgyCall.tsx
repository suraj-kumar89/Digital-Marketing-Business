'use client'

import Link from 'next/link'

export default function BookAStartegy() {
  const headingPart1 = "Book a"
  const headingPart2 = "Strategy Call"
  const subtext =
    "A focused conversation to understand your business, current challenges, and whether this approach is the right fit."
  const buttonLabel = "Partner for Growth"

  return (
    <section className="w-full bg-[#02050E] px-4 sm:px-6 lg:px-8 py-12">
      {/* CENTER CONTAINER */}
      <div className="max-w-7xl mx-auto">
        {/* COMPONENT WRAPPER */}
        <div
          className="
            relative
            flex flex-col
            gap-8
            rounded-2xl
            bg-[#0F172A66]
            backdrop-blur-md
            overflow-hidden
            px-6 sm:px-10 lg:px-20
            py-12 sm:py-16
          "
        >
          {/* ORANGE GLOWS */}
          <div className="absolute top-[-100px] right-[-80px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-[#FF9900] rounded-full opacity-30 blur-[200px] pointer-events-none" />
          <div className="absolute bottom-[-100px] left-[-80px] w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-[#FF9900] rounded-full opacity-30 blur-[200px] pointer-events-none" />

          {/* ⭐ BADGE — NO SALES PITCH */}
          <div
            className="
              hidden xl:flex
              absolute
              left-[20%]
              top-[15%]
              rotate-[4deg]
              items-center
              justify-center
              gap-[0.40825rem]
              px-[0.5rem]
              py-[0.25rem]
              rounded-full
              bg-[#08F]
              shadow-[0_11.104px_38.015px_-2.613px_rgba(0,130,251,0.22)]
              text-white
              text-[0.75rem]
              leading-none
              font-bold
              font-[var(--font-jakarta)]
              whitespace-nowrap
              z-10
            "
          >
            No sales pitch.
          </div>

          {/* ⭐ BADGE — NO OBLIGATION */}
          <div
            className="
              hidden xl:flex
              absolute
              right-[20%]
              bottom-[15%]
              rotate-[-3deg]
              items-center
              justify-center
              gap-[0.40825rem]
              px-[0.5rem]
              py-[0.25rem]
              rounded-full
              bg-[#CC7A00]
              shadow-[0_11.104px_38.015px_-2.613px_rgba(0,130,251,0.22)]
              text-white
              text-[0.75rem]
              leading-none
              font-bold
              font-[var(--font-jakarta)]
              whitespace-nowrap
              z-10
            "
          >
            No obligation.
          </div>

          {/* DESKTOP LAYOUT (Large Screens) */}
          <div className="hidden lg:flex flex-col items-center gap-10 text-center relative z-0">
            {/* TOP ROW */}
            <div className="flex justify-center items-center gap-6 lg:gap-12">
              <h2 className="text-white text-[3rem] xl:text-[5rem] leading-none font-semibold font-[var(--font-jakarta)]">
                {headingPart1}
              </h2>

              <p className="text-[#94A3B8] text-sm md:text-base max-w-[20rem] xl:max-w-lg text-left">
                {subtext}
              </p>
            </div>

            {/* BOTTOM ROW */}
            <div className="flex justify-center items-center gap-6 lg:gap-12">
              <Link href="/book-a-call">
                <button className="bg-[#FF9900] hover:opacity-90 transition px-8 py-4 text-base font-semibold text-black rounded-md whitespace-nowrap">
                  {buttonLabel}
                </button>
              </Link>

              <h2 className="text-white text-[3rem] xl:text-[5rem] leading-none font-semibold font-[var(--font-jakarta)]">
                {headingPart2}
              </h2>
            </div>
          </div>

          {/* MOBILE + TABLET LAYOUT */}
          <div className="lg:hidden flex flex-col items-center gap-6 text-center">
             {/* Small Badges for Mobile */}
             <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-[#08F] text-white text-[10px] font-bold">No sales pitch.</span>
                <span className="px-3 py-1 rounded-full bg-[#CC7A00] text-white text-[10px] font-bold">No obligation.</span>
             </div>

            <h2
              className="
                text-white
                text-[2.5rem]
                sm:text-[3.5rem]
                md:text-[4.5rem]
                leading-[1.1]
                font-semibold
                font-[var(--font-jakarta)]
              "
            >
              {headingPart1} <br className="sm:hidden" /> {headingPart2}
            </h2>

            <p className="text-[#94A3B8] text-sm sm:text-base max-w-md">
              {subtext}
            </p>

            <Link href="/book-a-call" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#FF9900] px-8 py-4 text-base font-semibold text-black rounded-md">
                {buttonLabel}
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}