'use client'

export default function StrategicPlanSection() {
  return (
    <section
      className="
        flex
        items-start
        gap-[4rem]
        px-[7.5rem]
        py-[5rem]
        bg-[#050914]
        self-stretch
      "
    >
      {/* ================= LEFT CONTENT ================= */}
      <div
        className="
          flex
          flex-col
          justify-center
          items-start
          gap-[2.5rem]
          w-[30.4375rem]
        "
      >
        {/* CASE STUDY */}
        <span
          className="
            text-white
            text-[0.875rem]
            leading-[1.25rem]
            tracking-[0.245rem]
            font-normal
            font-[var(--Type-Font-Family-UI)]
          "
        >
          CASE STUDY
        </span>

        {/* HEADING */}
        <h2
          className="
            text-[3rem]
            leading-[4rem]
            font-medium
            font-[var(--Type-Font-Family-Headings)]
          "
        >
          <span className="text-[#F90]">Strategic Turnaround</span>
          <br />
          <span className="text-white">at Outplay</span>
        </h2>

        {/* PROBLEM */}
        <div className="flex flex-col gap-2">
          <h4
            className="
              text-[#C2CAD6]
              text-[1rem]
              leading-[1.5rem]
              font-bold
              font-[var(--Type-Font-Family-Body)]
            "
          >
            Problem:
          </h4>

          <p
            className="
              text-[#C2CAD6]
              text-[1rem]
              leading-[1.5rem]
              font-normal
              font-[var(--Type-Font-Family-Body)]
            "
          >
            The business was getting many leads, but most weren’t turning into
            sales. There were too many unqualified leads.
          </p>
        </div>

        {/* BUTTON */}
        <button
          className="
            flex
            justify-center
            items-center
            gap-[0.75rem]
            px-[2rem]
            py-[0.75rem]
            rounded-[0.5rem]
            bg-[#F90]
            text-[#331F00]
            text-[1.25rem]
            leading-[2rem]
            font-bold
            tracking-[-0.0125rem]
            font-[var(--Type-Font-Family-UI)]
          "
        >
          Schedule a Strategy Session
        </button>
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="flex flex-col gap-10 w-[40rem]">
        {/* SOLUTION SNAPSHOTS */}
        <div className="flex flex-col gap-4">
          <h3
            className="
              text-[#F90]
              text-[1.5rem]
              leading-[2.25rem]
              font-medium
              font-[var(--Type-Font-Family-Headings)]
            "
          >
            Solution snapshots:
          </h3>

          <ul
            className="
              flex flex-col gap-3
              text-[#C2CAD6]
              text-[0.875rem]
              leading-[1.25rem]
              font-normal
              font-[var(--Type-Font-Family-Body)]
            "
          >
            <li className="flex gap-2">
              <span className="text-[#F90]"><ArrowIcon /></span>
              Right Search Terms: Fine-tuned targeting with high-intent keywords.
            </li>

            <li className="flex gap-2">
              <span className="text-[#F90]"><ArrowIcon /></span>
              Implemented a step-by-step strategy to help customers from interest
              to purchase.
            </li>

            <li className="flex gap-2">
               <span className="text-[#F90]"><ArrowIcon /></span>
              Data-Driven Decisions: Focused on key goals and numbers to make
              improvements.
            </li>

            <li className="flex gap-2">
              <span className="text-[#F90]"><ArrowIcon /></span>
              Efficient Advertising: Invested in ads that worked, improving
              customer acquisition.
            </li>
          </ul>
        </div>

        {/* METRICS GRID */}
        <div
          className="
            inline-grid
            row-gap-[1.25rem]
            column-gap-[20px]
            grid-cols-2
          "
        >
          <Metric value="302%" label="Increase in Leads" />
          <Metric value="188%" label="Increase in Sales" />
          <Metric value="75%" label="Decrease in Cost Per Lead" />
          <Metric value="380%" label="Increase in Meetings Booked" />
        </div>
      </div>
    </section>
  )
}

/* ================= METRIC ================= */

function Metric({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col gap-1">
      {/* VALUE */}
      <span
        className="
          text-white
          text-[2.5rem]
          leading-[3.25rem]
          font-normal
          font-[var(--Type-Font-Family-Headings)]
        "
      >
        {value}
      </span>

      {/* LABEL */}
      <span
        className="
          text-white
          text-[1.25rem]
          leading-[2rem]
          font-normal
          font-[var(--Type-Font-Family-Body)]
        "
      >
        {label}
      </span>
    </div>
  )
}


function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="w-[1.25rem] h-[1.25rem] shrink-0 fill-[#F90]"
    >
      <path d="M9.5833 15.4417C9.70049 15.5588 9.85934 15.6245 10.025 15.6245C10.1906 15.6245 10.3494 15.5588 10.4666 15.4417L15.4666 10.4417C15.5837 10.3245 15.6494 10.1657 15.6494 10.0001C15.6494 9.83444 15.5837 9.67558 15.4666 9.5584L10.4666 4.5584C10.3494 4.44135 10.1906 4.37561 10.025 4.37561C9.85934 4.37561 9.70048 4.44135 9.5833 4.5584L9.5833 8.67423L5.46663 4.55756C5.34944 4.44052 5.19059 4.37478 5.02496 4.37478C4.85934 4.37478 4.70048 4.44052 4.5833 4.55756L4.5833 15.4417C4.70049 15.5588 4.85934 15.6245 5.02497 15.6245C5.19059 15.6245 5.34944 15.5588 5.46663 15.4417L9.5833 11.3259L9.5833 15.4417Z" />
    </svg>
  )
}
