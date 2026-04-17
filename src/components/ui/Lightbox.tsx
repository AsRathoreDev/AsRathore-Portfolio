"use client";

import { motion } from "framer-motion";

export default function Lightbox({
  image,
  close,
}: {
  image: string;
  close: () => void;
}) {
  return (
    <motion.div
      onClick={close}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={image}
        className="max-h-[90vh] rounded-xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  );
}