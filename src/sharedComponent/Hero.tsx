'use client'

export default function HeroSection() {
  return (
    <section
      className="
        flex
        justify-center
        items-start
        gap-[3.25rem]
        px-[7.5rem]
        py-[5rem]
        bg-[#02050E]
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          flex
          flex-col
          justify-between
          items-start               
          w-[614px]
          self-stretch
          gap-16
        "
      >
        {/* TEXT BLOCK */}
        <div className="flex flex-col gap-6 max-w-[42rem]">
          <h1 className="text-white text-[64px] leading-[80px] font-medium font-heading">
            A Digital Marketing
            <br />
            Agency That Owns
            <br />
            <span className="text-[#F90]">Business Outcomes</span>
          </h1>

          <p className="text-[#C2CAD6] text-[20px] leading-[32px] font-normal font-body">
            We work with growing businesses that want marketing decisions tied
            to revenue, ROI, and long-term scalability, not just campaigns and
            activity.
          </p>
        </div>

        {/* BULLET POINTS */}
        <ul className="flex flex-col gap-3 mt-[-3rem]">
          {/* ITEM */}
          <li className="flex items-start gap-3">
            {/* SVG ICON */}
            <span className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 18.53C11.6406 18.6705 11.8312 18.7493 12.03 18.7493C12.2287 18.7493 12.4193 18.6705 12.56 18.53L18.56 12.53C18.7004 12.3894 18.7793 12.1988 18.7793 12C18.7793 11.8013 18.7004 11.6106 18.56 11.47L12.56 5.47C12.4193 5.32955 12.2287 5.25066 12.03 5.25066C11.8312 5.25066 11.6406 5.32955 11.5 5.47L11.5 10.409L6.55996 5.469C6.41933 5.32855 6.22871 5.24967 6.02996 5.24967C5.83121 5.24967 5.64058 5.32855 5.49996 5.469L5.49996 18.53C5.64058 18.6705 5.83121 18.7493 6.02996 18.7493C6.22871 18.7493 6.41933 18.6705 6.55996 18.53L11.5 13.591L11.5 18.53Z"
                  fill="#FF9900"
                />
              </svg>
            </span>

            {/* TEXT */}
            <p className="text-[#C2CAD6] text-[16px] leading-[24px] font-normal font-[var(--font-jakarta)]">
              Decisions guided by revenue, ROI, and growth economics
            </p>
          </li>

          {/* ITEM */}
          <li className="flex items-start gap-3 mt-[-0.5rem]">
            <span className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 18.53C11.6406 18.6705 11.8312 18.7493 12.03 18.7493C12.2287 18.7493 12.4193 18.6705 12.56 18.53L18.56 12.53C18.7004 12.3894 18.7793 12.1988 18.7793 12C18.7793 11.8013 18.7004 11.6106 18.56 11.47L12.56 5.47C12.4193 5.32955 12.2287 5.25066 12.03 5.25066C11.8312 5.25066 11.6406 5.32955 11.5 5.47L11.5 10.409L6.55996 5.469C6.41933 5.32855 6.22871 5.24967 6.02996 5.24967C5.83121 5.24967 5.64058 5.32855 5.49996 5.469L5.49996 18.53C5.64058 18.6705 5.83121 18.7493 6.02996 18.7493C6.22871 18.7493 6.41933 18.6705 6.55996 18.53L11.5 13.591L11.5 18.53Z"
                  fill="#FF9900"
                />
              </svg>
            </span>

            <p className="text-[#C2CAD6] text-[16px] leading-[24px] font-normal font-[var(--font-jakarta)]">
              Senior-led thinking with direct ownership beyond onboarding
            </p>
          </li>

          {/* ITEM */}
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 18.53C11.6406 18.6705 11.8312 18.7493 12.03 18.7493C12.2287 18.7493 12.4193 18.6705 12.56 18.53L18.56 12.53C18.7004 12.3894 18.7793 12.1988 18.7793 12C18.7793 11.8013 18.7004 11.6106 18.56 11.47L12.56 5.47C12.4193 5.32955 12.2287 5.25066 12.03 5.25066C11.8312 5.25066 11.6406 5.32955 11.5 5.47L11.5 10.409L6.55996 5.469C6.41933 5.32855 6.22871 5.24967 6.02996 5.24967C5.83121 5.24967 5.64058 5.32855 5.49996 5.469L5.49996 18.53C5.64058 18.6705 5.83121 18.7493 6.02996 18.7493C6.22871 18.7493 6.41933 18.6705 6.55996 18.53L11.5 13.591L11.5 18.53Z"
                  fill="#FF9900"
                />
              </svg>
            </span>

            <p className="text-[#C2CAD6] text-[16px] leading-[24px] font-normal font-[var(--font-jakarta)]">
              Structured execution built for consistency, accountability, and scale
            </p>
          </li>
        </ul>
        {/* CTA BUTTON */}
        <button
          className="
            flex
            items-center
            justify-center
            gap-[10px]
            px-8
            py-4
            rounded-[8px]
            bg-[#F90]
            text-[#331F00]
            text-[20px]
            leading-[32px]
            font-bold
            tracking-[-0.2px]
            font-ui
            mt-[-2rem]
          "
        >
          Book a Strategy Call
        </button>

        {/* PARTNER LOGOS */}
        <div className="flex items-center gap-6 mt-[-1rem]">
          {/* GOOGLE PARTNER */}
          <img
            src="/partner1.png"
            alt="Google Partner"
            className="w-[152px] h-[59px] object-contain"
          />

          {/* META BUSINESS PARTNER */}
          <div
            className="
      flex
      justify-center
      gap-6 
      
    "
          >
            <img
              src="/partner2.png"
              alt="Meta Business Partner"
              className="object-contain"
            />
          </div>
        </div>

      </div>

      {/* RIGHT FORM CARD */}
      {/* RIGHT FORM CARD */}
      <div
        className="
                   flex
                   flex-col
                   items-center
                   gap-6
                   w-[534px]
                   px-8
                   py-6
                   rounded-[24px]
                   border-[0.5px]
                   border-white/25
                   bg-[#050914]
                 "
                   >
        {/* HEADING */}
        <h3 className="self-start text-white text-[24px] leading-[36px] font-medium font-[var(--font-jakarta)]">
          Book a Strategy Call
        </h3>

        {/* FORM */}
        <form className="w-full flex flex-col gap-4">

          {/* INPUT ROW */}
          <div className="grid grid-cols-2 gap-4">

            {/* FULL NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-[#BDCBF6] text-[14px] leading-[20px] font-normal font-[var(--font-jakarta)]">
                Full Name
              </label>
              <input
                placeholder="e.g. Sarah Johnson"
                className="
                 w-full
                 px-4 py-3
                 rounded-[8px]
                  bg-[#0A0F1D]
                 text-white
                 text-[14px]
                  leading-[20px]
                  font-[var(--font-jakarta)]
                  placeholder:text-[#52627A]
                  placeholder:text-[14px]
                  placeholder:leading-[20px]
                  placeholder:font-normal
                  placeholder:text-left
                  outline-none
                    "
              />

            </div>

            {/* WORK EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-[#BDCBF6] text-[14px] leading-[20px] font-normal font-[var(--font-jakarta)]">
                Work Email
              </label>
              <input
                placeholder="e.g. sarah@company.com"
                className="
  w-full
  px-4 py-3
  rounded-[8px]
  bg-[#0A0F1D]
  text-white
  text-[14px]
  leading-[20px]
  font-[var(--font-jakarta)]
  placeholder:text-[#52627A]
  placeholder:text-[14px]
  placeholder:leading-[20px]
  placeholder:font-normal
  placeholder:text-left
  outline-none
"

              />
            </div>
          </div>

          {/* COMPANY WEBSITE */}
          <div className="flex flex-col gap-2">
            <label className="text-[#BDCBF6] text-[14px] leading-[20px] font-normal font-[var(--font-jakarta)]">
              Company Website
            </label>
            <input
              placeholder="e.g. https://www.mycompany.com"
              className="
                          w-full
                          px-4 py-3
                          rounded-[8px]
                          bg-[#0A0F1D]
                          text-white
                          text-[14px]
                          leading-[20px]
                          font-[var(--font-jakarta)]
                          placeholder:text-[#52627A]
                          placeholder:text-[14px]
                          placeholder:leading-[20px]
                          placeholder:font-normal
                          placeholder:text-left
                                                   outline-none
"
            />
          </div>

          {/* MONTHLY SPEND */}
          <div className="flex flex-col gap-2">
            <label className="text-[#BDCBF6] text-[14px] leading-[20px] font-normal font-[var(--font-jakarta)]">
              Monthly Marketing Spend
            </label>
            <div className="relative w-full">
              <select
                className="
      w-full
      px-4 py-3 pr-10
      rounded-[8px]
      bg-[#0A0F1D]
      text-[14px]
      leading-[20px]
      font-[var(--font-jakarta)]
      text-[#52627A]
      outline-none
      appearance-none
      cursor-pointer
    "
                defaultValue=""
              >
                <option value="" disabled>
                  e.g. 3–5 Lakhs, 5–10 Lakhs, 10–20 Lakhs…
                </option>
                <option>3–5 Lakhs</option>
                <option>5–10 Lakhs</option>
                <option>10–20 Lakhs</option>
              </select>

              {/* DROPDOWN ARROW */}
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#52627A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>


          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-2">
            <label className="text-[#BDCBF6] text-[14px] leading-[20px] font-normal font-[var(--font-jakarta)]">
              Services
            </label>

            <div className="relative w-full">
              <select className="
      w-full
      px-4 py-3 pr-10
      rounded-[8px]
      bg-[#0A0F1D]
      text-[14px]
      leading-[20px]
      font-[var(--font-jakarta)]
      text-[#52627A]
      outline-none
      appearance-none
      cursor-pointer
    "
                defaultValue="">
                <option>e.g. Ads, Landing Page, SEO</option>
                <option>Ads</option>
                <option>Landing Pages</option>
                <option>SEO</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#52627A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* TEXTAREA */}
          <div className="flex flex-col gap-2">
            <label className="text-[#BDCBF6] text-[14px] leading-[20px] font-normal font-[var(--font-jakarta)]">
              What are you trying to achieve right now?
            </label>
            <textarea
              placeholder="e.g. Low demo bookings"
              className="
  w-full
  px-4 py-3
  rounded-[8px]
  bg-[#0A0F1D]
  text-white
  text-[14px]
  leading-[20px]
  font-[var(--font-jakarta)]
  placeholder:text-[#52627A]
  placeholder:text-[14px]
  placeholder:leading-[20px]
  placeholder:font-normal
  placeholder:text-left
  outline-none
"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
        mt-2
        w-full
        flex
        justify-center
        items-center
        gap-2
        px-6
        py-3
        rounded-[8px]
        bg-[#E5E5E5]
        text-[#1E293B]
        text-[14px]
        font-semibold
      "
          >
            Submit →
          </button>

          {/* FOOTER TEXT */}
          <p className="text-xs text-[#94A3B8] text-center">
            No spam. Just a focused conversation about growth.
          </p>

        </form>
      </div>

    </section>
  )
}
