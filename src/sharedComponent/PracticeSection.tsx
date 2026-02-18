'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
const assetPath = '/digital-marketing-agency';
/* ================= TYPES ================= */

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
  metric: string
  metricText: string
  logo: string
}

/* ================= TESTIMONIAL DATA ================= */

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sandeep John',
    role: 'Marketing Director',
    image: `${assetPath}/testimonials/test3.png`,
    quote:
      '“Shitanshu is a highly skilled Performance Marketer. During our time together at Outplay, Shitanshu consistently delivered impressive results, thanks to his deep understanding of data analysis, ad creative, and audience targeting. I was particularly impressed with Shitanshu ability to deliver on lead requirements from paid campaigns while keeping costs low.”',
    metric: '8x',
    metricText: 'Increase in conversion rate',
    logo: `${assetPath}/testimonials/testl1.svg`,
  },
  {
    name: 'Pramod Sahoo',
    role: 'Founder',
    image: `${assetPath}/testimonials/test2.png`,
    quote: '“Shitanshu and his team has helped revive our yoga school, we went from zero visibility to getting student bookings within the first month. They transformed our website, ran effective ads, and got us ranking on Google for top keywords. Truly a game-changer for us.”',
    metric: '8x',
    metricText: 'Increase in conversion rate',
    logo: `${assetPath}/testimonials/testl3.svg`,
  },
  {
    name: 'Noaman Ansari',
    role: 'CEO',
    image: `${assetPath}/testimonials/test4.png`,
    quote: '“Working with Shitanshu and his team was a complete game-changer for our business. Before partnering with him, we were struggling to hit our targets despite investing in ads. But within just two months, not only did we surpass our lead generation goals, we also saw a significant jump in revenue.”',
    metric: '8x',
    metricText: 'Increase in conversion rate',
    logo: `${assetPath}/testimonials/testl4.svg`,
  },
  {
    name: 'Nisha Seth',
    role: 'Co-Founder',
    image: `${assetPath}/testimonials/test5.png`,
    quote: '“Bluvo Digital helped launch my fashion brand, Brazen Born, and we started getting orders much sooner than expected. Their strategy, audience targeting, and messaging were spot on. I’d recommend them to anyone starting a new brand.”',
    metric: '8x',
    metricText: 'Increase in conversion rate',
    logo: `${assetPath}/testimonials/testl5.svg`,
  },
  {
    name: 'Chesta Mittal',
    role: 'Founder',
    image: `${assetPath}/testimonials/test1.png`,
    quote: '“Shitanshu is a highly skilled Performance Marketer. During our time together at Outplay, Shitanshu consistently delivered impressive results, thanks to his deep understanding of data analysis, ad creative, and audience targeting. I was particularly impressed with Shitanshu ability to deliver on lead requirements from paid campaigns while keeping costs low.”',
    metric: '8x',
    metricText: 'Increase in conversion rate',
    logo: `${assetPath}/testimonials/testl2.svg`,
  },
  {
    name: 'Devang Savaliya',
    role: 'CMO',
    image: `${assetPath}/testimonials/test6.png`,
    quote: '“Working with Bluvo Digital led to a clear increase in our website traffic and a noticeable drop in ad costs. Their team was highly professional, met every deadline, and maintained excellent communication throughout. Their timely support and responsiveness truly stood out.”',
    metric: '8x',
    metricText: 'Increase in conversion rate',
    logo: `${assetPath}/testimonials/testl6.svg`,
  },
]

/* ================= SECTION ================= */

