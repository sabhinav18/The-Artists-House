import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-black-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          number="02"
          label="Services"
          title="What we create"
          subtitle="From sound and screens to brands and digital experiences — we bring every creative idea to life."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
