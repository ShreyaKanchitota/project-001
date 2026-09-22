type SectionHeadingProps = {
    eyebrow: string;
    title: string;
  };
  
  export default function SectionHeading({
    eyebrow,
    title,
  }: SectionHeadingProps) {
    return (
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          {eyebrow}
        </p>
  
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          {title}
        </h2>
      </div>
    );
  }