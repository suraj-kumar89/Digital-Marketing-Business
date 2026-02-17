'use client'

import Image from 'next/image'

const logos = [
  '/logo/logo1.svg',
  '/logo/logo2.svg',
  '/logo/logo3.svg',
  '/logo/logo4.svg',
  '/logo/logo5.svg',
  '/logo/logo6.svg',
  '/logo/logo7.svg',
  '/logo/logo8.svg',
  '/logo/logo9.svg',
  '/logo/logo10.svg',
  '/logo/logo11.svg',
  '/logo/logo12.svg',
  '/logo/logo13.svg',
  '/logo/logo14.svg',
  '/logo/logo15.svg',
  '/logo/logo16.svg',
]

export default function LogoMarqueeSection() {
  return (
    <section
      className="
        flex
        flex-col
        lg:flex-row
        items-center
        lg:items-center
        gap-10
        lg:gap-0
        px-6
        md:px-12
        lg:px-[7.5rem]
        py-12
        lg:py-[4rem]
        bg-[#050914]
        overflow-hidden
      "
    >
      {/* LEFT TEXT */}
      <div className="shrink-0 w-full lg:w-[23.8125rem] bg-transparent text-center lg:text-left">
        <h4
          className="
            text-white
            text-[1.5rem]
            md:text-[1.75rem]
            lg:text-[2rem]
            leading-[2.25rem]
            md:leading-[2.5rem]
            lg:leading-[2.75rem]
            font-medium
            font-[var(--font-jakarta)]
          "
        >
          Trusted by Teams at <br className="hidden lg:block" /> Leading Brands
        </h4>
      </div>

      {/* RIGHT MARQUEE WRAPPER */}
      <div className="relative w-full flex-1 overflow-hidden">
        
        {/* LEFT GRADIENT OVERLAY (Hidden on mobile/tablet to show more logos) */}
        <div
          className="
            absolute
            left-0
            bottom-[-0.03125rem]
            hidden
            lg:block
            lg:w-[15rem]
            xl:w-[21.1875rem]
            h-[4.1875rem]
            pointer-events-none
            z-[1]
            bg-[linear-gradient(90deg,#050914_11.06%,rgba(5,9,20,0)_100%)]
          "
        />

        {/* MARQUEE TRACK */}
        <div className="marquee-track flex items-center gap-12 md:gap-16">
          {/* FIRST SET */}
          {logos.map((logo, i) => (
            <div key={`logo-1-${i}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt="brand-logo"
                width={125}
                height={58}
                className="
                  w-[6rem]
                  md:w-[7.8125rem]
                  h-auto
                  object-contain
                  opacity-80
                "
              />
            </div>
          ))}

          {/* DUPLICATE SET (seamless loop) */}
          {logos.map((logo, i) => (
            <div key={`logo-2-${i}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt="brand-logo"
                width={125}
                height={58}
                className="
                  w-[6rem]
                  md:w-[7.8125rem]
                  h-auto
                  object-contain
                  opacity-80
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}