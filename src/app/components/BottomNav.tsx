"use client";

import { usePathname, useRouter } from "next/navigation";

const tabs = [
    { icon: "🏠", label: "Home", href: "/member" },
    { icon: "💪", label: "Workout", href: "/member/workout" },
    { icon: "📊", label: "Progress", href: "/member/progress" },
    { icon: "👤", label: "Profile", href: "/member/profile" },
  ];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 border-t border-white/10 bg-black/95 backdrop-blur-xl">
      <div className="grid grid-cols-4 py-3">
        {tabs.map((tab) => {
          const active =
            tab.href === "/member"
              ? pathname === "/member"
              : pathname === tab.href;

          return (
            <button
              key={tab.label}
              onClick={() => router.push(tab.href)}
              className="flex flex-col items-center gap-1 transition active:scale-95"
            >
              <span className={`text-xl ${active ? "" : "opacity-40"}`}>
                {tab.icon}
              </span>

              <span
                className={`text-xs ${
                  active
                    ? "font-semibold text-white"
                    : "text-zinc-500"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}