import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 25, suffix: "+", label: "Creative Partners" },
  { value: 10, suffix: "+", label: "Services" },
  { value: 100, suffix: "%", label: "Passion" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop"
              alt="Creative director reviewing footage in an edit suite"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-gold/25" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block w-32 h-32 border border-gold/40" aria-hidden="true" />
        </motion.div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-5 text-gold text-xs tracking-[0.3em] uppercase">
            <span>01</span>
            <span className="h-px w-8 bg-gold/60" />
            <span>About Us</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-white">
            We are
            <br />
            The Artist House.
          </h2>
          <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
            The Artist House is a multidisciplinary creative studio where ideas,
            technology and artistic expression come together. We work across
            audio, video, branding, marketing, social media, graphic design and
            web development.
          </p>

          <div className="mt-8 relative pl-6 border-l border-gold/50 max-w-lg">
            <p className="font-display text-2xl md:text-3xl text-white leading-snug">
              "We don't just create content.
              <br />
              We create experiences."
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-4xl text-gold">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs md:text-sm text-white/50 uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
