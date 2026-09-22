export default function WorkoutsPage() {
    return (
      <section className="mx-auto max-w-md space-y-6 px-6 py-6 text-white">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Workouts
          </p>
          <h1 className="mt-2 text-3xl font-black">
            Workout Templates
          </h1>
        </div>
  
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-5">
          <p className="text-sm text-zinc-500">Templates</p>
  
          <div className="mt-4 space-y-3">
            <Template name="Push Day" exercises={3} duration="45 min" />
            <Template name="Pull Day" exercises={4} duration="50 min" />
            <Template name="Leg Day" exercises={5} duration="60 min" />
          </div>
        </div>
  
        <button className="w-full rounded-2xl bg-white py-4 font-bold text-black">
          + Create Workout
        </button>
      </section>
    );
  }
  
  function Template({
    name,
    exercises,
    duration,
  }: {
    name: string;
    exercises: number;
    duration: string;
  }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
        <h3 className="font-bold">{name}</h3>
        <p className="mt-1 text-sm text-zinc-400">
          {exercises} exercises • {duration}
        </p>
      </div>
    );
  }