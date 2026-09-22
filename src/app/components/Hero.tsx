import Buttons from "./Buttons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-400">
          Rey Studios · Project 001
        </p>

        <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
          ELEVATE
          <br />
          YOUR
          <br />
          STRENGTH
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
          A premium strength & performance facility built for ambitious athletes,
          professionals and everyday people chasing extraordinary results.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Buttons>Book Free Trial</Buttons>

          <Buttons href="#pricing" variant="secondary">
            View Memberships
          </Buttons>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-zinc-400">Active Members</p>
          </div>

          <div>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-zinc-400">Elite Coaches</p>
          </div>

          <div>
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-sm text-zinc-400">Access</p>
          </div>
        </div>
      </div>
    </section>
  );
}