"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Buttons from "./Buttons";

export default function Hero() {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 600], [0, 180]);
  const contentY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div
          className="h-[120%] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-20"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-400">
          Rey Studios · Project 001
        </p>

        <h1 className="max-w-5xl text-6xl font-black leading-[0.85] tracking-[-0.05em] md:text-8xl lg:text-9xl">
          BECOME
          <br />
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            UNSTOPPABLE
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
          Strength. Discipline. Community. Train in Bangalore's premium
          performance facility designed for people who refuse average.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <div className="flex -space-x-3">
            <div className="h-10 w-10 rounded-full border-2 border-black bg-zinc-300" />
            <div className="h-10 w-10 rounded-full border-2 border-black bg-zinc-500" />
            <div className="h-10 w-10 rounded-full border-2 border-black bg-zinc-700" />
          </div>

          <div>
            <p className="font-semibold">500+ Active Members</p>
            <p className="text-sm text-zinc-400">4.9 ★ average rating</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Buttons>Book Free Trial</Buttons>

          <Buttons variant="secondary" href="#pricing">
            View Memberships
          </Buttons>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/30">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}