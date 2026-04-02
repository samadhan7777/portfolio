'use client'

import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Current Company',
    location: 'Remote',
    description: 'Building scalable web applications using React, Next.js, and modern technologies.',
    achievements: [
      'Led frontend development team',
      'Improved performance by 40%',
      'Implemented CI/CD pipelines',
    ],
  },
  {
    title: 'React Developer',
    company: 'Previous Company',
    location: 'Remote',
    description: 'Developed responsive user interfaces and implemented complex features.',
    achievements: [
      'Built 15+ responsive components',
      'Reduced load time by 30%',
      'Mentored junior developers',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'First Company',
    location: 'Remote',
    description: 'Created interactive web experiences and optimized performance.',
    achievements: [
      'Developed 10+ client projects',
      'Achieved 95% Lighthouse score',
      'Implemented responsive designs',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-16 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-slide-up">
          <span className="text-sky-400 font-semibold">Career Path</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mt-2 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
          <p className="text-slate-400 text-base sm:text-lg mt-5 sm:mt-6">
            Practical experience delivering production-ready applications in remote environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative animate-scale hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-[#0f172a] rounded-2xl p-5 sm:p-6 border border-slate-700 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center border border-sky-400/40">
                    <Briefcase size={20} className="text-sky-300" />
                  </div>
                  <div>
                    <p className="text-sky-300 font-bold">{exp.location}</p>
                  </div>
                </div>

                <h3 className="text-slate-100 text-lg sm:text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-sky-400 font-medium mb-3">{exp.company}</p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-sky-400 mt-1">&#x2022;</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
