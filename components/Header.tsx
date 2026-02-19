"use client";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const scroll = () => setSticky(window.scrollY > 30);
        window.addEventListener("scroll", scroll);
        return () => window.removeEventListener("scroll", scroll);
    }, []);

    return (
        <header
            className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${sticky
                    ? "bg-white border-b border-gray-200"
                    : "bg-transparent"}
      `}
        >
            <div className="max-w-7xl mx-auto px-6 h-[74px] flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <img
                        src="/solohitech-Logo.png"
                        className="h-20 md:h-22 w-auto object-contain"
                    />

                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700">
                    <a className="hover:text-black transition">Home</a>
                    <a className="hover:text-black transition">Features</a>
                    <a className="hover:text-black transition">Support</a>
                    <a className="hover:text-black transition">Pricing</a>
                </nav>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4">

                    {/* CTA BUTTON */}
                    <button className="hidden md:inline-flex px-5 py-2.5 rounded-lg bg-black text-white text-sm font-semibold hover:opacity-90 transition">
                        Get Started
                    </button>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden"
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="flex flex-col px-6 py-6 gap-5 text-gray-700 font-medium">
                        <a>Home</a>
                        <a>Features</a>
                        <a>Support</a>
                        <a>Pricing</a>

                        <button className="mt-4 w-full py-3 rounded-lg bg-black text-white font-semibold">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
