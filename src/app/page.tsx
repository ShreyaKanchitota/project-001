export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')",
  }}
/>
<div className="absolute inset-0 bg-black/70" />
<nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/30 px-8 py-5 backdrop-blur-xl">
  <h1 className="text-xl font-bold tracking-wide">GYMHQ</h1>

  <div className="hidden gap-8 text-sm md:flex">
    <a href="#">Programs</a>
    <a href="#">Coaches</a>
    <a href="#">Pricing</a>
    <a href="#">Contact</a>
  </div>

  <button className="rounded-full border border-white/30 px-5 py-2 text-sm backdrop-blur">
    Join Now
  </button>
</nav>
<section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
          Rey Studios · Project 001
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          STRONGER
          <br />
          EVERY DAY
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-300">
          Premium strength training for ambitious people.
        </p>

        <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black">
          Start Your Trial
        </button>
      </section>
      <section className="relative z-10 bg-zinc-950 px-6 py-24 text-white">
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Why GymHQ
      </p>
      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Built for people who take fitness seriously
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-5 text-4xl">🏋️</div>
        <h3 className="mb-3 text-xl font-semibold">Premium Equipment</h3>
        <p className="text-zinc-400">
          Olympic racks, free weights, machines and functional training zones.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-5 text-4xl">📈</div>
        <h3 className="mb-3 text-xl font-semibold">Progress Tracking</h3>
        <p className="text-zinc-400">
          Monitor workouts, attendance and body measurements over time.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-5 text-4xl">👨‍🏫</div>
        <h3 className="mb-3 text-xl font-semibold">Expert Coaching</h3>
        <p className="text-zinc-400">
          Personalized guidance from certified trainers for every goal.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="relative z-10 bg-black px-6 py-24 text-white">
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
<section className="relative z-10 bg-zinc-950 px-6 py-24 text-white">
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
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-5 text-3xl">⭐⭐⭐⭐⭐</div>
        <p className="text-zinc-300">
          “Lost 18 kg in 9 months. The coaches kept me consistent and motivated.”
        </p>
        <div className="mt-8">
          <h4 className="font-semibold">Priya N.</h4>
          <p className="text-sm text-zinc-500">Software Engineer</p>
        </div>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-5 text-3xl">⭐⭐⭐⭐⭐</div>
        <p className="text-zinc-300">
          “Best equipment in the area. It feels like a premium fitness club.”
        </p>
        <div className="mt-8">
          <h4 className="font-semibold">Rahul K.</h4>
          <p className="text-sm text-zinc-500">Business Owner</p>
        </div>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-5 text-3xl">⭐⭐⭐⭐⭐</div>
        <p className="text-zinc-300">
          “Tracking my workouts helped me finally stay disciplined.”
        </p>
        <div className="mt-8">
          <h4 className="font-semibold">Ayesha M.</h4>
          <p className="text-sm text-zinc-500">Medical Student</p>
        </div>
      </div>
    </div>
  </div>
</section>
<footer className="relative z-10 border-t border-zinc-800 bg-black px-6 py-10 text-zinc-400">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
    <div>
      <h3 className="text-xl font-bold text-white">GYMHQ</h3>
      <p className="mt-2 text-sm">
        Premium strength training · Bangalore
      </p>
    </div>

    <div className="flex gap-6 text-sm">
      <a href="#" className="hover:text-white">Instagram</a>
      <a href="#" className="hover:text-white">WhatsApp</a>
      <a href="#" className="hover:text-white">Contact</a>
    </div>
  </div>

  <div className="mx-auto mt-8 max-w-6xl border-t border-zinc-900 pt-6 text-center text-xs text-zinc-500">
    © 2026 GYMHQ. Designed by Rey Studios.
  </div>
</footer>
    </main>
  );
}