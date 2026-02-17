'use client'

export default function BeyondAdsSection() {
  return (
    <section
      className="
        flex
        flex-col
        lg:flex-row
        justify-center
        items-center
        lg:items-start
        gap-12
        lg:gap-[4rem]
        px-6
        md:px-12
        lg:px-[7.5rem]
        py-12
        lg:py-[5rem]
        bg-[#02050E]
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col items-start gap-6 w-full lg:w-[36.625rem]">

        {/* HEADING */}
        <h2
          className="
            w-full
            text-[2.25rem]
            md:text-[2.75rem]
            lg:text-[3rem]
            leading-[2.75rem]
            md:leading-[3.5rem]
            lg:leading-[4rem]
            font-semibold
            font-[var(--font-jakarta)]
            text-white
          "
        >
          <span className="text-[#F90]">Beyond Ads:</span> We Take
          <br className="hidden md:block" />
          {" "}Responsibility for
          <br className="hidden md:block" />
          {" "}Performance
        </h2>

        {/* PARAGRAPHS */}
        <div
          className="
            flex flex-col gap-4
            text-[#C2CAD6]
            text-[1rem]
            leading-[1.5rem]
            font-normal
            font-[var(--font-jakarta)]
            max-w-[40rem]
          "
        >
          <p>
            Running ads is execution. Building a system that consistently
            delivers results is responsibility.
          </p>

          <p>
            This work goes beyond launching campaigns or optimising settings.
            It means taking ownership of the factors that actually determine
            performance.
          </p>
        </div>

        {/* CTA BUTTON */}
        <button
          className="
            mt-4
            flex
            justify-center
            items-center
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
          Book a Strategy Call
        </button>
      </div>

      {/* RIGHT CARD */}
      <div
        className="
          flex
          flex-col
          items-start
          gap-[1.5rem]
          w-full
          lg:flex-1
          px-6
          md:px-[3rem]
          lg:px-[4rem]
          py-8
          md:py-[2.5rem]
          rounded-[1.5rem]
          lg:rounded-[2rem]
          border-[0.5px]
          border-white/25
          bg-[#050914]
        "
      >
        {/* RIGHT HEADING */}
        <h3
          className="
            text-[#F90]
            text-[1.25rem]
            md:text-[1.5rem]
            leading-[1.75rem]
            md:leading-[2.25rem]
            font-semibold
            font-[var(--font-jakarta)]
          "
        >
          What “Beyond Ads” Means in Practice
        </h3>

        {/* PRINCIPLES */}
        <div className="flex flex-col gap-8 lg:gap-6 w-full">

          <Principle
            icon={
              <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
                <path d="M14.0002 3.5V24.5M22.1668 9.33333L25.6668 18.6667C24.6571 19.424 23.429 19.8333 22.1668 19.8333C20.9047 19.8333 19.6766 19.424 18.6668 18.6667L22.1668 9.33333ZM22.1668 9.33333V8.16667M3.50016 8.16667H4.66683C7.92229 8.16667 11.1277 7.36531 14.0002 5.83333C16.8726 7.36531 20.078 8.16667 23.3335 8.16667H24.5002M5.8335 9.33333L9.3335 18.6667C8.32377 19.424 7.09566 19.8333 5.8335 19.8333C4.57134 19.8333 3.34322 19.424 2.3335 18.6667L5.8335 9.33333ZM5.8335 9.33333V8.16667M8.16683 24.5H19.8335"
                  stroke="#7996EC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Economics before scale"
            description="Growth decisions are grounded in unit economics, margins, and payback periods. Scale only makes sense when the business model supports it."
          />
          <Principle
            icon={
              <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
                <path d="M18.9468 9.05337L16.8422 15.3662C16.7276 15.7099 16.5346 16.0222 16.2785 16.2783C16.0223 16.5345 15.71 16.7275 15.3663 16.842L9.0535 18.9467L11.1582 12.6339C11.2727 12.2902 11.4657 11.9779 11.7219 11.7217C11.978 11.4656 12.2903 11.2726 12.634 11.158L18.9468 9.05337Z"
                  stroke="#7996EC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14.0002 25.6667C20.4435 25.6667 25.6668 20.4434 25.6668 14C25.6668 7.55672 20.4435 2.33337 14.0002 2.33337C7.55684 2.33337 2.3335 7.55672 2.3335 14C2.3335 20.4434 7.55684 25.6667 14.0002 25.6667Z"
                  stroke="#7996EC"
                  strokeWidth="2"
                />
              </svg>
            }
            title="Conversion and experience ownership"
            description="Performance does not stop at clicks. Landing pages, messaging, and user flow are part of the outcome, not someone else’s problem."
          />

          <Principle
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M3.5 3.5V22.1667C3.5 22.7855 3.74583 23.379 4.18342 23.8166C4.621 24.2542 5.21449 24.5 5.83333 24.5H24.5M8.16667 13.0748C8.1667 12.9204 8.22795 12.7723 8.337 12.663L10.6703 10.3297C10.7245 10.2753 10.7889 10.2322 10.8598 10.2028C10.9306 10.1734 11.0066 10.1583 11.0833 10.1583C11.1601 10.1583 11.236 10.1734 11.3069 10.2028C11.3778 10.2322 11.4421 10.2753 11.4963 10.3297L15.337 14.1703C15.3912 14.2247 15.4556 14.2678 15.5264 14.2972C15.5973 14.3266 15.6733 14.3417 15.75 14.3417C15.8267 14.3417 15.9027 14.3266 15.9736 14.2972C16.0444 14.2678 16.1088 14.2247 16.163 14.1703L21.1703 9.163C21.2518 9.08128 21.3558 9.02558 21.469 9.00295C21.5821 8.98032 21.6995 8.99177 21.8062 9.03586C21.9128 9.07996 22.004 9.1547 22.0682 9.25064C22.1324 9.34659 22.1666 9.45941 22.1667 9.57483V18.6667C22.1667 18.9761 22.0438 19.2728 21.825 19.4916C21.6062 19.7104 21.3094 19.8333 21 19.8333H9.33333C9.02391 19.8333 8.72717 19.7104 8.50838 19.4916C8.28958 19.2728 8.16667 18.9761 8.16667 18.6667V13.0748Z" stroke="#7996EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="Measurement as foundation"
            description="Decisions are only as good as the data behind them. Tracking, attribution, and measurement are treated as foundations, not afterthoughts."
          />


          <Principle
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M11.6667 9.33333H16.3333M14 24.5V14M14 9.33333V3.5M19.8333 18.6667H24.5M22.1667 14V3.5M22.1667 24.5V18.6667M3.5 16.3333H8.16667M5.83333 11.6667V3.5M5.83333 24.5V16.3333" stroke="#7996EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="Judgment-based scaling"
            description="Not every dip needs panic and not every spike deserves scale. Knowing when to push, pause, or rethink is part of the responsibility"
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
    <div className="flex flex-col gap-2 self-stretch">

      {/* ICON + TITLE */}
      <div className="flex items-start md:items-center gap-3">
        <span className="w-[1.5rem] h-[1.5rem] md:w-[1.75rem] md:h-[1.75rem] shrink-0 mt-1 md:mt-0">
          {icon}
        </span>

        <h4
          className="
            text-white
            text-[1.125rem]
            md:text-[1.25rem]
            leading-[1.5rem]
            md:leading-[1.75rem]
            font-semibold
            font-[var(--font-jakarta)]
          "
        >
          {title}
        </h4>
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          text-[#C2CAD6]
          text-[0.9375rem]
          md:text-[1rem]
          leading-[1.4rem]
          md:leading-[1.5rem]
          font-normal
          font-[var(--font-jakarta)]
        "
      >
        {description}
      </p>

    </div>
  )
}