"use client";

import { useMemo, useState } from "react";

export default function ProgressPage() {
  const [history, setHistory] = useState([
    { month: "Jan", weight: 98 },
    { month: "Feb", weight: 96.5 },
    { month: "Mar", weight: 95 },
    { month: "Apr", weight: 95.2 },
    { month: "May", weight: 93 },
    { month: "Jun", weight: 91.5 },
    { month: "Jul", weight: 90.8 },
    { month: "Aug", weight: 90 },
  ]);

  const [weight, setWeight] = useState("");
  const [open, setOpen] = useState(false);

  const max = useMemo(() => Math.max(...history.map((h) => h.weight)), [history]);
  const min = useMemo(() => Math.min(...history.map((h) => h.weight)), [history]);

  function saveWeight() {
    if (!weight) return;

    setHistory([
      ...history,
      { month: "Today", weight: Number(weight) },
    ]);

    setWeight("");
    setOpen(false);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-8 pb-28 text-white">
      <div className="mx-auto max-w-md space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Member App
            </p>
            <h1 className="mt-2 text-3xl font-black">Progress</h1>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
          >
            + Log
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-500">Latest Weight</p>
          <h2 className="mt-2 text-4xl font-black">
            {history[history.length - 1].weight} kg
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <h3 className="mb-5 text-lg font-bold">Weight Trend</h3>

          <svg viewBox="0 0 260 120" className="h-40 w-full">
            <polyline
              fill="none"
              stroke="white"
              strokeWidth="2"
              points={history
                .map((d, i) => {
                  const x = (i / (history.length - 1)) * 240 + 10;
                  const y =
                    100 -
                    ((d.weight - min) / (max - min || 1)) * 80 +
                    10;
                  return `${x},${y}`;
                })
                .join(" ")}
            />

            {history.map((d, i) => {
              const x = (i / (history.length - 1)) * 240 + 10;
              const y =
                100 -
                ((d.weight - min) / (max - min || 1)) * 80 +
                10;

              return (
                <circle key={i} cx={x} cy={y} r="3" fill="white" />
              );
            })}
          </svg>

          <div className="mt-3 flex justify-between text-xs text-zinc-500">
            {history.map((d, i) => (
              <span key={i}>{d.month}</span>
            ))}
          </div>
        </div>

        {open && (
          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-5">
            <h3 className="mb-4 text-lg font-bold">Log Today's Weight</h3>

            <input
              type="number"
              placeholder="90.0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mb-4 w-full rounded-xl bg-black p-3 text-center text-lg"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 rounded-xl border border-zinc-700 py-3"
              >
                Cancel
              </button>

              <button
                onClick={saveWeight}
                className="flex-1 rounded-xl bg-white py-3 font-semibold text-black"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

    </main>
  );
}