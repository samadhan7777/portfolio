'use client'

import { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si'

type Skill = {
  name: string
  icon: IconType
  color: string
}

type SkillCategory = {
  title: string
  items: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Version Control',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
    ],
  },
  {
    title: 'CMS',
    items: [{ name: 'WordPress', icon: SiWordpress, color: '#21759B' }],
  },
]

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [isOrbitPaused, setIsOrbitPaused] = useState(false)
  const activeCategory = categories[activeIndex]
  const orbitDistance = 118
  const orbitAnimationState: 'running' | 'paused' = isOrbitPaused ? 'paused' : 'running'

  useEffect(() => {
    if (!autoRotate) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length)
    }, 3600)

    return () => window.clearInterval(intervalId)
  }, [autoRotate])

  const activateCategory = (index: number) => {
    setActiveIndex(index)
    setAutoRotate(false)
  }

  return (
    <section id="skills" className="py-14 md:py-16 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-slide-up">
          <span className="text-sky-400 font-semibold">Technical Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mt-2 mb-4">Technology Stack</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
          <p className="text-slate-400 text-base sm:text-lg mt-5 sm:mt-6">
            Organized by domain so you can clearly see frontend, backend, database, and tools expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-center">
          <div className="space-y-3 animate-slide-left">
            {categories.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onMouseEnter={() => activateCategory(index)}
                onFocus={() => activateCategory(index)}
                onClick={() => activateCategory(index)}
                className={`w-full text-left rounded-full border px-5 py-3.5 transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-sky-400 bg-sky-500/10 text-sky-300 shadow-lg shadow-sky-900/30'
                    : 'border-slate-700 bg-[#111827] text-slate-300 hover:border-sky-500/60 hover:text-sky-200'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm sm:text-base font-semibold tracking-wide">{category.title}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {category.items.length}
                  </span>
                </div>
              </button>
            ))}

            <button
              type="button"
              onClick={() => setAutoRotate(true)}
              className="w-full rounded-full border border-slate-700 px-4 py-2.5 text-xs sm:text-sm text-slate-300 hover:text-sky-300 hover:border-sky-500/60 transition-colors"
            >
              Resume Auto Rotate
            </button>
          </div>

          <div className="animate-slide-right flex flex-col items-center justify-center min-h-[320px] sm:min-h-[400px]">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
              <div className="absolute inset-0 rounded-full border border-slate-700 bg-[#111827]/80 shadow-2xl shadow-slate-950/50"></div>
              <div
                className="absolute inset-4 z-40 rounded-full border border-sky-500/35 animate-[spin_62s_linear_infinite]"
                style={{ animationPlayState: orbitAnimationState }}
              >
              </div>
              <div
                className="absolute inset-9 z-30 rounded-full border border-slate-600/80 animate-[spin_52s_linear_infinite_reverse]"
                style={{ animationPlayState: orbitAnimationState }}
              >
              </div>

              <div
                className="absolute inset-5 sm:inset-6 rounded-full animate-[spin_22s_linear_infinite]"
                style={{ animationPlayState: orbitAnimationState }}
              >
                {activeCategory.items.map((skill, index) => {
                  const angle = (360 / activeCategory.items.length) * index
                  const Icon = skill.icon

                  return (
                    <div
                      key={skill.name}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${orbitDistance}px) rotate(-${angle}deg)`,
                      }}
                      title={skill.name}
                    >
                      <div
                        onMouseEnter={() => setIsOrbitPaused(true)}
                        onMouseLeave={() => setIsOrbitPaused(false)}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-600 bg-[#0f172a] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                      >
                        <Icon size={18} style={{ color: skill.color }} className="sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="absolute inset-[24%] rounded-full border border-slate-700 bg-[#0b1220] px-4 py-5 flex flex-col items-center justify-center text-center orbit-core-glow">
                <p className="text-[8px] sm:text-[9px] font-semibold text-slate-200/90 tracking-[0.16em]">
                  SAMADHAN.DEV
                </p>
                <p className="text-sky-300 text-sm sm:text-lg font-bold">{activeCategory.title}</p>
                <p className="text-slate-400 text-[10px] sm:text-xs mt-2">Interactive Skill Orbit</p>
                <p className="text-slate-300 text-[10px] sm:text-xs mt-2 leading-relaxed">
                  {activeCategory.items.length} Technologies
                </p>
              </div>
            </div>

            <div key={activeCategory.title} className="mt-6 flex flex-wrap justify-center gap-2.5 animate-scale">
              {activeCategory.items.map((skill) => (
                <div key={skill.name} className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-[#111827] px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }}></span>
                  <span className="text-xs sm:text-sm text-slate-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
