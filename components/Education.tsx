import { Award, School } from "lucide-react";
import { certifications, education } from "@/lib/data";
import { SectionHeading } from "@/components/Primitives";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Background"
          title="Education & certifications"
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* study, most recent first — the order carries meaning here */}
          <Reveal>
            <ol className="border-4 border-black bg-white shadow-brutal">
              {education.map((entry) => (
                <li
                  key={entry.institution}
                  className="flex flex-col gap-3 border-b-4 border-black p-6 last:border-b-0 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
                >
                  <span className="w-fit shrink-0 border-2 border-black bg-brand px-3 py-1.5 font-mono text-xs font-bold tracking-[0.1em] text-white shadow-brutal-xs">
                    {entry.period}
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg leading-tight uppercase sm:text-xl">
                      <School
                        className="h-4.5 w-4.5 shrink-0 text-brand"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      {entry.institution}
                    </h3>
                    <p className="mt-1 text-sm text-black/70 sm:text-base">
                      {entry.qualification}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              {certifications.map((cert) => (
                <article
                  key={cert.title}
                  className="press flex flex-1 items-start gap-4 border-4 border-black bg-white p-6 shadow-brutal hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-black bg-wash shadow-brutal-xs">
                    <Award className="h-5 w-5 text-brand" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="font-mono text-[0.65rem] font-bold tracking-[0.16em] text-black/50 uppercase">
                      {cert.issuer} · {cert.year}
                    </p>
                    <h3 className="mt-1.5 text-lg leading-tight uppercase">
                      {cert.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
