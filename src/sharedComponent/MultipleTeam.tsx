'use client'

export default function MultipleTeamsSection() {
  return (
    <section
      className="
        flex
        flex-col
        items-center
        gap-12
        lg:gap-[4rem]
        px-6
        md:px-12
        lg:px-[7.5rem]
        py-12
        lg:py-[5rem]
        bg-[#050914]
        self-stretch
      "
    >
      {/* HEADER */}
      <div className="flex flex-col items-center gap-4 max-w-[48rem] text-center">

        {/* H2 */}
        <h2
          className="
            text-white
            text-[2.25rem]
            md:text-[2.75rem]
            lg:text-[3rem]
            leading-[2.75rem]
            md:leading-[3.5rem]
            lg:leading-[4rem]
            font-medium
            font-[var(--font-jakarta)]
          "
        >
          Multiple Teams vs One
          <br className="hidden md:block" />
          {" "}Accountable Growth Partner
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
          Building a marketing function can take different forms. The right
          choice depends on how ownership, decisions, and outcomes are managed.
        </p>
      </div>

      {/* COMPARISON GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[72rem]">

        {/* LEFT CARD */}
        <ComparisonCard
          badge="Fragmented"
          title="Multiple Teams Model"
          titleColor="text-[#4D73E5]"
          cardBg="bg-[#02050E]"
          items={[
            {
              label: 'Ownership',
              text: 'Responsibility is spread across roles, vendors, and functions. Decisions often require coordination and alignment across teams.',
            },
            {
              label: 'Cost Structure',
              text: 'Fixed costs increase with hiring and expansion. Efficiency improves slowly as the team gains experience.',
            },
            {
              label: 'Learning Speed',
              text: 'Insights are shaped by exposure to a single business context. Learnings compound over time but within a limited scope.',
            },
            {
              label: 'Decision-Making',
              text: 'Decisions involve multiple stakeholders, which can slow execution but provide internal alignment.',
            },
          ]}
        />

        {/* RIGHT CARD */}
        <ComparisonCard
          badge="Owned"
          title="One Accountable Growth Partner"
          titleColor="text-[#F90]"
          cardBg="bg-[#0A0F1D]"
          items={[
            {
              label: 'Ownership',
              text: 'Responsibility for outcomes is clearly defined. Decisions and execution are closely linked.',
            },
            {
              label: 'Cost Structure',
              text: 'Costs remain flexible and aligned with stage and scale. Focus stays on efficiency and return.',
            },
            {
              label: 'Learning Speed',
              text: 'Decisions benefit from patterns observed across different businesses and growth stages.',
            },
            {
              label: 'Decision-Making',
              text: 'Fewer dependencies allow for faster iteration and clearer judgment.',
            },
          ]}
        />
      </div>
    </section>
  )
}

/* CARD */
function ComparisonCard({
  badge,
  title,
  titleColor,
  cardBg,
  items,
}: {
  badge: string
  title: string
  titleColor: string
  cardBg: string
  items: { label: string; text: string }[]
}) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        gap-8
        lg:gap-[2.5rem]
        px-6
        md:px-12
        lg:px-[5rem]
        py-8
        lg:py-[2.5rem]
        flex-1
        rounded-[1.5rem]
        border
        border-white/10
        ${cardBg}
      `}
    >
      {/* BADGE */}
      <span
        className="
          flex
          justify-center
          items-center
          gap-[0.625rem]
          px-[1.5rem]
          py-[0.5rem]
          rounded-[24rem]
          text-white
          text-[0.875rem]
          font-[var(--font-jakarta)]
          bg-[#29313D]
          shadow-[0_17px_58.2px_-4px_rgba(0,130,251,0.22)]
        "
      >
        {badge}
      </span>

      {/* TITLE */}
      <h3
        className={`
          text-center
          text-[1.25rem]
          md:text-[1.5rem]
          leading-[1.75rem]
          md:leading-[2.25rem]
          font-medium
          font-[var(--font-jakarta)]
          ${titleColor}
        `}
      >
        {title}
      </h3>

      {/* ITEMS */}
      <div className="flex flex-col gap-6 lg:gap-4 w-full">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">

            {/* LABEL */}
            <h4
              className="
                text-white
                text-[1.125rem]
                lg:text-[1.25rem]
                leading-[1.5rem]
                lg:leading-[1.75rem]
                font-medium
                font-[var(--font-jakarta)]
              "
            >
              {item.label}
            </h4>

            {/* TEXT */}
            <p
              className="
                text-[#C2CAD6]
                text-[0.875rem]
                leading-[1.25rem]
                font-normal
                font-[var(--font-jakarta)]
              "
            >
              {item.text}
            </p>

          </div>
        ))}
      </div>
    </div>
  )
}