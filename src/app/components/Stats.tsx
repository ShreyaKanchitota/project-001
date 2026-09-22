
export default function Stats() {
    const stats = [
      { value: "500+", label: "Active Members" },
      { value: "12", label: "Elite Coaches" },
      { value: "24/7", label: "Gym Access" },
      { value: "4.9★", label: "Google Rating" },
    ];
  
    return (
      <section className="relative z-10 -mt-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }