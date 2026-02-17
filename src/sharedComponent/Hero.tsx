'use client'

export default function HeroSection() {
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
        lg:gap-[3.25rem]
        px-6
        md:px-12
        lg:px-[7.5rem]
        py-12
        lg:py-[5rem]
        bg-[#02050E]
        overflow-x-hidden
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          flex
          flex-col
          justify-between
          items-start               
          w-full
          max-w-[614px]
          self-stretch
          gap-10
          lg:gap-16
        "
      >
        {/* TEXT BLOCK */}
        <div className="flex flex-col gap-6 max-w-[42rem]">
     <h1 className="text-white text-[32px] md:text-[48px] lg:text-[64px] leading-[40px] md:leading-[60px] lg:leading-[80px] font-medium font-heading">
  {/* Line 1 */}
  A Digital Marketing
  <br />

  {/* Line 2 */}
  Agency That{" "}
  <span className="relative inline-block">
    Owns
    <img
      src="/underline.svg"
      alt=""
      className="absolute left-0 top-[90%] w-[4.5rem] md:w-[10.9rem] rotate-[1.29deg] pointer-events-none"
    />
  </span>
  <br />

  {/* Line 3 - Forced to stay on one line */}
  <span className="text-[#F90] whitespace-nowrap">
    Business Outcomes
  </span>
</h1>
          <p className="text-[#C2CAD6] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] font-body">
            We work with growing businesses that want marketing decisions tied
            to revenue, ROI, and long-term scalability, not just campaigns and
            activity.
          </p>
        </div>


        {/* BULLET POINTS */}
        <ul className="flex flex-col gap-3 lg:mt-[-3rem]">
          {/* ITEM */}
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 18.53C11.6406 18.6705 11.8312 18.7493 12.03 18.7493C12.2287 18.7493 12.4193 18.6705 12.56 18.53L18.56 12.53C18.7004 12.3894 18.7793 12.1988 18.7793 12C18.7793 11.8013 18.7004 11.6106 18.56 11.47L12.56 5.47C12.4193 5.32955 12.2287 5.25066 12.03 5.25066C11.8312 5.25066 11.6406 5.32955 11.5 5.47L11.5 10.409L6.55996 5.469C6.41933 5.32855 6.22871 5.24967 6.02996 5.24967C5.83121 5.24967 5.64058 5.32855 5.49996 5.469L5.49996 18.53C5.64058 18.6705 5.83121 18.7493 6.02996 18.7493C6.22871 18.7493 6.41933 18.6705 6.55996 18.53L11.5 13.591L11.5 18.53Z" fill="#FF9900" />
              </svg>
            </span>
            <p className="text-[#C2CAD6] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-normal font-[var(--font-jakarta)]">
              Decisions guided by revenue, ROI, and growth economics
            </p>
          </li>

          {/* ITEM */}
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 18.53C11.6406 18.6705 11.8312 18.7493 12.03 18.7493C12.2287 18.7493 12.4193 18.6705 12.56 18.53L18.56 12.53C18.7004 12.3894 18.7793 12.1988 18.7793 12C18.7793 11.8013 18.7004 11.6106 18.56 11.47L12.56 5.47C12.4193 5.32955 12.2287 5.25066 12.03 5.25066C11.8312 5.25066 11.6406 5.32955 11.5 5.47L11.5 10.409L6.55996 5.469C6.41933 5.32855 6.22871 5.24967 6.02996 5.24967C5.83121 5.24967 5.64058 5.32855 5.49996 5.469L5.49996 18.53C5.64058 18.6705 5.83121 18.7493 6.02996 18.7493C6.22871 18.7493 6.41933 18.6705 6.55996 18.53L11.5 13.591L11.5 18.53Z" fill="#FF9900" />
              </svg>
            </span>
            <p className="text-[#C2CAD6] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-normal font-[var(--font-jakarta)]">
              Senior-led thinking with direct ownership beyond onboarding
            </p>
          </li>

          {/* ITEM */}
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 18.53C11.6406 18.6705 11.8312 18.7493 12.03 18.7493C12.2287 18.7493 12.4193 18.6705 12.56 18.53L18.56 12.53C18.7004 12.3894 18.7793 12.1988 18.7793 12C18.7793 11.8013 18.7004 11.6106 18.56 11.47L12.56 5.47C12.4193 5.32955 12.2287 5.25066 12.03 5.25066C11.8312 5.25066 11.6406 5.32955 11.5 5.47L11.5 10.409L6.55996 5.469C6.41933 5.32855 6.22871 5.24967 6.02996 5.24967C5.83121 5.24967 5.64058 5.32855 5.49996 5.469L5.49996 18.53C5.64058 18.6705 5.83121 18.7493 6.02996 18.7493C6.22871 18.7493 6.41933 18.6705 6.55996 18.53L11.5 13.591L11.5 18.53Z" fill="#FF9900" />
              </svg>
            </span>
            <p className="text-[#C2CAD6] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-normal font-[var(--font-jakarta)]">
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
            text-[18px]
            md:text-[20px]
            leading-[32px]
            font-bold
            tracking-[-0.2px]
            font-ui
            lg:mt-[-2rem]
            w-full
            md:w-auto
          "
        >
          Book a Strategy Call
        </button>

        {/* PARTNER LOGOS */}
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 lg:mt-[-1rem] w-full">
  {/* Google Partner Logo */}
  <img 
    src="/partner1.svg" 
    alt="Google Partner" 
    className="w-[120px] md:w-[152px] h-[40px] md:h-auto object-contain" 
  />
  
  {/* Meta Business Partner Logo */}
  <img 
    src="/partner2.svg" 
    alt="Meta Business Partner" 
    className="w-[120px] md:w-[152px] h-[40px] md:h-auto object-contain" 
  />
</div>

      </div>

      {/* RIGHT FORM CARD */}
      <div
        className="
          flex
          flex-col
          items-center
          gap-6
          w-full
          max-w-[534px]
          px-6
          md:px-8
          py-6
          rounded-[24px]
          border-[0.5px]
          border-white/25
          bg-[#050914]
        "
      >
        <h3 className="self-start text-white text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] font-medium font-[var(--font-jakarta)]">
          Book a Strategy Call
        </h3>

        <form className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#BDCBF6] text-[14px] font-normal">Full Name</label>
              <input placeholder="e.g. Sarah Johnson" className="w-full px-4 py-3 rounded-[8px] bg-[#0A0F1D] text-white text-[14px] outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#BDCBF6] text-[14px] font-normal">Work Email</label>
              <input placeholder="e.g. sarah@company.com" className="w-full px-4 py-3 rounded-[8px] bg-[#0A0F1D] text-white text-[14px] outline-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#BDCBF6] text-[14px] font-normal">Company Website</label>
            <input placeholder="e.g. https://www.mycompany.com" className="w-full px-4 py-3 rounded-[8px] bg-[#0A0F1D] text-white text-[14px] outline-none" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#BDCBF6] text-[14px] font-normal">Monthly Marketing Spend</label>
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-[8px] bg-[#0A0F1D] text-[14px] text-[#52627A] outline-none appearance-none cursor-pointer" defaultValue="">
                <option value="" disabled>e.g. 3–5 Lakhs, 5–10 Lakhs...</option>
                <option>3–5 Lakhs</option>
                <option>5–10 Lakhs</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="#52627A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#BDCBF6] text-[14px] font-normal">Services</label>
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-[8px] bg-[#0A0F1D] text-[14px] text-[#52627A] outline-none appearance-none cursor-pointer" defaultValue="">
                <option>e.g. Ads, Landing Page, SEO</option>
                <option>Ads</option>
                <option>SEO</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="#52627A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#BDCBF6] text-[14px] font-normal">What are you trying to achieve?</label>
            <textarea placeholder="e.g. Low demo bookings" className="w-full px-4 py-3 rounded-[8px] bg-[#0A0F1D] text-white text-[14px] outline-none min-h-[80px]" />
          </div>

          <button type="submit" className="mt-2 w-full flex justify-center items-center gap-2 px-6 py-3 rounded-[8px] bg-[#E5E5E5] text-[#1E293B] text-[14px] font-semibold">
            Submit →
          </button>
          <p className="text-xs text-[#94A3B8] text-center">No spam. Just a focused conversation about growth.</p>
        </form>
      </div>
    </section>
  )
}