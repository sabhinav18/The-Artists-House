import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import FeaturedProject from "./components/FeaturedProject.jsx";
import Clients from "./components/Clients.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <div className="relative">
      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FeaturedProject />
        <Clients />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
