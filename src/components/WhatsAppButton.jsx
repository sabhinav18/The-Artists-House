import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-cursor-hover
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold text-black flex items-center justify-center shadow-lg shadow-black/40"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
