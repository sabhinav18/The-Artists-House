import React from "react";
import { motion } from "framer-motion";
import Button from "./Button.jsx";

export default function FeaturedProject() {
  return (
    <section className="relative py-28 md:py-36 bg-black-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-6 text-gold text-xs tracking-[0.3em] uppercase">
          <span>Project 01</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] max-w-3xl mb-12">
          One idea. Infinite possibilities.
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[16/8] overflow-hidden"
          data-cursor-hover
        >
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
            alt="Behind the scenes of the Beyond The Frame product film shoot"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-2">
                "Beyond The Frame"
              </h3>
              <p className="text-white/60 text-sm tracking-wide">
                Creative Direction • Video • Branding
              </p>
            </div>
            <Button href="#work" variant="secondary">
              View Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
