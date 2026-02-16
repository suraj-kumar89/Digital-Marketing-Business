'use client'
import Image from "next/image"

export default function HowWeChooseSection() {
  return (
    <section
      className="
        flex
        justify-between
        items-start
        px-[7.5rem]
        py-[5rem]
        bg-[#02050E]
        self-stretch
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-6 max-w-[28rem]">

        {/* HEADING */}
        <h2
          className="
            text-white
            text-[3rem]
            leading-[4rem]
            font-medium
            font-[var(--font-jakarta)]
          "
        >
          How We <span className="text-[#F90]">Choose</span>
          <br />
          <span className="text-[#F90]">to Work</span>
        </h2>

        {/* PARAGRAPH */}
        <p
          className="
            text-[#C2CAD6]
            text-[1rem]
            leading-[1.5rem]
            font-normal
            font-[var(--font-jakarta)]
          "
        >
          The way work is structured determines the quality of outcomes.
          These are the standards followed across engagements.
        </p>

        {/* CTA BUTTON */}
        <button
          className="
    flex
    justify-center
    items-center
    gap-[0.5rem]
    px-[2rem]
    py-[0.75rem]
    rounded-[0.75rem]
    bg-[#F90]
    text-[#331F00]
    text-[1.25rem]
    leading-[2rem]
    font-bold
    tracking-[-0.0125rem]
    font-[var(--font-jakarta)]
  "
        >
          Get Started →
        </button>

      </div>

      {/* RIGHT GRID */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-10 max-w-[44rem]">

        <Principle
          icon={
            <Image
              src="/icons/icon1.png"
              alt="icon"
              width={40}
              height={40}
              className="w-full h-full"
            />
          }
          title="Continuity of thinking"
          description="The same level of thinking that shapes the engagement at the start remains involved as work progresses. Decisions are not diluted over time."
        />

        <Principle
          icon={
            <Image
              src="/icons/icon2.png"
              alt="icon"
              width={40}
              height={40}
              className="w-full h-full"
            />
          }
          title="Clear ownership"
          description="Responsibility for outcomes is defined upfront and stays consistent. This avoids ambiguity in decision-making and execution."
        />

        <Principle
          icon={
            <Image
              src="/icons/icon3.png"
              alt="icon"
              width={40}
              height={40}
              className="w-full h-full"
            />
          }
          title="Business context first"
          description="Every business operates with different constraints, priorities, and economics. Decisions are made in context, not by applying fixed frameworks."
        />

        <Principle
          icon={
            <Image
              src="/icons/icon4.png"
              alt="icon"
              width={40}
              height={40}
              className="w-full h-full"
            />
          }
          title="Depth over volume"
          description="Engagements are kept focused to maintain quality, attention, and judgment. Scale is deliberate, not reactive."
        />

        {/* LAST ITEM */}
        <div className="col-span-1">
          <Principle
            icon={
              <Image
                src="/icons/icon5.png"
                alt="icon"
                width={40}
                height={40}
                className="w-full h-full"
              />
            }
            title="Open, practical communication"
            description="Progress, trade-offs, and next steps are discussed clearly. Communication is designed to support decisions, not just reporting."
          />
        </div>

      </div>
    </section>
  )
}

/* PRINCIPLE ITEM */
function Principle({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-start
        gap-[1rem]
        w-[21.25rem]
        shrink-0
      "
    >
      {/* ICON */}
      <div className="w-[2.5rem] h-[2.5rem] aspect-square shrink-0">
        {icon}
      </div>

      {/* TITLE */}
      <h4
        className="
          text-white
          text-[1.25rem]
          leading-[1.75rem]
          font-medium
          font-[var(--font-jakarta)]
        "
      >
        {title}
      </h4>

      {/* DESCRIPTION */}
      <p
        className="
          text-[#C2CAD6]
          text-[0.875rem]
          leading-[1.25rem]
          font-normal
          font-[var(--font-jakarta)]
        "
      >
        {description}
      </p>
    </div>
  )
}
