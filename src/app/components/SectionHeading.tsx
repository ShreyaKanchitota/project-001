type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}