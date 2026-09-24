import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-gold/25"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5"
          aria-label="Primary"
        >
          <a href="#home" className="flex items-center gap-2 group" data-cursor-hover>
            <span className="w-1.5 h-1.5 rounded-full bg-gold hidden sm:inline-block" aria-hidden="true" />
            <span className="font-display leading-none">
              <span className="block text-[10px] tracking-[0.35em] text-white/60">THE</span>
              <span className="block text-lg md:text-xl font-semibold tracking-wide text-white">
                ARTIST HOUSE
              </span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-cursor-hover
                  className={`relative text-sm tracking-wide transition-colors duration-300 pb-1 ${
                    active === link.href.slice(1)
                      ? "text-gold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            data-cursor-hover
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
          >
            Let's Create <span aria-hidden="true">→</span>
          </a>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg text-white">THE ARTIST HOUSE</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
                <X size={26} />
              </button>
            </div>
            <ul className="flex-1 flex flex-col items-center justify-center gap-8">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-white hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
