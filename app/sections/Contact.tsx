'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-14 md:py-16 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-5 sm:gap-6 items-stretch">
          <div className="bg-[#0f172a] border border-slate-700 rounded-md p-5 sm:p-7 lg:p-8 animate-slide-up h-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 text-center mb-8 sm:mb-10">Get In Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                <div>
                  <label htmlFor="name" className="block text-lg sm:text-2xl text-slate-100 mb-2 sm:mb-3">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-slate-600 text-slate-100 text-base sm:text-lg pb-2.5 sm:pb-3 focus:outline-none focus:border-sky-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg sm:text-2xl text-slate-100 mb-2 sm:mb-3">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-slate-600 text-slate-100 text-base sm:text-lg pb-2.5 sm:pb-3 focus:outline-none focus:border-sky-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg sm:text-2xl text-slate-100 mb-2 sm:mb-3">
                  Your Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-slate-600 text-slate-100 text-base sm:text-lg pb-2.5 sm:pb-3 focus:outline-none focus:border-sky-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg sm:text-2xl text-slate-100 mb-2 sm:mb-3">
                  Choose a Service
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-sky-400 text-slate-100 text-base sm:text-lg pb-2.5 sm:pb-3 focus:outline-none"
                  required
                >
                  <option value="" disabled className="text-slate-900">
                    Choose a Service
                  </option>
                  <option value="Web Design" className="text-slate-900">
                    Web Design
                  </option>
                  <option value="Web Development" className="text-slate-900">
                    Web Development
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg sm:text-2xl text-slate-100 mb-2 sm:mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-slate-600 text-slate-100 text-base sm:text-lg pb-2.5 sm:pb-3 focus:outline-none focus:border-sky-400 resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center pt-2 mt-auto">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-sky-500 text-white text-base sm:text-xl font-semibold hover:bg-sky-400 transition-colors"
                >
                  Submit Now
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4 sm:space-y-6 animate-slide-up h-full flex flex-col" style={{ animationDelay: '0.15s' }}>
            <div className="bg-[#0f172a] border border-slate-700 rounded-md p-4 sm:p-6 flex-1 flex flex-col">
              <p className="text-slate-100 text-lg sm:text-2xl font-bold">Office Address</p>
              <div className="flex-1 flex items-center gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-400/40 shrink-0">
                  <MapPin size={26} className="text-sky-300 sm:w-[34px] sm:h-[34px]" />
                </div>
                <p className="text-slate-300 text-base sm:text-2xl">Surat, Gujarat, India</p>
              </div>
            </div>

            <div className="bg-[#0f172a] border border-slate-700 rounded-md p-4 sm:p-6 flex-1 flex flex-col">
              <p className="text-slate-100 text-lg sm:text-2xl font-bold">Call Us</p>
              <div className="flex-1 flex items-center gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-400/40 shrink-0">
                  <Phone size={26} className="text-sky-300 sm:w-[34px] sm:h-[34px]" />
                </div>
                <p className="text-slate-300 text-base sm:text-2xl">+91 7777940679</p>
              </div>
            </div>

            <div className="bg-[#0f172a] border border-slate-700 rounded-md p-4 sm:p-6 flex-1 flex flex-col">
              <p className="text-slate-100 text-lg sm:text-2xl font-bold">Personal Mail</p>
              <div className="flex-1 flex items-center gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-400/40 shrink-0">
                  <Mail size={26} className="text-sky-300 sm:w-[34px] sm:h-[34px]" />
                </div>
                <p className="text-slate-300 text-base sm:text-2xl break-all">paatil7777@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
