import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Facebook, CheckCircle2, AlertCircle } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";

const SERVICE_OPTIONS = [
  "Audio Services",
  "Video Services",
  "Marketing & Branding",
  "Social Media",
  "Graphic Design",
  "Website Development",
  "Other",
];

const BUDGET_OPTIONS = ["₹25K – ₹50K", "₹50K – ₹1L", "₹1L – ₹3L", "₹3L+", "Let's Discuss"];

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  details: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.service) errors.service = "Please select a service.";
  if (!values.details.trim()) errors.details = "Tell us a little about your project.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      // Simulated submission — replace with a real endpoint when ready.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-white placeholder:text-white/30 transition-colors";

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-black-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <SectionTitle
            number="07"
            label="Contact"
            title="Let's create something extraordinary."
            subtitle="Have an idea? Let's turn it into something people remember."
          />

          <div className="mt-14">
            <h3 className="font-display text-xl text-white mb-6">Let's Talk</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" aria-hidden="true" />
                <a href="mailto:hello@theartisthouse.com" className="hover:text-gold transition-colors">
                  hello@theartisthouse.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" aria-hidden="true" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" aria-hidden="true" />
                <span>India</span>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-5">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  data-cursor-hover
                  className="text-white/50 hover:text-gold transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="lg:col-span-3 space-y-8" aria-label="Project inquiry form">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-xs tracking-wide text-white/50 mb-1 uppercase">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClasses}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs tracking-wide text-white/50 mb-1 uppercase">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className={inputClasses}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs tracking-wide text-white/50 mb-1 uppercase">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                placeholder="+91"
                className={inputClasses}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-red-400">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-xs tracking-wide text-white/50 mb-1 uppercase">
                Company / Brand
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={values.company}
                onChange={handleChange}
                placeholder="Optional"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs tracking-wide text-white/50 mb-1 uppercase">
                Select Service *
              </label>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={handleChange}
                className={`${inputClasses} appearance-none`}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="" className="bg-black">
                  Choose a service
                </option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-black">
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="service-error" className="mt-1 text-xs text-red-400">
                  {errors.service}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs tracking-wide text-white/50 mb-1 uppercase">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={values.budget}
                onChange={handleChange}
                className={`${inputClasses} appearance-none`}
              >
                <option value="" className="bg-black">
                  Select a range
                </option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-black">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="details" className="block text-xs tracking-wide text-white/50 mb-1 uppercase">
              Project Details *
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={values.details}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className={`${inputClasses} resize-none`}
              aria-invalid={!!errors.details}
              aria-describedby={errors.details ? "details-error" : undefined}
            />
            {errors.details && (
              <p id="details-error" className="mt-1 text-xs text-red-400">
                {errors.details}
              </p>
            )}
          </div>

          <div className="flex items-center gap-6">
            <button
              type="submit"
              disabled={status === "loading"}
              data-cursor-hover
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black text-sm font-semibold tracking-wide hover:bg-gold-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Project Inquiry"}
              {status !== "loading" && <span aria-hidden="true">→</span>}
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="flex items-center gap-2 text-sm text-emerald-400"
              >
                <CheckCircle2 size={18} /> Inquiry sent. We'll be in touch soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="flex items-center gap-2 text-sm text-red-400"
              >
                <AlertCircle size={18} /> Something went wrong. Please try again.
              </motion.p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
