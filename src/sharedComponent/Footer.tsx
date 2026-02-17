'use client'
import Image from "next/image"
import logo from '../../public/logo.png'
import Link from "next/link"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="w-full bg-[#02050E] text-white flex flex-col gap-9 md:gap-[50px] px-6 md:px-12 lg:px-[120px] pt-12 md:pt-[120px] pb-8 md:pb-[60px] justify-center items-start">

      {/* Top CTA */}
      <div className="flex flex-row justify-between items-center w-full border-b border-gray-700 gap-4 pb-8 md:pb-[60px]">
        <h2 className="text-[25px] sm:text-3xl md:text-4xl lg:text-6xl font-[600] leading-tight md:leading-[43px] text-white font-[Plus Jakarta Sans]">
          Got a great Idea?
        </h2>
        <Link href='/book-a-call'>
          <button className="border border-[#94A3B8] text-[#94A3B8] px-4 md:px-6 py-2 rounded-full text-xs md:text-sm whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-300">
            Let’s chat
          </button>
        </Link>
      </div>

      {/* Middle: Contact Info + Socials */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 text-[13px] font-[400] text-[#94A3B8] leading-[20px] md:leading-[21.034px] font-[Plus Jakarta Sans] border-b border-gray-700 pb-8 md:pb-[50px]">

        {/* Left: Contact & Phone */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-10">
          <div>
            <p className="mb-2 text-white text-[10px] uppercase tracking-widest font-[400]">Contact</p>
            <p className="hover:text-white transition-colors cursor-pointer">hello@shitanshudigital.com</p>
          </div>
          <div>
            <p className="mb-2 text-white text-[10px] uppercase tracking-widest font-[400]">Phone</p>
            <p className="hover:text-white transition-colors cursor-pointer">+91 82871 24652</p>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <p className="text-white text-[10px] uppercase tracking-widest">
            Socials
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="p-2 border border-white/20 rounded hover:border-[#FF9900] hover:text-[#FF9900] transition group">
              <FaFacebookF className="w-4 h-4 md:w-[1.25rem] md:h-[1.2455rem]" />
            </a>
            <a
              href="https://www.linkedin.com/in/shitanshu-kumar1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/20 rounded hover:border-[#FF9900] hover:text-[#FF9900] transition"
            >
              <FaLinkedinIn className="w-4 h-4 md:w-[1.25rem] md:h-[1.2455rem]" />
            </a>
            <a href="#" className="p-2 border border-white/20 rounded hover:border-[#FF9900] hover:text-[#FF9900] transition">
              <FaInstagram className="w-4 h-4 md:w-[1.25rem] md:h-[1.2455rem]" />
            </a>
            <a href="#" className="p-2 border border-white/20 rounded hover:border-[#FF9900] hover:text-[#FF9900] transition">
              <FaXTwitter className="w-4 h-4 md:w-[1.25rem] md:h-[1.2455rem]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: Branding & Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-6 text-[10px] text-[#94A3B8]">
        <div className="w-[120px] md:w-[180px] lg:w-[200px]">
          <Image 
            src={logo} 
            alt='Shitanshu Digital Logo' 
            layout="responsive"
            width={200} 
            height={50} 
            className="object-contain"
          />
        </div>
        <p className="mt-0 opacity-70">© 2026 Shitanshu Kumar</p>
      </div>
    </footer>
  )
}