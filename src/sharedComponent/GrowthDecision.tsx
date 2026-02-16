'use client'

export default function GrowthDecisionsSection() {
  return (
    <section className="flex justify-center bg-[#02050E]">
      <div
        className="
          flex
          flex-col
          justify-center
          items-start
          gap-[2.5rem]
          w-[90rem]
          px-[7.5rem]
          py-[5rem]
        "
      >
        {/* SECTION HEADING */}
        <h2
          className="
            w-[36.625rem]
            text-white
            text-[3rem]
            leading-[4rem]
            font-medium
            font-[var(--font-jakarta)]
          "
        >
          How <span className="text-[#F90]">Growth Decisions</span>
          <br />
          Are Actually Made
        </h2>

        {/* PRINCIPLES */}
        <div className="flex gap-6 w-full">
          <PrincipleCard
            label="Principle 1"
            title="Growth Starts with Economics, Not Channels"
            description={[
              'Growth is not about adding more channels or activity.',
              'It starts with understanding unit economics, margins, payback periods, and scalability.',
              "If the numbers don’t work, no amount of marketing fixes it.",
            ]}
          />

          <PrincipleCard
            label="Principle 2"
            title="Consistency Beats Aggression"
            description={[
              'Short-term spikes look good on reports but break systems.',
              'Sustainable growth comes from stable acquisition, predictable performance, and repeatable decisions.',
              'Scaling only happens after stability is proven.',
            ]}
          />

          <PrincipleCard
            label="Principle 3"
            title="Accountability Drives Better Decisions"
            description={[
              'When outcomes are owned end-to-end, decisions get sharper.',
              'There is less noise, fewer vanity metrics, and more focus on what actually moves the business forward.',
              'Clear ownership leads to better judgment.',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

/* CARD COMPONENT */
function PrincipleCard({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string[]
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-start
        gap-[2.5rem]
        flex-1
        self-stretch
        p-[2rem]
        rounded-[2.5rem]
        bg-[#0A0F1D]
      "
    >
      {/* PRINCIPLE TAG */}
      <span
        className="
          flex
          justify-center
          items-center
          gap-[0.625rem]
          px-[0.75rem]
          py-[0.5rem]
          rounded-[24rem]
          text-white
          text-[0.75rem]
          font-[var(--font-jakarta)]
          bg-[#29313D]
          shadow-[0_17px_58.2px_-4px_rgba(0,130,251,0.22)]
        "
      >
        {label}
      </span>

      {/* TITLE */}
      <h3
        className="
          self-stretch
          text-white
          text-[1.5rem]
          leading-[2.25rem]
          font-medium
          font-[var(--font-jakarta)]
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <div
        className="
          flex
          flex-col
          gap-3
          text-[#C2CAD6]
          text-[0.875rem]
          leading-[1.25rem]
          font-normal
          font-[var(--font-jakarta)]
        "
      >
        {description.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  )
}
