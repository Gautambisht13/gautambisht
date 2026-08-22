import { GraduationCap } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Chip, SectionHeading } from "@/components/Primitives";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I work with"
          intro="The stack I reach for day to day, grouped by the job it does."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* wide intro tile */}
          <Reveal className="md:col-span-2">
            <article className="flex h-full flex-col justify-between border-4 border-black bg-brand p-6 text-white shadow-brutal sm:p-8">
              <div>
                <h3 className="text-2xl leading-tight uppercase sm:text-3xl">
                  Interfaces that hold up
                  <br />
                  under real load
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
                  I&apos;m a frontend developer in Dehradun, finishing a BCA at
                  ITM. Most of my work is React and TypeScript — building
                  component systems, wiring them to real APIs, and keeping them
                  quick on the devices people actually use.
                </p>
              </div>
              <p className="mt-6 flex items-center gap-2 border-t-2 border-white/40 pt-4 font-mono text-[0.7rem] font-bold tracking-[0.14em] uppercase">
                <GraduationCap className="h-4 w-4" strokeWidth={2.5} />
                BCA · ITM Dehradun · 2023—2026
              </p>
            </article>
          </Reveal>

          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            /* Bento sizing: the widest cell goes to the longest list, so no
               card is left padding out empty space. */
            const span = index === 2 ? "md:col-span-2" : "";

            return (
              <Reveal
                key={group.title}
                delay={80 * (index + 1)}
                className={span}
              >
                <article className="press flex h-full flex-col border-4 border-black bg-white p-6 shadow-brutal hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
                  <span className="flex h-11 w-11 items-center justify-center border-2 border-black bg-wash shadow-brutal-xs">
                    <Icon className="h-5 w-5 text-brand" strokeWidth={2.5} />
                  </span>

                  <p className="mt-5 font-mono text-[0.65rem] font-bold tracking-[0.16em] text-black/50 uppercase">
                    {group.caption}
                  </p>
                  <h3 className="mt-1 text-xl leading-tight uppercase sm:text-2xl">
                    {group.title}
                  </h3>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Chip>{item}</Chip>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
