import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

      <Navbar />

      <Hero />

      {/* Features */}
      <Features />

      {/* Pricing */}
      <section
        id="pricing"
        className="relative z-10 bg-black px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Memberships
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Simple pricing. No hidden fees.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Basic</h3>
              <p className="mt-4 text-5xl font-bold">₹999</p>
              <p className="mt-1 text-zinc-400">per month</p>

              <ul className="mt-8 space-y-3 text-zinc-300">
                <li>✓ Gym Access</li>
                <li>✓ Locker</li>
                <li>✓ Card Entry</li>
              </ul>
            </div>

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

              <button className="mt-8 w-full rounded-full bg-black py-3 font-semibold text-white">
                Join Pro
              </button>
            </div>

            <div className="rounded-3xl border border-zinc-800 p-8">
              <h3 className="text-xl font-semibold">Elite</h3>

              <p className="mt-4 text-5xl font-bold">₹2,999</p>
              <p className="mt-1 text-zinc-400">per month</p>

              <ul className="mt-8 space-y-3 text-zinc-300">
                <li>✓ Personal Trainer</li>
                <li>✓ Diet Planning</li>
                <li>✓ Priority Support</li>
                <li>✓ Body Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative z-10 bg-zinc-950 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Success Stories
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Real members. Real transformations.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Priya N.",
                role: "Software Engineer",
                quote:
                  "Lost 18 kg in 9 months. The coaches kept me consistent and motivated.",
              },
              {
                name: "Rahul K.",
                role: "Business Owner",
                quote:
                  "Best equipment in the area. It feels like a premium fitness club.",
              },
              {
                name: "Ayesha M.",
                role: "Medical Student",
                quote:
                  "Tracking my workouts helped me finally stay disciplined.",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
              >
                <div className="mb-5 text-3xl">⭐⭐⭐⭐⭐</div>

                <p className="text-zinc-300">“{person.quote}”</p>

                <div className="mt-8">
                  <h4 className="font-semibold">{person.name}</h4>
                  <p className="text-sm text-zinc-500">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="relative z-10 border-t border-zinc-800 bg-black px-6 py-10 text-zinc-400"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">GYMHQ</h3>
            <p className="mt-2 text-sm">
              Premium strength training · Bangalore
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              WhatsApp
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-zinc-900 pt-6 text-center text-xs text-zinc-500">
          © 2026 GYMHQ. Designed by Rey Studios.
        </div>
      </footer>
    </main>
  );
}