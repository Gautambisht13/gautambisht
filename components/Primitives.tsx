import type { ReactNode } from "react";

/** The small uppercase mono tag used to label every section. */
export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const tones = {
    light: "bg-brand text-white",
    dark: "bg-white text-ink",
  };

  return (
    <span
      className={`inline-block border-2 border-black px-3 py-1 font-mono text-[0.7rem] font-bold tracking-[0.18em] uppercase shadow-brutal-xs ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-4xl leading-[0.95] uppercase sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base text-black/70 sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}

/** Monospace chip used for skills and tech stacks. Inverts on hover. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="press inline-block border-2 border-black bg-white px-3 py-1.5 font-mono text-xs font-semibold tracking-wide shadow-brutal-xs hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-brutal-sm sm:text-sm">
      {children}
    </span>
  );
}
