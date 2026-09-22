"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Buttons from "./Buttons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl"
          : "border-transparent bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-xl font-black tracking-[0.2em] text-white">
          GYMHQ
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Programs
          </a>

          <a
            href="#pricing"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#testimonials"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Results
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Contact
          </a>

          <Buttons>Join Now</Buttons>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 md:hidden"
        >
          <div className="space-y-1.5">
            <div
              className={`h-0.5 w-5 bg-white transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <div
              className={`h-0.5 w-5 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-0.5 w-5 bg-white transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="flex flex-col px-6 py-6">
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="py-3 text-zinc-300 hover:text-white"
            >
              Programs
            </a>

            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="py-3 text-zinc-300 hover:text-white"
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              onClick={() => setOpen(false)}
              className="py-3 text-zinc-300 hover:text-white"
            >
              Results
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-3 text-zinc-300 hover:text-white"
            >
              Contact
            </a>

            <div className="mt-4">
              <Buttons>Book Trial</Buttons>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}