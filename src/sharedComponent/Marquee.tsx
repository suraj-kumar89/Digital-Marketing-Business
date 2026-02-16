'use client'

import Image from 'next/image'

const logos = [
  '/logo/logo1.png',
  '/logo/logo2.png',
  '/logo/logo3.png',
  '/logo/logo4.png',
  '/logo/logo5.svg',
  '/logo/logo6.png',
  '/logo/logo7.png',
  '/logo/logo8.png',
  '/logo/logo9.png',
  '/logo/logo10.png',
  '/logo/logo11.png',
  '/logo/logo12.png',
  '/logo/logo13.png',
  '/logo/logo14.png',
  '/logo/logo15.png',
  '/logo/logo16.png',
  '/logo/logo17.png',


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
