"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/*
Animated number ticker
Counts numbers smoothly when component loads
*/

export default function StatsTicker({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / value));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === value) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-4xl font-bold text-yellow-400">
        {count}+
      </h2>

      <p className="text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
}