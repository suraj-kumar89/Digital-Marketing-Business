'use client'

import Link from "next/link";

export default function ELearningCaseStudySection() {
  return (
    <section
      className="
        flex
        flex-col
        lg:flex-row
        items-start
        gap-12
        lg:gap-[4rem]
        px-6
        md:px-12
        lg:px-[7.5rem]
        py-12
        lg:py-[5rem]
        self-stretch
        bg-[#050914]
      "
    >
      {/* ================= LEFT COLUMN ================= */}
      <div
        className="
          flex
          flex-col
          justify-center
          items-start
          gap-[1.5rem]
          lg:gap-[2.5rem]
          w-full
          lg:w-[30.4375rem]
        "
      >
        {/* CASE STUDY LABEL */}
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
            text-[2.25rem]
            md:text-[2.75rem]
            lg:text-[3rem]
            leading-[2.75rem]
            md:leading-[3.5rem]
            lg:leading-[4rem]
            font-semibold
            font-[var(--Type-Font-Family-Headings)]
          "
        >
          <span className="text-[#F90]">E-learning Elevated:</span>
          <br className="hidden md:block" />
          <span className="text-white"> Clicks to Profit</span>
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
            The business had strong online visibility and website traffic,
            yet struggled to convert ad viewers into paying customers.
          </p>
        </div>

        {/* CTA BUTTON */}
        <Link href="/book-a-call">
        <button
          className="
            flex
            justify-center
            items-center
            gap-[0.75rem]
            px-[1.5rem]
            md:px-[2rem]
            py-[0.75rem]
            rounded-[0.5rem]
            bg-[#F90]
            text-[#331F00]
            text-[1.125rem]
            md:text-[1.25rem]
            leading-[2rem]
            font-bold
            tracking-[-0.0125rem]
            font-[var(--Type-Font-Family-UI)]
            w-full
            md:w-auto
            cursor-pointer
          "
        >
          Begin Your Transformation
        </button>
        </Link>
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <div className="flex flex-col gap-10 lg:gap-[2.5rem] w-full lg:max-w-[40rem]">

        {/* SOLUTION SNAPSHOTS */}
        <div className="flex flex-col gap-4">
          <h3
            className="
              text-[#F90]
              text-[1.5rem]
              leading-[2.25rem]
              font-semibold
              font-[var(--Type-Font-Family-Headings)]
            "
          >
            Solution snapshots:
          </h3>

          <ul className="flex flex-col gap-3">
            {[
              'Ads Improvement: Enhanced ad performance across channels for better engagement.',
              'Clearer Messaging: Refined business messaging to communicate value more effectively.',
              'Brand Building: Strengthened brand identity to stand out in the e-learning market.',
              'Quality Traffic: Optimized ads to attract more interested and relevant visitors.',
              'Hyper-Targeted Ads: Used precise targeting on Google and Facebook to reach ideal customers.',
            ].map((item, i) => (
              <li
                key={i}
                className="
                  flex items-start gap-2
                  text-[#C2CAD6]
                  text-[0.875rem]
                  leading-[1.25rem]
                  font-[var(--Type-Font-Family-Body)]
                "
              >
                <div className="mt-0.5"><ArrowIcon /></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* METRICS GRID */}
        <div
          className="
           grid
    /* Changed to grid-cols-2 to show two items per row on mobile */
    grid-cols-2
    /* Keeps two items per row on tablets/small desktops */
    sm:grid-cols-2
    /* Adjust gaps for mobile vs desktop */
    gap-y-8
    gap-x-2 
    sm:gap-x-4
          "
        >
          <Metric value="221X" label="Revenue growth" />
          <Metric value="108X" label="Boost in Monthly Sales" />
          <Metric value="80%" label="Decrease in Cost Per Sale" />
          <Metric value="20X" label="ROAS" />
        </div>
      </div>
    </section>
  )
}

/* ================= METRIC ================= */

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 border-l border-white/5 pl-4 sm:border-0 sm:pl-0">
      <span
        className="
          text-white
          text-[2.25rem]
          md:text-[2.5rem]
          leading-[2.75rem]
          md:leading-[3.25rem]
          font-normal
          font-[var(--Type-Font-Family-Headings)]
        "
      >
        {value}
      </span>

      <span
        className="
          text-[#C2CAD6]
          text-[1rem]
          md:text-[1.25rem]
          leading-[1.5rem]
          md:leading-[2rem]
          font-normal
          font-[var(--Type-Font-Family-Body)]
        "
      >
        {label}
      </span>
    </div>
  )
}

/* ================= ARROW SVG ================= */

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