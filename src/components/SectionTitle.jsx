import React from "react";
import { motion } from "framer-motion";

/**
 * Shared section heading block.
 * number/label form an eyebrow only when the section is genuinely part of a
 * sequence (About/Services/Work/etc. are numbered chapters of the site).
 */
export default function SectionTitle({
  number,
  label,
  title,
  subtitle,
  align = "left",
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "text-left"}>
      {(number || label) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 mb-5 text-gold text-xs tracking-[0.3em] uppercase ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {number && <span className="font-body">{number}</span>}
          {number && <span className="h-px w-8 bg-gold/60" />}
          {label && <span className="font-body">{label}</span>}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-white/60 text-base md:text-lg max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
