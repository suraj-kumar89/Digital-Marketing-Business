'use client'
import Image from "next/image"
const assetPath = '/digital-marketing-agency';

export default function HowWeChooseSection() {
  return (
    <section
      className="
        flex
        flex-col
        lg:flex-row
        justify-between
        items-start
        gap-16
        lg:gap-0
        px-6
        md:px-12
        lg:px-[7.5rem]
        py-12
        lg:py-[5rem]
        bg-[#02050E]
        self-stretch
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col w-full lg:w-[23.9375rem] items-start gap-[2rem]">

        {/* CONTENT STACK */}
        <div className="flex flex-col items-start gap-[1.5rem] self-stretch">

          {/* HEADING */}
          <h2 className="text-white text-[2.5rem] md:text-[3rem] leading-[3.25rem] md:leading-[4rem] font-semibold font-[var(--font-jakarta)]">
            How We <span className="text-[#F90]">Choose</span>
            <br className="hidden md:block" />
            <span className="text-[#F90]"> to Work</span>
          </h2>

          {/* PARAGRAPH */}
          <p className="text-[#C2CAD6] text-[1rem] leading-[1.5rem] font-normal font-[var(--font-jakarta)] max-w-[30rem] lg:max-w-none">
            The way work is structured determines the quality of outcomes.
            These are the standards followed across engagements.
          </p>

        </div>

        {/* CTA BUTTON */}
        <button
          className="
            flex
            items-center
            justify-center
            gap-[0.625rem]
            px-[1.5rem]
            py-[1rem]
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


      {/* RIGHT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full lg:max-w-[44rem]">

        <Principle
          icon={
            <Image
              src={`${assetPath}/icons/icon1.png`}
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
              src={`${assetPath}/icons/icon2.png`}
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
              src={`${assetPath}/icons/icon3.png`}
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
              src={`${assetPath}/icons/icon4.png`}
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
                src={`${assetPath}/icons/icon5.png`}
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
        w-full
        lg:w-[21.25rem]
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
          font-semibold
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