"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  stack: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  stack,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur p-6 transition shadow-lg hover:shadow-purple-500/10"
    >
      {/* comet glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -left-40 top-0 h-[200%] w-[200%] rotate-12 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-2xl animate-[comet_4s_linear_infinite]" />
      </div>

      {/* image */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* title */}
      <h3 className="text-xl font-semibold mb-2 tracking-wide">
        {title}
      </h3>

      {/* description */}
      <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {stack.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-neutral-800/80 border border-neutral-700 px-2 py-1 rounded-md text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* buttons */}
      <div className="flex gap-6 text-sm font-medium">
        <a
          href={live}
          target="_blank"
          className="text-purple-400 hover:text-purple-300 transition"
        >
          Live →
        </a>

        <a
          href={github}
          target="_blank"
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          GitHub →
        </a>
      </div>
    </motion.div>
  );
}