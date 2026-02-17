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

          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex flex-col items-center gap-10 text-center">

            {/* TOP ROW */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
                {headingPart1}
              </h2>

              <p className="text-[#94A3B8] text-sm md:text-base max-w-lg">
                {subtext}
              </p>
            </div>

            {/* BOTTOM ROW */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              <Link href="/book-a-call">
                <button className="bg-[#FF9900] hover:opacity-90 transition px-6 py-3 text-sm md:text-base font-semibold text-black rounded-md">
                  {buttonLabel}
                </button>
              </Link>

              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
                {headingPart2}
              </h2>
            </div>
          </div>

          {/* MOBILE + TABLET */}
          <div className="lg:hidden flex flex-col items-center gap-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">
              {headingPart1} {headingPart2}
            </h2>

            <p className="text-[#94A3B8] text-sm max-w-md">
              {subtext}
            </p>

            <Link href="/book-a-call">
              <button className="bg-[#FF9900] px-6 py-3 text-sm sm:text-base font-semibold text-black rounded-md">
                {buttonLabel}
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
