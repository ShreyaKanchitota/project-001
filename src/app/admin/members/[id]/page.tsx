type Props = {
    params: Promise<{ id: string }>;
  };
  
  export default async function MemberProfile({ params }: Props) {
    const { id } = await params;
  
    return (
      <section className="mx-auto max-w-md space-y-6 px-6 py-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Member
          </p>
  
          <h1 className="mt-2 text-3xl font-black">Shreya K S</h1>
  
          <p className="mt-1 text-zinc-500">{id}</p>
        </div>
  
        <div className="space-y-4 rounded-3xl border border-white/10 bg-zinc-900 p-5">
          <Info title="Phone" value="9876543210" />
          <Info title="Plan" value="Premium" />
          <Info title="Height" value={`5'3"`} />
          <Info title="Current Weight" value="90 kg" />
        </div>
  
        <button className="w-full rounded-2xl bg-white py-4 font-bold text-black">
          Assign Workout
        </button>
      </section>
    );
  }
  
  function Info({
    title,
    value,
  }: {
    title: string;
    value: string;
  }) {
    return (
      <div className="flex justify-between">
        <span className="text-zinc-500">{title}</span>
        <span className="font-semibold">{value}</span>
      </div>
    );
  }