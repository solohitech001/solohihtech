"use client";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Pricing", href: "#pricing" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scroll = () => setSticky(window.scrollY > 20);
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        sticky
          ? "backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[78px] flex items-center justify-between">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/solohitech-Logo.png"
            className="h-14 w-auto object-contain"
            alt="logo"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-gray-700">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative group cursor-pointer"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg shadow-indigo-500/30 hover:scale-105 transition"
          >
            Get Started
          </a>

          {/* MOBILE ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden transition"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-6 text-gray-700 font-semibold">

              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-black transition"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                className="w-full text-center py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
