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
<nav className="relative z-10 flex items-center justify-between px-8 py-6">
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
    </main>
  );
}