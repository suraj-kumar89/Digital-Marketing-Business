'use client'

import { useState } from 'react'

/* ================= FAQ DATA ================= */

const FAQS = [
  {
    question: 'What kind of budgets does this work best for?',
    answer:
      'This work is suitable for businesses starting from scratch as well as those already investing in marketing and looking for better outcomes. Budgets vary based on context and goals and are discussed during the strategy call.',
  },
  {
    question: 'How long does it take to see progress?',
    answer:
      'Initial clarity usually comes early. Meaningful improvements depend on the starting point, complexity, and decisions made. The focus is on building stable progress rather than chasing quick spikes.',
  },
  {
    question: 'How does the engagement typically work?',
    answer:
      'Work starts with understanding the business and setting a clear foundation. From there, efforts are focused, reviewed regularly, and adjusted based on outcomes.',
  },
  {
    question: 'How is success measured?',
    answer:
      'Success is measured against agreed business outcomes such as efficiency, quality, and consistency of results, not just activity or surface metrics.',
  },
]

/* ================= SECTION ================= */

export default function FAQSection() {
  return (
    <section
      className="
        flex flex-col items-center
        gap-[4rem]
        px-[7.5rem] py-[5rem]
        bg-[#02050E]
        self-stretch
      "
    >
      {/* ================= HEADING ================= */}

      <h2
        className="
          text-white text-center
          text-[3rem]
          leading-[4rem]
          font-medium
          font-[var(--Type-Font-Family-Headings)]
        "
      >
        Frequently Asked Questions
      </h2>

      {/* ================= FAQ LIST ================= */}

      <div className="w-[48rem] flex flex-col gap-[1rem]">
        {FAQS.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  )
}

/* ================= FAQ ITEM ================= */

function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="
        flex flex-col
        p-[2.5rem]
        gap-[1.5rem]
        rounded-[0.625rem]
        bg-[#0A0F1D]
        w-full
      "
    >
      {/* ================= QUESTION ================= */}

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span
          className="
            text-white
            text-[1.25rem]
            leading-[1.75rem]
            font-medium
            font-[var(--Type-Font-Family-Headings)]
          "
        >
          {question}
        </span>

        {/* ARROW ICON */}
        <ArrowIcon open={open} />
      </button>

      {/* ================= ANSWER ================= */}

      {open && (
        <p
          className="
            text-[#94A3B8]
            text-[1rem]
            leading-[1.5rem]
            font-normal
            font-[var(--Type-Font-Family-Body)]
          "
        >
          {answer}
        </p>
      )}
    </div>
  )
}

/* ================= ARROW ICON ================= */

function ArrowIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`w-[0.75rem] h-[0.75rem] transition-transform duration-300 ${
        open ? 'rotate-180' : ''
      }`}
      fill="none"
    >
      <path
        d="M11.1998 4L5.99981 9.6L0.799805 4"
        stroke="white"
        strokeWidth="1.06667"
        strokeLinecap="square"
      />
    </svg>
  )
}
