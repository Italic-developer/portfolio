"use client";

import { motion } from "motion/react";
import { foundMeEvent } from "@/lib/achievements";
import { useState } from "react";

export default function HiddenLogo() {
  const [isFound, setIsFound] = useState(false);

  const handleFind = () => {
    setIsFound(true);
    window.dispatchEvent(new CustomEvent(foundMeEvent));
  };

  return (
    <motion.button
      type="button"
      aria-label="Find the hidden logo"
      onClick={handleFind}
      animate={{ opacity: isFound ? 1 : undefined, scale: isFound ? 1.12 : 1 }}
      whileHover={{ opacity: 1, scale: 1.12, rotate: 6 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.2 }}
      className={`group absolute bottom-8 right-8 z-10 border p-2 transition-colors md:bottom-12 md:right-12 ${isFound ? "border-accent/40 opacity-100" : "border-transparent opacity-40 hover:border-accent/40"}`}
    >
      <img
        src="/favicon.ico"
        alt=""
        aria-hidden="true"
        className={`h-5 w-5 transition-[filter] duration-200 ${isFound ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`}
      />
    </motion.button>
  );
}
