"use client";

import { useMemo, useState } from "react";

type SetLog = {
  id: number;
  lastWeight: number;
  lastReps: number;
  weight: string;
  reps: string;
  done: boolean;
};

type Exercise = {
  id: number;
  name: string;
  target: string;
  sets: SetLog[];
};

const createSets = (values: [number, number][]) =>
  values.map(([w, r], i) => ({
    id: i + 1,
    lastWeight: w,
    lastReps: r,
    weight: "",
    reps: "",
    done: false,
  }));

const initialWorkout: Exercise[] = [
  {
    id: 1,
    name: "Bench Press",
    target: "3 × 8",
    sets: createSets([
      [60, 8],
      [60, 8],
      [57.5, 9],
    ]),
  },
  {
    id: 2,
    name: "Incline DB Press",
    target: "3 × 10",
    sets: createSets([
      [22.5, 10],
      [22.5, 10],
      [20, 12],
    ]),
  },
  {
    id: 3,
    name: "Shoulder Press",
    target: "3 × 12",
    sets: createSets([
      [15, 12],
      [15, 11],
      [12.5, 13],
    ]),
  },
];

export default function WorkoutTracker({
    onSetCompleted,
  }: {
    onSetCompleted: () => void;
  }) {
  const [workout, setWorkout] = useState(initialWorkout);

  const totalSets = useMemo(
    () => workout.reduce((sum, ex) => sum + ex.sets.length, 0),
    [workout]
  );

  const completedSets = useMemo(
    () =>
      workout.reduce(
        (sum, ex) => sum + ex.sets.filter((s) => s.done).length,
        0
      ),
    [workout]
  );

  const progress = Math.round((completedSets / totalSets) * 100);

  function updateField(
    exerciseId: number,
    setId: number,
    field: "weight" | "reps",
    value: string
  ) {
    setWorkout((current) =>
      current.map((exercise) =>
        exercise.id !== exerciseId
          ? exercise
          : {
              ...exercise,
              sets: exercise.sets.map((set) =>
                set.id === setId ? { ...set, [field]: value } : set
              ),
            }
      )
    );
  }

  function toggleSet(exerciseId: number, setId: number) {
    // Find the current set BEFORE updating state
    const exercise = workout.find((e) => e.id === exerciseId);
    const set = exercise?.sets.find((s) => s.id === setId);
  
    const shouldStartTimer = set ? !set.done : false;
  
    setWorkout((current) =>
      current.map((exercise) =>
        exercise.id !== exerciseId
          ? exercise
          : {
              ...exercise,
              sets: exercise.sets.map((set) =>
                set.id === setId ? { ...set, done: !set.done } : set
              ),
            }
      )
    );
  
    if (shouldStartTimer) {
      onSetCompleted();
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">Today's Workout</p>
          <h3 className="mt-1 text-2xl font-black text-white">Push Day</h3>
        </div>

        <div className="text-right">
          <p className="text-2xl font-black text-white">{progress}%</p>
          <p className="text-xs text-zinc-500">
            {completedSets}/{totalSets} Sets
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-white transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Exercises */}
      <div className="mt-8 space-y-8">
        {workout.map((exercise) => {
          const completed = exercise.sets.filter((s) => s.done).length;

          return (
            <div key={exercise.id}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {exercise.name}
                  </h4>
                  <p className="text-sm text-zinc-500">{exercise.target}</p>
                </div>

                <div className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  {completed}/3
                </div>
              </div>

              <div className="space-y-3">
                {exercise.sets.map((set) => (
                  <div
                    key={set.id}
                    className={`rounded-2xl border p-3 transition ${
                      set.done
                        ? "border-green-500/30 bg-green-500/10"
                        : "border-zinc-800 bg-black/30"
                    }`}
                  >
                    {/* Top */}
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-zinc-400">
                          SET {set.id}
                        </p>
                        <p className="text-xs text-zinc-500">
                          Last: {set.lastWeight} kg × {set.lastReps}
                        </p>
                      </div>

                      <button
                        onClick={() => toggleSet(exercise.id, set.id)}
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
                          set.done
                            ? "border-green-500 bg-green-500 text-black"
                            : "border-zinc-600 text-zinc-500"
                        }`}
                      >
                        {set.done ? "✓" : ""}
                      </button>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="number"
                        value={set.weight}
                        onChange={(e) =>
                          updateField(
                            exercise.id,
                            set.id,
                            "weight",
                            e.target.value
                          )
                        }
                        placeholder={`${set.lastWeight}`}
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-center text-white outline-none focus:border-white"
                      />

                      <input
                        type="number"
                        value={set.reps}
                        onChange={(e) =>
                          updateField(
                            exercise.id,
                            set.id,
                            "reps",
                            e.target.value
                          )
                        }
                        placeholder={`${set.lastReps}`}
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-center text-white outline-none focus:border-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}