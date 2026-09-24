import React from "react";
import { motion } from "framer-motion";
import Button from "./Button.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden bg-black"
    >
      <motion.div
        initial={{ scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2200&auto=format&fit=crop"
          alt="A creative studio workspace with recording and editing equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-24 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
        >
          Creative Production • Digital • Media
        </motion.p>

        <h1 className="font-display text-white text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            We create
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            what you{" "}
            <span className="text-gold-gradient italic">imagine.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 max-w-md text-white/70 text-base md:text-lg leading-relaxed"
        >
          The Artist House is a creative production and digital studio crafting
          powerful stories through sound, visuals, branding and technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#work" variant="primary" data-cursor-hover>
            Explore Our Work
          </Button>
          <Button href="#contact" variant="secondary" showArrow={false} data-cursor-hover>
            Start a Project
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-6 md:right-10 z-10 flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.2em] uppercase"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
