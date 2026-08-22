/**
 * Retro-space illustration set for the hero porthole.
 * Flat vector, thick black strokes, purple accents — drawn to sit inside the
 * same visual rules as the rest of the page rather than as imported clip art.
 * Limbs are a black stroke with a narrower white stroke laid on top, which
 * gives an outlined tube without needing outline paths.
 */

const INK = "#000000";
const WHITE = "#ffffff";
const BRAND = "#7e3af2";
const VOID = "#0b0b14";
const PAPER = "#f4f4f0";

/* Floating pose: one arm raised, knees bent. Reads as weightless at a glance,
   where a symmetrical standing figure reads as a robot. */
const ARM_UP = "M204 180C240 174 258 152 268 118";
const ARM_DOWN = "M116 184C80 198 60 226 50 262";
const LEG_LEFT = "M134 248C112 274 100 300 116 342";
const LEG_RIGHT = "M186 248C210 272 220 296 200 342";

export function Astronaut({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 400"
      className={className}
      role="img"
      aria-label="Illustration of an astronaut floating in space"
    >
      {/* tether trailing back toward the station */}
      <path
        d="M226 206C272 218 292 250 306 292"
        fill="none"
        stroke={INK}
        strokeWidth={11}
        strokeLinecap="round"
      />
      <path
        d="M226 206C272 218 292 250 306 292"
        fill="none"
        stroke={WHITE}
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="9 9"
      />

      {/* life-support pack, sized to sit proud of the torso on every edge */}
      <rect
        x={92}
        y={140}
        width={136}
        height={112}
        rx={22}
        fill={BRAND}
        stroke={INK}
        strokeWidth={5}
      />

      {/* limbs — black tube first, white fill on top */}
      <g fill="none" strokeLinecap="round">
        <path d={ARM_UP} stroke={INK} strokeWidth={32} />
        <path d={ARM_DOWN} stroke={INK} strokeWidth={32} />
        <path d={LEG_LEFT} stroke={INK} strokeWidth={40} />
        <path d={LEG_RIGHT} stroke={INK} strokeWidth={40} />
        <path d={ARM_UP} stroke={WHITE} strokeWidth={22} />
        <path d={ARM_DOWN} stroke={WHITE} strokeWidth={22} />
        <path d={LEG_LEFT} stroke={WHITE} strokeWidth={29} />
        <path d={LEG_RIGHT} stroke={WHITE} strokeWidth={29} />
      </g>

      {/* suit joint rings at elbow and knee */}
      <path
        d="M243 166 254 178M77 208l16 15M97 288l24 12M199 286l24-12"
        stroke={INK}
        strokeWidth={4}
        strokeLinecap="round"
      />

      {/* gloves */}
      <circle cx={270} cy={112} r={19} fill={BRAND} stroke={INK} strokeWidth={5} />
      <circle cx={48} cy={266} r={19} fill={BRAND} stroke={INK} strokeWidth={5} />

      {/* boots */}
      <rect
        x={90}
        y={338}
        width={52}
        height={34}
        rx={11}
        fill={BRAND}
        stroke={INK}
        strokeWidth={5}
      />
      <rect
        x={174}
        y={338}
        width={52}
        height={34}
        rx={11}
        fill={BRAND}
        stroke={INK}
        strokeWidth={5}
      />

      {/* torso */}
      <rect
        x={110}
        y={150}
        width={100}
        height={104}
        rx={28}
        fill={WHITE}
        stroke={INK}
        strokeWidth={5}
      />
      {/* pack straps, which also explain the purple behind the shoulders */}
      <path d="M126 152v100M194 152v100" stroke={INK} strokeWidth={4} />

      {/* chest control panel */}
      <rect
        x={132}
        y={186}
        width={56}
        height={38}
        rx={6}
        fill={PAPER}
        stroke={INK}
        strokeWidth={4}
      />
      <rect x={139} y={194} width={10} height={10} fill={BRAND} />
      <rect x={155} y={194} width={10} height={10} fill={INK} />
      <rect x={171} y={194} width={10} height={10} fill={BRAND} />
      <path d="M139 214h42" stroke={INK} strokeWidth={4} strokeLinecap="round" />

      {/* neck ring */}
      <rect
        x={138}
        y={130}
        width={44}
        height={26}
        rx={8}
        fill={WHITE}
        stroke={INK}
        strokeWidth={5}
      />

      {/* helmet and visor */}
      <circle cx={160} cy={88} r={58} fill={WHITE} stroke={INK} strokeWidth={5} />
      <rect
        x={120}
        y={54}
        width={80}
        height={64}
        rx={30}
        fill={VOID}
        stroke={INK}
        strokeWidth={5}
      />
      {/* two streaks of light across the glass */}
      <path d="M141 110 159 62h9l-18 48z" fill={BRAND} opacity={0.9} />
      <path d="M173 100 186 66h5l-13 34z" fill={BRAND} opacity={0.55} />
      <circle cx={186} cy={108} r={2.5} fill={WHITE} />

      {/* antenna */}
      <path d="M198 50 216 32" stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <circle cx={220} cy={28} r={8} fill={BRAND} stroke={INK} strokeWidth={4} />
    </svg>
  );
}

/** Ringed planet anchored in the corner of the porthole. */
export function Planet({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <circle cx={72} cy={58} r={38} fill={BRAND} stroke={INK} strokeWidth={5} />
      <path
        d="M44 44c14 6 34 8 54 4M40 68c18 8 40 8 62 0"
        stroke={INK}
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />
      <ellipse
        cx={74}
        cy={62}
        rx={68}
        ry={20}
        fill="none"
        stroke={INK}
        strokeWidth={5}
        transform="rotate(-14 74 62)"
      />
    </svg>
  );
}

/* Fixed coordinates — a seeded layout keeps server and client markup identical. */
const STARS = [
  { x: 12, y: 18, r: 2.5, d: "0s" },
  { x: 28, y: 9, r: 1.8, d: "0.6s" },
  { x: 46, y: 22, r: 2.2, d: "1.2s" },
  { x: 68, y: 12, r: 1.6, d: "0.3s" },
  { x: 86, y: 26, r: 2.6, d: "1.8s" },
  { x: 8, y: 46, r: 1.7, d: "2.4s" },
  { x: 92, y: 52, r: 2, d: "0.9s" },
  { x: 18, y: 72, r: 2.4, d: "1.5s" },
  { x: 40, y: 88, r: 1.5, d: "2.1s" },
  { x: 62, y: 78, r: 2.1, d: "0.45s" },
  { x: 80, y: 90, r: 1.9, d: "1.05s" },
  { x: 54, y: 46, r: 1.4, d: "2.7s" },
];

const CROSSES = [
  { x: 34, y: 62, d: "0.8s" },
  { x: 74, y: 36, d: "2.2s" },
];

/** Twinkling starfield laid over the void panel. */
export function Starfield({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      {STARS.map((star) => (
        <span
          key={`${star.x}-${star.y}`}
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.r * 2}px`,
            height: `${star.r * 2}px`,
            animationDelay: star.d,
          }}
        />
      ))}
      {CROSSES.map((cross) => (
        <span
          key={`${cross.x}-${cross.y}`}
          className="animate-twinkle absolute font-mono text-lg leading-none text-brand"
          style={{
            left: `${cross.x}%`,
            top: `${cross.y}%`,
            animationDelay: cross.d,
          }}
        >
          +
        </span>
      ))}
    </div>
  );
}
