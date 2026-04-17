"use client";

import { useState } from "react";
import { posts } from "@/data/adiverse";
import AdiVerseGrid from "@/components/ui/AdiVerseGrid";
import Lightbox from "@/components/ui/Lightbox";

export default function AdiVerse() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    filter === "all"
      ? posts
      : posts.filter((p) => p.category === filter);

  return (
    <section 
    id="adiverse"
    className="py-32 max-w-7xl mx-auto px-6">

      {/* heading */}

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Adi<span className="text-purple-400">Verse</span>
      </h2>

      <p className="text-center text-neutral-400 mb-12">
        Thoughts, Experiments, Travel & Projects
      </p>

      {/* filters */}

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["all", "blog", "project", "travel", "idea"].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className="
            px-4 py-2
            rounded-lg
            bg-neutral-800
            hover:bg-purple-600
            transition
            text-sm
            "
          >
            {c}
          </button>
        ))}
      </div>

      {/* grid */}

      <AdiVerseGrid
        items={filtered}
        openImage={(img: string) => setLightbox(img)}
      />

      {lightbox && (
        <Lightbox image={lightbox} close={() => setLightbox(null)} />
      )}
    </section>
  );
}