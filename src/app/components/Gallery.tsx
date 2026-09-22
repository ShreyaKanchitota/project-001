"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section className="relative z-10 bg-black px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Inside GymHQ"
          title="Designed to inspire greatness."
        />

        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[28px] md:col-span-2 md:row-span-2"
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
              alt="Premium gym interior"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-300">
                Strength Zone
              </p>
              <h3 className="mt-2 text-3xl font-black">
                Built for performance.
              </h3>
            </div>
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-[28px]"
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
              alt="Weight training"
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-[28px]"
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
              alt="Functional training"
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}