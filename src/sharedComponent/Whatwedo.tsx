'use client'

import Image from 'next/image'

const ICON_MAP: Record<string, string> = {
  web: '/whatwedo/img4.png',
  message: '/whatwedo/img5.png',
  flow: '/whatwedo/img6.png',
}

const SERVICES = [
  {
    title: 'Performance Marketing (Ads)',
    description:
      'Responsible for turning paid spend into measurable business results through disciplined execution and clear decision-making.',
    type: 'images',
    label: 'Platforms worked on:',
    platforms: [
      '/whatwedo/img1.svg',
      '/whatwedo/img2.svg',
      '/whatwedo/img3.svg',
    ],
  },
  {
    title: 'Conversion Rate Optimisation',
    description:
      'Focused on improving how traffic converts by refining landing pages, messaging, and user flow.',
    type: 'features',
    label: 'Areas covered:',
    platforms: [
      { icon: 'web', label: 'Landing Page' },
      { icon: 'message', label: 'Messaging' },
      { icon: 'flow', label: 'Conversion Flow' },
    ],
  },
  {
    title: 'Search Engine Optimisation (SEO)',
    description:
      'Built to support long-term growth by aligning organic visibility with real demand and business priorities.',
    type: 'text',
    label: 'Focus areas:',
    platforms: ['Search Intent', 'Content Structure', 'Technical Foundations'],
  },
] as const

export default function WhatWeDoSection() {
  return (
    <section
      className="
        flex
        flex-col
        lg:flex-row
        justify-center
        items-start
        gap-12
        lg:gap-[4rem]
        px-6
        md:px-12
        lg:px-[7.5rem]
        py-12
        lg:py-[5rem]
        bg-[#02050E]
        relative
      "
    >
      {/* LEFT INTRO CARD */}
      <div
        className="
          flex
          flex-col
          items-start
          gap-6
          lg:gap-[2rem]
          w-full
          lg:flex-[1_0_0]
          p-8
          lg:p-[2.5rem]
          rounded-[1.5rem]
          bg-[#050914]
          lg:sticky
          lg:top-[6rem]
          h-fit
          self-start
          /* Ensure header stays above stacking cards on mobile if needed */
          z-10
        "
      >
        <h2 className="text-white text-[2.5rem] md:text-[3rem] leading-[3rem] md:leading-[4rem] font-semibold font-[var(--font-jakarta)]">
          What <span className="text-[#F90]">We Do</span>
        </h2>

        <p className="text-[#C2CAD6] text-[1rem] leading-[1.5rem] font-[var(--font-jakarta)]">
          Our core services, delivered with clear ownership and measurable outcomes.
        </p>

        <button
          className="
            flex
            justify-center
            items-center
            gap-[0.75rem]
            px-[2rem]
            py-[0.75rem]
            rounded-[0.75rem]
            bg-[#F90]
            text-[#331F00]
            text-[1.125rem]
            md:text-[1.25rem]
            leading-[2rem]
            font-bold
            tracking-[-0.0125rem]
            font-[var(--font-jakarta)]
            w-full
            md:w-auto
          "
        >
          Get Started →
        </button>
      </div>

      {/* RIGHT STACK */}
      <div className="relative flex flex-col gap-12 lg:gap-8 w-full lg:w-[34rem]">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className="sticky top-[4rem] lg:top-[6rem]"
            style={{
              // Successive cards get higher z-index to stack on top of previous ones
              zIndex: i + 20,
              // Margin bottom ensures the next card has space to scroll up before stacking
              marginBottom: i === SERVICES.length - 1 ? '0' : '4rem'
            }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  )
}

function ServiceCard({
  title,
  description,
  platforms,
  type,
  label,
}: {
  title: string
  description: string
  platforms: any
  type: 'images' | 'features' | 'text'
  label: string
}) {
  return (
    <div
      className="
        flex flex-col gap-8
        lg:gap-[2.5rem]
        p-8
        lg:p-[2.5rem]
        rounded-[1.5rem]
        lg:rounded-[2rem]
        border-[0.5px]
        border-white/25
        bg-[#050914]
        shadow-[0_-10px_40px_rgba(0,0,0,0.5)]
      "
    >
      <h3 className="text-white text-[1.25rem] md:text-[1.5rem] leading-[1.75rem] md:leading-[2.25rem] font-semibold">
        {title}
      </h3>

      <p className="text-[#C2CAD6] text-[0.875rem] leading-[1.25rem]">
        {description}
      </p>

      <div>
        <p className="text-[rgba(194,202,214,0.75)] text-[0.75rem] tracking-[0.0875rem] uppercase font-semibold mb-4">
          {label}
        </p>

        {type === 'images' && (
          <div className="flex items-center gap-4 flex-wrap">
            {platforms.map((icon: string, i: number) => (
              <Image
                key={i}
                src={icon}
                alt="platform"
                width={81}
                height={30}
                className="w-[4.5rem] md:w-[5.08788rem] h-auto object-contain"
              />
            ))}
          </div>
        )}

        {type === 'features' && (
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 flex-wrap">
            {platforms.map((item: any, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-[1.125rem] h-[1rem] relative shrink-0">
                  <Image
                    src={ICON_MAP[item.icon]}
                    alt={item.label}
                    fill
                    className="object-contain"
                  />
                </span>
                <p className="text-[#C2CAD6] text-[0.875rem] leading-[1.25rem]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {type === 'text' && (
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 flex-wrap">
            {platforms.map((text: string, i: number) => (
              <p
                key={i}
                className="text-[#C2CAD6] text-[0.875rem] leading-[1.25rem] border-l border-white/10 pl-3 md:border-none md:pl-0"
              >
                {text}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}