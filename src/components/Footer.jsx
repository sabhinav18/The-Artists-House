import React from "react";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
const SERVICE_LINKS = ["Audio", "Video", "Branding", "Social Media", "Graphic Design", "Web Development"];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 pb-16">
          <div className="md:col-span-2">
            <p className="font-display text-2xl text-white mb-4">THE ARTIST HOUSE</p>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Creating stories. Building brands. Shaping experiences.
            </p>
            <div className="mt-6 flex items-center gap-5">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white/40 hover:text-gold transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] text-white/40 uppercase mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] text-white/40 uppercase mb-5">Services</p>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 The Artist House. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
