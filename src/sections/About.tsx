"use client";

import { motion } from "framer-motion";
import StatsTicker from "@/components/ui/StatsTicker";
import PixelReveal from "@/components/ui/PixelReveal";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutSection() {

  const socials = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/yeh_aditya?igsh=MWthbXgxdHo4eXN0Nw==",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/aditya-kumar-6000b43a5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/AsRathoreDev",
    },
  ];


  const revealText = (text: string) => {
    const words = text.split(" ");

    return (
      <p className="text-gray-400 leading-relaxed flex flex-wrap gap-1">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.05,
              duration: 0.3,
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    );
  };

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >

      {/* =========================
         MAIN GRID
      ========================= */}

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PixelReveal />
        </motion.div>

        {/* RIGHT TEXT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          <p className="text-yellow-400 tracking-[0.3em] text-sm uppercase">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            The Developer Behind
            <br />
            The Code
          </h2>

          {/* TYPEWRITER ROLE */}

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Next.js Developer",
              2000,
              "Creative Developer",
              2000,
              "Chaotic Builder",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-yellow-400 text-lg font-semibold"
          />

          {/* STORY TEXT */}

          <div className="space-y-4">

            {revealText(
              "I'm Aditya Rathore, a developer focused on building fast modern and immersive digital experiences."
            )}

            {revealText(
              "My work blends clean engineering with creative UI interaction. I enjoy crafting products that feel smooth alive and visually engaging."
            )}

            {revealText(
              "Currently exploring full stack systems creative development and 3D web experiences."
            )}

          </div>

          {/* =========================
              SOCIAL LINKS
          ========================= */}

          <div className="flex gap-6 pt-6">

            {socials.map((social, i) => {

              const Icon = social.icon;

              return (

                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                  }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.3
                  }}
                  className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  border border-white/20
                  text-white
                  text-xl
                  backdrop-blur
                  hover:bg-yellow-400
                  hover:text-black
                  transition
                  "
                >

                  <Icon />

                </motion.a>

              );

            })}

          </div>

        </motion.div>

      </div>


      {/* =========================
         STATS
      ========================= */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24">

        <StatsTicker
          value={20}
          label="Projects Built"
        />

        <StatsTicker
          value={2}
          label="Years Learning"
        />

        <StatsTicker
          value={10}
          label="Technologies"
        />

        <StatsTicker
          value={100}
          label="Commits"
        />

      </div>

    </section>
  );
}