'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { DottedSurface } from '@/components/ui/dotted-surface'

export default function Hero() {
  return (
    <section id="home" className="min-h-[68vh] md:min-h-[72vh] relative overflow-hidden bg-[#0b1220] pt-16 sm:pt-20 md:pt-24 pb-0">
      <DottedSurface className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-900/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[68vh] md:min-h-[72vh] flex items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center w-full pt-2 sm:pt-4 md:pt-6">
          <div className="text-center lg:text-left animate-slide-left">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-sky-500/10 border border-sky-400/30 rounded-full text-sky-300 text-xs sm:text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-slate-100">Hello, I&apos;m</span>
              <br />
              <span className="text-sky-400">Samadhan</span>
            </h1>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-semibold mb-4 sm:mb-6">Full Stack Developer</h3>
            <p className="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              I build professional digital products with clean architecture, modern technology, and performance-first development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-sky-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-sky-400 transition-colors duration-300"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border border-slate-600 text-slate-200 text-sm sm:text-base font-semibold rounded-xl hover:border-sky-400 hover:text-sky-300 transition-colors duration-300"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="relative animate-slide-right">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-slate-700/80"></div>
              <div className="absolute inset-[10px] rounded-full bg-[#0f172a] overflow-hidden border border-slate-700/70">
                <Image
                  src="/images/profile/samadhan.png"
                  alt="Samadhan profile photo"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 500px"
                  className="object-cover"
                />
              </div>

              <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center shadow-xl border border-cyan-400/40">
                <SiTailwindcss size={24} className="text-cyan-400 sm:w-7 sm:h-7" />
              </div>
              <div className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#F7DF1E] rounded-2xl flex items-center justify-center shadow-xl border border-yellow-300">
                <SiJavascript size={24} className="text-black sm:w-7 sm:h-7" />
              </div>
              <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#111827] rounded-2xl flex items-center justify-center shadow-xl border border-slate-600">
                <SiNextdotjs size={24} className="text-white sm:w-7 sm:h-7" />
              </div>
              <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center shadow-xl border border-sky-400/40">
                <FaReact size={24} className="text-sky-400 sm:w-7 sm:h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}
