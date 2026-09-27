// import React from "react";
// import { motion } from "framer-motion";
// import Button from "./Button.jsx";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-end overflow-hidden bg-black"
//     >
//       <motion.div
//         initial={{ scale: 1.08, opacity: 0.6 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.6, ease: "easeOut" }}
//         className="absolute inset-0"
//       >
//         <img
//           src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2200&auto=format&fit=crop"
//           alt="A creative studio workspace with recording and editing equipment"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
//         <div className="absolute inset-0 bg-black/30" />
//       </motion.div>

//       <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-24 pt-40">
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
//         >
//           Creative Production • Digital • Media
//         </motion.p>

//         <h1 className="font-display text-white text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl">
//           <motion.span
//             className="block"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.35 }}
//           >
//             {/* We create */}
//             Your One
//           </motion.span>
//           <motion.span
//             className="block"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.48 }}
//           >
//             {/* what you{" "} */}
//             Creative{" "}
//             <span className="text-gold-gradient italic">Partner.</span>
//             {/* <span className="text-gold-gradient italic">imagine.</span> */}
//           </motion.span>
//         </h1>

//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.65 }}
//           className="mt-8 max-w-md text-white/70 text-base md:text-lg leading-relaxed"
//         >
//           {/* The Artist House is a creative production and digital studio crafting
//           powerful stories through sound, visuals, branding and technology. */}
//           From Idea to execution, we bring creative, content, production, branding & digital solutions together – All Under one roof.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.8 }}
//           className="mt-10 flex flex-wrap items-center gap-4"
//         >
//           <Button href="#work" variant="primary" data-cursor-hover>
//             Explore Our Work
//           </Button>
//           <Button href="#contact" variant="secondary" showArrow={false} data-cursor-hover>
//             Start a Project
//           </Button>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.2 }}
//         className="absolute bottom-8 right-6 md:right-10 z-10 flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.2em] uppercase"
//       >
//         <span>Scroll</span>
//         <motion.span
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//           aria-hidden="true"
//         >
//           ↓
//         </motion.span>
//       </motion.div>
//     </section>
//   );
// }




import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button.jsx";

const heroImages = [
  {
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2200&auto=format&fit=crop",
    service: "Video Production",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2200&auto=format&fit=crop",
    service: "Branding",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2200&auto=format&fit=crop",
    service: "Social Media",
  },
  {
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2200&auto=format&fit=crop",
    service: "Graphic Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2200&auto=format&fit=crop",
    service: "Web Design",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden bg-black"
    >
      {/* ================= BACKGROUND SLIDER ================= */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.03,
            }}
            transition={{
              opacity: {
                duration: 1.4,
              },
              scale: {
                duration: 5.5,
                ease: "easeOut",
              },
            }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImage].image}
              alt={heroImages[currentImage].service}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

        <div className="absolute inset-0 bg-black/30" />

        {/* Left side darkening for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-24 pt-40">
        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
        >
          Creative Production • Digital • Media
        </motion.p>

        {/* Main Heading */}
        <h1 className="font-display text-white text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            Your One
          </motion.span>

          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.48,
            }}
          >
            Creative{" "}
            <span className="text-gold-gradient italic">
              Partner.
            </span>
          </motion.span>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="mt-8 max-w-md text-white/70 text-base md:text-lg leading-relaxed"
        >
          From Idea to execution, we bring creative, content,
          production, branding & digital solutions together –
          All Under one roof.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            href="#work"
            variant="primary"
            data-cursor-hover
          >
            Explore Our Work
          </Button>

          <Button
            href="#contact"
            variant="secondary"
            showArrow={false}
            data-cursor-hover
          >
            Start a Project
          </Button>
        </motion.div>
      </div>

      {/* ================= CURRENT SERVICE ================= */}
      <motion.div
        key={currentImage}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="absolute bottom-8 left-6 md:left-10 z-10"
      >
        <p className="text-white/50 text-xs tracking-[0.25em] uppercase">
          We create
        </p>

        <p className="text-white text-sm md:text-base font-medium mt-1">
          {heroImages[currentImage].service}
        </p>
      </motion.div>

      {/* ================= SLIDER INDICATORS ================= */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show ${heroImages[index].service}`}
            className={`h-[2px] transition-all duration-500 ${
              currentImage === index
                ? "w-10 bg-white"
                : "w-5 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* ================= SCROLL ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="absolute bottom-8 right-6 md:right-10 z-10 flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.2em] uppercase"
      >
        <span>Scroll</span>

        <motion.span
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}