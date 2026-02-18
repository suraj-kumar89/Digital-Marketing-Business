'use client'

import Image from 'next/image'
const assetPath = '/digital-marketing-agency';
/* ================= SECTION ================= */

export default function SystemsSection() {
  return (
    <section
      className="
        flex flex-col justify-center items-center
        gap-[2.5rem]
        /* Responsive padding: 1.5rem on mobile, 3rem on tablet, 7.5rem on desktop */
        px-6 md:px-12 lg:px-[7.5rem] 
        py-[3.5rem] md:py-[5rem]
        w-full
        bg-[#02050E]
        overflow-hidden
      "
    >
      {/* ================= HEADING ================= */}

      <div className="flex flex-col items-center gap-4 text-center max-w-[52rem]">

        {/* HEADING */}
        <h2
          className="
            text-white text-center
            /* Responsive font size for heading */
            text-[2rem] md:text-[2.5rem] lg:text-[3rem]
            leading-[2.75rem] md:leading-[3.5rem] lg:leading-[4rem]
            font-semibold
            font-[var(--Type-Font-Family-Headings)]
          "
        >
          Systems That Keep{' '}
          <span className="text-[#F90]">
            Performance Accountable
          </span>
        </h2>

        {/* SUBHEADING */}
        <p
          className="
            text-[#C2CAD6]
            /* Responsive font size for subheading */
            text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]
            leading-[1.5rem] md:leading-[1.75rem] lg:leading-[2rem]
            font-normal
            font-[var(--Type-Font-Family-Body)]
          "
        >
          Good outcomes come from clear visibility and disciplined review,
          not from more tools.
        </p>
      </div>

      {/* ================= CARDS ================= */}

      <div className="
        grid 
        /* 1 column on mobile, 2 on tablet (optional), 3 on desktop */
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-6 md:gap-8 
        w-full 
        max-w-[90rem]
      ">

        <SystemCard
          icon={`${assetPath}/system/system1.png`}
          title="How Performance Is Tracked"
          description="Performance is tracked against business outcomes, not surface metrics. Data is set up to reflect what actually matters so progress can be measured with confidence."
        />

        <SystemCard
          icon={`${assetPath}/system/system2.png`}
          title="How Decisions Are Reviewed"
          description="Results are reviewed regularly against goals and expectations. The focus stays on what to continue, what to adjust, and what to stop."
        />

        <SystemCard
          icon={`${assetPath}/system/system3.png`}
          title="How Accountability Is Maintained"
          description="Ownership is clear from the start. Decisions, actions, and outcomes are tied together so there is no ambiguity about responsibility."
        />

      </div>
    </section>
  )
}

/* ================= SYSTEM CARD ================= */

function SystemCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div
      className="
        flex flex-col items-start
        gap-6 md:gap-[2.5rem]
        /* Padding scales down slightly for smaller screens */
        p-8 md:p-[2.5rem]
        rounded-[1.5rem]
        bg-[#050914]
        border border-white/10
        w-full
      "
    >
      {/* ICON IMAGE */}
      <div className="w-[2.5rem] md:w-[3rem] aspect-square shrink-0">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>

      {/* CARD TITLE */}
      <h3
        className="
          text-white
          text-[1.25rem] md:text-[1.5rem]
          leading-[1.75rem] md:leading-[2.25rem]
          font-semibold
          font-[var(--Type-Font-Family-Headings)]
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          text-[#C2CAD6]
          text-[0.875rem]
          leading-[1.25rem]
          font-normal
          font-[var(--Type-Font-Family-Body)]
        "
      >
        {description}
      </p>
    </div>
  )
}