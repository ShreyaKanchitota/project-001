import Card from "./Card";
import SectionHeading from "./SectionHeading";
import Buttons from "./Buttons";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-10 bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Memberships"
          title="Simple pricing. No hidden fees."
        />

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="mt-4 text-5xl font-bold">₹999</p>
            <p className="mt-1 text-zinc-400">per month</p>

            <ul className="mt-8 space-y-3 text-zinc-300">
              <li>✓ Gym Access</li>
              <li>✓ Locker</li>
              <li>✓ Card Entry</li>
            </ul>
          </Card>

          <div className="rounded-3xl border-2 border-white bg-white p-8 text-black shadow-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest">
              Most Popular
            </p>

            <h3 className="text-xl font-semibold">Pro</h3>

            <p className="mt-4 text-5xl font-bold">₹1,799</p>
            <p className="mt-1 text-zinc-600">per month</p>

            <ul className="mt-8 space-y-3">
              <li>✓ Unlimited Access</li>
              <li>✓ Group Classes</li>
              <li>✓ Progress Tracking</li>
              <li>✓ Trainer Consultation</li>
            </ul>

            <div className="mt-8">
              <Buttons>Join Pro</Buttons>
            </div>
          </div>

          <Card>
            <h3 className="text-xl font-semibold">Elite</h3>
            <p className="mt-4 text-5xl font-bold">₹2,999</p>
            <p className="mt-1 text-zinc-400">per month</p>

            <ul className="mt-8 space-y-3 text-zinc-300">
              <li>✓ Personal Trainer</li>
              <li>✓ Diet Planning</li>
              <li>✓ Priority Support</li>
              <li>✓ Body Analysis</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}