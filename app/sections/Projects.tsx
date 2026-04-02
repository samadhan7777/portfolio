'use client'

type Project = {
  title: string
  category: string
  description: string
  tech: string[]
  icon: string
  liveLink: string
  githubLink: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    category: 'Web App',
    description:
      'Full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: '\u{1F6D2}',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Portfolio Website',
    category: 'Personal',
    description: 'Modern portfolio website with clean structure and responsive design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: '\u{1F4BC}',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Task Management App',
    category: 'Web App',
    description: 'Project management tool with task tracking, team collaboration, and real-time updates.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    icon: '\u{2705}',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Blog Platform',
    category: 'Web App',
    description: 'Blog platform with markdown support, content categories, and SEO-friendly pages.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: '\u{1F4D6}',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Business Landing Page',
    category: 'Website',
    description: 'Responsive company profile website with service highlights and contact lead capture.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '\u{1F3E2}',
    liveLink: '#',
    githubLink: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-14 md:py-16 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-slide-up">
          <span className="text-sky-400 font-semibold">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mt-2 mb-4">Recent Projects</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
          <p className="text-slate-400 text-base sm:text-lg mt-5 sm:mt-6">
            Selected projects focused on clean architecture, useful UX, and reliable performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative animate-scale hover-lift lg:col-span-2 ${
                index === 3 ? 'lg:col-start-2' : ''
              } ${
                index === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto lg:col-span-2 lg:max-w-none lg:mx-0 lg:col-start-4' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-[#111827] rounded-2xl overflow-hidden border border-slate-700 transition-all duration-300 h-full">
                <div className="h-40 sm:h-48 bg-[#0f172a] flex items-center justify-center relative overflow-hidden border-b border-slate-700">
                  <div className="text-6xl sm:text-7xl transform transition-transform duration-500 group-hover:scale-110">
                    {project.icon}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-slate-100 text-lg sm:text-xl font-bold">{project.title}</h3>
                    <span className="text-xs text-slate-400">{project.category}</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
