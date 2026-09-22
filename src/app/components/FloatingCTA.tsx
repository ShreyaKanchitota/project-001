"use client";

export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-5 z-50 px-4 md:hidden">
      <div className="mx-auto max-w-md rounded-full border border-white/10 bg-black/80 p-2 shadow-2xl backdrop-blur-xl">
        <button className="w-full rounded-full bg-white py-4 text-center font-semibold text-black transition hover:scale-[1.01]">
          Book Free Trial
        </button>
      </div>
    </div>
  );
}