import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sizeClasses = {
  wide: "sm:col-span-2 aspect-[16/10]",
  tall: "row-span-2 aspect-[3/4]",
  normal: "aspect-[4/3]",
};

export default function PortfolioCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      data-cursor-hover
      className={`group relative overflow-hidden ${sizeClasses[project.size] || sizeClasses.normal}`}
    >
      <img
        src={project.image}
        alt={`${project.title} — ${project.type}`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-gold text-xs tracking-[0.25em] uppercase mb-2">{project.category}</p>
        <h3 className="font-display text-xl md:text-2xl text-white mb-1">{project.title}</h3>
        <p className="text-white/60 text-sm mb-3 max-w-xs opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-400 hidden sm:block">
          {project.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-gold transition-colors">
          View Project
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </motion.article>
  );
}
