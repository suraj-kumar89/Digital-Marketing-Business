'use client'

import Image from 'next/image'

/* ================= SECTION ================= */

export default function SystemsSection() {
  return (
    <section
      className="
        flex flex-col justify-center items-center
        gap-[2.5rem]
        px-[7.5rem] py-[5rem]
        w-full
        bg-[#02050E]
      "
    >
      {/* ================= HEADING ================= */}

      <div className="flex flex-col items-center gap-4 text-center max-w-[52rem]">

        {/* HEADING */}
        <h2
          className="
            text-white text-center
            text-[3rem]
            leading-[4rem]
            font-medium
            font-[var(--Type-Font-Family-Headings)]
          "
        >
          Systems That Keep{' '}<br/>
          <span className="text-[#F90]">
            Performance Accountable
          </span>
        </h2>

        {/* SUBHEADING */}
        <p
          className="
            text-[#C2CAD6]
            text-[1.25rem]
            leading-[2rem]
            font-normal
            font-[var(--Type-Font-Family-Body)]
          "
        >
          Good outcomes come from clear visibility and disciplined review,
          not from more tools.
        </p>
      </div>

      {/* ================= CARDS ================= */}

      <div className="grid grid-cols-3 gap-8 w-full max-w-[90rem]">

        <SystemCard
          icon="/system/system1.png"
          title="How Performance Is Tracked"
          description="Performance is tracked against business outcomes, not surface metrics. Data is set up to reflect what actually matters so progress can be measured with confidence."
        />

        <SystemCard
          icon="/system/system2.png"
          title="How Decisions Are Reviewed"
          description="Results are reviewed regularly against goals and expectations. The focus stays on what to continue, what to adjust, and what to stop."
        />

        <SystemCard
          icon="/system/system3.png"
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
        gap-[2.5rem]
        p-[2.5rem]
        rounded-[1.5rem]
        bg-[#050914]
        border border-white/10
        flex-1 self-stretch
      "
    >
      {/* ICON IMAGE */}
      <div className="w-[3rem] aspect-square shrink-0">
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
          text-[1.5rem]
          leading-[2.25rem]
          font-medium
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
