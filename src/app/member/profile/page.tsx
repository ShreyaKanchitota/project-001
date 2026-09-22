"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Shreya K S",
    height: "5'3\"",
    weight: "90",
    goal: "69",
  });

  function update(field: keyof typeof profile, value: string) {
    setProfile({ ...profile, [field]: value });
  }

  return (
    <main className="min-h-screen bg-black px-6 py-8 pb-28 text-white">
      <div className="mx-auto max-w-md space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Member App
            </p>
            <h1 className="mt-2 text-3xl font-black">Profile</h1>
          </div>

          <button
            onClick={() => setEditing(!editing)}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm"
          >
            {editing ? "Save" : "Edit"}
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-800 text-4xl">
            👤
          </div>

          {editing ? (
            <input
              value={profile.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full rounded-xl bg-black p-3 text-center text-xl font-bold"
            />
          ) : (
            <h2 className="text-xl font-bold">{profile.name}</h2>
          )}

          <p className="text-zinc-400">Premium Member</p>
        </div>

        <Metric
          label="Height"
          value={profile.height}
          editing={editing}
          onChange={(v) => update("height", v)}
        />
        <Metric
          label="Current Weight"
          value={profile.weight}
          editing={editing}
          suffix=" kg"
          onChange={(v) => update("weight", v)}
        />
        <Metric
          label="Goal Weight"
          value={profile.goal}
          editing={editing}
          suffix=" kg"
          onChange={(v) => update("goal", v)}
        />
      </div>

    </main>
  );
}

function Metric({
  label,
  value,
  editing,
  onChange,
  suffix = "",
}: {
  label: string;
  value: string;
  editing: boolean;
  onChange: (v: string) => void;
  suffix?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
      <p className="mb-2 text-sm text-zinc-500">{label}</p>

      {editing ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl bg-black p-3 text-lg font-bold"
        />
      ) : (
        <p className="text-lg font-bold">
          {value}
          {suffix}
        </p>
      )}
    </div>
  );
}