'use client'

import Link from 'next/link'

export default function BookAStartegy() {
  const headingPart1 = "Book a"
  const headingPart2 = "Strategy Call"
  const subtext =
    "A focused conversation to understand your business, current challenges, and whether this approach is the right fit."
  const buttonLabel = "Partner for Growth"

  return (
    /* NEW OUTER LAYOUT */
    <section
      className="
        flex
        flex-col
        justify-end
        items-start
        w-[90rem]
        bg-[#02050E]
      "
    >
      {/* EXISTING OUTER SECTION */}
      <div
        className="
          flex
          flex-col
          items-start
          gap-[0.625rem]
          w-full
          px-[4rem]
          py-[4rem]
        "
      >
        {/* COMPONENT WRAPPER */}
        <div
          className="
            flex
            flex-col
            items-start
            gap-[2rem]
            w-full
            px-[7.5rem]
            py-[5rem]
            rounded-[1.25rem]
            bg-[#0F172A66]
            backdrop-blur-md
            overflow-hidden
            relative
          "
        >
          {/* DESKTOP */}
          <div className="hidden lg:flex w-full flex-col items-center gap-9 relative">
            {/* ORANGE GLOWS */}
            <div className="absolute top-[-150px] right-[-100px] w-[355px] h-[355px] bg-[#FF9900] rounded-full opacity-30 blur-[315px] pointer-events-none z-0" />
            <div className="absolute bottom-[-150px] left-[-150px] w-[355px] h-[355px] bg-[#FF9900] rounded-full opacity-30 blur-[315px] pointer-events-none z-0" />

            {/* TOP ROW */}
            <div className="relative z-10 flex justify-center items-center gap-6">
              <h2 className="text-white text-5xl font-semibold">
                {headingPart1}
              </h2>

              <p className="text-[#94A3B8] text-[13px] font-normal leading-[21px] max-w-[480px]">
                {subtext}
              </p>
            </div>

            {/* BOTTOM ROW */}
            <div className="relative z-10 flex justify-center items-center gap-6">
              <Link href="/book-a-call">
                <button className="bg-[#FF9900] transition-all px-4 py-2 text-sm font-semibold text-black rounded-md">
                  {buttonLabel}
                </button>
              </Link>

              <h2 className="text-white text-5xl font-bold">
                {headingPart2}
              </h2>
            </div>
          </div>

          {/* MOBILE */}
          <div className="block lg:hidden w-full flex flex-col items-center gap-6 text-center relative">
            <div className="absolute top-[-150px] right-[-100px] w-[355px] h-[355px] bg-[#FF9900] rounded-full opacity-30 blur-[315px] pointer-events-none z-0" />
            <div className="absolute bottom-[-150px] left-[-150px] w-[355px] h-[355px] bg-[#FF9900] rounded-full opacity-30 blur-[315px] pointer-events-none z-0" />

            <h2 className="relative z-10 text-white text-[28px] font-semibold leading-[43px]">
              {headingPart1} {headingPart2}
            </h2>

            <p className="relative z-10 text-[#94A3B8] text-[10px] font-normal leading-[16px]">
              {subtext}
            </p>

            <Link href="/book-a-call">
              <button className="relative z-10 bg-[#FF9900] px-6 py-3 text-sm sm:text-base font-semibold text-black rounded-md">
                {buttonLabel}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
