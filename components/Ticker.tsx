import { tickerItems } from "@/lib/data";

/** Full-bleed marquee of the working stack. Duplicated once so the -50%
    translation loops without a visible seam. */
export default function Ticker() {
  return (
    <div className="ticker-mask overflow-hidden border-y-4 border-black bg-black py-3">
      <div className="animate-ticker flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex w-max shrink-0 items-center"
          >
            {tickerItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-5 px-5 font-mono text-xs font-bold tracking-[0.18em] whitespace-nowrap text-white uppercase sm:text-sm"
              >
                {item}
                <span className="text-brand" aria-hidden="true">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
