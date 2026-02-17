'use client'

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand the Business',
    description:
      'Start with the business, not the channels. Goals, revenue mechanics, and constraints come before tactics or scale.',
  },
  {
    step: '02',
    title: 'Set the Foundation',
    description:
      'Tracking, measurement, and unit economics are put in place so decisions are based on reliable data.',
  },
  {
    step: '03',
    title: 'Execute with Focus',
    description:
      'Work is focused on the few actions that matter most. No scattered activity or unnecessary experiments.',
  },
  {
    step: '04',
    title: "Review What’s Working",
    description:
      'Results are reviewed against outcomes, not effort. What works is improved, what doesn’t is changed or stopped.',
  },
  {
    step: '05',
    title: 'Scale Carefully',
    description:
      'Scale is applied only when performance is stable. Growth is controlled, not forced.',
  },
]

export default function OurProcessSection() {
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
        self-stretch
      "
    >
      {/* ⭐ LEFT SIDE — PROCESS STACK */}
      {/* ⭐ LEFT SIDE — PROCESS STACK (STICKY STACK) */}
<div
  className="
    relative
    flex
    flex-col
    gap-8
    w-[34rem]
  "
>
  {PROCESS_STEPS.map((step, i) => (
    <div
      key={step.step}
      className="sticky"
      style={{
        top: `${6 + i * 2.5}rem`, // controls stacking distance
        zIndex: 20 + i,
      }}
    >
      <ProcessCard {...step} />
    </div>
  ))}
</div>


      {/* ⭐ RIGHT SIDE — CONTENT */}
     <div
  className="
    w-[26rem]
    shrink-0
    flex
    flex-col
    gap-6
    sticky
    top-[6rem]
    self-start
    h-fit
  "
>

        {/* HEADING */}
        <h2
          className="
            text-white
            text-[3rem]
            leading-[4rem]
            font-medium
            font-[var(--Type-Font-Family-Headings)]
          "
        >
          Our <span className="text-[#F90]">Process</span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            text-[#C2CAD6]
            text-[1rem]
            leading-[1.5rem]
            font-normal
            font-[var(--Type-Font-Family-Body)]
          "
        >
          This process is designed to keep decisions clear and outcomes
          predictable.
        </p>

        {/* BUTTON */}
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
            text-[1rem]
            font-bold
            leading-[1.5rem]
          "
        >
          Get Started →
        </button>
      </div>
    </section>
  )
}

/* ================= PROCESS CARD ================= */
function ProcessCard({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-start
        gap-[1.5rem]
        p-[2rem]
        rounded-[1.5rem]
        bg-[#02050E]
        border border-white/10
        self-stretch
      "
    >
      {/* STEP NUMBER */}
      <div
        className="
          flex items-center justify-center
          w-8 h-8
          rounded-full
          bg-white/10
          text-white
          text-xs
          font-semibold
        "
      >
        {step}
      </div>

      {/* HEADING — H4 TYPO */}
      <h3
        className="
          text-white
          text-[2rem]
          leading-[2.75rem]
          font-medium
          font-[var(--Type-Font-Family-Headings)]
        "
      >
        {title}
      </h3>

      {/* PARAGRAPH — BODY MD TYPO */}
      <p
        className="
          text-[#C2CAD6]
          text-[1rem]
          leading-[1.5rem]
          font-normal
          font-[var(--Type-Font-Family-Body)]
        "
      >
        {description}
      </p>
    </div>
  )
}
