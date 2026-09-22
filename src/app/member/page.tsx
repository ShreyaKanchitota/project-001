"use client";

import { useRouter } from "next/navigation";

export default function MemberHome() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black px-6 py-8 pb-28 text-white">
      <div className="mx-auto max-w-md space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Member App
          </p>
          <h1 className="mt-2 text-3xl font-black">
            Welcome, Shreya 👋
          </h1>
        </div>

        {/* Membership Card */}
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
          <p className="text-sm text-zinc-400">Premium Member</p>

          <h2 className="mt-2 text-2xl font-black tracking-widest">
            GYMHQ
          </h2>

          <div className="mt-10 flex items-end justify-between">
            <div>
              <p className="text-xs text-zinc-500">Member ID</p>
              <p className="font-semibold">GHQ-1024</p>
            </div>

            <div className="text-right">
              <p className="text-xs text-zinc-500">Valid Till</p>
              <p className="font-semibold">Apr 2027</p>
            </div>
          </div>
        </div>

        {/* Attendance */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">Attendance</h3>
            <span className="text-sm font-semibold text-green-400">
              92%
            </span>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-8 border-green-500">
              <div className="text-center">
                <p className="text-3xl font-black">23</p>
                <p className="text-xs text-zinc-400">Days This Month</p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-zinc-400">
            Current streak:
            <span className="font-semibold text-white"> 8 days</span>
          </p>
        </div>

        {/* Today's Workout */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-500">Today's Workout</p>

          <h2 className="mt-2 text-3xl font-black">Push Day 💪</h2>

          <p className="mt-3 text-zinc-400">
            Chest • Shoulders • Triceps
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
            <span>⏱</span>
            <span>Approx. 45 minutes</span>
          </div>

          <button
            onClick={() => router.push("/member/workout")}
            className="mt-6 w-full rounded-2xl bg-white py-4 text-lg font-bold text-black transition hover:opacity-90"
          >
            Start Workout →
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
            <p className="text-xs text-zinc-500">Current Weight</p>
            <p className="mt-2 text-2xl font-black">90 kg</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
            <p className="text-xs text-zinc-500">Goal Weight</p>
            <p className="mt-2 text-2xl font-black">69 kg</p>
          </div>
        </div>
      </div>

     
    </main>
  );
}