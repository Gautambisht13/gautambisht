/**
 * Generates public/Gautam-Singh-CV.pdf from the portfolio content.
 * Run with: node scripts/generate-cv.mjs
 *
 * Writes the PDF by hand (Helvetica base-14 fonts, no dependencies) so the
 * download button works out of the box. Replace the output file with a
 * designed CV whenever you have one.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const PAGE_W = 595.28; // A4
const PAGE_H = 841.89;
const MARGIN = 52;
const CONTENT_W = PAGE_W - MARGIN * 2;

const PURPLE = [0.494, 0.227, 0.949];
const BLACK = [0, 0, 0];
const GREY = [0.36, 0.36, 0.36];

const ops = [];
let y = PAGE_H - MARGIN;

const esc = (s) =>
  s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

/** Rough Helvetica advance width, good enough for line wrapping. */
const widthOf = (text, size, bold) => text.length * size * (bold ? 0.54 : 0.5);

function setFill([r, g, b]) {
  ops.push(`${r} ${g} ${b} rg`);
}

function text(str, { size = 9.5, bold = false, x = MARGIN, color = BLACK } = {}) {
  setFill(color);
  ops.push(
    "BT",
    `/${bold ? "F2" : "F1"} ${size} Tf`,
    `1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm`,
    `(${esc(str)}) Tj`,
    "ET",
  );
}

function paragraph(str, { size = 9.5, bold = false, x = MARGIN, color = BLACK, lead = 13, maxWidth = CONTENT_W } = {}) {
  const words = str.split(" ");
  let line = "";
  const lines = [];
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (widthOf(candidate, size, bold) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);

  for (const l of lines) {
    text(l, { size, bold, x, color });
    y -= lead;
  }
}

function rule(color = PURPLE, thickness = 2) {
  setFill(color);
  ops.push(
    `${MARGIN} ${(y - 2).toFixed(2)} ${CONTENT_W} ${thickness} re`,
    "f",
  );
  y -= 16;
}

function heading(label) {
  y -= 8;
  text(label.toUpperCase(), { size: 11, bold: true, color: PURPLE });
  y -= 6;
  setFill(BLACK);
  ops.push(`${MARGIN} ${(y - 1).toFixed(2)} ${CONTENT_W} 1 re`, "f");
  y -= 15;
}

function bullet(str) {
  setFill(PURPLE);
  ops.push(`${MARGIN} ${(y - 1).toFixed(2)} 4 4 re`, "f");
  paragraph(str, { x: MARGIN + 12, maxWidth: CONTENT_W - 12 });
}

function entry(title, meta, detail) {
  text(title, { size: 10.5, bold: true });
  const titleW = widthOf(title, 10.5, true);
  text(meta, { size: 9, x: MARGIN + titleW + 10, color: GREY });
  y -= 13;
  if (detail) paragraph(detail, { color: GREY });
}

/* ------------------------------------------------------------------ content */
text("GAUTAM SINGH", { size: 26, bold: true });
y -= 24;
text("Frontend Developer — React & TypeScript", { size: 11, color: PURPLE });
y -= 15;
text(
  "gautamxworld@gmail.com  ·  Dehradun, Uttarakhand  ·  github.com/Gautambisht13  ·  linkedin.com/in/gautamsingh7",
  { size: 8.5, color: GREY },
);
y -= 12;
rule();

heading("Profile");
paragraph(
  "Frontend Developer specializing in React and TypeScript, building responsive, scalable UIs and high-performance web applications. Currently completing a BCA at ITM Dehradun.",
);

heading("Skills");
const skills = [
  ["Languages", "JavaScript, TypeScript, Python, SQL, HTML/CSS, C++"],
  ["Frameworks & Libraries", "React, Next.js, Node.js, Express, Tailwind CSS"],
  ["Tools & Platforms", "Git, PostgreSQL, MongoDB, REST APIs, CI/CD, GitHub Copilot"],
];
for (const [label, list] of skills) {
  text(`${label}:`, { size: 9.5, bold: true });
  const labelW = widthOf(`${label}:`, 9.5, true);
  paragraph(list, { x: MARGIN + labelW + 8, maxWidth: CONTENT_W - labelW - 8 });
  y -= 2;
}

heading("Projects");
entry(
  "Nike-Style E-Commerce Platform",
  "Next.js · TypeScript · Tailwind CSS · Devin AI · PostgreSQL",
);
bullet("Responsive, high-performance frontend built on reusable UI components.");
bullet("AI-assisted development workflow using Devin AI.");
y -= 8;
entry("Prescripto — Healthcare Portal", "MERN Stack");
bullet("Patient registration, appointment scheduling and a doctor portal.");
bullet("Optimized MongoDB indexing and relational schema modeling.");

heading("Education");
entry(
  "ITM Dehradun",
  "2023 — 2026",
  "Bachelor of Computer Applications (BCA)",
);
y -= 4;
entry(
  "Saigrace Academy International",
  "2022 — 2023",
  "Class XII — Physics, Chemistry, Mathematics",
);

heading("Certifications");
bullet("Machine Learning — Stanford Online (2026)");
bullet("Gemini Certified University Student — Google (2025)");

/* -------------------------------------------------------------- assembly */
const stream = ops.join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>`,
  `<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  "<< /Type /Info /Title (Gautam Singh - Frontend Developer CV) /Author (Gautam Singh) >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [];
objects.forEach((body, index) => {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const offset of offsets) {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info ${objects.length} 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

const out = join(ROOT, "public", "Gautam-Singh-CV.pdf");
mkdirSync(join(ROOT, "public"), { recursive: true });
writeFileSync(out, Buffer.from(pdf, "latin1"));
console.log(`Wrote ${out} (${(Buffer.byteLength(pdf, "latin1") / 1024).toFixed(1)} KB)`);
