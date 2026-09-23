"use client";

import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Buttons from "./Buttons";

const sections = [
  { id: "features", label: "Programs" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Results" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("features");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      {
        threshold: 0.35,
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
        <a
          href="/"
          className="text-xl font-black tracking-[0.2em] text-white"
        >
          GYMHQ
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm transition ${
                active === item.id
                  ? "font-semibold text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}

          <Buttons href="#contact">Join Now</Buttons>
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
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`py-3 transition ${
                  active === item.id
                    ? "font-semibold text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="mt-4">
              <Buttons href="#contact">Book Trial</Buttons>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}