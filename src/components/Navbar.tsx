"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import Image from "next/image"

const navLinks = [
  { name: "Hub", href: "#hub" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#work" },
  { name: "AdiVerse", href: "#adiverse" },
  { name: "Get in Touch", href: "#get-in-touch" }
]

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const lastScroll = useRef(0)

  const { scrollYProgress } = useScroll()

  useEffect(() => {

    const handleScroll = () => {

      const current = window.scrollY

      if (current > lastScroll.current && current > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScroll.current = current

      // detect active section

      const sections = navLinks.map(link =>
        document.querySelector(link.href)
      )

      sections.forEach(section => {

        if (!section) return

        const rect = section.getBoundingClientRect()

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection("#" + section.id)
        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <>
      {/* Scroll Progress */}

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 origin-left z-50"
      />

      {/* Navbar */}

      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35 }}
        className="fixed top-3 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-40
        backdrop-blur-lg bg-black/40 border border-white/10
        rounded-xl shadow-lg"
      >

        <div className="flex items-center justify-between px-6 py-2">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-2">

            <motion.div
              whileHover={{ scale: 1.08 }}
              className="bg-white p-[3px] rounded-lg"
            >
              <Image
                src="/logo.jpg"
                alt="AsRathore Logo"
                width={34}
                height={34}
                className="rounded-md"
              />
            </motion.div>

          </Link>

          {/* Desktop Links */}

          <div className="hidden md:flex items-center gap-7">

            {navLinks.map((link) => {

              const active = activeSection === link.href

              return (

                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  className="relative group"
                >

                  <a
                    href={link.href}
                    className={`text-[15px] transition ${
                      active
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>

                  <span
                    className="absolute left-0 -bottom-1 w-0 h-[2px]
                    bg-gradient-to-r from-yellow-400 to-orange-500
                    transition-all duration-300 group-hover:w-full"
                  />

                </motion.div>

              )

            })}

          </div>

          {/* Hamburger */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >

            <motion.div
              animate={open ? "open" : "closed"}
              className="flex flex-col gap-1.5"
            >

              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                className="w-6 h-[2px] bg-white"
              />

              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-6 h-[2px] bg-white"
              />

              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                className="w-6 h-[2px] bg-white"
              />

            </motion.div>

          </button>

        </div>

      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/95 flex flex-col
            items-center justify-center gap-10 text-3xl z-30"
          >

            {navLinks.map((link) => (

              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }}
              >

                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-yellow-400"
                >
                  {link.name}
                </a>

              </motion.div>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </>
  )
}