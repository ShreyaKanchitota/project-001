"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "Do I get a free trial?",
    answer:
      "Yes. Every new member receives one complimentary workout session with a coach.",
  },
  {
    question: "Is there a joining fee?",
    answer:
      "No hidden fees. You only pay for the membership plan you choose.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Absolutely. Our coaches create beginner-friendly plans based on your fitness level.",
  },
  {
    question: "Do you have personal training?",
    answer:
      "Yes. Elite members receive personalized coaching and nutrition guidance.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative z-10 bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything you need to know."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">{faq.question}</span>

                <span className="text-2xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-zinc-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}