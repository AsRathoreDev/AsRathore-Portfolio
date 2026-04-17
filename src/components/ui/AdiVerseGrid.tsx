"use client";

import { motion } from "framer-motion";

const sizeClasses: any = {
  small: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  big: "col-span-2 row-span-2",
};

export default function AdiVerseGrid({ items, openImage }: any) {
  return (
    <div
      className="
      grid
      md:grid-cols-3
      auto-rows-[180px]
      gap-6
      grid-auto-flow-dense
      "
    >
      {items.map((item: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          viewport={{ once: true }}
          className={`
          group
          relative
          overflow-hidden
          rounded-2xl
          border border-neutral-800
          bg-neutral-900
          p-6
          hover:border-purple-500/40
          transition
          ${sizeClasses[item.size || "small"]}
          `}
        >
          {/* image */}
          {item.image && (
            <img
              src={item.image}
              onClick={() => openImage(item.image)}
              className="
              absolute inset-0
              w-full h-full
              object-cover
              opacity-40
              group-hover:scale-110
              transition
              cursor-pointer
              "
            />
          )}

          {/* spotlight hover */}
          <div className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition
          bg-gradient-to-tr
          from-purple-500/10
          to-transparent
          " />

          <div className="relative z-10">
            <p className="text-xs text-purple-400 mb-1 uppercase">
              {item.category}
            </p>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-neutral-400">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}