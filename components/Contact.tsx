import { Mail, MapPin, ArrowUp } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { Eyebrow } from "@/components/Primitives";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contact" className="px-4 pt-8 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="border-4 border-black bg-brand p-6 text-white shadow-brutal-lg sm:p-10 lg:p-14">
              <Eyebrow tone="dark">Contact</Eyebrow>

              <h2 className="mt-6 max-w-3xl text-[clamp(2rem,7vw,4rem)] leading-[0.92] uppercase">
                Got something to build? Let&apos;s talk.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                Send over the details — what you&apos;re building, the stack, and
                your timeline. I read every message and reply within a day or
                two.
              </p>

              <div className="mt-10 grid gap-6 border-t-2 border-white/40 pt-8 sm:grid-cols-2">
                <div>
                  <p className="flex items-center gap-2 font-mono text-[0.65rem] font-bold tracking-[0.16em] uppercase">
                    <Mail className="h-3.5 w-3.5" strokeWidth={2.5} />
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-2 inline-block font-display text-xl font-bold break-all underline decoration-2 underline-offset-4 transition-colors hover:text-black sm:text-2xl"
                  >
                    {profile.email}
                  </a>
                </div>

                <div>
                  <p className="flex items-center gap-2 font-mono text-[0.65rem] font-bold tracking-[0.16em] uppercase">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} />
                    Location
                  </p>
                  <p className="mt-2 font-display text-xl font-bold sm:text-2xl">
                    {profile.location}
                  </p>
                </div>
              </div>

              <ul className="mt-10 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  const isDownload = social.href === profile.cv;

                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        {...(isDownload
                          ? { download: true }
                          : social.href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer noopener" }
                            : {})}
                        className="press inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2.5 font-mono text-xs font-bold tracking-[0.12em] text-black uppercase shadow-brutal-sm hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-black hover:text-white hover:shadow-none"
                      >
                        <Icon className="h-4 w-4" strokeWidth={2.5} />
                        {social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t-4 border-black bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-mono text-[0.7rem] font-bold tracking-[0.12em] uppercase">
            © {year} {profile.name}
          </p>
          <p className="font-mono text-[0.7rem] tracking-[0.12em] text-black/60 uppercase">
            Built with Next.js &amp; Tailwind CSS
          </p>
          <a
            href="#top"
            className="press inline-flex w-fit items-center gap-2 border-2 border-black bg-white px-3 py-2 font-mono text-[0.7rem] font-bold tracking-[0.12em] uppercase shadow-brutal-xs hover:bg-brand hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
        </div>
      </footer>
    </>
  );
}
