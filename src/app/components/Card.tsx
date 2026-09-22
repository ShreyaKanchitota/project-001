type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:border-white hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)]">
      {children}
    </div>
  );
}