'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-20
        flex
        items-center
        justify-between
        h-[5rem]
        px-[7.5rem]
        bg-[#0A0F1D]
      "
    >
      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          className="w-[10.5625rem] h-[1.25rem]"
          priority
        />
      </Link>

      {/* CTA BUTTON */}
      <Link href="/book-a-call">
        <button
          className="
            flex
            items-center
            justify-center
            gap-[10px]
            px-6
            py-3
            rounded-lg
            bg-[#FF9900]

            text-[#331F00]
            text-[1rem]
            font-bold
            leading-[1.5rem]
            tracking-[-0.01rem]

            transition-colors
            hover:bg-[#E68A00]
            focus:outline-none
          "
          style={{ fontFamily: '"Plus Jakarta Sans"' }}
        >
         Get Started
        </button>
      </Link>
    </header>
  )
}
