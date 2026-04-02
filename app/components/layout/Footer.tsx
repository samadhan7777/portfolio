'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/paatil_7777/',
    icon: FaInstagram,
    className: 'text-pink-400 hover:text-pink-300',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61567104127108',
    icon: FaFacebookF,
    className: 'text-blue-400 hover:text-blue-300',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/917777940679',
    icon: FaWhatsapp,
    className: 'text-green-400 hover:text-green-300',
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] pt-10 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Image
                src="/images/brand/s_logo1.png"
                alt="Samadhan logo"
                width={32}
                height={32}
                className="rounded-full border border-slate-700 p-1"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">SAMADHAN.DEV</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional full stack solutions for modern businesses.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-slate-100 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-slate-100 font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm">Web Development</li>
              <li className="text-slate-400 text-sm">React/Next.js Apps</li>
              <li className="text-slate-400 text-sm">UI/UX Design</li>
              <li className="text-slate-400 text-sm">Consultation</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-slate-100 font-bold mb-4">Connect With Me</h4>
            <p className="text-slate-400 text-sm mb-4">Social media account</p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`${social.className} transition-colors duration-300`}
                  >
                    <Icon size={22} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Samadhan. All rights reserved. | Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
