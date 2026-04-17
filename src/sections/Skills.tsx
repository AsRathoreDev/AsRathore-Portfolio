"use client"

import { motion } from "framer-motion"

const row1 = [
  { name: "Appwrite", icon: "/appwrite.svg" },
  { name: "Framer", icon: "/framer.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "Node.js", icon: "/nodedotjs.svg" },
]

const row2 = [
  { name: "React", icon: "/react.svg" },
  { name: "TailwindCSS", icon: "/tailwindcss.svg" },
  { name: "Next.js", icon: "/nextdotjs (1).svg" },
  { name: "Zod", icon: "/zod.svg" },
]

const row3 = [
  { name: "Three.js", icon: "/threedotjs.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "Express", icon: "/express.svg" },
  { name: "Docker", icon: "/docker.svg" },
]

/* =====================
SKILL CARD
===================== */

function SkillCard({ item }: any) {
  return (
    <motion.div
      whileHover={{
        scale: 1.12,
        rotateX: 8,
        rotateY: -8,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="
      flex items-center gap-3
      px-6 py-3
      rounded-xl
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      shadow-lg
      hover:border-yellow-400
      hover:shadow-yellow-500/30
      transition-all
      group cursor-pointer
      "
    >
      <img
        src={item.icon}
        className="
        h-6 w-6
        transition
        group-hover:scale-125
        group-hover:rotate-6
        "
      />

      <span className="text-sm font-medium text-neutral-300 group-hover:text-white">
        {item.name}
      </span>
    </motion.div>
  )
}

/* =====================
MARQUEE ROW
===================== */
function MarqueeRow({ items, reverse = false }: any) {
  const duplicated = [...items, ...items]

  return (
    <div className="relative overflow-hidden w-full">

      <motion.div
        className="flex gap-12 py-6 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((item, i) => (
          <SkillCard key={i} item={item} />
        ))}
      </motion.div>

    </div>
  )
}
/* =====================
MAIN SECTION
===================== */

export default function Skills() {
  return (
    <section
      className="
      relative
      py-36
      overflow-hidden
      "
    >

 

      {/* HEADING */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >

        <h2
          className="
          text-5xl md:text-6xl font-bold
          bg-gradient-to-r
          from-yellow-400
          via-pink-400
          to-blue-400
          text-transparent
          bg-clip-text
          "
        >
          Tech Stack
        </h2>

        <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
          Tools and technologies I use to craft modern immersive web experiences.
        </p>

      </motion.div>

      {/* MARQUEE AREA */}

      <div className="relative max-w-6xl mx-auto">

        {/* EDGE FADE */}

        <div className="absolute left-0 top-0 h-full w-40 z-20" />

        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l z-20" />

        <MarqueeRow items={row1} />

        <MarqueeRow items={row2} reverse />

        <MarqueeRow items={row3} />

      </div>

    </section>
  )
}