'use client'

export default function About() {
  return (
    <section id="about" className="py-14 md:py-16 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="relative animate-slide-left">
            <div className="relative max-w-md mx-auto">
              <div className="text-center rounded-2xl bg-[#0f172a] border border-slate-700 p-6 sm:p-8 pb-28 sm:pb-32">
                <h2 className="text-7xl sm:text-8xl lg:text-[130px] text-sky-400 font-bold leading-none">06</h2>
                <p className="text-slate-200 text-base sm:text-lg mt-3 sm:mt-4">Months of Experience</p>
              </div>

              <div className="absolute -right-1 sm:-right-4 bottom-0 lg:right-8 rounded-xl border border-slate-600 bg-[#1e293b]">
                <div className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl min-w-[170px] sm:min-w-[200px]">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl sm:text-4xl text-sky-400 font-bold">5</h3>
                    <p className="text-slate-200 text-sm sm:text-base">Complete<br />Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white animate-slide-right">
            <div className="mb-6">
              <span className="text-sky-400 font-semibold">About Me</span>
              <div className="w-16 h-1 bg-sky-500 mt-2"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 text-slate-100">Professional Focus</h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
              I am a Full Stack Developer focused on building reliable, scalable, and user-friendly web applications.
              I work across frontend and backend to deliver complete business solutions.
            </p>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              I help businesses with portfolio sites, company websites, and custom web applications with strong
              performance, clean UI, and long-term maintainability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-slate-300">Frontend + Backend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-slate-300">Clean UI Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-slate-300">Performance Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                <span className="text-slate-300">Client Friendly Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
