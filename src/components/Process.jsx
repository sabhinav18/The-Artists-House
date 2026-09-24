import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your vision, audience and objectives.",
  },
  {
    number: "02",
    title: "Create",
    description: "Our creative team transforms ideas into concepts.",
  },
  {
    number: "03",
    title: "Produce",
    description: "We bring the concept to life through design, media and technology.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We refine, launch and deliver work that creates impact.",
  },
];

export default function Process() {
  return (
    <section className="relative py-28 md:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle number="06" label="Process" title="From idea to impact" />

        <div className="mt-20 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:mb-6 w-3 h-3 rounded-full bg-gold absolute md:static top-1 left-0 md:top-auto md:left-auto" />
                <div className="hidden md:block h-px w-full bg-transparent" />
                <span className="block text-gold/70 text-xs tracking-[0.25em] mb-2">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl text-white mb-2">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-[5px] top-6 bottom-[-2.5rem] w-px bg-white/10" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
