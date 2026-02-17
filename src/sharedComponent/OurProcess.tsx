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
      'Results are reviewed against outcomes, not effort.',
  },
  {
    step: '05',
    title: 'Scale Carefully',
    description:
      'Scale is applied only when performance is stable.',
  },
]

export default function OurProcessSection() {
  return (
    <section
      className="
        relative
        flex
        flex-col-reverse
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
        ml-[6.5rem] 
      "
    >
      {/* ⭐ LEFT — CARDS */}
      <div className="relative flex flex-col gap-6 md:gap-8 w-full lg:w-[34rem] z-0">
        {PROCESS_STEPS.map((step, i) => (
          <div
            key={step.step}
            className="sticky"
            style={{
              // Adjusts the stack offset: tighter on mobile, spread on desktop
              top: `calc(4rem + ${i * 1.5}rem)`, 
              zIndex: i + 1,
            }}
          >
            <ProcessCard {...step} />
          </div>
        ))}
      </div>

      {/* ⭐ RIGHT — STICKY HEADING */}
      <div
        className="
          flex
          flex-col
          items-start
          gap-6
          lg:gap-[2rem]
          w-full
          lg:flex-[1_0_0]
          lg:sticky
          top-[2rem]
          lg:top-[6rem]
          h-fit
          z-10
          bg-[#02050E]
          pb-4
          lg:pb-0
        "
      >
        <h2 className="text-white text-[2.5rem] md:text-[3rem] leading-[3rem] md:leading-[4rem] font-semibold">
          Our <span className="text-[#F90]">Process</span>
        </h2>

        <p className="text-[#C2CAD6] text-[1rem] leading-[1.5rem] max-w-md">
          This process is designed to keep decisions clear and outcomes predictable.
        </p>

        <button className="flex items-center justify-center gap-[0.75rem] px-[2rem] py-[0.75rem] rounded-[0.75rem] bg-[#F90] text-[#331F00] text-[1rem] font-bold w-full md:w-auto">
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
        p-8
        lg:p-[3rem]
        rounded-[1.5rem]
        bg-[#050914]
        border border-white/10
        self-stretch
        shadow-2xl
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

      {/* HEADING */}
      <h3
        className="
          text-white
          text-[1.5rem]
          md:text-[2rem]
          leading-[2rem]
          md:leading-[2.75rem]
          font-semibold
        "
      >
        {title}
      </h3>

      {/* PARAGRAPH */}
      <p
        className="
          text-[#C2CAD6]
          text-[0.875rem]
          md:text-[1rem]
          leading-[1.5rem]
          font-normal
        "
      >
        {description}
      </p>
    </div>
  )
}