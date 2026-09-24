import React, { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import PortfolioCard from "./PortfolioCard.jsx";
import { projects, categories } from "../data/projects.js";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="relative py-28 md:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          number="03"
          label="Our Work"
          title="Selected work"
          subtitle="A glimpse into the ideas we've transformed into experiences."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter portfolio by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              data-cursor-hover
              className={`px-4 py-2 text-xs md:text-sm tracking-wide border transition-colors duration-300 ${
                active === cat
                  ? "border-gold text-gold"
                  : "border-white/15 text-white/50 hover:text-white hover:border-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(0,1fr)] gap-4">
          {filtered.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
