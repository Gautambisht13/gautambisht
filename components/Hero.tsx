import { Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import { Astronaut, Planet, Starfield } from "@/components/Astronaut";
import { orbitBadges, profile } from "@/lib/data";

const telemetry = [
  { label: "Role", value: "Frontend Developer" },
  { label: "Core stack", value: "React · TypeScript" },
  { label: "Based in", value: "Dehradun, IN" },
];

export default function Hero() {
  return (
    <section id="top" className="px-4 pt-10 pb-14 sm:px-6 md:pt-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ---------------------------------------------------------------- */}
        <div className="reveal" data-visible="true">
          <span className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1.5 font-mono text-[0.7rem] font-bold tracking-[0.16em] uppercase shadow-brutal-xs">
            <span className="h-2 w-2 animate-blink bg-brand" />
            Open to new projects
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,11vw,6rem)] leading-[0.86] tracking-[-0.04em] uppercase">
            <span className="block">Hey</span>
            <span className="block">there, it's</span>
            <span className="mt-2 inline-block -rotate-1 border-4 border-black bg-brand px-3 text-white shadow-brutal sm:px-4">
              Gautam
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-black/75 sm:text-lg">
            {profile.subheading}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="press inline-flex items-center gap-2 border-2 border-black bg-black px-5 py-3 font-mono text-xs font-bold tracking-[0.12em] text-white uppercase shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none sm:text-sm"
            >
              <Github className="h-4 w-4" strokeWidth={2.5} />
              View GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="press inline-flex items-center gap-2 border-2 border-black bg-white px-5 py-3 font-mono text-xs font-bold tracking-[0.12em] uppercase shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-wash hover:shadow-none sm:text-sm"
            >
              <Linkedin className="h-4 w-4" strokeWidth={2.5} />
              LinkedIn
            </a>
            <a
              href={profile.cv}
              download
              className="press inline-flex items-center gap-2 border-2 border-black bg-brand px-5 py-3 font-mono text-xs font-bold tracking-[0.12em] text-white uppercase shadow-brutal-sm hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none sm:text-sm"
            >
              <Download className="h-4 w-4" strokeWidth={2.5} />
              Download CV
            </a>
          </div>

          {/* factual readout rather than invented metrics */}
          <dl className="mt-10 grid border-2 border-black bg-white shadow-brutal-sm sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
            {telemetry.map((item) => (
              <div
                key={item.label}
                className="border-b-2 border-black px-4 py-3 last:border-b-0 sm:border-b-0"
              >
                <dt className="font-mono text-[0.65rem] font-bold tracking-[0.16em] text-brand uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 font-display text-sm font-bold sm:text-base">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ------------------------- the porthole ------------------------- */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square overflow-hidden border-4 border-black bg-void shadow-brutal-lg">
            <Starfield className="absolute inset-0" />

            {/* porthole ring */}
            <div className="absolute inset-[9%] rounded-full border-2 border-dashed border-white/25" />
            <div className="absolute inset-[16%] rounded-full border-2 border-brand/40" />

            <Planet className="animate-drift absolute -bottom-6 -left-8 w-32 opacity-95 sm:-left-10 sm:w-52" />

            {/* a purple wash so the figure's black outlines read against the void */}
            <div
              className="absolute top-1/2 left-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(126,58,242,0.32),transparent_68%)]"
              aria-hidden="true"
            />

            <Astronaut className="animate-float-slow absolute top-1/2 left-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2" />

            {/* mission-control label */}
            <div className="absolute top-3 left-3 flex items-center gap-2 border-2 border-black bg-white px-2.5 py-1 font-mono text-[0.6rem] font-bold tracking-[0.14em] uppercase">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-brand" />
              Live feed · EVA-01
            </div>
            {/* decorative readout — dropped on the narrowest screens, where the
                skill badges need the room */}
            <div className="absolute right-3 bottom-3 hidden border-2 border-black bg-brand px-2.5 py-1 font-mono text-[0.6rem] font-bold tracking-[0.14em] text-white uppercase sm:block">
              Alt 408 km
            </div>

            {/* rivets */}
            <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-white/70" />
            <span className="absolute bottom-2 left-2 h-2.5 w-2.5 bg-white/70" />
          </div>

          {/* floating skill badges, clinging to the window frame */}
          {orbitBadges.map((badge) => (
            <span
              key={badge.label}
              style={{ animationDelay: badge.delay }}
              className={`press animate-float-badge absolute z-10 cursor-default border-2 border-black bg-white px-3 py-1.5 font-mono text-[0.7rem] font-bold tracking-wide shadow-brutal-sm hover:scale-105 hover:bg-brand hover:text-white sm:text-xs ${badge.orbit}`}
            >
              {badge.label}
            </span>
          ))}

          <a
            href="#projects"
            className="press mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.14em] uppercase underline decoration-2 underline-offset-4 hover:text-brand lg:hidden"
          >
            See the work
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
