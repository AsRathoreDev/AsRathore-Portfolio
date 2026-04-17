"use client"

import { motion } from "framer-motion"
import { ReactTyped } from "react-typed"
import MagneticButton from "@/components/ui/MagneticButton"

const text = "Aditya Singh Rathore"

export default function Hero() {

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
}

const letter = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

return (

<section 
id="hub"
className="min-h-screen flex items-center justify-center px-6">

<div className="max-w-4xl text-center relative">

{/* Greeting */}

<motion.div
initial={{ opacity:0, scale:0.9 }}
animate={{ opacity:1, scale:1 }}
transition={{ duration:0.6 }}
className="inline-block px-4 py-1 mb-8 text-sm rounded-full
bg-white/10 border border-white/20 text-gray-300 backdrop-blur"
>
Radhe Radhe
</motion.div>

{/* Heading */}

<motion.h1
variants={container}
initial="hidden"
animate="visible"
className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
>

<span className="text-white">I'm </span>

<span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">

{text.split("").map((char, index) => (

<motion.span
key={index}
variants={letter}
className="inline-block"
>
{char === " " ? "\u00A0" : char}
</motion.span>

))}

</span>

</motion.h1>

{/* Animated underline */}

<motion.div
initial={{ width:0 }}
animate={{ width:"160px" }}
transition={{ delay:1.4, duration:0.8 }}
className="h-[3px] bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto mt-6 rounded"
/>

{/* Typed Text */}

<motion.div
initial={{ opacity:0 }}
animate={{ opacity:1 }}
transition={{ delay:1.6 }}
className="text-xl md:text-2xl mt-8 text-gray-300"
>

<ReactTyped
strings={[
"Full Stack Developer",
"Next.js Specialist",
"Creative Web Builder",
"Crafting Modern Web Experiences"
]}
typeSpeed={70}
backSpeed={40}
loop
/>

</motion.div>

{/* Description */}

<motion.p
initial={{ opacity:0, y:30 }}
animate={{ opacity:1, y:0 }}
transition={{ delay:2 }}
className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
>

I build modern, fast and interactive web applications with a strong focus on
performance, design and user experience. My goal is to create digital
experiences that feel smooth, elegant and impactful.

</motion.p>

{/* Buttons */}

<div className="mt-12 flex flex-wrap justify-center gap-8">

<MagneticButton>
<a
href="#get-in-touch"
className="px-8 py-3 rounded-full 
bg-gradient-to-r from-yellow-500 to-purple-600
text-black font-semibold
shadow-lg shadow-yellow-500/30
hover:shadow-yellow-500/60
hover:scale-105
transition duration-300"
>
Get In Touch
</a>
</MagneticButton>

<MagneticButton>
<a
href="/resume.jpg"
target="_blank"
className="px-8 py-3 rounded-full
border border-white/30
text-white
hover:bg-white
hover:text-black
hover:scale-105
transition duration-300"
>
Get Resume
</a>
</MagneticButton>

</div>

{/* Scroll Indicator */}

<motion.div
animate={{ y:[0,12,0] }}
transition={{ repeat:Infinity, duration:1.5 }}
className="absolute left-1/2 -bottom-16 md:-bottom-20 -translate-x-1/2 text-gray-400 text-xl"
>
↓
</motion.div>

</div>

</section>

)
}