export default function PracticeSection() {
  const [index, setIndex] = useState<number>(TESTIMONIALS.length)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const loopData = [...TESTIMONIALS, ...TESTIMONIALS]

  useEffect(() => {
    if (index >= TESTIMONIALS.length * 2 - 1) {
      setTimeout(() => {
        setIndex(TESTIMONIALS.length)
      }, 700)
    }
  }, [index])

  const activeData = loopData[index]

  return (
    <section className="flex flex-col items-center gap-12 md:gap-[4rem] px-6 md:px-12 lg:px-[7.5rem] py-12 md:py-[5rem] bg-[#02050E] overflow-hidden">
      
      {/* HEADING - Responsive font size */}
      <h2 className="text-white text-[2rem] md:text-[3rem] text-center max-w-4xl font-semibold font-[var(--font-jakarta)] leading-[2.75rem] md:leading-[4rem]">
        What This Looks Like <span className="text-[#F90]">in Practice</span>
      </h2>

      {/* CARD - Responsive width and layout */}
      <PracticeCard data={activeData} />

      {/* AVATAR CAROUSEL - Responsive container */}
      <AvatarCarousel items={TESTIMONIALS} index={index} setIndex={setIndex} animate />

    </section>
  )
}
/* ================= PRACTICE CARD ================= */
function PracticeCard({ data }: { data: Testimonial }) {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[57rem] rounded-[1.5rem] overflow-hidden border border-white/10 bg-[#050914]">

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-between flex-1 px-6 py-8 md:px-[2.5rem] md:py-[2rem] order-2 md:order-1">
        <div>
          <QuoteIcon />
          <p className="mt-6 md:mt-8 text-[#C2CAD6CC] text-[0.875rem] leading-[1.25rem]">
            {data.quote}
          </p>
        </div>

        <div className="flex justify-between items-end mt-8">
          <div>
            <div className="text-white text-[2.5rem] md:text-[3rem] font-bold">{data.metric}</div>
            <div className="text-white text-[0.875rem] md:text-[1rem] opacity-80">{data.metricText}</div>
          </div>

          <div className="relative w-[3.375rem] h-[1.75rem]">
            <Image
              src={data.logo}
              alt="company logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE - Responsive height on mobile */}
      <div className="w-full md:w-[19.8125rem] h-[20rem] md:h-[24.75rem] relative p-[8px] order-1 md:order-2">
        <div className="absolute inset-0 m-[8px] rounded-[1.5rem] bg-gradient-to-b from-[#FF9900] to-transparent p-[1px]">
             <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-[#050914]">
                <Image src={data.image} alt={data.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                <div className="absolute bottom-4 left-4">
                  <div className="text-[#F90] text-[1.125rem] md:text-[1.25rem] font-bold">{data.name}</div>
                  <div className="text-[#94A3B8] text-[0.875rem]">{data.role}</div>
                </div>
             </div>
        </div>
      </div>

    </div>
  )
}

/* ================= AVATAR CAROUSEL ================= */
function AvatarCarousel({
  items,
  index,
  setIndex,
  animate,
}: {
  items: Testimonial[]
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
  animate: boolean
}) {
  const ITEM_WIDTH = 236
  const loopItems = [...items, ...items]

  // Using window width logic for centering
  const [viewWidth, setViewWidth] = useState(900)
  
  useEffect(() => {
    const handleResize = () => setViewWidth(Math.min(window.innerWidth, 900))
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const translateX = viewWidth / 2 - (index * ITEM_WIDTH + ITEM_WIDTH / 2)

  return (
    <div className="w-full max-w-[900px] overflow-hidden mx-auto touch-pan-x">
      <div
        className={`flex gap-4 py-4 ${
          animate ? 'transition-transform duration-[1200ms] ease-out' : ''
        }`}
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        {loopItems.map((item, i) => {
          const realIndex = i % items.length
          const active = realIndex === index % items.length
          return (
            <div
              key={i}
              onClick={() => setIndex(realIndex + items.length)}
              className="shrink-0"
            >
              <Avatar name={item.name} role={item.role} image={item.image} active={active} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ================= AVATAR ================= */

/* ================= AVATAR ================= */

function Avatar({
  name,
  role,
  image,
  active,
}: {
  name: string
  role: string
  image: string
  active: boolean
}) {
  return (
    <div
      className={`
        flex items-center gap-[0.625rem]
        px-[1.5rem] py-[0.75rem] pl-[0.75rem]
        rounded-[24rem]
        min-w-[220px]
        transition-all duration-500

        ${active
          ? `
              border-[0.5px] border-[#F90]
              bg-[#0A0F1D]
              shadow-[0_4px_4px_rgba(0,0,0,0.25)]
              scale-110 opacity-100
            `
          : `
              opacity-40 scale-95
            `
        }
      `}
    >
      {/* AVATAR IMAGE */}
      <div
        className={`
          w-[3.25rem] h-[3.25rem]
          rounded-[2.375rem]
          border-2 border-[#F90]
          overflow-hidden
          shadow-[0_4px_14px_rgba(255,153,0,0.30)]
          shrink-0
        `}
      >
        <Image
          src={image}
          alt={name}
          width={52}
          height={52}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col">
        {/* NAME */}
        <span
          className="
            text-[#F90]
            text-[1rem]
            leading-[1.5rem]
            font-bold
            tracking-[-0.01rem]
            font-[var(--Type-Font-Family-UI)]
          "
        >
          {name}
        </span>

        {/* ROLE */}
        <span
          className="
            text-[#94A3B8]
            text-[0.875rem]
            leading-[1.25rem]
            font-normal
            font-[var(--Type-Font-Family-Body)]
          "
        >
          {role}
        </span>
      </div>
    </div>
  )
}


/* ================= QUOTE ICON ================= */

function QuoteIcon() {
  return (
    <svg viewBox="0 0 19 16" className="w-[1.1875rem] h-[1rem] fill-[#F90]">
      <path d="M15.8996 14.7755C17.9665 12.8163 19 9.38776 19 4.4898C19 2.91157 18.6555 1.76871 17.9665 1.06123C17.2245 0.353742 16.0586 0 14.4686 0C12.8787 0 11.8187 0.299319 11.2887 0.897957C10.7587 1.44218 10.4937 2.28572 10.4937 3.42857C10.4937 5.06122 10.6527 6.14966 10.9707 6.69388C11.2357 7.5102 12.1367 7.91837 13.6736 7.91837C14.6276 7.91837 15.1046 8.40816 15.1046 9.38775C15.1046 11.619 14.4421 13.551 13.1172 15.1837C13.1172 15.7279 13.3026 16 13.6736 16C14.3626 15.8912 15.1046 15.483 15.8996 14.7755ZM5.40586 14.7755C7.4728 12.8163 8.50628 9.38776 8.50628 4.4898C8.50628 2.91157 8.16179 1.76871 7.4728 1.06123C6.73082 0.353742 5.56485 0 3.9749 0C2.38494 0 1.32496 0.299319 0.794979 0.897957C0.264994 1.44218 0 2.28572 0 3.42857C0 5.06122 0.158997 6.14966 0.47699 6.69388C0.741982 7.5102 1.64296 7.91837 3.17992 7.91837C4.13389 7.91837 4.61088 8.40816 4.61088 9.38775C4.61088 11.619 3.9484 13.551 2.62343 15.1837C2.62343 15.7279 2.80893 16 3.17992 16C3.8689 15.8912 4.61088 15.483 5.40586 14.7755Z" />
    </svg>
  )
}
