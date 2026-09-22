"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: "🏋️",
    title: "Premium Equipment",
    text: "Olympic racks, free weights, machines and functional training zones.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    text: "Monitor workouts, attendance and body measurements over time.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Coaching",
    text: "Personalized guidance from certified trainers for every goal.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative z-10 bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why GymHQ"
          title="Built for people who take fitness seriously"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card>
                <div className="mb-5 text-4xl">{feature.icon}</div>

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-zinc-400">{feature.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}