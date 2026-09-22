"use client";

import { usePathname, useRouter } from "next/navigation";

const tabs = [
  { label: "Dashboard", href: "/admin" },
  { label: "Members", href: "/admin/members" },
  { label: "Workouts", href: "/admin/workouts" },
];

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto max-w-md px-6 py-5">
        <h1 className="text-xl font-black tracking-widest">
          GYMHQ ADMIN
        </h1>

        <div className="mt-4 flex gap-2">
          {tabs.map((tab) => {
            const active = pathname === tab.href;

            return (
              <button
                key={tab.href}
                onClick={() => router.push(tab.href)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-white text-black"
                    : "bg-zinc-900 text-zinc-400"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}