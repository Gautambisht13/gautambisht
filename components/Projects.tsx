import { Github, ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/lib/data";
import { Chip, SectionHeading } from "@/components/Primitives";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          intro="Two builds that show how I structure a frontend and the data behind it."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 110}>
              <article className="press flex h-full flex-col border-4 border-black bg-white shadow-brutal hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none">
                {/* category rail — the sort of work, not a sequence number */}
                <div className="flex items-center justify-between gap-3 border-b-4 border-black bg-black px-5 py-2.5">
                  <span className="font-mono text-[0.7rem] font-bold tracking-[0.18em] text-white uppercase">
                    {project.category}
                  </span>
                  <span className="border-2 border-black bg-brand px-2 py-0.5 font-mono text-[0.65rem] font-bold tracking-[0.14em] text-white uppercase">
                    Featured
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-2xl leading-[1.05] uppercase sm:text-[1.7rem]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/75 sm:text-base">
                    {project.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm">
                        <span
                          className="mt-1.5 h-2.5 w-2.5 shrink-0 border-2 border-black bg-brand"
                          aria-hidden="true"
                        />
                        <span className="text-black/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* stack sheet */}
                  <div className="mt-6 mb-7 border-t-2 border-dashed border-black/30 pt-5">
                    <p className="font-mono text-[0.65rem] font-bold tracking-[0.16em] text-black/50 uppercase">
                      Built with
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li key={tech}>
                          <Chip>{tech}</Chip>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-auto inline-flex w-fit items-center gap-2 self-start border-2 border-black bg-white px-4 py-2.5 font-mono text-xs font-bold tracking-[0.12em] uppercase shadow-brutal-xs transition-colors hover:bg-brand hover:text-white"
                  >
                    <Github className="h-4 w-4" strokeWidth={2.5} />
                    View source
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
