export default function AdminDashboard() {
    return (
      <section className="mx-auto max-w-md space-y-6 px-6 py-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-black">Gym Overview</h1>
        </div>
  
        <div className="grid grid-cols-2 gap-4">
          <Stat title="Members" value="128" />
          <Stat title="Active" value="121" />
          <Stat title="Revenue" value="₹2.4L" />
          <Stat title="Attendance" value="89%" />
        </div>
  
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-500">Today's Activity</p>
  
          <h2 className="mt-3 text-4xl font-black">64</h2>
  
          <p className="mt-2 text-zinc-400">
            Members have checked in today.
          </p>
        </div>
      </section>
    );
  }
  
  function Stat({
    title,
    value,
  }: {
    title: string;
    value: string;
  }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
        <p className="text-xs text-zinc-500">{title}</p>
        <p className="mt-2 text-2xl font-black">{value}</p>
      </div>
    );
  }