"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

type Status = "New" | "Called" | "Joined";

type Trial = {
  id: number;
  name: string;
  phone: string;
  goal: string;
  time: string;
  status: Status;
};

const initialRequests: Trial[] = [
  {
    id: 1,
    name: "Shreya K S",
    phone: "9876543210",
    goal: "Weight Loss",
    time: "10:30 AM",
    status: "New",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    phone: "9123456789",
    goal: "Muscle Gain",
    time: "11:45 AM",
    status: "Called",
  },
  {
    id: 3,
    name: "Ayesha M",
    phone: "9988776655",
    goal: "General Fitness",
    time: "1:15 PM",
    status: "Joined",
  },
];

export default function AdminInbox() {
  const [requests, setRequests] = useState(initialRequests);

  function nextStatus(status: Status): Status {
    if (status === "New") return "Called";
    if (status === "Called") return "Joined";
    return "New";
  }

  function updateStatus(id: number) {
    setRequests((current) =>
      current.map((trial) =>
        trial.id === id
          ? { ...trial, status: nextStatus(trial.status) }
          : trial
      )
    );
  }

  return (
    <section className="py-10">
      <SectionHeading
        eyebrow="Owner Dashboard"
        title="Today's Trial Requests"
      />

      <div className="space-y-4">
        {requests.map((trial) => (
          <div
            key={trial.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-white/20"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="text-lg font-bold text-white">
                    {trial.name}
                  </h3>

                  <button
                    onClick={() => updateStatus(trial.id)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      trial.status === "New"
                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                        : trial.status === "Called"
                        ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                        : "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                    }`}
                  >
                    {trial.status}
                  </button>
                </div>

                <p className="text-zinc-400">{trial.phone}</p>

                <p className="mt-1 text-sm text-zinc-500">
                  Goal: {trial.goal}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-zinc-500">Requested</p>
                <p className="font-semibold text-white">{trial.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}