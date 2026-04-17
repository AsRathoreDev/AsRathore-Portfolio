import About from "@/sections/About";
import AdiVerse from "@/sections/AdiVerse";
import GetInTouch from "@/sections/GetInTouch";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Works from "@/sections/Works";

export default function Home() {
  return(
    <main className="pt-24">
      <Hero />
      <About />
      <Skills />
      <Works />
      <AdiVerse />
      <GetInTouch />
    </main>
  )
}