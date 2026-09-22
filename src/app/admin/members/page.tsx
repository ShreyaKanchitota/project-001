"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Member = {
  id: string;
  name: string;
  phone: string;
  plan: "Basic" | "Premium";
};

export default function MembersPage() {
  const router = useRouter();

  const [members] = useState<Member[]>([
    {
      id: "GHQ-1024",
      name: "Shreya K S",
      phone: "9876543210",
      plan: "Premium",
    },
    {
      id: "GHQ-1025",
      name: "Rahul",
      phone: "9123456789",
      plan: "Basic",
    },
    {
      id: "GHQ-1026",
      name: "Ananya",
      phone: "9988776655",
      plan: "Premium",
    },
  ]);

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return members.filter(
      (m) =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.phone.includes(search)
    );
  }, [members, search]);

  return (
    <section className="mx-auto max-w-md space-y-5 px-6 py-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Members
          </p>
          <h1 className="mt-1 text-3xl font-black">
            {filtered.length} Members
          </h1>
        </div>

        <button
          onClick={() => router.push("/admin/members/new")}
          className="rounded-xl bg-white px-4 py-2 font-semibold text-black"
        >
          + Add
        </button>
      </div>

      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
        <input
          placeholder="Search name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((member) => (
          <button
            key={member.id}
            onClick={() => router.push(`/admin/members/${member.id}`)}
            className="w-full rounded-2xl border border-white/10 bg-zinc-900 p-4 text-left transition hover:border-white/20"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-zinc-500">{member.id}</p>
                <p className="mt-1 text-sm text-zinc-400">
                  {member.phone}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  member.plan === "Premium"
                    ? "bg-white text-black"
                    : "bg-zinc-800 text-zinc-300"
                }`}
              >
                {member.plan}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}