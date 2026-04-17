"use client";

import { motion } from "framer-motion";

/*
Pixel grid animation over profile image
Creates futuristic developer vibe
*/

export default function PixelReveal() {
  return (
    <div className="relative w-[300px] h-[300px]">

      {/* Image */}
      <img
        src="/profile.jpg"
        className="rounded-xl object-cover w-full h-full"
      />

      {/* Pixel overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 grid grid-cols-10 grid-rows-10"
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: i * 0.02,
              duration: 0.4,
            }}
            className="bg-yellow-400"
          />
        ))}
      </motion.div>
    </div>
  );
}