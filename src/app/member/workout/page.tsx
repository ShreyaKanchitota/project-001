
"use client";

import { useEffect, useState } from "react";
import WorkoutTracker from "@/app/components/WorkoutTracker";
import RestTimer from "@/app/components/RestTimer";

const DURATION = 90;

export default function WorkoutPage() {
  const [visible, setVisible] = useState(false);
  const [seconds, setSeconds] = useState(DURATION);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (seconds > 0) return;

    setRunning(false);
    setVisible(false);
    setSeconds(DURATION);
  }, [seconds]);

  function startRest() {
    setSeconds(DURATION);
    setVisible(true);
    setRunning(true);
  }

  function closeTimer() {
    setRunning(false);
    setVisible(false);
    setSeconds(DURATION);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-8 pb-28 text-white">
      <div className="mx-auto max-w-md space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Member App
          </p>
          <h1 className="mt-2 text-3xl font-black">Push Day 💪</h1>
        </div>

        <WorkoutTracker onSetCompleted={startRest} />
      </div>

      <RestTimer
        visible={visible}
        seconds={seconds}
        running={running}
        onPause={() => setRunning((r) => !r)}
        onClose={closeTimer}
      />

    </main>
  );
}