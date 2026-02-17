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
        items-center
        px-[7.5rem]
        py-[4rem]
        bg-[#050914]
      "
    >
      {/* LEFT TEXT */}
    <div className="shrink-0 bg-transparent">
  <h4
    className="
      text-white
      text-[2rem]
      font-medium
      font-[var(--font-jakarta)]
    "
  >
    Trusted by Teams at <br /> Leading Brands
  </h4>
</div>


      {/* RIGHT MARQUEE WRAPPER */}
      <div className="relative flex-1 overflow-hidden">

        {/* LEFT GRADIENT OVERLAY */}
        <div
          className="
            absolute
            left-[-18rem]
            bottom-[-0.03125rem]
            w-[21.1875rem]
            h-[4.1875rem]
            pointer-events-none
            z-10
            bg-[linear-gradient(270deg,#050914_1%,rgba(5,9,20,0)_100%)]
          "
        />

        {/* MARQUEE TRACK */}
        <div className="marquee-track flex items-center gap-16">

          {/* FIRST SET */}
          {logos.map((logo, i) => (
            <div key={`logo-1-${i}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt="brand-logo"
                width={125}
                height={58}
                className="
                  w-[7.8125rem]
                  h-[3.625rem]
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
                  w-[7.8125rem]
                  h-[3.625rem]
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
