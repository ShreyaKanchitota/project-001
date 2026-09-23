"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Buttons({
  children,
  variant = "primary",
  href,
}: ButtonProps) {
  const styles = {
    primary:
      "inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-black shadow-lg hover:bg-zinc-100",
    secondary:
      "inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10",
  };

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 30,
    },
  };

  if (href) {
    return (
      <motion.a href={href} className={styles[variant]} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={styles[variant]} {...motionProps}>
      {children}
    </motion.button>
  );
}