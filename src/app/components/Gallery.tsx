"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
];

export default function Gallery() {
  return (
    <section className="relative z-10 bg-black px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Inside GymHQ"
          title="Built for serious athletes."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={src}
                alt="Gym interior"
                className="h-[460px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}