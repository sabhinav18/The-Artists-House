import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import { clients } from "../data/clients.js";

export default function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section id="clients" className="relative py-24 md:py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14">
        <SectionTitle
          number="04"
          label="Clients"
          title="Trusted by creatives, brands & visionaries."
          align="center"
        />
      </div>

      <div className="relative overflow-hidden select-none">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex whitespace-nowrap animate-marquee">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-10 md:mx-14 text-2xl md:text-3xl font-display text-white/30 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
