import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Boxes,
  Wrench,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";

export const profile = {
  name: "Gautam Singh",
  role: "Frontend Developer",
  email: "gautamxworld@gmail.com",
  location: "Dehradun, Uttarakhand",
  github: "https://github.com/Gautambisht13",
  linkedin: "https://www.linkedin.com/in/gautamsingh7/",
  cv: "/Gautam-Singh-CV.pdf",
  headline: ["ELEVATE", "YOUR", "BRAND"],
  subheading:
    "Frontend Developer specializing in React and TypeScript, building responsive, scalable UIs and high-performance web applications.",
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* Badges that cling to the porthole frame. `orbit` positions each one against
   the window's rim — flush on small screens, overhanging from sm up, so the
   decoration never pushes the page into horizontal scroll. */
export const orbitBadges = [
  { label: "React", orbit: "left-0 top-[14%] sm:left-[-4%]", delay: "0s" },
  {
    label: "TypeScript",
    orbit: "right-0 top-[30%] sm:right-[-6%]",
    delay: "0.7s",
  },
  {
    label: "Next.js",
    orbit: "left-0 bottom-[26%] sm:left-[-7%]",
    delay: "1.4s",
  },
  {
    label: "Tailwind",
    orbit: "right-0 bottom-[12%] sm:right-[-3%]",
    delay: "2.1s",
  },
  {
    label: "Node.js",
    orbit: "left-[20%] bottom-[4%] sm:bottom-[-4%]",
    delay: "2.8s",
  },
] as const;

export const tickerItems = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Git",
  "CI/CD",
];

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  caption: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Braces,
    caption: "What I write in",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Boxes,
    caption: "What I build with",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    caption: "What I ship with",
    items: [
      "Git",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "CI/CD",
      "GitHub Copilot",
    ],
  },
];

export const projects = [
  {
    category: "E-Commerce",
    title: "Nike-Style E-Commerce Platform",
    summary:
      "A responsive, high-performance storefront built on a library of reusable UI components, with an AI-assisted workflow driving the build.",
    highlights: [
      "Reusable component library for product, cart, and checkout surfaces",
      "Performance-focused rendering with Next.js and TypeScript",
      "AI-assisted development workflow using Devin AI",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Devin AI", "PostgreSQL"],
  },
  {
    category: "Healthcare",
    title: "Prescripto — Healthcare Portal",
    summary:
      "A MERN-stack portal covering patient registration, appointment scheduling, and a dedicated doctor view over a modelled relational schema.",
    highlights: [
      "Patient registration and appointment scheduling flows",
      "Doctor portal for managing incoming appointments",
      "Optimized MongoDB indexing and relational schema modeling",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
];

export const education = [
  {
    period: "2023 — 2026",
    institution: "ITM Dehradun",
    qualification: "Bachelor of Computer Applications (BCA)",
  },
  {
    period: "2022 — 2023",
    institution: "Saigrace Academy International",
    qualification: "Class XII — Physics, Chemistry, Mathematics",
  },
];

export const certifications = [
  { year: "2026", title: "Machine Learning", issuer: "Stanford Online" },
  {
    year: "2025",
    title: "Gemini Certified University Student",
    issuer: "Google",
  },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Download CV", href: profile.cv, icon: Download },
];
