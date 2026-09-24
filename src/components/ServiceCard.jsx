import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] || Icons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      data-cursor-hover
      className="group relative overflow-hidden border border-white/10 hover:border-gold/60 transition-colors duration-500 p-8 min-h-[360px] flex flex-col justify-between"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors duration-500" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs tracking-[0.3em] text-white/40 group-hover:text-gold/70 transition-colors">
            {service.number}
          </span>
          <Icon
            size={28}
            className="text-white/70 group-hover:text-gold group-hover:scale-110 transition-all duration-500"
            aria-hidden="true"
          />
        </div>
        <h3 className="font-display text-2xl md:text-[26px] text-white mb-3">
          {service.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5 group-hover:text-white/75 transition-colors">
          {service.description}
        </p>
        <ul className="hidden group-hover:block space-y-1.5 mb-2 transition-all duration-500">
          {service.features.map((f) => (
            <li key={f} className="text-xs text-white/50 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold/70" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#contact"
        className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-gold mt-6"
      >
        {service.cta}
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </a>
    </motion.div>
  );
}
