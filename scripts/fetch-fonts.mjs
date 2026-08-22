/**
 * Refreshes the self-hosted latin font subsets in app/fonts.
 * Run with: npm run fonts
 *
 * Uses curl rather than fetch on purpose — on machines behind a TLS-inspecting
 * proxy, Node rejects Google's certificate while curl uses the system store.
 */
import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const FONT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "app", "fonts");

const FILES = [
  {
    name: "SpaceGrotesk-Variable.woff2",
    url: "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2",
  },
  {
    name: "IBMPlexSans-Variable.woff2",
    url: "https://fonts.gstatic.com/s/ibmplexsans/v23/zYXzKVElMYYaJe8bpLHnCwDKr932-G7dytD-Dmu1syxeKYY.woff2",
  },
  {
    name: "IBMPlexMono-400.woff2",
    url: "https://fonts.gstatic.com/s/ibmplexmono/v20/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2",
  },
  {
    name: "IBMPlexMono-500.woff2",
    url: "https://fonts.gstatic.com/s/ibmplexmono/v20/-F6qfjptAgt5VM-kVkqdyU8n3twJwlBFgg.woff2",
  },
  {
    name: "IBMPlexMono-700.woff2",
    url: "https://fonts.gstatic.com/s/ibmplexmono/v20/-F6qfjptAgt5VM-kVkqdyU8n3pQPwlBFgg.woff2",
  },
];

mkdirSync(FONT_DIR, { recursive: true });

let failed = 0;
for (const file of FILES) {
  const target = join(FONT_DIR, file.name);
  const result = spawnSync(
    "curl",
    ["-fsS", "--max-time", "60", "-o", target, file.url],
    { stdio: "inherit" },
  );

  if (result.status === 0) {
    console.log(`ok   ${file.name}`);
  } else {
    failed += 1;
    console.error(`fail ${file.name}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} font(s) failed to download.`);
  process.exit(1);
}
console.log(`\nWrote ${FILES.length} fonts to app/fonts`);
