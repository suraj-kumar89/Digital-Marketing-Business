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
      '/whatwedo/img1.png',
      '/whatwedo/img2.png',
      '/whatwedo/img3.png',
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
        justify-center
        items-start
        gap-[4rem]
        px-[7.5rem]
        py-[5rem]
        bg-[#02050E]
      "
    >
      {/* LEFT INTRO CARD */}
      <div
        className="
          flex
          flex-col
          gap-[2rem]
          flex-1
          p-[2.5rem]
          rounded-[1.5rem]
          bg-[#050914]
        "
      >
        <h2 className="text-white text-[3rem] leading-[4rem] font-medium">
          What <span className="text-[#F90]">We Do</span>
        </h2>

        <p className="text-[#C2CAD6] text-[1rem] leading-[1.5rem]">
          Our core services, delivered with clear ownership and measurable
          outcomes.
        </p>

        <button
          className="
            mt-4
            flex
            justify-center
            items-center
            gap-[0.75rem]
            px-[2rem]
            py-[0.75rem]
            rounded-[0.75rem]
            bg-[#F90]
            text-[#331F00]
            text-[1.25rem]
            leading-[2rem]
            font-bold
            tracking-[-0.0125rem]
          "
        >
          Get Started →
        </button>
      </div>

      {/* RIGHT STACK */}
      <div className="relative flex flex-col gap-8 w-[34rem]">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className="sticky"
            style={{
              top: `${6 + i * 2.5}rem`,
              zIndex: 20 + i,
            }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  )
}

/* ================= SERVICE CARD ================= */

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
        flex flex-col gap-[2.5rem]
        p-[2.5rem]
        rounded-[2rem]
        border-[0.5px]
        border-white/25
        bg-[#050914]
      "
    >
      {/* TITLE */}
      <h3 className="text-white text-[1.5rem] leading-[2.25rem] font-medium">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#C2CAD6] text-[0.875rem] leading-[1.25rem]">
        {description}
      </p>

      {/* LABEL */}
      <p className="text-[rgba(194,202,214,0.75)] text-[0.875rem] tracking-[0.0875rem] uppercase font-medium">
        {label}
      </p>


      {/* IMAGE MODE */}
      {type === 'images' && (
        <div className="flex items-center gap-4">
          {platforms.map((icon: string, i: number) => (
            <Image
              key={i}
              src={icon}
              alt="platform"
              width={81}
              height={30}
              className="w-[5.08788rem] h-[1.90631rem] object-contain"
            />
          ))}
        </div>
      )}

      {/* FEATURES MODE — FIXED ROW LAYOUT */}
      {type === 'features' && (
        <div className="flex items-center gap-6 flex-wrap">
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
      {/* TEXT MODE — ROW LAYOUT */}
      {type === 'text' && (
        <div className="flex items-center gap-6 flex-wrap">
          {platforms.map((text: string, i: number) => (
            <p
              key={i}
              className="text-[#C2CAD6] text-[0.875rem] leading-[1.25rem]"
            >
              {text}
            </p>
          ))}
        </div>
      )}

    </div>
  )
}


