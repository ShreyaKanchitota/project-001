export default function Features() {
    return (
      <section
        id="features"
        className="relative z-10 bg-zinc-950 px-6 py-24"
      >
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
              <h3 className="mb-3 text-xl font-semibold">
                Premium Equipment
              </h3>
              <p className="text-zinc-400">
                Olympic racks, free weights, machines and functional training zones.
              </p>
            </div>
  
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <div className="mb-5 text-4xl">📈</div>
              <h3 className="mb-3 text-xl font-semibold">
                Progress Tracking
              </h3>
              <p className="text-zinc-400">
                Monitor workouts, attendance and body measurements over time.
              </p>
            </div>
  
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <div className="mb-5 text-4xl">👨‍🏫</div>
              <h3 className="mb-3 text-xl font-semibold">
                Expert Coaching
              </h3>
              <p className="text-zinc-400">
                Personalized guidance from certified trainers for every goal.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }