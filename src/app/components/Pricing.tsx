import Card from "./Card";
import SectionHeading from "./SectionHeading";
import Buttons from "./Buttons";

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 bg-black px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Memberships"
          title="Choose your transformation."
        />

        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
          {/* BASIC */}
          <Card>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Basic
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-5xl font-black">₹999</span>
              <span className="pb-1 text-zinc-400">/month</span>
            </div>

            <ul className="mt-8 space-y-4 text-zinc-300">
              <li>✓ Unlimited gym access</li>
              <li>✓ Locker facility</li>
              <li>✓ Card entry</li>
            </ul>
          </Card>

          {/* PRO */}
          <div className="relative scale-105 rounded-[2rem] border border-white bg-white p-10 text-black shadow-[0_20px_80px_rgba(255,255,255,0.18)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
              Most Popular
            </div>

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Pro
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-6xl font-black">₹1799</span>
              <span className="pb-2 text-zinc-500">/month</span>
            </div>

            <ul className="mt-8 space-y-4">
              <li>✓ Unlimited access</li>
              <li>✓ Group classes</li>
              <li>✓ Progress tracking</li>
              <li>✓ Monthly coach review</li>
            </ul>

            <div className="mt-10">
              <Buttons>Start Free Trial</Buttons>
            </div>
          </div>

          {/* ELITE */}
          <Card>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Elite
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-5xl font-black">₹2999</span>
              <span className="pb-1 text-zinc-400">/month</span>
            </div>

            <ul className="mt-8 space-y-4 text-zinc-300">
              <li>✓ Personal trainer</li>
              <li>✓ Custom nutrition</li>
              <li>✓ Body composition scans</li>
              <li>✓ Priority support</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}