"use client";

import { motion, AnimatePresence } from "framer-motion";

type RestTimerProps = {
  visible: boolean;
  seconds: number;
  running: boolean;
  onPause: () => void;
  onClose: () => void;
};

const DURATION = 90;

export default function RestTimer({
  visible,
  seconds,
  running,
  onPause,
  onClose,
}: RestTimerProps) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  const progress = (seconds / DURATION) * 100;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2"
        >
          <div className="rounded-3xl border border-white/10 bg-black/90 p-5 shadow-2xl backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Rest Timer
                </p>
                <h3 className="text-3xl font-black text-white">
                  {mins}:{secs}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-zinc-700 p-2 text-zinc-400 transition hover:border-white hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="mb-5 h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              onClick={onPause}
              className="w-full rounded-xl bg-white py-3 font-semibold text-black"
            >
              {running ? "Pause" : "Resume"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}