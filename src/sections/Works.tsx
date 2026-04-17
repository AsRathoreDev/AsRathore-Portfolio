import ProjectCard from "@/components/ui/ProjectCard";

export default function Works() {
  const projects = [
    {
      title: "Comming Soon",
      description: "Details are visualized latter.",
      image: "/projects/trade-decoder.png",
      github: "#",
      live: "#",
      stack: ["Next.js", "MongoDB", "Tailwind", "Zod"],
    },
    {
      title: "Comming Soon",
      description: "Details are visualized latter.",
      image: "/projects/ai-message.png",
      github: "#",
      live: "#",
      stack: ["Next.js", "OpenAI", "Tailwind"],
    },
    {
      title: "Comming Soon",
      description: "Details are visualized latter.",
      image: "/projects/portfolio.png",
      github: "#",
      live: "#",
      stack: ["Next.js", "Framer Motion", "Tailwind"],
    },
    {
      title: "Comming Soon",
      description: "Details are visualized latter.",
      image: "/projects/portfolio.png",
      github: "#",
      live: "#",
      stack: ["Next.js", "Framer Motion", "Tailwind"],
    },
    {
      title: "Comming Soon",
      description: "Details are visualized latter.",
      image: "/projects/portfolio.png",
      github: "#",
      live: "#",
      stack: ["Next.js", "Framer Motion", "Tailwind"],
    },
    {
      title: "Comming Soon",
      description: "Details are visualized latter.",
      image: "/projects/portfolio.png",
      github: "#",
      live: "#",
      stack: ["Next.js", "Framer Motion", "Tailwind"],
    },
    {
      title: "Comming Soon",
      description: "Details are visualized latter.",
      image: "/projects/portfolio.png",
      github: "#",
      live: "#",
      stack: ["Next.js", "Framer Motion", "Tailwind"],
    },
  ];

  return (
    <section 
    id="works"
    className="py-32 px-6 max-w-6xl mx-auto">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        Featured <span className="text-purple-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

    </section>
  );
}