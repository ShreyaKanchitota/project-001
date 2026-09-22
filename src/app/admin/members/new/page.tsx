export default function NewMemberPage() {
    return (
      <section className="mx-auto max-w-md space-y-6 px-6 py-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Members
          </p>
          <h1 className="mt-2 text-3xl font-black">Add Member</h1>
        </div>
  
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-5 space-y-4">
          <input
            placeholder="Full Name"
            className="w-full rounded-xl bg-black p-3 outline-none"
          />
  
          <input
            placeholder="Phone Number"
            className="w-full rounded-xl bg-black p-3 outline-none"
          />
  
          <select className="w-full rounded-xl bg-black p-3 outline-none">
            <option>Basic</option>
            <option>Premium</option>
          </select>
  
          <button className="w-full rounded-xl bg-white py-3 font-semibold text-black">
            Create Member
          </button>
        </div>
      </section>
    );
  }