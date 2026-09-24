import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { testimonials } from "../data/testimonials.js";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative py-28 md:py-36 bg-black-soft">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <SectionTitle number="05" label="Testimonials" title="What they say" align="center" />

        <div className="relative mt-16 min-h-[260px] flex flex-col items-center justify-center">
          <Quote className="text-gold/40 mb-6" size={36} aria-hidden="true" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="font-display text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto">
                "{current.quote}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <img
                  src={current.image}
                  alt=""
                  className="w-11 h-11 rounded-full object-cover border border-gold/40"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">{current.name}</p>
                  <p className="text-white/50 text-xs">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            data-cursor-hover
            className="text-white/50 hover:text-gold transition-colors"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-gold w-5" : "bg-white/25"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            data-cursor-hover
            className="text-white/50 hover:text-gold transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
